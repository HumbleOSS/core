"reach 0.1";

import { triumvirate } from "TRI.rsh";
import { staker200 } from "./staker.rsh";

// INTERFACE SELECTORS

// INTERFACE_SELECTOR_ARC200 c7bea040
// arc200_transfer(address,uint256)bool da7025b9
// arc200_transferFrom(address,address,uint256)bool 4a968f8f
// arc200_approve(address,uint256)bool b5422125
// arc200_name()byte[32] 657d13ec
// arc200_symbol()byte[8] b6ae1a25
// arc200_decimals()uint8 84ec13d5
// arc200_totalSupply()uint256 ec996041
// arc200_balanceOf(address)uint256 82e573c4
// arc200_allowance(address,address)uint256 bbb319f3
// arc200_Transfer(address,address,uint256) 7983c35c
// arc200_Approval(address,address,uint256) 1969f865
const INTERFACE_SELECTOR_ARC200 = "0xc7bea040";

export const supportsInterface = (interfaces) => (interfaceSelector) => {
  return interfaces.includes(interfaceSelector);
};

//'use strict';
// ^ We don't use this because of dynamic typing.
const verifyArithmetic = false;
// ^ Too expensive in verification and execution time
// ^ We don't know if it passes either
const checkTheBigOne = false;
// ^ Makes verification take a lot longer, but it does work.

// SHARED

const hasBoxOp = Data({
  Balance: Address,
  Allowance: Tuple(Address, Address),
});

const feePrecision = UInt256(10_000);

const MUInt256 = Maybe(UInt256);

const min = (a, b) => (a < b ? a : b);

const max = (a, b) => (a > b ? a : b);

const checkV = verifyArithmetic
  ? check
  : (...args) => {
      void args;
    };

const chkAdd = (a, b) => {
  checkV(UInt256.max - a >= b);
  return a + b;
};

const chkSub = (a, b) => {
  checkV(a >= b);
  return a - b;
};

const chkMul = (a, b, f = checkV) => {
  f(a <= UInt256.max / (b == UInt256(0) ? UInt256(1) : b));
  return a * b;
};

const chkMulDiv = (x, y, z) => {
  checkV(z != UInt256(0));
  if (verifyArithmetic) {
    verifyMuldiv(x, y, z);
  }
  //return muldiv(x, y, z);
  return (x * y) / z;
};

const ProtocolInfo = Struct([
  ["protoFee", UInt256],
  ["lpFee", UInt256],
  ["totFee", UInt256],
  ["protoAddr", Address],
  ["locked", Bool],
]);

const PS = ProtocolInfo.fromObject;

const PO = ProtocolInfo.toObject;

const Bals = Struct([
  ["A", UInt256],
  ["B", UInt256],
]);

const BS = Bals.fromObject;

const abz = { A: UInt256(0), B: UInt256(0) };
const az = (B) => ({ A: UInt256(0), B });
const bz = (A) => ({ A, B: UInt256(0) });

const zero = ({ A, B }) => A == UInt256(0) && B == UInt256(0);

const lptBalsR_ = (lptBals) => ({ lpHeld: lptBals.A, lpMinted: lptBals.B });
const lptBalsW_ = ({ lpHeld, lpMinted }) => ({ A: lpHeld, B: lpMinted });

const balsF2 = (F) => (b1, b2) => ({
  A: F(b1.A, b2.A),
  B: F(b1.B, b2.B),
});

const balsAdd = balsF2(chkAdd);

const balsSub = balsF2(chkSub);

const balsLte = (b1, b2) => b1.A <= b2.A && b1.B <= b2.B;

const computeK = ({ A, B }) => A * B;

const balsMulDiv = (x, { A, B }, z) => ({
  A: chkMulDiv(x, A, z),
  B: chkMulDiv(x, B, z),
});

// ---

// calcAmtOut
const calcAmtOut = (amtIn, reserveIn, reserveOut, totFee) => {
  const tenK_b = feePrecision;
  const reserveOut_b = reserveOut;
  const reserveIn_b = reserveIn;
  const amtInFee_b = amtIn * (feePrecision - totFee);
  const reserveInScaled_b = reserveIn_b * tenK_b;
  const reserveInPFee_b = reserveInScaled_b + amtInFee_b;
  const yesFeeOut_b = (amtInFee_b * reserveOut_b) / reserveInPFee_b;
  // This guy is the most important theorem... this is ensure that we won't
  // crash when computing fees
  if (checkTheBigOne) {
    assert(yesFeeOut_b <= UInt256.max);
  }
  return yesFeeOut_b;
};

// Proof that this function produces the correct `amtIn` needed:
// https://docs.google.com/spreadsheets/d/1jAGg5XsfJsyv8YNfVQs4OTaPzYGfhc6UI02o0O8GIBk/edit?usp=sharing

// The `+ 1` on `yesFeeIn` is needed because natural numbers get rounded down.
// This addition prevents people from paying less than an `amtOut` is worth.
const calcAmtIn = (amtOut, reserveOut, reserveIn, totFee) => {
  const reserveOutP_b = reserveOut - amtOut;
  const reserveIn_b = reserveIn;
  const amtOutFee_b = amtOut * (feePrecision + totFee);
  const resOutPFee_b = reserveOutP_b * feePrecision;
  const yesFeeIn_b = (amtOutFee_b * reserveIn_b) / resOutPFee_b;
  // This guy is the most important theorem... this is ensure that we won't
  // crash when computing fees
  if (checkTheBigOne) {
    assert(yesFeeIn_b <= UInt256.max - UInt256(1));
  }
  const yesFeeIn = yesFeeIn_b + UInt256(1);
  return yesFeeIn;
};

//export const calcAmtIn_ = is(calcAmtIn, Fun([UInt, UInt, UInt, UInt], UInt));

const computeAmtInAndOut = (
  amtIn,
  mExactOut,
  reserveIn,
  reserveOut,
  totFee
) => {
  return mExactOut.match({
    Some: (amtOut) => {
      const yesFeeIn = calcAmtIn(amtOut, reserveOut, reserveIn, totFee);
      check(amtIn >= yesFeeIn, "provided enough funds to receive amt out");
      return [yesFeeIn, amtOut, amtIn - yesFeeIn];
    },
    None: () => {
      const yesFeeOut = calcAmtOut(amtIn, reserveIn, reserveOut, totFee);
      return [amtIn, yesFeeOut, UInt256(0)];
    },
  });
};

const computeSwap1 = (amtIn, mExactOut, reserveIn, reserveOut, protoInfo) => {
  const { protoFee, totFee } = protoInfo;

  // Figure out the amount with a fee
  const [yesFeeIn, yesFeeOut, leftoverIn] = computeAmtInAndOut(
    amtIn,
    mExactOut,
    reserveIn,
    reserveOut,
    totFee
  );

  // Not using MulDiv, because we know everything is small
  const protoFeePct = (protoFee * UInt256(100)) / totFee;
  //chkMul(protoFee_, UInt256(100), assert) / totFee_;
  // ^ assert(a * b <= UInt256.max)

  //assert(protoFeePct <= UInt256(100));

  const calcProtoFee_ = (amt) => chkMulDiv(amt, protoFeePct, UInt256(100));
  // ^ protoFee_ = amt * pct / 100, where 0 <= pct <= 100

  const reserveInP = chkAdd(reserveIn, yesFeeIn);

  // Turn an "in" amt to an "out" amount using the new exchange rate.
  const inToOutNew = (xIn) => chkMulDiv(xIn, reserveOut, reserveInP);

  // Compute the no-fee swap based on the NEW exchange rate
  // ... so this is LIKE doing the computation with the fees set to 0
  const noFeeOut = inToOutNew(yesFeeIn);

  // We subtract yesFee from the noFee to get the Fee, rather than trying to
  // compute the fee directly so that we don't lose any money with rounding
  //const feeOut = chkSub(noFeeOut, yesFeeOut);
  const feeOut = noFeeOut - yesFeeOut;

  const protoFeeOut = calcProtoFee_(feeOut);

  // We know that this will not overflow because protoFee is small
  //const protoFeeIn = chkMulDiv(yesFeeIn, protoFee, UInt256(10_000)); // feePrecision
  const protoFeeIn = (yesFeeIn * protoFee) / UInt256(10_000); // feePrecision

  // Normalize the fees to the same unit
  const protoFeeInNormal = inToOutNew(protoFeeIn);
  const protoFeeOutNormal = protoFeeOut;

  // The protocol gets whatever fee is worth more
  const poolToProto =
    protoFeeInNormal > protoFeeOutNormal
      ? [protoFeeIn, UInt256(0)]
      : [UInt256(0), protoFeeOut];

  return [yesFeeOut, leftoverIn, poolToProto, yesFeeIn];
};

// computeSwap
// - computes swap based on parameters
// - returns
// + [Bals, Bals, Bool]
// ++ Bals outX leftOverY
// ++ Bals new poolBals ???
// ++ Bool
const computeSwap = (AforB, normalIn, mExactOut, poolBals, protoInfo) => {
  if (AforB) {
    check(normalIn.B == UInt256(0));
    const [outB, leftOverA, [poolToProtoA, poolToProtoB], yesFeeIn] =
      computeSwap1(normalIn.A, mExactOut, poolBals.A, poolBals.B, protoInfo);
    return [
      { A: leftOverA, B: outB },
      { A: poolToProtoA, B: poolToProtoB },
      yesFeeIn,
    ];
  } else {
    check(normalIn.A == UInt256(0));
    const [outA, leftOverB, [poolToProtoB, poolToProtoA], yesFeeIn] =
      computeSwap1(normalIn.B, mExactOut, poolBals.B, poolBals.A, protoInfo);
    return [
      { A: outA, B: leftOverB },
      { A: poolToProtoA, B: poolToProtoB },
      yesFeeIn,
    ];
  }
};

//export const computeSwap_ = is((a4b, x, y, z) => {
//  check(UInt.max > feePrecision);
//  const [a, b, _] = computeSwap(a4b, x, MInt.None(), y, z, false);
//  return [BS(a), BS(b)];
//}, Fun([Bool, Bals, Bals, ProtocolInfoInv], Tuple(Bals, Bals)));

// computeMint0
// - compute mint amount for first time
const computeMint0 = (inA, inB) => {
  const sqr = inA * inB;
  const mint = sqrt(sqr);
  // inA could be UInt256.max and so could inB
  // So, then this must be UInt256.max or smaller.
  return mint;
};

// computeMint1
// - compute mint amount after fist time
const computeMint1 = (lpMinted, inA, inB, poolBals) => {
  const { A: balA, B: balB } = poolBals;
  const mintA = chkMulDiv(inA, lpMinted, balA);
  // mintA = (inA/balA) * lpMinted
  // ^ The percentage of how much is available
  const mintB = chkMulDiv(inB, lpMinted, balB);
  return min(mintA, mintB);
};

// computeMint
// - compute mint based incoming amount, amaount in pool
//   and liquidity already minted
const computeMintHelper = (poolBals, lptBals) => (inBals) => {
  const { A: inA, B: inB } = inBals;
  const { lpMinted } = lptBalsR_(lptBals);
  if (lpMinted == UInt256(0)) {
    return computeMint0(inA, inB);
  } else {
    return computeMint1(lpMinted, inA, inB, poolBals);
  }
};

//export const computeMint_ = is(computeMint, Fun([Bals, Bals, Bals], UInt256));

const invFees = ({ protoFee, lpFee, totFee }) =>
  protoFee < UInt256(100) &&
  lpFee < UInt256(100) &&
  totFee == lpFee + protoFee &&
  totFee < UInt256(100) &&
  totFee > UInt256(0);

const chkFees = (x) => check(invFees(x));
const ProtocolInfoInv = Refine(ProtocolInfo, invFees);

const ProtocolI = (TokenT) => ({
  register: Fun([Contract, TokenT, TokenT], ProtocolInfoInv),
});

const PoolI = {
  Protocol_harvest: Fun([Address, ProtocolInfoInv], Tuple(Bals, UInt)),
};

//:'######::'##:::::'##::::'###::::'########::
//'##... ##: ##:'##: ##:::'## ##::: ##.... ##:
// ##:::..:: ##: ##: ##::'##:. ##:: ##:::: ##:
//. ######:: ##: ##: ##:'##:::. ##: ########::
//:..... ##: ##: ##: ##: #########: ##.....:::
//'##::: ##: ##: ##: ##: ##.... ##: ##::::::::
//. ######::. ###. ###:: ##:::: ##: ##::::::::
//:......::::...::...:::..:::::..::..:::::::::

const SWAP200 = (TokenT) =>
  Reach.App(() => {
    const supportedInterfaces = [
      Bytes.fromHex(INTERFACE_SELECTOR_ARC200),
      Bytes.fromHex("0x657d13ec"),
    ];
    setOptions({ connectors: [ALGO], verifyArithmetic });
    const MAX_DECIMALS = 256; // decimals fits in UInt8
    const Info = Struct([
      ["lptBals", Bals],
      ["poolBals", Bals],
      ["protoInfo", ProtocolInfo],
      ["protoBals", Bals],
      ["tokB", TokenT],
      ["tokA", TokenT],
    ]);
    // const TokenMeta = Struct([
    //   ["name", Bytes(32)],
    //   ["symbol", Bytes(8)],
    //   ["decimals", UInt],
    //   ["totalSupply", UInt256],
    // ]);
    // const State = Struct([
    //   ...Struct.fields(TokenMeta),
    //   ...Struct.fields(Info),
    //   ["zeroAddress", Address],
    //   ["closed", Bool],
    // ]);
    // const SS = State.fromObject;
    // ARC200 events
    const MintParams = Object({
      name: Bytes(32),
      symbol: Bytes(8),
      //decimals: UInt,
    });
    const SwapParams = Object({
      tokA: TokenT,
      tokB: TokenT,
      proto: Contract,
    });
    const Params = Object({
      zeroAddress: Address,
      meta: MintParams,
      swap: SwapParams,
    });
    const D = Participant("Deployer", {
      params: Params,
      ready: Fun([Contract], Null),
    });
    const ARC200I = {
      arc200_transfer: Fun([Address, UInt256], Bool),
      arc200_transferFrom: Fun([Address, Address, UInt256], Bool),
      arc200_approve: Fun([Address, UInt256], Bool),
    };
    const ARC200E = {
      createBalanceBox: Fun([Address], Null),
      createAllowanceBox: Fun([Address, Address], Null),
    };
    const LT = API({
      ...ARC200I,
      ...ARC200E,
    });
    const Provider = API("Provider", {
      withdraw: Fun([Bool, UInt256, Bals], Bals),
      deposit: Fun([Bool, Bals, UInt256], UInt256),
    });
    const Trader = API("Trader", {
      swapAForB: Fun([Bool, UInt256, UInt256], Bals),
      swapBForA: Fun([Bool, UInt256, UInt256], Bals),
      exactSwapAForB: Fun([Bool, UInt256, UInt256], Bals),
      exactSwapBForA: Fun([Bool, UInt256, UInt256], Bals),
    });
    const Protocol = API({
      ...PoolI,
      Protocol_delete: Fun([], Null),
    });
    const V = View({
      arc200_name: Fun([], Bytes(32)),
      arc200_symbol: Fun([], Bytes(8)),
      arc200_decimals: Fun([], UInt),
      arc200_totalSupply: Fun([], UInt256),
      arc200_balanceOf: Fun([Address], UInt256),
      arc200_allowance: Fun([Address, Address], UInt256),
      Info: Fun([], Info),
      hasBox: Fun([hasBoxOp], Bool),
      // ARC73 Supported View
      supportsInterface: Fun([Bytes(4)], Bool),
    });
    const N = Events({
      arc200_Transfer: [Address, Address, UInt256],
      arc200_Approval: [Address, Address, UInt256],
      HarvestEvent: [ProtocolInfo], //const HarvestEvent = Tuple(ProtocolInfo);
      DepositEvent: [Address, Bals, UInt256, Bals], //const DepositEvent = Tuple(Address, Bals, UInt256, Bals, Bals);
      SwapEvent: [Address, Bals, Bals, Bals], //const SwapEvent = Tuple(Address, Bals, Bals, Bals);
      WithdrawEvent: [Address, UInt256, Bals, Bals], //const WithdrawEvent = Tuple(Address, Bals);
      //FeeEvent: [Bals], // const FeeEvent = Tuple(Bals);
    });
    init();
    const checkInput = (p) => {
      check(UInt256.max > feePrecision); // can be determined statically
      check(p.swap.tokA != p.swap.tokB);
      // check(
      //   p.meta.decimals <= MAX_DECIMALS,
      //   "ARC200: Decimals must be less than max"
      // );
    };

    // TODO initialize with deposit

    D.only(() => {
      const p = declassify(interact.params);
    });
    D.publish(p).check(() => {
      checkInput(p);
    });

    const {
      zeroAddress,
      swap: { tokA, tokB, proto },
      meta,
    } = p;

    // --- protocol ---

    const initialProtoInfo = remote(proto, ProtocolI(TokenT)).register(
      getContract(),
      tokA,
      tokB
    );

    // --- mint ---

    // ARC200 Boxes

    const balances = new Map(UInt256);
    const allowances = new Map(Tuple(Address, Address), UInt256);

    const totalSupply = UInt256.max;
    const decimals = 6;

    balances[getAddress()] = totalSupply;
    balances[zeroAddress] = UInt256(0);

    N.arc200_Transfer(zeroAddress, getAddress(), totalSupply); // show total supply transfered to lpt

    // --- bals ---

    const initialBals = abz;

    const initialLptBals = lptBalsW_({
      lpHeld: totalSupply,
      lpMinted: UInt256(0),
    });

    D.interact.ready(getContract());

    V.arc200_name.set(() => meta.name);
    V.arc200_symbol.set(() => meta.symbol);
    V.arc200_decimals.set(() => decimals);
    V.arc200_totalSupply.set(() => totalSupply);

    const initialState = {
      closed: false,
      lptBals: BS(initialLptBals),
      poolBals: BS(initialBals),
      protoInfo: PS(initialProtoInfo),
      protoBals: BS(initialBals),
    };

    const [s] = parallelReduce([initialState])
      .define(() => {
        const balanceOf = (owner) => {
          const m_bal = balances[owner];
          return fromSome(m_bal, UInt256(0));
        };
        V.arc200_balanceOf.set(balanceOf);
        const allowance = (owner, spender) => {
          const m_bal = allowances[[owner, spender]];
          return fromSome(m_bal, UInt256(0));
        };
        V.arc200_allowance.set(allowance);
        V.hasBox.set((op) => {
          switch (op) {
            case Balance:
              return isSome(balances[op]);
            case Allowance:
              return isSome(allowances[op]);
          }
        });
        const getInfo = () =>
          Info.fromObject({
            lptBals: s.lptBals,
            poolBals: s.poolBals,
            protoInfo: s.protoInfo,
            protoBals: s.protoBals,
            tokB,
            tokA,
          });
        V.Info.set(getInfo);
        V.supportsInterface.set(supportsInterface(supportedInterfaces));
        const isLocked = () => s.protoInfo.locked;
        const lptBalsR = () => lptBalsR_(s.lptBals);
        const lpMod = (hf, mf) => (lp) => {
          const { lpHeld, lpMinted } = lptBalsR();
          return lptBalsW_({
            lpHeld: hf(lpHeld, lp),
            lpMinted: mf(lpMinted, lp),
          });
        };
        const lpIn = lpMod(chkAdd, chkSub);
        const lpOut = lpMod(chkSub, chkAdd);
        const { lpHeld, lpMinted } = lptBalsR();
      })
      .invariant(balance() == 0, "balance accurate")
      .invariant(invFees(s.protoInfo), "protocol fees accurate")
      .invariant(
        totalSupply == lpHeld + lpMinted,
        "lt held and minted matches total supply"
      )
      .invariant(
        implies(
          s.closed,
          isLocked() && lpMinted == 0 && zero(s.poolBals) && zero(s.protoBals)
        ),
        "done accurate"
      )
      .while(!s.closed)
      .define(() => {
        // -----------------------------------------
        // arc200 (internal)
        // -----------------------------------------
        const transfer_ = (from_, to_, value_) => {
          assert(from_ != to_, "ARC200: Transfer to self");
          balances[from_] = balanceOf(from_) - value_;
          balances[to_] = balanceOf(to_) + value_;
          N.arc200_Transfer(from_, to_, value_);
        };
        const chkTransfer = (from_, to_, value_) => {
          check(from_ != to_, "ARC200: Transfer to self");
          check(
            balanceOf(from_) >= value_,
            "ARC200: Transfer amount must not be greater than balance"
          );
        };
        const chkApprove_ = (owner_, spender_, value_) => {
          check(owner_ != zeroAddress, "ARC200: Approve this to zero address");
          check(spender_ != zeroAddress, "ARC200: Approve to zero address");
        };
        const approve_ = (owner_, spender_, value_) => {
          allowances[[owner_, spender_]] = value_;
          N.arc200_Approval(owner_, spender_, value_);
        };
        const chkTransferFrom = (spender_, from_, to_, value_) => {
          check(from_ != to_, "ARC200: Transfer to self");
          check(
            balanceOf(from_) >= value_,
            "ARC200: Amount must not be greater than balance"
          );
          check(
            allowance(from_, spender_) >= value_,
            "ARC200: Amount must not be greater than allowance"
          );
        };
        const transferFrom = (spender_, from_, to_, value_) => {
          transfer_(from_, to_, value_);
          const allowance__ = allowance(from_, spender_) - value_;
          allowances[[from_, spender_]] = allowance__;
          N.arc200_Approval(from_, spender_, allowance__);
        };
      })
      // -----------------------------------------
      // api: transfer
      // - transfer from this to address
      // params:
      // - to
      // - value
      // -----------------------------------------:0
      .api_(LT.arc200_transfer, (to_, value_) => {
        chkTransfer(this, to_, value_);
        return [
          (k) => {
            k(true);
            transfer_(this, to_, value_);
            return [s];
          },
        ];
      })
      // -----------------------------------------
      //  api: transferFrom
      // - transfer from from_ to to_ address
      // params:
      // - from
      // - to
      // - value
      // -----------------------------------------
      .api_(LT.arc200_transferFrom, (from_, to_, value_) => {
        chkTransferFrom(this, from_, to_, value_);
        return [
          (k) => {
            transferFrom(this, from_, to_, value_);
            k(true);
            return [s];
          },
        ];
      })
      // -----------------------------------------
      // api: approve
      // - approve spender to spend value
      // params:
      // - spender
      // - value
      // -----------------------------------------
      .api_(LT.arc200_approve, (spender_, value_) => {
        chkApprove_(this, spender_, value_);
        return [
          (k) => {
            approve_(this, spender_, value_);
            k(true);
            return [s];
          },
        ];
      })
      // -----------------------------------------
      // api: createBoxes
      // - create balance, allowance, reserveA, reserveB boxes
      // params:
      // - address
      // -----------------------------------------
      .api_(LT.createBalanceBox, (addr) => {
        check(!isSome(balances[addr]), "ARC200: Balance box already exists");
        return [
          (k) => {
            balances[addr] = UInt256(0);
            k(null);
            return [s];
          },
        ];
      })
      // -----------------------------------------
      // api: createAllowanceBox
      // - create allowance box
      // params:
      // - owner
      // - spender
      // -----------------------------------------
      .api_(LT.createAllowanceBox, (owner, spender) => {
        check(
          !isSome(allowances[[owner, spender]]),
          "ARC200: Allowance box already exists"
        );
        return [
          (k) => {
            allowances[[owner, spender]] = UInt256(0);
            k(null);
            return [s];
          },
        ];
      })
      .define(() => {
        // -----------------------------------------
        // arc200 (external)
        // -----------------------------------------
        const arc200 = {
          transfer: (ctc, pmt, to_, value_) => {
            const from_ = getAddress();
            const r = remote(ctc, {
              arc200_transfer: Fun([Bytes(4), Address, UInt256], Bool),
            });
            return r.arc200_transfer.pay(pmt).ALGO({
              rawCall: true,
              fees: 1,
              apps: [ctc],
              boxes: [
                [ctc, 0, from_],
                [ctc, 0, to_],
              ],
            })(Bytes.fromHex("0xda7025b9"), to_, value_); // sha256(arc200_transfer(address,uint256)bool)
          },
          transferFrom: (ctc, pmt, from_, to_, value_) => {
            const spender_ = getAddress();
            const r = remote(ctc, {
              arc200_transferFrom: Fun(
                [Bytes(4), Address, Address, UInt256],
                Bool
              ),
            });
            return r.arc200_transferFrom.pay(pmt).ALGO({
              rawCall: true,
              fees: 1,
              apps: [ctc],
              boxes: [
                [ctc, 0, from_],
                [ctc, 0, to_],
                [ctc, 1, [from_, spender_]],
              ],
            })(Bytes.fromHex("0x4a968f8f"), from_, to_, value_); // sha256(arc200_transferFrom(address,address,uint256)bool)
          },
        };
      })
      .define(() => {
        // -----------------------------------------
        // chkProtoAddr
        // - check that the protocol address is the same as proto
        // -----------------------------------------
        const chkProtoAddr = (protoAddr) => {
          check(
            protoAddr == s.protoInfo.protoAddr,
            "Thou art not the Protocol"
          );
        };
      })
      // -----------------------------------------
      // api: harvest (Protocol)
      // - transfer ut and protoBals to recvr
      // params:
      // - recvr
      // - protoInfo
      // -----------------------------------------
      .api_(Protocol.Protocol_harvest, (recvr, protoInfoP) => {
        chkProtoAddr(this);
        chkFees(protoInfoP);
        return [
          (k) => {
            const r = getUntrackedFunds();
            transfer(r).to(recvr);
            k([BS(s.protoBals), r]);
            void arc200.transfer(tokA, 0, recvr, s.protoBals.A);
            void arc200.transfer(tokB, 0, recvr, s.protoBals.B);
            N.HarvestEvent(PS(protoInfoP));
            return [
              {
                ...s,
                protoInfo: protoInfoP,
                protoBals: BS(abz),
              },
            ];
          },
        ];
      })
      // -----------------------------------------
      .define(() => {
        const computeMint = computeMintHelper(s.poolBals, s.lptBals);
      })
      // -----------------------------------------
      // api: deposit (Provider)
      // - allows user to exchange pool poolBals for liquidity
      // .api_(Provider.v_deposit, (inBals) => {
      //   const lp = computeMint(inBals);
      //   return [
      //     (k) => {
      //       k(lp);
      //       return [s];
      //     },
      //   ];
      // })
      // -----------------------------------------
      .api_(Provider.deposit, (simulate, inBals, lpl) => {
        check(!isLocked(), "locked");
        const lp = computeMint(inBals);
        check(lpl <= lp, "slippage");
        chkTransfer(getAddress(), this, lp);
        return [
          (k) => {
            if (simulate) {
              k(lp);
              return [s];
            } else {
              const { A: inA, B: inB } = inBals;
              const poolBalsP = balsAdd(s.poolBals, inBals);
              void arc200.transferFrom(tokA, 0, this, getAddress(), inA);
              void arc200.transferFrom(tokB, 0, this, getAddress(), inB);
              void transfer_(getAddress(), this, lp);
              k(lp);
              N.DepositEvent(this, BS(inBals), lp, BS(poolBalsP));
              return [
                {
                  ...s,
                  poolBals: BS(poolBalsP),
                  lptBals: BS(lpOut(lp)),
                },
              ];
            }
          },
        ];
      })
      // -----------------------------------------
      // api: withdraw
      // - allows user to exchange liquidity for pool poolBals
      //   respecting slippage limit
      // params:
      // - lp
      // - outsl
      // returns:
      // - [Bals, Bals]
      // -----------------------------------------
      .api_(Provider.withdraw, (simulate, lp, outsl) => {
        const { A: outSlA, B: outSlB } = outsl;
        const out = balsMulDiv(lp, s.poolBals, lpMinted);
        const { A: outA, B: outB } = out;
        check(outSlA <= outA, "Duoswap: Provider Withdraw Slippage A");
        check(outSlB <= outB, "Duoswap: Provider Withdraw Slippage B");
        chkTransfer(this, getAddress(), lp);
        return [
          (k) => {
            if (simulate) {
              k(BS(out));
              return [s];
            } else {
              transfer_(this, getAddress(), lp);
              void arc200.transfer(tokA, 0, this, outA);
              void arc200.transfer(tokB, 0, this, outB);
              k(BS(out));
              const poolBalsP = balsSub(s.poolBals, out);
              N.WithdrawEvent(this, lp, BS(out), BS(poolBalsP));
              return [
                {
                  ...s,
                  lptBals: BS(lpIn(lp)),
                  poolBals: BS(poolBalsP),
                },
              ];
            }
          },
        ];
      })
      // -----------------------------------------
      .define(() => {
        // -----------------------------------------
        // calcSwap
        // - parameters
        // + AforB Bool
        // ++ indicates swap direction
        // ++ used in other function
        // + normalIn Bals
        // ++ value in
        // ++ az(x) or bz(x) depending on AforB
        // + normalOutL
        // ++ value out slippage limit
        // ++ bz(y) or az(y) depending on AforB
        // + mExactOut MUInt256
        // ++ exact swap else MUInt256.None()
        // ++ if exact MUInt256(ea), ea is exact amount
        // ++ and normalOutL is abz
        // - uses s
        // + poolBals
        // -----------------------------------------
        const calcSwap = (normalIn, normalOutL, normalOut, poolToProto) => {
          check(!isLocked(), "locked");
          // `who` paid into the pool
          const poolBalsAfterIn = balsAdd(s.poolBals, normalIn);
          // `who` got paid from the pool
          const poolBalsAfterOut = balsSub(poolBalsAfterIn, normalOut);
          // The protocol collects a fee, but that doesn't concern `who`.
          // Imagine that Alice walks up to Bob and Claire. Alice gives Bob $10.
          // Bob and Claire give Alice 200 pesos and she walks away. Eve comes up
          // and makes them give her $1 or 10 pesos... Alice doesn't care.
          const poolBalsAfterProtoFee = balsSub(poolBalsAfterOut, poolToProto);
          const protoBalsAfterProtoFee = balsAdd(s.protoBals, poolToProto);
          const protoBalsP = protoBalsAfterProtoFee;
          const poolBalsP = poolBalsAfterProtoFee;
          // Ensure that the slippage constraint is met... compare what they
          // actually get to the lower bound.
          check(balsLte(normalOutL, normalOut), "slippage");
          // Ensure that the pool ratio is preserved
          const oldK = computeK(s.poolBals);
          const newK = computeK(poolBalsP);
          // An old version did:
          //  x * y' >= x * y
          //  x * y' >= max(x,y) * min(x,y)     // either x = y or one is bigger
          //  (x * y') / max(x,y) >= min(x,y)   // div by max to reduce bits
          // We do it more directly
          check(newK >= oldK, "constant product");
          return [poolBalsP, protoBalsP];
        };
        // -----------------------------------------
        // viewSwap
        // - view outcome of swap
        // params:
        // - AforB Bool
        // ++ swap direction
        // - normalIn Bals
        // ++ value in
        // ++ az(x) or bz(x) depending on AforB
        // - normalOutL
        // ++ value out slippage limit
        // ++ bz(y) or az(y) depending on AforB
        // - mExactOut MUInt256
        // ++ exact swap else MUInt256.None()
        // ++ if exact MUInt256(ea), ea is exact amount
        // ++ and normalOutL is abz
        // -----------------------------------------
        const viewSwap = (AforB, normalIn, normalOutL, mExactOut) => {
          const { poolBals, protoInfo } = s;
          const [normalOut, poolToProto, _] = computeSwap(
            AforB,
            normalIn,
            mExactOut,
            poolBals,
            protoInfo
          );
          const [poolBalsP, protoBalsP] = calcSwap(
            normalIn,
            normalOutL,
            normalOut,
            poolToProto
          );
          return [BS(normalOut), BS(poolBalsP), BS(protoBalsP)];
        };
        // -----------------------------------------
        // doSwap
        // - parameters
        // + AforB Bool
        // + normalIn Bals
        // ++ bzA or azB
        // + normalOutL
        // ++ slippage limit
        // ++ azO or bzO
        // + mExactOut MUInt256
        // ++ MUInt256.None() or MUInt256.Some(ea)
        // + who
        // ++ receiver of swap out value
        // - uses s
        // + poolBals
        // + protoInfo
        // + protoBals
        // -----------------------------------------
        const doSwap = (
          simulate,
          AforB,
          normalIn,
          normalOutL,
          mExactOut,
          who
        ) => {
          const [normalOut, poolBalsP, protoBalsP] = viewSwap(
            AforB,
            normalIn,
            normalOutL,
            mExactOut
          );
          return (k) => {
            if (simulate) {
              k(BS(normalOut));
              return [s];
            } else {
              // tranfer in
              if (AforB) {
                void arc200.transferFrom(
                  tokA,
                  0,
                  who,
                  getAddress(),
                  normalIn.A
                ); // aIn
                void arc200.transfer(tokB, 0, who, normalOut.B); // bOut
                void arc200.transfer(tokA, 0, who, normalOut.A); // aOut (remainder)
              } else {
                void arc200.transferFrom(
                  tokB,
                  0,
                  who,
                  getAddress(),
                  normalIn.B
                ); // bIn
                void arc200.transfer(tokA, 0, who, normalOut.A); // aOut
                void arc200.transfer(tokB, 0, who, normalOut.B); // bOut (remainder)
              }
              k(BS(normalOut));
              N.SwapEvent(who, BS(normalIn), BS(normalOut), BS(poolBalsP)); // swap event
              //N.FeeEvent(BS(protoBalsP)); // fee event for protocol
              return [
                {
                  ...s,
                  poolBals: BS(poolBalsP),
                  protoBals: BS(protoBalsP),
                },
              ];
            }
          };
        };
      })
      // -----------------------------------------
      // swapAforB
      // - swap A for B
      // params:
      // - a: Bals a in
      // - ol: Bals b out slippage limit
      // requires:
      // - payment of min balance box cost in case
      //   the contract does not have a box. otherwise,
      //   donates amount to the token
      // -----------------------------------------
      .api_(Trader.swapAForB, (simulate, a, ol) => {
        const c = doSwap(simulate, true, bz(a), az(ol), MUInt256.None(), this);
        return [(k) => c(k)];
      })
      // -----------------------------------------
      // swapBforA
      // - swap B for A
      // params:
      // - b: Bals b in
      // - ol: Bals a out slippage limit
      // requires:
      // - payment of min balance box cost in case
      //   the contract does not have a box. otherwise,
      //   donates amount to the token
      // -----------------------------------------
      .api_(Trader.swapBForA, (simulate, b, ol) => {
        const c = doSwap(simulate, false, az(b), bz(ol), MUInt256.None(), this);
        return [(k) => c(k)];
      })
      // -----------------------------------------
      // api: exactSwapAforB
      // - swap A for B
      // requires:
      // - payment of min balance box cost in case
      //   the contract does not have a box. otherwise,
      //   donates amount to the token
      // -----------------------------------------
      .api_(Trader.exactSwapAForB, (simulate, a, eb) => {
        const c = doSwap(simulate, true, bz(a), abz, MUInt256.Some(eb), this);
        return [(k) => c(k)];
      })
      // -----------------------------------------
      // api: exactSwapBforA
      // - swap B for A
      // requires:
      // - payment of min balance box cost in case
      //   the contract does not have a box. otherwise,
      //   donates amount to the token
      // -----------------------------------------
      .api_(Trader.exactSwapBForA, (simulate, b, ea) => {
        const c = doSwap(simulate, false, az(b), abz, MUInt256.Some(ea), this);
        return [(k) => c(k)];
      });
    // -----------------------------------------
    commit();
    const [[], k] = call(Protocol.Protocol_delete);
    k(null);
    commit();
    exit();
  });

//export const TRI = triumvirate;
//export const ctc_ctc = SWAP200(Contract);
export const STAKR200 = staker200;

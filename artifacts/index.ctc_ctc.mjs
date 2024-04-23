// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2, ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc0], ['locked', ctc4]]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc2, ctc2, ctc2]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc2]);
  return {
    DepositEvent: [ctc3],
    HarvestEvent: [ctc6],
    SwapEvent: [ctc7],
    WithdrawEvent: [ctc8],
    arc200_Approval: [ctc0, ctc0, ctc1],
    arc200_Transfer: [ctc0, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc4 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc2,
    symbol: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_UInt256;
  const ctc7 = stdlib.T_Struct([['A', ctc6], ['B', ctc6]]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Struct([['protoFee', ctc6], ['lpFee', ctc6], ['totFee', ctc6], ['protoAddr', ctc8], ['locked', ctc5]]);
  const ctc10 = stdlib.T_Object({
    closed: ctc5,
    lptBals: ctc7,
    poolBals: ctc7,
    protoBals: ctc7,
    protoInfo: ctc9
    });
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Struct([['lptBals', ctc7], ['poolBals', ctc7], ['protoInfo', ctc9], ['protoBals', ctc7], ['tokB', ctc0], ['tokA', ctc0]]);
  const ctc13 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc14 = stdlib.T_Data({
    Allowance: ctc13,
    Balance: ctc8,
    ReserveA: ctc8,
    ReserveB: ctc8
    });
  const ctc15 = stdlib.T_Null;
  const ctc16 = stdlib.T_Data({
    None: ctc15,
    Some: ctc6
    });
  const map0_ctc = ctc16;
  
  const map1_ctc = ctc16;
  
  const map2_ctc = ctc16;
  
  const map3_ctc = ctc16;
  
  
  const _Info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v15639, v15641, v15647, v15648, v15703] = svs;
      return (await ((async () => {
        
        const v38780 = v15703.lptBals;
        const v38781 = v15703.poolBals;
        const v38782 = v15703.protoInfo;
        const v38783 = v15703.protoBals;
        const v38784 = {
          lptBals: v38780,
          poolBals: v38781,
          protoBals: v38783,
          protoInfo: v38782,
          tokA: v15639,
          tokB: v15641
          };
        
        return v38784;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = svs;
      return (await ((async () => {
        
        const v15822 = v15703.lptBals;
        const v15823 = v15703.poolBals;
        const v15824 = v15703.protoInfo;
        const v15825 = v15703.protoBals;
        const v15826 = {
          lptBals: v15822,
          poolBals: v15823,
          protoBals: v15825,
          protoInfo: v15824,
          tokA: v15639,
          tokB: v15641
          };
        
        return v15826;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v15639, v15641, v15647, v15648, v15703] = svs;
      return (await ((async (_v38751, _v38752 ) => {
          const v38751 = stdlib.protect(ctc8, _v38751, null);
          const v38752 = stdlib.protect(ctc8, _v38752, null);
        
        const v38753 = [v38751, v38752];
        const v38754 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc13, v38753, ctc6), null);
        const v38755 = stdlib.fromSome(v38754, stdlib.checkedBigNumberify('./index.rsh:521:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v38755;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = svs;
      return (await ((async (_v15793, _v15794 ) => {
          const v15793 = stdlib.protect(ctc8, _v15793, null);
          const v15794 = stdlib.protect(ctc8, _v15794, null);
        
        const v15795 = [v15793, v15794];
        const v15796 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc13, v15795, ctc6), null);
        const v15797 = stdlib.fromSome(v15796, stdlib.checkedBigNumberify('./index.rsh:521:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v15797;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v15639, v15641, v15647, v15648, v15703] = svs;
      return (await ((async (_v38748 ) => {
          const v38748 = stdlib.protect(ctc8, _v38748, null);
        
        const v38749 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc8, v38748, ctc6), null);
        const v38750 = stdlib.fromSome(v38749, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v38750;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = svs;
      return (await ((async (_v15790 ) => {
          const v15790 = stdlib.protect(ctc8, _v15790, null);
        
        const v15791 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc8, v15790, ctc6), null);
        const v15792 = stdlib.fromSome(v15791, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v15792;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v15639, v15641, v15647, v15648, v15703] = svs;
      return (await ((async () => {
        
        
        return v15648;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = svs;
      return (await ((async () => {
        
        
        return v15648;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v15639, v15641, v15647, v15648, v15703] = svs;
      return (await ((async () => {
        
        const v15690 = v15647.name;
        
        return v15690;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = svs;
      return (await ((async () => {
        
        const v15690 = v15647.name;
        
        return v15690;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v15639, v15641, v15647, v15648, v15703] = svs;
      return (await ((async () => {
        
        const v15691 = v15647.symbol;
        
        return v15691;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = svs;
      return (await ((async () => {
        
        const v15691 = v15647.symbol;
        
        return v15691;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v15639, v15641, v15647, v15648, v15703] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _hasBox = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v15639, v15641, v15647, v15648, v15703] = svs;
      return (await ((async (_v38756 ) => {
          const v38756 = stdlib.protect(ctc14, _v38756, null);
        
        let v38763;
        switch (v38756[0]) {
          case 'Allowance': {
            const v38764 = v38756[1];
            const v38765 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc13, v38764, ctc6), null);
            const v38766 = {
              None: 0,
              Some: 1
              }[v38765[0]];
            const v38767 = stdlib.eq(v38766, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v38763 = v38767;
            
            break;
            }
          case 'Balance': {
            const v38768 = v38756[1];
            const v38769 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc8, v38768, ctc6), null);
            const v38770 = {
              None: 0,
              Some: 1
              }[v38769[0]];
            const v38771 = stdlib.eq(v38770, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v38763 = v38771;
            
            break;
            }
          case 'ReserveA': {
            const v38772 = v38756[1];
            const v38773 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc8, v38772, ctc6), null);
            const v38774 = {
              None: 0,
              Some: 1
              }[v38773[0]];
            const v38775 = stdlib.eq(v38774, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v38763 = v38775;
            
            break;
            }
          case 'ReserveB': {
            const v38776 = v38756[1];
            const v38777 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc8, v38776, ctc6), null);
            const v38778 = {
              None: 0,
              Some: 1
              }[v38777[0]];
            const v38779 = stdlib.eq(v38778, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v38763 = v38779;
            
            break;
            }
          }
        
        return v38763;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = svs;
      return (await ((async (_v15798 ) => {
          const v15798 = stdlib.protect(ctc14, _v15798, null);
        
        let v15805;
        switch (v15798[0]) {
          case 'Allowance': {
            const v15806 = v15798[1];
            const v15807 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc13, v15806, ctc6), null);
            const v15808 = {
              None: 0,
              Some: 1
              }[v15807[0]];
            const v15809 = stdlib.eq(v15808, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v15805 = v15809;
            
            break;
            }
          case 'Balance': {
            const v15810 = v15798[1];
            const v15811 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc8, v15810, ctc6), null);
            const v15812 = {
              None: 0,
              Some: 1
              }[v15811[0]];
            const v15813 = stdlib.eq(v15812, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v15805 = v15813;
            
            break;
            }
          case 'ReserveA': {
            const v15814 = v15798[1];
            const v15815 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc8, v15814, ctc6), null);
            const v15816 = {
              None: 0,
              Some: 1
              }[v15815[0]];
            const v15817 = stdlib.eq(v15816, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v15805 = v15817;
            
            break;
            }
          case 'ReserveB': {
            const v15818 = v15798[1];
            const v15819 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc8, v15818, ctc6), null);
            const v15820 = {
              None: 0,
              Some: 1
              }[v15819[0]];
            const v15821 = stdlib.eq(v15820, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v15805 = v15821;
            
            break;
            }
          }
        
        return v15805;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _reserve = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v15639, v15641, v15647, v15648, v15703] = svs;
      return (await ((async (_v38741 ) => {
          const v38741 = stdlib.protect(ctc8, _v38741, null);
        
        const v38742 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc8, v38741, ctc6), null);
        const v38743 = stdlib.fromSome(v38742, stdlib.checkedBigNumberify('./index.rsh:509:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v38744 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc8, v38741, ctc6), null);
        const v38745 = stdlib.fromSome(v38744, stdlib.checkedBigNumberify('./index.rsh:510:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v38746 = {
          A: v38743,
          B: v38745
          };
        
        return v38746;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = svs;
      return (await ((async (_v15783 ) => {
          const v15783 = stdlib.protect(ctc8, _v15783, null);
        
        const v15784 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc8, v15783, ctc6), null);
        const v15785 = stdlib.fromSome(v15784, stdlib.checkedBigNumberify('./index.rsh:509:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v15786 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc8, v15783, ctc6), null);
        const v15787 = stdlib.fromSome(v15786, stdlib.checkedBigNumberify('./index.rsh:510:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v15788 = {
          A: v15785,
          B: v15787
          };
        
        return v15788;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        decode: _Info,
        dom: [],
        rng: ctc12
        },
      arc200_allowance: {
        decode: _arc200_allowance,
        dom: [ctc8, ctc8],
        rng: ctc6
        },
      arc200_balanceOf: {
        decode: _arc200_balanceOf,
        dom: [ctc8],
        rng: ctc6
        },
      arc200_decimals: {
        decode: _arc200_decimals,
        dom: [],
        rng: ctc1
        },
      arc200_name: {
        decode: _arc200_name,
        dom: [],
        rng: ctc2
        },
      arc200_symbol: {
        decode: _arc200_symbol,
        dom: [],
        rng: ctc3
        },
      arc200_totalSupply: {
        decode: _arc200_totalSupply,
        dom: [],
        rng: ctc6
        },
      hasBox: {
        decode: _hasBox,
        dom: [ctc14],
        rng: ctc5
        },
      reserve: {
        decode: _reserve,
        dom: [ctc8],
        rng: ctc7
        }
      },
    views: {
      2: [ctc0, ctc0, ctc4, ctc1, ctc10],
      4: [ctc0, ctc0, ctc4, ctc1, ctc8, ctc11, ctc8, ctc7, ctc10, ctc1, ctc7, ctc6, ctc6, ctc7]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Object({
    proto: ctc7,
    tokA: ctc7,
    tokB: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Object({
    meta: ctc6,
    swap: ctc8,
    zeroAddress: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc9], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc9, ctc12]);
  const ctc15 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc16 = stdlib.T_Tuple([ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc19 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc9, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc9, ctc9]);
  const ctc23 = stdlib.T_Tuple([ctc9]);
  const ctc24 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc14,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc17,
    Provider_depositB0_9533: ctc17,
    Provider_withdraw0_9533: ctc18,
    Provider_withdrawA0_9533: ctc17,
    Provider_withdrawB0_9533: ctc17,
    Trader_exactSwapAForB0_9533: ctc19,
    Trader_exactSwapBForA0_9533: ctc19,
    Trader_swapAForB0_9533: ctc19,
    Trader_swapBForA0_9533: ctc19,
    arc200_approve0_9533: ctc20,
    arc200_transfer0_9533: ctc20,
    arc200_transferFrom0_9533: ctc21,
    createAllowanceBox0_9533: ctc22,
    createBalanceBoxes0_9533: ctc23
    });
  const ctc25 = stdlib.T_Tuple([ctc15, ctc3]);
  const ctc26 = stdlib.T_Tuple([ctc3, ctc11]);
  const ctc27 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false
    });
  
  
  const v15605 = stdlib.protect(ctc10, interact.params, 'for Deployer\'s interact field params');
  const v15606 = v15605.meta;
  const v15607 = v15605.swap;
  const v15609 = v15606.decimals;
  const v15613 = v15607.tokA;
  const v15614 = v15607.tokB;
  
  const v15623 = stdlib.digest([ctc7], [v15613]);
  const v15624 = stdlib.digest([ctc7], [v15614]);
  const v15625 = stdlib.digestEq(v15623, v15624);
  const v15626 = v15625 ? false : true;
  stdlib.assert(v15626, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:433:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:446:17:application call to "checkInput" (defined at: ./index.rsh:431:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v15630 = stdlib.le(v15609, stdlib.checkedBigNumberify('./index.rsh:334:26:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v15630, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:434:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:446:17:application call to "checkInput" (defined at: ./index.rsh:431:28:function exp)'],
    msg: 'ARC200: Decimals must be less than max',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v15605],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:445:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:445:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v15633], secs: v15635, time: v15634, didSend: v9010, from: v15632 } = txn1;
      
      const v15638 = v15633.swap;
      const v15639 = v15638.tokA;
      const v15641 = v15638.tokB;
      const v15647 = v15633.meta;
      const v15648 = v15647.decimals;
      ;
      const v15651 = v15633.zeroAddress;
      const v15655 = v15638.proto;
      const v15657 = await ctc.getContractInfo();
      const v15660 = [];
      const v15661 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v15655,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:457:71:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:457:71:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
      const v15662 = await txn1.getOutput('internal', 'v15661', ctc13, v15661);
      const v15664 = v15662[stdlib.checkedBigNumberify('./index.rsh:457:71:application', stdlib.UInt_max, '0')];
      const v15665 = v15662[stdlib.checkedBigNumberify('./index.rsh:457:71:application', stdlib.UInt_max, '1')];
      const v15666 = v15665.protoFee;
      const v15667 = v15665.lpFee;
      const v15668 = v15665.totFee;
      const v15684 = await ctc.getContractAddress();
      await stdlib.simMapSet(sim_r, 0, ctc9, v15684, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
      await stdlib.simMapSet(sim_r, 0, ctc9, v15651, ctc1, stdlib.checkedBigNumberify('./index.rsh:478:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v15686 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
      null;
      
      const v15696 = v15665.protoAddr;
      const v15697 = v15665.locked;
      const v15698 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v15699 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v15701 = {
        locked: v15697,
        lpFee: v15667,
        protoAddr: v15696,
        protoFee: v15666,
        totFee: v15668
        };
      const v15702 = {
        closed: false,
        lptBals: v15698,
        poolBals: v15699,
        protoBals: v15699,
        protoInfo: v15701
        };
      const v15703 = v15702;
      const v15704 = v15634;
      const v15707 = v15664;
      
      if (await (async () => {
        const v15781 = v15703.closed;
        const v15782 = v15781 ? false : true;
        
        return v15782;})()) {
        const v15828 = v15703.lptBals;
        const v15829 = v15828.A;
        const v15830 = v15828.B;
        const v15833 = v15703.poolBals;
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v15633], secs: v15635, time: v15634, didSend: v9010, from: v15632 } = txn1;
  const v15638 = v15633.swap;
  const v15639 = v15638.tokA;
  const v15641 = v15638.tokB;
  const v15642 = stdlib.digest([ctc7], [v15639]);
  const v15643 = stdlib.digest([ctc7], [v15641]);
  const v15644 = stdlib.digestEq(v15642, v15643);
  const v15645 = v15644 ? false : true;
  stdlib.assert(v15645, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:433:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:446:17:application call to "checkInput" (defined at: ./index.rsh:431:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v15647 = v15633.meta;
  const v15648 = v15647.decimals;
  const v15649 = stdlib.le(v15648, stdlib.checkedBigNumberify('./index.rsh:334:26:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v15649, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:434:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:446:17:application call to "checkInput" (defined at: ./index.rsh:431:28:function exp)'],
    msg: 'ARC200: Decimals must be less than max',
    who: 'Deployer'
    });
  ;
  const v15651 = v15633.zeroAddress;
  const v15655 = v15638.proto;
  const v15657 = await ctc.getContractInfo();
  const v15660 = [];
  const v15661 = undefined /* Remote */;
  const v15662 = await txn1.getOutput('internal', 'v15661', ctc13, v15661);
  const v15664 = v15662[stdlib.checkedBigNumberify('./index.rsh:457:71:application', stdlib.UInt_max, '0')];
  const v15665 = v15662[stdlib.checkedBigNumberify('./index.rsh:457:71:application', stdlib.UInt_max, '1')];
  const v15666 = v15665.protoFee;
  const v15667 = v15665.lpFee;
  const v15668 = v15665.totFee;
  const v15669 = stdlib.lt256(v15666, stdlib.checkedBigNumberify('./index.rsh:294:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v15670 = stdlib.lt256(v15667, stdlib.checkedBigNumberify('./index.rsh:295:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v15671 = v15669 ? v15670 : false;
  let v15672;
  if (v15671) {
    const v15673 = stdlib.safeAdd256(v15667, v15666);
    const v15674 = stdlib.eq256(v15668, v15673);
    v15672 = v15674;
    }
  else {
    v15672 = false;
    }
  const v15675 = stdlib.lt256(v15668, stdlib.checkedBigNumberify('./index.rsh:297:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v15676 = v15672 ? v15675 : false;
  const v15677 = stdlib.gt256(v15668, stdlib.checkedBigNumberify('./index.rsh:298:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v15678 = v15676 ? v15677 : false;
  stdlib.assert(v15678, {
    at: './index.rsh:457:71:application',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  const v15683 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15664);
  stdlib.assert(v15683, {
    at: './index.rsh:457:71:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  const v15684 = await ctc.getContractAddress();
  await stdlib.mapSet(map0, ctc9, v15684, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
  await stdlib.mapSet(map0, ctc9, v15651, ctc1, stdlib.checkedBigNumberify('./index.rsh:478:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v15686 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
  null;
  stdlib.protect(ctc0, await interact.ready(v15657), {
    at: './index.rsh:491:21:application',
    fs: ['at ./index.rsh:491:21:application call to [unknown function] (defined at: ./index.rsh:491:21:function exp)', 'at ./index.rsh:491:21:application call to "liftedInteract" (defined at: ./index.rsh:491:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v15696 = v15665.protoAddr;
  const v15697 = v15665.locked;
  const v15698 = {
    A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
    B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v15699 = {
    A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v15701 = {
    locked: v15697,
    lpFee: v15667,
    protoAddr: v15696,
    protoFee: v15666,
    totFee: v15668
    };
  const v15702 = {
    closed: false,
    lptBals: v15698,
    poolBals: v15699,
    protoBals: v15699,
    protoInfo: v15701
    };
  let v15703 = v15702;
  let v15704 = v15634;
  let v15707 = v15664;
  
  let txn2 = txn1;
  while (await (async () => {
    const v15781 = v15703.closed;
    const v15782 = v15781 ? false : true;
    
    return v15782;})()) {
    const v15828 = v15703.lptBals;
    const v15829 = v15828.A;
    const v15830 = v15828.B;
    const v15833 = v15703.poolBals;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc24],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn3;
    switch (v16738[0]) {
      case 'Protocol_harvest0_9533': {
        const v16741 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v16762 = v16741[stdlib.checkedBigNumberify('./index.rsh:773:12:spread', stdlib.UInt_max, '0')];
        const v16763 = v16741[stdlib.checkedBigNumberify('./index.rsh:773:12:spread', stdlib.UInt_max, '1')];
        const v16765 = v15703.protoInfo;
        const v16766 = v16765.protoAddr;
        const v16767 = stdlib.addressEq(v16737, v16766);
        stdlib.assert(v16767, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:760:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:774:21:application call to "chkProtoAddr" (defined at: ./index.rsh:759:42:function exp)', 'at ./index.rsh:777:15:application call to [unknown function] (defined at: ./index.rsh:777:15:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Deployer'
          });
        const v16769 = v16763.protoFee;
        const v16770 = v16763.lpFee;
        const v16771 = v16763.totFee;
        const v16772 = stdlib.lt256(v16769, stdlib.checkedBigNumberify('./index.rsh:294:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v16773 = stdlib.lt256(v16770, stdlib.checkedBigNumberify('./index.rsh:295:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v16774 = v16772 ? v16773 : false;
        let v16775;
        if (v16774) {
          const v16776 = stdlib.safeAdd256(v16770, v16769);
          const v16777 = stdlib.eq256(v16771, v16776);
          v16775 = v16777;
          }
        else {
          v16775 = false;
          }
        const v16778 = stdlib.lt256(v16771, stdlib.checkedBigNumberify('./index.rsh:297:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v16779 = v16775 ? v16778 : false;
        const v16780 = stdlib.gt256(v16771, stdlib.checkedBigNumberify('./index.rsh:298:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v16781 = v16779 ? v16780 : false;
        stdlib.assert(v16781, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:300:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:775:16:application call to "chkFees" (defined at: ./index.rsh:300:21:function exp)', 'at ./index.rsh:777:15:application call to [unknown function] (defined at: ./index.rsh:777:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v16786 = (stdlib.le(await ctc.getBalance(), v15707) ? stdlib.checkedBigNumberify('./index.rsh:778:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v15707));
        const v16787 = stdlib.safeAdd(v16786, v15707);
        const v16791 = stdlib.sub(v16787, v16786);
        ;
        const v16792 = v15703.protoBals;
        const v16793 = v16792.A;
        const v16794 = v16792.B;
        const v16795 = {
          A: v16793,
          B: v16794
          };
        const v16796 = [v16795, v16786];
        await txn3.getOutput('Protocol_harvest', 'v16796', ctc25, v16796);
        const v16824 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
        const v16825 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16762];
        const v16829 = stdlib.bytesFromHex("0xda7025b9");
        const v16830 = undefined /* Remote */;
        const v16831 = await txn3.getOutput('internal', 'v16830', ctc26, v16830);
        const v16833 = v16831[stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0')];
        const v16838 = stdlib.add(v16791, v16833);
        const v16839 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16833);
        stdlib.assert(v16839, {
          at: './index.rsh:733:15:application',
          fs: ['at ./index.rsh:781:33:application call to [unknown function] (defined at: ./index.rsh:720:45:function exp)', 'at ./index.rsh:777:15:application call to [unknown function] (defined at: ./index.rsh:777:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v16843 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
        const v16844 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16762];
        const v16849 = undefined /* Remote */;
        const v16850 = await txn3.getOutput('internal', 'v16849', ctc26, v16849);
        const v16852 = v16850[stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0')];
        const v16857 = stdlib.add(v16838, v16852);
        const v16858 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16852);
        stdlib.assert(v16858, {
          at: './index.rsh:733:15:application',
          fs: ['at ./index.rsh:782:33:application call to [unknown function] (defined at: ./index.rsh:720:45:function exp)', 'at ./index.rsh:777:15:application call to [unknown function] (defined at: ./index.rsh:777:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v16862 = v16763.protoAddr;
        const v16863 = v16763.locked;
        const v16864 = {
          locked: v16863,
          lpFee: v16770,
          protoAddr: v16862,
          protoFee: v16769,
          totFee: v16771
          };
        const v16865 = [v16864];
        null;
        const v16866 = v15703.closed;
        const v16872 = {
          closed: v16866,
          lptBals: v15828,
          poolBals: v15833,
          protoBals: v15699,
          protoInfo: v16763
          };
        const cv15703 = v16872;
        const cv15704 = v16739;
        const cv15707 = v16857;
        
        v15703 = cv15703;
        v15704 = cv15704;
        v15707 = cv15707;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_deposit0_9533': {
        const v18116 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v18252 = v18116[stdlib.checkedBigNumberify('./index.rsh:832:12:spread', stdlib.UInt_max, '0')];
        const v18253 = v18116[stdlib.checkedBigNumberify('./index.rsh:832:12:spread', stdlib.UInt_max, '1')];
        const v18254 = v15703.protoInfo;
        const v18255 = v18254.locked;
        const v18256 = v18255 ? false : true;
        stdlib.assert(v18256, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:833:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v18258 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v16737, ctc1), null);
        const v18259 = stdlib.fromSome(v18258, stdlib.checkedBigNumberify('./index.rsh:834:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v18260 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v16737, ctc1), null);
        const v18261 = stdlib.fromSome(v18260, stdlib.checkedBigNumberify('./index.rsh:835:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v18262 = v18252.A;
        const v18263 = stdlib.ge256(v18259, v18262);
        stdlib.assert(v18263, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:836:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
          msg: 'inBals A balance insufficient',
          who: 'Deployer'
          });
        const v18265 = v18252.B;
        const v18266 = stdlib.ge256(v18261, v18265);
        stdlib.assert(v18266, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:837:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
          msg: 'inBals B balance insufficient',
          who: 'Deployer'
          });
        let v18268;
        const v18274 = stdlib.eq256(v15830, stdlib.checkedBigNumberify('./index.rsh:284:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        if (v18274) {
          const v18275 = stdlib.safeMul256(v18262, v18265);
          const v18276 = stdlib.sqrt256(v18275);
          v18268 = v18276;
          }
        else {
          const v18277 = v15833.A;
          const v18278 = v15833.B;
          const v18282 = stdlib.safeMul256(v18262, v15830);
          const v18283 = stdlib.safeDiv256(v18282, v18277);
          const v18287 = stdlib.safeMul256(v18265, v15830);
          const v18288 = stdlib.safeDiv256(v18287, v18278);
          const v18289 = stdlib.lt256(v18283, v18288);
          const v18290 = v18289 ? v18283 : v18288;
          v18268 = v18290;
          }
        const v18291 = stdlib.le256(v18253, v18268);
        stdlib.assert(v18291, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:839:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v18295 = stdlib.addressEq(v15684, v16737);
        const v18296 = v18295 ? false : true;
        stdlib.assert(v18296, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:587:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:840:20:application call to "chkTransfer" (defined at: ./index.rsh:586:50:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v18298 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v15684, ctc1), null);
        const v18299 = stdlib.fromSome(v18298, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v18300 = stdlib.ge256(v18299, v18268);
        stdlib.assert(v18300, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:588:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:840:20:application call to "chkTransfer" (defined at: ./index.rsh:586:50:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v18305 = stdlib.safeSub256(v18259, v18262);
        await stdlib.mapSet(map2, ctc9, v16737, ctc1, v18305);
        const v18307 = stdlib.safeSub256(v18261, v18265);
        await stdlib.mapSet(map3, ctc9, v16737, ctc1, v18307);
        const v18313 = stdlib.safeSub256(v18299, v18268);
        await stdlib.mapSet(map0, ctc9, v15684, ctc1, v18313);
        const v18314 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v16737, ctc1), null);
        const v18315 = stdlib.fromSome(v18314, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v18316 = stdlib.safeAdd256(v18315, v18268);
        await stdlib.mapSet(map0, ctc9, v16737, ctc1, v18316);
        null;
        await txn3.getOutput('Provider_deposit', 'v18268', ctc1, v18268);
        const v18327 = v15703.closed;
        const v18330 = v15703.protoBals;
        const v18333 = v15833.A;
        const v18338 = stdlib.safeAdd256(v18333, v18262);
        const v18339 = v15833.B;
        const v18344 = stdlib.safeAdd256(v18339, v18265);
        const v18353 = stdlib.safeSub256(v15829, v18268);
        const v18357 = stdlib.safeAdd256(v15830, v18268);
        const v18360 = {
          A: v18353,
          B: v18357
          };
        const v18361 = {
          A: v18338,
          B: v18344
          };
        const v18362 = {
          closed: v18327,
          lptBals: v18360,
          poolBals: v18361,
          protoBals: v18330,
          protoInfo: v18254
          };
        const cv15703 = v18362;
        const cv15704 = v16739;
        const cv15707 = v15707;
        
        v15703 = cv15703;
        v15704 = cv15704;
        v15707 = cv15707;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_depositA0_9533': {
        const v19491 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v19743 = v19491[stdlib.checkedBigNumberify('./index.rsh:801:12:spread', stdlib.UInt_max, '0')];
        const v19744 = v15703.protoInfo;
        const v19745 = v19744.locked;
        const v19746 = v19745 ? false : true;
        stdlib.assert(v19746, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:802:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:804:15:application call to [unknown function] (defined at: ./index.rsh:804:15:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v19751 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
        const v19752 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
        const v19753 = [v16737, v15684];
        const v19754 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v19753];
        const v19758 = stdlib.bytesFromHex("0x4a968f8f");
        const v19759 = undefined /* Remote */;
        const v19760 = await txn3.getOutput('internal', 'v19759', ctc26, v19759);
        const v19762 = v19760[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
        const v19767 = stdlib.add(v15707, v19762);
        const v19768 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19762);
        stdlib.assert(v19768, {
          at: './index.rsh:752:15:application',
          fs: ['at ./index.rsh:805:37:application call to [unknown function] (defined at: ./index.rsh:735:56:function exp)', 'at ./index.rsh:804:15:application call to [unknown function] (defined at: ./index.rsh:804:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v19769 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v16737, ctc1), null);
        const v19770 = stdlib.fromSome(v19769, stdlib.checkedBigNumberify('./index.rsh:806:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v19771 = stdlib.safeAdd256(v19770, v19743);
        await stdlib.mapSet(map2, ctc9, v16737, ctc1, v19771);
        await txn3.getOutput('Provider_depositA', 'v19771', ctc1, v19771);
        const cv15703 = v15703;
        const cv15704 = v16739;
        const cv15707 = v19767;
        
        v15703 = cv15703;
        v15704 = cv15704;
        v15707 = cv15707;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_depositB0_9533': {
        const v20866 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v21155 = v20866[stdlib.checkedBigNumberify('./index.rsh:815:12:spread', stdlib.UInt_max, '0')];
        const v21156 = v15703.protoInfo;
        const v21157 = v21156.locked;
        const v21158 = v21157 ? false : true;
        stdlib.assert(v21158, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:816:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:818:15:application call to [unknown function] (defined at: ./index.rsh:818:15:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v21163 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
        const v21164 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
        const v21165 = [v16737, v15684];
        const v21166 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v21165];
        const v21170 = stdlib.bytesFromHex("0x4a968f8f");
        const v21171 = undefined /* Remote */;
        const v21172 = await txn3.getOutput('internal', 'v21171', ctc26, v21171);
        const v21174 = v21172[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
        const v21179 = stdlib.add(v15707, v21174);
        const v21180 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v21174);
        stdlib.assert(v21180, {
          at: './index.rsh:752:15:application',
          fs: ['at ./index.rsh:819:37:application call to [unknown function] (defined at: ./index.rsh:735:56:function exp)', 'at ./index.rsh:818:15:application call to [unknown function] (defined at: ./index.rsh:818:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v21181 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v16737, ctc1), null);
        const v21182 = stdlib.fromSome(v21181, stdlib.checkedBigNumberify('./index.rsh:820:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v21183 = stdlib.safeAdd256(v21182, v21155);
        await stdlib.mapSet(map3, ctc9, v16737, ctc1, v21183);
        await txn3.getOutput('Provider_depositB', 'v21183', ctc1, v21183);
        const cv15703 = v15703;
        const cv15704 = v16739;
        const cv15707 = v21179;
        
        v15703 = cv15703;
        v15704 = cv15704;
        v15707 = cv15707;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdraw0_9533': {
        const v22241 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v22567 = v22241[stdlib.checkedBigNumberify('./index.rsh:892:12:spread', stdlib.UInt_max, '0')];
        const v22568 = v22241[stdlib.checkedBigNumberify('./index.rsh:892:12:spread', stdlib.UInt_max, '1')];
        const v22569 = v22568.A;
        const v22570 = v22568.B;
        const v22572 = v15833.A;
        const v22573 = v15833.B;
        const v22577 = stdlib.safeMul256(v22567, v22572);
        const v22578 = stdlib.safeDiv256(v22577, v15830);
        const v22582 = stdlib.safeMul256(v22567, v22573);
        const v22583 = stdlib.safeDiv256(v22582, v15830);
        const v22585 = stdlib.le256(v22569, v22578);
        stdlib.assert(v22585, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:896:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
          msg: 'Duoswap: Provider Withdraw Slippage A',
          who: 'Deployer'
          });
        const v22587 = stdlib.le256(v22570, v22583);
        stdlib.assert(v22587, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:897:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
          msg: 'Duoswap: Provider Withdraw Slippage B',
          who: 'Deployer'
          });
        const v22592 = stdlib.addressEq(v16737, v15684);
        const v22593 = v22592 ? false : true;
        stdlib.assert(v22593, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:602:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v22595 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v16737, ctc1), null);
        const v22596 = stdlib.fromSome(v22595, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v22597 = stdlib.ge256(v22596, v22567);
        stdlib.assert(v22597, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:603:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v22599 = [v16737, v15684];
        const v22600 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v22599, ctc1), null);
        const v22601 = stdlib.fromSome(v22600, stdlib.checkedBigNumberify('./index.rsh:521:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v22602 = stdlib.ge256(v22601, v22567);
        stdlib.assert(v22602, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:607:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v22612 = stdlib.safeSub256(v22596, v22567);
        await stdlib.mapSet(map0, ctc9, v16737, ctc1, v22612);
        const v22613 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v15684, ctc1), null);
        const v22614 = stdlib.fromSome(v22613, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v22615 = stdlib.safeAdd256(v22614, v22567);
        await stdlib.mapSet(map0, ctc9, v15684, ctc1, v22615);
        null;
        const v22620 = stdlib.safeSub256(v22601, v22567);
        await stdlib.mapSet(map1, ctc22, v22599, ctc1, v22620);
        null;
        const v22623 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v16737, ctc1), null);
        const v22624 = stdlib.fromSome(v22623, stdlib.checkedBigNumberify('./index.rsh:902:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v22625 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v16737, ctc1), null);
        const v22626 = stdlib.fromSome(v22625, stdlib.checkedBigNumberify('./index.rsh:903:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v22627 = stdlib.safeAdd256(v22624, v22578);
        await stdlib.mapSet(map2, ctc9, v16737, ctc1, v22627);
        const v22628 = stdlib.safeAdd256(v22626, v22583);
        await stdlib.mapSet(map3, ctc9, v16737, ctc1, v22628);
        const v22629 = {
          A: v22578,
          B: v22583
          };
        await txn3.getOutput('Provider_withdraw', 'v22629', ctc15, v22629);
        const v22649 = stdlib.safeAdd256(v15829, v22567);
        const v22652 = stdlib.safeSub256(v15830, v22567);
        const v22659 = stdlib.safeSub256(v22572, v22578);
        const v22663 = stdlib.safeSub256(v22573, v22583);
        const v22666 = [v16737, v22629];
        null;
        const v22667 = v15703.closed;
        const v22670 = v15703.protoBals;
        const v22671 = v15703.protoInfo;
        const v22672 = {
          A: v22649,
          B: v22652
          };
        const v22673 = {
          A: v22659,
          B: v22663
          };
        const v22674 = {
          closed: v22667,
          lptBals: v22672,
          poolBals: v22673,
          protoBals: v22670,
          protoInfo: v22671
          };
        const cv15703 = v22674;
        const cv15704 = v16739;
        const cv15707 = v15707;
        
        v15703 = cv15703;
        v15704 = cv15704;
        v15707 = cv15707;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdrawA0_9533': {
        const v23616 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v24055 = v23616[stdlib.checkedBigNumberify('./index.rsh:860:12:spread', stdlib.UInt_max, '0')];
        const v24056 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v16737, ctc1), null);
        const v24057 = stdlib.fromSome(v24056, stdlib.checkedBigNumberify('./index.rsh:861:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v24058 = stdlib.ge256(v24057, v24055);
        stdlib.assert(v24058, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:862:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:864:15:application call to [unknown function] (defined at: ./index.rsh:864:15:function exp)'],
          msg: 'Reserve A balances insufficient',
          who: 'Deployer'
          });
        const v24061 = stdlib.safeSub256(v24057, v24055);
        await stdlib.mapSet(map2, ctc9, v16737, ctc1, v24061);
        await txn3.getOutput('Provider_withdrawA', 'v24061', ctc1, v24061);
        const v24069 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
        const v24070 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
        const v24074 = stdlib.bytesFromHex("0xda7025b9");
        const v24075 = undefined /* Remote */;
        const v24076 = await txn3.getOutput('internal', 'v24075', ctc26, v24075);
        const v24078 = v24076[stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0')];
        const v24083 = stdlib.add(v15707, v24078);
        const v24084 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24078);
        stdlib.assert(v24084, {
          at: './index.rsh:733:15:application',
          fs: ['at ./index.rsh:868:33:application call to [unknown function] (defined at: ./index.rsh:720:45:function exp)', 'at ./index.rsh:864:15:application call to [unknown function] (defined at: ./index.rsh:864:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const cv15703 = v15703;
        const cv15704 = v16739;
        const cv15707 = v24083;
        
        v15703 = cv15703;
        v15704 = cv15704;
        v15707 = cv15707;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdrawB0_9533': {
        const v24991 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v25462 = v24991[stdlib.checkedBigNumberify('./index.rsh:876:12:spread', stdlib.UInt_max, '0')];
        const v25463 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v16737, ctc1), null);
        const v25464 = stdlib.fromSome(v25463, stdlib.checkedBigNumberify('./index.rsh:877:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v25465 = stdlib.ge256(v25464, v25462);
        stdlib.assert(v25465, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:878:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:880:15:application call to [unknown function] (defined at: ./index.rsh:880:15:function exp)'],
          msg: 'Reserve B balances insufficient',
          who: 'Deployer'
          });
        const v25468 = stdlib.safeSub256(v25464, v25462);
        await stdlib.mapSet(map3, ctc9, v16737, ctc1, v25468);
        await txn3.getOutput('Provider_withdrawB', 'v25468', ctc1, v25468);
        const v25476 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
        const v25477 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
        const v25481 = stdlib.bytesFromHex("0xda7025b9");
        const v25482 = undefined /* Remote */;
        const v25483 = await txn3.getOutput('internal', 'v25482', ctc26, v25482);
        const v25485 = v25483[stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0')];
        const v25490 = stdlib.add(v15707, v25485);
        const v25491 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v25485);
        stdlib.assert(v25491, {
          at: './index.rsh:733:15:application',
          fs: ['at ./index.rsh:884:33:application call to [unknown function] (defined at: ./index.rsh:720:45:function exp)', 'at ./index.rsh:880:15:application call to [unknown function] (defined at: ./index.rsh:880:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const cv15703 = v15703;
        const cv15704 = v16739;
        const cv15707 = v25490;
        
        v15703 = cv15703;
        v15704 = cv15704;
        v15707 = cv15707;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapAForB0_9533': {
        const v26366 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v26869 = v26366[stdlib.checkedBigNumberify('./index.rsh:1135:12:spread', stdlib.UInt_max, '0')];
        const v26870 = v26366[stdlib.checkedBigNumberify('./index.rsh:1135:12:spread', stdlib.UInt_max, '1')];
        const v26871 = v26366[stdlib.checkedBigNumberify('./index.rsh:1135:12:spread', stdlib.UInt_max, '2')];
        const v26874 = v15703.protoInfo;
        const v26876 = v15833.A;
        const v26877 = v15833.B;
        const v26878 = v26874.protoFee;
        const v26879 = v26874.totFee;
        const v26880 = stdlib.safeSub256(v26877, v26871);
        const v26881 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v26879);
        const v26882 = stdlib.safeMul256(v26871, v26881);
        const v26883 = stdlib.safeMul256(v26880, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v26884 = stdlib.safeMul256(v26882, v26876);
        const v26885 = stdlib.safeDiv256(v26884, v26883);
        const v26886 = stdlib.safeAdd256(v26885, stdlib.checkedBigNumberify('./index.rsh:141:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v26887 = stdlib.ge256(v26870, v26886);
        stdlib.assert(v26887, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:25:application call to [unknown function] (defined at: ./index.rsh:155:20:function exp)', 'at ./index.rsh:154:25:application call to [unknown function] (defined at: ./index.rsh:154:25:function exp)', 'at ./index.rsh:171:63:application call to "computeAmtInAndOut" (defined at: ./index.rsh:153:3:function exp)', 'at ./index.rsh:233:19:application call to "computeSwap1" (defined at: ./index.rsh:167:75:function exp)', 'at ./index.rsh:983:58:application call to "computeSwap" (defined at: ./index.rsh:229:71:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1136:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1137:21:application call to [unknown function] (defined at: ./index.rsh:1137:21:function exp)'],
          msg: 'provided enough funds to receive amt out',
          who: 'Deployer'
          });
        const v26889 = stdlib.safeSub256(v26870, v26886);
        const v26893 = stdlib.safeMul256(v26878, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v26894 = stdlib.safeDiv256(v26893, v26879);
        const v26898 = stdlib.safeAdd256(v26876, v26886);
        const v26902 = stdlib.safeMul256(v26886, v26877);
        const v26903 = stdlib.safeDiv256(v26902, v26898);
        const v26904 = stdlib.safeSub256(v26903, v26871);
        const v26906 = stdlib.safeMul256(v26904, v26894);
        const v26907 = stdlib.safeDiv256(v26906, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v26908 = stdlib.safeMul256(v26886, v26878);
        const v26909 = stdlib.safeDiv256(v26908, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v26913 = stdlib.safeMul256(v26909, v26877);
        const v26914 = stdlib.safeDiv256(v26913, v26898);
        const v26915 = stdlib.gt256(v26914, v26907);
        const v26916 = [v26909, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v26917 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v26907];
        const v26918 = v26915 ? v26916 : v26917;
        const v26920 = v26918[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '0')];
        const v26921 = v26918[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '1')];
        const v26926 = v26874.locked;
        const v26927 = v26926 ? false : true;
        stdlib.assert(v26927, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:939:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1136:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1137:21:application call to [unknown function] (defined at: ./index.rsh:1137:21:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v26934 = stdlib.safeAdd256(v26876, v26870);
        const v26942 = stdlib.safeSub256(v26934, v26889);
        const v26949 = stdlib.safeSub256(v26942, v26920);
        const v26952 = stdlib.safeSub256(v26880, v26921);
        const v26954 = v15703.protoBals;
        const v26955 = v26954.A;
        const v26959 = stdlib.safeAdd256(v26955, v26920);
        const v26960 = v26954.B;
        const v26964 = stdlib.safeAdd256(v26960, v26921);
        const v26966 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v26889);
        const v26967 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:79:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v26871);
        const v26968 = v26966 ? v26967 : false;
        stdlib.assert(v26968, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1136:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1137:21:application call to [unknown function] (defined at: ./index.rsh:1137:21:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v26973 = stdlib.safeMul256(v26876, v26877);
        const v26974 = stdlib.safeMul256(v26949, v26952);
        const v26975 = stdlib.ge256(v26974, v26973);
        stdlib.assert(v26975, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:963:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1136:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1137:21:application call to [unknown function] (defined at: ./index.rsh:1137:21:function exp)'],
          msg: 'constant product',
          who: 'Deployer'
          });
        const v26980 = {
          A: v26889,
          B: v26871
          };
        const v26981 = {
          A: v26949,
          B: v26952
          };
        const v26982 = {
          A: v26959,
          B: v26964
          };
        if (v26869) {
          await txn3.getOutput('Trader_exactSwapAForB', 'v26980', ctc15, v26980);
          const cv15703 = v15703;
          const cv15704 = v16739;
          const cv15707 = v15707;
          
          v15703 = cv15703;
          v15704 = cv15704;
          v15707 = cv15707;
          
          txn2 = txn3;
          continue;}
        else {
          const v27003 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
          const v27004 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
          const v27005 = [v16737, v15684];
          const v27006 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v27005];
          const v27010 = stdlib.bytesFromHex("0x4a968f8f");
          const v27011 = undefined /* Remote */;
          const v27012 = await txn3.getOutput('internal', 'v27011', ctc26, v27011);
          const v27014 = v27012[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
          const v27019 = stdlib.add(v15707, v27014);
          const v27020 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v27014);
          stdlib.assert(v27020, {
            at: './index.rsh:752:15:application',
            fs: ['at ./index.rsh:1035:41:application call to [unknown function] (defined at: ./index.rsh:735:56:function exp)', 'at ./index.rsh:1137:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1137:21:application call to [unknown function] (defined at: ./index.rsh:1137:21:function exp)'],
            msg: 'remote bill check',
            who: 'Deployer'
            });
          const v27021 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v16737, ctc1), null);
          const v27022 = stdlib.fromSome(v27021, stdlib.checkedBigNumberify('./index.rsh:1043:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v27023 = stdlib.safeAdd256(v27022, v26871);
          await stdlib.mapSet(map3, ctc9, v16737, ctc1, v27023);
          const v27024 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v16737, ctc1), null);
          const v27025 = stdlib.fromSome(v27024, stdlib.checkedBigNumberify('./index.rsh:1045:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v27026 = stdlib.safeAdd256(v27025, v26889);
          await stdlib.mapSet(map2, ctc9, v16737, ctc1, v27026);
          await txn3.getOutput('Trader_exactSwapAForB', 'v26980', ctc15, v26980);
          const v27038 = {
            A: v26870,
            B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v27041 = [v16737, v27038, v26980, v26981];
          null;
          const v27042 = v15703.closed;
          const v27049 = {
            closed: v27042,
            lptBals: v15828,
            poolBals: v26981,
            protoBals: v26982,
            protoInfo: v26874
            };
          const cv15703 = v27049;
          const cv15704 = v16739;
          const cv15707 = v27019;
          
          v15703 = cv15703;
          v15704 = cv15704;
          v15707 = cv15707;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'Trader_exactSwapBForA0_9533': {
        const v27741 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v28429 = v27741[stdlib.checkedBigNumberify('./index.rsh:1147:12:spread', stdlib.UInt_max, '0')];
        const v28430 = v27741[stdlib.checkedBigNumberify('./index.rsh:1147:12:spread', stdlib.UInt_max, '1')];
        const v28431 = v27741[stdlib.checkedBigNumberify('./index.rsh:1147:12:spread', stdlib.UInt_max, '2')];
        const v28434 = v15703.protoInfo;
        const v28436 = v15833.B;
        const v28437 = v15833.A;
        const v28438 = v28434.protoFee;
        const v28439 = v28434.totFee;
        const v28440 = stdlib.safeSub256(v28437, v28431);
        const v28441 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v28439);
        const v28442 = stdlib.safeMul256(v28431, v28441);
        const v28443 = stdlib.safeMul256(v28440, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v28444 = stdlib.safeMul256(v28442, v28436);
        const v28445 = stdlib.safeDiv256(v28444, v28443);
        const v28446 = stdlib.safeAdd256(v28445, stdlib.checkedBigNumberify('./index.rsh:141:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v28447 = stdlib.ge256(v28430, v28446);
        stdlib.assert(v28447, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:25:application call to [unknown function] (defined at: ./index.rsh:155:20:function exp)', 'at ./index.rsh:154:25:application call to [unknown function] (defined at: ./index.rsh:154:25:function exp)', 'at ./index.rsh:171:63:application call to "computeAmtInAndOut" (defined at: ./index.rsh:153:3:function exp)', 'at ./index.rsh:242:19:application call to "computeSwap1" (defined at: ./index.rsh:167:75:function exp)', 'at ./index.rsh:983:58:application call to "computeSwap" (defined at: ./index.rsh:229:71:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1148:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1149:21:application call to [unknown function] (defined at: ./index.rsh:1149:21:function exp)'],
          msg: 'provided enough funds to receive amt out',
          who: 'Deployer'
          });
        const v28449 = stdlib.safeSub256(v28430, v28446);
        const v28453 = stdlib.safeMul256(v28438, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v28454 = stdlib.safeDiv256(v28453, v28439);
        const v28458 = stdlib.safeAdd256(v28436, v28446);
        const v28462 = stdlib.safeMul256(v28446, v28437);
        const v28463 = stdlib.safeDiv256(v28462, v28458);
        const v28464 = stdlib.safeSub256(v28463, v28431);
        const v28466 = stdlib.safeMul256(v28464, v28454);
        const v28467 = stdlib.safeDiv256(v28466, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v28468 = stdlib.safeMul256(v28446, v28438);
        const v28469 = stdlib.safeDiv256(v28468, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v28473 = stdlib.safeMul256(v28469, v28437);
        const v28474 = stdlib.safeDiv256(v28473, v28458);
        const v28475 = stdlib.gt256(v28474, v28467);
        const v28476 = [v28469, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v28477 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v28467];
        const v28478 = v28475 ? v28476 : v28477;
        const v28480 = v28478[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '0')];
        const v28481 = v28478[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '1')];
        const v28486 = v28434.locked;
        const v28487 = v28486 ? false : true;
        stdlib.assert(v28487, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:939:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1148:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1149:21:application call to [unknown function] (defined at: ./index.rsh:1149:21:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v28498 = stdlib.safeAdd256(v28436, v28430);
        const v28505 = stdlib.safeSub256(v28498, v28449);
        const v28509 = stdlib.safeSub256(v28440, v28481);
        const v28512 = stdlib.safeSub256(v28505, v28480);
        const v28514 = v15703.protoBals;
        const v28515 = v28514.A;
        const v28519 = stdlib.safeAdd256(v28515, v28481);
        const v28520 = v28514.B;
        const v28524 = stdlib.safeAdd256(v28520, v28480);
        const v28526 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v28431);
        const v28527 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:79:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v28449);
        const v28528 = v28526 ? v28527 : false;
        stdlib.assert(v28528, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1148:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1149:21:application call to [unknown function] (defined at: ./index.rsh:1149:21:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v28533 = stdlib.safeMul256(v28437, v28436);
        const v28534 = stdlib.safeMul256(v28509, v28512);
        const v28535 = stdlib.ge256(v28534, v28533);
        stdlib.assert(v28535, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:963:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1148:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1149:21:application call to [unknown function] (defined at: ./index.rsh:1149:21:function exp)'],
          msg: 'constant product',
          who: 'Deployer'
          });
        const v28540 = {
          A: v28431,
          B: v28449
          };
        const v28541 = {
          A: v28509,
          B: v28512
          };
        const v28542 = {
          A: v28519,
          B: v28524
          };
        if (v28429) {
          await txn3.getOutput('Trader_exactSwapBForA', 'v28540', ctc15, v28540);
          const cv15703 = v15703;
          const cv15704 = v16739;
          const cv15707 = v15707;
          
          v15703 = cv15703;
          v15704 = cv15704;
          v15707 = cv15707;
          
          txn2 = txn3;
          continue;}
        else {
          const v28563 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
          const v28564 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
          const v28565 = [v16737, v15684];
          const v28566 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v28565];
          const v28570 = stdlib.bytesFromHex("0x4a968f8f");
          const v28571 = undefined /* Remote */;
          const v28572 = await txn3.getOutput('internal', 'v28571', ctc26, v28571);
          const v28574 = v28572[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
          const v28579 = stdlib.add(v15707, v28574);
          const v28580 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v28574);
          stdlib.assert(v28580, {
            at: './index.rsh:752:15:application',
            fs: ['at ./index.rsh:1047:41:application call to [unknown function] (defined at: ./index.rsh:735:56:function exp)', 'at ./index.rsh:1149:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1149:21:application call to [unknown function] (defined at: ./index.rsh:1149:21:function exp)'],
            msg: 'remote bill check',
            who: 'Deployer'
            });
          const v28581 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v16737, ctc1), null);
          const v28582 = stdlib.fromSome(v28581, stdlib.checkedBigNumberify('./index.rsh:1055:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v28583 = stdlib.safeAdd256(v28582, v28431);
          await stdlib.mapSet(map2, ctc9, v16737, ctc1, v28583);
          const v28584 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v16737, ctc1), null);
          const v28585 = stdlib.fromSome(v28584, stdlib.checkedBigNumberify('./index.rsh:1057:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v28586 = stdlib.safeAdd256(v28585, v28449);
          await stdlib.mapSet(map3, ctc9, v16737, ctc1, v28586);
          await txn3.getOutput('Trader_exactSwapBForA', 'v28540', ctc15, v28540);
          const v28598 = {
            A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
            B: v28430
            };
          const v28601 = [v16737, v28598, v28540, v28541];
          null;
          const v28602 = v15703.closed;
          const v28609 = {
            closed: v28602,
            lptBals: v15828,
            poolBals: v28541,
            protoBals: v28542,
            protoInfo: v28434
            };
          const cv15703 = v28609;
          const cv15704 = v16739;
          const cv15707 = v28579;
          
          v15703 = cv15703;
          v15704 = cv15704;
          v15707 = cv15707;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'Trader_swapAForB0_9533': {
        const v29116 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v29989 = v29116[stdlib.checkedBigNumberify('./index.rsh:1108:12:spread', stdlib.UInt_max, '0')];
        const v29990 = v29116[stdlib.checkedBigNumberify('./index.rsh:1108:12:spread', stdlib.UInt_max, '1')];
        const v29991 = v29116[stdlib.checkedBigNumberify('./index.rsh:1108:12:spread', stdlib.UInt_max, '2')];
        const v29995 = v15703.protoInfo;
        const v29997 = v15833.A;
        const v29998 = v15833.B;
        const v29999 = v29995.protoFee;
        const v30000 = v29995.totFee;
        const v30001 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v30000);
        const v30002 = stdlib.safeMul256(v29990, v30001);
        const v30003 = stdlib.safeMul256(v29997, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v30004 = stdlib.safeAdd256(v30003, v30002);
        const v30005 = stdlib.safeMul256(v30002, v29998);
        const v30006 = stdlib.safeDiv256(v30005, v30004);
        const v30010 = stdlib.safeMul256(v29999, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v30011 = stdlib.safeDiv256(v30010, v30000);
        const v30015 = stdlib.safeAdd256(v29997, v29990);
        const v30019 = stdlib.safeMul256(v29990, v29998);
        const v30020 = stdlib.safeDiv256(v30019, v30015);
        const v30021 = stdlib.safeSub256(v30020, v30006);
        const v30023 = stdlib.safeMul256(v30021, v30011);
        const v30024 = stdlib.safeDiv256(v30023, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v30025 = stdlib.safeMul256(v29990, v29999);
        const v30026 = stdlib.safeDiv256(v30025, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v30030 = stdlib.safeMul256(v30026, v29998);
        const v30031 = stdlib.safeDiv256(v30030, v30015);
        const v30032 = stdlib.gt256(v30031, v30024);
        const v30033 = [v30026, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v30034 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v30024];
        const v30035 = v30032 ? v30033 : v30034;
        const v30037 = v30035[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '0')];
        const v30038 = v30035[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '1')];
        const v30043 = v29995.locked;
        const v30044 = v30043 ? false : true;
        stdlib.assert(v30044, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:939:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1109:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1110:21:application call to [unknown function] (defined at: ./index.rsh:1110:21:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v30061 = stdlib.safeSub256(v29998, v30006);
        const v30065 = stdlib.safeSub256(v30015, v30037);
        const v30068 = stdlib.safeSub256(v30061, v30038);
        const v30070 = v15703.protoBals;
        const v30071 = v30070.A;
        const v30075 = stdlib.safeAdd256(v30071, v30037);
        const v30076 = v30070.B;
        const v30080 = stdlib.safeAdd256(v30076, v30038);
        const v30082 = stdlib.le256(v29991, v30006);
        stdlib.assert(v30082, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1109:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1110:21:application call to [unknown function] (defined at: ./index.rsh:1110:21:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v30087 = stdlib.safeMul256(v29997, v29998);
        const v30088 = stdlib.safeMul256(v30065, v30068);
        const v30089 = stdlib.ge256(v30088, v30087);
        stdlib.assert(v30089, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:963:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1109:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1110:21:application call to [unknown function] (defined at: ./index.rsh:1110:21:function exp)'],
          msg: 'constant product',
          who: 'Deployer'
          });
        const v30094 = {
          A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          B: v30006
          };
        const v30095 = {
          A: v30065,
          B: v30068
          };
        const v30096 = {
          A: v30075,
          B: v30080
          };
        if (v29989) {
          await txn3.getOutput('Trader_swapAForB', 'v30094', ctc15, v30094);
          const cv15703 = v15703;
          const cv15704 = v16739;
          const cv15707 = v15707;
          
          v15703 = cv15703;
          v15704 = cv15704;
          v15707 = cv15707;
          
          txn2 = txn3;
          continue;}
        else {
          const v30117 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
          const v30118 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
          const v30119 = [v16737, v15684];
          const v30120 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v30119];
          const v30124 = stdlib.bytesFromHex("0x4a968f8f");
          const v30125 = undefined /* Remote */;
          const v30126 = await txn3.getOutput('internal', 'v30125', ctc26, v30125);
          const v30128 = v30126[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
          const v30133 = stdlib.add(v15707, v30128);
          const v30134 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v30128);
          stdlib.assert(v30134, {
            at: './index.rsh:752:15:application',
            fs: ['at ./index.rsh:1035:41:application call to [unknown function] (defined at: ./index.rsh:735:56:function exp)', 'at ./index.rsh:1110:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1110:21:application call to [unknown function] (defined at: ./index.rsh:1110:21:function exp)'],
            msg: 'remote bill check',
            who: 'Deployer'
            });
          const v30135 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v16737, ctc1), null);
          const v30136 = stdlib.fromSome(v30135, stdlib.checkedBigNumberify('./index.rsh:1043:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v30137 = stdlib.safeAdd256(v30136, v30006);
          await stdlib.mapSet(map3, ctc9, v16737, ctc1, v30137);
          const v30138 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v16737, ctc1), null);
          const v30139 = stdlib.fromSome(v30138, stdlib.checkedBigNumberify('./index.rsh:1045:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          await stdlib.mapSet(map2, ctc9, v16737, ctc1, v30139);
          await txn3.getOutput('Trader_swapAForB', 'v30094', ctc15, v30094);
          const v30151 = {
            A: v29990,
            B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v30154 = [v16737, v30151, v30094, v30095];
          null;
          const v30155 = v15703.closed;
          const v30162 = {
            closed: v30155,
            lptBals: v15828,
            poolBals: v30095,
            protoBals: v30096,
            protoInfo: v29995
            };
          const cv15703 = v30162;
          const cv15704 = v16739;
          const cv15707 = v30133;
          
          v15703 = cv15703;
          v15704 = cv15704;
          v15707 = cv15707;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'Trader_swapBForA0_9533': {
        const v30491 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v31542 = v30491[stdlib.checkedBigNumberify('./index.rsh:1123:12:spread', stdlib.UInt_max, '0')];
        const v31543 = v30491[stdlib.checkedBigNumberify('./index.rsh:1123:12:spread', stdlib.UInt_max, '1')];
        const v31544 = v30491[stdlib.checkedBigNumberify('./index.rsh:1123:12:spread', stdlib.UInt_max, '2')];
        const v31548 = v15703.protoInfo;
        const v31550 = v15833.B;
        const v31551 = v15833.A;
        const v31552 = v31548.protoFee;
        const v31553 = v31548.totFee;
        const v31554 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v31553);
        const v31555 = stdlib.safeMul256(v31543, v31554);
        const v31556 = stdlib.safeMul256(v31550, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v31557 = stdlib.safeAdd256(v31556, v31555);
        const v31558 = stdlib.safeMul256(v31555, v31551);
        const v31559 = stdlib.safeDiv256(v31558, v31557);
        const v31563 = stdlib.safeMul256(v31552, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v31564 = stdlib.safeDiv256(v31563, v31553);
        const v31568 = stdlib.safeAdd256(v31550, v31543);
        const v31572 = stdlib.safeMul256(v31543, v31551);
        const v31573 = stdlib.safeDiv256(v31572, v31568);
        const v31574 = stdlib.safeSub256(v31573, v31559);
        const v31576 = stdlib.safeMul256(v31574, v31564);
        const v31577 = stdlib.safeDiv256(v31576, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v31578 = stdlib.safeMul256(v31543, v31552);
        const v31579 = stdlib.safeDiv256(v31578, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v31583 = stdlib.safeMul256(v31579, v31551);
        const v31584 = stdlib.safeDiv256(v31583, v31568);
        const v31585 = stdlib.gt256(v31584, v31577);
        const v31586 = [v31579, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v31587 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v31577];
        const v31588 = v31585 ? v31586 : v31587;
        const v31590 = v31588[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '0')];
        const v31591 = v31588[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '1')];
        const v31596 = v31548.locked;
        const v31597 = v31596 ? false : true;
        stdlib.assert(v31597, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:939:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1124:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1125:21:application call to [unknown function] (defined at: ./index.rsh:1125:21:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v31612 = stdlib.safeSub256(v31551, v31559);
        const v31618 = stdlib.safeSub256(v31612, v31591);
        const v31621 = stdlib.safeSub256(v31568, v31590);
        const v31623 = v15703.protoBals;
        const v31624 = v31623.A;
        const v31628 = stdlib.safeAdd256(v31624, v31591);
        const v31629 = v31623.B;
        const v31633 = stdlib.safeAdd256(v31629, v31590);
        const v31635 = stdlib.le256(v31544, v31559);
        stdlib.assert(v31635, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1124:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1125:21:application call to [unknown function] (defined at: ./index.rsh:1125:21:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v31641 = stdlib.safeMul256(v31551, v31550);
        const v31642 = stdlib.safeMul256(v31618, v31621);
        const v31643 = stdlib.ge256(v31642, v31641);
        stdlib.assert(v31643, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:963:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1124:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1125:21:application call to [unknown function] (defined at: ./index.rsh:1125:21:function exp)'],
          msg: 'constant product',
          who: 'Deployer'
          });
        const v31648 = {
          A: v31559,
          B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v31649 = {
          A: v31618,
          B: v31621
          };
        const v31650 = {
          A: v31628,
          B: v31633
          };
        if (v31542) {
          await txn3.getOutput('Trader_swapBForA', 'v31648', ctc15, v31648);
          const cv15703 = v15703;
          const cv15704 = v16739;
          const cv15707 = v15707;
          
          v15703 = cv15703;
          v15704 = cv15704;
          v15707 = cv15707;
          
          txn2 = txn3;
          continue;}
        else {
          const v31671 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
          const v31672 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
          const v31673 = [v16737, v15684];
          const v31674 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v31673];
          const v31678 = stdlib.bytesFromHex("0x4a968f8f");
          const v31679 = undefined /* Remote */;
          const v31680 = await txn3.getOutput('internal', 'v31679', ctc26, v31679);
          const v31682 = v31680[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
          const v31687 = stdlib.add(v15707, v31682);
          const v31688 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v31682);
          stdlib.assert(v31688, {
            at: './index.rsh:752:15:application',
            fs: ['at ./index.rsh:1047:41:application call to [unknown function] (defined at: ./index.rsh:735:56:function exp)', 'at ./index.rsh:1125:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1125:21:application call to [unknown function] (defined at: ./index.rsh:1125:21:function exp)'],
            msg: 'remote bill check',
            who: 'Deployer'
            });
          const v31689 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v16737, ctc1), null);
          const v31690 = stdlib.fromSome(v31689, stdlib.checkedBigNumberify('./index.rsh:1055:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v31691 = stdlib.safeAdd256(v31690, v31559);
          await stdlib.mapSet(map2, ctc9, v16737, ctc1, v31691);
          const v31692 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v16737, ctc1), null);
          const v31693 = stdlib.fromSome(v31692, stdlib.checkedBigNumberify('./index.rsh:1057:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          await stdlib.mapSet(map3, ctc9, v16737, ctc1, v31693);
          await txn3.getOutput('Trader_swapBForA', 'v31648', ctc15, v31648);
          const v31705 = {
            A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
            B: v31543
            };
          const v31708 = [v16737, v31705, v31648, v31649];
          null;
          const v31709 = v15703.closed;
          const v31716 = {
            closed: v31709,
            lptBals: v15828,
            poolBals: v31649,
            protoBals: v31650,
            protoInfo: v31548
            };
          const cv15703 = v31716;
          const cv15704 = v16739;
          const cv15707 = v31687;
          
          v15703 = cv15703;
          v15704 = cv15704;
          v15707 = cv15707;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'arc200_approve0_9533': {
        const v31866 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v33096 = v31866[stdlib.checkedBigNumberify('./index.rsh:661:12:spread', stdlib.UInt_max, '0')];
        const v33097 = v31866[stdlib.checkedBigNumberify('./index.rsh:661:12:spread', stdlib.UInt_max, '1')];
        const v33099 = stdlib.addressEq(v16737, v15651);
        const v33100 = v33099 ? false : true;
        stdlib.assert(v33100, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:594:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:662:20:application call to "chkApprove_" (defined at: ./index.rsh:593:56:function exp)', 'at ./index.rsh:664:15:application call to [unknown function] (defined at: ./index.rsh:664:15:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v33102 = stdlib.addressEq(v33096, v15651);
        const v33103 = v33102 ? false : true;
        stdlib.assert(v33103, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:595:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:662:20:application call to "chkApprove_" (defined at: ./index.rsh:593:56:function exp)', 'at ./index.rsh:664:15:application call to [unknown function] (defined at: ./index.rsh:664:15:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v33107 = [v16737, v33096];
        await stdlib.mapSet(map1, ctc22, v33107, ctc1, v33097);
        null;
        const v33109 = true;
        await txn3.getOutput('arc200_approve', 'v33109', ctc11, v33109);
        const cv15703 = v15703;
        const cv15704 = v16739;
        const cv15707 = v15707;
        
        v15703 = cv15703;
        v15704 = cv15704;
        v15707 = cv15707;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_9533': {
        const v33241 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v34494 = v33241[stdlib.checkedBigNumberify('./index.rsh:626:12:spread', stdlib.UInt_max, '0')];
        const v34495 = v33241[stdlib.checkedBigNumberify('./index.rsh:626:12:spread', stdlib.UInt_max, '1')];
        const v34497 = stdlib.addressEq(v16737, v34494);
        const v34498 = v34497 ? false : true;
        stdlib.assert(v34498, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:587:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:627:20:application call to "chkTransfer" (defined at: ./index.rsh:586:50:function exp)', 'at ./index.rsh:629:15:application call to [unknown function] (defined at: ./index.rsh:629:15:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v34500 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v16737, ctc1), null);
        const v34501 = stdlib.fromSome(v34500, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v34502 = stdlib.ge256(v34501, v34495);
        stdlib.assert(v34502, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:588:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:627:20:application call to "chkTransfer" (defined at: ./index.rsh:586:50:function exp)', 'at ./index.rsh:629:15:application call to [unknown function] (defined at: ./index.rsh:629:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v34506 = true;
        await txn3.getOutput('arc200_transfer', 'v34506', ctc11, v34506);
        const v34518 = stdlib.safeSub256(v34501, v34495);
        await stdlib.mapSet(map0, ctc9, v16737, ctc1, v34518);
        const v34519 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v34494, ctc1), null);
        const v34520 = stdlib.fromSome(v34519, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v34521 = stdlib.safeAdd256(v34520, v34495);
        await stdlib.mapSet(map0, ctc9, v34494, ctc1, v34521);
        null;
        const cv15703 = v15703;
        const cv15704 = v16739;
        const cv15707 = v15707;
        
        v15703 = cv15703;
        v15704 = cv15704;
        v15707 = cv15707;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transferFrom0_9533': {
        const v34616 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v35900 = v34616[stdlib.checkedBigNumberify('./index.rsh:644:12:spread', stdlib.UInt_max, '0')];
        const v35901 = v34616[stdlib.checkedBigNumberify('./index.rsh:644:12:spread', stdlib.UInt_max, '1')];
        const v35902 = v34616[stdlib.checkedBigNumberify('./index.rsh:644:12:spread', stdlib.UInt_max, '2')];
        const v35904 = stdlib.addressEq(v35900, v35901);
        const v35905 = v35904 ? false : true;
        stdlib.assert(v35905, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:602:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:645:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:647:15:application call to [unknown function] (defined at: ./index.rsh:647:15:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v35907 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v35900, ctc1), null);
        const v35908 = stdlib.fromSome(v35907, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v35909 = stdlib.ge256(v35908, v35902);
        stdlib.assert(v35909, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:603:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:645:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:647:15:application call to [unknown function] (defined at: ./index.rsh:647:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v35911 = [v35900, v16737];
        const v35912 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v35911, ctc1), null);
        const v35913 = stdlib.fromSome(v35912, stdlib.checkedBigNumberify('./index.rsh:521:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v35914 = stdlib.ge256(v35913, v35902);
        stdlib.assert(v35914, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:607:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:645:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:647:15:application call to [unknown function] (defined at: ./index.rsh:647:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v35923 = stdlib.safeSub256(v35908, v35902);
        await stdlib.mapSet(map0, ctc9, v35900, ctc1, v35923);
        const v35924 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v35901, ctc1), null);
        const v35925 = stdlib.fromSome(v35924, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v35926 = stdlib.safeAdd256(v35925, v35902);
        await stdlib.mapSet(map0, ctc9, v35901, ctc1, v35926);
        null;
        const v35931 = stdlib.safeSub256(v35913, v35902);
        await stdlib.mapSet(map1, ctc22, v35911, ctc1, v35931);
        null;
        const v35934 = true;
        await txn3.getOutput('arc200_transferFrom', 'v35934', ctc11, v35934);
        const cv15703 = v15703;
        const cv15704 = v16739;
        const cv15707 = v15707;
        
        v15703 = cv15703;
        v15704 = cv15704;
        v15707 = cv15707;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'createAllowanceBox0_9533': {
        const v35991 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v37320 = v35991[stdlib.checkedBigNumberify('./index.rsh:704:12:spread', stdlib.UInt_max, '0')];
        const v37321 = v35991[stdlib.checkedBigNumberify('./index.rsh:704:12:spread', stdlib.UInt_max, '1')];
        const v37322 = [v37320, v37321];
        const v37323 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v37322, ctc1), null);
        const v37324 = {
          None: 0,
          Some: 1
          }[v37323[0]];
        const v37325 = stdlib.eq(v37324, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v37326 = v37325 ? false : true;
        stdlib.assert(v37326, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:705:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:710:15:application call to [unknown function] (defined at: ./index.rsh:710:15:function exp)'],
          msg: 'ARC200: Allowance box already exists',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc22, v37322, ctc1, stdlib.checkedBigNumberify('./index.rsh:711:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v37331 = null;
        await txn3.getOutput('createAllowanceBox', 'v37331', ctc0, v37331);
        const cv15703 = v15703;
        const cv15704 = v16739;
        const cv15707 = v15707;
        
        v15703 = cv15703;
        v15704 = cv15704;
        v15707 = cv15707;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'createBalanceBoxes0_9533': {
        const v37366 = v16738[1];
        undefined /* setApiDetails */;
        ;
        const v38716 = v37366[stdlib.checkedBigNumberify('./index.rsh:677:12:spread', stdlib.UInt_max, '0')];
        const v38717 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v38716, ctc1), null);
        const v38718 = {
          None: 0,
          Some: 1
          }[v38717[0]];
        const v38719 = stdlib.eq(v38718, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v38720 = v38719 ? false : true;
        stdlib.assert(v38720, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:678:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:688:15:application call to [unknown function] (defined at: ./index.rsh:688:15:function exp)'],
          msg: 'ARC200: Balance box already exists',
          who: 'Deployer'
          });
        const v38722 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v38716, ctc1), null);
        const v38723 = {
          None: 0,
          Some: 1
          }[v38722[0]];
        const v38724 = stdlib.eq(v38723, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v38725 = v38724 ? false : true;
        stdlib.assert(v38725, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:679:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:688:15:application call to [unknown function] (defined at: ./index.rsh:688:15:function exp)'],
          msg: 'SWAP200: Reserve A box already exists',
          who: 'Deployer'
          });
        const v38727 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v38716, ctc1), null);
        const v38728 = {
          None: 0,
          Some: 1
          }[v38727[0]];
        const v38729 = stdlib.eq(v38728, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v38730 = v38729 ? false : true;
        stdlib.assert(v38730, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:683:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:688:15:application call to [unknown function] (defined at: ./index.rsh:688:15:function exp)'],
          msg: 'SWAP200: Reserve B box already exists',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc9, v38716, ctc1, stdlib.checkedBigNumberify('./index.rsh:689:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        await stdlib.mapSet(map2, ctc9, v38716, ctc1, stdlib.checkedBigNumberify('./index.rsh:690:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        await stdlib.mapSet(map3, ctc9, v38716, ctc1, stdlib.checkedBigNumberify('./index.rsh:691:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v38733 = null;
        await txn3.getOutput('createBalanceBoxes', 'v38733', ctc0, v38733);
        const cv15703 = v15703;
        const cv15704 = v16739;
        const cv15707 = v15707;
        
        v15703 = cv15703;
        v15704 = cv15704;
        v15707 = cv15707;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc27],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v38797], secs: v38799, time: v38798, didSend: v15583, from: v38796 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v38800 = null;
  await txn3.getOutput('Protocol_delete', 'v38800', ctc0, v38800);
  return;
  
  
  
  
  };
export async function _Protocol_delete2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Protocol_delete2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Protocol_delete2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc10], ['locked', ctc8]]);
  const ctc12 = stdlib.T_Object({
    closed: ctc8,
    lptBals: ctc9,
    poolBals: ctc9,
    protoBals: ctc9,
    protoInfo: ctc11
    });
  const ctc13 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15703] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc3, ctc3, ctc7, ctc4, ctc12]);
  const v38795 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1152:5:application',
    fs: ['at ./index.rsh:1152:5:application call to [unknown function] (defined at: ./index.rsh:1152:5:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15703, v38795],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1152:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v38797], secs: v38799, time: v38798, didSend: v15583, from: v38796 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v38800 = null;
      const v38801 = await txn1.getOutput('Protocol_delete', 'v38800', ctc0, v38800);
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc12, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v38797], secs: v38799, time: v38798, didSend: v15583, from: v38796 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v38800 = null;
  const v38801 = await txn1.getOutput('Protocol_delete', 'v38800', ctc0, v38800);
  stdlib.protect(ctc0, await interact.out(v38797, v38801), {
    at: './index.rsh:1152:5:application',
    fs: ['at ./index.rsh:1152:5:application call to [unknown function] (defined at: ./index.rsh:1152:5:function exp)', 'at ./index.rsh:1153:6:application call to "k" (defined at: ./index.rsh:1152:5:function exp)'],
    msg: 'out',
    who: 'Protocol_delete'
    });
  
  return;
  
  
  
  };
export async function _Protocol_harvest4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Protocol_harvest4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Protocol_harvest4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc18 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc14,
    Provider_deposit0_9533: ctc15,
    Provider_depositA0_9533: ctc16,
    Provider_depositB0_9533: ctc16,
    Provider_withdraw0_9533: ctc17,
    Provider_withdrawA0_9533: ctc16,
    Provider_withdrawB0_9533: ctc16,
    Trader_exactSwapAForB0_9533: ctc18,
    Trader_exactSwapBForA0_9533: ctc18,
    Trader_swapAForB0_9533: ctc18,
    Trader_swapBForA0_9533: ctc18,
    arc200_approve0_9533: ctc19,
    arc200_transfer0_9533: ctc19,
    arc200_transferFrom0_9533: ctc20,
    createAllowanceBox0_9533: ctc21,
    createBalanceBoxes0_9533: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc10, ctc4]);
  const ctc25 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc26 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v15964 = ctc.selfAddress();
  const v15966 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:773:60:application call to [unknown function] (defined at: ./index.rsh:773:60:function exp)', 'at ./index.rsh:506:31:application call to "runProtocol_harvest0_9533" (defined at: ./index.rsh:773:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v15968 = v15966[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v15969 = v15968.protoFee;
  const v15970 = v15968.lpFee;
  const v15971 = v15968.totFee;
  const v15972 = stdlib.lt256(v15969, stdlib.checkedBigNumberify('./index.rsh:294:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v15973 = stdlib.lt256(v15970, stdlib.checkedBigNumberify('./index.rsh:295:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v15974 = v15972 ? v15973 : false;
  let v15975;
  if (v15974) {
    const v15976 = stdlib.safeAdd256(v15970, v15969);
    const v15977 = stdlib.eq256(v15971, v15976);
    v15975 = v15977;
    }
  else {
    v15975 = false;
    }
  const v15978 = stdlib.lt256(v15971, stdlib.checkedBigNumberify('./index.rsh:297:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v15979 = v15975 ? v15978 : false;
  const v15980 = stdlib.gt256(v15971, stdlib.checkedBigNumberify('./index.rsh:298:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v15981 = v15979 ? v15980 : false;
  stdlib.assert(v15981, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:773:60:application call to [unknown function] (defined at: ./index.rsh:773:60:function exp)', 'at ./index.rsh:506:31:application call to "runProtocol_harvest0_9533" (defined at: ./index.rsh:773:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v15985 = v15703.protoInfo;
  const v15986 = v15985.protoAddr;
  const v15987 = stdlib.addressEq(v15964, v15986);
  stdlib.assert(v15987, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:760:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:774:21:application call to "chkProtoAddr" (defined at: ./index.rsh:759:42:function exp)', 'at ./index.rsh:773:60:application call to [unknown function] (defined at: ./index.rsh:773:60:function exp)', 'at ./index.rsh:506:31:application call to "runProtocol_harvest0_9533" (defined at: ./index.rsh:773:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  let v15995;
  if (v15974) {
    const v15996 = stdlib.safeAdd256(v15970, v15969);
    const v15997 = stdlib.eq256(v15971, v15996);
    v15995 = v15997;
    }
  else {
    v15995 = false;
    }
  const v15999 = v15995 ? v15978 : false;
  const v16001 = v15999 ? v15980 : false;
  stdlib.assert(v16001, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:300:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:775:16:application call to "chkFees" (defined at: ./index.rsh:300:21:function exp)', 'at ./index.rsh:773:60:application call to [unknown function] (defined at: ./index.rsh:773:60:function exp)', 'at ./index.rsh:506:31:application call to "runProtocol_harvest0_9533" (defined at: ./index.rsh:773:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v16015 = ['Protocol_harvest0_9533', v15966];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v16015],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:773:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          ;
          const v16762 = v16741[stdlib.checkedBigNumberify('./index.rsh:773:12:spread', stdlib.UInt_max, '0')];
          const v16763 = v16741[stdlib.checkedBigNumberify('./index.rsh:773:12:spread', stdlib.UInt_max, '1')];
          const v16769 = v16763.protoFee;
          const v16770 = v16763.lpFee;
          const v16771 = v16763.totFee;
          const v16786 = (stdlib.le(await ctc.getBalance(), v15707) ? stdlib.checkedBigNumberify('./index.rsh:778:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v15707));
          const v16787 = stdlib.safeAdd(v16786, v15707);
          const v16791 = stdlib.sub(v16787, v16786);
          sim_r.txns.push({
            kind: 'from',
            to: v16762,
            tok: undefined /* Nothing */
            });
          const v16792 = v15703.protoBals;
          const v16793 = v16792.A;
          const v16794 = v16792.B;
          const v16795 = {
            A: v16793,
            B: v16794
            };
          const v16796 = [v16795, v16786];
          const v16797 = await txn1.getOutput('Protocol_harvest', 'v16796', ctc24, v16796);
          
          const v16824 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
          const v16825 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16762];
          const v16829 = stdlib.bytesFromHex("0xda7025b9");
          const v16830 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v15639,
              remote: ({
                accs: [v16762],
                apps: [v15639],
                bills: stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc26, v16824], [ctc26, v16825]],
                fees: stdlib.checkedBigNumberify('./index.rsh:727:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v16831 = await txn1.getOutput('internal', 'v16830', ctc25, v16830);
          const v16833 = v16831[stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0')];
          const v16838 = stdlib.add(v16791, v16833);
          const v16843 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
          const v16844 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16762];
          const v16849 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v15641,
              remote: ({
                accs: [v16762],
                apps: [v15641],
                bills: stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc26, v16843], [ctc26, v16844]],
                fees: stdlib.checkedBigNumberify('./index.rsh:727:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v16850 = await txn1.getOutput('internal', 'v16849', ctc25, v16849);
          const v16852 = v16850[stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0')];
          const v16857 = stdlib.add(v16838, v16852);
          const v16862 = v16763.protoAddr;
          const v16863 = v16763.locked;
          const v16864 = {
            locked: v16863,
            lpFee: v16770,
            protoAddr: v16862,
            protoFee: v16769,
            totFee: v16771
            };
          const v16865 = [v16864];
          null;
          const v16866 = v15703.closed;
          const v16872 = {
            closed: v16866,
            lptBals: v15828,
            poolBals: v15833,
            protoBals: v15699,
            protoInfo: v16763
            };
          const v78879 = v16872;
          const v78881 = v16857;
          const v78882 = v16872.closed;
          if (v78882) {
            sim_r.isHalt = false;
            }
          else {
            const v78884 = v16872.lptBals;
            const v78885 = v78884.A;
            const v78886 = v78884.B;
            const v78887 = v16872.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v16762 = v16741[stdlib.checkedBigNumberify('./index.rsh:773:12:spread', stdlib.UInt_max, '0')];
      const v16763 = v16741[stdlib.checkedBigNumberify('./index.rsh:773:12:spread', stdlib.UInt_max, '1')];
      const v16765 = v15703.protoInfo;
      const v16766 = v16765.protoAddr;
      const v16767 = stdlib.addressEq(v16737, v16766);
      stdlib.assert(v16767, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:760:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:774:21:application call to "chkProtoAddr" (defined at: ./index.rsh:759:42:function exp)', 'at ./index.rsh:777:15:application call to [unknown function] (defined at: ./index.rsh:777:15:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v16769 = v16763.protoFee;
      const v16770 = v16763.lpFee;
      const v16771 = v16763.totFee;
      const v16772 = stdlib.lt256(v16769, stdlib.checkedBigNumberify('./index.rsh:294:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v16773 = stdlib.lt256(v16770, stdlib.checkedBigNumberify('./index.rsh:295:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v16774 = v16772 ? v16773 : false;
      let v16775;
      if (v16774) {
        const v16776 = stdlib.safeAdd256(v16770, v16769);
        const v16777 = stdlib.eq256(v16771, v16776);
        v16775 = v16777;
        }
      else {
        v16775 = false;
        }
      const v16778 = stdlib.lt256(v16771, stdlib.checkedBigNumberify('./index.rsh:297:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v16779 = v16775 ? v16778 : false;
      const v16780 = stdlib.gt256(v16771, stdlib.checkedBigNumberify('./index.rsh:298:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v16781 = v16779 ? v16780 : false;
      stdlib.assert(v16781, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:300:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:775:16:application call to "chkFees" (defined at: ./index.rsh:300:21:function exp)', 'at ./index.rsh:777:15:application call to [unknown function] (defined at: ./index.rsh:777:15:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v16786 = (stdlib.le(await ctc.getBalance(), v15707) ? stdlib.checkedBigNumberify('./index.rsh:778:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v15707));
      const v16787 = stdlib.safeAdd(v16786, v15707);
      const v16791 = stdlib.sub(v16787, v16786);
      ;
      const v16792 = v15703.protoBals;
      const v16793 = v16792.A;
      const v16794 = v16792.B;
      const v16795 = {
        A: v16793,
        B: v16794
        };
      const v16796 = [v16795, v16786];
      const v16797 = await txn1.getOutput('Protocol_harvest', 'v16796', ctc24, v16796);
      if (v13177) {
        stdlib.protect(ctc0, await interact.out(v16741, v16797), {
          at: './index.rsh:773:13:application',
          fs: ['at ./index.rsh:773:13:application call to [unknown function] (defined at: ./index.rsh:773:13:function exp)', 'at ./index.rsh:780:14:application call to "k" (defined at: ./index.rsh:777:15:function exp)', 'at ./index.rsh:777:15:application call to [unknown function] (defined at: ./index.rsh:777:15:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v16824 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
      const v16825 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16762];
      const v16829 = stdlib.bytesFromHex("0xda7025b9");
      const v16830 = undefined /* Remote */;
      const v16831 = await txn1.getOutput('internal', 'v16830', ctc25, v16830);
      const v16833 = v16831[stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0')];
      const v16838 = stdlib.add(v16791, v16833);
      const v16839 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16833);
      stdlib.assert(v16839, {
        at: './index.rsh:733:15:application',
        fs: ['at ./index.rsh:781:33:application call to [unknown function] (defined at: ./index.rsh:720:45:function exp)', 'at ./index.rsh:777:15:application call to [unknown function] (defined at: ./index.rsh:777:15:function exp)'],
        msg: 'remote bill check',
        who: 'Protocol_harvest'
        });
      const v16843 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
      const v16844 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16762];
      const v16849 = undefined /* Remote */;
      const v16850 = await txn1.getOutput('internal', 'v16849', ctc25, v16849);
      const v16852 = v16850[stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0')];
      const v16857 = stdlib.add(v16838, v16852);
      const v16858 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16852);
      stdlib.assert(v16858, {
        at: './index.rsh:733:15:application',
        fs: ['at ./index.rsh:782:33:application call to [unknown function] (defined at: ./index.rsh:720:45:function exp)', 'at ./index.rsh:777:15:application call to [unknown function] (defined at: ./index.rsh:777:15:function exp)'],
        msg: 'remote bill check',
        who: 'Protocol_harvest'
        });
      const v16862 = v16763.protoAddr;
      const v16863 = v16763.locked;
      const v16864 = {
        locked: v16863,
        lpFee: v16770,
        protoAddr: v16862,
        protoFee: v16769,
        totFee: v16771
        };
      const v16865 = [v16864];
      null;
      const v16866 = v15703.closed;
      const v16872 = {
        closed: v16866,
        lptBals: v15828,
        poolBals: v15833,
        protoBals: v15699,
        protoInfo: v16763
        };
      const v78879 = v16872;
      const v78881 = v16857;
      const v78882 = v16872.closed;
      if (v78882) {
        return;
        }
      else {
        const v78884 = v16872.lptBals;
        const v78885 = v78884.A;
        const v78886 = v78884.B;
        const v78887 = v16872.poolBals;
        return;
        }
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_deposit4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_deposit4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_deposit4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc18 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc14,
    Provider_depositA0_9533: ctc16,
    Provider_depositB0_9533: ctc16,
    Provider_withdraw0_9533: ctc17,
    Provider_withdrawA0_9533: ctc16,
    Provider_withdrawB0_9533: ctc16,
    Trader_exactSwapAForB0_9533: ctc18,
    Trader_exactSwapBForA0_9533: ctc18,
    Trader_swapAForB0_9533: ctc18,
    Trader_swapBForA0_9533: ctc18,
    arc200_approve0_9533: ctc19,
    arc200_transfer0_9533: ctc19,
    arc200_transferFrom0_9533: ctc20,
    createAllowanceBox0_9533: ctc21,
    createBalanceBoxes0_9533: ctc22
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v16049 = ctc.selfAddress();
  const v16051 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:832:45:application call to [unknown function] (defined at: ./index.rsh:832:45:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_deposit0_9533" (defined at: ./index.rsh:832:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v16052 = v16051[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v16053 = v16051[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v16054 = v16052.A;
  const v16055 = v16052.B;
  const v16058 = v15703.protoInfo;
  const v16059 = v16058.locked;
  const v16060 = v16059 ? false : true;
  stdlib.assert(v16060, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:833:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:832:45:application call to [unknown function] (defined at: ./index.rsh:832:45:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_deposit0_9533" (defined at: ./index.rsh:832:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'locked',
    who: 'Provider_deposit'
    });
  const v16062 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v16049, ctc1), null);
  const v16063 = stdlib.fromSome(v16062, stdlib.checkedBigNumberify('./index.rsh:834:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v16064 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v16049, ctc1), null);
  const v16065 = stdlib.fromSome(v16064, stdlib.checkedBigNumberify('./index.rsh:835:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v16067 = stdlib.ge256(v16063, v16054);
  stdlib.assert(v16067, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:836:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:832:45:application call to [unknown function] (defined at: ./index.rsh:832:45:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_deposit0_9533" (defined at: ./index.rsh:832:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'inBals A balance insufficient',
    who: 'Provider_deposit'
    });
  const v16070 = stdlib.ge256(v16065, v16055);
  stdlib.assert(v16070, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:837:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:832:45:application call to [unknown function] (defined at: ./index.rsh:832:45:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_deposit0_9533" (defined at: ./index.rsh:832:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'inBals B balance insufficient',
    who: 'Provider_deposit'
    });
  let v16072;
  const v16078 = stdlib.eq256(v15830, stdlib.checkedBigNumberify('./index.rsh:284:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  if (v16078) {
    const v16079 = stdlib.safeMul256(v16054, v16055);
    const v16080 = stdlib.sqrt256(v16079);
    v16072 = v16080;
    }
  else {
    const v16081 = v15833.A;
    const v16082 = v15833.B;
    const v16086 = stdlib.safeMul256(v16054, v15830);
    const v16087 = stdlib.safeDiv256(v16086, v16081);
    const v16091 = stdlib.safeMul256(v16055, v15830);
    const v16092 = stdlib.safeDiv256(v16091, v16082);
    const v16093 = stdlib.lt256(v16087, v16092);
    const v16094 = v16093 ? v16087 : v16092;
    v16072 = v16094;
    }
  const v16095 = stdlib.le256(v16053, v16072);
  stdlib.assert(v16095, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:839:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:832:45:application call to [unknown function] (defined at: ./index.rsh:832:45:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_deposit0_9533" (defined at: ./index.rsh:832:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  const v16099 = stdlib.addressEq(v15684, v16049);
  const v16100 = v16099 ? false : true;
  stdlib.assert(v16100, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:587:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:840:20:application call to "chkTransfer" (defined at: ./index.rsh:586:50:function exp)', 'at ./index.rsh:832:45:application call to [unknown function] (defined at: ./index.rsh:832:45:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_deposit0_9533" (defined at: ./index.rsh:832:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'Provider_deposit'
    });
  const v16102 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v15684, ctc1), null);
  const v16103 = stdlib.fromSome(v16102, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v16104 = stdlib.ge256(v16103, v16072);
  stdlib.assert(v16104, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:588:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:840:20:application call to "chkTransfer" (defined at: ./index.rsh:586:50:function exp)', 'at ./index.rsh:832:45:application call to [unknown function] (defined at: ./index.rsh:832:45:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_deposit0_9533" (defined at: ./index.rsh:832:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'Provider_deposit'
    });
  const v16115 = ['Provider_deposit0_9533', v16051];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v16115],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:832:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          ;
          const v18252 = v18116[stdlib.checkedBigNumberify('./index.rsh:832:12:spread', stdlib.UInt_max, '0')];
          const v18254 = v15703.protoInfo;
          const v18258 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v16737, ctc1), null);
          const v18259 = stdlib.fromSome(v18258, stdlib.checkedBigNumberify('./index.rsh:834:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v18260 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v16737, ctc1), null);
          const v18261 = stdlib.fromSome(v18260, stdlib.checkedBigNumberify('./index.rsh:835:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v18262 = v18252.A;
          const v18265 = v18252.B;
          let v18268;
          const v18274 = stdlib.eq256(v15830, stdlib.checkedBigNumberify('./index.rsh:284:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          if (v18274) {
            const v18275 = stdlib.safeMul256(v18262, v18265);
            const v18276 = stdlib.sqrt256(v18275);
            v18268 = v18276;
            }
          else {
            const v18277 = v15833.A;
            const v18278 = v15833.B;
            const v18282 = stdlib.safeMul256(v18262, v15830);
            const v18283 = stdlib.safeDiv256(v18282, v18277);
            const v18287 = stdlib.safeMul256(v18265, v15830);
            const v18288 = stdlib.safeDiv256(v18287, v18278);
            const v18289 = stdlib.lt256(v18283, v18288);
            const v18290 = v18289 ? v18283 : v18288;
            v18268 = v18290;
            }
          const v18298 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v15684, ctc1), null);
          const v18299 = stdlib.fromSome(v18298, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v18305 = stdlib.safeSub256(v18259, v18262);
          await stdlib.simMapSet(sim_r, 2, ctc8, v16737, ctc1, v18305);
          const v18307 = stdlib.safeSub256(v18261, v18265);
          await stdlib.simMapSet(sim_r, 3, ctc8, v16737, ctc1, v18307);
          const v18313 = stdlib.safeSub256(v18299, v18268);
          await stdlib.simMapSet(sim_r, 0, ctc8, v15684, ctc1, v18313);
          const v18314 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v16737, ctc1), null);
          const v18315 = stdlib.fromSome(v18314, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v18316 = stdlib.safeAdd256(v18315, v18268);
          await stdlib.simMapSet(sim_r, 0, ctc8, v16737, ctc1, v18316);
          null;
          const v18318 = await txn1.getOutput('Provider_deposit', 'v18268', ctc1, v18268);
          
          const v18327 = v15703.closed;
          const v18330 = v15703.protoBals;
          const v18333 = v15833.A;
          const v18338 = stdlib.safeAdd256(v18333, v18262);
          const v18339 = v15833.B;
          const v18344 = stdlib.safeAdd256(v18339, v18265);
          const v18353 = stdlib.safeSub256(v15829, v18268);
          const v18357 = stdlib.safeAdd256(v15830, v18268);
          const v18360 = {
            A: v18353,
            B: v18357
            };
          const v18361 = {
            A: v18338,
            B: v18344
            };
          const v18362 = {
            closed: v18327,
            lptBals: v18360,
            poolBals: v18361,
            protoBals: v18330,
            protoInfo: v18254
            };
          const v79215 = v18362;
          const v79217 = v15707;
          const v79218 = v18362.closed;
          if (v79218) {
            sim_r.isHalt = false;
            }
          else {
            const v79220 = v18362.lptBals;
            const v79221 = v79220.A;
            const v79222 = v79220.B;
            const v79223 = v18362.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v18252 = v18116[stdlib.checkedBigNumberify('./index.rsh:832:12:spread', stdlib.UInt_max, '0')];
      const v18253 = v18116[stdlib.checkedBigNumberify('./index.rsh:832:12:spread', stdlib.UInt_max, '1')];
      const v18254 = v15703.protoInfo;
      const v18255 = v18254.locked;
      const v18256 = v18255 ? false : true;
      stdlib.assert(v18256, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:833:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
        msg: 'locked',
        who: 'Provider_deposit'
        });
      const v18258 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v16737, ctc1), null);
      const v18259 = stdlib.fromSome(v18258, stdlib.checkedBigNumberify('./index.rsh:834:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v18260 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v16737, ctc1), null);
      const v18261 = stdlib.fromSome(v18260, stdlib.checkedBigNumberify('./index.rsh:835:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v18262 = v18252.A;
      const v18263 = stdlib.ge256(v18259, v18262);
      stdlib.assert(v18263, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:836:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
        msg: 'inBals A balance insufficient',
        who: 'Provider_deposit'
        });
      const v18265 = v18252.B;
      const v18266 = stdlib.ge256(v18261, v18265);
      stdlib.assert(v18266, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:837:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
        msg: 'inBals B balance insufficient',
        who: 'Provider_deposit'
        });
      let v18268;
      const v18274 = stdlib.eq256(v15830, stdlib.checkedBigNumberify('./index.rsh:284:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      if (v18274) {
        const v18275 = stdlib.safeMul256(v18262, v18265);
        const v18276 = stdlib.sqrt256(v18275);
        v18268 = v18276;
        }
      else {
        const v18277 = v15833.A;
        const v18278 = v15833.B;
        const v18282 = stdlib.safeMul256(v18262, v15830);
        const v18283 = stdlib.safeDiv256(v18282, v18277);
        const v18287 = stdlib.safeMul256(v18265, v15830);
        const v18288 = stdlib.safeDiv256(v18287, v18278);
        const v18289 = stdlib.lt256(v18283, v18288);
        const v18290 = v18289 ? v18283 : v18288;
        v18268 = v18290;
        }
      const v18291 = stdlib.le256(v18253, v18268);
      stdlib.assert(v18291, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:839:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      const v18295 = stdlib.addressEq(v15684, v16737);
      const v18296 = v18295 ? false : true;
      stdlib.assert(v18296, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:587:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:840:20:application call to "chkTransfer" (defined at: ./index.rsh:586:50:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'Provider_deposit'
        });
      const v18298 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v15684, ctc1), null);
      const v18299 = stdlib.fromSome(v18298, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v18300 = stdlib.ge256(v18299, v18268);
      stdlib.assert(v18300, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:588:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:840:20:application call to "chkTransfer" (defined at: ./index.rsh:586:50:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'Provider_deposit'
        });
      const v18305 = stdlib.safeSub256(v18259, v18262);
      await stdlib.mapSet(map2, ctc8, v16737, ctc1, v18305);
      const v18307 = stdlib.safeSub256(v18261, v18265);
      await stdlib.mapSet(map3, ctc8, v16737, ctc1, v18307);
      const v18313 = stdlib.safeSub256(v18299, v18268);
      await stdlib.mapSet(map0, ctc8, v15684, ctc1, v18313);
      const v18314 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v16737, ctc1), null);
      const v18315 = stdlib.fromSome(v18314, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v18316 = stdlib.safeAdd256(v18315, v18268);
      await stdlib.mapSet(map0, ctc8, v16737, ctc1, v18316);
      null;
      const v18318 = await txn1.getOutput('Provider_deposit', 'v18268', ctc1, v18268);
      if (v13177) {
        stdlib.protect(ctc0, await interact.out(v18116, v18318), {
          at: './index.rsh:832:13:application',
          fs: ['at ./index.rsh:832:13:application call to [unknown function] (defined at: ./index.rsh:832:13:function exp)', 'at ./index.rsh:846:14:application call to "k" (defined at: ./index.rsh:842:15:function exp)', 'at ./index.rsh:842:15:application call to [unknown function] (defined at: ./index.rsh:842:15:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v18327 = v15703.closed;
      const v18330 = v15703.protoBals;
      const v18333 = v15833.A;
      const v18338 = stdlib.safeAdd256(v18333, v18262);
      const v18339 = v15833.B;
      const v18344 = stdlib.safeAdd256(v18339, v18265);
      const v18353 = stdlib.safeSub256(v15829, v18268);
      const v18357 = stdlib.safeAdd256(v15830, v18268);
      const v18360 = {
        A: v18353,
        B: v18357
        };
      const v18361 = {
        A: v18338,
        B: v18344
        };
      const v18362 = {
        closed: v18327,
        lptBals: v18360,
        poolBals: v18361,
        protoBals: v18330,
        protoInfo: v18254
        };
      const v79215 = v18362;
      const v79217 = v15707;
      const v79218 = v18362.closed;
      if (v79218) {
        return;
        }
      else {
        const v79220 = v18362.lptBals;
        const v79221 = v79220.A;
        const v79222 = v79220.B;
        const v79223 = v18362.poolBals;
        return;
        }
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_depositA4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_depositA4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_depositA4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc18 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc14,
    Provider_depositB0_9533: ctc14,
    Provider_withdraw0_9533: ctc17,
    Provider_withdrawA0_9533: ctc14,
    Provider_withdrawB0_9533: ctc14,
    Trader_exactSwapAForB0_9533: ctc18,
    Trader_exactSwapBForA0_9533: ctc18,
    Trader_swapAForB0_9533: ctc18,
    Trader_swapBForA0_9533: ctc18,
    arc200_approve0_9533: ctc19,
    arc200_transfer0_9533: ctc19,
    arc200_transferFrom0_9533: ctc20,
    createAllowanceBox0_9533: ctc21,
    createBalanceBoxes0_9533: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  const ctc26 = stdlib.T_Tuple([ctc3, ctc4, ctc21]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v16019 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:801:38:application call to [unknown function] (defined at: ./index.rsh:801:38:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_depositA0_9533" (defined at: ./index.rsh:801:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'Provider_depositA'
    });
  const v16022 = v15703.protoInfo;
  const v16023 = v16022.locked;
  const v16024 = v16023 ? false : true;
  stdlib.assert(v16024, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:802:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:801:38:application call to [unknown function] (defined at: ./index.rsh:801:38:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_depositA0_9533" (defined at: ./index.rsh:801:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'locked',
    who: 'Provider_depositA'
    });
  const v16031 = ['Provider_depositA0_9533', v16019];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v16031],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:801:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_depositA"
            });
          ;
          const v19743 = v19491[stdlib.checkedBigNumberify('./index.rsh:801:12:spread', stdlib.UInt_max, '0')];
          const v19751 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
          const v19752 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
          const v19753 = [v16737, v15684];
          const v19754 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v19753];
          const v19758 = stdlib.bytesFromHex("0x4a968f8f");
          const v19759 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v15639,
              remote: ({
                accs: [v16737, v15684],
                apps: [v15639],
                bills: stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc25, v19751], [ctc25, v19752], [ctc26, v19754]],
                fees: stdlib.checkedBigNumberify('./index.rsh:745:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v19760 = await txn1.getOutput('internal', 'v19759', ctc24, v19759);
          const v19762 = v19760[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
          const v19767 = stdlib.add(v15707, v19762);
          const v19769 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v16737, ctc1), null);
          const v19770 = stdlib.fromSome(v19769, stdlib.checkedBigNumberify('./index.rsh:806:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v19771 = stdlib.safeAdd256(v19770, v19743);
          await stdlib.simMapSet(sim_r, 2, ctc8, v16737, ctc1, v19771);
          const v19772 = await txn1.getOutput('Provider_depositA', 'v19771', ctc1, v19771);
          
          const v79551 = v15703;
          const v79553 = v19767;
          const v79554 = v15703.closed;
          if (v79554) {
            sim_r.isHalt = false;
            }
          else {
            const v79556 = v15703.lptBals;
            const v79557 = v79556.A;
            const v79558 = v79556.B;
            const v79559 = v15703.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v19743 = v19491[stdlib.checkedBigNumberify('./index.rsh:801:12:spread', stdlib.UInt_max, '0')];
      const v19744 = v15703.protoInfo;
      const v19745 = v19744.locked;
      const v19746 = v19745 ? false : true;
      stdlib.assert(v19746, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:802:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:804:15:application call to [unknown function] (defined at: ./index.rsh:804:15:function exp)'],
        msg: 'locked',
        who: 'Provider_depositA'
        });
      const v19751 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
      const v19752 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
      const v19753 = [v16737, v15684];
      const v19754 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v19753];
      const v19758 = stdlib.bytesFromHex("0x4a968f8f");
      const v19759 = undefined /* Remote */;
      const v19760 = await txn1.getOutput('internal', 'v19759', ctc24, v19759);
      const v19762 = v19760[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
      const v19767 = stdlib.add(v15707, v19762);
      const v19768 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19762);
      stdlib.assert(v19768, {
        at: './index.rsh:752:15:application',
        fs: ['at ./index.rsh:805:37:application call to [unknown function] (defined at: ./index.rsh:735:56:function exp)', 'at ./index.rsh:804:15:application call to [unknown function] (defined at: ./index.rsh:804:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_depositA'
        });
      const v19769 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v16737, ctc1), null);
      const v19770 = stdlib.fromSome(v19769, stdlib.checkedBigNumberify('./index.rsh:806:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v19771 = stdlib.safeAdd256(v19770, v19743);
      await stdlib.mapSet(map2, ctc8, v16737, ctc1, v19771);
      const v19772 = await txn1.getOutput('Provider_depositA', 'v19771', ctc1, v19771);
      if (v13177) {
        stdlib.protect(ctc0, await interact.out(v19491, v19772), {
          at: './index.rsh:801:13:application',
          fs: ['at ./index.rsh:801:13:application call to [unknown function] (defined at: ./index.rsh:801:13:function exp)', 'at ./index.rsh:808:14:application call to "k" (defined at: ./index.rsh:804:15:function exp)', 'at ./index.rsh:804:15:application call to [unknown function] (defined at: ./index.rsh:804:15:function exp)'],
          msg: 'out',
          who: 'Provider_depositA'
          });
        }
      else {
        }
      
      const v79551 = v15703;
      const v79553 = v19767;
      const v79554 = v15703.closed;
      if (v79554) {
        return;
        }
      else {
        const v79556 = v15703.lptBals;
        const v79557 = v79556.A;
        const v79558 = v79556.B;
        const v79559 = v15703.poolBals;
        return;
        }
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_depositB4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_depositB4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_depositB4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc18 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc14,
    Provider_depositB0_9533: ctc14,
    Provider_withdraw0_9533: ctc17,
    Provider_withdrawA0_9533: ctc14,
    Provider_withdrawB0_9533: ctc14,
    Trader_exactSwapAForB0_9533: ctc18,
    Trader_exactSwapBForA0_9533: ctc18,
    Trader_swapAForB0_9533: ctc18,
    Trader_swapBForA0_9533: ctc18,
    arc200_approve0_9533: ctc19,
    arc200_transfer0_9533: ctc19,
    arc200_transferFrom0_9533: ctc20,
    createAllowanceBox0_9533: ctc21,
    createBalanceBoxes0_9533: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  const ctc26 = stdlib.T_Tuple([ctc3, ctc4, ctc21]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v16035 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:815:38:application call to [unknown function] (defined at: ./index.rsh:815:38:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_depositB0_9533" (defined at: ./index.rsh:815:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'Provider_depositB'
    });
  const v16038 = v15703.protoInfo;
  const v16039 = v16038.locked;
  const v16040 = v16039 ? false : true;
  stdlib.assert(v16040, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:816:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:815:38:application call to [unknown function] (defined at: ./index.rsh:815:38:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_depositB0_9533" (defined at: ./index.rsh:815:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'locked',
    who: 'Provider_depositB'
    });
  const v16047 = ['Provider_depositB0_9533', v16035];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v16047],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:815:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_depositB"
            });
          ;
          const v21155 = v20866[stdlib.checkedBigNumberify('./index.rsh:815:12:spread', stdlib.UInt_max, '0')];
          const v21163 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
          const v21164 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
          const v21165 = [v16737, v15684];
          const v21166 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v21165];
          const v21170 = stdlib.bytesFromHex("0x4a968f8f");
          const v21171 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v15641,
              remote: ({
                accs: [v16737, v15684],
                apps: [v15641],
                bills: stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc25, v21163], [ctc25, v21164], [ctc26, v21166]],
                fees: stdlib.checkedBigNumberify('./index.rsh:745:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v21172 = await txn1.getOutput('internal', 'v21171', ctc24, v21171);
          const v21174 = v21172[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
          const v21179 = stdlib.add(v15707, v21174);
          const v21181 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v16737, ctc1), null);
          const v21182 = stdlib.fromSome(v21181, stdlib.checkedBigNumberify('./index.rsh:820:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v21183 = stdlib.safeAdd256(v21182, v21155);
          await stdlib.simMapSet(sim_r, 3, ctc8, v16737, ctc1, v21183);
          const v21184 = await txn1.getOutput('Provider_depositB', 'v21183', ctc1, v21183);
          
          const v79887 = v15703;
          const v79889 = v21179;
          const v79890 = v15703.closed;
          if (v79890) {
            sim_r.isHalt = false;
            }
          else {
            const v79892 = v15703.lptBals;
            const v79893 = v79892.A;
            const v79894 = v79892.B;
            const v79895 = v15703.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v21155 = v20866[stdlib.checkedBigNumberify('./index.rsh:815:12:spread', stdlib.UInt_max, '0')];
      const v21156 = v15703.protoInfo;
      const v21157 = v21156.locked;
      const v21158 = v21157 ? false : true;
      stdlib.assert(v21158, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:816:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:818:15:application call to [unknown function] (defined at: ./index.rsh:818:15:function exp)'],
        msg: 'locked',
        who: 'Provider_depositB'
        });
      const v21163 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
      const v21164 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
      const v21165 = [v16737, v15684];
      const v21166 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v21165];
      const v21170 = stdlib.bytesFromHex("0x4a968f8f");
      const v21171 = undefined /* Remote */;
      const v21172 = await txn1.getOutput('internal', 'v21171', ctc24, v21171);
      const v21174 = v21172[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
      const v21179 = stdlib.add(v15707, v21174);
      const v21180 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v21174);
      stdlib.assert(v21180, {
        at: './index.rsh:752:15:application',
        fs: ['at ./index.rsh:819:37:application call to [unknown function] (defined at: ./index.rsh:735:56:function exp)', 'at ./index.rsh:818:15:application call to [unknown function] (defined at: ./index.rsh:818:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_depositB'
        });
      const v21181 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v16737, ctc1), null);
      const v21182 = stdlib.fromSome(v21181, stdlib.checkedBigNumberify('./index.rsh:820:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v21183 = stdlib.safeAdd256(v21182, v21155);
      await stdlib.mapSet(map3, ctc8, v16737, ctc1, v21183);
      const v21184 = await txn1.getOutput('Provider_depositB', 'v21183', ctc1, v21183);
      if (v13177) {
        stdlib.protect(ctc0, await interact.out(v20866, v21184), {
          at: './index.rsh:815:13:application',
          fs: ['at ./index.rsh:815:13:application call to [unknown function] (defined at: ./index.rsh:815:13:function exp)', 'at ./index.rsh:822:14:application call to "k" (defined at: ./index.rsh:818:15:function exp)', 'at ./index.rsh:818:15:application call to [unknown function] (defined at: ./index.rsh:818:15:function exp)'],
          msg: 'out',
          who: 'Provider_depositB'
          });
        }
      else {
        }
      
      const v79887 = v15703;
      const v79889 = v21179;
      const v79890 = v15703.closed;
      if (v79890) {
        return;
        }
      else {
        const v79892 = v15703.lptBals;
        const v79893 = v79892.A;
        const v79894 = v79892.B;
        const v79895 = v15703.poolBals;
        return;
        }
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_withdraw4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_withdraw4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_withdraw4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc16 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc17 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc16,
    Provider_deposit0_9533: ctc17,
    Provider_depositA0_9533: ctc18,
    Provider_depositB0_9533: ctc18,
    Provider_withdraw0_9533: ctc14,
    Provider_withdrawA0_9533: ctc18,
    Provider_withdrawB0_9533: ctc18,
    Trader_exactSwapAForB0_9533: ctc19,
    Trader_exactSwapBForA0_9533: ctc19,
    Trader_swapAForB0_9533: ctc19,
    Trader_swapBForA0_9533: ctc19,
    arc200_approve0_9533: ctc20,
    arc200_transfer0_9533: ctc20,
    arc200_transferFrom0_9533: ctc21,
    createAllowanceBox0_9533: ctc15,
    createBalanceBoxes0_9533: ctc22
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v16149 = ctc.selfAddress();
  const v16151 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:892:44:application call to [unknown function] (defined at: ./index.rsh:892:44:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_withdraw0_9533" (defined at: ./index.rsh:892:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v16152 = v16151[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v16153 = v16151[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v16154 = v16153.A;
  const v16155 = v16153.B;
  const v16161 = v15833.A;
  const v16162 = v15833.B;
  const v16166 = stdlib.safeMul256(v16152, v16161);
  const v16167 = stdlib.safeDiv256(v16166, v15830);
  const v16171 = stdlib.safeMul256(v16152, v16162);
  const v16172 = stdlib.safeDiv256(v16171, v15830);
  const v16174 = stdlib.le256(v16154, v16167);
  stdlib.assert(v16174, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:896:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:892:44:application call to [unknown function] (defined at: ./index.rsh:892:44:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_withdraw0_9533" (defined at: ./index.rsh:892:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'Duoswap: Provider Withdraw Slippage A',
    who: 'Provider_withdraw'
    });
  const v16176 = stdlib.le256(v16155, v16172);
  stdlib.assert(v16176, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:897:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:892:44:application call to [unknown function] (defined at: ./index.rsh:892:44:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_withdraw0_9533" (defined at: ./index.rsh:892:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'Duoswap: Provider Withdraw Slippage B',
    who: 'Provider_withdraw'
    });
  const v16181 = stdlib.addressEq(v16149, v15684);
  const v16182 = v16181 ? false : true;
  stdlib.assert(v16182, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:602:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:892:44:application call to [unknown function] (defined at: ./index.rsh:892:44:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_withdraw0_9533" (defined at: ./index.rsh:892:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'Provider_withdraw'
    });
  const v16184 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v16149, ctc1), null);
  const v16185 = stdlib.fromSome(v16184, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v16186 = stdlib.ge256(v16185, v16152);
  stdlib.assert(v16186, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:603:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:892:44:application call to [unknown function] (defined at: ./index.rsh:892:44:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_withdraw0_9533" (defined at: ./index.rsh:892:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'Provider_withdraw'
    });
  const v16188 = [v16149, v15684];
  const v16189 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v16188, ctc1), null);
  const v16190 = stdlib.fromSome(v16189, stdlib.checkedBigNumberify('./index.rsh:521:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v16191 = stdlib.ge256(v16190, v16152);
  stdlib.assert(v16191, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:607:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:892:44:application call to [unknown function] (defined at: ./index.rsh:892:44:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_withdraw0_9533" (defined at: ./index.rsh:892:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'Provider_withdraw'
    });
  const v16202 = ['Provider_withdraw0_9533', v16151];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v16202],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:892:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          ;
          const v22567 = v22241[stdlib.checkedBigNumberify('./index.rsh:892:12:spread', stdlib.UInt_max, '0')];
          const v22572 = v15833.A;
          const v22573 = v15833.B;
          const v22577 = stdlib.safeMul256(v22567, v22572);
          const v22578 = stdlib.safeDiv256(v22577, v15830);
          const v22582 = stdlib.safeMul256(v22567, v22573);
          const v22583 = stdlib.safeDiv256(v22582, v15830);
          const v22595 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v16737, ctc1), null);
          const v22596 = stdlib.fromSome(v22595, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v22599 = [v16737, v15684];
          const v22600 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc15, v22599, ctc1), null);
          const v22601 = stdlib.fromSome(v22600, stdlib.checkedBigNumberify('./index.rsh:521:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v22612 = stdlib.safeSub256(v22596, v22567);
          await stdlib.simMapSet(sim_r, 0, ctc8, v16737, ctc1, v22612);
          const v22613 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v15684, ctc1), null);
          const v22614 = stdlib.fromSome(v22613, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v22615 = stdlib.safeAdd256(v22614, v22567);
          await stdlib.simMapSet(sim_r, 0, ctc8, v15684, ctc1, v22615);
          null;
          const v22620 = stdlib.safeSub256(v22601, v22567);
          await stdlib.simMapSet(sim_r, 1, ctc15, v22599, ctc1, v22620);
          null;
          const v22623 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v16737, ctc1), null);
          const v22624 = stdlib.fromSome(v22623, stdlib.checkedBigNumberify('./index.rsh:902:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v22625 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v16737, ctc1), null);
          const v22626 = stdlib.fromSome(v22625, stdlib.checkedBigNumberify('./index.rsh:903:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v22627 = stdlib.safeAdd256(v22624, v22578);
          await stdlib.simMapSet(sim_r, 2, ctc8, v16737, ctc1, v22627);
          const v22628 = stdlib.safeAdd256(v22626, v22583);
          await stdlib.simMapSet(sim_r, 3, ctc8, v16737, ctc1, v22628);
          const v22629 = {
            A: v22578,
            B: v22583
            };
          const v22630 = await txn1.getOutput('Provider_withdraw', 'v22629', ctc10, v22629);
          
          const v22649 = stdlib.safeAdd256(v15829, v22567);
          const v22652 = stdlib.safeSub256(v15830, v22567);
          const v22659 = stdlib.safeSub256(v22572, v22578);
          const v22663 = stdlib.safeSub256(v22573, v22583);
          const v22666 = [v16737, v22629];
          null;
          const v22667 = v15703.closed;
          const v22670 = v15703.protoBals;
          const v22671 = v15703.protoInfo;
          const v22672 = {
            A: v22649,
            B: v22652
            };
          const v22673 = {
            A: v22659,
            B: v22663
            };
          const v22674 = {
            closed: v22667,
            lptBals: v22672,
            poolBals: v22673,
            protoBals: v22670,
            protoInfo: v22671
            };
          const v80223 = v22674;
          const v80225 = v15707;
          const v80226 = v22674.closed;
          if (v80226) {
            sim_r.isHalt = false;
            }
          else {
            const v80228 = v22674.lptBals;
            const v80229 = v80228.A;
            const v80230 = v80228.B;
            const v80231 = v22674.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v22567 = v22241[stdlib.checkedBigNumberify('./index.rsh:892:12:spread', stdlib.UInt_max, '0')];
      const v22568 = v22241[stdlib.checkedBigNumberify('./index.rsh:892:12:spread', stdlib.UInt_max, '1')];
      const v22569 = v22568.A;
      const v22570 = v22568.B;
      const v22572 = v15833.A;
      const v22573 = v15833.B;
      const v22577 = stdlib.safeMul256(v22567, v22572);
      const v22578 = stdlib.safeDiv256(v22577, v15830);
      const v22582 = stdlib.safeMul256(v22567, v22573);
      const v22583 = stdlib.safeDiv256(v22582, v15830);
      const v22585 = stdlib.le256(v22569, v22578);
      stdlib.assert(v22585, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:896:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
        msg: 'Duoswap: Provider Withdraw Slippage A',
        who: 'Provider_withdraw'
        });
      const v22587 = stdlib.le256(v22570, v22583);
      stdlib.assert(v22587, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:897:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
        msg: 'Duoswap: Provider Withdraw Slippage B',
        who: 'Provider_withdraw'
        });
      const v22592 = stdlib.addressEq(v16737, v15684);
      const v22593 = v22592 ? false : true;
      stdlib.assert(v22593, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:602:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'Provider_withdraw'
        });
      const v22595 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v16737, ctc1), null);
      const v22596 = stdlib.fromSome(v22595, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v22597 = stdlib.ge256(v22596, v22567);
      stdlib.assert(v22597, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:603:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'Provider_withdraw'
        });
      const v22599 = [v16737, v15684];
      const v22600 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v22599, ctc1), null);
      const v22601 = stdlib.fromSome(v22600, stdlib.checkedBigNumberify('./index.rsh:521:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v22602 = stdlib.ge256(v22601, v22567);
      stdlib.assert(v22602, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:607:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'Provider_withdraw'
        });
      const v22612 = stdlib.safeSub256(v22596, v22567);
      await stdlib.mapSet(map0, ctc8, v16737, ctc1, v22612);
      const v22613 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v15684, ctc1), null);
      const v22614 = stdlib.fromSome(v22613, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v22615 = stdlib.safeAdd256(v22614, v22567);
      await stdlib.mapSet(map0, ctc8, v15684, ctc1, v22615);
      null;
      const v22620 = stdlib.safeSub256(v22601, v22567);
      await stdlib.mapSet(map1, ctc15, v22599, ctc1, v22620);
      null;
      const v22623 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v16737, ctc1), null);
      const v22624 = stdlib.fromSome(v22623, stdlib.checkedBigNumberify('./index.rsh:902:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v22625 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v16737, ctc1), null);
      const v22626 = stdlib.fromSome(v22625, stdlib.checkedBigNumberify('./index.rsh:903:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v22627 = stdlib.safeAdd256(v22624, v22578);
      await stdlib.mapSet(map2, ctc8, v16737, ctc1, v22627);
      const v22628 = stdlib.safeAdd256(v22626, v22583);
      await stdlib.mapSet(map3, ctc8, v16737, ctc1, v22628);
      const v22629 = {
        A: v22578,
        B: v22583
        };
      const v22630 = await txn1.getOutput('Provider_withdraw', 'v22629', ctc10, v22629);
      if (v13177) {
        stdlib.protect(ctc0, await interact.out(v22241, v22630), {
          at: './index.rsh:892:13:application',
          fs: ['at ./index.rsh:892:13:application call to [unknown function] (defined at: ./index.rsh:892:13:function exp)', 'at ./index.rsh:906:14:application call to "k" (defined at: ./index.rsh:900:15:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v22649 = stdlib.safeAdd256(v15829, v22567);
      const v22652 = stdlib.safeSub256(v15830, v22567);
      const v22659 = stdlib.safeSub256(v22572, v22578);
      const v22663 = stdlib.safeSub256(v22573, v22583);
      const v22666 = [v16737, v22629];
      null;
      const v22667 = v15703.closed;
      const v22670 = v15703.protoBals;
      const v22671 = v15703.protoInfo;
      const v22672 = {
        A: v22649,
        B: v22652
        };
      const v22673 = {
        A: v22659,
        B: v22663
        };
      const v22674 = {
        closed: v22667,
        lptBals: v22672,
        poolBals: v22673,
        protoBals: v22670,
        protoInfo: v22671
        };
      const v80223 = v22674;
      const v80225 = v15707;
      const v80226 = v22674.closed;
      if (v80226) {
        return;
        }
      else {
        const v80228 = v22674.lptBals;
        const v80229 = v80228.A;
        const v80230 = v80228.B;
        const v80231 = v22674.poolBals;
        return;
        }
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_withdrawA4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_withdrawA4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_withdrawA4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc18 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc14,
    Provider_depositB0_9533: ctc14,
    Provider_withdraw0_9533: ctc17,
    Provider_withdrawA0_9533: ctc14,
    Provider_withdrawB0_9533: ctc14,
    Trader_exactSwapAForB0_9533: ctc18,
    Trader_exactSwapBForA0_9533: ctc18,
    Trader_swapAForB0_9533: ctc18,
    Trader_swapBForA0_9533: ctc18,
    arc200_approve0_9533: ctc19,
    arc200_transfer0_9533: ctc19,
    arc200_transferFrom0_9533: ctc20,
    createAllowanceBox0_9533: ctc21,
    createBalanceBoxes0_9533: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v16117 = ctc.selfAddress();
  const v16119 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:860:40:application call to [unknown function] (defined at: ./index.rsh:860:40:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_withdrawA0_9533" (defined at: ./index.rsh:860:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'Provider_withdrawA'
    });
  const v16120 = v16119[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v16122 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v16117, ctc1), null);
  const v16123 = stdlib.fromSome(v16122, stdlib.checkedBigNumberify('./index.rsh:861:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v16124 = stdlib.ge256(v16123, v16120);
  stdlib.assert(v16124, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:862:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:860:40:application call to [unknown function] (defined at: ./index.rsh:860:40:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_withdrawA0_9533" (defined at: ./index.rsh:860:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'Reserve A balances insufficient',
    who: 'Provider_withdrawA'
    });
  const v16131 = ['Provider_withdrawA0_9533', v16119];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v16131],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:860:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdrawA"
            });
          ;
          const v24055 = v23616[stdlib.checkedBigNumberify('./index.rsh:860:12:spread', stdlib.UInt_max, '0')];
          const v24056 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v16737, ctc1), null);
          const v24057 = stdlib.fromSome(v24056, stdlib.checkedBigNumberify('./index.rsh:861:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v24061 = stdlib.safeSub256(v24057, v24055);
          await stdlib.simMapSet(sim_r, 2, ctc8, v16737, ctc1, v24061);
          const v24062 = await txn1.getOutput('Provider_withdrawA', 'v24061', ctc1, v24061);
          
          const v24069 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
          const v24070 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
          const v24074 = stdlib.bytesFromHex("0xda7025b9");
          const v24075 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v15639,
              remote: ({
                accs: [v16737],
                apps: [v15639],
                bills: stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc25, v24069], [ctc25, v24070]],
                fees: stdlib.checkedBigNumberify('./index.rsh:727:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v24076 = await txn1.getOutput('internal', 'v24075', ctc24, v24075);
          const v24078 = v24076[stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0')];
          const v24083 = stdlib.add(v15707, v24078);
          const v80559 = v15703;
          const v80561 = v24083;
          const v80562 = v15703.closed;
          if (v80562) {
            sim_r.isHalt = false;
            }
          else {
            const v80564 = v15703.lptBals;
            const v80565 = v80564.A;
            const v80566 = v80564.B;
            const v80567 = v15703.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v24055 = v23616[stdlib.checkedBigNumberify('./index.rsh:860:12:spread', stdlib.UInt_max, '0')];
      const v24056 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v16737, ctc1), null);
      const v24057 = stdlib.fromSome(v24056, stdlib.checkedBigNumberify('./index.rsh:861:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v24058 = stdlib.ge256(v24057, v24055);
      stdlib.assert(v24058, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:862:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:864:15:application call to [unknown function] (defined at: ./index.rsh:864:15:function exp)'],
        msg: 'Reserve A balances insufficient',
        who: 'Provider_withdrawA'
        });
      const v24061 = stdlib.safeSub256(v24057, v24055);
      await stdlib.mapSet(map2, ctc8, v16737, ctc1, v24061);
      const v24062 = await txn1.getOutput('Provider_withdrawA', 'v24061', ctc1, v24061);
      if (v13177) {
        stdlib.protect(ctc0, await interact.out(v23616, v24062), {
          at: './index.rsh:860:13:application',
          fs: ['at ./index.rsh:860:13:application call to [unknown function] (defined at: ./index.rsh:860:13:function exp)', 'at ./index.rsh:867:14:application call to "k" (defined at: ./index.rsh:864:15:function exp)', 'at ./index.rsh:864:15:application call to [unknown function] (defined at: ./index.rsh:864:15:function exp)'],
          msg: 'out',
          who: 'Provider_withdrawA'
          });
        }
      else {
        }
      
      const v24069 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
      const v24070 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
      const v24074 = stdlib.bytesFromHex("0xda7025b9");
      const v24075 = undefined /* Remote */;
      const v24076 = await txn1.getOutput('internal', 'v24075', ctc24, v24075);
      const v24078 = v24076[stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0')];
      const v24083 = stdlib.add(v15707, v24078);
      const v24084 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v24078);
      stdlib.assert(v24084, {
        at: './index.rsh:733:15:application',
        fs: ['at ./index.rsh:868:33:application call to [unknown function] (defined at: ./index.rsh:720:45:function exp)', 'at ./index.rsh:864:15:application call to [unknown function] (defined at: ./index.rsh:864:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_withdrawA'
        });
      const v80559 = v15703;
      const v80561 = v24083;
      const v80562 = v15703.closed;
      if (v80562) {
        return;
        }
      else {
        const v80564 = v15703.lptBals;
        const v80565 = v80564.A;
        const v80566 = v80564.B;
        const v80567 = v15703.poolBals;
        return;
        }
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_withdrawB4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_withdrawB4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_withdrawB4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc18 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc14,
    Provider_depositB0_9533: ctc14,
    Provider_withdraw0_9533: ctc17,
    Provider_withdrawA0_9533: ctc14,
    Provider_withdrawB0_9533: ctc14,
    Trader_exactSwapAForB0_9533: ctc18,
    Trader_exactSwapBForA0_9533: ctc18,
    Trader_swapAForB0_9533: ctc18,
    Trader_swapBForA0_9533: ctc18,
    arc200_approve0_9533: ctc19,
    arc200_transfer0_9533: ctc19,
    arc200_transferFrom0_9533: ctc20,
    createAllowanceBox0_9533: ctc21,
    createBalanceBoxes0_9533: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v16133 = ctc.selfAddress();
  const v16135 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:876:40:application call to [unknown function] (defined at: ./index.rsh:876:40:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_withdrawB0_9533" (defined at: ./index.rsh:876:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'Provider_withdrawB'
    });
  const v16136 = v16135[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v16138 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v16133, ctc1), null);
  const v16139 = stdlib.fromSome(v16138, stdlib.checkedBigNumberify('./index.rsh:877:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v16140 = stdlib.ge256(v16139, v16136);
  stdlib.assert(v16140, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:878:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:876:40:application call to [unknown function] (defined at: ./index.rsh:876:40:function exp)', 'at ./index.rsh:506:31:application call to "runProvider_withdrawB0_9533" (defined at: ./index.rsh:876:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'Reserve B balances insufficient',
    who: 'Provider_withdrawB'
    });
  const v16147 = ['Provider_withdrawB0_9533', v16135];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v16147],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:876:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdrawB"
            });
          ;
          const v25462 = v24991[stdlib.checkedBigNumberify('./index.rsh:876:12:spread', stdlib.UInt_max, '0')];
          const v25463 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v16737, ctc1), null);
          const v25464 = stdlib.fromSome(v25463, stdlib.checkedBigNumberify('./index.rsh:877:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v25468 = stdlib.safeSub256(v25464, v25462);
          await stdlib.simMapSet(sim_r, 3, ctc8, v16737, ctc1, v25468);
          const v25469 = await txn1.getOutput('Provider_withdrawB', 'v25468', ctc1, v25468);
          
          const v25476 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
          const v25477 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
          const v25481 = stdlib.bytesFromHex("0xda7025b9");
          const v25482 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v15641,
              remote: ({
                accs: [v16737],
                apps: [v15641],
                bills: stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc25, v25476], [ctc25, v25477]],
                fees: stdlib.checkedBigNumberify('./index.rsh:727:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v25483 = await txn1.getOutput('internal', 'v25482', ctc24, v25482);
          const v25485 = v25483[stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0')];
          const v25490 = stdlib.add(v15707, v25485);
          const v80895 = v15703;
          const v80897 = v25490;
          const v80898 = v15703.closed;
          if (v80898) {
            sim_r.isHalt = false;
            }
          else {
            const v80900 = v15703.lptBals;
            const v80901 = v80900.A;
            const v80902 = v80900.B;
            const v80903 = v15703.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v25462 = v24991[stdlib.checkedBigNumberify('./index.rsh:876:12:spread', stdlib.UInt_max, '0')];
      const v25463 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v16737, ctc1), null);
      const v25464 = stdlib.fromSome(v25463, stdlib.checkedBigNumberify('./index.rsh:877:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v25465 = stdlib.ge256(v25464, v25462);
      stdlib.assert(v25465, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:878:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:880:15:application call to [unknown function] (defined at: ./index.rsh:880:15:function exp)'],
        msg: 'Reserve B balances insufficient',
        who: 'Provider_withdrawB'
        });
      const v25468 = stdlib.safeSub256(v25464, v25462);
      await stdlib.mapSet(map3, ctc8, v16737, ctc1, v25468);
      const v25469 = await txn1.getOutput('Provider_withdrawB', 'v25468', ctc1, v25468);
      if (v13177) {
        stdlib.protect(ctc0, await interact.out(v24991, v25469), {
          at: './index.rsh:876:13:application',
          fs: ['at ./index.rsh:876:13:application call to [unknown function] (defined at: ./index.rsh:876:13:function exp)', 'at ./index.rsh:883:14:application call to "k" (defined at: ./index.rsh:880:15:function exp)', 'at ./index.rsh:880:15:application call to [unknown function] (defined at: ./index.rsh:880:15:function exp)'],
          msg: 'out',
          who: 'Provider_withdrawB'
          });
        }
      else {
        }
      
      const v25476 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
      const v25477 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
      const v25481 = stdlib.bytesFromHex("0xda7025b9");
      const v25482 = undefined /* Remote */;
      const v25483 = await txn1.getOutput('internal', 'v25482', ctc24, v25482);
      const v25485 = v25483[stdlib.checkedBigNumberify('./index.rsh:733:15:application', stdlib.UInt_max, '0')];
      const v25490 = stdlib.add(v15707, v25485);
      const v25491 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v25485);
      stdlib.assert(v25491, {
        at: './index.rsh:733:15:application',
        fs: ['at ./index.rsh:884:33:application call to [unknown function] (defined at: ./index.rsh:720:45:function exp)', 'at ./index.rsh:880:15:application call to [unknown function] (defined at: ./index.rsh:880:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_withdrawB'
        });
      const v80895 = v15703;
      const v80897 = v25490;
      const v80898 = v15703.closed;
      if (v80898) {
        return;
        }
      else {
        const v80900 = v15703.lptBals;
        const v80901 = v80900.A;
        const v80902 = v80900.B;
        const v80903 = v15703.poolBals;
        return;
        }
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_exactSwapAForB4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_exactSwapAForB4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_exactSwapAForB4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc17,
    Provider_depositB0_9533: ctc17,
    Provider_withdraw0_9533: ctc18,
    Provider_withdrawA0_9533: ctc17,
    Provider_withdrawB0_9533: ctc17,
    Trader_exactSwapAForB0_9533: ctc14,
    Trader_exactSwapBForA0_9533: ctc14,
    Trader_swapAForB0_9533: ctc14,
    Trader_swapBForA0_9533: ctc14,
    arc200_approve0_9533: ctc19,
    arc200_transfer0_9533: ctc19,
    arc200_transferFrom0_9533: ctc20,
    createAllowanceBox0_9533: ctc21,
    createBalanceBoxes0_9533: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  const ctc26 = stdlib.T_Tuple([ctc3, ctc4, ctc21]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v16459 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1135:54:application call to [unknown function] (defined at: ./index.rsh:1135:54:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_exactSwapAForB0_9533" (defined at: ./index.rsh:1135:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapAForB'
    });
  const v16461 = v16459[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v16462 = v16459[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v16468 = v15703.protoInfo;
  const v16470 = v15833.A;
  const v16471 = v15833.B;
  const v16472 = v16468.protoFee;
  const v16473 = v16468.totFee;
  const v16474 = stdlib.safeSub256(v16471, v16462);
  const v16475 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v16473);
  const v16476 = stdlib.safeMul256(v16462, v16475);
  const v16477 = stdlib.safeMul256(v16474, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v16478 = stdlib.safeMul256(v16476, v16470);
  const v16479 = stdlib.safeDiv256(v16478, v16477);
  const v16480 = stdlib.safeAdd256(v16479, stdlib.checkedBigNumberify('./index.rsh:141:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
  const v16481 = stdlib.ge256(v16461, v16480);
  stdlib.assert(v16481, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:25:application call to [unknown function] (defined at: ./index.rsh:155:20:function exp)', 'at ./index.rsh:154:25:application call to [unknown function] (defined at: ./index.rsh:154:25:function exp)', 'at ./index.rsh:171:63:application call to "computeAmtInAndOut" (defined at: ./index.rsh:153:3:function exp)', 'at ./index.rsh:233:19:application call to "computeSwap1" (defined at: ./index.rsh:167:75:function exp)', 'at ./index.rsh:983:58:application call to "computeSwap" (defined at: ./index.rsh:229:71:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1136:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1135:54:application call to [unknown function] (defined at: ./index.rsh:1135:54:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_exactSwapAForB0_9533" (defined at: ./index.rsh:1135:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'provided enough funds to receive amt out',
    who: 'Trader_exactSwapAForB'
    });
  const v16483 = stdlib.safeSub256(v16461, v16480);
  const v16487 = stdlib.safeMul256(v16472, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v16488 = stdlib.safeDiv256(v16487, v16473);
  const v16492 = stdlib.safeAdd256(v16470, v16480);
  const v16496 = stdlib.safeMul256(v16480, v16471);
  const v16497 = stdlib.safeDiv256(v16496, v16492);
  const v16498 = stdlib.safeSub256(v16497, v16462);
  const v16500 = stdlib.safeMul256(v16498, v16488);
  const v16501 = stdlib.safeDiv256(v16500, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v16502 = stdlib.safeMul256(v16480, v16472);
  const v16503 = stdlib.safeDiv256(v16502, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v16507 = stdlib.safeMul256(v16503, v16471);
  const v16508 = stdlib.safeDiv256(v16507, v16492);
  const v16509 = stdlib.gt256(v16508, v16501);
  const v16510 = [v16503, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v16511 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v16501];
  const v16512 = v16509 ? v16510 : v16511;
  const v16514 = v16512[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '0')];
  const v16515 = v16512[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '1')];
  const v16520 = v16468.locked;
  const v16521 = v16520 ? false : true;
  stdlib.assert(v16521, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:939:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1136:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1135:54:application call to [unknown function] (defined at: ./index.rsh:1135:54:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_exactSwapAForB0_9533" (defined at: ./index.rsh:1135:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'locked',
    who: 'Trader_exactSwapAForB'
    });
  const v16528 = stdlib.safeAdd256(v16470, v16461);
  const v16536 = stdlib.safeSub256(v16528, v16483);
  const v16543 = stdlib.safeSub256(v16536, v16514);
  const v16546 = stdlib.safeSub256(v16474, v16515);
  const v16560 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v16483);
  const v16561 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:79:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v16462);
  const v16562 = v16560 ? v16561 : false;
  stdlib.assert(v16562, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1136:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1135:54:application call to [unknown function] (defined at: ./index.rsh:1135:54:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_exactSwapAForB0_9533" (defined at: ./index.rsh:1135:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'slippage',
    who: 'Trader_exactSwapAForB'
    });
  const v16567 = stdlib.safeMul256(v16470, v16471);
  const v16568 = stdlib.safeMul256(v16543, v16546);
  const v16569 = stdlib.ge256(v16568, v16567);
  stdlib.assert(v16569, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:963:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1136:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1135:54:application call to [unknown function] (defined at: ./index.rsh:1135:54:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_exactSwapAForB0_9533" (defined at: ./index.rsh:1135:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'constant product',
    who: 'Trader_exactSwapAForB'
    });
  const v16587 = ['Trader_exactSwapAForB0_9533', v16459];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v16587],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1135:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapAForB"
            });
          ;
          const v26869 = v26366[stdlib.checkedBigNumberify('./index.rsh:1135:12:spread', stdlib.UInt_max, '0')];
          const v26870 = v26366[stdlib.checkedBigNumberify('./index.rsh:1135:12:spread', stdlib.UInt_max, '1')];
          const v26871 = v26366[stdlib.checkedBigNumberify('./index.rsh:1135:12:spread', stdlib.UInt_max, '2')];
          const v26874 = v15703.protoInfo;
          const v26876 = v15833.A;
          const v26877 = v15833.B;
          const v26878 = v26874.protoFee;
          const v26879 = v26874.totFee;
          const v26880 = stdlib.safeSub256(v26877, v26871);
          const v26881 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v26879);
          const v26882 = stdlib.safeMul256(v26871, v26881);
          const v26883 = stdlib.safeMul256(v26880, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v26884 = stdlib.safeMul256(v26882, v26876);
          const v26885 = stdlib.safeDiv256(v26884, v26883);
          const v26886 = stdlib.safeAdd256(v26885, stdlib.checkedBigNumberify('./index.rsh:141:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v26889 = stdlib.safeSub256(v26870, v26886);
          const v26893 = stdlib.safeMul256(v26878, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v26894 = stdlib.safeDiv256(v26893, v26879);
          const v26898 = stdlib.safeAdd256(v26876, v26886);
          const v26902 = stdlib.safeMul256(v26886, v26877);
          const v26903 = stdlib.safeDiv256(v26902, v26898);
          const v26904 = stdlib.safeSub256(v26903, v26871);
          const v26906 = stdlib.safeMul256(v26904, v26894);
          const v26907 = stdlib.safeDiv256(v26906, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v26908 = stdlib.safeMul256(v26886, v26878);
          const v26909 = stdlib.safeDiv256(v26908, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v26913 = stdlib.safeMul256(v26909, v26877);
          const v26914 = stdlib.safeDiv256(v26913, v26898);
          const v26915 = stdlib.gt256(v26914, v26907);
          const v26916 = [v26909, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v26917 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v26907];
          const v26918 = v26915 ? v26916 : v26917;
          const v26920 = v26918[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '0')];
          const v26921 = v26918[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '1')];
          const v26934 = stdlib.safeAdd256(v26876, v26870);
          const v26942 = stdlib.safeSub256(v26934, v26889);
          const v26949 = stdlib.safeSub256(v26942, v26920);
          const v26952 = stdlib.safeSub256(v26880, v26921);
          const v26954 = v15703.protoBals;
          const v26955 = v26954.A;
          const v26959 = stdlib.safeAdd256(v26955, v26920);
          const v26960 = v26954.B;
          const v26964 = stdlib.safeAdd256(v26960, v26921);
          const v26980 = {
            A: v26889,
            B: v26871
            };
          const v26981 = {
            A: v26949,
            B: v26952
            };
          const v26982 = {
            A: v26959,
            B: v26964
            };
          if (v26869) {
            const v26988 = await txn1.getOutput('Trader_exactSwapAForB', 'v26980', ctc10, v26980);
            
            const v81231 = v15703;
            const v81233 = v15707;
            const v81234 = v15703.closed;
            if (v81234) {
              sim_r.isHalt = false;
              }
            else {
              const v81236 = v15703.lptBals;
              const v81237 = v81236.A;
              const v81238 = v81236.B;
              const v81239 = v15703.poolBals;
              sim_r.isHalt = false;
              }}
          else {
            const v27003 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
            const v27004 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
            const v27005 = [v16737, v15684];
            const v27006 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v27005];
            const v27010 = stdlib.bytesFromHex("0x4a968f8f");
            const v27011 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v15639,
                remote: ({
                  accs: [v16737, v15684],
                  apps: [v15639],
                  bills: stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0'),
                  boxes: [[ctc25, v27003], [ctc25, v27004], [ctc26, v27006]],
                  fees: stdlib.checkedBigNumberify('./index.rsh:745:21:decimal', stdlib.UInt_max, '1'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v27012 = await txn1.getOutput('internal', 'v27011', ctc24, v27011);
            const v27014 = v27012[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
            const v27019 = stdlib.add(v15707, v27014);
            const v27021 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v16737, ctc1), null);
            const v27022 = stdlib.fromSome(v27021, stdlib.checkedBigNumberify('./index.rsh:1043:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v27023 = stdlib.safeAdd256(v27022, v26871);
            await stdlib.simMapSet(sim_r, 3, ctc8, v16737, ctc1, v27023);
            const v27024 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v16737, ctc1), null);
            const v27025 = stdlib.fromSome(v27024, stdlib.checkedBigNumberify('./index.rsh:1045:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v27026 = stdlib.safeAdd256(v27025, v26889);
            await stdlib.simMapSet(sim_r, 2, ctc8, v16737, ctc1, v27026);
            const v27028 = await txn1.getOutput('Trader_exactSwapAForB', 'v26980', ctc10, v26980);
            
            const v27038 = {
              A: v26870,
              B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
              };
            const v27041 = [v16737, v27038, v26980, v26981];
            null;
            const v27042 = v15703.closed;
            const v27049 = {
              closed: v27042,
              lptBals: v15828,
              poolBals: v26981,
              protoBals: v26982,
              protoInfo: v26874
              };
            const v81247 = v27049;
            const v81249 = v27019;
            const v81250 = v27049.closed;
            if (v81250) {
              sim_r.isHalt = false;
              }
            else {
              const v81252 = v27049.lptBals;
              const v81253 = v81252.A;
              const v81254 = v81252.B;
              const v81255 = v27049.poolBals;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v26869 = v26366[stdlib.checkedBigNumberify('./index.rsh:1135:12:spread', stdlib.UInt_max, '0')];
      const v26870 = v26366[stdlib.checkedBigNumberify('./index.rsh:1135:12:spread', stdlib.UInt_max, '1')];
      const v26871 = v26366[stdlib.checkedBigNumberify('./index.rsh:1135:12:spread', stdlib.UInt_max, '2')];
      const v26874 = v15703.protoInfo;
      const v26876 = v15833.A;
      const v26877 = v15833.B;
      const v26878 = v26874.protoFee;
      const v26879 = v26874.totFee;
      const v26880 = stdlib.safeSub256(v26877, v26871);
      const v26881 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v26879);
      const v26882 = stdlib.safeMul256(v26871, v26881);
      const v26883 = stdlib.safeMul256(v26880, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v26884 = stdlib.safeMul256(v26882, v26876);
      const v26885 = stdlib.safeDiv256(v26884, v26883);
      const v26886 = stdlib.safeAdd256(v26885, stdlib.checkedBigNumberify('./index.rsh:141:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v26887 = stdlib.ge256(v26870, v26886);
      stdlib.assert(v26887, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:25:application call to [unknown function] (defined at: ./index.rsh:155:20:function exp)', 'at ./index.rsh:154:25:application call to [unknown function] (defined at: ./index.rsh:154:25:function exp)', 'at ./index.rsh:171:63:application call to "computeAmtInAndOut" (defined at: ./index.rsh:153:3:function exp)', 'at ./index.rsh:233:19:application call to "computeSwap1" (defined at: ./index.rsh:167:75:function exp)', 'at ./index.rsh:983:58:application call to "computeSwap" (defined at: ./index.rsh:229:71:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1136:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1137:21:application call to [unknown function] (defined at: ./index.rsh:1137:21:function exp)'],
        msg: 'provided enough funds to receive amt out',
        who: 'Trader_exactSwapAForB'
        });
      const v26889 = stdlib.safeSub256(v26870, v26886);
      const v26893 = stdlib.safeMul256(v26878, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v26894 = stdlib.safeDiv256(v26893, v26879);
      const v26898 = stdlib.safeAdd256(v26876, v26886);
      const v26902 = stdlib.safeMul256(v26886, v26877);
      const v26903 = stdlib.safeDiv256(v26902, v26898);
      const v26904 = stdlib.safeSub256(v26903, v26871);
      const v26906 = stdlib.safeMul256(v26904, v26894);
      const v26907 = stdlib.safeDiv256(v26906, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v26908 = stdlib.safeMul256(v26886, v26878);
      const v26909 = stdlib.safeDiv256(v26908, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v26913 = stdlib.safeMul256(v26909, v26877);
      const v26914 = stdlib.safeDiv256(v26913, v26898);
      const v26915 = stdlib.gt256(v26914, v26907);
      const v26916 = [v26909, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v26917 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v26907];
      const v26918 = v26915 ? v26916 : v26917;
      const v26920 = v26918[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '0')];
      const v26921 = v26918[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '1')];
      const v26926 = v26874.locked;
      const v26927 = v26926 ? false : true;
      stdlib.assert(v26927, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:939:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1136:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1137:21:application call to [unknown function] (defined at: ./index.rsh:1137:21:function exp)'],
        msg: 'locked',
        who: 'Trader_exactSwapAForB'
        });
      const v26934 = stdlib.safeAdd256(v26876, v26870);
      const v26942 = stdlib.safeSub256(v26934, v26889);
      const v26949 = stdlib.safeSub256(v26942, v26920);
      const v26952 = stdlib.safeSub256(v26880, v26921);
      const v26954 = v15703.protoBals;
      const v26955 = v26954.A;
      const v26959 = stdlib.safeAdd256(v26955, v26920);
      const v26960 = v26954.B;
      const v26964 = stdlib.safeAdd256(v26960, v26921);
      const v26966 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v26889);
      const v26967 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:79:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v26871);
      const v26968 = v26966 ? v26967 : false;
      stdlib.assert(v26968, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1136:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1137:21:application call to [unknown function] (defined at: ./index.rsh:1137:21:function exp)'],
        msg: 'slippage',
        who: 'Trader_exactSwapAForB'
        });
      const v26973 = stdlib.safeMul256(v26876, v26877);
      const v26974 = stdlib.safeMul256(v26949, v26952);
      const v26975 = stdlib.ge256(v26974, v26973);
      stdlib.assert(v26975, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:963:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1136:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1137:21:application call to [unknown function] (defined at: ./index.rsh:1137:21:function exp)'],
        msg: 'constant product',
        who: 'Trader_exactSwapAForB'
        });
      const v26980 = {
        A: v26889,
        B: v26871
        };
      const v26981 = {
        A: v26949,
        B: v26952
        };
      const v26982 = {
        A: v26959,
        B: v26964
        };
      if (v26869) {
        const v26988 = await txn1.getOutput('Trader_exactSwapAForB', 'v26980', ctc10, v26980);
        if (v13177) {
          stdlib.protect(ctc0, await interact.out(v26366, v26988), {
            at: './index.rsh:1135:13:application',
            fs: ['at ./index.rsh:1135:13:application call to [unknown function] (defined at: ./index.rsh:1135:13:function exp)', 'at ./index.rsh:1030:16:application call to "k" (defined at: ./index.rsh:1137:21:function exp)', 'at ./index.rsh:1137:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1137:21:application call to [unknown function] (defined at: ./index.rsh:1137:21:function exp)'],
            msg: 'out',
            who: 'Trader_exactSwapAForB'
            });
          }
        else {
          }
        
        const v81231 = v15703;
        const v81233 = v15707;
        const v81234 = v15703.closed;
        if (v81234) {
          return;
          }
        else {
          const v81236 = v15703.lptBals;
          const v81237 = v81236.A;
          const v81238 = v81236.B;
          const v81239 = v15703.poolBals;
          return;
          }}
      else {
        const v27003 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
        const v27004 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
        const v27005 = [v16737, v15684];
        const v27006 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v27005];
        const v27010 = stdlib.bytesFromHex("0x4a968f8f");
        const v27011 = undefined /* Remote */;
        const v27012 = await txn1.getOutput('internal', 'v27011', ctc24, v27011);
        const v27014 = v27012[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
        const v27019 = stdlib.add(v15707, v27014);
        const v27020 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v27014);
        stdlib.assert(v27020, {
          at: './index.rsh:752:15:application',
          fs: ['at ./index.rsh:1035:41:application call to [unknown function] (defined at: ./index.rsh:735:56:function exp)', 'at ./index.rsh:1137:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1137:21:application call to [unknown function] (defined at: ./index.rsh:1137:21:function exp)'],
          msg: 'remote bill check',
          who: 'Trader_exactSwapAForB'
          });
        const v27021 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v16737, ctc1), null);
        const v27022 = stdlib.fromSome(v27021, stdlib.checkedBigNumberify('./index.rsh:1043:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v27023 = stdlib.safeAdd256(v27022, v26871);
        await stdlib.mapSet(map3, ctc8, v16737, ctc1, v27023);
        const v27024 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v16737, ctc1), null);
        const v27025 = stdlib.fromSome(v27024, stdlib.checkedBigNumberify('./index.rsh:1045:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v27026 = stdlib.safeAdd256(v27025, v26889);
        await stdlib.mapSet(map2, ctc8, v16737, ctc1, v27026);
        const v27028 = await txn1.getOutput('Trader_exactSwapAForB', 'v26980', ctc10, v26980);
        if (v13177) {
          stdlib.protect(ctc0, await interact.out(v26366, v27028), {
            at: './index.rsh:1135:13:application',
            fs: ['at ./index.rsh:1135:13:application call to [unknown function] (defined at: ./index.rsh:1135:13:function exp)', 'at ./index.rsh:1060:16:application call to "k" (defined at: ./index.rsh:1137:21:function exp)', 'at ./index.rsh:1137:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1137:21:application call to [unknown function] (defined at: ./index.rsh:1137:21:function exp)'],
            msg: 'out',
            who: 'Trader_exactSwapAForB'
            });
          }
        else {
          }
        
        const v27038 = {
          A: v26870,
          B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v27041 = [v16737, v27038, v26980, v26981];
        null;
        const v27042 = v15703.closed;
        const v27049 = {
          closed: v27042,
          lptBals: v15828,
          poolBals: v26981,
          protoBals: v26982,
          protoInfo: v26874
          };
        const v81247 = v27049;
        const v81249 = v27019;
        const v81250 = v27049.closed;
        if (v81250) {
          return;
          }
        else {
          const v81252 = v27049.lptBals;
          const v81253 = v81252.A;
          const v81254 = v81252.B;
          const v81255 = v27049.poolBals;
          return;
          }}
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_exactSwapBForA4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_exactSwapBForA4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_exactSwapBForA4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc17,
    Provider_depositB0_9533: ctc17,
    Provider_withdraw0_9533: ctc18,
    Provider_withdrawA0_9533: ctc17,
    Provider_withdrawB0_9533: ctc17,
    Trader_exactSwapAForB0_9533: ctc14,
    Trader_exactSwapBForA0_9533: ctc14,
    Trader_swapAForB0_9533: ctc14,
    Trader_swapBForA0_9533: ctc14,
    arc200_approve0_9533: ctc19,
    arc200_transfer0_9533: ctc19,
    arc200_transferFrom0_9533: ctc20,
    createAllowanceBox0_9533: ctc21,
    createBalanceBoxes0_9533: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  const ctc26 = stdlib.T_Tuple([ctc3, ctc4, ctc21]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v16591 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1147:54:application call to [unknown function] (defined at: ./index.rsh:1147:54:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_exactSwapBForA0_9533" (defined at: ./index.rsh:1147:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapBForA'
    });
  const v16593 = v16591[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v16594 = v16591[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v16600 = v15703.protoInfo;
  const v16602 = v15833.B;
  const v16603 = v15833.A;
  const v16604 = v16600.protoFee;
  const v16605 = v16600.totFee;
  const v16606 = stdlib.safeSub256(v16603, v16594);
  const v16607 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v16605);
  const v16608 = stdlib.safeMul256(v16594, v16607);
  const v16609 = stdlib.safeMul256(v16606, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v16610 = stdlib.safeMul256(v16608, v16602);
  const v16611 = stdlib.safeDiv256(v16610, v16609);
  const v16612 = stdlib.safeAdd256(v16611, stdlib.checkedBigNumberify('./index.rsh:141:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
  const v16613 = stdlib.ge256(v16593, v16612);
  stdlib.assert(v16613, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:25:application call to [unknown function] (defined at: ./index.rsh:155:20:function exp)', 'at ./index.rsh:154:25:application call to [unknown function] (defined at: ./index.rsh:154:25:function exp)', 'at ./index.rsh:171:63:application call to "computeAmtInAndOut" (defined at: ./index.rsh:153:3:function exp)', 'at ./index.rsh:242:19:application call to "computeSwap1" (defined at: ./index.rsh:167:75:function exp)', 'at ./index.rsh:983:58:application call to "computeSwap" (defined at: ./index.rsh:229:71:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1148:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1147:54:application call to [unknown function] (defined at: ./index.rsh:1147:54:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_exactSwapBForA0_9533" (defined at: ./index.rsh:1147:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'provided enough funds to receive amt out',
    who: 'Trader_exactSwapBForA'
    });
  const v16615 = stdlib.safeSub256(v16593, v16612);
  const v16619 = stdlib.safeMul256(v16604, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v16620 = stdlib.safeDiv256(v16619, v16605);
  const v16624 = stdlib.safeAdd256(v16602, v16612);
  const v16628 = stdlib.safeMul256(v16612, v16603);
  const v16629 = stdlib.safeDiv256(v16628, v16624);
  const v16630 = stdlib.safeSub256(v16629, v16594);
  const v16632 = stdlib.safeMul256(v16630, v16620);
  const v16633 = stdlib.safeDiv256(v16632, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v16634 = stdlib.safeMul256(v16612, v16604);
  const v16635 = stdlib.safeDiv256(v16634, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v16639 = stdlib.safeMul256(v16635, v16603);
  const v16640 = stdlib.safeDiv256(v16639, v16624);
  const v16641 = stdlib.gt256(v16640, v16633);
  const v16642 = [v16635, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v16643 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v16633];
  const v16644 = v16641 ? v16642 : v16643;
  const v16646 = v16644[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '0')];
  const v16647 = v16644[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '1')];
  const v16652 = v16600.locked;
  const v16653 = v16652 ? false : true;
  stdlib.assert(v16653, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:939:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1148:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1147:54:application call to [unknown function] (defined at: ./index.rsh:1147:54:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_exactSwapBForA0_9533" (defined at: ./index.rsh:1147:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'locked',
    who: 'Trader_exactSwapBForA'
    });
  const v16664 = stdlib.safeAdd256(v16602, v16593);
  const v16671 = stdlib.safeSub256(v16664, v16615);
  const v16675 = stdlib.safeSub256(v16606, v16647);
  const v16678 = stdlib.safeSub256(v16671, v16646);
  const v16692 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v16594);
  const v16693 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:79:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v16615);
  const v16694 = v16692 ? v16693 : false;
  stdlib.assert(v16694, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1148:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1147:54:application call to [unknown function] (defined at: ./index.rsh:1147:54:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_exactSwapBForA0_9533" (defined at: ./index.rsh:1147:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'slippage',
    who: 'Trader_exactSwapBForA'
    });
  const v16699 = stdlib.safeMul256(v16603, v16602);
  const v16700 = stdlib.safeMul256(v16675, v16678);
  const v16701 = stdlib.ge256(v16700, v16699);
  stdlib.assert(v16701, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:963:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1148:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1147:54:application call to [unknown function] (defined at: ./index.rsh:1147:54:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_exactSwapBForA0_9533" (defined at: ./index.rsh:1147:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'constant product',
    who: 'Trader_exactSwapBForA'
    });
  const v16719 = ['Trader_exactSwapBForA0_9533', v16591];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v16719],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1147:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapBForA"
            });
          ;
          const v28429 = v27741[stdlib.checkedBigNumberify('./index.rsh:1147:12:spread', stdlib.UInt_max, '0')];
          const v28430 = v27741[stdlib.checkedBigNumberify('./index.rsh:1147:12:spread', stdlib.UInt_max, '1')];
          const v28431 = v27741[stdlib.checkedBigNumberify('./index.rsh:1147:12:spread', stdlib.UInt_max, '2')];
          const v28434 = v15703.protoInfo;
          const v28436 = v15833.B;
          const v28437 = v15833.A;
          const v28438 = v28434.protoFee;
          const v28439 = v28434.totFee;
          const v28440 = stdlib.safeSub256(v28437, v28431);
          const v28441 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v28439);
          const v28442 = stdlib.safeMul256(v28431, v28441);
          const v28443 = stdlib.safeMul256(v28440, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v28444 = stdlib.safeMul256(v28442, v28436);
          const v28445 = stdlib.safeDiv256(v28444, v28443);
          const v28446 = stdlib.safeAdd256(v28445, stdlib.checkedBigNumberify('./index.rsh:141:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v28449 = stdlib.safeSub256(v28430, v28446);
          const v28453 = stdlib.safeMul256(v28438, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v28454 = stdlib.safeDiv256(v28453, v28439);
          const v28458 = stdlib.safeAdd256(v28436, v28446);
          const v28462 = stdlib.safeMul256(v28446, v28437);
          const v28463 = stdlib.safeDiv256(v28462, v28458);
          const v28464 = stdlib.safeSub256(v28463, v28431);
          const v28466 = stdlib.safeMul256(v28464, v28454);
          const v28467 = stdlib.safeDiv256(v28466, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v28468 = stdlib.safeMul256(v28446, v28438);
          const v28469 = stdlib.safeDiv256(v28468, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v28473 = stdlib.safeMul256(v28469, v28437);
          const v28474 = stdlib.safeDiv256(v28473, v28458);
          const v28475 = stdlib.gt256(v28474, v28467);
          const v28476 = [v28469, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v28477 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v28467];
          const v28478 = v28475 ? v28476 : v28477;
          const v28480 = v28478[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '0')];
          const v28481 = v28478[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '1')];
          const v28498 = stdlib.safeAdd256(v28436, v28430);
          const v28505 = stdlib.safeSub256(v28498, v28449);
          const v28509 = stdlib.safeSub256(v28440, v28481);
          const v28512 = stdlib.safeSub256(v28505, v28480);
          const v28514 = v15703.protoBals;
          const v28515 = v28514.A;
          const v28519 = stdlib.safeAdd256(v28515, v28481);
          const v28520 = v28514.B;
          const v28524 = stdlib.safeAdd256(v28520, v28480);
          const v28540 = {
            A: v28431,
            B: v28449
            };
          const v28541 = {
            A: v28509,
            B: v28512
            };
          const v28542 = {
            A: v28519,
            B: v28524
            };
          if (v28429) {
            const v28548 = await txn1.getOutput('Trader_exactSwapBForA', 'v28540', ctc10, v28540);
            
            const v81583 = v15703;
            const v81585 = v15707;
            const v81586 = v15703.closed;
            if (v81586) {
              sim_r.isHalt = false;
              }
            else {
              const v81588 = v15703.lptBals;
              const v81589 = v81588.A;
              const v81590 = v81588.B;
              const v81591 = v15703.poolBals;
              sim_r.isHalt = false;
              }}
          else {
            const v28563 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
            const v28564 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
            const v28565 = [v16737, v15684];
            const v28566 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v28565];
            const v28570 = stdlib.bytesFromHex("0x4a968f8f");
            const v28571 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v15641,
                remote: ({
                  accs: [v16737, v15684],
                  apps: [v15641],
                  bills: stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0'),
                  boxes: [[ctc25, v28563], [ctc25, v28564], [ctc26, v28566]],
                  fees: stdlib.checkedBigNumberify('./index.rsh:745:21:decimal', stdlib.UInt_max, '1'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v28572 = await txn1.getOutput('internal', 'v28571', ctc24, v28571);
            const v28574 = v28572[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
            const v28579 = stdlib.add(v15707, v28574);
            const v28581 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v16737, ctc1), null);
            const v28582 = stdlib.fromSome(v28581, stdlib.checkedBigNumberify('./index.rsh:1055:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v28583 = stdlib.safeAdd256(v28582, v28431);
            await stdlib.simMapSet(sim_r, 2, ctc8, v16737, ctc1, v28583);
            const v28584 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v16737, ctc1), null);
            const v28585 = stdlib.fromSome(v28584, stdlib.checkedBigNumberify('./index.rsh:1057:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v28586 = stdlib.safeAdd256(v28585, v28449);
            await stdlib.simMapSet(sim_r, 3, ctc8, v16737, ctc1, v28586);
            const v28588 = await txn1.getOutput('Trader_exactSwapBForA', 'v28540', ctc10, v28540);
            
            const v28598 = {
              A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
              B: v28430
              };
            const v28601 = [v16737, v28598, v28540, v28541];
            null;
            const v28602 = v15703.closed;
            const v28609 = {
              closed: v28602,
              lptBals: v15828,
              poolBals: v28541,
              protoBals: v28542,
              protoInfo: v28434
              };
            const v81599 = v28609;
            const v81601 = v28579;
            const v81602 = v28609.closed;
            if (v81602) {
              sim_r.isHalt = false;
              }
            else {
              const v81604 = v28609.lptBals;
              const v81605 = v81604.A;
              const v81606 = v81604.B;
              const v81607 = v28609.poolBals;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v28429 = v27741[stdlib.checkedBigNumberify('./index.rsh:1147:12:spread', stdlib.UInt_max, '0')];
      const v28430 = v27741[stdlib.checkedBigNumberify('./index.rsh:1147:12:spread', stdlib.UInt_max, '1')];
      const v28431 = v27741[stdlib.checkedBigNumberify('./index.rsh:1147:12:spread', stdlib.UInt_max, '2')];
      const v28434 = v15703.protoInfo;
      const v28436 = v15833.B;
      const v28437 = v15833.A;
      const v28438 = v28434.protoFee;
      const v28439 = v28434.totFee;
      const v28440 = stdlib.safeSub256(v28437, v28431);
      const v28441 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v28439);
      const v28442 = stdlib.safeMul256(v28431, v28441);
      const v28443 = stdlib.safeMul256(v28440, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v28444 = stdlib.safeMul256(v28442, v28436);
      const v28445 = stdlib.safeDiv256(v28444, v28443);
      const v28446 = stdlib.safeAdd256(v28445, stdlib.checkedBigNumberify('./index.rsh:141:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v28447 = stdlib.ge256(v28430, v28446);
      stdlib.assert(v28447, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:154:25:application call to [unknown function] (defined at: ./index.rsh:155:20:function exp)', 'at ./index.rsh:154:25:application call to [unknown function] (defined at: ./index.rsh:154:25:function exp)', 'at ./index.rsh:171:63:application call to "computeAmtInAndOut" (defined at: ./index.rsh:153:3:function exp)', 'at ./index.rsh:242:19:application call to "computeSwap1" (defined at: ./index.rsh:167:75:function exp)', 'at ./index.rsh:983:58:application call to "computeSwap" (defined at: ./index.rsh:229:71:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1148:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1149:21:application call to [unknown function] (defined at: ./index.rsh:1149:21:function exp)'],
        msg: 'provided enough funds to receive amt out',
        who: 'Trader_exactSwapBForA'
        });
      const v28449 = stdlib.safeSub256(v28430, v28446);
      const v28453 = stdlib.safeMul256(v28438, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v28454 = stdlib.safeDiv256(v28453, v28439);
      const v28458 = stdlib.safeAdd256(v28436, v28446);
      const v28462 = stdlib.safeMul256(v28446, v28437);
      const v28463 = stdlib.safeDiv256(v28462, v28458);
      const v28464 = stdlib.safeSub256(v28463, v28431);
      const v28466 = stdlib.safeMul256(v28464, v28454);
      const v28467 = stdlib.safeDiv256(v28466, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v28468 = stdlib.safeMul256(v28446, v28438);
      const v28469 = stdlib.safeDiv256(v28468, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v28473 = stdlib.safeMul256(v28469, v28437);
      const v28474 = stdlib.safeDiv256(v28473, v28458);
      const v28475 = stdlib.gt256(v28474, v28467);
      const v28476 = [v28469, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v28477 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v28467];
      const v28478 = v28475 ? v28476 : v28477;
      const v28480 = v28478[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '0')];
      const v28481 = v28478[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '1')];
      const v28486 = v28434.locked;
      const v28487 = v28486 ? false : true;
      stdlib.assert(v28487, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:939:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1148:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1149:21:application call to [unknown function] (defined at: ./index.rsh:1149:21:function exp)'],
        msg: 'locked',
        who: 'Trader_exactSwapBForA'
        });
      const v28498 = stdlib.safeAdd256(v28436, v28430);
      const v28505 = stdlib.safeSub256(v28498, v28449);
      const v28509 = stdlib.safeSub256(v28440, v28481);
      const v28512 = stdlib.safeSub256(v28505, v28480);
      const v28514 = v15703.protoBals;
      const v28515 = v28514.A;
      const v28519 = stdlib.safeAdd256(v28515, v28481);
      const v28520 = v28514.B;
      const v28524 = stdlib.safeAdd256(v28520, v28480);
      const v28526 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v28431);
      const v28527 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:79:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v28449);
      const v28528 = v28526 ? v28527 : false;
      stdlib.assert(v28528, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1148:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1149:21:application call to [unknown function] (defined at: ./index.rsh:1149:21:function exp)'],
        msg: 'slippage',
        who: 'Trader_exactSwapBForA'
        });
      const v28533 = stdlib.safeMul256(v28437, v28436);
      const v28534 = stdlib.safeMul256(v28509, v28512);
      const v28535 = stdlib.ge256(v28534, v28533);
      stdlib.assert(v28535, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:963:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1148:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1149:21:application call to [unknown function] (defined at: ./index.rsh:1149:21:function exp)'],
        msg: 'constant product',
        who: 'Trader_exactSwapBForA'
        });
      const v28540 = {
        A: v28431,
        B: v28449
        };
      const v28541 = {
        A: v28509,
        B: v28512
        };
      const v28542 = {
        A: v28519,
        B: v28524
        };
      if (v28429) {
        const v28548 = await txn1.getOutput('Trader_exactSwapBForA', 'v28540', ctc10, v28540);
        if (v13177) {
          stdlib.protect(ctc0, await interact.out(v27741, v28548), {
            at: './index.rsh:1147:13:application',
            fs: ['at ./index.rsh:1147:13:application call to [unknown function] (defined at: ./index.rsh:1147:13:function exp)', 'at ./index.rsh:1030:16:application call to "k" (defined at: ./index.rsh:1149:21:function exp)', 'at ./index.rsh:1149:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1149:21:application call to [unknown function] (defined at: ./index.rsh:1149:21:function exp)'],
            msg: 'out',
            who: 'Trader_exactSwapBForA'
            });
          }
        else {
          }
        
        const v81583 = v15703;
        const v81585 = v15707;
        const v81586 = v15703.closed;
        if (v81586) {
          return;
          }
        else {
          const v81588 = v15703.lptBals;
          const v81589 = v81588.A;
          const v81590 = v81588.B;
          const v81591 = v15703.poolBals;
          return;
          }}
      else {
        const v28563 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
        const v28564 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
        const v28565 = [v16737, v15684];
        const v28566 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v28565];
        const v28570 = stdlib.bytesFromHex("0x4a968f8f");
        const v28571 = undefined /* Remote */;
        const v28572 = await txn1.getOutput('internal', 'v28571', ctc24, v28571);
        const v28574 = v28572[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
        const v28579 = stdlib.add(v15707, v28574);
        const v28580 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v28574);
        stdlib.assert(v28580, {
          at: './index.rsh:752:15:application',
          fs: ['at ./index.rsh:1047:41:application call to [unknown function] (defined at: ./index.rsh:735:56:function exp)', 'at ./index.rsh:1149:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1149:21:application call to [unknown function] (defined at: ./index.rsh:1149:21:function exp)'],
          msg: 'remote bill check',
          who: 'Trader_exactSwapBForA'
          });
        const v28581 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v16737, ctc1), null);
        const v28582 = stdlib.fromSome(v28581, stdlib.checkedBigNumberify('./index.rsh:1055:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v28583 = stdlib.safeAdd256(v28582, v28431);
        await stdlib.mapSet(map2, ctc8, v16737, ctc1, v28583);
        const v28584 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v16737, ctc1), null);
        const v28585 = stdlib.fromSome(v28584, stdlib.checkedBigNumberify('./index.rsh:1057:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v28586 = stdlib.safeAdd256(v28585, v28449);
        await stdlib.mapSet(map3, ctc8, v16737, ctc1, v28586);
        const v28588 = await txn1.getOutput('Trader_exactSwapBForA', 'v28540', ctc10, v28540);
        if (v13177) {
          stdlib.protect(ctc0, await interact.out(v27741, v28588), {
            at: './index.rsh:1147:13:application',
            fs: ['at ./index.rsh:1147:13:application call to [unknown function] (defined at: ./index.rsh:1147:13:function exp)', 'at ./index.rsh:1060:16:application call to "k" (defined at: ./index.rsh:1149:21:function exp)', 'at ./index.rsh:1149:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1149:21:application call to [unknown function] (defined at: ./index.rsh:1149:21:function exp)'],
            msg: 'out',
            who: 'Trader_exactSwapBForA'
            });
          }
        else {
          }
        
        const v28598 = {
          A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          B: v28430
          };
        const v28601 = [v16737, v28598, v28540, v28541];
        null;
        const v28602 = v15703.closed;
        const v28609 = {
          closed: v28602,
          lptBals: v15828,
          poolBals: v28541,
          protoBals: v28542,
          protoInfo: v28434
          };
        const v81599 = v28609;
        const v81601 = v28579;
        const v81602 = v28609.closed;
        if (v81602) {
          return;
          }
        else {
          const v81604 = v28609.lptBals;
          const v81605 = v81604.A;
          const v81606 = v81604.B;
          const v81607 = v28609.poolBals;
          return;
          }}
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_swapAForB4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_swapAForB4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_swapAForB4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc17,
    Provider_depositB0_9533: ctc17,
    Provider_withdraw0_9533: ctc18,
    Provider_withdrawA0_9533: ctc17,
    Provider_withdrawB0_9533: ctc17,
    Trader_exactSwapAForB0_9533: ctc14,
    Trader_exactSwapBForA0_9533: ctc14,
    Trader_swapAForB0_9533: ctc14,
    Trader_swapBForA0_9533: ctc14,
    arc200_approve0_9533: ctc19,
    arc200_transfer0_9533: ctc19,
    arc200_transferFrom0_9533: ctc20,
    createAllowanceBox0_9533: ctc21,
    createBalanceBoxes0_9533: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  const ctc26 = stdlib.T_Tuple([ctc3, ctc4, ctc21]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v16206 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1108:49:application call to [unknown function] (defined at: ./index.rsh:1108:49:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_swapAForB0_9533" (defined at: ./index.rsh:1108:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v16208 = v16206[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v16209 = v16206[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v16216 = v15703.protoInfo;
  const v16218 = v15833.A;
  const v16219 = v15833.B;
  const v16220 = v16216.protoFee;
  const v16221 = v16216.totFee;
  const v16222 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v16221);
  const v16223 = stdlib.safeMul256(v16208, v16222);
  const v16224 = stdlib.safeMul256(v16218, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v16225 = stdlib.safeAdd256(v16224, v16223);
  const v16226 = stdlib.safeMul256(v16223, v16219);
  const v16227 = stdlib.safeDiv256(v16226, v16225);
  const v16231 = stdlib.safeMul256(v16220, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v16232 = stdlib.safeDiv256(v16231, v16221);
  const v16236 = stdlib.safeAdd256(v16218, v16208);
  const v16240 = stdlib.safeMul256(v16208, v16219);
  const v16241 = stdlib.safeDiv256(v16240, v16236);
  const v16242 = stdlib.safeSub256(v16241, v16227);
  const v16244 = stdlib.safeMul256(v16242, v16232);
  const v16245 = stdlib.safeDiv256(v16244, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v16246 = stdlib.safeMul256(v16208, v16220);
  const v16247 = stdlib.safeDiv256(v16246, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v16251 = stdlib.safeMul256(v16247, v16219);
  const v16252 = stdlib.safeDiv256(v16251, v16236);
  const v16253 = stdlib.gt256(v16252, v16245);
  const v16254 = [v16247, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v16255 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v16245];
  const v16256 = v16253 ? v16254 : v16255;
  const v16258 = v16256[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '0')];
  const v16259 = v16256[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '1')];
  const v16264 = v16216.locked;
  const v16265 = v16264 ? false : true;
  stdlib.assert(v16265, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:939:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1109:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1108:49:application call to [unknown function] (defined at: ./index.rsh:1108:49:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_swapAForB0_9533" (defined at: ./index.rsh:1108:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'locked',
    who: 'Trader_swapAForB'
    });
  const v16282 = stdlib.safeSub256(v16219, v16227);
  const v16286 = stdlib.safeSub256(v16236, v16258);
  const v16289 = stdlib.safeSub256(v16282, v16259);
  const v16303 = stdlib.le256(v16209, v16227);
  stdlib.assert(v16303, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1109:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1108:49:application call to [unknown function] (defined at: ./index.rsh:1108:49:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_swapAForB0_9533" (defined at: ./index.rsh:1108:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v16308 = stdlib.safeMul256(v16218, v16219);
  const v16309 = stdlib.safeMul256(v16286, v16289);
  const v16310 = stdlib.ge256(v16309, v16308);
  stdlib.assert(v16310, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:963:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1109:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1108:49:application call to [unknown function] (defined at: ./index.rsh:1108:49:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_swapAForB0_9533" (defined at: ./index.rsh:1108:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v16328 = ['Trader_swapAForB0_9533', v16206];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v16328],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1108:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          ;
          const v29989 = v29116[stdlib.checkedBigNumberify('./index.rsh:1108:12:spread', stdlib.UInt_max, '0')];
          const v29990 = v29116[stdlib.checkedBigNumberify('./index.rsh:1108:12:spread', stdlib.UInt_max, '1')];
          const v29995 = v15703.protoInfo;
          const v29997 = v15833.A;
          const v29998 = v15833.B;
          const v29999 = v29995.protoFee;
          const v30000 = v29995.totFee;
          const v30001 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v30000);
          const v30002 = stdlib.safeMul256(v29990, v30001);
          const v30003 = stdlib.safeMul256(v29997, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v30004 = stdlib.safeAdd256(v30003, v30002);
          const v30005 = stdlib.safeMul256(v30002, v29998);
          const v30006 = stdlib.safeDiv256(v30005, v30004);
          const v30010 = stdlib.safeMul256(v29999, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v30011 = stdlib.safeDiv256(v30010, v30000);
          const v30015 = stdlib.safeAdd256(v29997, v29990);
          const v30019 = stdlib.safeMul256(v29990, v29998);
          const v30020 = stdlib.safeDiv256(v30019, v30015);
          const v30021 = stdlib.safeSub256(v30020, v30006);
          const v30023 = stdlib.safeMul256(v30021, v30011);
          const v30024 = stdlib.safeDiv256(v30023, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v30025 = stdlib.safeMul256(v29990, v29999);
          const v30026 = stdlib.safeDiv256(v30025, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v30030 = stdlib.safeMul256(v30026, v29998);
          const v30031 = stdlib.safeDiv256(v30030, v30015);
          const v30032 = stdlib.gt256(v30031, v30024);
          const v30033 = [v30026, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v30034 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v30024];
          const v30035 = v30032 ? v30033 : v30034;
          const v30037 = v30035[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '0')];
          const v30038 = v30035[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '1')];
          const v30061 = stdlib.safeSub256(v29998, v30006);
          const v30065 = stdlib.safeSub256(v30015, v30037);
          const v30068 = stdlib.safeSub256(v30061, v30038);
          const v30070 = v15703.protoBals;
          const v30071 = v30070.A;
          const v30075 = stdlib.safeAdd256(v30071, v30037);
          const v30076 = v30070.B;
          const v30080 = stdlib.safeAdd256(v30076, v30038);
          const v30094 = {
            A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
            B: v30006
            };
          const v30095 = {
            A: v30065,
            B: v30068
            };
          const v30096 = {
            A: v30075,
            B: v30080
            };
          if (v29989) {
            const v30102 = await txn1.getOutput('Trader_swapAForB', 'v30094', ctc10, v30094);
            
            const v81935 = v15703;
            const v81937 = v15707;
            const v81938 = v15703.closed;
            if (v81938) {
              sim_r.isHalt = false;
              }
            else {
              const v81940 = v15703.lptBals;
              const v81941 = v81940.A;
              const v81942 = v81940.B;
              const v81943 = v15703.poolBals;
              sim_r.isHalt = false;
              }}
          else {
            const v30117 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
            const v30118 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
            const v30119 = [v16737, v15684];
            const v30120 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v30119];
            const v30124 = stdlib.bytesFromHex("0x4a968f8f");
            const v30125 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v15639,
                remote: ({
                  accs: [v16737, v15684],
                  apps: [v15639],
                  bills: stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0'),
                  boxes: [[ctc25, v30117], [ctc25, v30118], [ctc26, v30120]],
                  fees: stdlib.checkedBigNumberify('./index.rsh:745:21:decimal', stdlib.UInt_max, '1'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v30126 = await txn1.getOutput('internal', 'v30125', ctc24, v30125);
            const v30128 = v30126[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
            const v30133 = stdlib.add(v15707, v30128);
            const v30135 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v16737, ctc1), null);
            const v30136 = stdlib.fromSome(v30135, stdlib.checkedBigNumberify('./index.rsh:1043:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v30137 = stdlib.safeAdd256(v30136, v30006);
            await stdlib.simMapSet(sim_r, 3, ctc8, v16737, ctc1, v30137);
            const v30138 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v16737, ctc1), null);
            const v30139 = stdlib.fromSome(v30138, stdlib.checkedBigNumberify('./index.rsh:1045:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            await stdlib.simMapSet(sim_r, 2, ctc8, v16737, ctc1, v30139);
            const v30141 = await txn1.getOutput('Trader_swapAForB', 'v30094', ctc10, v30094);
            
            const v30151 = {
              A: v29990,
              B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
              };
            const v30154 = [v16737, v30151, v30094, v30095];
            null;
            const v30155 = v15703.closed;
            const v30162 = {
              closed: v30155,
              lptBals: v15828,
              poolBals: v30095,
              protoBals: v30096,
              protoInfo: v29995
              };
            const v81951 = v30162;
            const v81953 = v30133;
            const v81954 = v30162.closed;
            if (v81954) {
              sim_r.isHalt = false;
              }
            else {
              const v81956 = v30162.lptBals;
              const v81957 = v81956.A;
              const v81958 = v81956.B;
              const v81959 = v30162.poolBals;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v29989 = v29116[stdlib.checkedBigNumberify('./index.rsh:1108:12:spread', stdlib.UInt_max, '0')];
      const v29990 = v29116[stdlib.checkedBigNumberify('./index.rsh:1108:12:spread', stdlib.UInt_max, '1')];
      const v29991 = v29116[stdlib.checkedBigNumberify('./index.rsh:1108:12:spread', stdlib.UInt_max, '2')];
      const v29995 = v15703.protoInfo;
      const v29997 = v15833.A;
      const v29998 = v15833.B;
      const v29999 = v29995.protoFee;
      const v30000 = v29995.totFee;
      const v30001 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v30000);
      const v30002 = stdlib.safeMul256(v29990, v30001);
      const v30003 = stdlib.safeMul256(v29997, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v30004 = stdlib.safeAdd256(v30003, v30002);
      const v30005 = stdlib.safeMul256(v30002, v29998);
      const v30006 = stdlib.safeDiv256(v30005, v30004);
      const v30010 = stdlib.safeMul256(v29999, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v30011 = stdlib.safeDiv256(v30010, v30000);
      const v30015 = stdlib.safeAdd256(v29997, v29990);
      const v30019 = stdlib.safeMul256(v29990, v29998);
      const v30020 = stdlib.safeDiv256(v30019, v30015);
      const v30021 = stdlib.safeSub256(v30020, v30006);
      const v30023 = stdlib.safeMul256(v30021, v30011);
      const v30024 = stdlib.safeDiv256(v30023, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v30025 = stdlib.safeMul256(v29990, v29999);
      const v30026 = stdlib.safeDiv256(v30025, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v30030 = stdlib.safeMul256(v30026, v29998);
      const v30031 = stdlib.safeDiv256(v30030, v30015);
      const v30032 = stdlib.gt256(v30031, v30024);
      const v30033 = [v30026, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v30034 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v30024];
      const v30035 = v30032 ? v30033 : v30034;
      const v30037 = v30035[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '0')];
      const v30038 = v30035[stdlib.checkedBigNumberify('./index.rsh:232:29:array', stdlib.UInt_max, '1')];
      const v30043 = v29995.locked;
      const v30044 = v30043 ? false : true;
      stdlib.assert(v30044, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:939:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1109:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1110:21:application call to [unknown function] (defined at: ./index.rsh:1110:21:function exp)'],
        msg: 'locked',
        who: 'Trader_swapAForB'
        });
      const v30061 = stdlib.safeSub256(v29998, v30006);
      const v30065 = stdlib.safeSub256(v30015, v30037);
      const v30068 = stdlib.safeSub256(v30061, v30038);
      const v30070 = v15703.protoBals;
      const v30071 = v30070.A;
      const v30075 = stdlib.safeAdd256(v30071, v30037);
      const v30076 = v30070.B;
      const v30080 = stdlib.safeAdd256(v30076, v30038);
      const v30082 = stdlib.le256(v29991, v30006);
      stdlib.assert(v30082, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1109:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1110:21:application call to [unknown function] (defined at: ./index.rsh:1110:21:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v30087 = stdlib.safeMul256(v29997, v29998);
      const v30088 = stdlib.safeMul256(v30065, v30068);
      const v30089 = stdlib.ge256(v30088, v30087);
      stdlib.assert(v30089, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:963:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1109:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1110:21:application call to [unknown function] (defined at: ./index.rsh:1110:21:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      const v30094 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: v30006
        };
      const v30095 = {
        A: v30065,
        B: v30068
        };
      const v30096 = {
        A: v30075,
        B: v30080
        };
      if (v29989) {
        const v30102 = await txn1.getOutput('Trader_swapAForB', 'v30094', ctc10, v30094);
        if (v13177) {
          stdlib.protect(ctc0, await interact.out(v29116, v30102), {
            at: './index.rsh:1108:13:application',
            fs: ['at ./index.rsh:1108:13:application call to [unknown function] (defined at: ./index.rsh:1108:13:function exp)', 'at ./index.rsh:1030:16:application call to "k" (defined at: ./index.rsh:1110:21:function exp)', 'at ./index.rsh:1110:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1110:21:application call to [unknown function] (defined at: ./index.rsh:1110:21:function exp)'],
            msg: 'out',
            who: 'Trader_swapAForB'
            });
          }
        else {
          }
        
        const v81935 = v15703;
        const v81937 = v15707;
        const v81938 = v15703.closed;
        if (v81938) {
          return;
          }
        else {
          const v81940 = v15703.lptBals;
          const v81941 = v81940.A;
          const v81942 = v81940.B;
          const v81943 = v15703.poolBals;
          return;
          }}
      else {
        const v30117 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
        const v30118 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
        const v30119 = [v16737, v15684];
        const v30120 = [v15639, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v30119];
        const v30124 = stdlib.bytesFromHex("0x4a968f8f");
        const v30125 = undefined /* Remote */;
        const v30126 = await txn1.getOutput('internal', 'v30125', ctc24, v30125);
        const v30128 = v30126[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
        const v30133 = stdlib.add(v15707, v30128);
        const v30134 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v30128);
        stdlib.assert(v30134, {
          at: './index.rsh:752:15:application',
          fs: ['at ./index.rsh:1035:41:application call to [unknown function] (defined at: ./index.rsh:735:56:function exp)', 'at ./index.rsh:1110:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1110:21:application call to [unknown function] (defined at: ./index.rsh:1110:21:function exp)'],
          msg: 'remote bill check',
          who: 'Trader_swapAForB'
          });
        const v30135 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v16737, ctc1), null);
        const v30136 = stdlib.fromSome(v30135, stdlib.checkedBigNumberify('./index.rsh:1043:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v30137 = stdlib.safeAdd256(v30136, v30006);
        await stdlib.mapSet(map3, ctc8, v16737, ctc1, v30137);
        const v30138 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v16737, ctc1), null);
        const v30139 = stdlib.fromSome(v30138, stdlib.checkedBigNumberify('./index.rsh:1045:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        await stdlib.mapSet(map2, ctc8, v16737, ctc1, v30139);
        const v30141 = await txn1.getOutput('Trader_swapAForB', 'v30094', ctc10, v30094);
        if (v13177) {
          stdlib.protect(ctc0, await interact.out(v29116, v30141), {
            at: './index.rsh:1108:13:application',
            fs: ['at ./index.rsh:1108:13:application call to [unknown function] (defined at: ./index.rsh:1108:13:function exp)', 'at ./index.rsh:1060:16:application call to "k" (defined at: ./index.rsh:1110:21:function exp)', 'at ./index.rsh:1110:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1110:21:application call to [unknown function] (defined at: ./index.rsh:1110:21:function exp)'],
            msg: 'out',
            who: 'Trader_swapAForB'
            });
          }
        else {
          }
        
        const v30151 = {
          A: v29990,
          B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v30154 = [v16737, v30151, v30094, v30095];
        null;
        const v30155 = v15703.closed;
        const v30162 = {
          closed: v30155,
          lptBals: v15828,
          poolBals: v30095,
          protoBals: v30096,
          protoInfo: v29995
          };
        const v81951 = v30162;
        const v81953 = v30133;
        const v81954 = v30162.closed;
        if (v81954) {
          return;
          }
        else {
          const v81956 = v30162.lptBals;
          const v81957 = v81956.A;
          const v81958 = v81956.B;
          const v81959 = v30162.poolBals;
          return;
          }}
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_swapBForA4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_swapBForA4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_swapBForA4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc17,
    Provider_depositB0_9533: ctc17,
    Provider_withdraw0_9533: ctc18,
    Provider_withdrawA0_9533: ctc17,
    Provider_withdrawB0_9533: ctc17,
    Trader_exactSwapAForB0_9533: ctc14,
    Trader_exactSwapBForA0_9533: ctc14,
    Trader_swapAForB0_9533: ctc14,
    Trader_swapBForA0_9533: ctc14,
    arc200_approve0_9533: ctc19,
    arc200_transfer0_9533: ctc19,
    arc200_transferFrom0_9533: ctc20,
    createAllowanceBox0_9533: ctc21,
    createBalanceBoxes0_9533: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  const ctc26 = stdlib.T_Tuple([ctc3, ctc4, ctc21]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v16332 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1123:49:application call to [unknown function] (defined at: ./index.rsh:1123:49:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_swapBForA0_9533" (defined at: ./index.rsh:1123:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v16334 = v16332[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v16335 = v16332[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v16342 = v15703.protoInfo;
  const v16344 = v15833.B;
  const v16345 = v15833.A;
  const v16346 = v16342.protoFee;
  const v16347 = v16342.totFee;
  const v16348 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v16347);
  const v16349 = stdlib.safeMul256(v16334, v16348);
  const v16350 = stdlib.safeMul256(v16344, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v16351 = stdlib.safeAdd256(v16350, v16349);
  const v16352 = stdlib.safeMul256(v16349, v16345);
  const v16353 = stdlib.safeDiv256(v16352, v16351);
  const v16357 = stdlib.safeMul256(v16346, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v16358 = stdlib.safeDiv256(v16357, v16347);
  const v16362 = stdlib.safeAdd256(v16344, v16334);
  const v16366 = stdlib.safeMul256(v16334, v16345);
  const v16367 = stdlib.safeDiv256(v16366, v16362);
  const v16368 = stdlib.safeSub256(v16367, v16353);
  const v16370 = stdlib.safeMul256(v16368, v16358);
  const v16371 = stdlib.safeDiv256(v16370, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v16372 = stdlib.safeMul256(v16334, v16346);
  const v16373 = stdlib.safeDiv256(v16372, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v16377 = stdlib.safeMul256(v16373, v16345);
  const v16378 = stdlib.safeDiv256(v16377, v16362);
  const v16379 = stdlib.gt256(v16378, v16371);
  const v16380 = [v16373, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v16381 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v16371];
  const v16382 = v16379 ? v16380 : v16381;
  const v16384 = v16382[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '0')];
  const v16385 = v16382[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '1')];
  const v16390 = v16342.locked;
  const v16391 = v16390 ? false : true;
  stdlib.assert(v16391, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:939:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1124:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1123:49:application call to [unknown function] (defined at: ./index.rsh:1123:49:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_swapBForA0_9533" (defined at: ./index.rsh:1123:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'locked',
    who: 'Trader_swapBForA'
    });
  const v16406 = stdlib.safeSub256(v16345, v16353);
  const v16412 = stdlib.safeSub256(v16406, v16385);
  const v16415 = stdlib.safeSub256(v16362, v16384);
  const v16429 = stdlib.le256(v16335, v16353);
  stdlib.assert(v16429, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1124:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1123:49:application call to [unknown function] (defined at: ./index.rsh:1123:49:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_swapBForA0_9533" (defined at: ./index.rsh:1123:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v16435 = stdlib.safeMul256(v16345, v16344);
  const v16436 = stdlib.safeMul256(v16412, v16415);
  const v16437 = stdlib.ge256(v16436, v16435);
  stdlib.assert(v16437, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:963:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1124:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1123:49:application call to [unknown function] (defined at: ./index.rsh:1123:49:function exp)', 'at ./index.rsh:506:31:application call to "runTrader_swapBForA0_9533" (defined at: ./index.rsh:1123:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v16455 = ['Trader_swapBForA0_9533', v16332];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v16455],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1123:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          ;
          const v31542 = v30491[stdlib.checkedBigNumberify('./index.rsh:1123:12:spread', stdlib.UInt_max, '0')];
          const v31543 = v30491[stdlib.checkedBigNumberify('./index.rsh:1123:12:spread', stdlib.UInt_max, '1')];
          const v31548 = v15703.protoInfo;
          const v31550 = v15833.B;
          const v31551 = v15833.A;
          const v31552 = v31548.protoFee;
          const v31553 = v31548.totFee;
          const v31554 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v31553);
          const v31555 = stdlib.safeMul256(v31543, v31554);
          const v31556 = stdlib.safeMul256(v31550, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v31557 = stdlib.safeAdd256(v31556, v31555);
          const v31558 = stdlib.safeMul256(v31555, v31551);
          const v31559 = stdlib.safeDiv256(v31558, v31557);
          const v31563 = stdlib.safeMul256(v31552, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v31564 = stdlib.safeDiv256(v31563, v31553);
          const v31568 = stdlib.safeAdd256(v31550, v31543);
          const v31572 = stdlib.safeMul256(v31543, v31551);
          const v31573 = stdlib.safeDiv256(v31572, v31568);
          const v31574 = stdlib.safeSub256(v31573, v31559);
          const v31576 = stdlib.safeMul256(v31574, v31564);
          const v31577 = stdlib.safeDiv256(v31576, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v31578 = stdlib.safeMul256(v31543, v31552);
          const v31579 = stdlib.safeDiv256(v31578, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v31583 = stdlib.safeMul256(v31579, v31551);
          const v31584 = stdlib.safeDiv256(v31583, v31568);
          const v31585 = stdlib.gt256(v31584, v31577);
          const v31586 = [v31579, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v31587 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v31577];
          const v31588 = v31585 ? v31586 : v31587;
          const v31590 = v31588[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '0')];
          const v31591 = v31588[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '1')];
          const v31612 = stdlib.safeSub256(v31551, v31559);
          const v31618 = stdlib.safeSub256(v31612, v31591);
          const v31621 = stdlib.safeSub256(v31568, v31590);
          const v31623 = v15703.protoBals;
          const v31624 = v31623.A;
          const v31628 = stdlib.safeAdd256(v31624, v31591);
          const v31629 = v31623.B;
          const v31633 = stdlib.safeAdd256(v31629, v31590);
          const v31648 = {
            A: v31559,
            B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v31649 = {
            A: v31618,
            B: v31621
            };
          const v31650 = {
            A: v31628,
            B: v31633
            };
          if (v31542) {
            const v31656 = await txn1.getOutput('Trader_swapBForA', 'v31648', ctc10, v31648);
            
            const v82287 = v15703;
            const v82289 = v15707;
            const v82290 = v15703.closed;
            if (v82290) {
              sim_r.isHalt = false;
              }
            else {
              const v82292 = v15703.lptBals;
              const v82293 = v82292.A;
              const v82294 = v82292.B;
              const v82295 = v15703.poolBals;
              sim_r.isHalt = false;
              }}
          else {
            const v31671 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
            const v31672 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
            const v31673 = [v16737, v15684];
            const v31674 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v31673];
            const v31678 = stdlib.bytesFromHex("0x4a968f8f");
            const v31679 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v15641,
                remote: ({
                  accs: [v16737, v15684],
                  apps: [v15641],
                  bills: stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0'),
                  boxes: [[ctc25, v31671], [ctc25, v31672], [ctc26, v31674]],
                  fees: stdlib.checkedBigNumberify('./index.rsh:745:21:decimal', stdlib.UInt_max, '1'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v31680 = await txn1.getOutput('internal', 'v31679', ctc24, v31679);
            const v31682 = v31680[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
            const v31687 = stdlib.add(v15707, v31682);
            const v31689 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v16737, ctc1), null);
            const v31690 = stdlib.fromSome(v31689, stdlib.checkedBigNumberify('./index.rsh:1055:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v31691 = stdlib.safeAdd256(v31690, v31559);
            await stdlib.simMapSet(sim_r, 2, ctc8, v16737, ctc1, v31691);
            const v31692 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v16737, ctc1), null);
            const v31693 = stdlib.fromSome(v31692, stdlib.checkedBigNumberify('./index.rsh:1057:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            await stdlib.simMapSet(sim_r, 3, ctc8, v16737, ctc1, v31693);
            const v31695 = await txn1.getOutput('Trader_swapBForA', 'v31648', ctc10, v31648);
            
            const v31705 = {
              A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
              B: v31543
              };
            const v31708 = [v16737, v31705, v31648, v31649];
            null;
            const v31709 = v15703.closed;
            const v31716 = {
              closed: v31709,
              lptBals: v15828,
              poolBals: v31649,
              protoBals: v31650,
              protoInfo: v31548
              };
            const v82303 = v31716;
            const v82305 = v31687;
            const v82306 = v31716.closed;
            if (v82306) {
              sim_r.isHalt = false;
              }
            else {
              const v82308 = v31716.lptBals;
              const v82309 = v82308.A;
              const v82310 = v82308.B;
              const v82311 = v31716.poolBals;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v31542 = v30491[stdlib.checkedBigNumberify('./index.rsh:1123:12:spread', stdlib.UInt_max, '0')];
      const v31543 = v30491[stdlib.checkedBigNumberify('./index.rsh:1123:12:spread', stdlib.UInt_max, '1')];
      const v31544 = v30491[stdlib.checkedBigNumberify('./index.rsh:1123:12:spread', stdlib.UInt_max, '2')];
      const v31548 = v15703.protoInfo;
      const v31550 = v15833.B;
      const v31551 = v15833.A;
      const v31552 = v31548.protoFee;
      const v31553 = v31548.totFee;
      const v31554 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v31553);
      const v31555 = stdlib.safeMul256(v31543, v31554);
      const v31556 = stdlib.safeMul256(v31550, stdlib.checkedBigNumberify('./index.rsh:22:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v31557 = stdlib.safeAdd256(v31556, v31555);
      const v31558 = stdlib.safeMul256(v31555, v31551);
      const v31559 = stdlib.safeDiv256(v31558, v31557);
      const v31563 = stdlib.safeMul256(v31552, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v31564 = stdlib.safeDiv256(v31563, v31553);
      const v31568 = stdlib.safeAdd256(v31550, v31543);
      const v31572 = stdlib.safeMul256(v31543, v31551);
      const v31573 = stdlib.safeDiv256(v31572, v31568);
      const v31574 = stdlib.safeSub256(v31573, v31559);
      const v31576 = stdlib.safeMul256(v31574, v31564);
      const v31577 = stdlib.safeDiv256(v31576, stdlib.checkedBigNumberify('./index.rsh:186:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v31578 = stdlib.safeMul256(v31543, v31552);
      const v31579 = stdlib.safeDiv256(v31578, stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v31583 = stdlib.safeMul256(v31579, v31551);
      const v31584 = stdlib.safeDiv256(v31583, v31568);
      const v31585 = stdlib.gt256(v31584, v31577);
      const v31586 = [v31579, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v31587 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v31577];
      const v31588 = v31585 ? v31586 : v31587;
      const v31590 = v31588[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '0')];
      const v31591 = v31588[stdlib.checkedBigNumberify('./index.rsh:241:29:array', stdlib.UInt_max, '1')];
      const v31596 = v31548.locked;
      const v31597 = v31596 ? false : true;
      stdlib.assert(v31597, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:939:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1124:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1125:21:application call to [unknown function] (defined at: ./index.rsh:1125:21:function exp)'],
        msg: 'locked',
        who: 'Trader_swapBForA'
        });
      const v31612 = stdlib.safeSub256(v31551, v31559);
      const v31618 = stdlib.safeSub256(v31612, v31591);
      const v31621 = stdlib.safeSub256(v31568, v31590);
      const v31623 = v15703.protoBals;
      const v31624 = v31623.A;
      const v31628 = stdlib.safeAdd256(v31624, v31591);
      const v31629 = v31623.B;
      const v31633 = stdlib.safeAdd256(v31629, v31590);
      const v31635 = stdlib.le256(v31544, v31559);
      stdlib.assert(v31635, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1124:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1125:21:application call to [unknown function] (defined at: ./index.rsh:1125:21:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v31641 = stdlib.safeMul256(v31551, v31550);
      const v31642 = stdlib.safeMul256(v31618, v31621);
      const v31643 = stdlib.ge256(v31642, v31641);
      stdlib.assert(v31643, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:963:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:990:51:application call to "calcSwap" (defined at: ./index.rsh:938:73:function exp)', 'at ./index.rsh:1022:62:application call to "viewSwap" (defined at: ./index.rsh:981:67:function exp)', 'at ./index.rsh:1124:25:application call to "doSwap" (defined at: ./index.rsh:1021:11:function exp)', 'at ./index.rsh:1125:21:application call to [unknown function] (defined at: ./index.rsh:1125:21:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      const v31648 = {
        A: v31559,
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v31649 = {
        A: v31618,
        B: v31621
        };
      const v31650 = {
        A: v31628,
        B: v31633
        };
      if (v31542) {
        const v31656 = await txn1.getOutput('Trader_swapBForA', 'v31648', ctc10, v31648);
        if (v13177) {
          stdlib.protect(ctc0, await interact.out(v30491, v31656), {
            at: './index.rsh:1123:13:application',
            fs: ['at ./index.rsh:1123:13:application call to [unknown function] (defined at: ./index.rsh:1123:13:function exp)', 'at ./index.rsh:1030:16:application call to "k" (defined at: ./index.rsh:1125:21:function exp)', 'at ./index.rsh:1125:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1125:21:application call to [unknown function] (defined at: ./index.rsh:1125:21:function exp)'],
            msg: 'out',
            who: 'Trader_swapBForA'
            });
          }
        else {
          }
        
        const v82287 = v15703;
        const v82289 = v15707;
        const v82290 = v15703.closed;
        if (v82290) {
          return;
          }
        else {
          const v82292 = v15703.lptBals;
          const v82293 = v82292.A;
          const v82294 = v82292.B;
          const v82295 = v15703.poolBals;
          return;
          }}
      else {
        const v31671 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16737];
        const v31672 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15684];
        const v31673 = [v16737, v15684];
        const v31674 = [v15641, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v31673];
        const v31678 = stdlib.bytesFromHex("0x4a968f8f");
        const v31679 = undefined /* Remote */;
        const v31680 = await txn1.getOutput('internal', 'v31679', ctc24, v31679);
        const v31682 = v31680[stdlib.checkedBigNumberify('./index.rsh:752:15:application', stdlib.UInt_max, '0')];
        const v31687 = stdlib.add(v15707, v31682);
        const v31688 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v31682);
        stdlib.assert(v31688, {
          at: './index.rsh:752:15:application',
          fs: ['at ./index.rsh:1047:41:application call to [unknown function] (defined at: ./index.rsh:735:56:function exp)', 'at ./index.rsh:1125:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1125:21:application call to [unknown function] (defined at: ./index.rsh:1125:21:function exp)'],
          msg: 'remote bill check',
          who: 'Trader_swapBForA'
          });
        const v31689 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v16737, ctc1), null);
        const v31690 = stdlib.fromSome(v31689, stdlib.checkedBigNumberify('./index.rsh:1055:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v31691 = stdlib.safeAdd256(v31690, v31559);
        await stdlib.mapSet(map2, ctc8, v16737, ctc1, v31691);
        const v31692 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v16737, ctc1), null);
        const v31693 = stdlib.fromSome(v31692, stdlib.checkedBigNumberify('./index.rsh:1057:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        await stdlib.mapSet(map3, ctc8, v16737, ctc1, v31693);
        const v31695 = await txn1.getOutput('Trader_swapBForA', 'v31648', ctc10, v31648);
        if (v13177) {
          stdlib.protect(ctc0, await interact.out(v30491, v31695), {
            at: './index.rsh:1123:13:application',
            fs: ['at ./index.rsh:1123:13:application call to [unknown function] (defined at: ./index.rsh:1123:13:function exp)', 'at ./index.rsh:1060:16:application call to "k" (defined at: ./index.rsh:1125:21:function exp)', 'at ./index.rsh:1125:25:application call to "c" (defined at: ./index.rsh:1028:22:function exp)', 'at ./index.rsh:1125:21:application call to [unknown function] (defined at: ./index.rsh:1125:21:function exp)'],
            msg: 'out',
            who: 'Trader_swapBForA'
            });
          }
        else {
          }
        
        const v31705 = {
          A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          B: v31543
          };
        const v31708 = [v16737, v31705, v31648, v31649];
        null;
        const v31709 = v15703.closed;
        const v31716 = {
          closed: v31709,
          lptBals: v15828,
          poolBals: v31649,
          protoBals: v31650,
          protoInfo: v31548
          };
        const v82303 = v31716;
        const v82305 = v31687;
        const v82306 = v31716.closed;
        if (v82306) {
          return;
          }
        else {
          const v82308 = v31716.lptBals;
          const v82309 = v82308.A;
          const v82310 = v82308.B;
          const v82311 = v31716.poolBals;
          return;
          }}
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_approve4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_approve4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_approve4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc17,
    Provider_depositB0_9533: ctc17,
    Provider_withdraw0_9533: ctc18,
    Provider_withdrawA0_9533: ctc17,
    Provider_withdrawB0_9533: ctc17,
    Trader_exactSwapAForB0_9533: ctc19,
    Trader_exactSwapBForA0_9533: ctc19,
    Trader_swapAForB0_9533: ctc19,
    Trader_swapBForA0_9533: ctc19,
    arc200_approve0_9533: ctc14,
    arc200_transfer0_9533: ctc14,
    arc200_transferFrom0_9533: ctc20,
    createAllowanceBox0_9533: ctc21,
    createBalanceBoxes0_9533: ctc22
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v15892 = ctc.selfAddress();
  const v15894 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:661:51:application call to [unknown function] (defined at: ./index.rsh:661:51:function exp)', 'at ./index.rsh:506:31:application call to "runarc200_approve0_9533" (defined at: ./index.rsh:661:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'arc200_approve'
    });
  const v15895 = v15894[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15900 = stdlib.addressEq(v15892, v15651);
  const v15901 = v15900 ? false : true;
  stdlib.assert(v15901, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:594:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:662:20:application call to "chkApprove_" (defined at: ./index.rsh:593:56:function exp)', 'at ./index.rsh:661:51:application call to [unknown function] (defined at: ./index.rsh:661:51:function exp)', 'at ./index.rsh:506:31:application call to "runarc200_approve0_9533" (defined at: ./index.rsh:661:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'arc200_approve'
    });
  const v15903 = stdlib.addressEq(v15895, v15651);
  const v15904 = v15903 ? false : true;
  stdlib.assert(v15904, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:595:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:662:20:application call to "chkApprove_" (defined at: ./index.rsh:593:56:function exp)', 'at ./index.rsh:661:51:application call to [unknown function] (defined at: ./index.rsh:661:51:function exp)', 'at ./index.rsh:506:31:application call to "runarc200_approve0_9533" (defined at: ./index.rsh:661:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'arc200_approve'
    });
  const v15913 = ['arc200_approve0_9533', v15894];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v15913],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:661:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_approve"
            });
          ;
          const v33096 = v31866[stdlib.checkedBigNumberify('./index.rsh:661:12:spread', stdlib.UInt_max, '0')];
          const v33097 = v31866[stdlib.checkedBigNumberify('./index.rsh:661:12:spread', stdlib.UInt_max, '1')];
          const v33107 = [v16737, v33096];
          await stdlib.simMapSet(sim_r, 1, ctc21, v33107, ctc1, v33097);
          null;
          const v33109 = true;
          const v33110 = await txn1.getOutput('arc200_approve', 'v33109', ctc11, v33109);
          
          const v82639 = v15703;
          const v82641 = v15707;
          const v82642 = v15703.closed;
          if (v82642) {
            sim_r.isHalt = false;
            }
          else {
            const v82644 = v15703.lptBals;
            const v82645 = v82644.A;
            const v82646 = v82644.B;
            const v82647 = v15703.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v33096 = v31866[stdlib.checkedBigNumberify('./index.rsh:661:12:spread', stdlib.UInt_max, '0')];
      const v33097 = v31866[stdlib.checkedBigNumberify('./index.rsh:661:12:spread', stdlib.UInt_max, '1')];
      const v33099 = stdlib.addressEq(v16737, v15651);
      const v33100 = v33099 ? false : true;
      stdlib.assert(v33100, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:594:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:662:20:application call to "chkApprove_" (defined at: ./index.rsh:593:56:function exp)', 'at ./index.rsh:664:15:application call to [unknown function] (defined at: ./index.rsh:664:15:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'arc200_approve'
        });
      const v33102 = stdlib.addressEq(v33096, v15651);
      const v33103 = v33102 ? false : true;
      stdlib.assert(v33103, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:595:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:662:20:application call to "chkApprove_" (defined at: ./index.rsh:593:56:function exp)', 'at ./index.rsh:664:15:application call to [unknown function] (defined at: ./index.rsh:664:15:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'arc200_approve'
        });
      const v33107 = [v16737, v33096];
      await stdlib.mapSet(map1, ctc21, v33107, ctc1, v33097);
      null;
      const v33109 = true;
      const v33110 = await txn1.getOutput('arc200_approve', 'v33109', ctc11, v33109);
      if (v13177) {
        stdlib.protect(ctc0, await interact.out(v31866, v33110), {
          at: './index.rsh:661:13:application',
          fs: ['at ./index.rsh:661:13:application call to [unknown function] (defined at: ./index.rsh:661:13:function exp)', 'at ./index.rsh:666:14:application call to "k" (defined at: ./index.rsh:664:15:function exp)', 'at ./index.rsh:664:15:application call to [unknown function] (defined at: ./index.rsh:664:15:function exp)'],
          msg: 'out',
          who: 'arc200_approve'
          });
        }
      else {
        }
      
      const v82639 = v15703;
      const v82641 = v15707;
      const v82642 = v15703.closed;
      if (v82642) {
        return;
        }
      else {
        const v82644 = v15703.lptBals;
        const v82645 = v82644.A;
        const v82646 = v82644.B;
        const v82647 = v15703.poolBals;
        return;
        }
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_transfer4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_transfer4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_transfer4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc17,
    Provider_depositB0_9533: ctc17,
    Provider_withdraw0_9533: ctc18,
    Provider_withdrawA0_9533: ctc17,
    Provider_withdrawB0_9533: ctc17,
    Trader_exactSwapAForB0_9533: ctc19,
    Trader_exactSwapBForA0_9533: ctc19,
    Trader_swapAForB0_9533: ctc19,
    Trader_swapBForA0_9533: ctc19,
    arc200_approve0_9533: ctc14,
    arc200_transfer0_9533: ctc14,
    arc200_transferFrom0_9533: ctc20,
    createAllowanceBox0_9533: ctc21,
    createBalanceBoxes0_9533: ctc22
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v15835 = ctc.selfAddress();
  const v15837 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:626:47:application call to [unknown function] (defined at: ./index.rsh:626:47:function exp)', 'at ./index.rsh:506:31:application call to "runarc200_transfer0_9533" (defined at: ./index.rsh:626:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v15838 = v15837[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15839 = v15837[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v15843 = stdlib.addressEq(v15835, v15838);
  const v15844 = v15843 ? false : true;
  stdlib.assert(v15844, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:587:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:627:20:application call to "chkTransfer" (defined at: ./index.rsh:586:50:function exp)', 'at ./index.rsh:626:47:application call to [unknown function] (defined at: ./index.rsh:626:47:function exp)', 'at ./index.rsh:506:31:application call to "runarc200_transfer0_9533" (defined at: ./index.rsh:626:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'arc200_transfer'
    });
  const v15846 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v15835, ctc1), null);
  const v15847 = stdlib.fromSome(v15846, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v15848 = stdlib.ge256(v15847, v15839);
  stdlib.assert(v15848, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:588:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:627:20:application call to "chkTransfer" (defined at: ./index.rsh:586:50:function exp)', 'at ./index.rsh:626:47:application call to [unknown function] (defined at: ./index.rsh:626:47:function exp)', 'at ./index.rsh:506:31:application call to "runarc200_transfer0_9533" (defined at: ./index.rsh:626:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'arc200_transfer'
    });
  const v15857 = ['arc200_transfer0_9533', v15837];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v15857],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:626:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v34494 = v33241[stdlib.checkedBigNumberify('./index.rsh:626:12:spread', stdlib.UInt_max, '0')];
          const v34495 = v33241[stdlib.checkedBigNumberify('./index.rsh:626:12:spread', stdlib.UInt_max, '1')];
          const v34500 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v16737, ctc1), null);
          const v34501 = stdlib.fromSome(v34500, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v34506 = true;
          const v34507 = await txn1.getOutput('arc200_transfer', 'v34506', ctc11, v34506);
          
          const v34518 = stdlib.safeSub256(v34501, v34495);
          await stdlib.simMapSet(sim_r, 0, ctc8, v16737, ctc1, v34518);
          const v34519 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v34494, ctc1), null);
          const v34520 = stdlib.fromSome(v34519, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v34521 = stdlib.safeAdd256(v34520, v34495);
          await stdlib.simMapSet(sim_r, 0, ctc8, v34494, ctc1, v34521);
          null;
          const v82975 = v15703;
          const v82977 = v15707;
          const v82978 = v15703.closed;
          if (v82978) {
            sim_r.isHalt = false;
            }
          else {
            const v82980 = v15703.lptBals;
            const v82981 = v82980.A;
            const v82982 = v82980.B;
            const v82983 = v15703.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v34494 = v33241[stdlib.checkedBigNumberify('./index.rsh:626:12:spread', stdlib.UInt_max, '0')];
      const v34495 = v33241[stdlib.checkedBigNumberify('./index.rsh:626:12:spread', stdlib.UInt_max, '1')];
      const v34497 = stdlib.addressEq(v16737, v34494);
      const v34498 = v34497 ? false : true;
      stdlib.assert(v34498, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:587:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:627:20:application call to "chkTransfer" (defined at: ./index.rsh:586:50:function exp)', 'at ./index.rsh:629:15:application call to [unknown function] (defined at: ./index.rsh:629:15:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'arc200_transfer'
        });
      const v34500 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v16737, ctc1), null);
      const v34501 = stdlib.fromSome(v34500, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v34502 = stdlib.ge256(v34501, v34495);
      stdlib.assert(v34502, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:588:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:627:20:application call to "chkTransfer" (defined at: ./index.rsh:586:50:function exp)', 'at ./index.rsh:629:15:application call to [unknown function] (defined at: ./index.rsh:629:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'arc200_transfer'
        });
      const v34506 = true;
      const v34507 = await txn1.getOutput('arc200_transfer', 'v34506', ctc11, v34506);
      if (v13177) {
        stdlib.protect(ctc0, await interact.out(v33241, v34507), {
          at: './index.rsh:626:13:application',
          fs: ['at ./index.rsh:626:13:application call to [unknown function] (defined at: ./index.rsh:626:13:function exp)', 'at ./index.rsh:630:14:application call to "k" (defined at: ./index.rsh:629:15:function exp)', 'at ./index.rsh:629:15:application call to [unknown function] (defined at: ./index.rsh:629:15:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v34518 = stdlib.safeSub256(v34501, v34495);
      await stdlib.mapSet(map0, ctc8, v16737, ctc1, v34518);
      const v34519 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v34494, ctc1), null);
      const v34520 = stdlib.fromSome(v34519, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v34521 = stdlib.safeAdd256(v34520, v34495);
      await stdlib.mapSet(map0, ctc8, v34494, ctc1, v34521);
      null;
      const v82975 = v15703;
      const v82977 = v15707;
      const v82978 = v15703.closed;
      if (v82978) {
        return;
        }
      else {
        const v82980 = v15703.lptBals;
        const v82981 = v82980.A;
        const v82982 = v82980.B;
        const v82983 = v15703.poolBals;
        return;
        }
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_transferFrom4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_transferFrom4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_transferFrom4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc16 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc17 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc20 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc16,
    Provider_deposit0_9533: ctc17,
    Provider_depositA0_9533: ctc18,
    Provider_depositB0_9533: ctc18,
    Provider_withdraw0_9533: ctc19,
    Provider_withdrawA0_9533: ctc18,
    Provider_withdrawB0_9533: ctc18,
    Trader_exactSwapAForB0_9533: ctc20,
    Trader_exactSwapBForA0_9533: ctc20,
    Trader_swapAForB0_9533: ctc20,
    Trader_swapBForA0_9533: ctc20,
    arc200_approve0_9533: ctc21,
    arc200_transfer0_9533: ctc21,
    arc200_transferFrom0_9533: ctc14,
    createAllowanceBox0_9533: ctc15,
    createBalanceBoxes0_9533: ctc22
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v15859 = ctc.selfAddress();
  const v15861 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:644:58:application call to [unknown function] (defined at: ./index.rsh:644:58:function exp)', 'at ./index.rsh:506:31:application call to "runarc200_transferFrom0_9533" (defined at: ./index.rsh:644:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'arc200_transferFrom'
    });
  const v15862 = v15861[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15863 = v15861[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v15864 = v15861[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v15869 = stdlib.addressEq(v15862, v15863);
  const v15870 = v15869 ? false : true;
  stdlib.assert(v15870, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:602:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:645:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:644:58:application call to [unknown function] (defined at: ./index.rsh:644:58:function exp)', 'at ./index.rsh:506:31:application call to "runarc200_transferFrom0_9533" (defined at: ./index.rsh:644:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'arc200_transferFrom'
    });
  const v15872 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v15862, ctc1), null);
  const v15873 = stdlib.fromSome(v15872, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v15874 = stdlib.ge256(v15873, v15864);
  stdlib.assert(v15874, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:603:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:645:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:644:58:application call to [unknown function] (defined at: ./index.rsh:644:58:function exp)', 'at ./index.rsh:506:31:application call to "runarc200_transferFrom0_9533" (defined at: ./index.rsh:644:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'arc200_transferFrom'
    });
  const v15876 = [v15862, v15859];
  const v15877 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v15876, ctc1), null);
  const v15878 = stdlib.fromSome(v15877, stdlib.checkedBigNumberify('./index.rsh:521:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v15879 = stdlib.ge256(v15878, v15864);
  stdlib.assert(v15879, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:607:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:645:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:644:58:application call to [unknown function] (defined at: ./index.rsh:644:58:function exp)', 'at ./index.rsh:506:31:application call to "runarc200_transferFrom0_9533" (defined at: ./index.rsh:644:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'arc200_transferFrom'
    });
  const v15890 = ['arc200_transferFrom0_9533', v15861];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v15890],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:644:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transferFrom"
            });
          ;
          const v35900 = v34616[stdlib.checkedBigNumberify('./index.rsh:644:12:spread', stdlib.UInt_max, '0')];
          const v35901 = v34616[stdlib.checkedBigNumberify('./index.rsh:644:12:spread', stdlib.UInt_max, '1')];
          const v35902 = v34616[stdlib.checkedBigNumberify('./index.rsh:644:12:spread', stdlib.UInt_max, '2')];
          const v35907 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v35900, ctc1), null);
          const v35908 = stdlib.fromSome(v35907, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v35911 = [v35900, v16737];
          const v35912 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc15, v35911, ctc1), null);
          const v35913 = stdlib.fromSome(v35912, stdlib.checkedBigNumberify('./index.rsh:521:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v35923 = stdlib.safeSub256(v35908, v35902);
          await stdlib.simMapSet(sim_r, 0, ctc8, v35900, ctc1, v35923);
          const v35924 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v35901, ctc1), null);
          const v35925 = stdlib.fromSome(v35924, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v35926 = stdlib.safeAdd256(v35925, v35902);
          await stdlib.simMapSet(sim_r, 0, ctc8, v35901, ctc1, v35926);
          null;
          const v35931 = stdlib.safeSub256(v35913, v35902);
          await stdlib.simMapSet(sim_r, 1, ctc15, v35911, ctc1, v35931);
          null;
          const v35934 = true;
          const v35935 = await txn1.getOutput('arc200_transferFrom', 'v35934', ctc11, v35934);
          
          const v83311 = v15703;
          const v83313 = v15707;
          const v83314 = v15703.closed;
          if (v83314) {
            sim_r.isHalt = false;
            }
          else {
            const v83316 = v15703.lptBals;
            const v83317 = v83316.A;
            const v83318 = v83316.B;
            const v83319 = v15703.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v35900 = v34616[stdlib.checkedBigNumberify('./index.rsh:644:12:spread', stdlib.UInt_max, '0')];
      const v35901 = v34616[stdlib.checkedBigNumberify('./index.rsh:644:12:spread', stdlib.UInt_max, '1')];
      const v35902 = v34616[stdlib.checkedBigNumberify('./index.rsh:644:12:spread', stdlib.UInt_max, '2')];
      const v35904 = stdlib.addressEq(v35900, v35901);
      const v35905 = v35904 ? false : true;
      stdlib.assert(v35905, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:602:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:645:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:647:15:application call to [unknown function] (defined at: ./index.rsh:647:15:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'arc200_transferFrom'
        });
      const v35907 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v35900, ctc1), null);
      const v35908 = stdlib.fromSome(v35907, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v35909 = stdlib.ge256(v35908, v35902);
      stdlib.assert(v35909, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:603:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:645:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:647:15:application call to [unknown function] (defined at: ./index.rsh:647:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'arc200_transferFrom'
        });
      const v35911 = [v35900, v16737];
      const v35912 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v35911, ctc1), null);
      const v35913 = stdlib.fromSome(v35912, stdlib.checkedBigNumberify('./index.rsh:521:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v35914 = stdlib.ge256(v35913, v35902);
      stdlib.assert(v35914, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:607:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:645:24:application call to "chkTransferFrom" (defined at: ./index.rsh:601:64:function exp)', 'at ./index.rsh:647:15:application call to [unknown function] (defined at: ./index.rsh:647:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'arc200_transferFrom'
        });
      const v35923 = stdlib.safeSub256(v35908, v35902);
      await stdlib.mapSet(map0, ctc8, v35900, ctc1, v35923);
      const v35924 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v35901, ctc1), null);
      const v35925 = stdlib.fromSome(v35924, stdlib.checkedBigNumberify('./index.rsh:516:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v35926 = stdlib.safeAdd256(v35925, v35902);
      await stdlib.mapSet(map0, ctc8, v35901, ctc1, v35926);
      null;
      const v35931 = stdlib.safeSub256(v35913, v35902);
      await stdlib.mapSet(map1, ctc15, v35911, ctc1, v35931);
      null;
      const v35934 = true;
      const v35935 = await txn1.getOutput('arc200_transferFrom', 'v35934', ctc11, v35934);
      if (v13177) {
        stdlib.protect(ctc0, await interact.out(v34616, v35935), {
          at: './index.rsh:644:13:application',
          fs: ['at ./index.rsh:644:13:application call to [unknown function] (defined at: ./index.rsh:644:13:function exp)', 'at ./index.rsh:649:14:application call to "k" (defined at: ./index.rsh:647:15:function exp)', 'at ./index.rsh:647:15:application call to [unknown function] (defined at: ./index.rsh:647:15:function exp)'],
          msg: 'out',
          who: 'arc200_transferFrom'
          });
        }
      else {
        }
      
      const v83311 = v15703;
      const v83313 = v15707;
      const v83314 = v15703.closed;
      if (v83314) {
        return;
        }
      else {
        const v83316 = v15703.lptBals;
        const v83317 = v83316.A;
        const v83318 = v83316.B;
        const v83319 = v15703.poolBals;
        return;
        }
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _createAllowanceBox4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _createAllowanceBox4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _createAllowanceBox4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc17,
    Provider_depositB0_9533: ctc17,
    Provider_withdraw0_9533: ctc18,
    Provider_withdrawA0_9533: ctc17,
    Provider_withdrawB0_9533: ctc17,
    Trader_exactSwapAForB0_9533: ctc19,
    Trader_exactSwapBForA0_9533: ctc19,
    Trader_swapAForB0_9533: ctc19,
    Trader_swapBForA0_9533: ctc19,
    arc200_approve0_9533: ctc20,
    arc200_transfer0_9533: ctc20,
    arc200_transferFrom0_9533: ctc21,
    createAllowanceBox0_9533: ctc14,
    createBalanceBoxes0_9533: ctc22
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v15944 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:704:53:application call to [unknown function] (defined at: ./index.rsh:704:53:function exp)', 'at ./index.rsh:506:31:application call to "runcreateAllowanceBox0_9533" (defined at: ./index.rsh:704:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'createAllowanceBox'
    });
  const v15945 = v15944[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15946 = v15944[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v15949 = [v15945, v15946];
  const v15950 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v15949, ctc1), null);
  const v15951 = {
    None: 0,
    Some: 1
    }[v15950[0]];
  const v15952 = stdlib.eq(v15951, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v15953 = v15952 ? false : true;
  stdlib.assert(v15953, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:705:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:704:53:application call to [unknown function] (defined at: ./index.rsh:704:53:function exp)', 'at ./index.rsh:506:31:application call to "runcreateAllowanceBox0_9533" (defined at: ./index.rsh:704:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Allowance box already exists',
    who: 'createAllowanceBox'
    });
  const v15962 = ['createAllowanceBox0_9533', v15944];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v15962],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:704:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createAllowanceBox"
            });
          ;
          const v37320 = v35991[stdlib.checkedBigNumberify('./index.rsh:704:12:spread', stdlib.UInt_max, '0')];
          const v37321 = v35991[stdlib.checkedBigNumberify('./index.rsh:704:12:spread', stdlib.UInt_max, '1')];
          const v37322 = [v37320, v37321];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc14, v37322, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc14, v37322, ctc1, stdlib.checkedBigNumberify('./index.rsh:711:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v37331 = null;
          const v37332 = await txn1.getOutput('createAllowanceBox', 'v37331', ctc0, v37331);
          
          const v83647 = v15703;
          const v83649 = v15707;
          const v83650 = v15703.closed;
          if (v83650) {
            sim_r.isHalt = false;
            }
          else {
            const v83652 = v15703.lptBals;
            const v83653 = v83652.A;
            const v83654 = v83652.B;
            const v83655 = v15703.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v37320 = v35991[stdlib.checkedBigNumberify('./index.rsh:704:12:spread', stdlib.UInt_max, '0')];
      const v37321 = v35991[stdlib.checkedBigNumberify('./index.rsh:704:12:spread', stdlib.UInt_max, '1')];
      const v37322 = [v37320, v37321];
      const v37323 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v37322, ctc1), null);
      const v37324 = {
        None: 0,
        Some: 1
        }[v37323[0]];
      const v37325 = stdlib.eq(v37324, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v37326 = v37325 ? false : true;
      stdlib.assert(v37326, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:705:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:710:15:application call to [unknown function] (defined at: ./index.rsh:710:15:function exp)'],
        msg: 'ARC200: Allowance box already exists',
        who: 'createAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc14, v37322, ctc1, stdlib.checkedBigNumberify('./index.rsh:711:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v37331 = null;
      const v37332 = await txn1.getOutput('createAllowanceBox', 'v37331', ctc0, v37331);
      if (v13177) {
        stdlib.protect(ctc0, await interact.out(v35991, v37332), {
          at: './index.rsh:704:13:application',
          fs: ['at ./index.rsh:704:13:application call to [unknown function] (defined at: ./index.rsh:704:13:function exp)', 'at ./index.rsh:712:14:application call to "k" (defined at: ./index.rsh:710:15:function exp)', 'at ./index.rsh:710:15:application call to [unknown function] (defined at: ./index.rsh:710:15:function exp)'],
          msg: 'out',
          who: 'createAllowanceBox'
          });
        }
      else {
        }
      
      const v83647 = v15703;
      const v83649 = v15707;
      const v83650 = v15703.closed;
      if (v83650) {
        return;
        }
      else {
        const v83652 = v15703.lptBals;
        const v83653 = v83652.A;
        const v83654 = v83652.B;
        const v83655 = v15703.poolBals;
        return;
        }
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      return;
      break;
      }
    }
  
  
  };
export async function _createBalanceBoxes4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _createBalanceBoxes4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _createBalanceBoxes4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    lptBals: ctc10,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc8]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc11, ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_9533: ctc15,
    Provider_deposit0_9533: ctc16,
    Provider_depositA0_9533: ctc17,
    Provider_depositB0_9533: ctc17,
    Provider_withdraw0_9533: ctc18,
    Provider_withdrawA0_9533: ctc17,
    Provider_withdrawB0_9533: ctc17,
    Trader_exactSwapAForB0_9533: ctc19,
    Trader_exactSwapBForA0_9533: ctc19,
    Trader_swapAForB0_9533: ctc19,
    Trader_swapBForA0_9533: ctc19,
    arc200_approve0_9533: ctc20,
    arc200_transfer0_9533: ctc20,
    arc200_transferFrom0_9533: ctc21,
    createAllowanceBox0_9533: ctc22,
    createBalanceBoxes0_9533: ctc14
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v15917 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:677:43:application call to [unknown function] (defined at: ./index.rsh:677:43:function exp)', 'at ./index.rsh:506:31:application call to "runcreateBalanceBoxes0_9533" (defined at: ./index.rsh:677:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'in',
    who: 'createBalanceBoxes'
    });
  const v15918 = v15917[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v15920 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v15918, ctc1), null);
  const v15921 = {
    None: 0,
    Some: 1
    }[v15920[0]];
  const v15922 = stdlib.eq(v15921, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v15923 = v15922 ? false : true;
  stdlib.assert(v15923, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:678:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:677:43:application call to [unknown function] (defined at: ./index.rsh:677:43:function exp)', 'at ./index.rsh:506:31:application call to "runcreateBalanceBoxes0_9533" (defined at: ./index.rsh:677:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'ARC200: Balance box already exists',
    who: 'createBalanceBoxes'
    });
  const v15925 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v15918, ctc1), null);
  const v15926 = {
    None: 0,
    Some: 1
    }[v15925[0]];
  const v15927 = stdlib.eq(v15926, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v15928 = v15927 ? false : true;
  stdlib.assert(v15928, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:679:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:677:43:application call to [unknown function] (defined at: ./index.rsh:677:43:function exp)', 'at ./index.rsh:506:31:application call to "runcreateBalanceBoxes0_9533" (defined at: ./index.rsh:677:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'SWAP200: Reserve A box already exists',
    who: 'createBalanceBoxes'
    });
  const v15930 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v15918, ctc1), null);
  const v15931 = {
    None: 0,
    Some: 1
    }[v15930[0]];
  const v15932 = stdlib.eq(v15931, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v15933 = v15932 ? false : true;
  stdlib.assert(v15933, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:683:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:677:43:application call to [unknown function] (defined at: ./index.rsh:677:43:function exp)', 'at ./index.rsh:506:31:application call to "runcreateBalanceBoxes0_9533" (defined at: ./index.rsh:677:12:function exp)', 'at ./index.rsh:506:31:application call to [unknown function] (defined at: ./index.rsh:506:31:function exp)'],
    msg: 'SWAP200: Reserve B box already exists',
    who: 'createBalanceBoxes'
    });
  const v15940 = ['createBalanceBoxes0_9533', v15917];
  
  const txn1 = await (ctc.sendrecv({
    args: [v15639, v15641, v15647, v15648, v15651, v15660, v15684, v15699, v15703, v15707, v15828, v15829, v15830, v15833, v15940],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:677:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
      
      switch (v16738[0]) {
        case 'Protocol_harvest0_9533': {
          const v16741 = v16738[1];
          
          break;
          }
        case 'Provider_deposit0_9533': {
          const v18116 = v16738[1];
          
          break;
          }
        case 'Provider_depositA0_9533': {
          const v19491 = v16738[1];
          
          break;
          }
        case 'Provider_depositB0_9533': {
          const v20866 = v16738[1];
          
          break;
          }
        case 'Provider_withdraw0_9533': {
          const v22241 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawA0_9533': {
          const v23616 = v16738[1];
          
          break;
          }
        case 'Provider_withdrawB0_9533': {
          const v24991 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_9533': {
          const v26366 = v16738[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_9533': {
          const v27741 = v16738[1];
          
          break;
          }
        case 'Trader_swapAForB0_9533': {
          const v29116 = v16738[1];
          
          break;
          }
        case 'Trader_swapBForA0_9533': {
          const v30491 = v16738[1];
          
          break;
          }
        case 'arc200_approve0_9533': {
          const v31866 = v16738[1];
          
          break;
          }
        case 'arc200_transfer0_9533': {
          const v33241 = v16738[1];
          
          break;
          }
        case 'arc200_transferFrom0_9533': {
          const v34616 = v16738[1];
          
          break;
          }
        case 'createAllowanceBox0_9533': {
          const v35991 = v16738[1];
          
          break;
          }
        case 'createBalanceBoxes0_9533': {
          const v37366 = v16738[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createBalanceBoxes"
            });
          ;
          const v38716 = v37366[stdlib.checkedBigNumberify('./index.rsh:677:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v38716, ctc1), null);
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v38716, ctc1), null);
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v38716, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc8, v38716, ctc1, stdlib.checkedBigNumberify('./index.rsh:689:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          await stdlib.simMapSet(sim_r, 2, ctc8, v38716, ctc1, stdlib.checkedBigNumberify('./index.rsh:690:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          await stdlib.simMapSet(sim_r, 3, ctc8, v38716, ctc1, stdlib.checkedBigNumberify('./index.rsh:691:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v38733 = null;
          const v38734 = await txn1.getOutput('createBalanceBoxes', 'v38733', ctc0, v38733);
          
          const v83983 = v15703;
          const v83985 = v15707;
          const v83986 = v15703.closed;
          if (v83986) {
            sim_r.isHalt = false;
            }
          else {
            const v83988 = v15703.lptBals;
            const v83989 = v83988.A;
            const v83990 = v83988.B;
            const v83991 = v15703.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v16738], secs: v16740, time: v16739, didSend: v13177, from: v16737 } = txn1;
  switch (v16738[0]) {
    case 'Protocol_harvest0_9533': {
      const v16741 = v16738[1];
      return;
      break;
      }
    case 'Provider_deposit0_9533': {
      const v18116 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositA0_9533': {
      const v19491 = v16738[1];
      return;
      break;
      }
    case 'Provider_depositB0_9533': {
      const v20866 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdraw0_9533': {
      const v22241 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_9533': {
      const v23616 = v16738[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_9533': {
      const v24991 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_9533': {
      const v26366 = v16738[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_9533': {
      const v27741 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_9533': {
      const v29116 = v16738[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_9533': {
      const v30491 = v16738[1];
      return;
      break;
      }
    case 'arc200_approve0_9533': {
      const v31866 = v16738[1];
      return;
      break;
      }
    case 'arc200_transfer0_9533': {
      const v33241 = v16738[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_9533': {
      const v34616 = v16738[1];
      return;
      break;
      }
    case 'createAllowanceBox0_9533': {
      const v35991 = v16738[1];
      return;
      break;
      }
    case 'createBalanceBoxes0_9533': {
      const v37366 = v16738[1];
      undefined /* setApiDetails */;
      ;
      const v38716 = v37366[stdlib.checkedBigNumberify('./index.rsh:677:12:spread', stdlib.UInt_max, '0')];
      const v38717 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v38716, ctc1), null);
      const v38718 = {
        None: 0,
        Some: 1
        }[v38717[0]];
      const v38719 = stdlib.eq(v38718, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v38720 = v38719 ? false : true;
      stdlib.assert(v38720, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:678:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:688:15:application call to [unknown function] (defined at: ./index.rsh:688:15:function exp)'],
        msg: 'ARC200: Balance box already exists',
        who: 'createBalanceBoxes'
        });
      const v38722 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v38716, ctc1), null);
      const v38723 = {
        None: 0,
        Some: 1
        }[v38722[0]];
      const v38724 = stdlib.eq(v38723, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v38725 = v38724 ? false : true;
      stdlib.assert(v38725, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:679:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:688:15:application call to [unknown function] (defined at: ./index.rsh:688:15:function exp)'],
        msg: 'SWAP200: Reserve A box already exists',
        who: 'createBalanceBoxes'
        });
      const v38727 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v38716, ctc1), null);
      const v38728 = {
        None: 0,
        Some: 1
        }[v38727[0]];
      const v38729 = stdlib.eq(v38728, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v38730 = v38729 ? false : true;
      stdlib.assert(v38730, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:683:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:688:15:application call to [unknown function] (defined at: ./index.rsh:688:15:function exp)'],
        msg: 'SWAP200: Reserve B box already exists',
        who: 'createBalanceBoxes'
        });
      await stdlib.mapSet(map0, ctc8, v38716, ctc1, stdlib.checkedBigNumberify('./index.rsh:689:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      await stdlib.mapSet(map2, ctc8, v38716, ctc1, stdlib.checkedBigNumberify('./index.rsh:690:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      await stdlib.mapSet(map3, ctc8, v38716, ctc1, stdlib.checkedBigNumberify('./index.rsh:691:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v38733 = null;
      const v38734 = await txn1.getOutput('createBalanceBoxes', 'v38733', ctc0, v38733);
      if (v13177) {
        stdlib.protect(ctc0, await interact.out(v37366, v38734), {
          at: './index.rsh:677:13:application',
          fs: ['at ./index.rsh:677:13:application call to [unknown function] (defined at: ./index.rsh:677:13:function exp)', 'at ./index.rsh:692:14:application call to "k" (defined at: ./index.rsh:688:15:function exp)', 'at ./index.rsh:688:15:application call to [unknown function] (defined at: ./index.rsh:688:15:function exp)'],
          msg: 'out',
          who: 'createBalanceBoxes'
          });
        }
      else {
        }
      
      const v83983 = v15703;
      const v83985 = v15707;
      const v83986 = v15703.closed;
      if (v83986) {
        return;
        }
      else {
        const v83988 = v15703.lptBals;
        const v83989 = v83988.A;
        const v83990 = v83988.B;
        const v83991 = v15703.poolBals;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Protocol_delete(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Protocol_delete expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Protocol_delete expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 2) {return _Protocol_delete2(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Protocol_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Protocol_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Protocol_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Protocol_harvest4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_deposit4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_depositA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_depositA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_depositA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_depositA4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_depositB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_depositB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_depositB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_depositB4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_withdraw4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_withdrawA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_withdrawA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_withdrawA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_withdrawA4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_withdrawB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_withdrawB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_withdrawB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_withdrawB4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_exactSwapAForB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_exactSwapAForB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_exactSwapAForB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_exactSwapAForB4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_exactSwapBForA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_exactSwapBForA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_exactSwapBForA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_exactSwapBForA4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_swapAForB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_swapAForB4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_swapBForA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_swapBForA4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _arc200_approve4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _arc200_transfer4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _arc200_transferFrom4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function createAllowanceBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for createAllowanceBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for createAllowanceBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _createAllowanceBox4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function createBalanceBoxes(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for createBalanceBoxes expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for createBalanceBoxes expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _createBalanceBoxes4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Protocol_delete()void`, `Protocol_harvest(address,(uint256,uint256,uint256,address,byte))((uint256,uint256),uint64)`, `Provider_deposit((uint256,uint256),uint256)uint256`, `Provider_depositA(uint256)uint256`, `Provider_depositB(uint256)uint256`, `Provider_withdraw(uint256,(uint256,uint256))(uint256,uint256)`, `Provider_withdrawA(uint256)uint256`, `Provider_withdrawB(uint256)uint256`, `Trader_exactSwapAForB(byte,uint256,uint256)(uint256,uint256)`, `Trader_exactSwapBForA(byte,uint256,uint256)(uint256,uint256)`, `Trader_swapAForB(byte,uint256,uint256)(uint256,uint256)`, `Trader_swapBForA(byte,uint256,uint256)(uint256,uint256)`, `_reachp_0((uint64,((uint64,byte[32],byte[8]),(uint64,uint64,uint64),address)))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[161])))void`, `arc200_approve(address,uint256)byte`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `createAllowanceBox(address,address)void`, `createBalanceBoxes(address)void`],
    pure: [`Info()((uint256,uint256),(uint256,uint256),(uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64)`, `arc200_allowance(address,address)uint256`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `hasBox((byte,byte[64]))byte`, `reserve(address)(uint256,uint256)`],
    sigs: [`Info()((uint256,uint256),(uint256,uint256),(uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64)`, `Protocol_delete()void`, `Protocol_harvest(address,(uint256,uint256,uint256,address,byte))((uint256,uint256),uint64)`, `Provider_deposit((uint256,uint256),uint256)uint256`, `Provider_depositA(uint256)uint256`, `Provider_depositB(uint256)uint256`, `Provider_withdraw(uint256,(uint256,uint256))(uint256,uint256)`, `Provider_withdrawA(uint256)uint256`, `Provider_withdrawB(uint256)uint256`, `Trader_exactSwapAForB(byte,uint256,uint256)(uint256,uint256)`, `Trader_exactSwapBForA(byte,uint256,uint256)(uint256,uint256)`, `Trader_swapAForB(byte,uint256,uint256)(uint256,uint256)`, `Trader_swapBForA(byte,uint256,uint256)(uint256,uint256)`, `_reachp_0((uint64,((uint64,byte[32],byte[8]),(uint64,uint64,uint64),address)))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[161])))void`, `arc200_allowance(address,address)uint256`, `arc200_approve(address,uint256)byte`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `createAllowanceBox(address,address)void`, `createBalanceBoxes(address)void`, `hasBox((byte,byte[64]))byte`, `reserve(address)(uint256,uint256)`]
    },
  GlobalNumByteSlice: 7,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CSASANTeAQgEAQYCgQFAYMTbAUFhIBAFf8ICJhcAAQABAgEDIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcQBWFwcElECAAAAAAAAAABBEqWj48EeYPDXCD//////////////////////////////////////////wSy+n1wAQEBBAEFBNpwJbkEGWn4ZQEIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCAAAAAAAAGlkCAAAAAAAAG98CAAAAAAAAHWOCAAAAAAAAHugMRhBFkIoZEkiWzUBSSRbNQIhDls1BSlkJwxkUCpkUCtkUCcNZFAnDmRQgh0EDfjlMAS1QiElBCaxhiEEKuIbLARTWcTFBGISCDQEhOwT1QRkOUWYBGV9E+wEbpSF9wRuzHIkBHPltxcEgVVLUQSBlUzUBILlc8QEnLvtuwSqEZqGBLaO/zAEtq4aJQS7sxnzBMDz+DwExTYwkgTOoOdVBM/SG9gESpaPjwTg2Vu1BOyZYEEE2nAluQTz0GEQNhoAjh0VQBV8AiwVvBXRFckVkQFeFZQAARU1AEQBqRy1FYkCAAHUASsVlxVvAUABdBUIARYVnQCvFZoVrwGLADQBJQxBFy40ASEGEkSIHWw0FFcBQDQUV0FAUDQUV8GBUDQUV4FAUDQbFlA0HBZQNQQxGSISRIAEFR98dTQEULAhBEMkrzULIQY0ARJEiB0sNAsiWzUMgATFH8NXNAwWULA0DIgdRyg1C4AIAAAAAAAAl5A0C1CwNAs1BDEZIQ8SRLEisgEhBbIQNAWyGCEPshmzgaCNBjQHCDUHiB0ZIjIKMgmIHSc0A0D/lUL/iDYaATYaAjULNQwkryk0DDQLUFBQNQslNAESRIgcTzQLIls1DDQLVwiiNQ2ABK0LvkQ0DBZQNA1QsDQMiBzBNA0iVY0QFk8WWRZjFmYWaRZzFnYWeRaDFo0WlxahFqsWtRa/FslC/uo2GgE1CySvKjQLUCEHr1BQNQtC/5o2GgE1CySvKzQLUCEHr1BQNQtC/4U2GgE2GgI1CzUMJK8nDDQMNAtQUCELr1BQNQtC/2c2GgE1CySvJw40C1AhB69QUDULQv9RNhoBNQskr4ABBjQLUCEHr1BQNQtC/zo2GgE2GgI1CzUMJK8nDTQMNAtQUCELr1BQNQtC/xw2GgEXNhoCNhoDNQs1DDUNJK8nETQNFlEHCDQMUDQLUFAhCa9QUDULQv7xNhoBFzYaAjYaAzULNQw1DSSvgAEHNA0WUQcINAxQNAtQUCEJr1BQNQtC/sU2GgEXNhoCNhoDNQs1DDUNJK+AAQk0DRZRBwg0DFA0C1BQIQmvUFA1C0L+mTYaARc2GgI2GgM1CzUMNQ0kr4ABCjQNFlEHCDQMUDQLUFAhCa9QUDULQv5tNAtXACA1DTQLVyCBNQwxADQUV8GBV2AgEkQ0DFcAIDUhNAxXICA1IDQMV0AgNR80IScEpDQgJwSkEEEVSjQfNCA0IaCIGlGoNQs0CzQfJwSkEDQfMgOlEEQyCmAyCngJNBIJSTUeNA2IGwE0FFeBQEk1D1cAIDULNA9XICA1HTQLNB1QNB4WUDUPgAgAAAAAAABBnDQPULA0DzUEJw81ECcGNBwWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBbIQNByyGDQQsho0DUmyHLIaNAuyGjQcsjKzMgpgNAkJNAoXCRa3AD5XBABQNQ+ACAAAAAAAAEG+NA9QsDQPSTULIls1DyI0DxJEJwY0GxZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0G7IYNBCyGjQNSbIcsho0HbIaNBuyMrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAQdE0C1CwNAtJNQ0iWzULIjQLEkQ0ITQgUDQfUDQMV2AgUDQMV4ABUDUNgAQFYitfNA1QsDQUVwABNBFQNA5QNBVQNAxQMgY0HjQSCDQeCTQPCDQLCDUSNRM1FDQUVwABF0EX8DQcFjQbFlA0GlA0GRZQNBRQgcgCr1AhBjIGNQI1ASlLAVcAf2cnDEsBV39/ZypLAVf+f2crSwGB/QIhEFhnJw1LAYH8AyEQWGcnDkyB+wSBV1hnKDQBFjQCFlA0BRZQZzEZIhJEiBk4QvwkiBkVNAtXAEA1DDQUV8GBSTUhV4ABFxREMgMoMgMqMQBQiBhTiBhbNSAyAygyAysxAFCIGEKIGEo1HzQMVwAgNR40IDQep0Q0DFcgIDUdNB80HadENA8yA6hBEwY0HjQdo4gYCZaIGAU1ETQLV0AgNBGmRDQWMQATRDIDKDIDKTQWUIgX8ogX+kk1CzQRp0QjKjEAUDQgNB6hiBfRiBfsIysxAFA0HzQdoYgXwYgX3CMpNBZQNAs0EaGIF7GIF8wjKTEAUDIDKDIDKTEAUIgXp4gXrzQRoIgXlIgXrycJNBZQMQBQNBFQsIAIAAAAAAAAR1w0EVCwNBE1BDQUVwABNBA0EaGIF2Y0DzQRoIgXXlBQNA5XACA0HqCIF1E0DlcgIDQdoIgXRlBQNBRXgUBQNCFQMgY1EzUUQv5RNA1XASA1CzQUV8GBV4ABFxREJwY0HBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0HLIYJwiyGjEASbIcsho0FkmyHLIaNAuyGjQcsjKzMgpgNAkJNAoXCRa3AD5XBABQNQ2ACAAAAAAAAE0vNA1QsDQNSTUMIls1DSI0DRJEMgMoMgMqMQBQiBaviBa3NAugiBacNQwjKjEAUDQMiBaugAgAAAAAAABNOzQMULA0DDUEMgY0EjQNCDUSNRNC/Y80DVcBIDULNBRXwYFXgAEXFEQnBjQbFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQWyEDQbshgnCLIaMQBJshyyGjQWSbIcsho0C7IaNBuyMrMyCmA0CQk0ChcJFrcAPlcEAFA1DYAIAAAAAAAAUrM0DVCwNA1JNQwiWzUNIjQNEkQyAygyAysxAFCIFe2IFfU0C6CIFdo1DCMrMQBQNAyIFeyACAAAAAAAAFK/NAxQsDQMNQQyBjQSNA0INRI1E0L8zYgWVjQLVwAgNQ00C1cgQDUMNA5XACA1ETQOVyAgNQs0DTQRo4gVhzQPoogVgTUdNA00C6OIFXc0D6KIFXE1DjQMVwAgNB2mRDQMVyAgNA6mRDEANBYTRDIDKDIDKTEAUIgVVYgVXUk1DDQNp0QxADQWUDUfMgMoMgMnBzQfUAGIFTaIFT5JNR40DadEIykxAFA0DDQNoYgVFYgVMCMpNBZQMgMoMgMpNBZQiBULiBUTNA2giBT4iBUTJwkxAFA0FlA0DVCwNB40DaGIFOE1DCEKJwc0H1ABNAyIFPAnEDEAUDQWUDQMULAjKjEAUDIDKDIDKjEAUIgUv4gUxzQdoIgUrIgUxyMrMQBQMgMoMgMrMQBQiBSiiBSqNA6giBSPiBSqNB00DlA1HoAIAAAAAAAAWGU0HlCwNB41BDEANB5QNQyABEV2xrQ0DFCwNBRXAAE0EDQNoIgUVTQPNA2hiBRNUFA0ETQdoYgUQzQLNA6hiBQ7UFA0FFeBQFA0FFfBgVAyBjUTNRRC+0M0DVcBIDULMgMoMgMqMQBQiBQbiBQjSTUNNAunRDQNNAuhiBP/NQwjKjEAUDQMiBQRgAgAAAAAAABd/TQMULA0DDUEJwY0HBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0HLIYJw+yGjEASbIcsho0C7IaNByyMrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAAXgs0DFCwNAxJNQsiWzUMIjQMEkQyBjQSNAwINRI1E0L6ijQNVwEgNQsyAygyAysxAFCIE2KIE2pJNQ00C6dENA00C6GIE0Y1DCMrMQBQNAyIE1iACAAAAAAAAGN8NAxQsDQMNQQnBjQbFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQWyEDQbshgnD7IaMQBJshyyGjQLsho0G7IyszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAABjijQMULA0DEk1CyJbNQwiNAwSRDIGNBI0DAg1EjUTQvnRiBNaiBNXNAtXASA1HTQLVyEgNRA0FFfBgTUPNA5XACA1DTQOVyAgNQw0D1cAIDUjNA9XQCA1HzQMNBChiBJzNQ40ECcFNB+giBJno4gSYzQNo4gSXTQOJwWjiBJVoogSUScSoIgSSzUeNB00HqdENB00HqGIEjs1IjQNNB6giBIxNSE0HjQMo4gSJzQhoogSITQQoYgSGzQjJwSjiBITNB+iiBINo4gSCScEoogSAzUgNB40I6OIEfknBaKIEfM1HzIDNCBQNB8yA1A0HzQMo4gR3zQhoogR2TQgpU1JNR5XACA1ITQeVyAgNSA0D1eAARcURDQNNB2giBG2NCKhiBGwNCGhiBGqNR80DjQgoYgRoDUeNBRXgUA1DjIDNCKmMgM0EKYQRDQfNB6jiBGDNA00DKOIEXunRDQiNBBQNQ00HzQeUDUMNAtXAAEXQQyKJxM0DVCwNA01BDIGNRNC+HCIEfmIEfY0C1cBIDUdNAtXISA1EDQUV8GBNQ80DlcgIDUNNA5XACA1DDQPVwAgNSM0D1dAIDUfNAw0EKGIERI1DjQQJwU0H6CIEQajiBECNA2jiBD8NA4nBaOIEPSiiBDwJxKgiBDqNR40HTQep0Q0HTQeoYgQ2jUiNA00HqCIENA1ITQeNAyjiBDGNCGiiBDANBChiBC6NCMnBKOIELI0H6KIEKyjiBCoJwSiiBCiNSA0HjQjo4gQmCcFoogQkjUfMgM0IFA0HzIDUDQfNAyjiBB+NCGiiBB4NCClTUk1HlcAIDUhNB5XICA1IDQPV4ABFxRENA40IKGIEFU1HzQNNB2giBBLNCKhiBBFNCGhiBA/NR40FFeBQDUOMgM0EKYyAzQiphBENB80HqOIECI0DDQNo4gQGqdENBA0IlA1DTQfNB5QNQw0C1cAARdBDCgnFDQNULA0DTUEMgY1E0L3D4gQmDQLVwEgNRA0FFfBgTUPNA5XACA1DTQOVyAgNQw0D1cAIDUdNA9XQCA1HjQQJwU0HqGID7mjiA+1STUONAyjiA+sNA0nBaOID6Q0DqCID56iiA+aNSE0DTQQoIgPkDUONBA0DKOID4Y0DqKID4A0IaGID3o0HScEo4gPcjQeoogPbKOID2gnBKKID2I1HzQQNB2jiA9YJwWiiA9SNR4yAzQfUDQeMgNQNB40DKOIDz40DqKIDzg0H6VNSTUdVwAgNSA0HVcgIDUfNA9XgAEXFEQ0DjQgoYgPFTUeNAw0IaGIDws0H6GIDwU1HTQUV4FANQ40C1chIDQhpkQ0HjQdo4gO6zQNNAyjiA7jp0QyAzQhUDUNNB40HVA1DDQLVwABF0EL8CcVNA1QsDQNNQQyBjUTQvXYiA9hNAtXASA1EDQUV8GBNQ80DlcgIDUNNA5XACA1DDQPVwAgNR00D1dAIDUeNBAnBTQeoYgOgqOIDn5JNQ40DKOIDnU0DScFo4gObTQOoIgOZ6KIDmM1ITQNNBCgiA5ZNQ40EDQMo4gOTzQOoogOSTQhoYgOQzQdJwSjiA47NB6iiA41o4gOMScEoogOKzUfNBA0HaOIDiEnBaKIDhs1HjIDNB9QNB4yA1A0HjQMo4gOBzQOoogOATQfpU1JNR1XACA1IDQdVyAgNR80D1eAARcURDQMNCGhiA3eNB+hiA3YNR40DjQgoYgNzjUdNBRXgUA1DjQLVyEgNCGmRDQeNB2jiA20NAw0DaOIDaynRDQhMgNQNQ00HjQdUDUMNAtXAAEXQQuyJxY0DVCwNA01BDIGNRNC9KE0C1cAIDUNNAtXICA1DDEANBgTRDQNNBgTRCEKJwcxADQNUFABNAyIDXYnEDEAUDQNUDQMULAhBDULgAgAAAAAAACBVTQLFlEHCFCwNAuBB5AWUQcINQQyBjUTQvRDNAtXACA1DTQLVyAgNQwxADQNE0QyAygyAykxAFCIDQ6IDRZJNQ40DKdEIQQ1C4AIAAAAAAAAhso0CxZRBwhQsDQLgQeQFlEHCDUEIykxAFA0DjQMoYgMzIgM5yMpNA1QMgMoMgMpNA1QiAzCiAzKNAygiAyviAzKJwkxAFA0DVA0DFCwMgY1E0LzuDQLVwAgNQ40C1cgIDUNNAtXQCA1DDQONA0TRDIDKDIDKTQOUIgMfIgMhEk1EDQMp0Q0DjEAUDUPMgMoMgMnBzQPUAGIDF2IDGVJNQs0DKdEIyk0DlA0EDQMoYgMPIgMVyMpNA1QMgMoMgMpNA1QiAwyiAw6NAygiAwfiAw6Jwk0DlA0DVA0DFCwNAs0DKGIDAg1DSEKJwc0D1ABNA2IDBcnEDQOUDEAUDQNULAhBDULgAgAAAAAAACMXjQLFlEHCFCwNAuBB5AWUQcINQQyBjUTQvLkNAtXACA0C1cgIFA1DCgyAycHNAxQAYgLtiJVIQQTRCEKJwc0DFABMgOIC7coNQuACAAAAAAAAJHTNAtQsDQLNQQyBjUTQvKcNA1XASA1CygyAyk0C1CIC3YiVSEEE0QoMgMqNAtQiAtmIlUhBBNEKDIDKzQLUIgLViJVIQQTRCMpNAtQMgOIC1ojKjQLUDIDiAtQIys0C1AyA4gLRig1C4AIAAAAAAAAl000C1CwNAs1BDIGNRNC8is0ASUMQQprNAEhBhJEiAuJMgMoMgMnBzQMNAtQUAGICvWICv01BELuJSSvgAELNAw0C1BQIQyvUFA1C0LuozQBJQxBCmA0ASEGEkSIC0syAygyAyk0C1CICryICsQ1BELt7DQBJQxBClg0ASEGEkSICyc0GRZXBwA1BELt0TQBJQxBA3E0ASEGEkSICww0GlcIIEk1CzUEQu20NAElDEEDaTQBIQYSRIgK7zQaVygISTULNQRC7Zc0ASUMQQNhNAEhBhJEiArSJwo1BELtgCSvgAEMNAw0C1BQIQyvUFA1C0Lt/iSvgAENNA00DFA0C1BQIQuvUFA1C0Lt5iSvgAEONAw0C1BQIQyvUFA1C0Lt0SSvgAEPNAtQIQevUFA1C0LtvzQBJQxBAwU0ASEGEkSICmc0C0k1DCJVjQQDEgMrA0IDWULs1jQBJQxBA880ASEGEkSICkM0CzUMMgMoMgMqNAxQiAmwiAm4MgMoMgMrNAxQiAmhiAmpUDUEQuzQNAsiWzUNNAtXCGg1DIAEIGJSNjQNFlA0DFCwNA2ICiw0DFcwGEk1CyRbNRw0CyEOWzUbNBwWATQbFgETRDQMVwAwSTUaIltJNRmBgAIORDQMV0ggNRgoNRcnBjQLVwAIUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBbIQNAsiW7IYgATzxUotshoxGBayGjQcFrIaNBsWshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAD0tNAxQsDQMSTULIls1DzQLVwiBSTUOVwAgNQ00DlcgIDUMNA5XQCA1CzQNJwSkNAwnBKQQQQLhNAs0DDQNoIgIl6g1EDQQNAsnBKQQNAsyA6UQRCI0DxJEMgo1FiMpNBZQJwqICJAjKTQYUDIDiAiGJwo1ECcJNBhQNBZQNBBQsCEIrzUVgEEA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQVUDQVUDQNNAxQNAtQNA5XYCBQNA5XgAFQUDIGNA81EjUTNRRC7weICJ6BwJoMiAi2sSKyASEFshCABggxADIJErIeJxGyH7O0PTUFNhoBNQtC/i2ICHE2GgE1C0LrCIgIZjYaATULQut6IjE0EkSBBzE1EkQiMTYSRCIxNxJEIjUFiAhDgdIFryIiQu7DNhoBNhoCNQs1DEL8aDYaATYaAjULNQxC/IQ2GgE1C0L8kUL8skL8ykL85EL8/jYaATYaAjYaAzULNQw1DUL9GDYaATYaAjULNQxC/PY2GgE2GgI1CzUMQv0WNhoBNQtC/SM2GgE1C0L9LTQBJRJEiAc7NBpXCCBJNQs1BELqRDQBJRJEiAcmNBpXKAhJNQs1BELqLzQBJRJEiAcRJwo1BELqIDQBJRJEiAcCNAtJNQwiVY0EAHcAkACnAL5C6dI0CxZRBwg1BELp+SgyAycHNAxXAUBQAYgGsiJVIQQSNQtC/9woMgMpNAxXASBQiAabIlUhBBI1C0L/xSgyAyo0DFcBIFCIBoQiVSEEEjULQv+uKDIDKzQMVwEgUIgGbSJVIQQSNQtC/5c0CxZRBwg1BELpkCgyAycHNAxXAUBQAYgGSSJVIQQSNQtC/9woMgMpNAxXASBQiAYyIlUhBBI1C0L/xSgyAyo0DFcBIFCIBhsiVSEEEjULQv+uKDIDKzQMVwEgUIgGBCJVIQQSNQtC/5c0ASUSRIgGFDQLNQwyAygyAyo0DFCIBeKIBeoyAygyAys0DFCIBdOIBdtQNQRC6QIiNRBC/SY0ASUSRIgF3jQUVwFANBRXQUBQNBRXwYFQNBRXgUBQNBsWUDQcFlA1BELo0DQNVwGhNQtC6uw0DVcBYDULQu0NQu5FQu8ENA1XAWA1C0LvvELxQ0Lx+TQNVwFBNQtC8qg0DVcBQTULQvP/NA1XAUE1C0L1VjQNVwFBNQtC9oM0DVcBQDULQvewNA1XAUA1C0L4BDQNVwFgNQtC+IU0DVcBQDULQvlPQvmUIjULQuq9NB40D6OIBQM0DlcAIKKIBPo1DTQdNA+jiATwNA5XICCiiATnSTUMNA1JNAykTTURQuzVJwY0HBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0HLIYJwiyGjEASbIcsho0FkmyHLIaNB2yGjQcsjKzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAGmDNAtQsDQLSTUeIls1CyI0CxJEIysxAFAyAygyAysxAFCIBGKIBGo0EKCIBE+IBGojKjEAUDIDKDIDKjEAUIgERYgETTQioIgEMogETScTNA1QsDQNNQQxADQdMgNQUDQNUDQMUDUQJws0EFCwNBRXAAE0EVA0DFA0DlcAIDQhoIgD+TQOVyAgNCCgiAPuUFA0D1AyBjQSNAsINRI1EzUUQur4JwY0GxZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0G7IYJwiyGjEASbIcsho0FkmyHLIaNB2yGjQbsjKzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAG+bNAtQsDQLSTUeIls1CyI0CxJEIyoxAFAyAygyAyoxAFCIA2OIA2s0EKCIA1CIA2sjKzEAUDIDKDIDKzEAUIgDRogDTjQioIgDM4gDTicUNA1QsDQNNQQxADIDNB1QUDQNUDQMUDUQJws0EFCwNBRXAAE0EVA0DFA0DlcAIDQgoIgC+jQOVyAgNCGgiALvUFA0D1AyBjQSNAsINRI1EzUUQun5JwY0HBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0HLIYJwiyGjEASbIcsho0FkmyHLIaNBCyGjQcsjKzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAHWtNAtQsDQLSTUdIls1CyI0CxJEIysxAFAyAygyAysxAFCIAmSIAmw0IaCIAlGIAmwjKjEAUDIDKDIDKjEAUIgCR4gCT4gCVScVNA1QsDQNNQQxADQQMgNQUDQNUDQMUDUdJws0HVCwNBRXAAE0EVA0DFA0DlcAIDQgoIgCATQOVyAgNB+giAH2UFA0D1AyBjQSNAsINRI1EzUUQukAJwY0GxZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0G7IYJwiyGjEASbIcsho0FkmyHLIaNBCyGjQbsjKzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAHu/NAtQsDQLSTUdIls1CyI0CxJEIyoxAFAyAygyAyoxAFCIAWuIAXM0IaCIAViIAXMjKzEAUDIDKDIDKzEAUIgBTogBVogBXCcWNA1QsDQNNQQxADIDNBBQUDQNUDQMUDUdJws0HVCwNBRXAAE0EVA0DFA0DlcAIDQfoIgBCDQOVyAgNCCgiAD9UFA0D1AyBjQSNAsINRI1EzUUQugHNBRXAUBJNRFXACA1EDQRVyAgNQ80FFdBQDUONBwWNBsWUDQaUDQZFlA0GFA0F1A0FlA0FVA0FFA0EhZQNBFQNBBQNA9QNA5QJTIGQufcNAElEkSIAL4yAygyAycHNAw0C1BQAYgAi4gAkzUEQuO7SEy/SIkisgEhBLIQsgeyCLOJNAElEkSIAIsyAygyAyk0C1CIAF2IAGU1BELjjTQBJRJEiABvNBkWNQRC4302GgE1C0L2bUiJTAlJNQYyCYgA+4kJSUH/7kk1BjEWNAAhBAhJNQAJRwI4BzIKEkQ4ECEEEkQ4CA5EiUkVIQ1MCa9MUIm+SRZRBwhFBE1QiUlXAQBMIlVNiUxJvUD/Y0sDiACvQv9bSSJbNRxJJFs1G0lXEDA1GkkhCFs1GUlXSCA1GElIKDUXSVdoIDUWSVeIQDUVSYHIASERWDUUSYGKBFs1EkmBkgQhCFg1EUmB0gQhDVg1EEmB8gQhDVg1D4GSBSEIWDUOiUkiWzUcSSRbNRtJVxAwNRpJIQhbNRmBSCERWDUUibEisgEhBbIQNAWyGLOJIQQ1A4lJIhJMNAISEUSJNAY0B0oPQf7+Qv8GsUL+tDQGCDUGibGyCUL+qA==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `2`,
    1000: `360`,
    1001: `361`,
    1002: `362`,
    1003: `362`,
    1004: `363`,
    1005: `364`,
    1006: `365`,
    1007: `365`,
    1008: `366`,
    1009: `367`,
    101: `2`,
    1010: `368`,
    1011: `369`,
    1012: `369`,
    1013: `370`,
    1014: `370`,
    1015: `370`,
    1016: `373`,
    1017: `373`,
    1018: `373`,
    1019: `374`,
    102: `2`,
    1020: `375`,
    1021: `375`,
    1022: `375`,
    1023: `376`,
    1024: `376`,
    1025: `376`,
    1026: `377`,
    1027: `377`,
    1028: `378`,
    1029: `378`,
    103: `2`,
    1030: `379`,
    1031: `379`,
    1032: `382`,
    1033: `383`,
    1034: `384`,
    1035: `384`,
    1036: `384`,
    1037: `385`,
    1038: `385`,
    1039: `386`,
    104: `2`,
    1040: `387`,
    1041: `387`,
    1042: `387`,
    1043: `388`,
    1044: `388`,
    1045: `389`,
    1046: `390`,
    1047: `390`,
    1048: `391`,
    1049: `392`,
    105: `2`,
    1050: `393`,
    1051: `393`,
    1052: `394`,
    1053: `395`,
    1054: `396`,
    1055: `397`,
    1056: `397`,
    1057: `398`,
    1058: `398`,
    1059: `398`,
    106: `2`,
    1060: `401`,
    1061: `401`,
    1062: `401`,
    1063: `402`,
    1064: `403`,
    1065: `403`,
    1066: `403`,
    1067: `404`,
    1068: `404`,
    1069: `404`,
    107: `2`,
    1070: `405`,
    1071: `405`,
    1072: `406`,
    1073: `406`,
    1074: `407`,
    1075: `407`,
    1076: `410`,
    1077: `411`,
    1078: `412`,
    1079: `412`,
    108: `2`,
    1080: `412`,
    1081: `413`,
    1082: `413`,
    1083: `414`,
    1084: `415`,
    1085: `415`,
    1086: `415`,
    1087: `416`,
    1088: `416`,
    1089: `417`,
    109: `2`,
    1090: `418`,
    1091: `418`,
    1092: `419`,
    1093: `420`,
    1094: `421`,
    1095: `421`,
    1096: `422`,
    1097: `423`,
    1098: `424`,
    1099: `425`,
    11: `2`,
    110: `2`,
    1100: `425`,
    1101: `426`,
    1102: `426`,
    1103: `426`,
    1104: `429`,
    1105: `429`,
    1106: `430`,
    1107: `430`,
    1108: `430`,
    1109: `431`,
    111: `2`,
    1110: `431`,
    1111: `432`,
    1112: `432`,
    1113: `433`,
    1114: `433`,
    1115: `433`,
    1116: `434`,
    1117: `434`,
    1118: `435`,
    1119: `435`,
    112: `2`,
    1120: `436`,
    1121: `436`,
    1122: `437`,
    1123: `437`,
    1124: `437`,
    1125: `438`,
    1126: `438`,
    1127: `438`,
    1128: `439`,
    1129: `440`,
    113: `2`,
    1130: `446`,
    1131: `446`,
    1132: `447`,
    1133: `447`,
    1134: `447`,
    1135: `448`,
    1136: `448`,
    1137: `449`,
    1138: `449`,
    1139: `450`,
    114: `2`,
    1140: `450`,
    1141: `450`,
    1142: `451`,
    1143: `451`,
    1144: `452`,
    1145: `452`,
    1146: `453`,
    1147: `453`,
    1148: `453`,
    1149: `454`,
    115: `2`,
    1150: `454`,
    1151: `455`,
    1152: `455`,
    1153: `456`,
    1154: `456`,
    1155: `457`,
    1156: `458`,
    1157: `458`,
    1158: `459`,
    1159: `459`,
    116: `2`,
    1160: `460`,
    1161: `461`,
    1162: `462`,
    1163: `462`,
    1164: `462`,
    1165: `463`,
    1166: `463`,
    1167: `464`,
    1168: `464`,
    1169: `465`,
    117: `2`,
    1170: `465`,
    1171: `466`,
    1172: `467`,
    1173: `467`,
    1174: `467`,
    1175: `468`,
    1176: `469`,
    1177: `469`,
    1178: `471`,
    1179: `471`,
    118: `2`,
    1180: `472`,
    1181: `472`,
    1182: `473`,
    1183: `473`,
    1184: `474`,
    1185: `475`,
    1186: `476`,
    1187: `476`,
    1188: `477`,
    1189: `477`,
    119: `2`,
    1190: `478`,
    1191: `479`,
    1192: `480`,
    1193: `486`,
    1194: `486`,
    1195: `487`,
    1196: `488`,
    1197: `488`,
    1198: `489`,
    1199: `490`,
    12: `2`,
    120: `2`,
    1200: `491`,
    1201: `491`,
    1202: `492`,
    1203: `494`,
    1204: `495`,
    1205: `495`,
    1206: `497`,
    1207: `497`,
    1208: `498`,
    1209: `498`,
    121: `2`,
    1210: `498`,
    1211: `499`,
    1212: `499`,
    1213: `500`,
    1214: `500`,
    1215: `500`,
    1216: `501`,
    1217: `502`,
    1218: `502`,
    1219: `503`,
    122: `2`,
    1220: `503`,
    1221: `503`,
    1222: `504`,
    1223: `504`,
    1224: `505`,
    1225: `505`,
    1226: `506`,
    1227: `506`,
    1228: `506`,
    1229: `507`,
    123: `2`,
    1230: `507`,
    1231: `508`,
    1232: `508`,
    1233: `509`,
    1234: `509`,
    1235: `510`,
    1236: `511`,
    1237: `511`,
    1238: `512`,
    1239: `513`,
    124: `2`,
    1240: `514`,
    1241: `514`,
    1242: `515`,
    1243: `515`,
    1244: `515`,
    1245: `515`,
    1246: `515`,
    1247: `515`,
    1248: `515`,
    1249: `515`,
    125: `2`,
    1250: `515`,
    1251: `515`,
    1252: `516`,
    1253: `516`,
    1254: `517`,
    1255: `518`,
    1256: `519`,
    1257: `519`,
    1258: `520`,
    1259: `520`,
    126: `2`,
    1260: `521`,
    1261: `521`,
    1262: `522`,
    1263: `522`,
    1264: `523`,
    1265: `523`,
    1266: `524`,
    1267: `524`,
    1268: `525`,
    1269: `526`,
    127: `2`,
    1270: `527`,
    1271: `528`,
    1272: `528`,
    1273: `529`,
    1274: `529`,
    1275: `530`,
    1276: `531`,
    1277: `531`,
    1278: `532`,
    1279: `533`,
    128: `2`,
    1280: `533`,
    1281: `534`,
    1282: `535`,
    1283: `535`,
    1284: `536`,
    1285: `537`,
    1286: `538`,
    1287: `538`,
    1288: `539`,
    1289: `540`,
    129: `2`,
    1290: `541`,
    1291: `541`,
    1292: `542`,
    1293: `542`,
    1294: `543`,
    1295: `543`,
    1296: `544`,
    1297: `544`,
    1298: `546`,
    1299: `546`,
    13: `2`,
    130: `2`,
    1300: `547`,
    1301: `547`,
    1302: `548`,
    1303: `548`,
    1304: `549`,
    1305: `549`,
    1306: `550`,
    1307: `551`,
    1308: `551`,
    1309: `552`,
    131: `2`,
    1310: `552`,
    1311: `553`,
    1312: `553`,
    1313: `554`,
    1314: `554`,
    1315: `557`,
    1316: `557`,
    1317: `558`,
    1318: `558`,
    1319: `559`,
    132: `2`,
    1320: `564`,
    1321: `564`,
    1322: `565`,
    1323: `566`,
    1324: `566`,
    1325: `567`,
    1326: `568`,
    1327: `568`,
    1328: `569`,
    1329: `570`,
    133: `2`,
    1330: `571`,
    1331: `572`,
    1332: `572`,
    1333: `572`,
    1334: `573`,
    1335: `573`,
    1336: `573`,
    1337: `574`,
    1338: `575`,
    1339: `575`,
    134: `2`,
    1340: `576`,
    1341: `576`,
    1342: `576`,
    1343: `576`,
    1344: `576`,
    1345: `576`,
    1346: `576`,
    1347: `576`,
    1348: `576`,
    1349: `576`,
    135: `2`,
    1350: `577`,
    1351: `577`,
    1352: `578`,
    1353: `579`,
    1354: `580`,
    1355: `580`,
    1356: `581`,
    1357: `582`,
    1358: `582`,
    1359: `583`,
    136: `2`,
    1360: `584`,
    1361: `585`,
    1362: `585`,
    1363: `586`,
    1364: `587`,
    1365: `587`,
    1366: `588`,
    1367: `589`,
    1368: `594`,
    1369: `594`,
    137: `2`,
    1370: `595`,
    1371: `595`,
    1372: `596`,
    1373: `597`,
    1374: `598`,
    1375: `599`,
    1376: `599`,
    1377: `600`,
    1378: `600`,
    1379: `601`,
    138: `2`,
    1380: `602`,
    1381: `602`,
    1382: `603`,
    1383: `604`,
    1384: `604`,
    1385: `605`,
    1386: `606`,
    1387: `606`,
    1388: `607`,
    1389: `608`,
    139: `2`,
    1390: `609`,
    1391: `609`,
    1392: `610`,
    1393: `611`,
    1394: `612`,
    1395: `612`,
    1396: `613`,
    1397: `613`,
    1398: `614`,
    1399: `614`,
    14: `2`,
    140: `2`,
    1400: `615`,
    1401: `615`,
    1402: `617`,
    1403: `617`,
    1404: `618`,
    1405: `618`,
    1406: `619`,
    1407: `619`,
    1408: `620`,
    1409: `620`,
    141: `2`,
    1410: `621`,
    1411: `622`,
    1412: `622`,
    1413: `623`,
    1414: `623`,
    1415: `624`,
    1416: `624`,
    1417: `625`,
    1418: `625`,
    1419: `628`,
    142: `2`,
    1420: `628`,
    1421: `629`,
    1422: `629`,
    1423: `630`,
    1424: `635`,
    1425: `635`,
    1426: `636`,
    1427: `637`,
    1428: `637`,
    1429: `638`,
    143: `2`,
    1430: `639`,
    1431: `639`,
    1432: `640`,
    1433: `641`,
    1434: `642`,
    1435: `643`,
    1436: `643`,
    1437: `643`,
    1438: `644`,
    1439: `644`,
    144: `2`,
    1440: `644`,
    1441: `645`,
    1442: `646`,
    1443: `646`,
    1444: `647`,
    1445: `647`,
    1446: `647`,
    1447: `647`,
    1448: `647`,
    1449: `647`,
    145: `2`,
    1450: `647`,
    1451: `647`,
    1452: `647`,
    1453: `647`,
    1454: `648`,
    1455: `648`,
    1456: `649`,
    1457: `650`,
    1458: `651`,
    1459: `651`,
    146: `2`,
    1460: `652`,
    1461: `653`,
    1462: `653`,
    1463: `654`,
    1464: `655`,
    1465: `656`,
    1466: `656`,
    1467: `657`,
    1468: `658`,
    1469: `658`,
    147: `2`,
    1470: `659`,
    1471: `660`,
    1472: `665`,
    1473: `665`,
    1474: `666`,
    1475: `666`,
    1476: `667`,
    1477: `668`,
    1478: `668`,
    1479: `669`,
    148: `2`,
    1480: `670`,
    1481: `670`,
    1482: `671`,
    1483: `671`,
    1484: `671`,
    1485: `672`,
    1486: `673`,
    1487: `673`,
    1488: `674`,
    1489: `674`,
    149: `2`,
    1490: `674`,
    1491: `675`,
    1492: `676`,
    1493: `676`,
    1494: `677`,
    1495: `677`,
    1496: `677`,
    1497: `677`,
    1498: `677`,
    1499: `677`,
    15: `2`,
    150: `2`,
    1500: `678`,
    1501: `678`,
    1502: `679`,
    1503: `680`,
    1504: `682`,
    1505: `682`,
    1506: `683`,
    1507: `683`,
    1508: `683`,
    1509: `684`,
    151: `2`,
    1510: `684`,
    1511: `685`,
    1512: `686`,
    1513: `686`,
    1514: `687`,
    1515: `688`,
    1516: `688`,
    1517: `689`,
    1518: `690`,
    1519: `690`,
    152: `2`,
    1520: `691`,
    1521: `692`,
    1522: `692`,
    1523: `693`,
    1524: `693`,
    1525: `694`,
    1526: `694`,
    1527: `695`,
    1528: `696`,
    1529: `696`,
    153: `2`,
    1530: `697`,
    1531: `698`,
    1532: `698`,
    1533: `699`,
    1534: `700`,
    1535: `700`,
    1536: `701`,
    1537: `702`,
    1538: `702`,
    1539: `703`,
    154: `2`,
    1540: `703`,
    1541: `704`,
    1542: `704`,
    1543: `707`,
    1544: `707`,
    1545: `708`,
    1546: `708`,
    1547: `708`,
    1548: `709`,
    1549: `710`,
    155: `2`,
    1550: `710`,
    1551: `710`,
    1552: `712`,
    1553: `712`,
    1554: `713`,
    1555: `714`,
    1556: `714`,
    1557: `715`,
    1558: `716`,
    1559: `717`,
    156: `2`,
    1560: `717`,
    1561: `718`,
    1562: `719`,
    1563: `719`,
    1564: `720`,
    1565: `721`,
    1566: `722`,
    1567: `722`,
    1568: `723`,
    1569: `724`,
    157: `2`,
    1570: `724`,
    1571: `724`,
    1572: `725`,
    1573: `726`,
    1574: `727`,
    1575: `727`,
    1576: `728`,
    1577: `728`,
    1578: `730`,
    1579: `730`,
    158: `2`,
    1580: `731`,
    1581: `731`,
    1582: `732`,
    1583: `733`,
    1584: `733`,
    1585: `734`,
    1586: `734`,
    1587: `734`,
    1588: `735`,
    1589: `736`,
    159: `2`,
    1590: `736`,
    1591: `737`,
    1592: `737`,
    1593: `738`,
    1594: `738`,
    1595: `738`,
    1596: `739`,
    1597: `740`,
    1598: `741`,
    1599: `741`,
    16: `2`,
    160: `2`,
    1600: `742`,
    1601: `742`,
    1602: `742`,
    1603: `743`,
    1604: `744`,
    1605: `745`,
    1606: `745`,
    1607: `746`,
    1608: `746`,
    1609: `746`,
    161: `2`,
    1610: `747`,
    1611: `747`,
    1612: `748`,
    1613: `749`,
    1614: `750`,
    1615: `750`,
    1616: `751`,
    1617: `751`,
    1618: `752`,
    1619: `752`,
    162: `2`,
    1620: `752`,
    1621: `753`,
    1622: `753`,
    1623: `754`,
    1624: `755`,
    1625: `756`,
    1626: `756`,
    1627: `757`,
    1628: `758`,
    1629: `758`,
    163: `2`,
    1630: `758`,
    1631: `759`,
    1632: `759`,
    1633: `760`,
    1634: `761`,
    1635: `762`,
    1636: `763`,
    1637: `763`,
    1638: `764`,
    1639: `765`,
    164: `2`,
    1640: `765`,
    1641: `766`,
    1642: `767`,
    1643: `768`,
    1644: `768`,
    1645: `769`,
    1646: `770`,
    1647: `771`,
    1648: `772`,
    1649: `772`,
    165: `2`,
    1650: `773`,
    1651: `774`,
    1652: `775`,
    1653: `777`,
    1654: `777`,
    1655: `777`,
    1656: `778`,
    1657: `778`,
    1658: `778`,
    1659: `781`,
    166: `2`,
    1660: `781`,
    1661: `781`,
    1662: `783`,
    1663: `783`,
    1664: `784`,
    1665: `784`,
    1666: `784`,
    1667: `785`,
    1668: `785`,
    1669: `786`,
    167: `2`,
    1670: `786`,
    1671: `787`,
    1672: `787`,
    1673: `787`,
    1674: `788`,
    1675: `789`,
    1676: `789`,
    1677: `790`,
    1678: `790`,
    1679: `790`,
    168: `2`,
    1680: `791`,
    1681: `792`,
    1682: `793`,
    1683: `798`,
    1684: `798`,
    1685: `800`,
    1686: `801`,
    1687: `801`,
    1688: `802`,
    1689: `803`,
    169: `2`,
    1690: `803`,
    1691: `804`,
    1692: `805`,
    1693: `805`,
    1694: `805`,
    1695: `806`,
    1696: `806`,
    1697: `806`,
    1698: `807`,
    1699: `807`,
    17: `2`,
    170: `2`,
    1700: `808`,
    1701: `808`,
    1702: `810`,
    1703: `811`,
    1704: `811`,
    1705: `812`,
    1706: `813`,
    1707: `813`,
    1708: `814`,
    1709: `815`,
    171: `2`,
    1710: `815`,
    1711: `815`,
    1712: `816`,
    1713: `816`,
    1714: `816`,
    1715: `817`,
    1716: `817`,
    1717: `818`,
    1718: `818`,
    1719: `819`,
    172: `2`,
    1720: `819`,
    1721: `819`,
    1722: `820`,
    1723: `820`,
    1724: `821`,
    1725: `821`,
    1726: `822`,
    1727: `822`,
    1728: `823`,
    1729: `824`,
    173: `2`,
    1730: `829`,
    1731: `829`,
    1732: `830`,
    1733: `830`,
    1734: `830`,
    1735: `831`,
    1736: `831`,
    1737: `832`,
    1738: `832`,
    1739: `833`,
    174: `2`,
    1740: `833`,
    1741: `834`,
    1742: `835`,
    1743: `840`,
    1744: `840`,
    1745: `841`,
    1746: `841`,
    1747: `842`,
    1748: `843`,
    1749: `843`,
    175: `2`,
    1750: `843`,
    1751: `844`,
    1752: `844`,
    1753: `845`,
    1754: `845`,
    1755: `846`,
    1756: `847`,
    1757: `847`,
    1758: `847`,
    1759: `848`,
    176: `2`,
    1760: `849`,
    1761: `849`,
    1762: `849`,
    1763: `850`,
    1764: `850`,
    1765: `852`,
    1766: `852`,
    1767: `853`,
    1768: `853`,
    1769: `853`,
    177: `2`,
    1770: `854`,
    1771: `854`,
    1772: `855`,
    1773: `856`,
    1774: `861`,
    1775: `861`,
    1776: `862`,
    1777: `862`,
    1778: `863`,
    1779: `864`,
    178: `2`,
    1780: `870`,
    1781: `870`,
    1782: `872`,
    1783: `873`,
    1784: `873`,
    1785: `874`,
    1786: `875`,
    1787: `875`,
    1788: `876`,
    1789: `877`,
    179: `2`,
    1790: `877`,
    1791: `877`,
    1792: `878`,
    1793: `878`,
    1794: `878`,
    1795: `879`,
    1796: `880`,
    1797: `880`,
    1798: `881`,
    1799: `881`,
    18: `2`,
    180: `2`,
    1800: `882`,
    1801: `883`,
    1802: `889`,
    1803: `890`,
    1804: `891`,
    1805: `891`,
    1806: `892`,
    1807: `893`,
    1808: `893`,
    1809: `894`,
    181: `2`,
    1810: `894`,
    1811: `895`,
    1812: `896`,
    1813: `896`,
    1814: `896`,
    1815: `897`,
    1816: `897`,
    1817: `897`,
    1818: `898`,
    1819: `899`,
    182: `2`,
    1820: `900`,
    1821: `900`,
    1822: `901`,
    1823: `902`,
    1824: `902`,
    1825: `903`,
    1826: `903`,
    1827: `904`,
    1828: `905`,
    1829: `905`,
    183: `2`,
    1830: `905`,
    1831: `906`,
    1832: `906`,
    1833: `906`,
    1834: `907`,
    1835: `908`,
    1836: `909`,
    1837: `909`,
    1838: `910`,
    1839: `911`,
    184: `2`,
    1840: `911`,
    1841: `912`,
    1842: `912`,
    1843: `913`,
    1844: `914`,
    1845: `914`,
    1846: `914`,
    1847: `915`,
    1848: `915`,
    1849: `915`,
    185: `2`,
    1850: `917`,
    1851: `918`,
    1852: `919`,
    1853: `919`,
    1854: `920`,
    1855: `921`,
    1856: `921`,
    1857: `922`,
    1858: `923`,
    1859: `923`,
    186: `2`,
    1860: `924`,
    1861: `925`,
    1862: `925`,
    1863: `926`,
    1864: `927`,
    1865: `927`,
    1866: `927`,
    1867: `928`,
    1868: `928`,
    1869: `928`,
    187: `2`,
    1870: `929`,
    1871: `929`,
    1872: `930`,
    1873: `931`,
    1874: `931`,
    1875: `931`,
    1876: `932`,
    1877: `932`,
    1878: `932`,
    1879: `933`,
    188: `2`,
    1880: `933`,
    1881: `934`,
    1882: `934`,
    1883: `935`,
    1884: `936`,
    1885: `936`,
    1886: `937`,
    1887: `938`,
    1888: `938`,
    1889: `939`,
    189: `2`,
    1890: `940`,
    1891: `942`,
    1892: `942`,
    1893: `942`,
    1894: `942`,
    1895: `942`,
    1896: `942`,
    1897: `942`,
    1898: `942`,
    1899: `942`,
    19: `2`,
    190: `2`,
    1900: `942`,
    1901: `943`,
    1902: `943`,
    1903: `944`,
    1904: `945`,
    1905: `946`,
    1906: `946`,
    1907: `947`,
    1908: `947`,
    1909: `948`,
    191: `2`,
    1910: `948`,
    1911: `949`,
    1912: `949`,
    1913: `949`,
    1914: `950`,
    1915: `950`,
    1916: `951`,
    1917: `951`,
    1918: `952`,
    1919: `953`,
    192: `2`,
    1920: `953`,
    1921: `953`,
    1922: `954`,
    1923: `954`,
    1924: `955`,
    1925: `955`,
    1926: `956`,
    1927: `957`,
    1928: `957`,
    1929: `957`,
    193: `2`,
    1930: `958`,
    1931: `959`,
    1932: `960`,
    1933: `960`,
    1934: `961`,
    1935: `961`,
    1936: `961`,
    1937: `962`,
    1938: `962`,
    1939: `963`,
    194: `2`,
    1940: `964`,
    1941: `964`,
    1942: `964`,
    1943: `965`,
    1944: `965`,
    1945: `966`,
    1946: `966`,
    1947: `966`,
    1948: `967`,
    1949: `967`,
    195: `2`,
    1950: `968`,
    1951: `969`,
    1952: `969`,
    1953: `969`,
    1954: `970`,
    1955: `971`,
    1956: `972`,
    1957: `972`,
    1958: `973`,
    1959: `973`,
    196: `2`,
    1960: `973`,
    1961: `974`,
    1962: `975`,
    1963: `975`,
    1964: `976`,
    1965: `977`,
    1966: `977`,
    1967: `978`,
    1968: `978`,
    1969: `979`,
    197: `2`,
    1970: `979`,
    1971: `980`,
    1972: `980`,
    1973: `980`,
    1974: `983`,
    1975: `983`,
    1976: `984`,
    1977: `984`,
    1978: `984`,
    1979: `985`,
    198: `2`,
    1980: `985`,
    1981: `986`,
    1982: `986`,
    1983: `987`,
    1984: `987`,
    1985: `987`,
    1986: `988`,
    1987: `988`,
    1988: `988`,
    1989: `989`,
    199: `2`,
    1990: `990`,
    1991: `991`,
    1992: `996`,
    1993: `996`,
    1994: `997`,
    1995: `997`,
    1996: `998`,
    1997: `999`,
    1998: `1000`,
    1999: `1001`,
    2: `2`,
    20: `2`,
    200: `2`,
    2000: `1001`,
    2001: `1002`,
    2002: `1002`,
    2003: `1003`,
    2004: `1004`,
    2005: `1004`,
    2006: `1005`,
    2007: `1006`,
    2008: `1006`,
    2009: `1007`,
    201: `2`,
    2010: `1008`,
    2011: `1008`,
    2012: `1009`,
    2013: `1010`,
    2014: `1011`,
    2015: `1011`,
    2016: `1012`,
    2017: `1013`,
    2018: `1014`,
    2019: `1014`,
    202: `2`,
    2020: `1015`,
    2021: `1015`,
    2022: `1016`,
    2023: `1016`,
    2024: `1017`,
    2025: `1017`,
    2026: `1019`,
    2027: `1019`,
    2028: `1020`,
    2029: `1020`,
    203: `2`,
    2030: `1021`,
    2031: `1021`,
    2032: `1022`,
    2033: `1022`,
    2034: `1023`,
    2035: `1024`,
    2036: `1024`,
    2037: `1025`,
    2038: `1025`,
    2039: `1026`,
    204: `2`,
    2040: `1026`,
    2041: `1028`,
    2042: `1029`,
    2043: `1029`,
    2044: `1030`,
    2045: `1030`,
    2046: `1031`,
    2047: `1031`,
    2048: `1032`,
    2049: `1032`,
    205: `2`,
    2050: `1036`,
    2051: `1036`,
    2052: `1037`,
    2053: `1037`,
    2054: `1038`,
    2055: `1043`,
    2056: `1043`,
    2057: `1044`,
    2058: `1045`,
    2059: `1045`,
    206: `2`,
    2060: `1046`,
    2061: `1047`,
    2062: `1047`,
    2063: `1048`,
    2064: `1049`,
    2065: `1050`,
    2066: `1051`,
    2067: `1051`,
    2068: `1051`,
    2069: `1052`,
    207: `2`,
    2070: `1052`,
    2071: `1052`,
    2072: `1053`,
    2073: `1054`,
    2074: `1054`,
    2075: `1055`,
    2076: `1055`,
    2077: `1055`,
    2078: `1055`,
    2079: `1055`,
    208: `2`,
    2080: `1055`,
    2081: `1055`,
    2082: `1055`,
    2083: `1055`,
    2084: `1055`,
    2085: `1056`,
    2086: `1056`,
    2087: `1057`,
    2088: `1058`,
    2089: `1059`,
    209: `2`,
    2090: `1059`,
    2091: `1060`,
    2092: `1061`,
    2093: `1061`,
    2094: `1062`,
    2095: `1063`,
    2096: `1064`,
    2097: `1064`,
    2098: `1065`,
    2099: `1066`,
    21: `2`,
    210: `2`,
    2100: `1066`,
    2101: `1067`,
    2102: `1068`,
    2103: `1073`,
    2104: `1073`,
    2105: `1075`,
    2106: `1076`,
    2107: `1076`,
    2108: `1077`,
    2109: `1078`,
    211: `2`,
    2110: `1078`,
    2111: `1079`,
    2112: `1080`,
    2113: `1080`,
    2114: `1080`,
    2115: `1081`,
    2116: `1081`,
    2117: `1081`,
    2118: `1082`,
    2119: `1082`,
    212: `2`,
    2120: `1083`,
    2121: `1084`,
    2122: `1084`,
    2123: `1084`,
    2124: `1085`,
    2125: `1085`,
    2126: `1086`,
    2127: `1087`,
    2128: `1088`,
    2129: `1088`,
    213: `2`,
    2130: `1089`,
    2131: `1090`,
    2132: `1090`,
    2133: `1091`,
    2134: `1091`,
    2135: `1091`,
    2136: `1092`,
    2137: `1092`,
    2138: `1092`,
    2139: `1092`,
    214: `2`,
    2140: `1092`,
    2141: `1092`,
    2142: `1092`,
    2143: `1092`,
    2144: `1092`,
    2145: `1092`,
    2146: `1093`,
    2147: `1093`,
    2148: `1094`,
    2149: `1095`,
    215: `2`,
    2150: `1096`,
    2151: `1096`,
    2152: `1097`,
    2153: `1097`,
    2154: `1098`,
    2155: `1098`,
    2156: `1099`,
    2157: `1099`,
    2158: `1100`,
    2159: `1100`,
    216: `2`,
    2160: `1101`,
    2161: `1102`,
    2162: `1102`,
    2163: `1103`,
    2164: `1103`,
    2165: `1104`,
    2166: `1104`,
    2167: `1104`,
    2168: `1107`,
    2169: `1107`,
    217: `2`,
    2170: `1108`,
    2171: `1108`,
    2172: `1108`,
    2173: `1109`,
    2174: `1109`,
    2175: `1110`,
    2176: `1110`,
    2177: `1111`,
    2178: `1111`,
    2179: `1111`,
    218: `2`,
    2180: `1112`,
    2181: `1112`,
    2182: `1112`,
    2183: `1113`,
    2184: `1114`,
    2185: `1115`,
    2186: `1120`,
    2187: `1120`,
    2188: `1121`,
    2189: `1121`,
    219: `2`,
    2190: `1122`,
    2191: `1123`,
    2192: `1124`,
    2193: `1125`,
    2194: `1125`,
    2195: `1126`,
    2196: `1126`,
    2197: `1127`,
    2198: `1128`,
    2199: `1128`,
    22: `2`,
    220: `2`,
    2200: `1129`,
    2201: `1130`,
    2202: `1130`,
    2203: `1131`,
    2204: `1132`,
    2205: `1132`,
    2206: `1133`,
    2207: `1134`,
    2208: `1135`,
    2209: `1135`,
    221: `2`,
    2210: `1136`,
    2211: `1137`,
    2212: `1138`,
    2213: `1138`,
    2214: `1139`,
    2215: `1139`,
    2216: `1140`,
    2217: `1140`,
    2218: `1141`,
    2219: `1141`,
    222: `2`,
    2220: `1143`,
    2221: `1143`,
    2222: `1144`,
    2223: `1144`,
    2224: `1145`,
    2225: `1145`,
    2226: `1146`,
    2227: `1146`,
    2228: `1147`,
    2229: `1148`,
    223: `2`,
    2230: `1148`,
    2231: `1149`,
    2232: `1149`,
    2233: `1150`,
    2234: `1150`,
    2235: `1152`,
    2236: `1153`,
    2237: `1153`,
    2238: `1154`,
    2239: `1154`,
    224: `2`,
    2240: `1155`,
    2241: `1155`,
    2242: `1156`,
    2243: `1156`,
    2244: `1160`,
    2245: `1160`,
    2246: `1161`,
    2247: `1161`,
    2248: `1162`,
    2249: `1167`,
    225: `2`,
    2250: `1167`,
    2251: `1168`,
    2252: `1169`,
    2253: `1169`,
    2254: `1170`,
    2255: `1171`,
    2256: `1171`,
    2257: `1172`,
    2258: `1173`,
    2259: `1174`,
    226: `2`,
    2260: `1175`,
    2261: `1175`,
    2262: `1175`,
    2263: `1176`,
    2264: `1176`,
    2265: `1176`,
    2266: `1177`,
    2267: `1178`,
    2268: `1178`,
    2269: `1179`,
    227: `2`,
    2270: `1179`,
    2271: `1179`,
    2272: `1179`,
    2273: `1179`,
    2274: `1179`,
    2275: `1179`,
    2276: `1179`,
    2277: `1179`,
    2278: `1179`,
    2279: `1180`,
    228: `2`,
    2280: `1180`,
    2281: `1181`,
    2282: `1182`,
    2283: `1183`,
    2284: `1183`,
    2285: `1184`,
    2286: `1185`,
    2287: `1185`,
    2288: `1186`,
    2289: `1187`,
    229: `2`,
    2290: `1188`,
    2291: `1188`,
    2292: `1189`,
    2293: `1190`,
    2294: `1190`,
    2295: `1191`,
    2296: `1192`,
    2297: `1197`,
    2298: `1197`,
    2299: `1199`,
    23: `2`,
    230: `2`,
    2300: `1200`,
    2301: `1200`,
    2302: `1201`,
    2303: `1202`,
    2304: `1202`,
    2305: `1203`,
    2306: `1204`,
    2307: `1204`,
    2308: `1204`,
    2309: `1205`,
    231: `2`,
    2310: `1205`,
    2311: `1205`,
    2312: `1206`,
    2313: `1206`,
    2314: `1207`,
    2315: `1208`,
    2316: `1208`,
    2317: `1208`,
    2318: `1209`,
    2319: `1209`,
    232: `2`,
    2320: `1210`,
    2321: `1211`,
    2322: `1212`,
    2323: `1212`,
    2324: `1213`,
    2325: `1214`,
    2326: `1214`,
    2327: `1215`,
    2328: `1215`,
    2329: `1215`,
    233: `2`,
    2330: `1216`,
    2331: `1216`,
    2332: `1216`,
    2333: `1216`,
    2334: `1216`,
    2335: `1216`,
    2336: `1216`,
    2337: `1216`,
    2338: `1216`,
    2339: `1216`,
    234: `2`,
    2340: `1217`,
    2341: `1217`,
    2342: `1218`,
    2343: `1219`,
    2344: `1220`,
    2345: `1220`,
    2346: `1221`,
    2347: `1221`,
    2348: `1222`,
    2349: `1222`,
    235: `2`,
    2350: `1223`,
    2351: `1223`,
    2352: `1224`,
    2353: `1224`,
    2354: `1225`,
    2355: `1226`,
    2356: `1226`,
    2357: `1227`,
    2358: `1227`,
    2359: `1228`,
    236: `2`,
    2360: `1228`,
    2361: `1228`,
    2362: `1231`,
    2363: `1231`,
    2364: `1231`,
    2365: `1233`,
    2366: `1233`,
    2367: `1234`,
    2368: `1234`,
    2369: `1234`,
    237: `2`,
    2370: `1235`,
    2371: `1235`,
    2372: `1236`,
    2373: `1236`,
    2374: `1237`,
    2375: `1237`,
    2376: `1237`,
    2377: `1238`,
    2378: `1238`,
    2379: `1239`,
    238: `2`,
    2380: `1239`,
    2381: `1240`,
    2382: `1240`,
    2383: `1240`,
    2384: `1241`,
    2385: `1241`,
    2386: `1242`,
    2387: `1242`,
    2388: `1243`,
    2389: `1243`,
    239: `2`,
    2390: `1243`,
    2391: `1244`,
    2392: `1244`,
    2393: `1245`,
    2394: `1245`,
    2395: `1246`,
    2396: `1246`,
    2397: `1247`,
    2398: `1248`,
    2399: `1248`,
    24: `2`,
    240: `2`,
    2400: `1248`,
    2401: `1249`,
    2402: `1249`,
    2403: `1250`,
    2404: `1251`,
    2405: `1251`,
    2406: `1251`,
    2407: `1252`,
    2408: `1252`,
    2409: `1253`,
    241: `2`,
    2410: `1253`,
    2411: `1254`,
    2412: `1254`,
    2413: `1255`,
    2414: `1256`,
    2415: `1256`,
    2416: `1256`,
    2417: `1257`,
    2418: `1257`,
    2419: `1258`,
    242: `2`,
    2420: `1259`,
    2421: `1259`,
    2422: `1259`,
    2423: `1260`,
    2424: `1260`,
    2425: `1261`,
    2426: `1261`,
    2427: `1262`,
    2428: `1262`,
    2429: `1262`,
    243: `2`,
    2430: `1263`,
    2431: `1263`,
    2432: `1264`,
    2433: `1265`,
    2434: `1270`,
    2435: `1270`,
    2436: `1271`,
    2437: `1271`,
    2438: `1271`,
    2439: `1272`,
    244: `2`,
    2440: `1272`,
    2441: `1273`,
    2442: `1274`,
    2443: `1279`,
    2444: `1279`,
    2445: `1280`,
    2446: `1280`,
    2447: `1281`,
    2448: `1282`,
    2449: `1288`,
    245: `2`,
    2450: `1288`,
    2451: `1290`,
    2452: `1291`,
    2453: `1291`,
    2454: `1292`,
    2455: `1293`,
    2456: `1293`,
    2457: `1294`,
    2458: `1295`,
    2459: `1295`,
    246: `2`,
    2460: `1295`,
    2461: `1296`,
    2462: `1296`,
    2463: `1296`,
    2464: `1297`,
    2465: `1298`,
    2466: `1298`,
    2467: `1299`,
    2468: `1299`,
    2469: `1300`,
    247: `2`,
    2470: `1301`,
    2471: `1307`,
    2472: `1307`,
    2473: `1308`,
    2474: `1308`,
    2475: `1309`,
    2476: `1310`,
    2477: `1310`,
    2478: `1311`,
    2479: `1311`,
    248: `2`,
    2480: `1313`,
    2481: `1314`,
    2482: `1314`,
    2483: `1315`,
    2484: `1315`,
    2485: `1316`,
    2486: `1316`,
    2487: `1317`,
    2488: `1318`,
    2489: `1319`,
    249: `2`,
    2490: `1319`,
    2491: `1319`,
    2492: `1320`,
    2493: `1320`,
    2494: `1320`,
    2495: `1321`,
    2496: `1322`,
    2497: `1322`,
    2498: `1323`,
    2499: `1323`,
    25: `2`,
    250: `2`,
    2500: `1324`,
    2501: `1325`,
    2502: `1331`,
    2503: `1332`,
    2504: `1333`,
    2505: `1333`,
    2506: `1334`,
    2507: `1335`,
    2508: `1335`,
    2509: `1336`,
    251: `2`,
    2510: `1336`,
    2511: `1337`,
    2512: `1338`,
    2513: `1338`,
    2514: `1338`,
    2515: `1339`,
    2516: `1339`,
    2517: `1339`,
    2518: `1341`,
    2519: `1342`,
    252: `4`,
    2520: `1343`,
    2521: `1343`,
    2522: `1344`,
    2523: `1345`,
    2524: `1345`,
    2525: `1346`,
    2526: `1347`,
    2527: `1347`,
    2528: `1348`,
    2529: `1349`,
    253: `4`,
    2530: `1349`,
    2531: `1350`,
    2532: `1351`,
    2533: `1351`,
    2534: `1351`,
    2535: `1352`,
    2536: `1352`,
    2537: `1352`,
    2538: `1353`,
    2539: `1353`,
    254: `5`,
    2540: `1354`,
    2541: `1355`,
    2542: `1355`,
    2543: `1355`,
    2544: `1356`,
    2545: `1356`,
    2546: `1356`,
    2547: `1357`,
    2548: `1357`,
    2549: `1358`,
    255: `5`,
    2550: `1358`,
    2551: `1359`,
    2552: `1360`,
    2553: `1360`,
    2554: `1361`,
    2555: `1362`,
    2556: `1362`,
    2557: `1363`,
    2558: `1364`,
    2559: `1366`,
    256: `5`,
    2560: `1366`,
    2561: `1367`,
    2562: `1367`,
    2563: `1368`,
    2564: `1369`,
    2565: `1369`,
    2566: `1369`,
    2567: `1370`,
    2568: `1370`,
    2569: `1371`,
    257: `6`,
    2570: `1371`,
    2571: `1372`,
    2572: `1372`,
    2573: `1373`,
    2574: `1373`,
    2575: `1374`,
    2576: `1375`,
    2577: `1376`,
    2578: `1376`,
    2579: `1377`,
    258: `7`,
    2580: `1377`,
    2581: `1377`,
    2582: `1378`,
    2583: `1378`,
    2584: `1379`,
    2585: `1379`,
    2586: `1380`,
    2587: `1381`,
    2588: `1381`,
    2589: `1382`,
    259: `8`,
    2590: `1383`,
    2591: `1383`,
    2592: `1384`,
    2593: `1385`,
    2594: `1388`,
    2595: `1389`,
    2596: `1390`,
    2597: `1390`,
    2598: `1391`,
    2599: `1392`,
    26: `2`,
    260: `9`,
    2600: `1392`,
    2601: `1393`,
    2602: `1394`,
    2603: `1394`,
    2604: `1395`,
    2605: `1396`,
    2606: `1396`,
    2607: `1397`,
    2608: `1398`,
    2609: `1398`,
    261: `10`,
    2610: `1398`,
    2611: `1399`,
    2612: `1399`,
    2613: `1399`,
    2614: `1400`,
    2615: `1400`,
    2616: `1401`,
    2617: `1402`,
    2618: `1402`,
    2619: `1402`,
    262: `11`,
    2620: `1403`,
    2621: `1403`,
    2622: `1403`,
    2623: `1405`,
    2624: `1406`,
    2625: `1407`,
    2626: `1407`,
    2627: `1408`,
    2628: `1409`,
    2629: `1409`,
    263: `11`,
    2630: `1410`,
    2631: `1411`,
    2632: `1411`,
    2633: `1412`,
    2634: `1413`,
    2635: `1413`,
    2636: `1414`,
    2637: `1415`,
    2638: `1415`,
    2639: `1415`,
    264: `12`,
    2640: `1416`,
    2641: `1416`,
    2642: `1416`,
    2643: `1417`,
    2644: `1417`,
    2645: `1418`,
    2646: `1419`,
    2647: `1419`,
    2648: `1419`,
    2649: `1420`,
    265: `13`,
    2650: `1420`,
    2651: `1420`,
    2652: `1421`,
    2653: `1421`,
    2654: `1422`,
    2655: `1422`,
    2656: `1423`,
    2657: `1424`,
    2658: `1424`,
    2659: `1425`,
    266: `14`,
    2660: `1425`,
    2661: `1425`,
    2662: `1425`,
    2663: `1425`,
    2664: `1425`,
    2665: `1425`,
    2666: `1425`,
    2667: `1425`,
    2668: `1425`,
    2669: `1426`,
    267: `15`,
    2670: `1426`,
    2671: `1427`,
    2672: `1428`,
    2673: `1429`,
    2674: `1429`,
    2675: `1430`,
    2676: `1430`,
    2677: `1431`,
    2678: `1431`,
    2679: `1432`,
    268: `15`,
    2680: `1432`,
    2681: `1433`,
    2682: `1434`,
    2683: `1434`,
    2684: `1435`,
    2685: `1435`,
    2686: `1435`,
    2687: `1435`,
    2688: `1435`,
    2689: `1435`,
    269: `16`,
    2690: `1436`,
    2691: `1436`,
    2692: `1437`,
    2693: `1438`,
    2694: `1440`,
    2695: `1440`,
    2696: `1441`,
    2697: `1441`,
    2698: `1441`,
    2699: `1442`,
    27: `2`,
    270: `16`,
    2700: `1442`,
    2701: `1443`,
    2702: `1443`,
    2703: `1444`,
    2704: `1445`,
    2705: `1445`,
    2706: `1445`,
    2707: `1446`,
    2708: `1446`,
    2709: `1447`,
    271: `17`,
    2710: `1447`,
    2711: `1448`,
    2712: `1449`,
    2713: `1449`,
    2714: `1449`,
    2715: `1450`,
    2716: `1451`,
    2717: `1452`,
    2718: `1452`,
    2719: `1453`,
    272: `18`,
    2720: `1453`,
    2721: `1454`,
    2722: `1455`,
    2723: `1455`,
    2724: `1455`,
    2725: `1456`,
    2726: `1456`,
    2727: `1457`,
    2728: `1457`,
    2729: `1458`,
    273: `18`,
    2730: `1459`,
    2731: `1459`,
    2732: `1459`,
    2733: `1460`,
    2734: `1461`,
    2735: `1462`,
    2736: `1462`,
    2737: `1463`,
    2738: `1463`,
    2739: `1463`,
    274: `19`,
    2740: `1464`,
    2741: `1465`,
    2742: `1465`,
    2743: `1466`,
    2744: `1466`,
    2745: `1466`,
    2746: `1467`,
    2747: `1468`,
    2748: `1468`,
    2749: `1469`,
    275: `20`,
    2750: `1469`,
    2751: `1470`,
    2752: `1470`,
    2753: `1471`,
    2754: `1471`,
    2755: `1471`,
    2756: `1474`,
    2757: `1474`,
    2758: `1475`,
    2759: `1475`,
    276: `21`,
    2760: `1475`,
    2761: `1476`,
    2762: `1476`,
    2763: `1477`,
    2764: `1477`,
    2765: `1479`,
    2766: `1480`,
    2767: `1480`,
    2768: `1481`,
    2769: `1482`,
    277: `21`,
    2770: `1482`,
    2771: `1483`,
    2772: `1484`,
    2773: `1484`,
    2774: `1484`,
    2775: `1485`,
    2776: `1485`,
    2777: `1485`,
    2778: `1486`,
    2779: `1487`,
    278: `22`,
    2780: `1487`,
    2781: `1488`,
    2782: `1488`,
    2783: `1489`,
    2784: `1490`,
    2785: `1495`,
    2786: `1495`,
    2787: `1496`,
    2788: `1496`,
    2789: `1497`,
    279: `23`,
    2790: `1498`,
    2791: `1498`,
    2792: `1498`,
    2793: `1499`,
    2794: `1499`,
    2795: `1500`,
    2796: `1501`,
    2797: `1502`,
    2798: `1502`,
    2799: `1503`,
    28: `2`,
    280: `24`,
    2800: `1504`,
    2801: `1504`,
    2802: `1505`,
    2803: `1505`,
    2804: `1505`,
    2805: `1506`,
    2806: `1506`,
    2807: `1506`,
    2808: `1506`,
    2809: `1506`,
    281: `25`,
    2810: `1506`,
    2811: `1506`,
    2812: `1506`,
    2813: `1506`,
    2814: `1506`,
    2815: `1507`,
    2816: `1507`,
    2817: `1508`,
    2818: `1509`,
    2819: `1510`,
    282: `26`,
    2820: `1510`,
    2821: `1511`,
    2822: `1511`,
    2823: `1512`,
    2824: `1512`,
    2825: `1513`,
    2826: `1513`,
    2827: `1514`,
    2828: `1515`,
    2829: `1516`,
    283: `27`,
    2830: `1517`,
    2831: `1517`,
    2832: `1518`,
    2833: `1518`,
    2834: `1519`,
    2835: `1520`,
    2836: `1520`,
    2837: `1521`,
    2838: `1522`,
    2839: `1522`,
    284: `28`,
    2840: `1523`,
    2841: `1524`,
    2842: `1524`,
    2843: `1525`,
    2844: `1526`,
    2845: `1527`,
    2846: `1527`,
    2847: `1528`,
    2848: `1529`,
    2849: `1530`,
    285: `29`,
    2850: `1530`,
    2851: `1531`,
    2852: `1531`,
    2853: `1532`,
    2854: `1532`,
    2855: `1533`,
    2856: `1533`,
    2857: `1535`,
    2858: `1535`,
    2859: `1536`,
    286: `30`,
    2860: `1536`,
    2861: `1537`,
    2862: `1537`,
    2863: `1538`,
    2864: `1538`,
    2865: `1539`,
    2866: `1540`,
    2867: `1540`,
    2868: `1541`,
    2869: `1541`,
    287: `30`,
    2870: `1542`,
    2871: `1542`,
    2872: `1543`,
    2873: `1543`,
    2874: `1546`,
    2875: `1546`,
    2876: `1547`,
    2877: `1547`,
    2878: `1548`,
    2879: `1553`,
    288: `31`,
    2880: `1553`,
    2881: `1554`,
    2882: `1555`,
    2883: `1555`,
    2884: `1556`,
    2885: `1557`,
    2886: `1557`,
    2887: `1558`,
    2888: `1559`,
    2889: `1560`,
    289: `32`,
    2890: `1561`,
    2891: `1561`,
    2892: `1561`,
    2893: `1562`,
    2894: `1562`,
    2895: `1562`,
    2896: `1563`,
    2897: `1564`,
    2898: `1564`,
    2899: `1565`,
    29: `2`,
    290: `33`,
    2900: `1565`,
    2901: `1565`,
    2902: `1565`,
    2903: `1565`,
    2904: `1565`,
    2905: `1565`,
    2906: `1565`,
    2907: `1565`,
    2908: `1565`,
    2909: `1566`,
    291: `33`,
    2910: `1566`,
    2911: `1567`,
    2912: `1568`,
    2913: `1569`,
    2914: `1569`,
    2915: `1570`,
    2916: `1571`,
    2917: `1571`,
    2918: `1572`,
    2919: `1573`,
    292: `34`,
    2920: `1574`,
    2921: `1574`,
    2922: `1575`,
    2923: `1576`,
    2924: `1576`,
    2925: `1577`,
    2926: `1578`,
    2927: `1583`,
    2928: `1583`,
    2929: `1584`,
    293: `35`,
    2930: `1584`,
    2931: `1585`,
    2932: `1585`,
    2933: `1586`,
    2934: `1587`,
    2935: `1587`,
    2936: `1588`,
    2937: `1588`,
    2938: `1589`,
    2939: `1589`,
    294: `37`,
    2940: `1589`,
    2941: `1592`,
    2942: `1592`,
    2943: `1593`,
    2944: `1593`,
    2945: `1593`,
    2946: `1594`,
    2947: `1594`,
    2948: `1595`,
    2949: `1595`,
    295: `37`,
    2950: `1597`,
    2951: `1598`,
    2952: `1598`,
    2953: `1599`,
    2954: `1600`,
    2955: `1600`,
    2956: `1601`,
    2957: `1602`,
    2958: `1602`,
    2959: `1602`,
    296: `37`,
    2960: `1603`,
    2961: `1603`,
    2962: `1603`,
    2963: `1604`,
    2964: `1605`,
    2965: `1605`,
    2966: `1606`,
    2967: `1606`,
    2968: `1607`,
    2969: `1608`,
    297: `37`,
    2970: `1613`,
    2971: `1613`,
    2972: `1614`,
    2973: `1614`,
    2974: `1615`,
    2975: `1616`,
    2976: `1616`,
    2977: `1616`,
    2978: `1617`,
    2979: `1617`,
    298: `37`,
    2980: `1618`,
    2981: `1619`,
    2982: `1620`,
    2983: `1620`,
    2984: `1621`,
    2985: `1622`,
    2986: `1622`,
    2987: `1623`,
    2988: `1623`,
    2989: `1623`,
    299: `37`,
    2990: `1624`,
    2991: `1624`,
    2992: `1624`,
    2993: `1624`,
    2994: `1624`,
    2995: `1624`,
    2996: `1624`,
    2997: `1624`,
    2998: `1624`,
    2999: `1624`,
    3: `2`,
    30: `2`,
    300: `37`,
    3000: `1625`,
    3001: `1625`,
    3002: `1626`,
    3003: `1627`,
    3004: `1628`,
    3005: `1628`,
    3006: `1629`,
    3007: `1629`,
    3008: `1630`,
    3009: `1630`,
    301: `37`,
    3010: `1631`,
    3011: `1631`,
    3012: `1632`,
    3013: `1633`,
    3014: `1634`,
    3015: `1635`,
    3016: `1635`,
    3017: `1636`,
    3018: `1636`,
    3019: `1637`,
    302: `37`,
    3020: `1638`,
    3021: `1638`,
    3022: `1639`,
    3023: `1640`,
    3024: `1640`,
    3025: `1641`,
    3026: `1642`,
    3027: `1642`,
    3028: `1643`,
    3029: `1644`,
    303: `37`,
    3030: `1645`,
    3031: `1645`,
    3032: `1646`,
    3033: `1647`,
    3034: `1648`,
    3035: `1648`,
    3036: `1649`,
    3037: `1649`,
    3038: `1650`,
    3039: `1650`,
    304: `37`,
    3040: `1651`,
    3041: `1651`,
    3042: `1653`,
    3043: `1653`,
    3044: `1654`,
    3045: `1654`,
    3046: `1655`,
    3047: `1655`,
    3048: `1656`,
    3049: `1656`,
    305: `37`,
    3050: `1657`,
    3051: `1658`,
    3052: `1658`,
    3053: `1659`,
    3054: `1659`,
    3055: `1660`,
    3056: `1660`,
    3057: `1661`,
    3058: `1661`,
    3059: `1664`,
    306: `37`,
    3060: `1664`,
    3061: `1665`,
    3062: `1665`,
    3063: `1666`,
    3064: `1671`,
    3065: `1671`,
    3066: `1672`,
    3067: `1673`,
    3068: `1673`,
    3069: `1674`,
    307: `37`,
    3070: `1675`,
    3071: `1675`,
    3072: `1676`,
    3073: `1677`,
    3074: `1678`,
    3075: `1679`,
    3076: `1679`,
    3077: `1679`,
    3078: `1680`,
    3079: `1680`,
    308: `37`,
    3080: `1680`,
    3081: `1681`,
    3082: `1682`,
    3083: `1682`,
    3084: `1683`,
    3085: `1683`,
    3086: `1683`,
    3087: `1683`,
    3088: `1683`,
    3089: `1683`,
    309: `37`,
    3090: `1683`,
    3091: `1683`,
    3092: `1683`,
    3093: `1683`,
    3094: `1684`,
    3095: `1684`,
    3096: `1685`,
    3097: `1686`,
    3098: `1687`,
    3099: `1687`,
    31: `2`,
    310: `37`,
    3100: `1688`,
    3101: `1689`,
    3102: `1689`,
    3103: `1690`,
    3104: `1691`,
    3105: `1692`,
    3106: `1692`,
    3107: `1693`,
    3108: `1694`,
    3109: `1694`,
    311: `37`,
    3110: `1695`,
    3111: `1696`,
    3112: `1701`,
    3113: `1701`,
    3114: `1702`,
    3115: `1702`,
    3116: `1703`,
    3117: `1703`,
    3118: `1704`,
    3119: `1705`,
    312: `37`,
    3120: `1705`,
    3121: `1706`,
    3122: `1706`,
    3123: `1707`,
    3124: `1707`,
    3125: `1707`,
    3126: `1710`,
    3127: `1710`,
    3128: `1710`,
    3129: `1711`,
    313: `37`,
    3130: `1711`,
    3131: `1711`,
    3132: `1714`,
    3133: `1714`,
    3134: `1715`,
    3135: `1715`,
    3136: `1715`,
    3137: `1716`,
    3138: `1716`,
    3139: `1717`,
    314: `37`,
    3140: `1717`,
    3141: `1718`,
    3142: `1718`,
    3143: `1718`,
    3144: `1719`,
    3145: `1719`,
    3146: `1720`,
    3147: `1720`,
    3148: `1721`,
    3149: `1721`,
    315: `37`,
    3150: `1721`,
    3151: `1722`,
    3152: `1722`,
    3153: `1723`,
    3154: `1723`,
    3155: `1724`,
    3156: `1724`,
    3157: `1724`,
    3158: `1725`,
    3159: `1725`,
    316: `37`,
    3160: `1726`,
    3161: `1726`,
    3162: `1727`,
    3163: `1727`,
    3164: `1727`,
    3165: `1728`,
    3166: `1728`,
    3167: `1729`,
    3168: `1729`,
    3169: `1730`,
    317: `37`,
    3170: `1730`,
    3171: `1730`,
    3172: `1731`,
    3173: `1731`,
    3174: `1732`,
    3175: `1732`,
    3176: `1733`,
    3177: `1733`,
    3178: `1733`,
    3179: `1734`,
    318: `37`,
    3180: `1734`,
    3181: `1735`,
    3182: `1735`,
    3183: `1736`,
    3184: `1736`,
    3185: `1737`,
    3186: `1738`,
    3187: `1738`,
    3188: `1738`,
    3189: `1739`,
    319: `37`,
    3190: `1739`,
    3191: `1740`,
    3192: `1740`,
    3193: `1741`,
    3194: `1741`,
    3195: `1742`,
    3196: `1742`,
    3197: `1743`,
    3198: `1744`,
    3199: `1744`,
    32: `2`,
    320: `37`,
    3200: `1744`,
    3201: `1745`,
    3202: `1746`,
    3203: `1746`,
    3204: `1746`,
    3205: `1747`,
    3206: `1747`,
    3207: `1748`,
    3208: `1749`,
    3209: `1749`,
    321: `37`,
    3210: `1749`,
    3211: `1750`,
    3212: `1750`,
    3213: `1751`,
    3214: `1751`,
    3215: `1752`,
    3216: `1753`,
    3217: `1753`,
    3218: `1753`,
    3219: `1754`,
    322: `37`,
    3220: `1755`,
    3221: `1755`,
    3222: `1755`,
    3223: `1756`,
    3224: `1756`,
    3225: `1757`,
    3226: `1758`,
    3227: `1758`,
    3228: `1758`,
    3229: `1759`,
    323: `37`,
    3230: `1759`,
    3231: `1760`,
    3232: `1760`,
    3233: `1761`,
    3234: `1761`,
    3235: `1762`,
    3236: `1763`,
    3237: `1775`,
    3238: `1775`,
    3239: `1776`,
    324: `37`,
    3240: `1776`,
    3241: `1777`,
    3242: `1778`,
    3243: `1778`,
    3244: `1778`,
    3245: `1779`,
    3246: `1779`,
    3247: `1780`,
    3248: `1780`,
    3249: `1781`,
    325: `37`,
    3250: `1781`,
    3251: `1782`,
    3252: `1783`,
    3253: `1783`,
    3254: `1783`,
    3255: `1784`,
    3256: `1784`,
    3257: `1785`,
    3258: `1785`,
    3259: `1786`,
    326: `37`,
    3260: `1786`,
    3261: `1787`,
    3262: `1788`,
    3263: `1788`,
    3264: `1788`,
    3265: `1789`,
    3266: `1789`,
    3267: `1790`,
    3268: `1791`,
    3269: `1791`,
    327: `37`,
    3270: `1791`,
    3271: `1792`,
    3272: `1792`,
    3273: `1793`,
    3274: `1794`,
    3275: `1794`,
    3276: `1794`,
    3277: `1795`,
    3278: `1795`,
    3279: `1796`,
    328: `37`,
    3280: `1796`,
    3281: `1797`,
    3282: `1798`,
    3283: `1798`,
    3284: `1798`,
    3285: `1799`,
    3286: `1799`,
    3287: `1800`,
    3288: `1801`,
    3289: `1801`,
    329: `37`,
    3290: `1801`,
    3291: `1802`,
    3292: `1803`,
    3293: `1803`,
    3294: `1803`,
    3295: `1804`,
    3296: `1804`,
    3297: `1805`,
    3298: `1806`,
    3299: `1806`,
    33: `2`,
    330: `37`,
    3300: `1806`,
    3301: `1807`,
    3302: `1807`,
    3303: `1808`,
    3304: `1808`,
    3305: `1809`,
    3306: `1809`,
    3307: `1810`,
    3308: `1811`,
    3309: `1811`,
    331: `37`,
    3310: `1811`,
    3311: `1812`,
    3312: `1812`,
    3313: `1813`,
    3314: `1814`,
    3315: `1814`,
    3316: `1814`,
    3317: `1815`,
    3318: `1815`,
    3319: `1816`,
    332: `37`,
    3320: `1816`,
    3321: `1817`,
    3322: `1817`,
    3323: `1818`,
    3324: `1819`,
    3325: `1819`,
    3326: `1820`,
    3327: `1820`,
    3328: `1821`,
    3329: `1822`,
    333: `37`,
    3330: `1822`,
    3331: `1823`,
    3332: `1823`,
    3333: `1824`,
    3334: `1825`,
    3335: `1825`,
    3336: `1825`,
    3337: `1826`,
    3338: `1826`,
    3339: `1827`,
    334: `37`,
    3340: `1828`,
    3341: `1828`,
    3342: `1828`,
    3343: `1829`,
    3344: `1829`,
    3345: `1830`,
    3346: `1831`,
    3347: `1832`,
    3348: `1833`,
    3349: `1833`,
    335: `37`,
    3350: `1834`,
    3351: `1834`,
    3352: `1834`,
    3353: `1835`,
    3354: `1835`,
    3355: `1836`,
    3356: `1836`,
    3357: `1837`,
    3358: `1837`,
    3359: `1837`,
    336: `37`,
    3360: `1838`,
    3361: `1838`,
    3362: `1839`,
    3363: `1839`,
    3364: `1840`,
    3365: `1840`,
    3366: `1840`,
    3367: `1841`,
    3368: `1842`,
    3369: `1843`,
    337: `37`,
    3370: `1851`,
    3371: `1851`,
    3372: `1852`,
    3373: `1852`,
    3374: `1853`,
    3375: `1854`,
    3376: `1854`,
    3377: `1854`,
    3378: `1855`,
    3379: `1855`,
    338: `37`,
    3380: `1856`,
    3381: `1857`,
    3382: `1857`,
    3383: `1857`,
    3384: `1858`,
    3385: `1858`,
    3386: `1859`,
    3387: `1860`,
    3388: `1860`,
    3389: `1860`,
    339: `37`,
    3390: `1861`,
    3391: `1861`,
    3392: `1862`,
    3393: `1862`,
    3394: `1863`,
    3395: `1863`,
    3396: `1864`,
    3397: `1865`,
    3398: `1865`,
    3399: `1865`,
    34: `2`,
    340: `37`,
    3400: `1866`,
    3401: `1866`,
    3402: `1867`,
    3403: `1867`,
    3404: `1868`,
    3405: `1868`,
    3406: `1868`,
    3407: `1869`,
    3408: `1869`,
    3409: `1870`,
    341: `37`,
    3410: `1870`,
    3411: `1871`,
    3412: `1871`,
    3413: `1872`,
    3414: `1873`,
    3415: `1873`,
    3416: `1874`,
    3417: `1874`,
    3418: `1875`,
    3419: `1876`,
    342: `37`,
    3420: `1877`,
    3421: `1885`,
    3422: `1885`,
    3423: `1886`,
    3424: `1886`,
    3425: `1887`,
    3426: `1888`,
    3427: `1888`,
    3428: `1888`,
    3429: `1889`,
    343: `37`,
    3430: `1889`,
    3431: `1890`,
    3432: `1890`,
    3433: `1891`,
    3434: `1892`,
    3435: `1892`,
    3436: `1892`,
    3437: `1893`,
    3438: `1894`,
    3439: `1902`,
    344: `37`,
    3440: `1902`,
    3441: `1903`,
    3442: `1903`,
    3443: `1904`,
    3444: `1905`,
    3445: `1905`,
    3446: `1906`,
    3447: `1906`,
    3448: `1907`,
    3449: `1907`,
    345: `37`,
    3450: `1908`,
    3451: `1909`,
    3452: `1909`,
    3453: `1910`,
    3454: `1910`,
    3455: `1911`,
    3456: `1911`,
    3457: `1911`,
    3458: `1912`,
    3459: `1913`,
    346: `37`,
    3460: `1913`,
    3461: `1913`,
    3462: `1914`,
    3463: `1914`,
    3464: `1915`,
    3465: `1915`,
    3466: `1916`,
    3467: `1917`,
    3468: `1918`,
    3469: `1918`,
    347: `37`,
    3470: `1919`,
    3471: `1919`,
    3472: `1920`,
    3473: `1920`,
    3474: `1921`,
    3475: `1921`,
    3476: `1922`,
    3477: `1922`,
    3478: `1922`,
    3479: `1925`,
    348: `37`,
    3480: `1925`,
    3481: `1925`,
    3482: `1926`,
    3483: `1926`,
    3484: `1926`,
    3485: `1929`,
    3486: `1929`,
    3487: `1930`,
    3488: `1930`,
    3489: `1930`,
    349: `37`,
    3490: `1931`,
    3491: `1931`,
    3492: `1932`,
    3493: `1932`,
    3494: `1933`,
    3495: `1933`,
    3496: `1933`,
    3497: `1934`,
    3498: `1934`,
    3499: `1935`,
    35: `2`,
    350: `37`,
    3500: `1935`,
    3501: `1936`,
    3502: `1936`,
    3503: `1936`,
    3504: `1937`,
    3505: `1937`,
    3506: `1938`,
    3507: `1938`,
    3508: `1939`,
    3509: `1939`,
    351: `37`,
    3510: `1939`,
    3511: `1940`,
    3512: `1940`,
    3513: `1941`,
    3514: `1941`,
    3515: `1942`,
    3516: `1942`,
    3517: `1942`,
    3518: `1943`,
    3519: `1943`,
    352: `37`,
    3520: `1944`,
    3521: `1944`,
    3522: `1945`,
    3523: `1945`,
    3524: `1945`,
    3525: `1946`,
    3526: `1946`,
    3527: `1947`,
    3528: `1947`,
    3529: `1948`,
    353: `37`,
    3530: `1948`,
    3531: `1948`,
    3532: `1949`,
    3533: `1949`,
    3534: `1950`,
    3535: `1950`,
    3536: `1951`,
    3537: `1951`,
    3538: `1952`,
    3539: `1953`,
    354: `37`,
    3540: `1953`,
    3541: `1953`,
    3542: `1954`,
    3543: `1954`,
    3544: `1955`,
    3545: `1955`,
    3546: `1956`,
    3547: `1956`,
    3548: `1957`,
    3549: `1957`,
    355: `37`,
    3550: `1958`,
    3551: `1959`,
    3552: `1959`,
    3553: `1959`,
    3554: `1960`,
    3555: `1961`,
    3556: `1961`,
    3557: `1961`,
    3558: `1962`,
    3559: `1962`,
    356: `37`,
    3560: `1963`,
    3561: `1964`,
    3562: `1964`,
    3563: `1964`,
    3564: `1965`,
    3565: `1965`,
    3566: `1966`,
    3567: `1966`,
    3568: `1967`,
    3569: `1968`,
    357: `37`,
    3570: `1968`,
    3571: `1968`,
    3572: `1969`,
    3573: `1970`,
    3574: `1970`,
    3575: `1970`,
    3576: `1971`,
    3577: `1971`,
    3578: `1972`,
    3579: `1973`,
    358: `37`,
    3580: `1973`,
    3581: `1973`,
    3582: `1974`,
    3583: `1974`,
    3584: `1975`,
    3585: `1975`,
    3586: `1976`,
    3587: `1976`,
    3588: `1977`,
    3589: `1978`,
    359: `37`,
    3590: `1990`,
    3591: `1990`,
    3592: `1991`,
    3593: `1991`,
    3594: `1992`,
    3595: `1993`,
    3596: `1993`,
    3597: `1993`,
    3598: `1994`,
    3599: `1994`,
    36: `2`,
    360: `37`,
    3600: `1995`,
    3601: `1995`,
    3602: `1996`,
    3603: `1996`,
    3604: `1997`,
    3605: `1998`,
    3606: `1998`,
    3607: `1998`,
    3608: `1999`,
    3609: `1999`,
    361: `37`,
    3610: `2000`,
    3611: `2000`,
    3612: `2001`,
    3613: `2001`,
    3614: `2002`,
    3615: `2003`,
    3616: `2003`,
    3617: `2003`,
    3618: `2004`,
    3619: `2004`,
    362: `37`,
    3620: `2005`,
    3621: `2006`,
    3622: `2006`,
    3623: `2006`,
    3624: `2007`,
    3625: `2007`,
    3626: `2008`,
    3627: `2009`,
    3628: `2009`,
    3629: `2009`,
    363: `37`,
    3630: `2010`,
    3631: `2010`,
    3632: `2011`,
    3633: `2011`,
    3634: `2012`,
    3635: `2013`,
    3636: `2013`,
    3637: `2013`,
    3638: `2014`,
    3639: `2014`,
    364: `37`,
    3640: `2015`,
    3641: `2016`,
    3642: `2016`,
    3643: `2016`,
    3644: `2017`,
    3645: `2018`,
    3646: `2018`,
    3647: `2018`,
    3648: `2019`,
    3649: `2019`,
    365: `37`,
    3650: `2020`,
    3651: `2021`,
    3652: `2021`,
    3653: `2021`,
    3654: `2022`,
    3655: `2022`,
    3656: `2023`,
    3657: `2023`,
    3658: `2024`,
    3659: `2024`,
    366: `37`,
    3660: `2025`,
    3661: `2026`,
    3662: `2026`,
    3663: `2026`,
    3664: `2027`,
    3665: `2027`,
    3666: `2028`,
    3667: `2029`,
    3668: `2029`,
    3669: `2029`,
    367: `37`,
    3670: `2030`,
    3671: `2030`,
    3672: `2031`,
    3673: `2031`,
    3674: `2032`,
    3675: `2032`,
    3676: `2033`,
    3677: `2034`,
    3678: `2034`,
    3679: `2035`,
    368: `37`,
    3680: `2035`,
    3681: `2036`,
    3682: `2037`,
    3683: `2037`,
    3684: `2038`,
    3685: `2038`,
    3686: `2039`,
    3687: `2040`,
    3688: `2040`,
    3689: `2040`,
    369: `37`,
    3690: `2041`,
    3691: `2041`,
    3692: `2042`,
    3693: `2043`,
    3694: `2043`,
    3695: `2043`,
    3696: `2044`,
    3697: `2044`,
    3698: `2045`,
    3699: `2046`,
    37: `2`,
    370: `37`,
    3700: `2047`,
    3701: `2048`,
    3702: `2048`,
    3703: `2049`,
    3704: `2049`,
    3705: `2049`,
    3706: `2050`,
    3707: `2050`,
    3708: `2051`,
    3709: `2051`,
    371: `37`,
    3710: `2052`,
    3711: `2052`,
    3712: `2052`,
    3713: `2053`,
    3714: `2053`,
    3715: `2054`,
    3716: `2054`,
    3717: `2055`,
    3718: `2055`,
    3719: `2055`,
    372: `37`,
    3720: `2056`,
    3721: `2057`,
    3722: `2058`,
    3723: `2066`,
    3724: `2066`,
    3725: `2067`,
    3726: `2067`,
    3727: `2068`,
    3728: `2069`,
    3729: `2069`,
    373: `37`,
    3730: `2069`,
    3731: `2070`,
    3732: `2070`,
    3733: `2071`,
    3734: `2071`,
    3735: `2072`,
    3736: `2072`,
    3737: `2073`,
    3738: `2074`,
    3739: `2074`,
    374: `37`,
    3740: `2074`,
    3741: `2075`,
    3742: `2075`,
    3743: `2076`,
    3744: `2077`,
    3745: `2077`,
    3746: `2077`,
    3747: `2078`,
    3748: `2078`,
    3749: `2079`,
    375: `37`,
    3750: `2080`,
    3751: `2080`,
    3752: `2080`,
    3753: `2081`,
    3754: `2081`,
    3755: `2082`,
    3756: `2082`,
    3757: `2083`,
    3758: `2083`,
    3759: `2083`,
    376: `37`,
    3760: `2084`,
    3761: `2084`,
    3762: `2085`,
    3763: `2085`,
    3764: `2086`,
    3765: `2086`,
    3766: `2087`,
    3767: `2088`,
    3768: `2088`,
    3769: `2089`,
    377: `37`,
    3770: `2089`,
    3771: `2090`,
    3772: `2091`,
    3773: `2092`,
    3774: `2100`,
    3775: `2100`,
    3776: `2101`,
    3777: `2101`,
    3778: `2102`,
    3779: `2103`,
    378: `37`,
    3780: `2103`,
    3781: `2103`,
    3782: `2104`,
    3783: `2104`,
    3784: `2105`,
    3785: `2105`,
    3786: `2106`,
    3787: `2107`,
    3788: `2107`,
    3789: `2107`,
    379: `37`,
    3790: `2108`,
    3791: `2109`,
    3792: `2117`,
    3793: `2117`,
    3794: `2118`,
    3795: `2118`,
    3796: `2119`,
    3797: `2120`,
    3798: `2120`,
    3799: `2121`,
    38: `2`,
    380: `37`,
    3800: `2121`,
    3801: `2122`,
    3802: `2122`,
    3803: `2123`,
    3804: `2124`,
    3805: `2124`,
    3806: `2125`,
    3807: `2125`,
    3808: `2126`,
    3809: `2126`,
    381: `37`,
    3810: `2126`,
    3811: `2127`,
    3812: `2128`,
    3813: `2128`,
    3814: `2128`,
    3815: `2129`,
    3816: `2129`,
    3817: `2130`,
    3818: `2130`,
    3819: `2131`,
    382: `37`,
    3820: `2132`,
    3821: `2133`,
    3822: `2133`,
    3823: `2134`,
    3824: `2134`,
    3825: `2135`,
    3826: `2135`,
    3827: `2136`,
    3828: `2136`,
    3829: `2137`,
    383: `37`,
    3830: `2137`,
    3831: `2137`,
    3832: `2140`,
    3833: `2140`,
    3834: `2140`,
    3835: `2142`,
    3836: `2142`,
    3837: `2143`,
    3838: `2143`,
    3839: `2143`,
    384: `37`,
    3840: `2144`,
    3841: `2144`,
    3842: `2145`,
    3843: `2145`,
    3844: `2146`,
    3845: `2146`,
    3846: `2146`,
    3847: `2147`,
    3848: `2147`,
    3849: `2148`,
    385: `37`,
    3850: `2148`,
    3851: `2149`,
    3852: `2149`,
    3853: `2149`,
    3854: `2150`,
    3855: `2150`,
    3856: `2151`,
    3857: `2151`,
    3858: `2152`,
    3859: `2152`,
    386: `37`,
    3860: `2152`,
    3861: `2153`,
    3862: `2153`,
    3863: `2154`,
    3864: `2154`,
    3865: `2155`,
    3866: `2155`,
    3867: `2155`,
    3868: `2156`,
    3869: `2156`,
    387: `37`,
    3870: `2157`,
    3871: `2157`,
    3872: `2158`,
    3873: `2158`,
    3874: `2158`,
    3875: `2159`,
    3876: `2159`,
    3877: `2160`,
    3878: `2160`,
    3879: `2161`,
    388: `37`,
    3880: `2161`,
    3881: `2162`,
    3882: `2162`,
    3883: `2163`,
    3884: `2164`,
    3885: `2164`,
    3886: `2164`,
    3887: `2165`,
    3888: `2166`,
    3889: `2166`,
    389: `37`,
    3890: `2166`,
    3891: `2167`,
    3892: `2168`,
    3893: `2168`,
    3894: `2169`,
    3895: `2169`,
    3896: `2170`,
    3897: `2171`,
    3898: `2171`,
    3899: `2171`,
    39: `2`,
    390: `37`,
    3900: `2172`,
    3901: `2172`,
    3902: `2173`,
    3903: `2173`,
    3904: `2174`,
    3905: `2175`,
    3906: `2175`,
    3907: `2175`,
    3908: `2176`,
    3909: `2176`,
    391: `37`,
    3910: `2177`,
    3911: `2178`,
    3912: `2178`,
    3913: `2178`,
    3914: `2179`,
    3915: `2180`,
    3916: `2180`,
    3917: `2180`,
    3918: `2181`,
    3919: `2181`,
    392: `37`,
    3920: `2182`,
    3921: `2182`,
    3922: `2183`,
    3923: `2183`,
    3924: `2184`,
    3925: `2185`,
    3926: `2185`,
    3927: `2185`,
    3928: `2186`,
    3929: `2186`,
    393: `37`,
    3930: `2187`,
    3931: `2187`,
    3932: `2188`,
    3933: `2188`,
    3934: `2189`,
    3935: `2190`,
    3936: `2190`,
    3937: `2190`,
    3938: `2191`,
    3939: `2191`,
    394: `37`,
    3940: `2192`,
    3941: `2193`,
    3942: `2193`,
    3943: `2193`,
    3944: `2194`,
    3945: `2194`,
    3946: `2195`,
    3947: `2196`,
    3948: `2196`,
    3949: `2196`,
    395: `37`,
    3950: `2197`,
    3951: `2197`,
    3952: `2198`,
    3953: `2198`,
    3954: `2199`,
    3955: `2200`,
    3956: `2200`,
    3957: `2200`,
    3958: `2201`,
    3959: `2201`,
    396: `37`,
    3960: `2202`,
    3961: `2203`,
    3962: `2203`,
    3963: `2203`,
    3964: `2204`,
    3965: `2205`,
    3966: `2205`,
    3967: `2205`,
    3968: `2206`,
    3969: `2206`,
    397: `37`,
    3970: `2207`,
    3971: `2208`,
    3972: `2208`,
    3973: `2208`,
    3974: `2209`,
    3975: `2209`,
    3976: `2210`,
    3977: `2210`,
    3978: `2211`,
    3979: `2211`,
    398: `37`,
    3980: `2212`,
    3981: `2213`,
    3982: `2213`,
    3983: `2213`,
    3984: `2214`,
    3985: `2214`,
    3986: `2215`,
    3987: `2216`,
    3988: `2216`,
    3989: `2216`,
    399: `37`,
    3990: `2217`,
    3991: `2217`,
    3992: `2218`,
    3993: `2218`,
    3994: `2219`,
    3995: `2219`,
    3996: `2220`,
    3997: `2221`,
    3998: `2221`,
    3999: `2222`,
    4: `2`,
    40: `2`,
    400: `37`,
    4000: `2222`,
    4001: `2223`,
    4002: `2224`,
    4003: `2224`,
    4004: `2225`,
    4005: `2225`,
    4006: `2226`,
    4007: `2227`,
    4008: `2227`,
    4009: `2227`,
    401: `37`,
    4010: `2228`,
    4011: `2228`,
    4012: `2229`,
    4013: `2230`,
    4014: `2230`,
    4015: `2230`,
    4016: `2231`,
    4017: `2231`,
    4018: `2232`,
    4019: `2233`,
    402: `37`,
    4020: `2234`,
    4021: `2235`,
    4022: `2235`,
    4023: `2236`,
    4024: `2236`,
    4025: `2236`,
    4026: `2237`,
    4027: `2237`,
    4028: `2238`,
    4029: `2238`,
    403: `37`,
    4030: `2239`,
    4031: `2239`,
    4032: `2239`,
    4033: `2240`,
    4034: `2240`,
    4035: `2241`,
    4036: `2241`,
    4037: `2242`,
    4038: `2242`,
    4039: `2242`,
    404: `37`,
    4040: `2243`,
    4041: `2244`,
    4042: `2245`,
    4043: `2253`,
    4044: `2253`,
    4045: `2254`,
    4046: `2254`,
    4047: `2255`,
    4048: `2256`,
    4049: `2256`,
    405: `37`,
    4050: `2256`,
    4051: `2257`,
    4052: `2257`,
    4053: `2258`,
    4054: `2258`,
    4055: `2259`,
    4056: `2259`,
    4057: `2260`,
    4058: `2261`,
    4059: `2261`,
    406: `37`,
    4060: `2261`,
    4061: `2262`,
    4062: `2262`,
    4063: `2263`,
    4064: `2264`,
    4065: `2264`,
    4066: `2264`,
    4067: `2265`,
    4068: `2265`,
    4069: `2266`,
    407: `37`,
    4070: `2266`,
    4071: `2267`,
    4072: `2267`,
    4073: `2267`,
    4074: `2268`,
    4075: `2268`,
    4076: `2269`,
    4077: `2269`,
    4078: `2270`,
    4079: `2270`,
    408: `37`,
    4080: `2270`,
    4081: `2271`,
    4082: `2271`,
    4083: `2272`,
    4084: `2273`,
    4085: `2281`,
    4086: `2281`,
    4087: `2282`,
    4088: `2282`,
    4089: `2283`,
    409: `37`,
    4090: `2284`,
    4091: `2284`,
    4092: `2284`,
    4093: `2285`,
    4094: `2285`,
    4095: `2286`,
    4096: `2286`,
    4097: `2287`,
    4098: `2288`,
    4099: `2288`,
    41: `2`,
    410: `37`,
    4100: `2288`,
    4101: `2289`,
    4102: `2290`,
    4103: `2298`,
    4104: `2298`,
    4105: `2299`,
    4106: `2299`,
    4107: `2300`,
    4108: `2301`,
    4109: `2301`,
    411: `37`,
    4110: `2302`,
    4111: `2302`,
    4112: `2303`,
    4113: `2303`,
    4114: `2304`,
    4115: `2305`,
    4116: `2305`,
    4117: `2306`,
    4118: `2306`,
    4119: `2307`,
    412: `37`,
    4120: `2307`,
    4121: `2307`,
    4122: `2308`,
    4123: `2309`,
    4124: `2309`,
    4125: `2309`,
    4126: `2310`,
    4127: `2310`,
    4128: `2311`,
    4129: `2311`,
    413: `37`,
    4130: `2312`,
    4131: `2313`,
    4132: `2314`,
    4133: `2314`,
    4134: `2315`,
    4135: `2315`,
    4136: `2316`,
    4137: `2316`,
    4138: `2317`,
    4139: `2317`,
    414: `37`,
    4140: `2318`,
    4141: `2318`,
    4142: `2318`,
    4143: `2321`,
    4144: `2321`,
    4145: `2321`,
    4146: `2323`,
    4147: `2323`,
    4148: `2324`,
    4149: `2324`,
    415: `37`,
    4150: `2324`,
    4151: `2325`,
    4152: `2325`,
    4153: `2326`,
    4154: `2326`,
    4155: `2327`,
    4156: `2327`,
    4157: `2327`,
    4158: `2328`,
    4159: `2328`,
    416: `37`,
    4160: `2329`,
    4161: `2329`,
    4162: `2330`,
    4163: `2330`,
    4164: `2330`,
    4165: `2331`,
    4166: `2331`,
    4167: `2332`,
    4168: `2332`,
    4169: `2333`,
    417: `37`,
    4170: `2333`,
    4171: `2333`,
    4172: `2334`,
    4173: `2334`,
    4174: `2335`,
    4175: `2335`,
    4176: `2336`,
    4177: `2336`,
    4178: `2336`,
    4179: `2337`,
    418: `37`,
    4180: `2337`,
    4181: `2338`,
    4182: `2338`,
    4183: `2339`,
    4184: `2339`,
    4185: `2339`,
    4186: `2340`,
    4187: `2340`,
    4188: `2341`,
    4189: `2341`,
    419: `37`,
    4190: `2342`,
    4191: `2342`,
    4192: `2343`,
    4193: `2343`,
    4194: `2344`,
    4195: `2345`,
    4196: `2345`,
    4197: `2345`,
    4198: `2346`,
    4199: `2347`,
    42: `2`,
    420: `37`,
    4200: `2347`,
    4201: `2347`,
    4202: `2348`,
    4203: `2349`,
    4204: `2349`,
    4205: `2350`,
    4206: `2350`,
    4207: `2351`,
    4208: `2352`,
    4209: `2352`,
    421: `37`,
    4210: `2352`,
    4211: `2353`,
    4212: `2353`,
    4213: `2354`,
    4214: `2354`,
    4215: `2355`,
    4216: `2356`,
    4217: `2356`,
    4218: `2356`,
    4219: `2357`,
    422: `37`,
    4220: `2357`,
    4221: `2358`,
    4222: `2359`,
    4223: `2359`,
    4224: `2359`,
    4225: `2360`,
    4226: `2361`,
    4227: `2361`,
    4228: `2361`,
    4229: `2362`,
    423: `37`,
    4230: `2362`,
    4231: `2363`,
    4232: `2363`,
    4233: `2364`,
    4234: `2364`,
    4235: `2365`,
    4236: `2366`,
    4237: `2366`,
    4238: `2366`,
    4239: `2367`,
    424: `37`,
    4240: `2367`,
    4241: `2368`,
    4242: `2368`,
    4243: `2369`,
    4244: `2369`,
    4245: `2370`,
    4246: `2371`,
    4247: `2371`,
    4248: `2371`,
    4249: `2372`,
    425: `37`,
    4250: `2372`,
    4251: `2373`,
    4252: `2374`,
    4253: `2374`,
    4254: `2374`,
    4255: `2375`,
    4256: `2375`,
    4257: `2376`,
    4258: `2377`,
    4259: `2377`,
    426: `37`,
    4260: `2377`,
    4261: `2378`,
    4262: `2378`,
    4263: `2379`,
    4264: `2379`,
    4265: `2380`,
    4266: `2381`,
    4267: `2381`,
    4268: `2381`,
    4269: `2382`,
    427: `37`,
    4270: `2382`,
    4271: `2383`,
    4272: `2384`,
    4273: `2384`,
    4274: `2384`,
    4275: `2385`,
    4276: `2386`,
    4277: `2386`,
    4278: `2386`,
    4279: `2387`,
    428: `37`,
    4280: `2387`,
    4281: `2388`,
    4282: `2389`,
    4283: `2389`,
    4284: `2389`,
    4285: `2390`,
    4286: `2390`,
    4287: `2391`,
    4288: `2391`,
    4289: `2392`,
    429: `37`,
    4290: `2392`,
    4291: `2393`,
    4292: `2394`,
    4293: `2394`,
    4294: `2394`,
    4295: `2395`,
    4296: `2395`,
    4297: `2396`,
    4298: `2397`,
    4299: `2397`,
    43: `2`,
    430: `37`,
    4300: `2397`,
    4301: `2398`,
    4302: `2398`,
    4303: `2399`,
    4304: `2399`,
    4305: `2400`,
    4306: `2400`,
    4307: `2401`,
    4308: `2402`,
    4309: `2402`,
    431: `37`,
    4310: `2403`,
    4311: `2403`,
    4312: `2404`,
    4313: `2405`,
    4314: `2405`,
    4315: `2406`,
    4316: `2406`,
    4317: `2407`,
    4318: `2408`,
    4319: `2408`,
    432: `37`,
    4320: `2408`,
    4321: `2409`,
    4322: `2409`,
    4323: `2410`,
    4324: `2411`,
    4325: `2411`,
    4326: `2411`,
    4327: `2412`,
    4328: `2412`,
    4329: `2413`,
    433: `37`,
    4330: `2414`,
    4331: `2415`,
    4332: `2416`,
    4333: `2416`,
    4334: `2417`,
    4335: `2417`,
    4336: `2417`,
    4337: `2418`,
    4338: `2418`,
    4339: `2419`,
    434: `37`,
    4340: `2419`,
    4341: `2420`,
    4342: `2420`,
    4343: `2420`,
    4344: `2421`,
    4345: `2421`,
    4346: `2422`,
    4347: `2422`,
    4348: `2423`,
    4349: `2423`,
    435: `37`,
    4350: `2423`,
    4351: `2424`,
    4352: `2425`,
    4353: `2426`,
    4354: `2434`,
    4355: `2434`,
    4356: `2435`,
    4357: `2435`,
    4358: `2436`,
    4359: `2437`,
    436: `37`,
    4360: `2437`,
    4361: `2437`,
    4362: `2438`,
    4363: `2438`,
    4364: `2439`,
    4365: `2440`,
    4366: `2440`,
    4367: `2440`,
    4368: `2441`,
    4369: `2441`,
    437: `37`,
    4370: `2442`,
    4371: `2442`,
    4372: `2443`,
    4373: `2443`,
    4374: `2444`,
    4375: `2445`,
    4376: `2445`,
    4377: `2445`,
    4378: `2446`,
    4379: `2446`,
    438: `37`,
    4380: `2447`,
    4381: `2447`,
    4382: `2448`,
    4383: `2448`,
    4384: `2448`,
    4385: `2449`,
    4386: `2449`,
    4387: `2450`,
    4388: `2450`,
    4389: `2451`,
    439: `37`,
    4390: `2451`,
    4391: `2451`,
    4392: `2452`,
    4393: `2452`,
    4394: `2453`,
    4395: `2454`,
    4396: `2462`,
    4397: `2462`,
    4398: `2463`,
    4399: `2463`,
    44: `2`,
    440: `37`,
    4400: `2464`,
    4401: `2465`,
    4402: `2465`,
    4403: `2465`,
    4404: `2466`,
    4405: `2466`,
    4406: `2467`,
    4407: `2467`,
    4408: `2468`,
    4409: `2469`,
    441: `38`,
    4410: `2469`,
    4411: `2469`,
    4412: `2470`,
    4413: `2471`,
    4414: `2479`,
    4415: `2479`,
    4416: `2480`,
    4417: `2480`,
    4418: `2481`,
    4419: `2482`,
    442: `38`,
    4420: `2482`,
    4421: `2483`,
    4422: `2483`,
    4423: `2484`,
    4424: `2484`,
    4425: `2485`,
    4426: `2486`,
    4427: `2486`,
    4428: `2487`,
    4429: `2487`,
    443: `38`,
    4430: `2488`,
    4431: `2488`,
    4432: `2488`,
    4433: `2489`,
    4434: `2490`,
    4435: `2490`,
    4436: `2490`,
    4437: `2491`,
    4438: `2491`,
    4439: `2492`,
    444: `39`,
    4440: `2492`,
    4441: `2493`,
    4442: `2494`,
    4443: `2495`,
    4444: `2495`,
    4445: `2496`,
    4446: `2496`,
    4447: `2497`,
    4448: `2497`,
    4449: `2498`,
    445: `39`,
    4450: `2498`,
    4451: `2499`,
    4452: `2499`,
    4453: `2499`,
    4454: `2502`,
    4455: `2502`,
    4456: `2503`,
    4457: `2503`,
    4458: `2503`,
    4459: `2504`,
    446: `39`,
    4460: `2504`,
    4461: `2505`,
    4462: `2505`,
    4463: `2506`,
    4464: `2506`,
    4465: `2506`,
    4466: `2507`,
    4467: `2507`,
    4468: `2508`,
    4469: `2508`,
    447: `39`,
    4470: `2509`,
    4471: `2509`,
    4472: `2510`,
    4473: `2511`,
    4474: `2517`,
    4475: `2517`,
    4476: `2518`,
    4477: `2518`,
    4478: `2519`,
    4479: `2520`,
    448: `39`,
    4480: `2527`,
    4481: `2527`,
    4482: `2528`,
    4483: `2528`,
    4484: `2529`,
    4485: `2529`,
    4486: `2530`,
    4487: `2530`,
    4488: `2531`,
    4489: `2532`,
    449: `39`,
    4490: `2533`,
    4491: `2534`,
    4492: `2534`,
    4493: `2535`,
    4494: `2535`,
    4495: `2535`,
    4496: `2536`,
    4497: `2536`,
    4498: `2537`,
    4499: `2537`,
    45: `2`,
    450: `39`,
    4500: `2538`,
    4501: `2539`,
    4502: `2539`,
    4503: `2540`,
    4504: `2541`,
    4505: `2541`,
    4506: `2542`,
    4507: `2543`,
    4508: `2545`,
    4509: `2545`,
    451: `39`,
    4510: `2546`,
    4511: `2546`,
    4512: `2547`,
    4513: `2547`,
    4514: `2547`,
    4515: `2547`,
    4516: `2547`,
    4517: `2547`,
    4518: `2547`,
    4519: `2547`,
    452: `39`,
    4520: `2547`,
    4521: `2547`,
    4522: `2548`,
    4523: `2548`,
    4524: `2549`,
    4525: `2550`,
    4526: `2550`,
    4527: `2550`,
    4528: `2551`,
    4529: `2552`,
    453: `39`,
    4530: `2553`,
    4531: `2553`,
    4532: `2554`,
    4533: `2555`,
    4534: `2555`,
    4535: `2555`,
    4536: `2556`,
    4537: `2556`,
    4538: `2557`,
    4539: `2557`,
    454: `39`,
    4540: `2558`,
    4541: `2558`,
    4542: `2559`,
    4543: `2559`,
    4544: `2559`,
    4545: `2562`,
    4546: `2562`,
    4547: `2563`,
    4548: `2563`,
    4549: `2563`,
    455: `39`,
    4550: `2564`,
    4551: `2564`,
    4552: `2565`,
    4553: `2565`,
    4554: `2566`,
    4555: `2566`,
    4556: `2566`,
    4557: `2567`,
    4558: `2567`,
    4559: `2568`,
    456: `39`,
    4560: `2568`,
    4561: `2569`,
    4562: `2569`,
    4563: `2570`,
    4564: `2571`,
    4565: `2577`,
    4566: `2577`,
    4567: `2579`,
    4568: `2580`,
    4569: `2580`,
    457: `39`,
    4570: `2581`,
    4571: `2582`,
    4572: `2582`,
    4573: `2583`,
    4574: `2584`,
    4575: `2584`,
    4576: `2584`,
    4577: `2585`,
    4578: `2585`,
    4579: `2585`,
    458: `39`,
    4580: `2586`,
    4581: `2587`,
    4582: `2587`,
    4583: `2588`,
    4584: `2588`,
    4585: `2589`,
    4586: `2590`,
    4587: `2596`,
    4588: `2596`,
    4589: `2597`,
    459: `39`,
    4590: `2597`,
    4591: `2598`,
    4592: `2598`,
    4593: `2598`,
    4594: `2598`,
    4595: `2598`,
    4596: `2598`,
    4597: `2598`,
    4598: `2598`,
    4599: `2598`,
    46: `2`,
    460: `39`,
    4600: `2598`,
    4601: `2599`,
    4602: `2599`,
    4603: `2600`,
    4604: `2601`,
    4605: `2601`,
    4606: `2601`,
    4607: `2602`,
    4608: `2603`,
    4609: `2604`,
    461: `39`,
    4610: `2604`,
    4611: `2605`,
    4612: `2606`,
    4613: `2606`,
    4614: `2606`,
    4615: `2607`,
    4616: `2607`,
    4617: `2608`,
    4618: `2609`,
    4619: `2610`,
    462: `39`,
    4620: `2610`,
    4621: `2611`,
    4622: `2612`,
    4623: `2612`,
    4624: `2613`,
    4625: `2613`,
    4626: `2614`,
    4627: `2615`,
    4628: `2615`,
    4629: `2615`,
    463: `39`,
    4630: `2616`,
    4631: `2616`,
    4632: `2616`,
    4633: `2618`,
    4634: `2619`,
    4635: `2620`,
    4636: `2620`,
    4637: `2621`,
    4638: `2622`,
    4639: `2622`,
    464: `39`,
    4640: `2623`,
    4641: `2624`,
    4642: `2624`,
    4643: `2625`,
    4644: `2626`,
    4645: `2626`,
    4646: `2627`,
    4647: `2628`,
    4648: `2628`,
    4649: `2628`,
    465: `39`,
    4650: `2629`,
    4651: `2629`,
    4652: `2629`,
    4653: `2630`,
    4654: `2630`,
    4655: `2631`,
    4656: `2632`,
    4657: `2632`,
    4658: `2632`,
    4659: `2633`,
    466: `39`,
    4660: `2633`,
    4661: `2633`,
    4662: `2634`,
    4663: `2634`,
    4664: `2635`,
    4665: `2635`,
    4666: `2636`,
    4667: `2637`,
    4668: `2637`,
    4669: `2638`,
    467: `39`,
    4670: `2639`,
    4671: `2639`,
    4672: `2640`,
    4673: `2641`,
    4674: `2643`,
    4675: `2643`,
    4676: `2644`,
    4677: `2644`,
    4678: `2645`,
    4679: `2645`,
    468: `39`,
    4680: `2645`,
    4681: `2648`,
    4682: `2648`,
    4683: `2649`,
    4684: `2649`,
    4685: `2649`,
    4686: `2650`,
    4687: `2650`,
    4688: `2651`,
    4689: `2651`,
    469: `39`,
    4690: `2652`,
    4691: `2652`,
    4692: `2652`,
    4693: `2653`,
    4694: `2653`,
    4695: `2654`,
    4696: `2654`,
    4697: `2655`,
    4698: `2655`,
    4699: `2655`,
    47: `2`,
    470: `39`,
    4700: `2656`,
    4701: `2656`,
    4702: `2657`,
    4703: `2657`,
    4704: `2658`,
    4705: `2658`,
    4706: `2659`,
    4707: `2660`,
    4708: `2666`,
    4709: `2666`,
    471: `39`,
    4710: `2668`,
    4711: `2669`,
    4712: `2669`,
    4713: `2670`,
    4714: `2671`,
    4715: `2671`,
    4716: `2672`,
    4717: `2673`,
    4718: `2673`,
    4719: `2673`,
    472: `39`,
    4720: `2674`,
    4721: `2674`,
    4722: `2674`,
    4723: `2675`,
    4724: `2676`,
    4725: `2676`,
    4726: `2677`,
    4727: `2677`,
    4728: `2678`,
    4729: `2679`,
    473: `39`,
    4730: `2685`,
    4731: `2685`,
    4732: `2686`,
    4733: `2686`,
    4734: `2687`,
    4735: `2688`,
    4736: `2688`,
    4737: `2689`,
    4738: `2689`,
    4739: `2691`,
    474: `39`,
    4740: `2692`,
    4741: `2692`,
    4742: `2693`,
    4743: `2693`,
    4744: `2694`,
    4745: `2694`,
    4746: `2695`,
    4747: `2696`,
    4748: `2697`,
    4749: `2697`,
    475: `39`,
    4750: `2697`,
    4751: `2698`,
    4752: `2698`,
    4753: `2698`,
    4754: `2699`,
    4755: `2700`,
    4756: `2700`,
    4757: `2701`,
    4758: `2701`,
    4759: `2702`,
    476: `39`,
    4760: `2703`,
    4761: `2709`,
    4762: `2710`,
    4763: `2711`,
    4764: `2711`,
    4765: `2712`,
    4766: `2713`,
    4767: `2713`,
    4768: `2714`,
    4769: `2714`,
    477: `39`,
    4770: `2715`,
    4771: `2716`,
    4772: `2716`,
    4773: `2716`,
    4774: `2717`,
    4775: `2717`,
    4776: `2717`,
    4777: `2719`,
    4778: `2720`,
    4779: `2721`,
    478: `39`,
    4780: `2721`,
    4781: `2722`,
    4782: `2723`,
    4783: `2723`,
    4784: `2724`,
    4785: `2725`,
    4786: `2725`,
    4787: `2726`,
    4788: `2727`,
    4789: `2727`,
    479: `39`,
    4790: `2728`,
    4791: `2729`,
    4792: `2729`,
    4793: `2729`,
    4794: `2730`,
    4795: `2730`,
    4796: `2730`,
    4797: `2731`,
    4798: `2731`,
    4799: `2732`,
    48: `2`,
    480: `39`,
    4800: `2733`,
    4801: `2733`,
    4802: `2733`,
    4803: `2734`,
    4804: `2734`,
    4805: `2734`,
    4806: `2735`,
    4807: `2735`,
    4808: `2736`,
    4809: `2736`,
    481: `39`,
    4810: `2737`,
    4811: `2738`,
    4812: `2738`,
    4813: `2739`,
    4814: `2740`,
    4815: `2740`,
    4816: `2741`,
    4817: `2742`,
    4818: `2744`,
    4819: `2744`,
    482: `39`,
    4820: `2745`,
    4821: `2745`,
    4822: `2746`,
    4823: `2747`,
    4824: `2747`,
    4825: `2747`,
    4826: `2748`,
    4827: `2748`,
    4828: `2749`,
    4829: `2749`,
    483: `39`,
    4830: `2750`,
    4831: `2750`,
    4832: `2751`,
    4833: `2751`,
    4834: `2752`,
    4835: `2753`,
    4836: `2754`,
    4837: `2754`,
    4838: `2755`,
    4839: `2755`,
    484: `39`,
    4840: `2755`,
    4841: `2756`,
    4842: `2756`,
    4843: `2757`,
    4844: `2757`,
    4845: `2758`,
    4846: `2759`,
    4847: `2759`,
    4848: `2760`,
    4849: `2761`,
    485: `39`,
    4850: `2761`,
    4851: `2762`,
    4852: `2763`,
    4853: `2765`,
    4854: `2765`,
    4855: `2766`,
    4856: `2766`,
    4857: `2767`,
    4858: `2767`,
    4859: `2767`,
    486: `39`,
    4860: `2767`,
    4861: `2767`,
    4862: `2767`,
    4863: `2767`,
    4864: `2767`,
    4865: `2767`,
    4866: `2767`,
    4867: `2768`,
    4868: `2768`,
    4869: `2769`,
    487: `39`,
    4870: `2770`,
    4871: `2770`,
    4872: `2770`,
    4873: `2771`,
    4874: `2772`,
    4875: `2773`,
    4876: `2773`,
    4877: `2774`,
    4878: `2775`,
    4879: `2775`,
    488: `39`,
    4880: `2775`,
    4881: `2776`,
    4882: `2776`,
    4883: `2777`,
    4884: `2777`,
    4885: `2778`,
    4886: `2778`,
    4887: `2779`,
    4888: `2779`,
    4889: `2779`,
    489: `39`,
    4890: `2782`,
    4891: `2782`,
    4892: `2783`,
    4893: `2783`,
    4894: `2783`,
    4895: `2784`,
    4896: `2784`,
    4897: `2785`,
    4898: `2785`,
    4899: `2785`,
    49: `2`,
    490: `39`,
    4900: `2786`,
    4901: `2787`,
    4902: `2787`,
    4903: `2789`,
    4904: `2790`,
    4905: `2790`,
    4906: `2791`,
    4907: `2791`,
    4908: `2792`,
    4909: `2792`,
    491: `39`,
    4910: `2793`,
    4911: `2794`,
    4912: `2795`,
    4913: `2795`,
    4914: `2795`,
    4915: `2796`,
    4916: `2797`,
    4917: `2798`,
    4918: `2798`,
    4919: `2799`,
    492: `39`,
    4920: `2800`,
    4921: `2805`,
    4922: `2805`,
    4923: `2806`,
    4924: `2806`,
    4925: `2807`,
    4926: `2807`,
    4927: `2808`,
    4928: `2809`,
    4929: `2810`,
    493: `39`,
    4930: `2810`,
    4931: `2811`,
    4932: `2811`,
    4933: `2811`,
    4934: `2812`,
    4935: `2813`,
    4936: `2813`,
    4937: `2814`,
    4938: `2814`,
    4939: `2814`,
    494: `39`,
    4940: `2814`,
    4941: `2814`,
    4942: `2814`,
    4943: `2814`,
    4944: `2814`,
    4945: `2814`,
    4946: `2814`,
    4947: `2815`,
    4948: `2815`,
    4949: `2816`,
    495: `39`,
    4950: `2817`,
    4951: `2818`,
    4952: `2818`,
    4953: `2819`,
    4954: `2819`,
    4955: `2820`,
    4956: `2820`,
    4957: `2821`,
    4958: `2821`,
    4959: `2822`,
    496: `39`,
    4960: `2822`,
    4961: `2822`,
    4962: `2825`,
    4963: `2825`,
    4964: `2826`,
    4965: `2826`,
    4966: `2826`,
    4967: `2827`,
    4968: `2827`,
    4969: `2829`,
    497: `39`,
    4970: `2830`,
    4971: `2830`,
    4972: `2831`,
    4973: `2832`,
    4974: `2832`,
    4975: `2833`,
    4976: `2834`,
    4977: `2834`,
    4978: `2834`,
    4979: `2835`,
    498: `39`,
    4980: `2836`,
    4981: `2837`,
    4982: `2837`,
    4983: `2838`,
    4984: `2839`,
    4985: `2845`,
    4986: `2846`,
    4987: `2846`,
    4988: `2847`,
    4989: `2848`,
    499: `39`,
    4990: `2848`,
    4991: `2849`,
    4992: `2850`,
    4993: `2850`,
    4994: `2850`,
    4995: `2851`,
    4996: `2852`,
    4997: `2853`,
    4998: `2853`,
    4999: `2854`,
    5: `2`,
    50: `2`,
    500: `39`,
    5000: `2855`,
    5001: `2861`,
    5002: `2862`,
    5003: `2862`,
    5004: `2863`,
    5005: `2864`,
    5006: `2864`,
    5007: `2865`,
    5008: `2866`,
    5009: `2866`,
    501: `39`,
    5010: `2866`,
    5011: `2867`,
    5012: `2868`,
    5013: `2869`,
    5014: `2869`,
    5015: `2870`,
    5016: `2871`,
    5017: `2876`,
    5018: `2877`,
    5019: `2878`,
    502: `39`,
    5020: `2878`,
    5021: `2879`,
    5022: `2880`,
    5023: `2880`,
    5024: `2881`,
    5025: `2881`,
    5026: `2881`,
    5027: `2882`,
    5028: `2883`,
    5029: `2884`,
    503: `39`,
    5030: `2884`,
    5031: `2885`,
    5032: `2886`,
    5033: `2886`,
    5034: `2887`,
    5035: `2887`,
    5036: `2887`,
    5037: `2888`,
    5038: `2889`,
    5039: `2890`,
    504: `41`,
    5040: `2890`,
    5041: `2891`,
    5042: `2892`,
    5043: `2892`,
    5044: `2893`,
    5045: `2893`,
    5046: `2893`,
    5047: `2894`,
    5048: `2895`,
    5049: `2895`,
    505: `46`,
    5050: `2896`,
    5051: `2896`,
    5052: `2896`,
    5053: `2896`,
    5054: `2896`,
    5055: `2896`,
    5056: `2896`,
    5057: `2896`,
    5058: `2896`,
    5059: `2896`,
    506: `46`,
    5060: `2897`,
    5061: `2897`,
    5062: `2898`,
    5063: `2899`,
    5064: `2900`,
    5065: `2900`,
    5066: `2901`,
    5067: `2901`,
    5068: `2902`,
    5069: `2902`,
    507: `47`,
    5070: `2903`,
    5071: `2903`,
    5072: `2904`,
    5073: `2904`,
    5074: `2904`,
    5075: `2907`,
    5076: `2907`,
    5077: `2908`,
    5078: `2909`,
    5079: `2910`,
    508: `48`,
    5080: `2910`,
    5081: `2910`,
    5082: `2911`,
    5083: `2911`,
    5084: `2912`,
    5085: `2912`,
    5086: `2913`,
    5087: `2914`,
    5088: `2917`,
    5089: `2917`,
    509: `49`,
    5090: `2917`,
    5091: `2918`,
    5092: `2918`,
    5093: `2920`,
    5094: `2921`,
    5095: `2921`,
    5096: `2922`,
    5097: `2922`,
    5098: `2923`,
    5099: `2923`,
    51: `2`,
    510: `49`,
    5100: `2924`,
    5101: `2924`,
    5102: `2925`,
    5103: `2926`,
    5104: `2927`,
    5105: `2928`,
    5106: `2928`,
    5107: `2928`,
    5108: `2929`,
    5109: `2929`,
    511: `49`,
    5110: `2929`,
    5111: `2930`,
    5112: `2930`,
    5113: `2931`,
    5114: `2931`,
    5115: `2931`,
    5116: `2934`,
    5117: `2935`,
    5118: `2936`,
    5119: `2936`,
    512: `50`,
    5120: `2936`,
    5121: `2937`,
    5122: `2937`,
    5123: `2938`,
    5124: `2938`,
    5125: `2939`,
    5126: `2940`,
    5127: `2941`,
    5128: `2941`,
    5129: `2942`,
    513: `50`,
    5130: `2943`,
    5131: `2944`,
    5132: `2945`,
    5133: `2945`,
    5134: `2946`,
    5135: `2946`,
    5136: `2946`,
    5137: `2949`,
    5138: `2949`,
    5139: `2950`,
    514: `51`,
    5140: `2951`,
    5141: `2952`,
    5142: `2952`,
    5143: `2952`,
    5144: `2953`,
    5145: `2953`,
    5146: `2954`,
    5147: `2954`,
    5148: `2955`,
    5149: `2956`,
    515: `51`,
    5150: `2959`,
    5151: `2959`,
    5152: `2959`,
    5153: `2960`,
    5154: `2960`,
    5155: `2962`,
    5156: `2963`,
    5157: `2963`,
    5158: `2964`,
    5159: `2965`,
    516: `52`,
    5160: `2965`,
    5161: `2966`,
    5162: `2967`,
    5163: `2967`,
    5164: `2967`,
    5165: `2968`,
    5166: `2968`,
    5167: `2968`,
    5168: `2969`,
    5169: `2969`,
    517: `53`,
    5170: `2970`,
    5171: `2970`,
    5172: `2970`,
    5173: `2973`,
    5174: `2973`,
    5175: `2974`,
    5176: `2975`,
    5177: `2976`,
    5178: `2976`,
    5179: `2976`,
    518: `56`,
    5180: `2977`,
    5181: `2977`,
    5182: `2978`,
    5183: `2978`,
    5184: `2979`,
    5185: `2980`,
    5186: `2983`,
    5187: `2983`,
    5188: `2983`,
    5189: `2984`,
    519: `56`,
    5190: `2984`,
    5191: `2985`,
    5192: `2986`,
    5193: `2986`,
    5194: `2987`,
    5195: `2987`,
    5196: `2987`,
    5197: `2990`,
    5198: `2990`,
    5199: `2991`,
    52: `2`,
    520: `56`,
    5200: `2992`,
    5201: `2993`,
    5202: `2993`,
    5203: `2993`,
    5204: `2994`,
    5205: `2994`,
    5206: `2995`,
    5207: `2995`,
    5208: `2996`,
    5209: `2997`,
    521: `57`,
    5210: `3000`,
    5211: `3000`,
    5212: `3000`,
    5213: `3001`,
    5214: `3001`,
    5215: `3002`,
    5216: `3002`,
    5217: `3002`,
    5218: `3003`,
    5219: `3004`,
    522: `57`,
    5220: `3004`,
    5221: `3005`,
    5222: `3005`,
    5223: `3006`,
    5224: `3006`,
    5225: `3006`,
    5226: `3009`,
    5227: `3009`,
    5228: `3010`,
    5229: `3011`,
    523: `58`,
    5230: `3012`,
    5231: `3012`,
    5232: `3012`,
    5233: `3013`,
    5234: `3013`,
    5235: `3014`,
    5236: `3014`,
    5237: `3015`,
    5238: `3016`,
    5239: `3019`,
    524: `58`,
    5240: `3019`,
    5241: `3019`,
    5242: `3020`,
    5243: `3020`,
    5244: `3021`,
    5245: `3021`,
    5246: `3021`,
    5247: `3022`,
    5248: `3023`,
    5249: `3023`,
    525: `58`,
    5250: `3024`,
    5251: `3024`,
    5252: `3025`,
    5253: `3025`,
    5254: `3025`,
    5255: `3028`,
    5256: `3028`,
    5257: `3029`,
    5258: `3030`,
    5259: `3031`,
    526: `59`,
    5260: `3031`,
    5261: `3031`,
    5262: `3032`,
    5263: `3032`,
    5264: `3033`,
    5265: `3033`,
    5266: `3034`,
    5267: `3035`,
    5268: `3038`,
    5269: `3038`,
    527: `59`,
    5270: `3038`,
    5271: `3039`,
    5272: `3039`,
    5273: `3040`,
    5274: `3040`,
    5275: `3041`,
    5276: `3041`,
    5277: `3041`,
    5278: `3044`,
    5279: `3045`,
    528: `60`,
    5280: `3046`,
    5281: `3046`,
    5282: `3046`,
    5283: `3047`,
    5284: `3047`,
    5285: `3048`,
    5286: `3048`,
    5287: `3049`,
    5288: `3050`,
    5289: `3051`,
    529: `60`,
    5290: `3051`,
    5291: `3052`,
    5292: `3053`,
    5293: `3054`,
    5294: `3055`,
    5295: `3055`,
    5296: `3056`,
    5297: `3056`,
    5298: `3056`,
    5299: `3059`,
    53: `2`,
    530: `60`,
    5300: `3060`,
    5301: `3061`,
    5302: `3061`,
    5303: `3061`,
    5304: `3062`,
    5305: `3062`,
    5306: `3063`,
    5307: `3063`,
    5308: `3064`,
    5309: `3065`,
    531: `61`,
    5310: `3065`,
    5311: `3066`,
    5312: `3067`,
    5313: `3068`,
    5314: `3068`,
    5315: `3069`,
    5316: `3070`,
    5317: `3071`,
    5318: `3072`,
    5319: `3072`,
    532: `62`,
    5320: `3073`,
    5321: `3073`,
    5322: `3073`,
    5323: `3076`,
    5324: `3077`,
    5325: `3078`,
    5326: `3078`,
    5327: `3078`,
    5328: `3079`,
    5329: `3079`,
    533: `62`,
    5330: `3080`,
    5331: `3080`,
    5332: `3081`,
    5333: `3082`,
    5334: `3083`,
    5335: `3083`,
    5336: `3084`,
    5337: `3085`,
    5338: `3086`,
    5339: `3087`,
    534: `63`,
    5340: `3087`,
    5341: `3088`,
    5342: `3088`,
    5343: `3088`,
    5344: `3091`,
    5345: `3092`,
    5346: `3093`,
    5347: `3093`,
    5348: `3093`,
    5349: `3094`,
    535: `63`,
    5350: `3094`,
    5351: `3095`,
    5352: `3096`,
    5353: `3096`,
    5354: `3097`,
    5355: `3098`,
    5356: `3099`,
    5357: `3100`,
    5358: `3100`,
    5359: `3101`,
    536: `63`,
    5360: `3101`,
    5361: `3101`,
    5362: `3104`,
    5363: `3104`,
    5364: `3105`,
    5365: `3106`,
    5366: `3107`,
    5367: `3107`,
    5368: `3107`,
    5369: `3108`,
    537: `64`,
    5370: `3108`,
    5371: `3109`,
    5372: `3109`,
    5373: `3110`,
    5374: `3111`,
    5375: `3114`,
    5376: `3114`,
    5377: `3114`,
    5378: `3115`,
    5379: `3115`,
    538: `65`,
    5380: `3116`,
    5381: `3117`,
    5382: `3117`,
    5383: `3118`,
    5384: `3119`,
    5385: `3120`,
    5386: `3120`,
    5387: `3120`,
    5388: `3120`,
    5389: `3120`,
    539: `65`,
    5390: `3120`,
    5391: `3120`,
    5392: `3120`,
    5393: `3120`,
    5394: `3120`,
    5395: `3121`,
    5396: `3121`,
    5397: `3121`,
    5398: `3124`,
    5399: `3124`,
    54: `2`,
    540: `66`,
    5400: `3125`,
    5401: `3126`,
    5402: `3127`,
    5403: `3127`,
    5404: `3127`,
    5405: `3128`,
    5406: `3128`,
    5407: `3129`,
    5408: `3129`,
    5409: `3130`,
    541: `66`,
    5410: `3131`,
    5411: `3134`,
    5412: `3134`,
    5413: `3134`,
    5414: `3135`,
    5415: `3135`,
    5416: `3136`,
    5417: `3136`,
    5418: `3137`,
    5419: `3137`,
    542: `66`,
    5420: `3139`,
    5421: `3140`,
    5422: `3140`,
    5423: `3141`,
    5424: `3142`,
    5425: `3142`,
    5426: `3143`,
    5427: `3144`,
    5428: `3144`,
    5429: `3144`,
    543: `67`,
    5430: `3145`,
    5431: `3145`,
    5432: `3145`,
    5433: `3146`,
    5434: `3146`,
    5435: `3148`,
    5436: `3149`,
    5437: `3149`,
    5438: `3150`,
    5439: `3151`,
    544: `68`,
    5440: `3151`,
    5441: `3152`,
    5442: `3153`,
    5443: `3153`,
    5444: `3153`,
    5445: `3154`,
    5446: `3154`,
    5447: `3154`,
    5448: `3155`,
    5449: `3156`,
    545: `68`,
    5450: `3156`,
    5451: `3157`,
    5452: `3157`,
    5453: `3157`,
    5454: `3160`,
    5455: `3160`,
    5456: `3161`,
    5457: `3162`,
    5458: `3163`,
    5459: `3163`,
    546: `69`,
    5460: `3164`,
    5461: `3164`,
    5462: `3165`,
    5463: `3165`,
    5464: `3165`,
    5465: `3166`,
    5466: `3166`,
    5467: `3167`,
    5468: `3167`,
    5469: `3167`,
    547: `70`,
    5470: `3167`,
    5471: `3167`,
    5472: `3167`,
    5473: `3168`,
    5474: `3168`,
    5475: `3169`,
    5476: `3170`,
    5477: `3171`,
    5478: `3171`,
    5479: `3172`,
    548: `71`,
    5480: `3173`,
    5481: `3175`,
    5482: `3175`,
    5483: `3176`,
    5484: `3176`,
    5485: `3176`,
    5486: `3177`,
    5487: `3177`,
    5488: `3178`,
    5489: `3178`,
    549: `71`,
    5490: `3178`,
    5491: `3179`,
    5492: `3180`,
    5493: `3180`,
    5494: `3181`,
    5495: `3182`,
    5496: `3183`,
    5497: `3183`,
    5498: `3184`,
    5499: `3184`,
    55: `2`,
    550: `72`,
    5500: `3185`,
    5501: `3185`,
    5502: `3186`,
    5503: `3187`,
    5504: `3187`,
    5505: `3188`,
    5506: `3188`,
    5507: `3189`,
    5508: `3190`,
    5509: `3191`,
    551: `73`,
    5510: `3191`,
    5511: `3192`,
    5512: `3193`,
    5513: `3194`,
    5514: `3195`,
    5515: `3200`,
    5516: `3200`,
    5517: `3201`,
    5518: `3201`,
    5519: `3201`,
    552: `74`,
    5520: `3202`,
    5521: `3203`,
    5522: `3203`,
    5523: `3204`,
    5524: `3205`,
    5525: `3206`,
    5526: `3207`,
    5527: `3207`,
    5528: `3208`,
    5529: `3208`,
    553: `74`,
    5530: `3208`,
    5531: `3209`,
    5532: `3210`,
    5533: `3215`,
    5534: `3215`,
    5535: `3216`,
    5536: `3216`,
    5537: `3216`,
    5538: `3217`,
    5539: `3217`,
    554: `76`,
    5540: `3218`,
    5541: `3219`,
    5542: `3219`,
    5543: `3220`,
    5544: `3220`,
    5545: `3221`,
    5546: `3221`,
    5547: `3222`,
    5548: `3222`,
    5549: `3222`,
    555: `76`,
    5550: `3223`,
    5551: `3224`,
    5552: `3225`,
    5553: `3225`,
    5554: `3226`,
    5555: `3226`,
    5556: `3227`,
    5557: `3228`,
    5558: `3228`,
    5559: `3229`,
    556: `77`,
    5560: `3230`,
    5561: `3230`,
    5562: `3231`,
    5563: `3232`,
    5564: `3232`,
    5565: `3233`,
    5566: `3234`,
    5567: `3235`,
    5568: `3235`,
    5569: `3236`,
    557: `78`,
    5570: `3237`,
    5571: `3238`,
    5572: `3238`,
    5573: `3239`,
    5574: `3239`,
    5575: `3240`,
    5576: `3240`,
    5577: `3241`,
    5578: `3241`,
    5579: `3242`,
    558: `79`,
    5580: `3243`,
    5581: `3245`,
    5582: `3245`,
    5583: `3246`,
    5584: `3246`,
    5585: `3246`,
    5586: `3246`,
    5587: `3246`,
    5588: `3246`,
    5589: `3247`,
    559: `82`,
    5590: `3247`,
    5591: `3248`,
    5592: `3248`,
    5593: `3249`,
    5594: `3250`,
    5595: `3250`,
    5596: `3251`,
    5597: `3251`,
    5598: `3252`,
    5599: `3253`,
    56: `2`,
    560: `82`,
    5600: `3253`,
    5601: `3254`,
    5602: `3254`,
    5603: `3255`,
    5604: `3256`,
    5605: `3256`,
    5606: `3257`,
    5607: `3260`,
    5608: `3260`,
    5609: `3261`,
    561: `82`,
    5610: `3262`,
    5611: `3262`,
    5612: `3263`,
    5613: `3264`,
    5614: `3264`,
    5615: `3265`,
    5616: `3266`,
    5617: `3267`,
    5618: `3268`,
    5619: `3268`,
    562: `82`,
    5620: `3268`,
    5621: `3269`,
    5622: `3269`,
    5623: `3269`,
    5624: `3270`,
    5625: `3271`,
    5626: `3271`,
    5627: `3272`,
    5628: `3272`,
    5629: `3272`,
    563: `82`,
    5630: `3272`,
    5631: `3272`,
    5632: `3272`,
    5633: `3272`,
    5634: `3272`,
    5635: `3272`,
    5636: `3272`,
    5637: `3273`,
    5638: `3273`,
    5639: `3274`,
    564: `82`,
    5640: `3275`,
    5641: `3276`,
    5642: `3276`,
    5643: `3277`,
    5644: `3278`,
    5645: `3278`,
    5646: `3279`,
    5647: `3280`,
    5648: `3281`,
    5649: `3281`,
    565: `83`,
    5650: `3282`,
    5651: `3282`,
    5652: `3283`,
    5653: `3283`,
    5654: `3283`,
    5655: `3284`,
    5656: `3285`,
    5657: `3285`,
    5658: `3286`,
    5659: `3286`,
    566: `83`,
    5660: `3286`,
    5661: `3287`,
    5662: `3287`,
    5663: `3288`,
    5664: `3288`,
    5665: `3289`,
    5666: `3289`,
    5667: `3289`,
    5668: `3290`,
    5669: `3290`,
    567: `84`,
    5670: `3291`,
    5671: `3291`,
    5672: `3292`,
    5673: `3292`,
    5674: `3292`,
    5675: `3293`,
    5676: `3293`,
    5677: `3294`,
    5678: `3294`,
    5679: `3295`,
    568: `85`,
    5680: `3295`,
    5681: `3296`,
    5682: `3297`,
    5683: `3297`,
    5684: `3298`,
    5685: `3298`,
    5686: `3299`,
    5687: `3300`,
    5688: `3301`,
    5689: `3301`,
    569: `87`,
    5690: `3301`,
    5691: `3302`,
    5692: `3302`,
    5693: `3303`,
    5694: `3303`,
    5695: `3304`,
    5696: `3304`,
    5697: `3305`,
    5698: `3306`,
    5699: `3306`,
    57: `2`,
    570: `87`,
    5700: `3306`,
    5701: `3307`,
    5702: `3308`,
    5703: `3308`,
    5704: `3310`,
    5705: `3310`,
    5706: `3311`,
    5707: `3311`,
    5708: `3312`,
    5709: `3312`,
    571: `88`,
    5710: `3313`,
    5711: `3314`,
    5712: `3315`,
    5713: `3315`,
    5714: `3316`,
    5715: `3316`,
    5716: `3317`,
    5717: `3318`,
    5718: `3319`,
    5719: `3322`,
    572: `93`,
    5720: `3323`,
    5721: `3323`,
    5722: `3324`,
    5723: `3325`,
    5724: `3328`,
    5725: `3328`,
    5726: `3329`,
    5727: `3329`,
    5728: `3331`,
    5729: `3332`,
    573: `94`,
    5730: `3333`,
    5731: `3333`,
    5732: `3334`,
    5733: `3335`,
    5734: `3335`,
    5735: `3336`,
    5736: `3336`,
    5737: `3336`,
    5738: `3338`,
    5739: `3339`,
    574: `95`,
    5740: `3340`,
    5741: `3340`,
    5742: `3341`,
    5743: `3342`,
    5744: `3342`,
    5745: `3343`,
    5746: `3343`,
    5747: `3343`,
    5748: `3344`,
    5749: `3344`,
    575: `95`,
    5750: `3345`,
    5751: `3345`,
    5752: `3346`,
    5753: `3346`,
    5754: `3347`,
    5755: `3347`,
    5756: `3348`,
    5757: `3349`,
    5758: `3349`,
    5759: `3350`,
    576: `98`,
    5760: `3351`,
    5761: `3351`,
    5762: `3352`,
    5763: `3353`,
    5764: `3355`,
    5765: `3355`,
    5766: `3356`,
    5767: `3357`,
    5768: `3357`,
    5769: `3358`,
    577: `98`,
    5770: `3358`,
    5771: `3358`,
    5772: `3358`,
    5773: `3358`,
    5774: `3358`,
    5775: `3358`,
    5776: `3358`,
    5777: `3358`,
    5778: `3358`,
    5779: `3358`,
    578: `99`,
    5780: `3358`,
    5781: `3358`,
    5782: `3358`,
    5783: `3358`,
    5784: `3358`,
    5785: `3358`,
    5786: `3358`,
    5787: `3358`,
    5788: `3358`,
    5789: `3358`,
    579: `99`,
    5790: `3358`,
    5791: `3358`,
    5792: `3358`,
    5793: `3358`,
    5794: `3358`,
    5795: `3358`,
    5796: `3358`,
    5797: `3358`,
    5798: `3358`,
    5799: `3358`,
    58: `2`,
    580: `100`,
    5800: `3358`,
    5801: `3358`,
    5802: `3358`,
    5803: `3358`,
    5804: `3358`,
    5805: `3358`,
    5806: `3358`,
    5807: `3358`,
    5808: `3358`,
    5809: `3358`,
    581: `101`,
    5810: `3358`,
    5811: `3358`,
    5812: `3358`,
    5813: `3358`,
    5814: `3358`,
    5815: `3358`,
    5816: `3358`,
    5817: `3358`,
    5818: `3358`,
    5819: `3358`,
    582: `102`,
    5820: `3358`,
    5821: `3358`,
    5822: `3358`,
    5823: `3358`,
    5824: `3358`,
    5825: `3358`,
    5826: `3358`,
    5827: `3358`,
    5828: `3358`,
    5829: `3358`,
    583: `102`,
    5830: `3358`,
    5831: `3358`,
    5832: `3358`,
    5833: `3358`,
    5834: `3358`,
    5835: `3358`,
    5836: `3359`,
    5837: `3359`,
    5838: `3360`,
    5839: `3361`,
    584: `102`,
    5840: `3361`,
    5841: `3362`,
    5842: `3363`,
    5843: `3363`,
    5844: `3364`,
    5845: `3364`,
    5846: `3365`,
    5847: `3366`,
    5848: `3366`,
    5849: `3367`,
    585: `103`,
    5850: `3368`,
    5851: `3368`,
    5852: `3369`,
    5853: `3369`,
    5854: `3369`,
    5855: `3370`,
    5856: `3371`,
    5857: `3371`,
    5858: `3372`,
    5859: `3372`,
    586: `103`,
    5860: `3372`,
    5861: `3373`,
    5862: `3374`,
    5863: `3375`,
    5864: `3375`,
    5865: `3376`,
    5866: `3376`,
    5867: `3377`,
    5868: `3377`,
    5869: `3378`,
    587: `104`,
    5870: `3378`,
    5871: `3379`,
    5872: `3379`,
    5873: `3380`,
    5874: `3380`,
    5875: `3380`,
    5876: `3382`,
    5877: `3382`,
    5878: `3382`,
    5879: `3383`,
    588: `105`,
    5880: `3383`,
    5881: `3383`,
    5882: `3383`,
    5883: `3384`,
    5884: `3384`,
    5885: `3384`,
    5886: `3386`,
    5887: `3387`,
    5888: `3388`,
    5889: `3388`,
    589: `106`,
    5890: `3389`,
    5891: `3389`,
    5892: `3390`,
    5893: `3390`,
    5894: `3392`,
    5895: `3392`,
    5896: `3392`,
    5897: `3392`,
    5898: `3392`,
    5899: `3392`,
    59: `2`,
    590: `106`,
    5900: `3392`,
    5901: `3392`,
    5902: `3393`,
    5903: `3393`,
    5904: `3394`,
    5905: `3394`,
    5906: `3395`,
    5907: `3395`,
    5908: `3396`,
    5909: `3398`,
    591: `107`,
    5910: `3398`,
    5911: `3399`,
    5912: `3399`,
    5913: `3401`,
    5914: `3401`,
    5915: `3401`,
    5916: `3402`,
    5917: `3402`,
    5918: `3403`,
    5919: `3403`,
    592: `107`,
    5920: `3403`,
    5921: `3405`,
    5922: `3405`,
    5923: `3405`,
    5924: `3407`,
    5925: `3407`,
    5926: `3407`,
    5927: `3408`,
    5928: `3408`,
    5929: `3409`,
    593: `107`,
    5930: `3409`,
    5931: `3409`,
    5932: `3411`,
    5933: `3411`,
    5934: `3411`,
    5935: `3413`,
    5936: `3413`,
    5937: `3413`,
    5938: `3414`,
    5939: `3414`,
    594: `107`,
    5940: `3415`,
    5941: `3415`,
    5942: `3415`,
    5943: `3417`,
    5944: `3418`,
    5945: `3418`,
    5946: `3419`,
    5947: `3420`,
    5948: `3421`,
    5949: `3421`,
    595: `107`,
    5950: `3422`,
    5951: `3422`,
    5952: `3423`,
    5953: `3424`,
    5954: `3425`,
    5955: `3426`,
    5956: `3426`,
    5957: `3427`,
    5958: `3428`,
    5959: `3429`,
    596: `107`,
    5960: `3430`,
    5961: `3430`,
    5962: `3431`,
    5963: `3432`,
    5964: `3433`,
    5965: `3434`,
    5966: `3434`,
    5967: `3435`,
    5968: `3435`,
    5969: `3435`,
    597: `108`,
    5970: `3436`,
    5971: `3436`,
    5972: `3436`,
    5973: `3437`,
    5974: `3438`,
    5975: `3439`,
    5976: `3440`,
    5977: `3440`,
    5978: `3440`,
    5979: `3443`,
    598: `108`,
    5980: `3443`,
    5981: `3443`,
    5982: `3444`,
    5983: `3444`,
    5984: `3444`,
    5985: `3445`,
    5986: `3445`,
    5987: `3446`,
    5988: `3446`,
    5989: `3447`,
    599: `109`,
    5990: `3447`,
    5991: `3447`,
    5992: `3450`,
    5993: `3450`,
    5994: `3450`,
    5995: `3451`,
    5996: `3451`,
    5997: `3451`,
    5998: `3452`,
    5999: `3452`,
    6: `2`,
    60: `2`,
    600: `110`,
    6000: `3453`,
    6001: `3453`,
    6002: `3454`,
    6003: `3454`,
    6004: `3454`,
    6005: `3457`,
    6006: `3457`,
    6007: `3457`,
    6008: `3458`,
    6009: `3458`,
    601: `111`,
    6010: `3459`,
    6011: `3459`,
    6012: `3459`,
    6013: `3462`,
    6014: `3462`,
    6015: `3462`,
    6016: `3465`,
    6017: `3465`,
    6018: `3465`,
    6019: `3468`,
    602: `113`,
    6020: `3468`,
    6021: `3468`,
    6022: `3471`,
    6023: `3471`,
    6024: `3471`,
    6025: `3474`,
    6026: `3474`,
    6027: `3474`,
    6028: `3475`,
    6029: `3475`,
    603: `113`,
    6030: `3475`,
    6031: `3476`,
    6032: `3476`,
    6033: `3476`,
    6034: `3477`,
    6035: `3477`,
    6036: `3478`,
    6037: `3478`,
    6038: `3479`,
    6039: `3479`,
    604: `114`,
    6040: `3480`,
    6041: `3480`,
    6042: `3480`,
    6043: `3483`,
    6044: `3483`,
    6045: `3483`,
    6046: `3484`,
    6047: `3484`,
    6048: `3484`,
    6049: `3485`,
    605: `114`,
    6050: `3485`,
    6051: `3486`,
    6052: `3486`,
    6053: `3487`,
    6054: `3487`,
    6055: `3487`,
    6056: `3490`,
    6057: `3490`,
    6058: `3490`,
    6059: `3491`,
    606: `114`,
    6060: `3491`,
    6061: `3491`,
    6062: `3492`,
    6063: `3492`,
    6064: `3493`,
    6065: `3493`,
    6066: `3494`,
    6067: `3494`,
    6068: `3494`,
    6069: `3497`,
    607: `117`,
    6070: `3497`,
    6071: `3497`,
    6072: `3498`,
    6073: `3498`,
    6074: `3499`,
    6075: `3499`,
    6076: `3499`,
    6077: `3502`,
    6078: `3502`,
    6079: `3502`,
    608: `118`,
    6080: `3503`,
    6081: `3503`,
    6082: `3504`,
    6083: `3504`,
    6084: `3504`,
    6085: `3506`,
    6086: `3506`,
    6087: `3507`,
    6088: `3508`,
    6089: `3509`,
    609: `118`,
    6090: `3512`,
    6091: `3512`,
    6092: `3512`,
    6093: `3513`,
    6094: `3513`,
    6095: `3514`,
    6096: `3514`,
    6097: `3514`,
    6098: `3515`,
    6099: `3516`,
    61: `2`,
    610: `119`,
    6100: `3516`,
    6101: `3517`,
    6102: `3517`,
    6103: `3518`,
    6104: `3518`,
    6105: `3518`,
    6106: `3520`,
    6107: `3520`,
    6108: `3521`,
    6109: `3522`,
    611: `119`,
    6110: `3523`,
    6111: `3526`,
    6112: `3526`,
    6113: `3526`,
    6114: `3527`,
    6115: `3527`,
    6116: `3528`,
    6117: `3528`,
    6118: `3528`,
    6119: `3529`,
    612: `119`,
    6120: `3530`,
    6121: `3530`,
    6122: `3531`,
    6123: `3531`,
    6124: `3532`,
    6125: `3532`,
    6126: `3532`,
    6127: `3534`,
    6128: `3534`,
    6129: `3535`,
    613: `119`,
    6130: `3536`,
    6131: `3537`,
    6132: `3540`,
    6133: `3540`,
    6134: `3540`,
    6135: `3541`,
    6136: `3541`,
    6137: `3542`,
    6138: `3542`,
    6139: `3543`,
    614: `119`,
    6140: `3543`,
    6141: `3543`,
    6142: `3545`,
    6143: `3545`,
    6144: `3546`,
    6145: `3547`,
    6146: `3548`,
    6147: `3551`,
    6148: `3551`,
    6149: `3551`,
    615: `119`,
    6150: `3552`,
    6151: `3552`,
    6152: `3553`,
    6153: `3554`,
    6154: `3554`,
    6155: `3555`,
    6156: `3556`,
    6157: `3557`,
    6158: `3557`,
    6159: `3557`,
    616: `119`,
    6160: `3557`,
    6161: `3557`,
    6162: `3557`,
    6163: `3557`,
    6164: `3557`,
    6165: `3557`,
    6166: `3557`,
    6167: `3558`,
    6168: `3558`,
    6169: `3558`,
    617: `119`,
    6170: `3560`,
    6171: `3560`,
    6172: `3561`,
    6173: `3562`,
    6174: `3562`,
    6175: `3562`,
    6176: `3563`,
    6177: `3563`,
    6178: `3564`,
    6179: `3564`,
    618: `119`,
    6180: `3564`,
    6181: `3567`,
    6182: `3568`,
    6183: `3568`,
    6184: `3569`,
    6185: `3569`,
    6186: `3570`,
    6187: `3570`,
    6188: `3571`,
    6189: `3571`,
    619: `119`,
    6190: `3571`,
    6191: `3572`,
    6192: `3573`,
    6193: `3574`,
    6194: `3574`,
    6195: `3574`,
    6196: `3575`,
    6197: `3576`,
    6198: `3577`,
    6199: `3577`,
    62: `2`,
    620: `120`,
    6200: `3578`,
    6201: `3579`,
    6202: `3579`,
    6203: `3580`,
    6204: `3580`,
    6205: `3580`,
    6206: `3583`,
    6207: `3584`,
    6208: `3584`,
    6209: `3585`,
    621: `120`,
    6210: `3586`,
    6211: `3586`,
    6212: `3587`,
    6213: `3587`,
    6214: `3587`,
    6215: `3588`,
    6216: `3589`,
    6217: `3589`,
    6218: `3589`,
    6219: `3590`,
    622: `121`,
    6220: `3591`,
    6221: `3592`,
    6222: `3592`,
    6223: `3593`,
    6224: `3594`,
    6225: `3594`,
    6226: `3595`,
    6227: `3595`,
    6228: `3595`,
    6229: `3598`,
    623: `122`,
    6230: `3599`,
    6231: `3599`,
    6232: `3600`,
    6233: `3601`,
    6234: `3601`,
    6235: `3602`,
    6236: `3602`,
    6237: `3602`,
    6238: `3603`,
    6239: `3604`,
    624: `123`,
    6240: `3604`,
    6241: `3604`,
    6242: `3605`,
    6243: `3606`,
    6244: `3607`,
    6245: `3607`,
    6246: `3608`,
    6247: `3609`,
    6248: `3609`,
    6249: `3610`,
    625: `123`,
    6250: `3610`,
    6251: `3610`,
    6252: `3613`,
    6253: `3614`,
    6254: `3614`,
    6255: `3615`,
    6256: `3616`,
    6257: `3616`,
    6258: `3617`,
    6259: `3617`,
    626: `124`,
    6260: `3617`,
    6261: `3618`,
    6262: `3619`,
    6263: `3619`,
    6264: `3619`,
    6265: `3620`,
    6266: `3621`,
    6267: `3622`,
    6268: `3622`,
    6269: `3623`,
    627: `124`,
    6270: `3624`,
    6271: `3624`,
    6272: `3625`,
    6273: `3625`,
    6274: `3625`,
    6275: `3627`,
    6276: `3627`,
    6277: `3628`,
    6278: `3629`,
    6279: `3629`,
    628: `127`,
    6280: `3629`,
    6281: `3630`,
    6282: `3630`,
    6283: `3631`,
    6284: `3631`,
    6285: `3631`,
    6286: `3634`,
    6287: `3635`,
    6288: `3635`,
    6289: `3636`,
    629: `127`,
    6290: `3636`,
    6291: `3637`,
    6292: `3637`,
    6293: `3638`,
    6294: `3638`,
    6295: `3638`,
    6296: `3639`,
    6297: `3640`,
    6298: `3641`,
    6299: `3641`,
    63: `2`,
    630: `128`,
    6300: `3641`,
    6301: `3642`,
    6302: `3643`,
    6303: `3644`,
    6304: `3644`,
    6305: `3645`,
    6306: `3646`,
    6307: `3646`,
    6308: `3647`,
    6309: `3647`,
    631: `128`,
    6310: `3647`,
    6311: `3650`,
    6312: `3651`,
    6313: `3651`,
    6314: `3652`,
    6315: `3653`,
    6316: `3653`,
    6317: `3654`,
    6318: `3654`,
    6319: `3654`,
    632: `129`,
    6320: `3655`,
    6321: `3656`,
    6322: `3656`,
    6323: `3656`,
    6324: `3657`,
    6325: `3658`,
    6326: `3659`,
    6327: `3659`,
    6328: `3660`,
    6329: `3661`,
    633: `130`,
    6330: `3661`,
    6331: `3662`,
    6332: `3662`,
    6333: `3662`,
    6334: `3665`,
    6335: `3666`,
    6336: `3666`,
    6337: `3667`,
    6338: `3668`,
    6339: `3668`,
    634: `133`,
    6340: `3669`,
    6341: `3669`,
    6342: `3669`,
    6343: `3670`,
    6344: `3671`,
    6345: `3671`,
    6346: `3671`,
    6347: `3672`,
    6348: `3673`,
    6349: `3674`,
    635: `134`,
    6350: `3674`,
    6351: `3675`,
    6352: `3676`,
    6353: `3676`,
    6354: `3677`,
    6355: `3677`,
    6356: `3677`,
    6357: `3680`,
    6358: `3681`,
    6359: `3681`,
    636: `135`,
    6360: `3682`,
    6361: `3683`,
    6362: `3683`,
    6363: `3684`,
    6364: `3684`,
    6365: `3684`,
    6366: `3685`,
    6367: `3686`,
    6368: `3686`,
    6369: `3686`,
    637: `135`,
    6370: `3687`,
    6371: `3688`,
    6372: `3689`,
    6373: `3689`,
    6374: `3690`,
    6375: `3691`,
    6376: `3691`,
    6377: `3692`,
    6378: `3692`,
    6379: `3692`,
    638: `136`,
    6380: `3694`,
    6381: `3694`,
    6382: `3695`,
    6383: `3696`,
    6384: `3697`,
    6385: `3700`,
    6386: `3700`,
    6387: `3700`,
    6388: `3701`,
    6389: `3701`,
    639: `136`,
    6390: `3702`,
    6391: `3702`,
    6392: `3703`,
    6393: `3703`,
    6394: `3705`,
    6395: `3706`,
    6396: `3706`,
    6397: `3707`,
    6398: `3708`,
    6399: `3708`,
    64: `2`,
    640: `137`,
    6400: `3709`,
    6401: `3710`,
    6402: `3710`,
    6403: `3710`,
    6404: `3711`,
    6405: `3711`,
    6406: `3711`,
    6407: `3712`,
    6408: `3712`,
    6409: `3714`,
    641: `137`,
    6410: `3715`,
    6411: `3715`,
    6412: `3716`,
    6413: `3717`,
    6414: `3717`,
    6415: `3718`,
    6416: `3719`,
    6417: `3719`,
    6418: `3719`,
    6419: `3720`,
    642: `138`,
    6420: `3720`,
    6421: `3720`,
    6422: `3721`,
    6423: `3722`,
    6424: `3722`,
    6425: `3723`,
    6426: `3723`,
    6427: `3723`,
    6428: `3725`,
    6429: `3726`,
    643: `138`,
    6430: `3726`,
    6431: `3727`,
    6432: `3727`,
    6433: `3727`,
    6434: `3729`,
    6435: `3729`,
    6436: `3730`,
    6437: `3731`,
    6438: `3732`,
    6439: `3735`,
    644: `139`,
    6440: `3735`,
    6441: `3735`,
    6442: `3736`,
    6443: `3736`,
    6444: `3737`,
    6445: `3737`,
    6446: `3737`,
    6447: `3738`,
    6448: `3738`,
    6449: `3739`,
    645: `139`,
    6450: `3739`,
    6451: `3739`,
    6452: `3740`,
    6453: `3741`,
    6454: `3741`,
    6455: `3742`,
    6456: `3742`,
    6457: `3742`,
    6458: `3743`,
    6459: `3744`,
    646: `140`,
    6460: `3744`,
    6461: `3745`,
    6462: `3745`,
    6463: `3745`,
    6464: `3746`,
    6465: `3747`,
    6466: `3747`,
    6467: `3748`,
    6468: `3749`,
    6469: `3750`,
    647: `140`,
    6470: `3750`,
    6471: `3751`,
    6472: `3752`,
    6473: `3753`,
    6474: `3753`,
    6475: `3754`,
    6476: `3754`,
    6477: `3754`,
    6478: `3756`,
    6479: `3756`,
    648: `141`,
    6480: `3757`,
    6481: `3757`,
    6482: `3757`,
    6483: `3758`,
    6484: `3758`,
    6485: `3759`,
    6486: `3759`,
    6487: `3759`,
    6488: `3761`,
    6489: `3761`,
    649: `141`,
    6490: `3762`,
    6491: `3762`,
    6492: `3762`,
    6493: `3763`,
    6494: `3763`,
    6495: `3764`,
    6496: `3764`,
    6497: `3764`,
    6498: `3766`,
    6499: `3766`,
    65: `2`,
    650: `142`,
    6500: `3766`,
    6501: `3768`,
    6502: `3768`,
    6503: `3768`,
    6504: `3770`,
    6505: `3770`,
    6506: `3771`,
    6507: `3771`,
    6508: `3771`,
    6509: `3772`,
    651: `144`,
    6510: `3772`,
    6511: `3773`,
    6512: `3773`,
    6513: `3773`,
    6514: `3775`,
    6515: `3775`,
    6516: `3775`,
    6517: `3777`,
    6518: `3777`,
    6519: `3777`,
    652: `144`,
    6520: `3779`,
    6521: `3779`,
    6522: `3780`,
    6523: `3780`,
    6524: `3780`,
    6525: `3781`,
    6526: `3781`,
    6527: `3782`,
    6528: `3782`,
    6529: `3782`,
    653: `144`,
    6530: `3784`,
    6531: `3784`,
    6532: `3785`,
    6533: `3785`,
    6534: `3785`,
    6535: `3786`,
    6536: `3786`,
    6537: `3787`,
    6538: `3787`,
    6539: `3787`,
    654: `144`,
    6540: `3789`,
    6541: `3789`,
    6542: `3790`,
    6543: `3790`,
    6544: `3790`,
    6545: `3791`,
    6546: `3791`,
    6547: `3792`,
    6548: `3792`,
    6549: `3792`,
    655: `146`,
    6550: `3794`,
    6551: `3794`,
    6552: `3795`,
    6553: `3795`,
    6554: `3795`,
    6555: `3796`,
    6556: `3796`,
    6557: `3797`,
    6558: `3797`,
    6559: `3797`,
    656: `146`,
    6560: `3799`,
    6561: `3799`,
    6562: `3800`,
    6563: `3800`,
    6564: `3800`,
    6565: `3801`,
    6566: `3801`,
    6567: `3802`,
    6568: `3802`,
    6569: `3802`,
    657: `147`,
    6570: `3804`,
    6571: `3804`,
    6572: `3805`,
    6573: `3805`,
    6574: `3805`,
    6575: `3806`,
    6576: `3806`,
    6577: `3807`,
    6578: `3807`,
    6579: `3807`,
    658: `148`,
    6580: `3809`,
    6581: `3809`,
    6582: `3810`,
    6583: `3810`,
    6584: `3810`,
    6585: `3811`,
    6586: `3811`,
    6587: `3812`,
    6588: `3812`,
    6589: `3812`,
    659: `148`,
    6590: `3814`,
    6591: `3814`,
    6592: `3815`,
    6593: `3815`,
    6594: `3815`,
    6595: `3816`,
    6596: `3816`,
    6597: `3817`,
    6598: `3817`,
    6599: `3817`,
    66: `2`,
    660: `149`,
    6600: `3819`,
    6601: `3819`,
    6602: `3819`,
    6603: `3821`,
    6604: `3822`,
    6605: `3822`,
    6606: `3823`,
    6607: `3823`,
    6608: `3823`,
    6609: `3825`,
    661: `149`,
    6610: `3825`,
    6611: `3826`,
    6612: `3826`,
    6613: `3827`,
    6614: `3828`,
    6615: `3828`,
    6616: `3828`,
    6617: `3829`,
    6618: `3829`,
    6619: `3830`,
    662: `149`,
    6620: `3830`,
    6621: `3830`,
    6622: `3831`,
    6623: `3832`,
    6624: `3832`,
    6625: `3832`,
    6626: `3833`,
    6627: `3833`,
    6628: `3834`,
    6629: `3834`,
    663: `151`,
    6630: `3835`,
    6631: `3835`,
    6632: `3836`,
    6633: `3837`,
    6634: `3837`,
    6635: `3837`,
    6636: `3838`,
    6637: `3838`,
    6638: `3839`,
    6639: `3839`,
    664: `152`,
    6640: `3839`,
    6641: `3840`,
    6642: `3841`,
    6643: `3841`,
    6644: `3841`,
    6645: `3842`,
    6646: `3843`,
    6647: `3843`,
    6648: `3844`,
    6649: `3844`,
    665: `152`,
    6650: `3845`,
    6651: `3846`,
    6652: `3846`,
    6653: `3847`,
    6654: `3848`,
    6655: `3849`,
    6656: `3849`,
    6657: `3850`,
    6658: `3850`,
    6659: `3850`,
    666: `153`,
    6660: `3852`,
    6661: `3852`,
    6662: `3853`,
    6663: `3853`,
    6664: `3854`,
    6665: `3855`,
    6666: `3856`,
    6667: `3857`,
    6668: `3857`,
    6669: `3858`,
    667: `153`,
    6670: `3858`,
    6671: `3859`,
    6672: `3860`,
    6673: `3860`,
    6674: `3861`,
    6675: `3862`,
    6676: `3862`,
    6677: `3863`,
    6678: `3864`,
    6679: `3864`,
    668: `154`,
    6680: `3865`,
    6681: `3866`,
    6682: `3867`,
    6683: `3867`,
    6684: `3868`,
    6685: `3869`,
    6686: `3870`,
    6687: `3870`,
    6688: `3871`,
    6689: `3871`,
    669: `154`,
    6690: `3872`,
    6691: `3872`,
    6692: `3873`,
    6693: `3873`,
    6694: `3875`,
    6695: `3875`,
    6696: `3876`,
    6697: `3876`,
    6698: `3877`,
    6699: `3877`,
    67: `2`,
    670: `154`,
    6700: `3878`,
    6701: `3878`,
    6702: `3879`,
    6703: `3880`,
    6704: `3880`,
    6705: `3881`,
    6706: `3881`,
    6707: `3882`,
    6708: `3882`,
    6709: `3884`,
    671: `156`,
    6710: `3885`,
    6711: `3885`,
    6712: `3886`,
    6713: `3886`,
    6714: `3887`,
    6715: `3887`,
    6716: `3888`,
    6717: `3888`,
    6718: `3892`,
    6719: `3892`,
    672: `156`,
    6720: `3893`,
    6721: `3893`,
    6722: `3894`,
    6723: `3900`,
    6724: `3900`,
    6725: `3901`,
    6726: `3902`,
    6727: `3902`,
    6728: `3903`,
    6729: `3904`,
    673: `157`,
    6730: `3904`,
    6731: `3905`,
    6732: `3906`,
    6733: `3907`,
    6734: `3908`,
    6735: `3908`,
    6736: `3908`,
    6737: `3909`,
    6738: `3909`,
    6739: `3909`,
    674: `157`,
    6740: `3910`,
    6741: `3911`,
    6742: `3911`,
    6743: `3912`,
    6744: `3912`,
    6745: `3912`,
    6746: `3912`,
    6747: `3912`,
    6748: `3912`,
    6749: `3912`,
    675: `157`,
    6750: `3912`,
    6751: `3912`,
    6752: `3912`,
    6753: `3913`,
    6754: `3913`,
    6755: `3914`,
    6756: `3915`,
    6757: `3916`,
    6758: `3916`,
    6759: `3917`,
    676: `158`,
    6760: `3918`,
    6761: `3918`,
    6762: `3919`,
    6763: `3920`,
    6764: `3921`,
    6765: `3921`,
    6766: `3922`,
    6767: `3923`,
    6768: `3923`,
    6769: `3924`,
    677: `158`,
    6770: `3925`,
    6771: `3932`,
    6772: `3933`,
    6773: `3934`,
    6774: `3934`,
    6775: `3935`,
    6776: `3936`,
    6777: `3936`,
    6778: `3937`,
    6779: `3938`,
    678: `158`,
    6780: `3938`,
    6781: `3939`,
    6782: `3940`,
    6783: `3940`,
    6784: `3941`,
    6785: `3942`,
    6786: `3942`,
    6787: `3942`,
    6788: `3943`,
    6789: `3943`,
    679: `161`,
    6790: `3943`,
    6791: `3944`,
    6792: `3944`,
    6793: `3945`,
    6794: `3946`,
    6795: `3946`,
    6796: `3946`,
    6797: `3947`,
    6798: `3947`,
    6799: `3947`,
    68: `2`,
    680: `161`,
    6800: `3949`,
    6801: `3950`,
    6802: `3951`,
    6803: `3951`,
    6804: `3952`,
    6805: `3953`,
    6806: `3953`,
    6807: `3954`,
    6808: `3955`,
    6809: `3955`,
    681: `161`,
    6810: `3956`,
    6811: `3957`,
    6812: `3957`,
    6813: `3958`,
    6814: `3959`,
    6815: `3959`,
    6816: `3959`,
    6817: `3960`,
    6818: `3960`,
    6819: `3960`,
    682: `162`,
    6820: `3961`,
    6821: `3961`,
    6822: `3962`,
    6823: `3963`,
    6824: `3963`,
    6825: `3963`,
    6826: `3964`,
    6827: `3964`,
    6828: `3964`,
    6829: `3965`,
    683: `162`,
    6830: `3965`,
    6831: `3966`,
    6832: `3966`,
    6833: `3967`,
    6834: `3968`,
    6835: `3969`,
    6836: `3969`,
    6837: `3970`,
    6838: `3970`,
    6839: `3971`,
    684: `162`,
    6840: `3971`,
    6841: `3972`,
    6842: `3972`,
    6843: `3973`,
    6844: `3973`,
    6845: `3974`,
    6846: `3975`,
    6847: `3976`,
    6848: `3976`,
    6849: `3977`,
    685: `163`,
    6850: `3978`,
    6851: `3978`,
    6852: `3979`,
    6853: `3980`,
    6854: `3980`,
    6855: `3981`,
    6856: `3981`,
    6857: `3982`,
    6858: `3982`,
    6859: `3983`,
    686: `163`,
    6860: `3984`,
    6861: `3986`,
    6862: `3986`,
    6863: `3987`,
    6864: `3987`,
    6865: `3987`,
    6866: `3988`,
    6867: `3988`,
    6868: `3989`,
    6869: `3990`,
    687: `164`,
    6870: `3990`,
    6871: `3991`,
    6872: `3992`,
    6873: `3992`,
    6874: `3993`,
    6875: `3993`,
    6876: `3993`,
    6877: `3994`,
    6878: `3994`,
    6879: `3995`,
    688: `164`,
    6880: `3996`,
    6881: `3996`,
    6882: `3996`,
    6883: `3997`,
    6884: `3997`,
    6885: `3998`,
    6886: `3998`,
    6887: `3998`,
    6888: `3999`,
    6889: `3999`,
    689: `167`,
    6890: `4000`,
    6891: `4001`,
    6892: `4001`,
    6893: `4001`,
    6894: `4002`,
    6895: `4003`,
    6896: `4004`,
    6897: `4004`,
    6898: `4005`,
    6899: `4006`,
    69: `2`,
    690: `168`,
    6900: `4006`,
    6901: `4007`,
    6902: `4007`,
    6903: `4008`,
    6904: `4008`,
    6905: `4009`,
    6906: `4010`,
    6907: `4010`,
    6908: `4011`,
    6909: `4011`,
    691: `169`,
    6910: `4012`,
    6911: `4012`,
    6912: `4013`,
    6913: `4013`,
    6914: `4013`,
    6915: `4015`,
    6916: `4015`,
    6917: `4016`,
    6918: `4016`,
    6919: `4017`,
    692: `170`,
    6920: `4018`,
    6921: `4019`,
    6922: `4020`,
    6923: `4020`,
    6924: `4021`,
    6925: `4021`,
    6926: `4022`,
    6927: `4023`,
    6928: `4023`,
    6929: `4024`,
    693: `170`,
    6930: `4025`,
    6931: `4025`,
    6932: `4026`,
    6933: `4027`,
    6934: `4027`,
    6935: `4028`,
    6936: `4029`,
    6937: `4030`,
    6938: `4030`,
    6939: `4031`,
    694: `171`,
    6940: `4032`,
    6941: `4033`,
    6942: `4033`,
    6943: `4034`,
    6944: `4034`,
    6945: `4035`,
    6946: `4035`,
    6947: `4036`,
    6948: `4036`,
    6949: `4038`,
    695: `171`,
    6950: `4038`,
    6951: `4039`,
    6952: `4039`,
    6953: `4040`,
    6954: `4040`,
    6955: `4041`,
    6956: `4041`,
    6957: `4042`,
    6958: `4043`,
    6959: `4043`,
    696: `172`,
    6960: `4044`,
    6961: `4044`,
    6962: `4045`,
    6963: `4045`,
    6964: `4047`,
    6965: `4048`,
    6966: `4048`,
    6967: `4049`,
    6968: `4049`,
    6969: `4050`,
    697: `173`,
    6970: `4050`,
    6971: `4051`,
    6972: `4051`,
    6973: `4055`,
    6974: `4055`,
    6975: `4056`,
    6976: `4056`,
    6977: `4057`,
    6978: `4063`,
    6979: `4063`,
    698: `174`,
    6980: `4064`,
    6981: `4065`,
    6982: `4065`,
    6983: `4066`,
    6984: `4067`,
    6985: `4067`,
    6986: `4068`,
    6987: `4069`,
    6988: `4070`,
    6989: `4071`,
    699: `175`,
    6990: `4071`,
    6991: `4071`,
    6992: `4072`,
    6993: `4072`,
    6994: `4072`,
    6995: `4073`,
    6996: `4074`,
    6997: `4074`,
    6998: `4075`,
    6999: `4075`,
    7: `2`,
    70: `2`,
    700: `175`,
    7000: `4075`,
    7001: `4075`,
    7002: `4075`,
    7003: `4075`,
    7004: `4075`,
    7005: `4075`,
    7006: `4075`,
    7007: `4075`,
    7008: `4076`,
    7009: `4076`,
    701: `178`,
    7010: `4077`,
    7011: `4078`,
    7012: `4079`,
    7013: `4079`,
    7014: `4080`,
    7015: `4081`,
    7016: `4081`,
    7017: `4082`,
    7018: `4083`,
    7019: `4084`,
    702: `179`,
    7020: `4084`,
    7021: `4085`,
    7022: `4086`,
    7023: `4086`,
    7024: `4087`,
    7025: `4088`,
    7026: `4095`,
    7027: `4096`,
    7028: `4097`,
    7029: `4097`,
    703: `179`,
    7030: `4098`,
    7031: `4099`,
    7032: `4099`,
    7033: `4100`,
    7034: `4101`,
    7035: `4101`,
    7036: `4102`,
    7037: `4103`,
    7038: `4103`,
    7039: `4104`,
    704: `180`,
    7040: `4105`,
    7041: `4105`,
    7042: `4105`,
    7043: `4106`,
    7044: `4106`,
    7045: `4106`,
    7046: `4107`,
    7047: `4107`,
    7048: `4108`,
    7049: `4109`,
    705: `181`,
    7050: `4109`,
    7051: `4109`,
    7052: `4110`,
    7053: `4110`,
    7054: `4110`,
    7055: `4112`,
    7056: `4113`,
    7057: `4114`,
    7058: `4114`,
    7059: `4115`,
    706: `182`,
    7060: `4116`,
    7061: `4116`,
    7062: `4117`,
    7063: `4118`,
    7064: `4118`,
    7065: `4119`,
    7066: `4120`,
    7067: `4120`,
    7068: `4121`,
    7069: `4122`,
    707: `182`,
    7070: `4122`,
    7071: `4122`,
    7072: `4123`,
    7073: `4123`,
    7074: `4123`,
    7075: `4124`,
    7076: `4124`,
    7077: `4125`,
    7078: `4126`,
    7079: `4126`,
    708: `182`,
    7080: `4126`,
    7081: `4127`,
    7082: `4127`,
    7083: `4127`,
    7084: `4128`,
    7085: `4128`,
    7086: `4129`,
    7087: `4129`,
    7088: `4130`,
    7089: `4131`,
    709: `183`,
    7090: `4132`,
    7091: `4132`,
    7092: `4133`,
    7093: `4133`,
    7094: `4134`,
    7095: `4134`,
    7096: `4135`,
    7097: `4135`,
    7098: `4136`,
    7099: `4136`,
    71: `2`,
    710: `183`,
    7100: `4137`,
    7101: `4138`,
    7102: `4139`,
    7103: `4139`,
    7104: `4140`,
    7105: `4141`,
    7106: `4141`,
    7107: `4142`,
    7108: `4143`,
    7109: `4143`,
    711: `184`,
    7110: `4144`,
    7111: `4144`,
    7112: `4145`,
    7113: `4145`,
    7114: `4146`,
    7115: `4147`,
    7116: `4149`,
    7117: `4149`,
    7118: `4150`,
    7119: `4150`,
    712: `185`,
    7120: `4150`,
    7121: `4151`,
    7122: `4151`,
    7123: `4152`,
    7124: `4153`,
    7125: `4153`,
    7126: `4154`,
    7127: `4155`,
    7128: `4155`,
    7129: `4156`,
    713: `186`,
    7130: `4156`,
    7131: `4156`,
    7132: `4157`,
    7133: `4157`,
    7134: `4158`,
    7135: `4159`,
    7136: `4159`,
    7137: `4159`,
    7138: `4160`,
    7139: `4160`,
    714: `186`,
    7140: `4161`,
    7141: `4161`,
    7142: `4161`,
    7143: `4162`,
    7144: `4162`,
    7145: `4163`,
    7146: `4164`,
    7147: `4164`,
    7148: `4164`,
    7149: `4165`,
    715: `187`,
    7150: `4166`,
    7151: `4167`,
    7152: `4167`,
    7153: `4168`,
    7154: `4169`,
    7155: `4169`,
    7156: `4170`,
    7157: `4170`,
    7158: `4171`,
    7159: `4171`,
    716: `187`,
    7160: `4172`,
    7161: `4173`,
    7162: `4173`,
    7163: `4174`,
    7164: `4174`,
    7165: `4175`,
    7166: `4175`,
    7167: `4176`,
    7168: `4176`,
    7169: `4176`,
    717: `188`,
    7170: `4178`,
    7171: `4178`,
    7172: `4179`,
    7173: `4179`,
    7174: `4180`,
    7175: `4181`,
    7176: `4182`,
    7177: `4183`,
    7178: `4183`,
    7179: `4184`,
    718: `188`,
    7180: `4184`,
    7181: `4185`,
    7182: `4186`,
    7183: `4186`,
    7184: `4187`,
    7185: `4188`,
    7186: `4188`,
    7187: `4189`,
    7188: `4190`,
    7189: `4190`,
    719: `188`,
    7190: `4191`,
    7191: `4192`,
    7192: `4193`,
    7193: `4193`,
    7194: `4194`,
    7195: `4195`,
    7196: `4196`,
    7197: `4196`,
    7198: `4197`,
    7199: `4197`,
    72: `2`,
    720: `189`,
    7200: `4198`,
    7201: `4198`,
    7202: `4199`,
    7203: `4199`,
    7204: `4201`,
    7205: `4201`,
    7206: `4202`,
    7207: `4202`,
    7208: `4203`,
    7209: `4203`,
    721: `189`,
    7210: `4204`,
    7211: `4204`,
    7212: `4205`,
    7213: `4206`,
    7214: `4206`,
    7215: `4207`,
    7216: `4207`,
    7217: `4208`,
    7218: `4208`,
    7219: `4210`,
    722: `190`,
    7220: `4211`,
    7221: `4211`,
    7222: `4212`,
    7223: `4212`,
    7224: `4213`,
    7225: `4213`,
    7226: `4214`,
    7227: `4214`,
    7228: `4218`,
    7229: `4218`,
    723: `190`,
    7230: `4219`,
    7231: `4219`,
    7232: `4220`,
    7233: `4226`,
    7234: `4226`,
    7235: `4227`,
    7236: `4228`,
    7237: `4228`,
    7238: `4229`,
    7239: `4230`,
    724: `190`,
    7240: `4230`,
    7241: `4231`,
    7242: `4232`,
    7243: `4233`,
    7244: `4234`,
    7245: `4234`,
    7246: `4234`,
    7247: `4235`,
    7248: `4235`,
    7249: `4235`,
    725: `190`,
    7250: `4236`,
    7251: `4237`,
    7252: `4237`,
    7253: `4238`,
    7254: `4238`,
    7255: `4238`,
    7256: `4238`,
    7257: `4238`,
    7258: `4238`,
    7259: `4238`,
    726: `190`,
    7260: `4238`,
    7261: `4238`,
    7262: `4238`,
    7263: `4239`,
    7264: `4239`,
    7265: `4240`,
    7266: `4241`,
    7267: `4242`,
    7268: `4242`,
    7269: `4243`,
    727: `190`,
    7270: `4244`,
    7271: `4244`,
    7272: `4245`,
    7273: `4246`,
    7274: `4247`,
    7275: `4247`,
    7276: `4248`,
    7277: `4249`,
    7278: `4249`,
    7279: `4250`,
    728: `191`,
    7280: `4251`,
    7281: `4258`,
    7282: `4259`,
    7283: `4260`,
    7284: `4260`,
    7285: `4261`,
    7286: `4262`,
    7287: `4262`,
    7288: `4263`,
    7289: `4264`,
    729: `191`,
    7290: `4264`,
    7291: `4265`,
    7292: `4266`,
    7293: `4266`,
    7294: `4267`,
    7295: `4268`,
    7296: `4268`,
    7297: `4268`,
    7298: `4269`,
    7299: `4269`,
    73: `2`,
    730: `192`,
    7300: `4269`,
    7301: `4270`,
    7302: `4270`,
    7303: `4271`,
    7304: `4272`,
    7305: `4272`,
    7306: `4272`,
    7307: `4273`,
    7308: `4273`,
    7309: `4273`,
    731: `193`,
    7310: `4275`,
    7311: `4276`,
    7312: `4277`,
    7313: `4277`,
    7314: `4278`,
    7315: `4279`,
    7316: `4279`,
    7317: `4280`,
    7318: `4281`,
    7319: `4281`,
    732: `194`,
    7320: `4282`,
    7321: `4283`,
    7322: `4283`,
    7323: `4284`,
    7324: `4285`,
    7325: `4285`,
    7326: `4285`,
    7327: `4286`,
    7328: `4286`,
    7329: `4286`,
    733: `194`,
    7330: `4287`,
    7331: `4287`,
    7332: `4287`,
    7333: `4288`,
    7334: `4288`,
    7335: `4289`,
    7336: `4289`,
    7337: `4290`,
    7338: `4291`,
    7339: `4292`,
    734: `195`,
    7340: `4292`,
    7341: `4293`,
    7342: `4293`,
    7343: `4294`,
    7344: `4294`,
    7345: `4295`,
    7346: `4295`,
    7347: `4296`,
    7348: `4296`,
    7349: `4297`,
    735: `196`,
    7350: `4298`,
    7351: `4299`,
    7352: `4299`,
    7353: `4300`,
    7354: `4301`,
    7355: `4301`,
    7356: `4302`,
    7357: `4303`,
    7358: `4303`,
    7359: `4304`,
    736: `198`,
    7360: `4304`,
    7361: `4305`,
    7362: `4305`,
    7363: `4306`,
    7364: `4307`,
    7365: `4309`,
    7366: `4309`,
    7367: `4310`,
    7368: `4310`,
    7369: `4310`,
    737: `198`,
    7370: `4311`,
    7371: `4311`,
    7372: `4312`,
    7373: `4313`,
    7374: `4313`,
    7375: `4314`,
    7376: `4315`,
    7377: `4315`,
    7378: `4316`,
    7379: `4316`,
    738: `199`,
    7380: `4316`,
    7381: `4317`,
    7382: `4317`,
    7383: `4318`,
    7384: `4319`,
    7385: `4319`,
    7386: `4319`,
    7387: `4320`,
    7388: `4320`,
    7389: `4321`,
    739: `199`,
    7390: `4321`,
    7391: `4321`,
    7392: `4322`,
    7393: `4322`,
    7394: `4323`,
    7395: `4324`,
    7396: `4324`,
    7397: `4324`,
    7398: `4325`,
    7399: `4326`,
    74: `2`,
    740: `199`,
    7400: `4327`,
    7401: `4327`,
    7402: `4328`,
    7403: `4329`,
    7404: `4329`,
    7405: `4330`,
    7406: `4330`,
    7407: `4331`,
    7408: `4331`,
    7409: `4332`,
    741: `200`,
    7410: `4333`,
    7411: `4333`,
    7412: `4334`,
    7413: `4334`,
    7414: `4335`,
    7415: `4335`,
    7416: `4336`,
    7417: `4336`,
    7418: `4336`,
    7419: `4338`,
    742: `200`,
    7420: `4338`,
    7421: `4339`,
    7422: `4339`,
    7423: `4340`,
    7424: `4341`,
    7425: `4342`,
    7426: `4343`,
    7427: `4343`,
    7428: `4344`,
    7429: `4344`,
    743: `201`,
    7430: `4345`,
    7431: `4346`,
    7432: `4346`,
    7433: `4347`,
    7434: `4348`,
    7435: `4348`,
    7436: `4349`,
    7437: `4350`,
    7438: `4350`,
    7439: `4351`,
    744: `202`,
    7440: `4352`,
    7441: `4353`,
    7442: `4353`,
    7443: `4354`,
    7444: `4355`,
    7445: `4356`,
    7446: `4356`,
    7447: `4357`,
    7448: `4357`,
    7449: `4358`,
    745: `203`,
    7450: `4358`,
    7451: `4359`,
    7452: `4359`,
    7453: `4361`,
    7454: `4361`,
    7455: `4362`,
    7456: `4362`,
    7457: `4363`,
    7458: `4363`,
    7459: `4364`,
    746: `203`,
    7460: `4364`,
    7461: `4365`,
    7462: `4366`,
    7463: `4366`,
    7464: `4367`,
    7465: `4367`,
    7466: `4368`,
    7467: `4368`,
    7468: `4370`,
    7469: `4371`,
    747: `203`,
    7470: `4371`,
    7471: `4372`,
    7472: `4372`,
    7473: `4373`,
    7474: `4373`,
    7475: `4374`,
    7476: `4374`,
    7477: `4378`,
    7478: `4378`,
    7479: `4379`,
    748: `203`,
    7480: `4379`,
    7481: `4380`,
    7482: `4386`,
    7483: `4386`,
    7484: `4387`,
    7485: `4388`,
    7486: `4388`,
    7487: `4389`,
    7488: `4390`,
    7489: `4390`,
    749: `203`,
    7490: `4391`,
    7491: `4392`,
    7492: `4393`,
    7493: `4394`,
    7494: `4394`,
    7495: `4394`,
    7496: `4395`,
    7497: `4395`,
    7498: `4395`,
    7499: `4396`,
    75: `2`,
    750: `203`,
    7500: `4397`,
    7501: `4397`,
    7502: `4398`,
    7503: `4398`,
    7504: `4398`,
    7505: `4398`,
    7506: `4398`,
    7507: `4398`,
    7508: `4398`,
    7509: `4398`,
    751: `203`,
    7510: `4398`,
    7511: `4398`,
    7512: `4399`,
    7513: `4399`,
    7514: `4400`,
    7515: `4401`,
    7516: `4402`,
    7517: `4402`,
    7518: `4403`,
    7519: `4404`,
    752: `203`,
    7520: `4404`,
    7521: `4405`,
    7522: `4406`,
    7523: `4407`,
    7524: `4407`,
    7525: `4408`,
    7526: `4409`,
    7527: `4409`,
    7528: `4410`,
    7529: `4411`,
    753: `203`,
    7530: `4418`,
    7531: `4419`,
    7532: `4420`,
    7533: `4420`,
    7534: `4421`,
    7535: `4422`,
    7536: `4422`,
    7537: `4423`,
    7538: `4424`,
    7539: `4424`,
    754: `203`,
    7540: `4425`,
    7541: `4426`,
    7542: `4426`,
    7543: `4427`,
    7544: `4428`,
    7545: `4428`,
    7546: `4428`,
    7547: `4429`,
    7548: `4429`,
    7549: `4429`,
    755: `203`,
    7550: `4430`,
    7551: `4430`,
    7552: `4431`,
    7553: `4432`,
    7554: `4432`,
    7555: `4432`,
    7556: `4433`,
    7557: `4433`,
    7558: `4433`,
    7559: `4435`,
    756: `203`,
    7560: `4436`,
    7561: `4437`,
    7562: `4437`,
    7563: `4438`,
    7564: `4439`,
    7565: `4439`,
    7566: `4440`,
    7567: `4441`,
    7568: `4441`,
    7569: `4442`,
    757: `203`,
    7570: `4443`,
    7571: `4443`,
    7572: `4444`,
    7573: `4445`,
    7574: `4445`,
    7575: `4445`,
    7576: `4446`,
    7577: `4446`,
    7578: `4446`,
    7579: `4447`,
    758: `203`,
    7580: `4447`,
    7581: `4447`,
    7582: `4448`,
    7583: `4448`,
    7584: `4449`,
    7585: `4449`,
    7586: `4450`,
    7587: `4451`,
    7588: `4452`,
    7589: `4452`,
    759: `203`,
    7590: `4453`,
    7591: `4453`,
    7592: `4454`,
    7593: `4454`,
    7594: `4455`,
    7595: `4455`,
    7596: `4456`,
    7597: `4456`,
    7598: `4457`,
    7599: `4458`,
    76: `2`,
    760: `203`,
    7600: `4459`,
    7601: `4459`,
    7602: `4460`,
    7603: `4461`,
    7604: `4461`,
    7605: `4462`,
    7606: `4463`,
    7607: `4463`,
    7608: `4464`,
    7609: `4464`,
    761: `203`,
    7610: `4465`,
    7611: `4465`,
    7612: `4466`,
    7613: `4467`,
    7614: `4469`,
    7615: `4469`,
    7616: `4470`,
    7617: `4470`,
    7618: `4470`,
    7619: `4471`,
    762: `203`,
    7620: `4471`,
    7621: `4472`,
    7622: `4473`,
    7623: `4473`,
    7624: `4474`,
    7625: `4475`,
    7626: `4475`,
    7627: `4476`,
    7628: `4476`,
    7629: `4476`,
    763: `203`,
    7630: `4477`,
    7631: `4477`,
    7632: `4478`,
    7633: `4479`,
    7634: `4479`,
    7635: `4479`,
    7636: `4480`,
    7637: `4480`,
    7638: `4481`,
    7639: `4481`,
    764: `203`,
    7640: `4481`,
    7641: `4482`,
    7642: `4482`,
    7643: `4483`,
    7644: `4484`,
    7645: `4484`,
    7646: `4484`,
    7647: `4485`,
    7648: `4486`,
    7649: `4487`,
    765: `203`,
    7650: `4487`,
    7651: `4488`,
    7652: `4489`,
    7653: `4489`,
    7654: `4490`,
    7655: `4490`,
    7656: `4491`,
    7657: `4491`,
    7658: `4492`,
    7659: `4493`,
    766: `203`,
    7660: `4493`,
    7661: `4494`,
    7662: `4494`,
    7663: `4495`,
    7664: `4495`,
    7665: `4496`,
    7666: `4496`,
    7667: `4496`,
    7668: `4498`,
    7669: `4498`,
    767: `203`,
    7670: `4499`,
    7671: `4499`,
    7672: `4499`,
    7673: `4500`,
    7674: `4501`,
    7675: `4501`,
    7676: `4502`,
    7677: `4502`,
    7678: `4502`,
    7679: `4503`,
    768: `203`,
    7680: `4503`,
    7681: `4504`,
    7682: `4504`,
    7683: `4505`,
    7684: `4505`,
    7685: `4505`,
    7686: `4506`,
    7687: `4506`,
    7688: `4507`,
    7689: `4507`,
    769: `203`,
    7690: `4508`,
    7691: `4508`,
    7692: `4508`,
    7693: `4509`,
    7694: `4509`,
    7695: `4511`,
    7696: `4511`,
    7697: `4512`,
    7698: `4513`,
    7699: `4513`,
    77: `2`,
    770: `203`,
    7700: `4514`,
    7701: `4515`,
    7702: `4516`,
    7703: `4516`,
    7704: `4517`,
    7705: `4518`,
    7706: `4518`,
    7707: `4519`,
    7708: `4520`,
    7709: `4521`,
    771: `203`,
    7710: `4521`,
    7711: `4522`,
    7712: `4523`,
    7713: `4523`,
    7714: `4524`,
    7715: `4525`,
    7716: `4525`,
    7717: `4526`,
    7718: `4527`,
    7719: `4527`,
    772: `203`,
    7720: `4528`,
    7721: `4529`,
    7722: `4529`,
    7723: `4530`,
    7724: `4531`,
    7725: `4531`,
    7726: `4532`,
    7727: `4533`,
    7728: `4534`,
    7729: `4534`,
    773: `203`,
    7730: `4535`,
    7731: `4536`,
    7732: `4536`,
    7733: `4537`,
    7734: `4538`,
    7735: `4538`,
    7736: `4539`,
    7737: `4540`,
    7738: `4540`,
    7739: `4541`,
    774: `203`,
    7740: `4542`,
    7741: `4543`,
    7742: `4543`,
    7743: `4544`,
    7744: `4544`,
    7745: `4544`,
    7746: `4546`,
    7747: `4546`,
    7748: `4547`,
    7749: `4548`,
    775: `203`,
    7750: `4549`,
    7751: `4552`,
    7752: `4552`,
    7753: `4552`,
    7754: `4553`,
    7755: `4553`,
    7756: `4555`,
    7757: `4556`,
    7758: `4556`,
    7759: `4557`,
    776: `203`,
    7760: `4557`,
    7761: `4558`,
    7762: `4558`,
    7763: `4559`,
    7764: `4559`,
    7765: `4560`,
    7766: `4561`,
    7767: `4562`,
    7768: `4563`,
    7769: `4563`,
    777: `203`,
    7770: `4563`,
    7771: `4564`,
    7772: `4564`,
    7773: `4564`,
    7774: `4565`,
    7775: `4565`,
    7776: `4566`,
    7777: `4566`,
    7778: `4566`,
    7779: `4568`,
    778: `203`,
    7780: `4569`,
    7781: `4570`,
    7782: `4571`,
    7783: `4572`,
    7784: `4574`,
    7785: `4575`,
    7786: `4575`,
    7787: `4576`,
    7788: `4576`,
    7789: `4577`,
    779: `204`,
    7790: `4577`,
    7791: `4578`,
    7792: `4578`,
    7793: `4579`,
    7794: `4579`,
    7795: `4580`,
    7796: `4581`,
    7797: `4583`,
    7798: `4583`,
    7799: `4584`,
    78: `2`,
    780: `204`,
    7800: `4585`,
    7801: `4586`,
    7802: `4589`,
    7803: `4589`,
    7804: `4589`,
    7805: `4590`,
    7806: `4590`,
    7807: `4592`,
    7808: `4593`,
    7809: `4593`,
    781: `204`,
    7810: `4594`,
    7811: `4595`,
    7812: `4595`,
    7813: `4596`,
    7814: `4597`,
    7815: `4597`,
    7816: `4597`,
    7817: `4598`,
    7818: `4598`,
    7819: `4598`,
    782: `207`,
    7820: `4599`,
    7821: `4599`,
    7822: `4600`,
    7823: `4600`,
    7824: `4600`,
    7825: `4602`,
    7826: `4602`,
    7827: `4603`,
    7828: `4604`,
    7829: `4605`,
    783: `207`,
    7830: `4608`,
    7831: `4608`,
    7832: `4608`,
    7833: `4609`,
    7834: `4609`,
    7835: `4610`,
    7836: `4611`,
    7837: `4611`,
    7838: `4612`,
    7839: `4612`,
    784: `207`,
    7840: `4612`,
    7841: `4615`,
    7842: `4615`,
    7843: `4615`,
    7844: `4616`,
    7845: `4616`,
    7846: `4617`,
    7847: `4617`,
    7848: `4617`,
    7849: `4619`,
    785: `208`,
    7850: `4620`,
    7851: `4622`,
    7852: `4623`,
    7853: `4624`,
    7854: `4625`,
    7855: `4625`,
    7856: `4626`,
    7857: `4626`,
    7858: `4627`,
    7859: `4627`,
    786: `208`,
    7860: `4627`,
    7861: `4628`,
    7862: `4630`,
    7863: `4631`,
    7864: `4632`,
    7865: `4632`,
    7866: `4632`,
    7867: `4633`,
    7868: `4634`,
    7869: `4634`,
    787: `211`,
    7870: `4637`,
    7871: `4637`,
    7872: `4638`,
    7873: `4638`,
    7874: `4639`,
    7875: `4639`,
    7876: `4640`,
    7877: `4641`,
    7878: `4642`,
    7879: `4642`,
    788: `212`,
    7880: `4643`,
    7881: `4644`,
    7882: `4644`,
    7883: `4645`,
    7884: `4645`,
    7885: `4646`,
    7886: `4646`,
    7887: `4647`,
    7888: `4648`,
    7889: `4649`,
    789: `213`,
    7890: `4649`,
    7891: `4650`,
    7892: `4650`,
    7893: `4651`,
    7894: `4652`,
    7895: `4653`,
    7896: `4653`,
    7897: `4654`,
    7898: `4655`,
    7899: `4656`,
    79: `2`,
    790: `214`,
    7900: `4658`,
    7901: `4659`,
    7902: `4660`,
    7903: `4660`,
    7904: `4661`,
    7905: `4662`,
    7906: `4663`,
    7907: `4664`,
    7908: `4665`,
    7909: `4666`,
    791: `214`,
    7910: `4668`,
    7911: `4669`,
    7912: `4670`,
    7913: `4671`,
    7914: `4671`,
    7915: `4671`,
    7916: `4672`,
    7917: `4672`,
    7918: `4673`,
    7919: `4674`,
    792: `215`,
    7920: `4675`,
    7921: `4677`,
    7922: `4678`,
    7923: `4678`,
    7924: `4678`,
    7925: `4679`,
    7926: `4680`,
    7927: `4681`,
    7928: `4682`,
    7929: `4683`,
    793: `216`,
    7930: `4685`,
    7931: `4686`,
    7932: `4687`,
    7933: `4688`,
    7934: `4688`,
    7935: `4688`,
    7936: `4689`,
    7937: `4689`,
    7938: `4690`,
    7939: `4690`,
    794: `216`,
    7940: `4690`,
    7941: `4691`,
    7942: `4691`,
    7943: `4691`,
    7944: `4693`,
    7945: `4694`,
    7946: `4695`,
    7947: `4696`,
    7948: `4696`,
    7949: `4697`,
    795: `217`,
    7950: `4698`,
    7951: `4699`,
    7952: `4700`,
    7953: `4700`,
    7954: `4701`,
    7955: `4702`,
    7956: `4702`,
    7957: `4702`,
    7958: `4703`,
    7959: `4703`,
    796: `218`,
    7960: `4704`,
    7961: `4705`,
    7962: `4705`,
    7963: `4706`,
    7964: `4707`,
    7965: `4707`,
    7966: `4708`,
    7967: `4709`,
    7968: `4709`,
    7969: `4709`,
    797: `219`,
    7970: `4710`,
    7971: `4710`,
    7972: `4711`,
    7973: `4712`,
    7974: `4713`,
    7975: `4714`,
    7976: `4714`,
    7977: `4715`,
    7978: `4716`,
    7979: `4716`,
    798: `220`,
    7980: `4716`,
    7981: `4717`,
    7982: `4717`,
    7983: `4718`,
    7984: `4719`,
    7985: `4719`,
    7986: `4719`,
    7987: `4720`,
    7988: `4720`,
    7989: `4721`,
    799: `220`,
    7990: `4722`,
    7991: `4722`,
    7992: `4722`,
    7993: `4723`,
    7994: `4723`,
    7995: `4724`,
    7996: `4725`,
    7997: `4725`,
    7998: `4726`,
    7999: `4727`,
    8: `2`,
    80: `2`,
    800: `221`,
    8000: `4727`,
    8001: `4727`,
    8002: `4728`,
    8003: `4729`,
    8004: `4729`,
    8005: `4730`,
    8006: `4731`,
    8007: `4731`,
    8008: `4731`,
    8009: `4732`,
    801: `221`,
    8010: `4732`,
    8011: `4733`,
    8012: `4734`,
    8013: `4734`,
    8014: `4735`,
    8015: `4736`,
    8016: `4736`,
    8017: `4736`,
    8018: `4737`,
    8019: `4737`,
    802: `221`,
    8020: `4738`,
    8021: `4739`,
    8022: `4739`,
    8023: `4740`,
    8024: `4741`,
    8025: `4741`,
    8026: `4741`,
    8027: `4742`,
    8028: `4742`,
    8029: `4743`,
    803: `224`,
    8030: `4744`,
    8031: `4744`,
    8032: `4745`,
    8033: `4745`,
    8034: `4745`,
    8035: `4746`,
    8036: `4746`,
    8037: `4747`,
    8038: `4748`,
    8039: `4748`,
    804: `224`,
    8040: `4749`,
    8041: `4751`,
    8042: `4752`,
    8043: `4753`,
    8044: `4754`,
    8045: `4754`,
    8046: `4755`,
    8047: `4756`,
    8048: `4757`,
    8049: `4758`,
    805: `224`,
    8050: `4758`,
    8051: `4759`,
    8052: `4760`,
    8053: `4760`,
    8054: `4760`,
    8055: `4761`,
    8056: `4761`,
    8057: `4762`,
    8058: `4763`,
    8059: `4763`,
    806: `225`,
    8060: `4764`,
    8061: `4765`,
    8062: `4765`,
    8063: `4766`,
    8064: `4766`,
    8065: `4767`,
    8066: `4767`,
    8067: `4768`,
    8068: `4769`,
    8069: `4769`,
    807: `225`,
    8070: `4770`,
    8071: `4772`,
    8072: `4773`,
    8073: `4774`,
    8074: `4774`,
    8075: `4775`,
    8076: `4775`,
    8077: `4776`,
    8078: `4776`,
    8079: `4777`,
    808: `228`,
    8080: `4777`,
    8081: `4778`,
    8082: `4778`,
    8083: `4779`,
    8084: `4780`,
    8085: `4782`,
    8086: `4782`,
    8087: `4783`,
    8088: `4783`,
    8089: `4784`,
    809: `229`,
    8090: `4786`,
    8091: `4787`,
    8092: `4788`,
    8093: `4789`,
    8094: `4790`,
    8095: `4790`,
    8096: `4791`,
    8097: `4792`,
    8098: `4793`,
    8099: `4794`,
    81: `2`,
    810: `230`,
    8100: `4796`,
    8101: `4796`,
    8102: `4797`,
    8103: `4797`,
    8104: `4798`,
    8105: `4799`,
    8106: `4800`,
    8107: `4800`,
    8108: `4800`,
    8109: `4801`,
    811: `231`,
    8110: `4801`,
    8111: `4801`,
    8112: `4803`,
    8113: `4804`,
    8114: `4804`,
    8115: `4804`,
    8116: `4806`,
    8117: `4806`,
    8118: `4807`,
    8119: `4808`,
    812: `231`,
    8120: `4808`,
    8121: `4809`,
    8122: `4811`,
    8123: `4812`,
    8124: `4812`,
    8125: `4813`,
    813: `232`,
    814: `233`,
    815: `233`,
    816: `234`,
    817: `235`,
    818: `236`,
    819: `237`,
    82: `2`,
    820: `237`,
    821: `238`,
    822: `238`,
    823: `238`,
    824: `241`,
    825: `241`,
    826: `241`,
    827: `242`,
    828: `242`,
    829: `242`,
    83: `2`,
    830: `243`,
    831: `243`,
    832: `244`,
    833: `244`,
    834: `247`,
    835: `248`,
    836: `249`,
    837: `249`,
    838: `250`,
    839: `250`,
    84: `2`,
    840: `251`,
    841: `251`,
    842: `252`,
    843: `253`,
    844: `254`,
    845: `254`,
    846: `255`,
    847: `256`,
    848: `257`,
    849: `258`,
    85: `2`,
    850: `258`,
    851: `259`,
    852: `259`,
    853: `259`,
    854: `262`,
    855: `262`,
    856: `262`,
    857: `263`,
    858: `263`,
    859: `266`,
    86: `2`,
    860: `267`,
    861: `268`,
    862: `268`,
    863: `269`,
    864: `269`,
    865: `270`,
    866: `271`,
    867: `271`,
    868: `272`,
    869: `273`,
    87: `2`,
    870: `274`,
    871: `275`,
    872: `275`,
    873: `276`,
    874: `276`,
    875: `276`,
    876: `279`,
    877: `279`,
    878: `279`,
    879: `280`,
    88: `2`,
    880: `280`,
    881: `283`,
    882: `284`,
    883: `285`,
    884: `285`,
    885: `285`,
    886: `286`,
    887: `286`,
    888: `287`,
    889: `288`,
    89: `2`,
    890: `288`,
    891: `289`,
    892: `290`,
    893: `291`,
    894: `292`,
    895: `292`,
    896: `293`,
    897: `293`,
    898: `293`,
    899: `296`,
    9: `2`,
    90: `2`,
    900: `296`,
    901: `296`,
    902: `297`,
    903: `297`,
    904: `297`,
    905: `298`,
    906: `298`,
    907: `299`,
    908: `299`,
    909: `302`,
    91: `2`,
    910: `303`,
    911: `304`,
    912: `304`,
    913: `305`,
    914: `305`,
    915: `306`,
    916: `306`,
    917: `307`,
    918: `308`,
    919: `309`,
    92: `2`,
    920: `309`,
    921: `310`,
    922: `311`,
    923: `312`,
    924: `313`,
    925: `313`,
    926: `314`,
    927: `314`,
    928: `314`,
    929: `317`,
    93: `2`,
    930: `317`,
    931: `317`,
    932: `318`,
    933: `319`,
    934: `319`,
    935: `319`,
    936: `320`,
    937: `320`,
    938: `320`,
    939: `321`,
    94: `2`,
    940: `321`,
    941: `322`,
    942: `322`,
    943: `323`,
    944: `323`,
    945: `326`,
    946: `327`,
    947: `328`,
    948: `328`,
    949: `329`,
    95: `2`,
    950: `329`,
    951: `330`,
    952: `331`,
    953: `331`,
    954: `331`,
    955: `332`,
    956: `332`,
    957: `333`,
    958: `334`,
    959: `334`,
    96: `2`,
    960: `335`,
    961: `336`,
    962: `337`,
    963: `337`,
    964: `338`,
    965: `339`,
    966: `340`,
    967: `341`,
    968: `341`,
    969: `342`,
    97: `2`,
    970: `342`,
    971: `342`,
    972: `345`,
    973: `345`,
    974: `345`,
    975: `346`,
    976: `347`,
    977: `347`,
    978: `347`,
    979: `348`,
    98: `2`,
    980: `348`,
    981: `348`,
    982: `349`,
    983: `349`,
    984: `350`,
    985: `350`,
    986: `351`,
    987: `351`,
    988: `354`,
    989: `355`,
    99: `2`,
    990: `356`,
    991: `356`,
    992: `356`,
    993: `357`,
    994: `357`,
    995: `358`,
    996: `359`,
    997: `359`,
    998: `359`,
    999: `360`
    },
  appClear: `CQ==`,
  appClearMap: {
    },
  companionInfo: {
    _api_Provider_deposit3: 1,
    _api_Provider_withdraw3: 1,
    _api_Trader_exactSwapAForB3: 2,
    _api_Trader_exactSwapBForA3: 2,
    _api_Trader_swapAForB3: 1,
    _api_Trader_swapBForA3: 1
    },
  extraPages: 3,
  stateKeys: 6,
  stateSize: 722,
  unsupported: [],
  version: 13,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:457:71:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:733:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:752:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:1151:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:1154:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:506:31:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "Protocol_delete": Protocol_delete,
  "Protocol_harvest": Protocol_harvest,
  "Provider_deposit": Provider_deposit,
  "Provider_depositA": Provider_depositA,
  "Provider_depositB": Provider_depositB,
  "Provider_withdraw": Provider_withdraw,
  "Provider_withdrawA": Provider_withdrawA,
  "Provider_withdrawB": Provider_withdrawB,
  "Trader_exactSwapAForB": Trader_exactSwapAForB,
  "Trader_exactSwapBForA": Trader_exactSwapBForA,
  "Trader_swapAForB": Trader_swapAForB,
  "Trader_swapBForA": Trader_swapBForA,
  "arc200_approve": arc200_approve,
  "arc200_transfer": arc200_transfer,
  "arc200_transferFrom": arc200_transferFrom,
  "createAllowanceBox": createAllowanceBox,
  "createBalanceBoxes": createBalanceBoxes
  };
export const _APIs = {
  Protocol_delete: Protocol_delete,
  Protocol_harvest: Protocol_harvest,
  Provider: {
    deposit: Provider_deposit,
    depositA: Provider_depositA,
    depositB: Provider_depositB,
    withdraw: Provider_withdraw,
    withdrawA: Provider_withdrawA,
    withdrawB: Provider_withdrawB
    },
  Trader: {
    exactSwapAForB: Trader_exactSwapAForB,
    exactSwapBForA: Trader_exactSwapBForA,
    swapAForB: Trader_swapAForB,
    swapBForA: Trader_swapBForA
    },
  arc200_approve: arc200_approve,
  arc200_transfer: arc200_transfer,
  arc200_transferFrom: arc200_transferFrom,
  createAllowanceBox: createAllowanceBox,
  createBalanceBoxes: createBalanceBoxes
  };

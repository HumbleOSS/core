"reach 0.1";
//"use strict";

// traililng underscore means rewards amt is multiplied already
const REWARDS_PREC = UInt256(10_000_000_000); // 1e10

const StakeUpdate = Struct([
  ["newUserStaked", UInt256],
  ["newEveryoneStaked", UInt256],
]);

const RewardTokens = Tuple(Contract);
const Rewards = Tuple(UInt256);

const z256 = UInt256(0);
const zeroRewards = [z256];
const Rewards_ = Tuple(UInt256);
const zeroRewards256 = [z256];

const UserData = Struct([
  ["stake", UInt256],
  ["rewards", Rewards_],
]);

const RewardsUpdate = Struct([
  ["userReceived", Rewards],
  ["totalRemaining", Rewards],
]);

const Opts = Struct([
  ["rewardToken", RewardTokens],
  ["stakeToken", Contract],
  ["rewards", Rewards],
  ["start", UInt],
  ["end", UInt],
]);

const Info = Struct([
  ["poolId", UInt],
  ["opts", Opts],
  ["rewarder", Address],
  ["totalStaked", UInt256],
  ["remainingRewards", Rewards],
  ["lastRewardsRefreshed", UInt],
  ["lastRewardsPerShare_", Rewards_],
  ["rewardsPerBlock_", Rewards_],
]);

const muldivprec = (x, y) => (x * y) / REWARDS_PREC;

const min = (x, y) => (x <= y ? x : y);

const max = (x, y) => (x >= y ? x : y);

const zsub = (x, y, z = 0) => {
  if (y >= x) {
    return z;
  } else {
    return x - y;
  }
};

const sumf = (m, f) => m.reduce(0, (acc, e) => acc + f(e));

const invalidPool = () =>
  Info.fromObject({
    poolId: 0,
    opts: Opts.fromObject({
      rewardToken: [getContract()],
      stakeToken: getContract(),
      rewards: [UInt256(0)],
      start: 0,
      end: 0,
    }),
    rewarder: getAddress(),
    totalStaked: UInt256(0),
    remainingRewards: zeroRewards,
    lastRewardsRefreshed: 0,
    lastRewardsPerShare_: zeroRewards256,
    rewardsPerBlock_: zeroRewards256,
  });

const invalidUser = () =>
  UserData.fromObject({
    stake: z256,
    rewards: zeroRewards256,
  });

export const staker200 = Reach.App(() => {
  setOptions({
    connectors: [ALGO],
    verifyArithmetic: false,
  });
  const Params = Object({
    zeroAddress: Address,
  });
  const D = Participant("Deployer", {
    params: Params,
    ready: Fun([Contract], Null),
  });
  const Funder = API("Funder", {
    deployPool: Fun([Opts], UInt),
  });
  const Admin = API("Admin", {
    deletePool: Fun([UInt], Info),
    grant: Fun([Address], Null),
    updateFee: Fun([UInt], Null),
  });
  const Staker = API("Staker", {
    stake: Fun([UInt, UInt256], StakeUpdate), // poolId, amt
    harvest: Fun([UInt], RewardsUpdate), // poolId
    withdraw: Fun([UInt, UInt256], StakeUpdate), // poolId, amt
    emergencyWithdraw: Fun([UInt], StakeUpdate), // poolId
  });
  const A = API({
    touch: Fun([], Null),
    nop: Fun([], Null),
  });
  const N = Events({
    Pool: [
      UInt,
      Address,
      Contract,
      Tuple(Contract),
      Tuple(UInt256),
      UInt,
      UInt,
    ], // poolId, who, stakeToken, rewardsToken, rewards, start, end
    DeletePool: [UInt, Address], // who, poolId
    Stake: [UInt, Address, UInt256, StakeUpdate], // poolId, who, amt, newState
    Harvest: [UInt, Address, RewardsUpdate, Address], // poolId, who, rewards, to
    Withdraw: [UInt, Address, UInt256, StakeUpdate, Address], // poolId, who, amt, newState, to
    EmergencyWithdraw: [UInt, Address, UInt256, StakeUpdate, Address], // poolId, who, amt, newState, to
  });
  const V = View({
    Opts,
    Info: Fun([UInt], Info),
    staked: Fun([UInt, Address], UInt256), // poolId, addr -> staked
    rewardsAvailable: Fun([UInt, Address], Rewards), // poolId, addr -> rewards
    rewardsAvailableAt: Fun([UInt, Address, UInt], Rewards), // poolId, addr, when -> rewards
  });
  init();

  D.only(() => {
    const { zeroAddress } = declassify(interact.params);
  });

  D.publish(zeroAddress);

  D.interact.ready(getContract());

  const pools = new Map(UInt, Info);
  const Users = new Map(Tuple(UInt, Address), UserData);
  // Staking "late" is treated as though "you already got" rewards up until the moment you staked

  const lookupUserData = (i, addr) => fromSome(Users[[i, addr]], invalidUser());

  const lookupStaked = (i, addr) => lookupUserData(i, addr).stake;

  const lookupRewardsPaid = (i, addr) => lookupUserData(i, addr).rewards;

  V.staked.set(lookupStaked);

  const initialState = {
    manager: D,
    poolIndex: 0,
    poolCount: 0,
    fee: 30, // 0.3%
  };

  const [s] = parallelReduce([initialState])
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
      const refresh = (pool, now) => {
        const {
          opts,
          totalStaked,
          lastRewardsRefreshed,
          lastRewardsPerShare_,
          rewardsPerBlock_,
        } = pool;
        const { start, end } = Opts.toObject(opts);
        // calc new rewardsPerShare_
        if (totalStaked == z256) {
          return lastRewardsPerShare_;
        } else {
          const go = (i) => {
            const blocks = zsub(
              min(end, now),
              max(start, lastRewardsRefreshed)
            );
            const more_ = (rewardsPerBlock_[i] * UInt256(blocks)) / totalStaked;
            return lastRewardsPerShare_[i] + more_;
          };
          return [go(0)];
        }
      };

      const lookupPool = (pid) => fromSome(pools[pid], invalidPool());

      const lookupRewards_i = (pid, addr, rewardsPerShare_, i) => {
        const pool = lookupPool(pid);
        const { remainingRewards, poolId } = pool;
        const staked = lookupStaked(poolId, addr);
        const rewardsPaid = lookupRewardsPaid(poolId, addr)[i];
        //assert(staked <= totalStaked);
        const totalRewards = muldivprec(staked, rewardsPerShare_[i]);
        // TODO prove zsub is unnecessary
        const deservedRewards = zsub(totalRewards, rewardsPaid, z256);
        // TODO prove min is unnecessary
        const amt = min(deservedRewards, remainingRewards[i]);
        return amt;
      };

      const lookupRewards = (pid, addr, rewardsPerShare_) => {
        return [lookupRewards_i(pid, addr, rewardsPerShare_, 0)];
      };

      const lookupRewardsAt = (pid, addr, when) => {
        const pool = lookupPool(pid);
        return lookupRewards(pid, addr, refresh(pool, when));
      };

      // TODO: lastConsensusTime() instead of lastRewardsRefreshed, when Reach allows it
      const lookupRewards_lrr = (pid, addr) => {
        const pool = fromSome(pools[pid], invalidPool());
        const { lastRewardsRefreshed } = Info.toObject(pool);
        return lookupRewardsAt(pid, addr, lastRewardsRefreshed);
      };

      V.Info.set(lookupPool);
      V.rewardsAvailableAt.set(lookupRewardsAt);
      V.rewardsAvailable.set(lookupRewards_lrr);
    })
    .invariant(balance() == 0, "balance accurate") // contract holds no tokens
    .while(true)
    // -----------------------------------------
    // api: deploy
    // - deploys staking pool
    // - emits Deploy
    // -----------------------------------------
    .define(() => {
      const assertEnoughReward = (i, rewards, duration, rewardsPerBlock_) => {
        const rewardFunded_ = rewards[i] * REWARDS_PREC;
        const rewardAllBlocks_ = rewardsPerBlock_ * UInt256(duration);
        assert(rewardFunded_ >= rewardAllBlocks_, "enough rewards");
      };
      const calcRewardsPerBlock = (i, rewards, duration) => {
        const rewardsPerBlock = (rewards[i] * REWARDS_PREC) / UInt256(duration);
        assertEnoughReward(i, rewards, duration, rewardsPerBlock);
        return rewardsPerBlock;
      };
      const safeDuration = (start, end) => {
        check(end > start, "end must be after start");
        return end - start;
      };
    })
    .api_(Funder.deployPool, (opts) => {
      const { rewardToken, stakeToken, rewards, start, end } = opts;
      const rewardsPerBlock_ = [
        calcRewardsPerBlock(0, rewards, safeDuration(start, end)),
      ];
      return [
        (k) => {
          const FEE_PREC = UInt256(1_000_000);
          const fee =
            (rewards[0] * UInt256(s.fee) * FEE_PREC) /
            UInt256(10_000) /
            FEE_PREC;
          void arc200.transferFrom(rewardToken[0], 0, this, s.manager, fee);
          pools[s.poolIndex + 1] = Info.fromObject({
            poolId: s.poolIndex + 1,
            opts,
            rewarder: this,
            totalStaked: z256,
            remainingRewards: rewards,
            lastRewardsRefreshed: start,
            lastRewardsPerShare_: zeroRewards256,
            rewardsPerBlock_,
          });
          N.Pool(
            s.poolIndex + 1,
            this,
            stakeToken,
            rewardToken,
            rewards,
            start,
            end
          );
          k(s.poolIndex + 1);
          return [
            {
              ...s,
              poolIndex: s.poolIndex + 1,
              poolCount: s.poolCount + 1,
            },
          ];
        },
      ];
    })
    // -----------------------------------------
    // api: deletePool (Admin)
    // - deletes a staking pool
    // - emits DeletePool
    // -----------------------------------------
    .api_(Admin.deletePool, (poolId) => {
      check(isSome(pools[poolId]), "pool does not exist");
      check(s.poolCount > 0, "no pools to delete");
      const pool = fromSome(pools[poolId], invalidPool());
      const { totalStaked } = pool;
      check(totalStaked == z256, "can only delete empty pool");
      return [
        (k) => {
          delete pools[poolId];
          k(pool);
          N.DeletePool(poolId, this);
          return [
            {
              ...s,
              poolCount: s.poolCount - 1,
            },
          ];
        },
      ];
    })
    // -----------------------------------------
    // api: stake (Staker)
    // - stakes some of the user's tokens
    // - emits Stake
    // - transfers staked tokens from user to contract
    // -----------------------------------------
    .api_(Staker.stake, (pid, amt) => {
      check(isSome(pools[pid]), "pool does not exist");
      const pool = fromSome(pools[pid], invalidPool());
      const {
        lastRewardsRefreshed,
        opts: { end, stakeToken },
        totalStaked,
      } = Info.toObject(pool);
      const now = thisConsensusSecs();
      check(lastRewardsRefreshed < end, "can only stake before the end");
      // TODO: check now instead of lastRewardsRefreshed
      // check(now <= end, "can only stake before the end");
      check(amt > z256, "must stake more than 0");
      const rewardsPerShare_ = refresh(pool, now);
      const totalStakedP = totalStaked + amt;
      const staked = lookupStaked(pid, this);
      const stakedP = staked + amt;
      const SU = StakeUpdate.fromObject({
        newUserStaked: stakedP,
        newEveryoneStaked: totalStakedP,
      });
      const currentPaid = lookupRewardsPaid(pid, this);
      const mkNewPaid = (i) => {
        const morePaid = muldivprec(amt, rewardsPerShare_[i]);
        return currentPaid[i] + morePaid;
      };
      const rewardsP = [mkNewPaid(0)];
      return [
        (k) => {
          void arc200.transferFrom(stakeToken, 0, this, getAddress(), amt);
          Users[[pid, this]] = UserData.fromObject({
            stake: stakedP,
            rewards: rewardsP,
          });
          pools[pid] = Info.fromObject({
            ...Info.toObject(pool),
            totalStaked: totalStakedP,
            lastRewardsRefreshed: now,
            lastRewardsPerShare_: rewardsPerShare_,
          });
          N.Stake(pid, this, amt, SU);
          k(SU);
          return [s];
        },
      ];
    })
    // -----------------------------------------
    // api: withdraw (Staker)
    // - withdraws some of the user's stake
    // - can be called at any time
    // - can be called by anyone
    // - emits Withdraw
    // - transfers staked tokens plus more to user
    // -----------------------------------------
    .api_(Staker.withdraw, (pid, amt) => {
      check(isSome(pools[pid]), "pool does not exist");
      const pool = fromSome(pools[pid], invalidPool());
      const {
        totalStaked,
        opts: { stakeToken },
      } = Info.toObject(pool);
      const staked = lookupStaked(pid, this);
      check(amt <= staked, "can only withdraw if balance is sufficient");
      const stakedP = staked - amt;
      check(amt <= totalStaked, "can only withdraw if balance is sufficient");
      const totalStakedP = totalStaked - amt;
      const rewardsPaid = lookupRewardsPaid(pid, this);
      const now = thisConsensusSecs();
      const rewardsPerShare_ = refresh(pool, now);
      const lessPaid = (i) => muldivprec(amt, rewardsPerShare_[i]);
      // If lessPaid > currentPaid, the user is losing rewards
      const mkNewPaid = (i) => zsub(rewardsPaid[i], lessPaid(i), z256);
      const rewardsP = [mkNewPaid(0)];
      const SU = StakeUpdate.fromObject({
        newUserStaked: stakedP,
        newEveryoneStaked: totalStakedP,
      });
      return [
        (k) => {
          k(SU);
          void arc200.transfer(stakeToken, 0, this, amt);
          Users[[pid, this]] = UserData.fromObject({
            stake: stakedP,
            rewards: rewardsP,
          });
          N.Withdraw(pid, this, amt, SU, this);
          pools[pid] = Info.fromObject({
            ...Info.toObject(pool),
            totalStaked: totalStakedP,
            now,
            rewardsPerShare_,
          });
          return [s];
        },
      ];
    })
    // -----------------------------------------
    // api: emergencyWithdraw (Staker)
    // - withdraws all of the user's stake without more rewards
    // - can be called at any time
    // - can be called by anyone
    // - emits EmergencyWithdraw
    // - transfers all user staked tokens to the user
    // -----------------------------------------
    .api_(Staker.emergencyWithdraw, (pid) => {
      check(isSome(pools[pid]), "pool does not exist");
      const pool = fromSome(pools[pid], invalidPool());
      const {
        totalStaked,
        opts: { stakeToken },
      } = Info.toObject(pool);
      const staked = lookupStaked(pid, this);
      check(staked > UInt256(0), "can only withdraw if balance is sufficient");
      check(
        staked <= totalStaked,
        "can only withdraw if balance is sufficient"
      );
      const totalStakedP = totalStaked - staked;
      const SU = StakeUpdate.fromObject({
        newUserStaked: z256,
        newEveryoneStaked: totalStakedP,
      });
      return [
        (k) => {
          void arc200.transfer(stakeToken, 0, this, staked);
          Users[[pid, this]] = UserData.fromObject({
            ...UserData.toObject(lookupUserData(pid, this)),
            stake: z256,
          });
          N.EmergencyWithdraw(pid, this, staked, SU, this);
          pools[pid] = Info.fromObject({
            ...Info.toObject(pool),
            totalStaked: totalStakedP,
          });
          k(SU);
          return [s];
        },
      ];
    })
    // -----------------------------------------
    // api: harvest (Staker)
    // - harvests rewards for the user
    // -----------------------------------------
    .api_(Staker.harvest, (pid) => {
      check(isSome(pools[pid]), "pool does not exist");
      const pool = fromSome(pools[pid], invalidPool());
      const {
        remainingRewards,
        opts: { rewardToken },
        rewarder,
      } = pool;
      const now = thisConsensusSecs();
      const rewardsPerShare_ = refresh(pool, now);
      const rewards = lookupRewards(pid, this, rewardsPerShare_);
      const rewardsPaid = lookupRewardsPaid(pid, this);
      assert(rewards[0] <= remainingRewards[0]);
      check(rewards[0] <= remainingRewards[0]);
      const mkTotalRemaining = (i) => remainingRewards[i] - rewards[i];
      const mkNewPaid = (i) => rewardsPaid[i] + rewards[i];
      const totalRemaining = [mkTotalRemaining(0)];
      const RU = RewardsUpdate.fromObject({
        userReceived: rewards,
        totalRemaining,
      });
      return [
        (k) => {
          void arc200.transferFrom(
            rewardToken[0],
            0,
            rewarder,
            this,
            rewards[0]
          );
          Users[[pid, this]] = UserData.fromObject({
            ...UserData.toObject(lookupUserData(pid, this)),
            rewards: [mkNewPaid(0)],
          });
          k(RU);
          N.Harvest(pid, this, RU, this);
          pools[pid] = Info.fromObject({
            ...Info.toObject(pool),
            remainingRewards: RU.totalRemaining,
            lastRewardsRefreshed: now,
            lastRewardsPerShare_: rewardsPerShare_,
          });
          return [s];
        },
      ];
    })
    // -----------------------------------------
    // api: grant
    // - grants manager (manager only)
    // -----------------------------------------
    .api_(Admin.grant, (addr) => {
      check(s.manager === this, "must be manager");
      return [
        (k) => {
          k(null);
          return [
            {
              ...s,
              manager: addr,
            },
          ];
        },
      ];
    })
    // -----------------------------------------
    // api: updateFee (manager only)
    // - updates fee
    // -----------------------------------------
    .api_(Admin.updateFee, (fee) => {
      check(s.manager === this, "must be manager");
      check(fee <= 10_000, "fee must be <= 100%");
      return [
        (k) => {
          k(null);
          return [{ ...s, fee }];
        },
      ];
    })
    // -----------------------------------------
    // api: touch
    // - transfers untracked funds to manager
    // -----------------------------------------
    .api_(A.touch, () => {
      return [
        (k) => {
          const ut = getUntrackedFunds();
          transfer(ut).to(s.manager);
          k(null);
          return [s];
        },
      ];
    })
    // -----------------------------------------
    // api: nop
    // - no operation
    // -----------------------------------------
    .api_(A.nop, () => {
      return [
        (k) => {
          k(null);
          return [s];
        },
      ];
    });
  commit();
  exit();
});

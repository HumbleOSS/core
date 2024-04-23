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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_Struct([['newUserStaked', ctc2], ['newEveryoneStaked', ctc2]]);
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Struct([['userReceived', ctc4], ['totalRemaining', ctc4]]);
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc6]);
  return {
    DeletePool: [ctc0, ctc1],
    EmergencyWithdraw: [ctc0, ctc1, ctc2, ctc3, ctc1],
    Harvest: [ctc0, ctc1, ctc5, ctc1],
    Pool: [ctc0, ctc1, ctc6, ctc7, ctc4, ctc0, ctc0],
    Stake: [ctc0, ctc1, ctc2, ctc3],
    Withdraw: [ctc0, ctc1, ctc2, ctc3, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Object({
    fee: ctc1,
    manager: ctc2,
    poolCount: ctc1,
    poolIndex: ctc1
    });
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Struct([['rewardToken', ctc4], ['stakeToken', ctc0], ['rewards', ctc6], ['start', ctc1], ['end', ctc1]]);
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc7], ['rewarder', ctc2], ['totalStaked', ctc5], ['remainingRewards', ctc6], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc6], ['rewardsPerBlock_', ctc6]]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc10 = stdlib.T_Struct([['stake', ctc5], ['rewards', ctc6]]);
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Data({
    None: ctc11,
    Some: ctc8
    });
  const ctc13 = stdlib.T_Data({
    None: ctc11,
    Some: ctc10
    });
  const map0_ctc = ctc12;
  
  const map1_ctc = ctc13;
  
  
  const _Info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4079, v4092, v4096] = svs;
      return (await ((async (_v4099 ) => {
          const v4099 = stdlib.protect(ctc1, _v4099, null);
        
        const v4100 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v4099, ctc8), null);
        const v4103 = await ctc.getContractAddress();
        const v4104 = [v4079];
        const v4105 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v4106 = {
          end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewardToken: v4104,
          rewards: v4105,
          stakeToken: v4079,
          start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v4110 = {
          lastRewardsPerShare_: v4105,
          lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          opts: v4106,
          poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remainingRewards: v4105,
          rewarder: v4103,
          rewardsPerBlock_: v4105,
          totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v4118 = stdlib.fromSome(v4100, v4110);
        
        return v4118;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _Opts = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4079, v4092, v4096] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _rewardsAvailable = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4079, v4092, v4096] = svs;
      return (await ((async (_v4217, _v4218 ) => {
          const v4217 = stdlib.protect(ctc1, _v4217, null);
          const v4218 = stdlib.protect(ctc2, _v4218, null);
        
        const v4219 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v4217, ctc8), null);
        const v4222 = await ctc.getContractAddress();
        const v4223 = [v4079];
        const v4224 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v4225 = {
          end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewardToken: v4223,
          rewards: v4224,
          stakeToken: v4079,
          start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v4229 = {
          lastRewardsPerShare_: v4224,
          lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          opts: v4225,
          poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remainingRewards: v4224,
          rewarder: v4222,
          rewardsPerBlock_: v4224,
          totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v4237 = stdlib.fromSome(v4219, v4229);
        const v4238 = v4237.lastRewardsPerShare_;
        const v4239 = v4237.lastRewardsRefreshed;
        const v4240 = v4237.opts;
        const v4241 = v4237.poolId;
        const v4242 = v4237.remainingRewards;
        const v4244 = v4237.rewardsPerBlock_;
        const v4245 = v4237.totalStaked;
        let v4265;
        const v4271 = v4240.end;
        const v4275 = v4240.start;
        const v4276 = stdlib.eq256(v4245, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        if (v4276) {
          v4265 = v4238;
          }
        else {
          const v4277 = stdlib.le(v4271, v4239);
          const v4278 = v4277 ? v4271 : v4239;
          const v4279 = stdlib.ge(v4275, v4239);
          const v4280 = v4279 ? v4275 : v4239;
          let v4281;
          const v4282 = stdlib.ge(v4280, v4278);
          if (v4282) {
            v4281 = stdlib.checkedBigNumberify('./staker.rsh:55:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v4283 = stdlib.safeSub(v4278, v4280);
            v4281 = v4283;
            }
          const v4284 = v4244[stdlib.checkedBigNumberify('./staker.rsh:232:44:array ref', stdlib.UInt_max, '0')];
          const v4285 = stdlib.cast("UInt", "UInt256", v4281, false, true);
          const v4286 = stdlib.safeMul256(v4284, v4285);
          const v4287 = stdlib.safeDiv256(v4286, v4245);
          const v4288 = v4238[stdlib.checkedBigNumberify('./staker.rsh:233:40:array ref', stdlib.UInt_max, '0')];
          const v4289 = stdlib.safeAdd256(v4288, v4287);
          const v4290 = [v4289];
          v4265 = v4290;
          }
        const v4312 = [v4241, v4218];
        const v4313 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc9, v4312, ctc10), null);
        const v4315 = {
          rewards: v4224,
          stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v4318 = stdlib.fromSome(v4313, v4315);
        const v4319 = v4318.stake;
        const v4327 = v4318.rewards;
        const v4328 = v4327[stdlib.checkedBigNumberify('./staker.rsh:245:60:array ref', stdlib.UInt_max, '0')];
        const v4329 = v4265[stdlib.checkedBigNumberify('./staker.rsh:247:65:array ref', stdlib.UInt_max, '0')];
        const v4330 = stdlib.safeMul256(v4319, v4329);
        const v4331 = stdlib.safeDiv256(v4330, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        let v4332;
        const v4333 = stdlib.ge256(v4328, v4331);
        if (v4333) {
          v4332 = stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        else {
          const v4334 = stdlib.safeSub256(v4331, v4328);
          v4332 = v4334;
          }
        const v4335 = v4242[stdlib.checkedBigNumberify('./staker.rsh:251:58:array ref', stdlib.UInt_max, '0')];
        const v4336 = stdlib.le256(v4332, v4335);
        const v4337 = v4336 ? v4332 : v4335;
        const v4338 = [v4337];
        
        return v4338;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _rewardsAvailableAt = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4079, v4092, v4096] = svs;
      return (await ((async (_v4119, _v4120, _v4121 ) => {
          const v4119 = stdlib.protect(ctc1, _v4119, null);
          const v4120 = stdlib.protect(ctc2, _v4120, null);
          const v4121 = stdlib.protect(ctc1, _v4121, null);
        
        const v4122 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v4119, ctc8), null);
        const v4125 = await ctc.getContractAddress();
        const v4126 = [v4079];
        const v4127 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v4128 = {
          end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewardToken: v4126,
          rewards: v4127,
          stakeToken: v4079,
          start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v4132 = {
          lastRewardsPerShare_: v4127,
          lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          opts: v4128,
          poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remainingRewards: v4127,
          rewarder: v4125,
          rewardsPerBlock_: v4127,
          totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v4140 = stdlib.fromSome(v4122, v4132);
        let v4141;
        const v4142 = v4140.opts;
        const v4143 = v4140.totalStaked;
        const v4144 = v4140.lastRewardsRefreshed;
        const v4145 = v4140.lastRewardsPerShare_;
        const v4146 = v4140.rewardsPerBlock_;
        const v4147 = v4142.end;
        const v4151 = v4142.start;
        const v4152 = stdlib.eq256(v4143, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        if (v4152) {
          v4141 = v4145;
          }
        else {
          const v4153 = stdlib.le(v4147, v4121);
          const v4154 = v4153 ? v4147 : v4121;
          const v4155 = stdlib.ge(v4151, v4144);
          const v4156 = v4155 ? v4151 : v4144;
          let v4157;
          const v4158 = stdlib.ge(v4156, v4154);
          if (v4158) {
            v4157 = stdlib.checkedBigNumberify('./staker.rsh:55:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v4159 = stdlib.safeSub(v4154, v4156);
            v4157 = v4159;
            }
          const v4160 = v4146[stdlib.checkedBigNumberify('./staker.rsh:232:44:array ref', stdlib.UInt_max, '0')];
          const v4161 = stdlib.cast("UInt", "UInt256", v4157, false, true);
          const v4162 = stdlib.safeMul256(v4160, v4161);
          const v4163 = stdlib.safeDiv256(v4162, v4143);
          const v4164 = v4145[stdlib.checkedBigNumberify('./staker.rsh:233:40:array ref', stdlib.UInt_max, '0')];
          const v4165 = stdlib.safeAdd256(v4164, v4163);
          const v4166 = [v4165];
          v4141 = v4166;
          }
        const v4186 = v4140.remainingRewards;
        const v4187 = v4140.poolId;
        const v4188 = [v4187, v4120];
        const v4189 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc9, v4188, ctc10), null);
        const v4191 = {
          rewards: v4127,
          stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v4194 = stdlib.fromSome(v4189, v4191);
        const v4195 = v4194.stake;
        const v4203 = v4194.rewards;
        const v4204 = v4203[stdlib.checkedBigNumberify('./staker.rsh:245:60:array ref', stdlib.UInt_max, '0')];
        const v4205 = v4141[stdlib.checkedBigNumberify('./staker.rsh:247:65:array ref', stdlib.UInt_max, '0')];
        const v4206 = stdlib.safeMul256(v4195, v4205);
        const v4207 = stdlib.safeDiv256(v4206, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        let v4208;
        const v4209 = stdlib.ge256(v4204, v4207);
        if (v4209) {
          v4208 = stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        else {
          const v4210 = stdlib.safeSub256(v4207, v4204);
          v4208 = v4210;
          }
        const v4211 = v4186[stdlib.checkedBigNumberify('./staker.rsh:251:58:array ref', stdlib.UInt_max, '0')];
        const v4212 = stdlib.le256(v4208, v4211);
        const v4213 = v4212 ? v4208 : v4211;
        const v4214 = [v4213];
        
        return v4214;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _staked = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4079, v4092, v4096] = svs;
      return (await ((async (_v4081, _v4082 ) => {
          const v4081 = stdlib.protect(ctc1, _v4081, null);
          const v4082 = stdlib.protect(ctc2, _v4082, null);
        
        const v4083 = [v4081, v4082];
        const v4084 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc9, v4083, ctc10), null);
        const v4085 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v4086 = {
          rewards: v4085,
          stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v4089 = stdlib.fromSome(v4084, v4086);
        const v4090 = v4089.stake;
        
        return v4090;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        decode: _Info,
        dom: [ctc1],
        rng: ctc8
        },
      Opts: {
        decode: _Opts,
        dom: [],
        rng: ctc7
        },
      rewardsAvailable: {
        decode: _rewardsAvailable,
        dom: [ctc1, ctc2],
        rng: ctc6
        },
      rewardsAvailableAt: {
        decode: _rewardsAvailableAt,
        dom: [ctc1, ctc2, ctc1],
        rng: ctc6
        },
      staked: {
        decode: _staked,
        dom: [ctc1, ctc2],
        rng: ctc5
        }
      },
    views: {
      3: [ctc0, ctc3, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc2], ['rewards', ctc5], ['start', ctc1], ['end', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc6], ['rewarder', ctc7], ['totalStaked', ctc4], ['remainingRewards', ctc5], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc5], ['rewardsPerBlock_', ctc5]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['stake', ctc4], ['rewards', ctc5]]);
  const ctc11 = stdlib.T_Data({
    None: ctc0,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc9, ctc11]);
  return {
    mapDataTy: ctc12
    };
  };
export async function _Admin_deletePool3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_deletePool3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_deletePool3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc2], ['rewards', ctc5], ['start', ctc1], ['end', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc6], ['rewarder', ctc7], ['totalStaked', ctc4], ['remainingRewards', ctc5], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc5], ['rewardsPerBlock_', ctc5]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['stake', ctc4], ['rewards', ctc5]]);
  const ctc11 = stdlib.T_Data({
    None: ctc0,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Object({
    fee: ctc1,
    manager: ctc7,
    poolCount: ctc1,
    poolIndex: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Admin_deletePool0_921: ctc13,
    Admin_grant0_921: ctc14,
    Admin_updateFee0_921: ctc13,
    Funder_deployPool0_921: ctc15,
    Staker_emergencyWithdraw0_921: ctc13,
    Staker_harvest0_921: ctc13,
    Staker_stake0_921: ctc16,
    Staker_withdraw0_921: ctc16,
    nop0_921: ctc17,
    touch0_921: ctc17
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc11;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v4079, v4092, v4096] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc12, ctc1]);
  const v4388 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:346:38:application call to [unknown function] (defined at: ./staker.rsh:346:38:function exp)', 'at ./staker.rsh:171:29:application call to "runAdmin_deletePool0_921" (defined at: ./staker.rsh:346:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'in',
    who: 'Admin_deletePool'
    });
  const v4389 = v4388[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4391 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v4389, ctc8), null);
  const v4392 = {
    None: 0,
    Some: 1
    }[v4391[0]];
  const v4393 = stdlib.eq(v4392, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v4393, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:347:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:346:38:application call to [unknown function] (defined at: ./staker.rsh:346:38:function exp)', 'at ./staker.rsh:171:29:application call to "runAdmin_deletePool0_921" (defined at: ./staker.rsh:346:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'pool does not exist',
    who: 'Admin_deletePool'
    });
  const v4395 = v4092.poolCount;
  const v4396 = stdlib.gt(v4395, stdlib.checkedBigNumberify('./staker.rsh:348:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v4396, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:348:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:346:38:application call to [unknown function] (defined at: ./staker.rsh:346:38:function exp)', 'at ./staker.rsh:171:29:application call to "runAdmin_deletePool0_921" (defined at: ./staker.rsh:346:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'no pools to delete',
    who: 'Admin_deletePool'
    });
  const v4401 = await ctc.getContractAddress();
  const v4402 = [v4079];
  const v4403 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v4404 = {
    end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    rewardToken: v4402,
    rewards: v4403,
    stakeToken: v4079,
    start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v4408 = {
    lastRewardsPerShare_: v4403,
    lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    opts: v4404,
    poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    remainingRewards: v4403,
    rewarder: v4401,
    rewardsPerBlock_: v4403,
    totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v4416 = stdlib.fromSome(v4391, v4408);
  const v4417 = v4416.totalStaked;
  const v4418 = stdlib.eq256(v4417, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v4418, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:351:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:346:38:application call to [unknown function] (defined at: ./staker.rsh:346:38:function exp)', 'at ./staker.rsh:171:29:application call to "runAdmin_deletePool0_921" (defined at: ./staker.rsh:346:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'can only delete empty pool',
    who: 'Admin_deletePool'
    });
  const v4425 = ['Admin_deletePool0_921', v4388];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4079, v4092, v4096, v4425],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:346:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
      
      switch (v4879[0]) {
        case 'Admin_deletePool0_921': {
          const v4882 = v4879[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deletePool"
            });
          ;
          const v4897 = v4882[stdlib.checkedBigNumberify('./staker.rsh:346:10:spread', stdlib.UInt_max, '0')];
          const v4898 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc1, v4897, ctc8), null);
          const v4902 = v4092.poolCount;
          const v4908 = await ctc.getContractAddress();
          const v4909 = [v4079];
          const v4910 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v4911 = {
            end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewardToken: v4909,
            rewards: v4910,
            stakeToken: v4079,
            start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v4915 = {
            lastRewardsPerShare_: v4910,
            lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            opts: v4911,
            poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            remainingRewards: v4910,
            rewarder: v4908,
            rewardsPerBlock_: v4910,
            totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v4923 = stdlib.fromSome(v4898, v4915);
          await stdlib.simMapSet(sim_r, 0, ctc1, v4897, ctc8, undefined /* Nothing */);
          const v4928 = await txn1.getOutput('Admin_deletePool', 'v4923', ctc8, v4923);
          
          null;
          const v4952 = v4092.fee;
          const v4953 = v4092.manager;
          const v4955 = v4092.poolIndex;
          const v4957 = stdlib.safeSub(v4902, stdlib.checkedBigNumberify('./staker.rsh:360:40:decimal', stdlib.UInt_max, '1'));
          const v4958 = {
            fee: v4952,
            manager: v4953,
            poolCount: v4957,
            poolIndex: v4955
            };
          const v14801 = v4958;
          const v14804 = v4096;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Admin_grant0_921': {
          const v5660 = v4879[1];
          
          break;
          }
        case 'Admin_updateFee0_921': {
          const v6438 = v4879[1];
          
          break;
          }
        case 'Funder_deployPool0_921': {
          const v7216 = v4879[1];
          
          break;
          }
        case 'Staker_emergencyWithdraw0_921': {
          const v7994 = v4879[1];
          
          break;
          }
        case 'Staker_harvest0_921': {
          const v8772 = v4879[1];
          
          break;
          }
        case 'Staker_stake0_921': {
          const v9550 = v4879[1];
          
          break;
          }
        case 'Staker_withdraw0_921': {
          const v10328 = v4879[1];
          
          break;
          }
        case 'nop0_921': {
          const v11106 = v4879[1];
          
          break;
          }
        case 'touch0_921': {
          const v11884 = v4879[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc12, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
  switch (v4879[0]) {
    case 'Admin_deletePool0_921': {
      const v4882 = v4879[1];
      undefined /* setApiDetails */;
      ;
      const v4897 = v4882[stdlib.checkedBigNumberify('./staker.rsh:346:10:spread', stdlib.UInt_max, '0')];
      const v4898 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v4897, ctc8), null);
      const v4899 = {
        None: 0,
        Some: 1
        }[v4898[0]];
      const v4900 = stdlib.eq(v4899, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4900, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:347:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:353:13:application call to [unknown function] (defined at: ./staker.rsh:353:13:function exp)'],
        msg: 'pool does not exist',
        who: 'Admin_deletePool'
        });
      const v4902 = v4092.poolCount;
      const v4903 = stdlib.gt(v4902, stdlib.checkedBigNumberify('./staker.rsh:348:27:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4903, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:348:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:353:13:application call to [unknown function] (defined at: ./staker.rsh:353:13:function exp)'],
        msg: 'no pools to delete',
        who: 'Admin_deletePool'
        });
      const v4908 = await ctc.getContractAddress();
      const v4909 = [v4079];
      const v4910 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v4911 = {
        end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewardToken: v4909,
        rewards: v4910,
        stakeToken: v4079,
        start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v4915 = {
        lastRewardsPerShare_: v4910,
        lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        opts: v4911,
        poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        remainingRewards: v4910,
        rewarder: v4908,
        rewardsPerBlock_: v4910,
        totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v4923 = stdlib.fromSome(v4898, v4915);
      const v4924 = v4923.totalStaked;
      const v4925 = stdlib.eq256(v4924, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v4925, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:351:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:353:13:application call to [unknown function] (defined at: ./staker.rsh:353:13:function exp)'],
        msg: 'can only delete empty pool',
        who: 'Admin_deletePool'
        });
      await stdlib.mapSet(map0, ctc1, v4897, ctc8, undefined /* Nothing */);
      const v4928 = await txn1.getOutput('Admin_deletePool', 'v4923', ctc8, v4923);
      if (v2663) {
        stdlib.protect(ctc0, await interact.out(v4882, v4928), {
          at: './staker.rsh:346:11:application',
          fs: ['at ./staker.rsh:346:11:application call to [unknown function] (defined at: ./staker.rsh:346:11:function exp)', 'at ./staker.rsh:355:12:application call to "k" (defined at: ./staker.rsh:353:13:function exp)', 'at ./staker.rsh:353:13:application call to [unknown function] (defined at: ./staker.rsh:353:13:function exp)'],
          msg: 'out',
          who: 'Admin_deletePool'
          });
        }
      else {
        }
      
      null;
      const v4952 = v4092.fee;
      const v4953 = v4092.manager;
      const v4955 = v4092.poolIndex;
      const v4957 = stdlib.safeSub(v4902, stdlib.checkedBigNumberify('./staker.rsh:360:40:decimal', stdlib.UInt_max, '1'));
      const v4958 = {
        fee: v4952,
        manager: v4953,
        poolCount: v4957,
        poolIndex: v4955
        };
      const v14801 = v4958;
      const v14804 = v4096;
      return;
      
      break;
      }
    case 'Admin_grant0_921': {
      const v5660 = v4879[1];
      return;
      break;
      }
    case 'Admin_updateFee0_921': {
      const v6438 = v4879[1];
      return;
      break;
      }
    case 'Funder_deployPool0_921': {
      const v7216 = v4879[1];
      return;
      break;
      }
    case 'Staker_emergencyWithdraw0_921': {
      const v7994 = v4879[1];
      return;
      break;
      }
    case 'Staker_harvest0_921': {
      const v8772 = v4879[1];
      return;
      break;
      }
    case 'Staker_stake0_921': {
      const v9550 = v4879[1];
      return;
      break;
      }
    case 'Staker_withdraw0_921': {
      const v10328 = v4879[1];
      return;
      break;
      }
    case 'nop0_921': {
      const v11106 = v4879[1];
      return;
      break;
      }
    case 'touch0_921': {
      const v11884 = v4879[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_grant3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_grant3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_grant3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc2], ['rewards', ctc5], ['start', ctc1], ['end', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc6], ['rewarder', ctc7], ['totalStaked', ctc4], ['remainingRewards', ctc5], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc5], ['rewardsPerBlock_', ctc5]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['stake', ctc4], ['rewards', ctc5]]);
  const ctc11 = stdlib.T_Data({
    None: ctc0,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Object({
    fee: ctc1,
    manager: ctc7,
    poolCount: ctc1,
    poolIndex: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Admin_deletePool0_921: ctc14,
    Admin_grant0_921: ctc13,
    Admin_updateFee0_921: ctc14,
    Funder_deployPool0_921: ctc15,
    Staker_emergencyWithdraw0_921: ctc14,
    Staker_harvest0_921: ctc14,
    Staker_stake0_921: ctc16,
    Staker_withdraw0_921: ctc16,
    nop0_921: ctc17,
    touch0_921: ctc17
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc11;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v4079, v4092, v4096] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc12, ctc1]);
  const v4820 = ctc.selfAddress();
  const v4822 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:565:31:application call to [unknown function] (defined at: ./staker.rsh:565:31:function exp)', 'at ./staker.rsh:171:29:application call to "runAdmin_grant0_921" (defined at: ./staker.rsh:565:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'in',
    who: 'Admin_grant'
    });
  const v4825 = v4092.manager;
  const v4826 = stdlib.addressEq(v4825, v4820);
  stdlib.assert(v4826, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:566:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:565:31:application call to [unknown function] (defined at: ./staker.rsh:565:31:function exp)', 'at ./staker.rsh:171:29:application call to "runAdmin_grant0_921" (defined at: ./staker.rsh:565:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'must be manager',
    who: 'Admin_grant'
    });
  const v4833 = ['Admin_grant0_921', v4822];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4079, v4092, v4096, v4833],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:565:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
      
      switch (v4879[0]) {
        case 'Admin_deletePool0_921': {
          const v4882 = v4879[1];
          
          break;
          }
        case 'Admin_grant0_921': {
          const v5660 = v4879[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_grant"
            });
          ;
          const v5740 = v5660[stdlib.checkedBigNumberify('./staker.rsh:565:10:spread', stdlib.UInt_max, '0')];
          const v5745 = null;
          const v5746 = await txn1.getOutput('Admin_grant', 'v5745', ctc0, v5745);
          
          const v5752 = v4092.fee;
          const v5754 = v4092.poolCount;
          const v5755 = v4092.poolIndex;
          const v5756 = {
            fee: v5752,
            manager: v5740,
            poolCount: v5754,
            poolIndex: v5755
            };
          const v14845 = v5756;
          const v14848 = v4096;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Admin_updateFee0_921': {
          const v6438 = v4879[1];
          
          break;
          }
        case 'Funder_deployPool0_921': {
          const v7216 = v4879[1];
          
          break;
          }
        case 'Staker_emergencyWithdraw0_921': {
          const v7994 = v4879[1];
          
          break;
          }
        case 'Staker_harvest0_921': {
          const v8772 = v4879[1];
          
          break;
          }
        case 'Staker_stake0_921': {
          const v9550 = v4879[1];
          
          break;
          }
        case 'Staker_withdraw0_921': {
          const v10328 = v4879[1];
          
          break;
          }
        case 'nop0_921': {
          const v11106 = v4879[1];
          
          break;
          }
        case 'touch0_921': {
          const v11884 = v4879[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc12, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
  switch (v4879[0]) {
    case 'Admin_deletePool0_921': {
      const v4882 = v4879[1];
      return;
      break;
      }
    case 'Admin_grant0_921': {
      const v5660 = v4879[1];
      undefined /* setApiDetails */;
      ;
      const v5740 = v5660[stdlib.checkedBigNumberify('./staker.rsh:565:10:spread', stdlib.UInt_max, '0')];
      const v5741 = v4092.manager;
      const v5742 = stdlib.addressEq(v5741, v4878);
      stdlib.assert(v5742, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:566:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:568:13:application call to [unknown function] (defined at: ./staker.rsh:568:13:function exp)'],
        msg: 'must be manager',
        who: 'Admin_grant'
        });
      const v5745 = null;
      const v5746 = await txn1.getOutput('Admin_grant', 'v5745', ctc0, v5745);
      if (v2663) {
        stdlib.protect(ctc0, await interact.out(v5660, v5746), {
          at: './staker.rsh:565:11:application',
          fs: ['at ./staker.rsh:565:11:application call to [unknown function] (defined at: ./staker.rsh:565:11:function exp)', 'at ./staker.rsh:569:12:application call to "k" (defined at: ./staker.rsh:568:13:function exp)', 'at ./staker.rsh:568:13:application call to [unknown function] (defined at: ./staker.rsh:568:13:function exp)'],
          msg: 'out',
          who: 'Admin_grant'
          });
        }
      else {
        }
      
      const v5752 = v4092.fee;
      const v5754 = v4092.poolCount;
      const v5755 = v4092.poolIndex;
      const v5756 = {
        fee: v5752,
        manager: v5740,
        poolCount: v5754,
        poolIndex: v5755
        };
      const v14845 = v5756;
      const v14848 = v4096;
      return;
      
      break;
      }
    case 'Admin_updateFee0_921': {
      const v6438 = v4879[1];
      return;
      break;
      }
    case 'Funder_deployPool0_921': {
      const v7216 = v4879[1];
      return;
      break;
      }
    case 'Staker_emergencyWithdraw0_921': {
      const v7994 = v4879[1];
      return;
      break;
      }
    case 'Staker_harvest0_921': {
      const v8772 = v4879[1];
      return;
      break;
      }
    case 'Staker_stake0_921': {
      const v9550 = v4879[1];
      return;
      break;
      }
    case 'Staker_withdraw0_921': {
      const v10328 = v4879[1];
      return;
      break;
      }
    case 'nop0_921': {
      const v11106 = v4879[1];
      return;
      break;
      }
    case 'touch0_921': {
      const v11884 = v4879[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_updateFee3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_updateFee3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_updateFee3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc2], ['rewards', ctc5], ['start', ctc1], ['end', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc6], ['rewarder', ctc7], ['totalStaked', ctc4], ['remainingRewards', ctc5], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc5], ['rewardsPerBlock_', ctc5]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['stake', ctc4], ['rewards', ctc5]]);
  const ctc11 = stdlib.T_Data({
    None: ctc0,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Object({
    fee: ctc1,
    manager: ctc7,
    poolCount: ctc1,
    poolIndex: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Admin_deletePool0_921: ctc13,
    Admin_grant0_921: ctc14,
    Admin_updateFee0_921: ctc13,
    Funder_deployPool0_921: ctc15,
    Staker_emergencyWithdraw0_921: ctc13,
    Staker_harvest0_921: ctc13,
    Staker_stake0_921: ctc16,
    Staker_withdraw0_921: ctc16,
    nop0_921: ctc17,
    touch0_921: ctc17
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc11;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v4079, v4092, v4096] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc12, ctc1]);
  const v4835 = ctc.selfAddress();
  const v4837 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:583:34:application call to [unknown function] (defined at: ./staker.rsh:583:34:function exp)', 'at ./staker.rsh:171:29:application call to "runAdmin_updateFee0_921" (defined at: ./staker.rsh:583:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'in',
    who: 'Admin_updateFee'
    });
  const v4838 = v4837[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4840 = v4092.manager;
  const v4841 = stdlib.addressEq(v4840, v4835);
  stdlib.assert(v4841, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:584:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:583:34:application call to [unknown function] (defined at: ./staker.rsh:583:34:function exp)', 'at ./staker.rsh:171:29:application call to "runAdmin_updateFee0_921" (defined at: ./staker.rsh:583:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'must be manager',
    who: 'Admin_updateFee'
    });
  const v4843 = stdlib.le(v4838, stdlib.checkedBigNumberify('./staker.rsh:585:20:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v4843, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:585:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:583:34:application call to [unknown function] (defined at: ./staker.rsh:583:34:function exp)', 'at ./staker.rsh:171:29:application call to "runAdmin_updateFee0_921" (defined at: ./staker.rsh:583:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'fee must be <= 100%',
    who: 'Admin_updateFee'
    });
  const v4850 = ['Admin_updateFee0_921', v4837];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4079, v4092, v4096, v4850],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:583:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
      
      switch (v4879[0]) {
        case 'Admin_deletePool0_921': {
          const v4882 = v4879[1];
          
          break;
          }
        case 'Admin_grant0_921': {
          const v5660 = v4879[1];
          
          break;
          }
        case 'Admin_updateFee0_921': {
          const v6438 = v4879[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_updateFee"
            });
          ;
          const v6538 = v6438[stdlib.checkedBigNumberify('./staker.rsh:583:10:spread', stdlib.UInt_max, '0')];
          const v6539 = v4092.manager;
          const v6545 = null;
          const v6546 = await txn1.getOutput('Admin_updateFee', 'v6545', ctc0, v6545);
          
          const v6554 = v4092.poolCount;
          const v6555 = v4092.poolIndex;
          const v6556 = {
            fee: v6538,
            manager: v6539,
            poolCount: v6554,
            poolIndex: v6555
            };
          const v14889 = v6556;
          const v14892 = v4096;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Funder_deployPool0_921': {
          const v7216 = v4879[1];
          
          break;
          }
        case 'Staker_emergencyWithdraw0_921': {
          const v7994 = v4879[1];
          
          break;
          }
        case 'Staker_harvest0_921': {
          const v8772 = v4879[1];
          
          break;
          }
        case 'Staker_stake0_921': {
          const v9550 = v4879[1];
          
          break;
          }
        case 'Staker_withdraw0_921': {
          const v10328 = v4879[1];
          
          break;
          }
        case 'nop0_921': {
          const v11106 = v4879[1];
          
          break;
          }
        case 'touch0_921': {
          const v11884 = v4879[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc12, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
  switch (v4879[0]) {
    case 'Admin_deletePool0_921': {
      const v4882 = v4879[1];
      return;
      break;
      }
    case 'Admin_grant0_921': {
      const v5660 = v4879[1];
      return;
      break;
      }
    case 'Admin_updateFee0_921': {
      const v6438 = v4879[1];
      undefined /* setApiDetails */;
      ;
      const v6538 = v6438[stdlib.checkedBigNumberify('./staker.rsh:583:10:spread', stdlib.UInt_max, '0')];
      const v6539 = v4092.manager;
      const v6540 = stdlib.addressEq(v6539, v4878);
      stdlib.assert(v6540, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:584:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:587:13:application call to [unknown function] (defined at: ./staker.rsh:587:13:function exp)'],
        msg: 'must be manager',
        who: 'Admin_updateFee'
        });
      const v6542 = stdlib.le(v6538, stdlib.checkedBigNumberify('./staker.rsh:585:20:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v6542, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:585:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:587:13:application call to [unknown function] (defined at: ./staker.rsh:587:13:function exp)'],
        msg: 'fee must be <= 100%',
        who: 'Admin_updateFee'
        });
      const v6545 = null;
      const v6546 = await txn1.getOutput('Admin_updateFee', 'v6545', ctc0, v6545);
      if (v2663) {
        stdlib.protect(ctc0, await interact.out(v6438, v6546), {
          at: './staker.rsh:583:11:application',
          fs: ['at ./staker.rsh:583:11:application call to [unknown function] (defined at: ./staker.rsh:583:11:function exp)', 'at ./staker.rsh:588:12:application call to "k" (defined at: ./staker.rsh:587:13:function exp)', 'at ./staker.rsh:587:13:application call to [unknown function] (defined at: ./staker.rsh:587:13:function exp)'],
          msg: 'out',
          who: 'Admin_updateFee'
          });
        }
      else {
        }
      
      const v6554 = v4092.poolCount;
      const v6555 = v4092.poolIndex;
      const v6556 = {
        fee: v6538,
        manager: v6539,
        poolCount: v6554,
        poolIndex: v6555
        };
      const v14889 = v6556;
      const v14892 = v4096;
      return;
      
      break;
      }
    case 'Funder_deployPool0_921': {
      const v7216 = v4879[1];
      return;
      break;
      }
    case 'Staker_emergencyWithdraw0_921': {
      const v7994 = v4879[1];
      return;
      break;
      }
    case 'Staker_harvest0_921': {
      const v8772 = v4879[1];
      return;
      break;
      }
    case 'Staker_stake0_921': {
      const v9550 = v4879[1];
      return;
      break;
      }
    case 'Staker_withdraw0_921': {
      const v10328 = v4879[1];
      return;
      break;
      }
    case 'nop0_921': {
      const v11106 = v4879[1];
      return;
      break;
      }
    case 'touch0_921': {
      const v11884 = v4879[1];
      return;
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc2], ['rewards', ctc5], ['start', ctc1], ['end', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc6], ['rewarder', ctc7], ['totalStaked', ctc4], ['remainingRewards', ctc5], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc5], ['rewardsPerBlock_', ctc5]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['stake', ctc4], ['rewards', ctc5]]);
  const ctc11 = stdlib.T_Data({
    None: ctc0,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Object({
    zeroAddress: ctc7
    });
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Admin_deletePool0_921: ctc13,
    Admin_grant0_921: ctc14,
    Admin_updateFee0_921: ctc13,
    Funder_deployPool0_921: ctc15,
    Staker_emergencyWithdraw0_921: ctc13,
    Staker_harvest0_921: ctc13,
    Staker_stake0_921: ctc16,
    Staker_withdraw0_921: ctc16,
    nop0_921: ctc17,
    touch0_921: ctc17
    });
  const ctc19 = stdlib.T_Bool;
  const ctc20 = stdlib.T_Tuple([ctc1, ctc19]);
  const ctc21 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc22 = stdlib.T_Struct([['newUserStaked', ctc4], ['newEveryoneStaked', ctc4]]);
  const ctc23 = stdlib.T_Struct([['userReceived', ctc5], ['totalRemaining', ctc5]]);
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc11;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const v4070 = stdlib.protect(ctc12, interact.params, 'for Deployer\'s interact field params');
  const v4071 = v4070.zeroAddress;
  
  const txn1 = await (ctc.sendrecv({
    args: [v4071],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./staker.rsh:148:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:148:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v4076], secs: v4078, time: v4077, didSend: v36, from: v4075 } = txn1;
      
      ;
      const v4079 = await ctc.getContractInfo();
      
      const v4091 = {
        fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'),
        manager: v4075,
        poolCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        poolIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v4092 = v4091;
      const v4093 = v4077;
      const v4094 = v4078;
      const v4096 = stdlib.checkedBigNumberify('./staker.rsh:142:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v4076], secs: v4078, time: v4077, didSend: v36, from: v4075 } = txn1;
  ;
  const v4079 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v4079), {
    at: './staker.rsh:150:19:application',
    fs: ['at ./staker.rsh:150:19:application call to [unknown function] (defined at: ./staker.rsh:150:19:function exp)', 'at ./staker.rsh:150:19:application call to "liftedInteract" (defined at: ./staker.rsh:150:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v4091 = {
    fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'),
    manager: v4075,
    poolCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    poolIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v4092 = v4091;
  let v4093 = v4077;
  let v4094 = v4078;
  let v4096 = stdlib.checkedBigNumberify('./staker.rsh:142:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc18],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn3;
    switch (v4879[0]) {
      case 'Admin_deletePool0_921': {
        const v4882 = v4879[1];
        undefined /* setApiDetails */;
        ;
        const v4897 = v4882[stdlib.checkedBigNumberify('./staker.rsh:346:10:spread', stdlib.UInt_max, '0')];
        const v4898 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v4897, ctc8), null);
        const v4899 = {
          None: 0,
          Some: 1
          }[v4898[0]];
        const v4900 = stdlib.eq(v4899, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4900, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:347:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:353:13:application call to [unknown function] (defined at: ./staker.rsh:353:13:function exp)'],
          msg: 'pool does not exist',
          who: 'Deployer'
          });
        const v4902 = v4092.poolCount;
        const v4903 = stdlib.gt(v4902, stdlib.checkedBigNumberify('./staker.rsh:348:27:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4903, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:348:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:353:13:application call to [unknown function] (defined at: ./staker.rsh:353:13:function exp)'],
          msg: 'no pools to delete',
          who: 'Deployer'
          });
        const v4908 = await ctc.getContractAddress();
        const v4909 = [v4079];
        const v4910 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v4911 = {
          end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewardToken: v4909,
          rewards: v4910,
          stakeToken: v4079,
          start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v4915 = {
          lastRewardsPerShare_: v4910,
          lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          opts: v4911,
          poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remainingRewards: v4910,
          rewarder: v4908,
          rewardsPerBlock_: v4910,
          totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v4923 = stdlib.fromSome(v4898, v4915);
        const v4924 = v4923.totalStaked;
        const v4925 = stdlib.eq256(v4924, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v4925, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:351:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:353:13:application call to [unknown function] (defined at: ./staker.rsh:353:13:function exp)'],
          msg: 'can only delete empty pool',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc1, v4897, ctc8, undefined /* Nothing */);
        await txn3.getOutput('Admin_deletePool', 'v4923', ctc8, v4923);
        null;
        const v4952 = v4092.fee;
        const v4953 = v4092.manager;
        const v4955 = v4092.poolIndex;
        const v4957 = stdlib.safeSub(v4902, stdlib.checkedBigNumberify('./staker.rsh:360:40:decimal', stdlib.UInt_max, '1'));
        const v4958 = {
          fee: v4952,
          manager: v4953,
          poolCount: v4957,
          poolIndex: v4955
          };
        const cv4092 = v4958;
        const cv4093 = v4880;
        const cv4094 = v4881;
        const cv4096 = v4096;
        
        v4092 = cv4092;
        v4093 = cv4093;
        v4094 = cv4094;
        v4096 = cv4096;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_grant0_921': {
        const v5660 = v4879[1];
        undefined /* setApiDetails */;
        ;
        const v5740 = v5660[stdlib.checkedBigNumberify('./staker.rsh:565:10:spread', stdlib.UInt_max, '0')];
        const v5741 = v4092.manager;
        const v5742 = stdlib.addressEq(v5741, v4878);
        stdlib.assert(v5742, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:566:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:568:13:application call to [unknown function] (defined at: ./staker.rsh:568:13:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v5745 = null;
        await txn3.getOutput('Admin_grant', 'v5745', ctc0, v5745);
        const v5752 = v4092.fee;
        const v5754 = v4092.poolCount;
        const v5755 = v4092.poolIndex;
        const v5756 = {
          fee: v5752,
          manager: v5740,
          poolCount: v5754,
          poolIndex: v5755
          };
        const cv4092 = v5756;
        const cv4093 = v4880;
        const cv4094 = v4881;
        const cv4096 = v4096;
        
        v4092 = cv4092;
        v4093 = cv4093;
        v4094 = cv4094;
        v4096 = cv4096;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_updateFee0_921': {
        const v6438 = v4879[1];
        undefined /* setApiDetails */;
        ;
        const v6538 = v6438[stdlib.checkedBigNumberify('./staker.rsh:583:10:spread', stdlib.UInt_max, '0')];
        const v6539 = v4092.manager;
        const v6540 = stdlib.addressEq(v6539, v4878);
        stdlib.assert(v6540, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:584:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:587:13:application call to [unknown function] (defined at: ./staker.rsh:587:13:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v6542 = stdlib.le(v6538, stdlib.checkedBigNumberify('./staker.rsh:585:20:decimal', stdlib.UInt_max, '10000'));
        stdlib.assert(v6542, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:585:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:587:13:application call to [unknown function] (defined at: ./staker.rsh:587:13:function exp)'],
          msg: 'fee must be <= 100%',
          who: 'Deployer'
          });
        const v6545 = null;
        await txn3.getOutput('Admin_updateFee', 'v6545', ctc0, v6545);
        const v6554 = v4092.poolCount;
        const v6555 = v4092.poolIndex;
        const v6556 = {
          fee: v6538,
          manager: v6539,
          poolCount: v6554,
          poolIndex: v6555
          };
        const cv4092 = v6556;
        const cv4093 = v4880;
        const cv4094 = v4881;
        const cv4096 = v4096;
        
        v4092 = cv4092;
        v4093 = cv4093;
        v4094 = cv4094;
        v4096 = cv4096;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Funder_deployPool0_921': {
        const v7216 = v4879[1];
        undefined /* setApiDetails */;
        ;
        const v7338 = v7216[stdlib.checkedBigNumberify('./staker.rsh:298:10:spread', stdlib.UInt_max, '0')];
        const v7339 = v7338.rewardToken;
        const v7340 = v7338.stakeToken;
        const v7341 = v7338.rewards;
        const v7342 = v7338.start;
        const v7343 = v7338.end;
        const v7344 = stdlib.gt(v7343, v7342);
        stdlib.assert(v7344, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:294:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:301:53:application call to "safeDuration" (defined at: ./staker.rsh:293:41:function exp)', 'at ./staker.rsh:304:13:application call to [unknown function] (defined at: ./staker.rsh:304:13:function exp)'],
          msg: 'end must be after start',
          who: 'Deployer'
          });
        const v7346 = stdlib.safeSub(v7343, v7342);
        const v7347 = v7341[stdlib.checkedBigNumberify('./staker.rsh:289:41:array ref', stdlib.UInt_max, '0')];
        const v7348 = stdlib.safeMul256(v7347, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        const v7349 = stdlib.cast("UInt", "UInt256", v7346, false, true);
        const v7350 = stdlib.safeDiv256(v7348, v7349);
        const v7359 = v4092.fee;
        const v7360 = stdlib.cast("UInt", "UInt256", v7359, false, true);
        const v7361 = stdlib.safeMul256(v7347, v7360);
        const v7362 = stdlib.safeMul256(v7361, stdlib.checkedBigNumberify('./staker.rsh:305:36:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000'));
        const v7363 = stdlib.safeDiv256(v7362, stdlib.checkedBigNumberify('./staker.rsh:308:21:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v7364 = stdlib.safeDiv256(v7363, stdlib.checkedBigNumberify('./staker.rsh:305:36:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000'));
        const v7365 = v7339[stdlib.checkedBigNumberify('./staker.rsh:310:47:array ref', stdlib.UInt_max, '0')];
        const v7366 = v4092.manager;
        const v7367 = await ctc.getContractAddress();
        const v7368 = [v7365, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
        const v7369 = [v7365, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7366];
        const v7370 = [v4878, v7367];
        const v7371 = [v7365, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v7370];
        const v7374 = [];
        const v7375 = stdlib.bytesFromHex("0x4a968f8f");
        const v7376 = undefined /* Remote */;
        const v7377 = await txn3.getOutput('internal', 'v7376', ctc20, v7376);
        const v7379 = v7377[stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0')];
        const v7384 = stdlib.add(v4096, v7379);
        const v7385 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7379);
        stdlib.assert(v7385, {
          at: './staker.rsh:209:13:application',
          fs: ['at ./staker.rsh:310:35:application call to [unknown function] (defined at: ./staker.rsh:192:54:function exp)', 'at ./staker.rsh:304:13:application call to [unknown function] (defined at: ./staker.rsh:304:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v7386 = v4092.poolIndex;
        const v7387 = stdlib.safeAdd(v7386, stdlib.checkedBigNumberify('./staker.rsh:311:31:decimal', stdlib.UInt_max, '1'));
        const v7390 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v7391 = [v7350];
        const v7392 = {
          lastRewardsPerShare_: v7390,
          lastRewardsRefreshed: v7342,
          opts: v7338,
          poolId: v7387,
          remainingRewards: v7341,
          rewarder: v4878,
          rewardsPerBlock_: v7391,
          totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        await stdlib.mapSet(map0, ctc1, v7387, ctc8, v7392);
        null;
        await txn3.getOutput('Funder_deployPool', 'v7387', ctc1, v7387);
        const v7414 = v4092.poolCount;
        const v7419 = stdlib.safeAdd(v7414, stdlib.checkedBigNumberify('./staker.rsh:335:40:decimal', stdlib.UInt_max, '1'));
        const v7420 = {
          fee: v7359,
          manager: v7366,
          poolCount: v7419,
          poolIndex: v7387
          };
        const cv4092 = v7420;
        const cv4093 = v4880;
        const cv4094 = v4881;
        const cv4096 = v7384;
        
        v4092 = cv4092;
        v4093 = cv4093;
        v4094 = cv4094;
        v4096 = cv4096;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Staker_emergencyWithdraw0_921': {
        const v7994 = v4879[1];
        undefined /* setApiDetails */;
        ;
        const v8202 = v7994[stdlib.checkedBigNumberify('./staker.rsh:476:10:spread', stdlib.UInt_max, '0')];
        const v8203 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v8202, ctc8), null);
        const v8204 = {
          None: 0,
          Some: 1
          }[v8203[0]];
        const v8205 = stdlib.eq(v8204, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v8205, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:477:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:495:13:application call to [unknown function] (defined at: ./staker.rsh:495:13:function exp)'],
          msg: 'pool does not exist',
          who: 'Deployer'
          });
        const v8210 = await ctc.getContractAddress();
        const v8211 = [v4079];
        const v8212 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v8213 = {
          end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewardToken: v8211,
          rewards: v8212,
          stakeToken: v4079,
          start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v8217 = {
          lastRewardsPerShare_: v8212,
          lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          opts: v8213,
          poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remainingRewards: v8212,
          rewarder: v8210,
          rewardsPerBlock_: v8212,
          totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v8225 = stdlib.fromSome(v8203, v8217);
        const v8226 = v8225.lastRewardsPerShare_;
        const v8227 = v8225.lastRewardsRefreshed;
        const v8228 = v8225.opts;
        const v8229 = v8225.poolId;
        const v8230 = v8225.remainingRewards;
        const v8231 = v8225.rewarder;
        const v8232 = v8225.rewardsPerBlock_;
        const v8233 = v8225.totalStaked;
        const v8234 = v8228.stakeToken;
        const v8235 = [v8202, v4878];
        const v8236 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc21, v8235, ctc10), null);
        const v8238 = {
          rewards: v8212,
          stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v8241 = stdlib.fromSome(v8236, v8238);
        const v8242 = v8241.stake;
        const v8243 = stdlib.gt256(v8242, stdlib.checkedBigNumberify('./staker.rsh:484:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v8243, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:484:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:495:13:application call to [unknown function] (defined at: ./staker.rsh:495:13:function exp)'],
          msg: 'can only withdraw if balance is sufficient',
          who: 'Deployer'
          });
        const v8245 = stdlib.le256(v8242, v8233);
        stdlib.assert(v8245, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:485:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:495:13:application call to [unknown function] (defined at: ./staker.rsh:495:13:function exp)'],
          msg: 'can only withdraw if balance is sufficient',
          who: 'Deployer'
          });
        const v8247 = stdlib.safeSub256(v8233, v8242);
        const v8250 = [v8234, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8210];
        const v8251 = [v8234, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
        const v8254 = [];
        const v8255 = stdlib.bytesFromHex("0xda7025b9");
        const v8256 = undefined /* Remote */;
        const v8257 = await txn3.getOutput('internal', 'v8256', ctc20, v8256);
        const v8259 = v8257[stdlib.checkedBigNumberify('./staker.rsh:190:13:application', stdlib.UInt_max, '0')];
        const v8264 = stdlib.add(v4096, v8259);
        const v8265 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8259);
        stdlib.assert(v8265, {
          at: './staker.rsh:190:13:application',
          fs: ['at ./staker.rsh:496:31:application call to [unknown function] (defined at: ./staker.rsh:177:43:function exp)', 'at ./staker.rsh:495:13:application call to [unknown function] (defined at: ./staker.rsh:495:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v8274 = v8241.rewards;
        const v8276 = {
          rewards: v8274,
          stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        await stdlib.mapSet(map1, ctc21, v8235, ctc10, v8276);
        const v8277 = {
          newEveryoneStaked: v8247,
          newUserStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        null;
        const v8286 = {
          lastRewardsPerShare_: v8226,
          lastRewardsRefreshed: v8227,
          opts: v8228,
          poolId: v8229,
          remainingRewards: v8230,
          rewarder: v8231,
          rewardsPerBlock_: v8232,
          totalStaked: v8247
          };
        await stdlib.mapSet(map0, ctc1, v8202, ctc8, v8286);
        await txn3.getOutput('Staker_emergencyWithdraw', 'v8277', ctc22, v8277);
        const cv4092 = v4092;
        const cv4093 = v4880;
        const cv4094 = v4881;
        const cv4096 = v8264;
        
        v4092 = cv4092;
        v4093 = cv4093;
        v4094 = cv4094;
        v4096 = cv4096;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Staker_harvest0_921': {
        const v8772 = v4879[1];
        undefined /* setApiDetails */;
        ;
        const v9076 = v8772[stdlib.checkedBigNumberify('./staker.rsh:515:10:spread', stdlib.UInt_max, '0')];
        const v9077 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v9076, ctc8), null);
        const v9078 = {
          None: 0,
          Some: 1
          }[v9077[0]];
        const v9079 = stdlib.eq(v9078, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v9079, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:516:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:537:13:application call to [unknown function] (defined at: ./staker.rsh:537:13:function exp)'],
          msg: 'pool does not exist',
          who: 'Deployer'
          });
        const v9084 = await ctc.getContractAddress();
        const v9085 = [v4079];
        const v9086 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v9087 = {
          end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewardToken: v9085,
          rewards: v9086,
          stakeToken: v4079,
          start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v9091 = {
          lastRewardsPerShare_: v9086,
          lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          opts: v9087,
          poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remainingRewards: v9086,
          rewarder: v9084,
          rewardsPerBlock_: v9086,
          totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v9099 = stdlib.fromSome(v9077, v9091);
        const v9100 = v9099.remainingRewards;
        const v9101 = v9099.opts;
        const v9102 = v9101.rewardToken;
        const v9103 = v9099.rewarder;
        let v9105;
        const v9107 = v9099.totalStaked;
        const v9108 = v9099.lastRewardsRefreshed;
        const v9109 = v9099.lastRewardsPerShare_;
        const v9110 = v9099.rewardsPerBlock_;
        const v9111 = v9101.end;
        const v9115 = v9101.start;
        const v9116 = stdlib.eq256(v9107, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        if (v9116) {
          v9105 = v9109;
          }
        else {
          const v9117 = stdlib.le(v9111, v4881);
          const v9118 = v9117 ? v9111 : v4881;
          const v9119 = stdlib.ge(v9115, v9108);
          const v9120 = v9119 ? v9115 : v9108;
          let v9121;
          const v9122 = stdlib.ge(v9120, v9118);
          if (v9122) {
            v9121 = stdlib.checkedBigNumberify('./staker.rsh:55:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v9123 = stdlib.safeSub(v9118, v9120);
            v9121 = v9123;
            }
          const v9124 = v9110[stdlib.checkedBigNumberify('./staker.rsh:232:44:array ref', stdlib.UInt_max, '0')];
          const v9125 = stdlib.cast("UInt", "UInt256", v9121, false, true);
          const v9126 = stdlib.safeMul256(v9124, v9125);
          const v9127 = stdlib.safeDiv256(v9126, v9107);
          const v9128 = v9109[stdlib.checkedBigNumberify('./staker.rsh:233:40:array ref', stdlib.UInt_max, '0')];
          const v9129 = stdlib.safeAdd256(v9128, v9127);
          const v9130 = [v9129];
          v9105 = v9130;
          }
        const v9151 = v9099.poolId;
        const v9152 = [v9151, v4878];
        const v9153 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc21, v9152, ctc10), null);
        const v9155 = {
          rewards: v9086,
          stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v9158 = stdlib.fromSome(v9153, v9155);
        const v9159 = v9158.stake;
        const v9167 = v9158.rewards;
        const v9168 = v9167[stdlib.checkedBigNumberify('./staker.rsh:245:60:array ref', stdlib.UInt_max, '0')];
        const v9169 = v9105[stdlib.checkedBigNumberify('./staker.rsh:247:65:array ref', stdlib.UInt_max, '0')];
        const v9170 = stdlib.safeMul256(v9159, v9169);
        const v9171 = stdlib.safeDiv256(v9170, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        let v9172;
        const v9173 = stdlib.ge256(v9168, v9171);
        if (v9173) {
          v9172 = stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        else {
          const v9174 = stdlib.safeSub256(v9171, v9168);
          v9172 = v9174;
          }
        const v9175 = v9100[stdlib.checkedBigNumberify('./staker.rsh:251:58:array ref', stdlib.UInt_max, '0')];
        const v9176 = stdlib.le256(v9172, v9175);
        const v9177 = v9176 ? v9172 : v9175;
        const v9178 = [v9177];
        const v9179 = [v9076, v4878];
        const v9180 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc21, v9179, ctc10), null);
        const v9185 = stdlib.fromSome(v9180, v9155);
        const v9186 = v9185.rewards;
        const v9193 = stdlib.safeSub256(v9175, v9177);
        const v9195 = v9102[stdlib.checkedBigNumberify('./staker.rsh:539:24:array ref', stdlib.UInt_max, '0')];
        const v9197 = [v9195, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9103];
        const v9198 = [v9195, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
        const v9199 = [v9103, v9084];
        const v9200 = [v9195, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v9199];
        const v9203 = [];
        const v9204 = stdlib.bytesFromHex("0x4a968f8f");
        const v9205 = undefined /* Remote */;
        const v9206 = await txn3.getOutput('internal', 'v9205', ctc20, v9205);
        const v9208 = v9206[stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0')];
        const v9213 = stdlib.add(v4096, v9208);
        const v9214 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9208);
        stdlib.assert(v9214, {
          at: './staker.rsh:209:13:application',
          fs: ['at ./staker.rsh:538:35:application call to [unknown function] (defined at: ./staker.rsh:192:54:function exp)', 'at ./staker.rsh:537:13:application call to [unknown function] (defined at: ./staker.rsh:537:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v9224 = v9185.stake;
        const v9225 = v9186[stdlib.checkedBigNumberify('./staker.rsh:530:43:array ref', stdlib.UInt_max, '0')];
        const v9226 = stdlib.safeAdd256(v9225, v9177);
        const v9227 = [v9226];
        const v9228 = {
          rewards: v9227,
          stake: v9224
          };
        await stdlib.mapSet(map1, ctc21, v9179, ctc10, v9228);
        const v9230 = [v9193];
        const v9231 = {
          totalRemaining: v9230,
          userReceived: v9178
          };
        await txn3.getOutput('Staker_harvest', 'v9231', ctc23, v9231);
        null;
        const v9254 = {
          lastRewardsPerShare_: v9105,
          lastRewardsRefreshed: v4881,
          opts: v9101,
          poolId: v9151,
          remainingRewards: v9230,
          rewarder: v9103,
          rewardsPerBlock_: v9110,
          totalStaked: v9107
          };
        await stdlib.mapSet(map0, ctc1, v9076, ctc8, v9254);
        const cv4092 = v4092;
        const cv4093 = v4880;
        const cv4094 = v4881;
        const cv4096 = v9213;
        
        v4092 = cv4092;
        v4093 = cv4093;
        v4094 = cv4094;
        v4096 = cv4096;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Staker_stake0_921': {
        const v9550 = v4879[1];
        undefined /* setApiDetails */;
        ;
        const v10035 = v9550[stdlib.checkedBigNumberify('./staker.rsh:372:10:spread', stdlib.UInt_max, '0')];
        const v10036 = v9550[stdlib.checkedBigNumberify('./staker.rsh:372:10:spread', stdlib.UInt_max, '1')];
        const v10037 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v10035, ctc8), null);
        const v10038 = {
          None: 0,
          Some: 1
          }[v10037[0]];
        const v10039 = stdlib.eq(v10038, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v10039, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:373:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:400:13:application call to [unknown function] (defined at: ./staker.rsh:400:13:function exp)'],
          msg: 'pool does not exist',
          who: 'Deployer'
          });
        const v10044 = await ctc.getContractAddress();
        const v10045 = [v4079];
        const v10046 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v10047 = {
          end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewardToken: v10045,
          rewards: v10046,
          stakeToken: v4079,
          start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v10051 = {
          lastRewardsPerShare_: v10046,
          lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          opts: v10047,
          poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remainingRewards: v10046,
          rewarder: v10044,
          rewardsPerBlock_: v10046,
          totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v10059 = stdlib.fromSome(v10037, v10051);
        const v10060 = v10059.lastRewardsPerShare_;
        const v10061 = v10059.lastRewardsRefreshed;
        const v10062 = v10059.opts;
        const v10063 = v10059.poolId;
        const v10064 = v10059.remainingRewards;
        const v10065 = v10059.rewarder;
        const v10066 = v10059.rewardsPerBlock_;
        const v10067 = v10059.totalStaked;
        const v10068 = v10062.end;
        const v10069 = v10062.stakeToken;
        const v10071 = stdlib.lt(v10061, v10068);
        stdlib.assert(v10071, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:381:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:400:13:application call to [unknown function] (defined at: ./staker.rsh:400:13:function exp)'],
          msg: 'can only stake before the end',
          who: 'Deployer'
          });
        const v10073 = stdlib.gt256(v10036, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v10073, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:384:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:400:13:application call to [unknown function] (defined at: ./staker.rsh:400:13:function exp)'],
          msg: 'must stake more than 0',
          who: 'Deployer'
          });
        let v10075;
        const v10085 = v10062.start;
        const v10086 = stdlib.eq256(v10067, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        if (v10086) {
          v10075 = v10060;
          }
        else {
          const v10087 = stdlib.le(v10068, v4881);
          const v10088 = v10087 ? v10068 : v4881;
          const v10089 = stdlib.ge(v10085, v10061);
          const v10090 = v10089 ? v10085 : v10061;
          let v10091;
          const v10092 = stdlib.ge(v10090, v10088);
          if (v10092) {
            v10091 = stdlib.checkedBigNumberify('./staker.rsh:55:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v10093 = stdlib.safeSub(v10088, v10090);
            v10091 = v10093;
            }
          const v10094 = v10066[stdlib.checkedBigNumberify('./staker.rsh:232:44:array ref', stdlib.UInt_max, '0')];
          const v10095 = stdlib.cast("UInt", "UInt256", v10091, false, true);
          const v10096 = stdlib.safeMul256(v10094, v10095);
          const v10097 = stdlib.safeDiv256(v10096, v10067);
          const v10098 = v10060[stdlib.checkedBigNumberify('./staker.rsh:233:40:array ref', stdlib.UInt_max, '0')];
          const v10099 = stdlib.safeAdd256(v10098, v10097);
          const v10100 = [v10099];
          v10075 = v10100;
          }
        const v10101 = stdlib.safeAdd256(v10067, v10036);
        const v10102 = [v10035, v4878];
        const v10103 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc21, v10102, ctc10), null);
        const v10105 = {
          rewards: v10046,
          stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v10108 = stdlib.fromSome(v10103, v10105);
        const v10109 = v10108.stake;
        const v10110 = stdlib.safeAdd256(v10109, v10036);
        const v10118 = v10108.rewards;
        const v10119 = v10075[stdlib.checkedBigNumberify('./staker.rsh:395:58:array ref', stdlib.UInt_max, '0')];
        const v10120 = stdlib.safeMul256(v10036, v10119);
        const v10121 = stdlib.safeDiv256(v10120, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        const v10122 = v10118[stdlib.checkedBigNumberify('./staker.rsh:396:27:array ref', stdlib.UInt_max, '0')];
        const v10123 = stdlib.safeAdd256(v10122, v10121);
        const v10128 = [v10069, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
        const v10129 = [v10069, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10044];
        const v10130 = [v4878, v10044];
        const v10131 = [v10069, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v10130];
        const v10134 = [];
        const v10135 = stdlib.bytesFromHex("0x4a968f8f");
        const v10136 = undefined /* Remote */;
        const v10137 = await txn3.getOutput('internal', 'v10136', ctc20, v10136);
        const v10139 = v10137[stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0')];
        const v10144 = stdlib.add(v4096, v10139);
        const v10145 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10139);
        stdlib.assert(v10145, {
          at: './staker.rsh:209:13:application',
          fs: ['at ./staker.rsh:401:35:application call to [unknown function] (defined at: ./staker.rsh:192:54:function exp)', 'at ./staker.rsh:400:13:application call to [unknown function] (defined at: ./staker.rsh:400:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v10147 = [v10123];
        const v10148 = {
          rewards: v10147,
          stake: v10110
          };
        await stdlib.mapSet(map1, ctc21, v10102, ctc10, v10148);
        const v10157 = {
          lastRewardsPerShare_: v10075,
          lastRewardsRefreshed: v4881,
          opts: v10062,
          poolId: v10063,
          remainingRewards: v10064,
          rewarder: v10065,
          rewardsPerBlock_: v10066,
          totalStaked: v10101
          };
        await stdlib.mapSet(map0, ctc1, v10035, ctc8, v10157);
        const v10158 = {
          newEveryoneStaked: v10101,
          newUserStaked: v10110
          };
        null;
        await txn3.getOutput('Staker_stake', 'v10158', ctc22, v10158);
        const cv4092 = v4092;
        const cv4093 = v4880;
        const cv4094 = v4881;
        const cv4096 = v10144;
        
        v4092 = cv4092;
        v4093 = cv4093;
        v4094 = cv4094;
        v4096 = cv4096;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Staker_withdraw0_921': {
        const v10328 = v4879[1];
        undefined /* setApiDetails */;
        ;
        const v10949 = v10328[stdlib.checkedBigNumberify('./staker.rsh:426:10:spread', stdlib.UInt_max, '0')];
        const v10950 = v10328[stdlib.checkedBigNumberify('./staker.rsh:426:10:spread', stdlib.UInt_max, '1')];
        const v10951 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v10949, ctc8), null);
        const v10952 = {
          None: 0,
          Some: 1
          }[v10951[0]];
        const v10953 = stdlib.eq(v10952, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v10953, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:427:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:450:13:application call to [unknown function] (defined at: ./staker.rsh:450:13:function exp)'],
          msg: 'pool does not exist',
          who: 'Deployer'
          });
        const v10958 = await ctc.getContractAddress();
        const v10959 = [v4079];
        const v10960 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v10961 = {
          end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewardToken: v10959,
          rewards: v10960,
          stakeToken: v4079,
          start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v10965 = {
          lastRewardsPerShare_: v10960,
          lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          opts: v10961,
          poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remainingRewards: v10960,
          rewarder: v10958,
          rewardsPerBlock_: v10960,
          totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v10973 = stdlib.fromSome(v10951, v10965);
        const v10974 = v10973.lastRewardsPerShare_;
        const v10975 = v10973.lastRewardsRefreshed;
        const v10976 = v10973.opts;
        const v10977 = v10973.poolId;
        const v10978 = v10973.remainingRewards;
        const v10979 = v10973.rewarder;
        const v10980 = v10973.rewardsPerBlock_;
        const v10981 = v10973.totalStaked;
        const v10982 = v10976.stakeToken;
        const v10983 = [v10949, v4878];
        const v10984 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc21, v10983, ctc10), null);
        const v10986 = {
          rewards: v10960,
          stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v10989 = stdlib.fromSome(v10984, v10986);
        const v10990 = v10989.stake;
        const v10991 = stdlib.le256(v10950, v10990);
        stdlib.assert(v10991, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:434:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:450:13:application call to [unknown function] (defined at: ./staker.rsh:450:13:function exp)'],
          msg: 'can only withdraw if balance is sufficient',
          who: 'Deployer'
          });
        const v10993 = stdlib.safeSub256(v10990, v10950);
        const v10994 = stdlib.le256(v10950, v10981);
        stdlib.assert(v10994, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./staker.rsh:436:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:450:13:application call to [unknown function] (defined at: ./staker.rsh:450:13:function exp)'],
          msg: 'can only withdraw if balance is sufficient',
          who: 'Deployer'
          });
        const v10996 = stdlib.safeSub256(v10981, v10950);
        const v11004 = v10989.rewards;
        let v11006;
        const v11012 = v10976.end;
        const v11016 = v10976.start;
        const v11017 = stdlib.eq256(v10981, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        if (v11017) {
          v11006 = v10974;
          }
        else {
          const v11018 = stdlib.le(v11012, v4881);
          const v11019 = v11018 ? v11012 : v4881;
          const v11020 = stdlib.ge(v11016, v10975);
          const v11021 = v11020 ? v11016 : v10975;
          let v11022;
          const v11023 = stdlib.ge(v11021, v11019);
          if (v11023) {
            v11022 = stdlib.checkedBigNumberify('./staker.rsh:55:25:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v11024 = stdlib.safeSub(v11019, v11021);
            v11022 = v11024;
            }
          const v11025 = v10980[stdlib.checkedBigNumberify('./staker.rsh:232:44:array ref', stdlib.UInt_max, '0')];
          const v11026 = stdlib.cast("UInt", "UInt256", v11022, false, true);
          const v11027 = stdlib.safeMul256(v11025, v11026);
          const v11028 = stdlib.safeDiv256(v11027, v10981);
          const v11029 = v10974[stdlib.checkedBigNumberify('./staker.rsh:233:40:array ref', stdlib.UInt_max, '0')];
          const v11030 = stdlib.safeAdd256(v11029, v11028);
          const v11031 = [v11030];
          v11006 = v11031;
          }
        const v11032 = v11004[stdlib.checkedBigNumberify('./staker.rsh:443:48:array ref', stdlib.UInt_max, '0')];
        const v11033 = v11006[stdlib.checkedBigNumberify('./staker.rsh:441:63:array ref', stdlib.UInt_max, '0')];
        const v11034 = stdlib.safeMul256(v10950, v11033);
        const v11035 = stdlib.safeDiv256(v11034, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
        let v11036;
        const v11037 = stdlib.ge256(v11035, v11032);
        if (v11037) {
          v11036 = stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        else {
          const v11038 = stdlib.safeSub256(v11032, v11035);
          v11036 = v11038;
          }
        const v11041 = {
          newEveryoneStaked: v10996,
          newUserStaked: v10993
          };
        await txn3.getOutput('Staker_withdraw', 'v11041', ctc22, v11041);
        const v11052 = [v10982, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10958];
        const v11053 = [v10982, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
        const v11056 = [];
        const v11057 = stdlib.bytesFromHex("0xda7025b9");
        const v11058 = undefined /* Remote */;
        const v11059 = await txn3.getOutput('internal', 'v11058', ctc20, v11058);
        const v11061 = v11059[stdlib.checkedBigNumberify('./staker.rsh:190:13:application', stdlib.UInt_max, '0')];
        const v11066 = stdlib.add(v4096, v11061);
        const v11067 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11061);
        stdlib.assert(v11067, {
          at: './staker.rsh:190:13:application',
          fs: ['at ./staker.rsh:452:31:application call to [unknown function] (defined at: ./staker.rsh:177:43:function exp)', 'at ./staker.rsh:450:13:application call to [unknown function] (defined at: ./staker.rsh:450:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v11069 = [v11036];
        const v11070 = {
          rewards: v11069,
          stake: v10993
          };
        await stdlib.mapSet(map1, ctc21, v10983, ctc10, v11070);
        null;
        const v11080 = {
          lastRewardsPerShare_: v10974,
          lastRewardsRefreshed: v10975,
          opts: v10976,
          poolId: v10977,
          remainingRewards: v10978,
          rewarder: v10979,
          rewardsPerBlock_: v10980,
          totalStaked: v10996
          };
        await stdlib.mapSet(map0, ctc1, v10949, ctc8, v11080);
        const cv4092 = v4092;
        const cv4093 = v4880;
        const cv4094 = v4881;
        const cv4096 = v11066;
        
        v4092 = cv4092;
        v4093 = cv4093;
        v4094 = cv4094;
        v4096 = cv4096;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'nop0_921': {
        const v11106 = v4879[1];
        undefined /* setApiDetails */;
        ;
        const v11861 = null;
        await txn3.getOutput('nop', 'v11861', ctc0, v11861);
        const cv4092 = v4092;
        const cv4093 = v4880;
        const cv4094 = v4881;
        const cv4096 = v4096;
        
        v4092 = cv4092;
        v4093 = cv4093;
        v4094 = cv4094;
        v4096 = cv4096;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_921': {
        const v11884 = v4879[1];
        undefined /* setApiDetails */;
        ;
        const v12648 = (stdlib.le(await ctc.getBalance(), v4096) ? stdlib.checkedBigNumberify('./staker.rsh:600:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4096));
        const v12649 = stdlib.safeAdd(v12648, v4096);
        const v12650 = v4092.manager;
        const v12654 = stdlib.sub(v12649, v12648);
        ;
        const v12655 = null;
        await txn3.getOutput('touch', 'v12655', ctc0, v12655);
        const cv4092 = v4092;
        const cv4093 = v4880;
        const cv4094 = v4881;
        const cv4096 = v12654;
        
        v4092 = cv4092;
        v4093 = cv4093;
        v4094 = cv4094;
        v4096 = cv4096;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _Funder_deployPool3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Funder_deployPool3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Funder_deployPool3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc2], ['rewards', ctc5], ['start', ctc1], ['end', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc6], ['rewarder', ctc7], ['totalStaked', ctc4], ['remainingRewards', ctc5], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc5], ['rewardsPerBlock_', ctc5]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['stake', ctc4], ['rewards', ctc5]]);
  const ctc11 = stdlib.T_Data({
    None: ctc0,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Object({
    fee: ctc1,
    manager: ctc7,
    poolCount: ctc1,
    poolIndex: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Admin_deletePool0_921: ctc14,
    Admin_grant0_921: ctc15,
    Admin_updateFee0_921: ctc14,
    Funder_deployPool0_921: ctc13,
    Staker_emergencyWithdraw0_921: ctc14,
    Staker_harvest0_921: ctc14,
    Staker_stake0_921: ctc16,
    Staker_withdraw0_921: ctc16,
    nop0_921: ctc17,
    touch0_921: ctc17
    });
  const ctc19 = stdlib.T_Bool;
  const ctc20 = stdlib.T_Tuple([ctc1, ctc19]);
  const ctc21 = stdlib.T_Tuple([ctc2, ctc1, ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc23 = stdlib.T_Tuple([ctc2, ctc1, ctc22]);
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc11;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v4079, v4092, v4096] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc12, ctc1]);
  const v4344 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:298:37:application call to [unknown function] (defined at: ./staker.rsh:298:37:function exp)', 'at ./staker.rsh:171:29:application call to "runFunder_deployPool0_921" (defined at: ./staker.rsh:298:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'in',
    who: 'Funder_deployPool'
    });
  const v4345 = v4344[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4349 = v4345.start;
  const v4350 = v4345.end;
  const v4359 = stdlib.gt(v4350, v4349);
  stdlib.assert(v4359, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:294:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:301:53:application call to "safeDuration" (defined at: ./staker.rsh:293:41:function exp)', 'at ./staker.rsh:298:37:application call to [unknown function] (defined at: ./staker.rsh:298:37:function exp)', 'at ./staker.rsh:171:29:application call to "runFunder_deployPool0_921" (defined at: ./staker.rsh:298:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'end must be after start',
    who: 'Funder_deployPool'
    });
  const v4384 = ['Funder_deployPool0_921', v4344];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4079, v4092, v4096, v4384],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:298:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
      
      switch (v4879[0]) {
        case 'Admin_deletePool0_921': {
          const v4882 = v4879[1];
          
          break;
          }
        case 'Admin_grant0_921': {
          const v5660 = v4879[1];
          
          break;
          }
        case 'Admin_updateFee0_921': {
          const v6438 = v4879[1];
          
          break;
          }
        case 'Funder_deployPool0_921': {
          const v7216 = v4879[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Funder_deployPool"
            });
          ;
          const v7338 = v7216[stdlib.checkedBigNumberify('./staker.rsh:298:10:spread', stdlib.UInt_max, '0')];
          const v7339 = v7338.rewardToken;
          const v7340 = v7338.stakeToken;
          const v7341 = v7338.rewards;
          const v7342 = v7338.start;
          const v7343 = v7338.end;
          const v7346 = stdlib.safeSub(v7343, v7342);
          const v7347 = v7341[stdlib.checkedBigNumberify('./staker.rsh:289:41:array ref', stdlib.UInt_max, '0')];
          const v7348 = stdlib.safeMul256(v7347, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v7349 = stdlib.cast("UInt", "UInt256", v7346, false, true);
          const v7350 = stdlib.safeDiv256(v7348, v7349);
          const v7359 = v4092.fee;
          const v7360 = stdlib.cast("UInt", "UInt256", v7359, false, true);
          const v7361 = stdlib.safeMul256(v7347, v7360);
          const v7362 = stdlib.safeMul256(v7361, stdlib.checkedBigNumberify('./staker.rsh:305:36:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000'));
          const v7363 = stdlib.safeDiv256(v7362, stdlib.checkedBigNumberify('./staker.rsh:308:21:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v7364 = stdlib.safeDiv256(v7363, stdlib.checkedBigNumberify('./staker.rsh:305:36:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000'));
          const v7365 = v7339[stdlib.checkedBigNumberify('./staker.rsh:310:47:array ref', stdlib.UInt_max, '0')];
          const v7366 = v4092.manager;
          const v7367 = await ctc.getContractAddress();
          const v7368 = [v7365, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
          const v7369 = [v7365, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7366];
          const v7370 = [v4878, v7367];
          const v7371 = [v7365, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v7370];
          const v7374 = [];
          const v7375 = stdlib.bytesFromHex("0x4a968f8f");
          const v7376 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v7365,
              remote: ({
                accs: [v4878, v7366],
                apps: [v7365],
                bills: stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0'),
                boxes: [[ctc21, v7368], [ctc21, v7369], [ctc23, v7371]],
                fees: stdlib.checkedBigNumberify('./staker.rsh:202:19:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc19.defaultValue /* simReturnVal */];})();
          const v7377 = await txn1.getOutput('internal', 'v7376', ctc20, v7376);
          const v7379 = v7377[stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0')];
          const v7384 = stdlib.add(v4096, v7379);
          const v7386 = v4092.poolIndex;
          const v7387 = stdlib.safeAdd(v7386, stdlib.checkedBigNumberify('./staker.rsh:311:31:decimal', stdlib.UInt_max, '1'));
          const v7390 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v7391 = [v7350];
          const v7392 = {
            lastRewardsPerShare_: v7390,
            lastRewardsRefreshed: v7342,
            opts: v7338,
            poolId: v7387,
            remainingRewards: v7341,
            rewarder: v4878,
            rewardsPerBlock_: v7391,
            totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          await stdlib.simMapSet(sim_r, 0, ctc1, v7387, ctc8, v7392);
          null;
          const v7399 = await txn1.getOutput('Funder_deployPool', 'v7387', ctc1, v7387);
          
          const v7414 = v4092.poolCount;
          const v7419 = stdlib.safeAdd(v7414, stdlib.checkedBigNumberify('./staker.rsh:335:40:decimal', stdlib.UInt_max, '1'));
          const v7420 = {
            fee: v7359,
            manager: v7366,
            poolCount: v7419,
            poolIndex: v7387
            };
          const v14933 = v7420;
          const v14936 = v7384;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_emergencyWithdraw0_921': {
          const v7994 = v4879[1];
          
          break;
          }
        case 'Staker_harvest0_921': {
          const v8772 = v4879[1];
          
          break;
          }
        case 'Staker_stake0_921': {
          const v9550 = v4879[1];
          
          break;
          }
        case 'Staker_withdraw0_921': {
          const v10328 = v4879[1];
          
          break;
          }
        case 'nop0_921': {
          const v11106 = v4879[1];
          
          break;
          }
        case 'touch0_921': {
          const v11884 = v4879[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc12, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
  switch (v4879[0]) {
    case 'Admin_deletePool0_921': {
      const v4882 = v4879[1];
      return;
      break;
      }
    case 'Admin_grant0_921': {
      const v5660 = v4879[1];
      return;
      break;
      }
    case 'Admin_updateFee0_921': {
      const v6438 = v4879[1];
      return;
      break;
      }
    case 'Funder_deployPool0_921': {
      const v7216 = v4879[1];
      undefined /* setApiDetails */;
      ;
      const v7338 = v7216[stdlib.checkedBigNumberify('./staker.rsh:298:10:spread', stdlib.UInt_max, '0')];
      const v7339 = v7338.rewardToken;
      const v7340 = v7338.stakeToken;
      const v7341 = v7338.rewards;
      const v7342 = v7338.start;
      const v7343 = v7338.end;
      const v7344 = stdlib.gt(v7343, v7342);
      stdlib.assert(v7344, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:294:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:301:53:application call to "safeDuration" (defined at: ./staker.rsh:293:41:function exp)', 'at ./staker.rsh:304:13:application call to [unknown function] (defined at: ./staker.rsh:304:13:function exp)'],
        msg: 'end must be after start',
        who: 'Funder_deployPool'
        });
      const v7346 = stdlib.safeSub(v7343, v7342);
      const v7347 = v7341[stdlib.checkedBigNumberify('./staker.rsh:289:41:array ref', stdlib.UInt_max, '0')];
      const v7348 = stdlib.safeMul256(v7347, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v7349 = stdlib.cast("UInt", "UInt256", v7346, false, true);
      const v7350 = stdlib.safeDiv256(v7348, v7349);
      const v7359 = v4092.fee;
      const v7360 = stdlib.cast("UInt", "UInt256", v7359, false, true);
      const v7361 = stdlib.safeMul256(v7347, v7360);
      const v7362 = stdlib.safeMul256(v7361, stdlib.checkedBigNumberify('./staker.rsh:305:36:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000'));
      const v7363 = stdlib.safeDiv256(v7362, stdlib.checkedBigNumberify('./staker.rsh:308:21:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v7364 = stdlib.safeDiv256(v7363, stdlib.checkedBigNumberify('./staker.rsh:305:36:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000'));
      const v7365 = v7339[stdlib.checkedBigNumberify('./staker.rsh:310:47:array ref', stdlib.UInt_max, '0')];
      const v7366 = v4092.manager;
      const v7367 = await ctc.getContractAddress();
      const v7368 = [v7365, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
      const v7369 = [v7365, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7366];
      const v7370 = [v4878, v7367];
      const v7371 = [v7365, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v7370];
      const v7374 = [];
      const v7375 = stdlib.bytesFromHex("0x4a968f8f");
      const v7376 = undefined /* Remote */;
      const v7377 = await txn1.getOutput('internal', 'v7376', ctc20, v7376);
      const v7379 = v7377[stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0')];
      const v7384 = stdlib.add(v4096, v7379);
      const v7385 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7379);
      stdlib.assert(v7385, {
        at: './staker.rsh:209:13:application',
        fs: ['at ./staker.rsh:310:35:application call to [unknown function] (defined at: ./staker.rsh:192:54:function exp)', 'at ./staker.rsh:304:13:application call to [unknown function] (defined at: ./staker.rsh:304:13:function exp)'],
        msg: 'remote bill check',
        who: 'Funder_deployPool'
        });
      const v7386 = v4092.poolIndex;
      const v7387 = stdlib.safeAdd(v7386, stdlib.checkedBigNumberify('./staker.rsh:311:31:decimal', stdlib.UInt_max, '1'));
      const v7390 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v7391 = [v7350];
      const v7392 = {
        lastRewardsPerShare_: v7390,
        lastRewardsRefreshed: v7342,
        opts: v7338,
        poolId: v7387,
        remainingRewards: v7341,
        rewarder: v4878,
        rewardsPerBlock_: v7391,
        totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      await stdlib.mapSet(map0, ctc1, v7387, ctc8, v7392);
      null;
      const v7399 = await txn1.getOutput('Funder_deployPool', 'v7387', ctc1, v7387);
      if (v2663) {
        stdlib.protect(ctc0, await interact.out(v7216, v7399), {
          at: './staker.rsh:298:11:application',
          fs: ['at ./staker.rsh:298:11:application call to [unknown function] (defined at: ./staker.rsh:298:11:function exp)', 'at ./staker.rsh:330:12:application call to "k" (defined at: ./staker.rsh:304:13:function exp)', 'at ./staker.rsh:304:13:application call to [unknown function] (defined at: ./staker.rsh:304:13:function exp)'],
          msg: 'out',
          who: 'Funder_deployPool'
          });
        }
      else {
        }
      
      const v7414 = v4092.poolCount;
      const v7419 = stdlib.safeAdd(v7414, stdlib.checkedBigNumberify('./staker.rsh:335:40:decimal', stdlib.UInt_max, '1'));
      const v7420 = {
        fee: v7359,
        manager: v7366,
        poolCount: v7419,
        poolIndex: v7387
        };
      const v14933 = v7420;
      const v14936 = v7384;
      return;
      
      break;
      }
    case 'Staker_emergencyWithdraw0_921': {
      const v7994 = v4879[1];
      return;
      break;
      }
    case 'Staker_harvest0_921': {
      const v8772 = v4879[1];
      return;
      break;
      }
    case 'Staker_stake0_921': {
      const v9550 = v4879[1];
      return;
      break;
      }
    case 'Staker_withdraw0_921': {
      const v10328 = v4879[1];
      return;
      break;
      }
    case 'nop0_921': {
      const v11106 = v4879[1];
      return;
      break;
      }
    case 'touch0_921': {
      const v11884 = v4879[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Staker_emergencyWithdraw3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_emergencyWithdraw3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_emergencyWithdraw3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc2], ['rewards', ctc5], ['start', ctc1], ['end', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc6], ['rewarder', ctc7], ['totalStaked', ctc4], ['remainingRewards', ctc5], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc5], ['rewardsPerBlock_', ctc5]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['stake', ctc4], ['rewards', ctc5]]);
  const ctc11 = stdlib.T_Data({
    None: ctc0,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Object({
    fee: ctc1,
    manager: ctc7,
    poolCount: ctc1,
    poolIndex: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Data({
    Admin_deletePool0_921: ctc13,
    Admin_grant0_921: ctc15,
    Admin_updateFee0_921: ctc13,
    Funder_deployPool0_921: ctc16,
    Staker_emergencyWithdraw0_921: ctc13,
    Staker_harvest0_921: ctc13,
    Staker_stake0_921: ctc17,
    Staker_withdraw0_921: ctc17,
    nop0_921: ctc18,
    touch0_921: ctc18
    });
  const ctc20 = stdlib.T_Bool;
  const ctc21 = stdlib.T_Tuple([ctc1, ctc20]);
  const ctc22 = stdlib.T_Struct([['newUserStaked', ctc4], ['newEveryoneStaked', ctc4]]);
  const ctc23 = stdlib.T_Tuple([ctc2, ctc1, ctc7]);
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc11;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v4079, v4092, v4096] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc12, ctc1]);
  const v4634 = ctc.selfAddress();
  const v4636 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:476:43:application call to [unknown function] (defined at: ./staker.rsh:476:43:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_emergencyWithdraw0_921" (defined at: ./staker.rsh:476:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'in',
    who: 'Staker_emergencyWithdraw'
    });
  const v4637 = v4636[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4639 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v4637, ctc8), null);
  const v4640 = {
    None: 0,
    Some: 1
    }[v4639[0]];
  const v4641 = stdlib.eq(v4640, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v4641, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:477:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:476:43:application call to [unknown function] (defined at: ./staker.rsh:476:43:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_emergencyWithdraw0_921" (defined at: ./staker.rsh:476:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'pool does not exist',
    who: 'Staker_emergencyWithdraw'
    });
  const v4646 = await ctc.getContractAddress();
  const v4647 = [v4079];
  const v4648 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v4649 = {
    end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    rewardToken: v4647,
    rewards: v4648,
    stakeToken: v4079,
    start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v4653 = {
    lastRewardsPerShare_: v4648,
    lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    opts: v4649,
    poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    remainingRewards: v4648,
    rewarder: v4646,
    rewardsPerBlock_: v4648,
    totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v4661 = stdlib.fromSome(v4639, v4653);
  const v4669 = v4661.totalStaked;
  const v4671 = [v4637, v4634];
  const v4672 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v4671, ctc10), null);
  const v4674 = {
    rewards: v4648,
    stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v4677 = stdlib.fromSome(v4672, v4674);
  const v4678 = v4677.stake;
  const v4679 = stdlib.gt256(v4678, stdlib.checkedBigNumberify('./staker.rsh:484:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v4679, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:484:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:476:43:application call to [unknown function] (defined at: ./staker.rsh:476:43:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_emergencyWithdraw0_921" (defined at: ./staker.rsh:476:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'can only withdraw if balance is sufficient',
    who: 'Staker_emergencyWithdraw'
    });
  const v4681 = stdlib.le256(v4678, v4669);
  stdlib.assert(v4681, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:485:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:476:43:application call to [unknown function] (defined at: ./staker.rsh:476:43:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_emergencyWithdraw0_921" (defined at: ./staker.rsh:476:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'can only withdraw if balance is sufficient',
    who: 'Staker_emergencyWithdraw'
    });
  const v4689 = ['Staker_emergencyWithdraw0_921', v4636];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4079, v4092, v4096, v4689],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:476:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
      
      switch (v4879[0]) {
        case 'Admin_deletePool0_921': {
          const v4882 = v4879[1];
          
          break;
          }
        case 'Admin_grant0_921': {
          const v5660 = v4879[1];
          
          break;
          }
        case 'Admin_updateFee0_921': {
          const v6438 = v4879[1];
          
          break;
          }
        case 'Funder_deployPool0_921': {
          const v7216 = v4879[1];
          
          break;
          }
        case 'Staker_emergencyWithdraw0_921': {
          const v7994 = v4879[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_emergencyWithdraw"
            });
          ;
          const v8202 = v7994[stdlib.checkedBigNumberify('./staker.rsh:476:10:spread', stdlib.UInt_max, '0')];
          const v8203 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc1, v8202, ctc8), null);
          const v8210 = await ctc.getContractAddress();
          const v8211 = [v4079];
          const v8212 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v8213 = {
            end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewardToken: v8211,
            rewards: v8212,
            stakeToken: v4079,
            start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v8217 = {
            lastRewardsPerShare_: v8212,
            lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            opts: v8213,
            poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            remainingRewards: v8212,
            rewarder: v8210,
            rewardsPerBlock_: v8212,
            totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v8225 = stdlib.fromSome(v8203, v8217);
          const v8226 = v8225.lastRewardsPerShare_;
          const v8227 = v8225.lastRewardsRefreshed;
          const v8228 = v8225.opts;
          const v8229 = v8225.poolId;
          const v8230 = v8225.remainingRewards;
          const v8231 = v8225.rewarder;
          const v8232 = v8225.rewardsPerBlock_;
          const v8233 = v8225.totalStaked;
          const v8234 = v8228.stakeToken;
          const v8235 = [v8202, v4878];
          const v8236 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc14, v8235, ctc10), null);
          const v8238 = {
            rewards: v8212,
            stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v8241 = stdlib.fromSome(v8236, v8238);
          const v8242 = v8241.stake;
          const v8247 = stdlib.safeSub256(v8233, v8242);
          const v8250 = [v8234, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8210];
          const v8251 = [v8234, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
          const v8254 = [];
          const v8255 = stdlib.bytesFromHex("0xda7025b9");
          const v8256 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v8234,
              remote: ({
                accs: [v4878],
                apps: [v8234],
                bills: stdlib.checkedBigNumberify('./staker.rsh:190:13:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v8250], [ctc23, v8251]],
                fees: stdlib.checkedBigNumberify('./staker.rsh:184:19:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./staker.rsh:190:13:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc20.defaultValue /* simReturnVal */];})();
          const v8257 = await txn1.getOutput('internal', 'v8256', ctc21, v8256);
          const v8259 = v8257[stdlib.checkedBigNumberify('./staker.rsh:190:13:application', stdlib.UInt_max, '0')];
          const v8264 = stdlib.add(v4096, v8259);
          const v8274 = v8241.rewards;
          const v8276 = {
            rewards: v8274,
            stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          await stdlib.simMapSet(sim_r, 1, ctc14, v8235, ctc10, v8276);
          const v8277 = {
            newEveryoneStaked: v8247,
            newUserStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          null;
          const v8286 = {
            lastRewardsPerShare_: v8226,
            lastRewardsRefreshed: v8227,
            opts: v8228,
            poolId: v8229,
            remainingRewards: v8230,
            rewarder: v8231,
            rewardsPerBlock_: v8232,
            totalStaked: v8247
            };
          await stdlib.simMapSet(sim_r, 0, ctc1, v8202, ctc8, v8286);
          const v8288 = await txn1.getOutput('Staker_emergencyWithdraw', 'v8277', ctc22, v8277);
          
          const v14977 = v4092;
          const v14980 = v8264;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_harvest0_921': {
          const v8772 = v4879[1];
          
          break;
          }
        case 'Staker_stake0_921': {
          const v9550 = v4879[1];
          
          break;
          }
        case 'Staker_withdraw0_921': {
          const v10328 = v4879[1];
          
          break;
          }
        case 'nop0_921': {
          const v11106 = v4879[1];
          
          break;
          }
        case 'touch0_921': {
          const v11884 = v4879[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc12, ctc1, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
  switch (v4879[0]) {
    case 'Admin_deletePool0_921': {
      const v4882 = v4879[1];
      return;
      break;
      }
    case 'Admin_grant0_921': {
      const v5660 = v4879[1];
      return;
      break;
      }
    case 'Admin_updateFee0_921': {
      const v6438 = v4879[1];
      return;
      break;
      }
    case 'Funder_deployPool0_921': {
      const v7216 = v4879[1];
      return;
      break;
      }
    case 'Staker_emergencyWithdraw0_921': {
      const v7994 = v4879[1];
      undefined /* setApiDetails */;
      ;
      const v8202 = v7994[stdlib.checkedBigNumberify('./staker.rsh:476:10:spread', stdlib.UInt_max, '0')];
      const v8203 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v8202, ctc8), null);
      const v8204 = {
        None: 0,
        Some: 1
        }[v8203[0]];
      const v8205 = stdlib.eq(v8204, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v8205, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:477:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:495:13:application call to [unknown function] (defined at: ./staker.rsh:495:13:function exp)'],
        msg: 'pool does not exist',
        who: 'Staker_emergencyWithdraw'
        });
      const v8210 = await ctc.getContractAddress();
      const v8211 = [v4079];
      const v8212 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v8213 = {
        end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewardToken: v8211,
        rewards: v8212,
        stakeToken: v4079,
        start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v8217 = {
        lastRewardsPerShare_: v8212,
        lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        opts: v8213,
        poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        remainingRewards: v8212,
        rewarder: v8210,
        rewardsPerBlock_: v8212,
        totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v8225 = stdlib.fromSome(v8203, v8217);
      const v8226 = v8225.lastRewardsPerShare_;
      const v8227 = v8225.lastRewardsRefreshed;
      const v8228 = v8225.opts;
      const v8229 = v8225.poolId;
      const v8230 = v8225.remainingRewards;
      const v8231 = v8225.rewarder;
      const v8232 = v8225.rewardsPerBlock_;
      const v8233 = v8225.totalStaked;
      const v8234 = v8228.stakeToken;
      const v8235 = [v8202, v4878];
      const v8236 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v8235, ctc10), null);
      const v8238 = {
        rewards: v8212,
        stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v8241 = stdlib.fromSome(v8236, v8238);
      const v8242 = v8241.stake;
      const v8243 = stdlib.gt256(v8242, stdlib.checkedBigNumberify('./staker.rsh:484:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v8243, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:484:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:495:13:application call to [unknown function] (defined at: ./staker.rsh:495:13:function exp)'],
        msg: 'can only withdraw if balance is sufficient',
        who: 'Staker_emergencyWithdraw'
        });
      const v8245 = stdlib.le256(v8242, v8233);
      stdlib.assert(v8245, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:485:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:495:13:application call to [unknown function] (defined at: ./staker.rsh:495:13:function exp)'],
        msg: 'can only withdraw if balance is sufficient',
        who: 'Staker_emergencyWithdraw'
        });
      const v8247 = stdlib.safeSub256(v8233, v8242);
      const v8250 = [v8234, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8210];
      const v8251 = [v8234, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
      const v8254 = [];
      const v8255 = stdlib.bytesFromHex("0xda7025b9");
      const v8256 = undefined /* Remote */;
      const v8257 = await txn1.getOutput('internal', 'v8256', ctc21, v8256);
      const v8259 = v8257[stdlib.checkedBigNumberify('./staker.rsh:190:13:application', stdlib.UInt_max, '0')];
      const v8264 = stdlib.add(v4096, v8259);
      const v8265 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8259);
      stdlib.assert(v8265, {
        at: './staker.rsh:190:13:application',
        fs: ['at ./staker.rsh:496:31:application call to [unknown function] (defined at: ./staker.rsh:177:43:function exp)', 'at ./staker.rsh:495:13:application call to [unknown function] (defined at: ./staker.rsh:495:13:function exp)'],
        msg: 'remote bill check',
        who: 'Staker_emergencyWithdraw'
        });
      const v8274 = v8241.rewards;
      const v8276 = {
        rewards: v8274,
        stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      await stdlib.mapSet(map1, ctc14, v8235, ctc10, v8276);
      const v8277 = {
        newEveryoneStaked: v8247,
        newUserStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      null;
      const v8286 = {
        lastRewardsPerShare_: v8226,
        lastRewardsRefreshed: v8227,
        opts: v8228,
        poolId: v8229,
        remainingRewards: v8230,
        rewarder: v8231,
        rewardsPerBlock_: v8232,
        totalStaked: v8247
        };
      await stdlib.mapSet(map0, ctc1, v8202, ctc8, v8286);
      const v8288 = await txn1.getOutput('Staker_emergencyWithdraw', 'v8277', ctc22, v8277);
      if (v2663) {
        stdlib.protect(ctc0, await interact.out(v7994, v8288), {
          at: './staker.rsh:476:11:application',
          fs: ['at ./staker.rsh:476:11:application call to [unknown function] (defined at: ./staker.rsh:476:11:function exp)', 'at ./staker.rsh:506:12:application call to "k" (defined at: ./staker.rsh:495:13:function exp)', 'at ./staker.rsh:495:13:application call to [unknown function] (defined at: ./staker.rsh:495:13:function exp)'],
          msg: 'out',
          who: 'Staker_emergencyWithdraw'
          });
        }
      else {
        }
      
      const v14977 = v4092;
      const v14980 = v8264;
      return;
      
      break;
      }
    case 'Staker_harvest0_921': {
      const v8772 = v4879[1];
      return;
      break;
      }
    case 'Staker_stake0_921': {
      const v9550 = v4879[1];
      return;
      break;
      }
    case 'Staker_withdraw0_921': {
      const v10328 = v4879[1];
      return;
      break;
      }
    case 'nop0_921': {
      const v11106 = v4879[1];
      return;
      break;
      }
    case 'touch0_921': {
      const v11884 = v4879[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Staker_harvest3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_harvest3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_harvest3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc2], ['rewards', ctc5], ['start', ctc1], ['end', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc6], ['rewarder', ctc7], ['totalStaked', ctc4], ['remainingRewards', ctc5], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc5], ['rewardsPerBlock_', ctc5]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['stake', ctc4], ['rewards', ctc5]]);
  const ctc11 = stdlib.T_Data({
    None: ctc0,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Object({
    fee: ctc1,
    manager: ctc7,
    poolCount: ctc1,
    poolIndex: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Admin_deletePool0_921: ctc13,
    Admin_grant0_921: ctc14,
    Admin_updateFee0_921: ctc13,
    Funder_deployPool0_921: ctc15,
    Staker_emergencyWithdraw0_921: ctc13,
    Staker_harvest0_921: ctc13,
    Staker_stake0_921: ctc16,
    Staker_withdraw0_921: ctc16,
    nop0_921: ctc17,
    touch0_921: ctc17
    });
  const ctc19 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc20 = stdlib.T_Bool;
  const ctc21 = stdlib.T_Tuple([ctc1, ctc20]);
  const ctc22 = stdlib.T_Struct([['userReceived', ctc5], ['totalRemaining', ctc5]]);
  const ctc23 = stdlib.T_Tuple([ctc2, ctc1, ctc7]);
  const ctc24 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc25 = stdlib.T_Tuple([ctc2, ctc1, ctc24]);
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc11;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v4079, v4092, v4096] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc12, ctc1]);
  const v4693 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:515:33:application call to [unknown function] (defined at: ./staker.rsh:515:33:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_harvest0_921" (defined at: ./staker.rsh:515:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'in',
    who: 'Staker_harvest'
    });
  const v4694 = v4693[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4696 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v4694, ctc8), null);
  const v4697 = {
    None: 0,
    Some: 1
    }[v4696[0]];
  const v4698 = stdlib.eq(v4697, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v4698, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:516:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:515:33:application call to [unknown function] (defined at: ./staker.rsh:515:33:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_harvest0_921" (defined at: ./staker.rsh:515:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'pool does not exist',
    who: 'Staker_harvest'
    });
  const v4818 = ['Staker_harvest0_921', v4693];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4079, v4092, v4096, v4818],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:515:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
      
      switch (v4879[0]) {
        case 'Admin_deletePool0_921': {
          const v4882 = v4879[1];
          
          break;
          }
        case 'Admin_grant0_921': {
          const v5660 = v4879[1];
          
          break;
          }
        case 'Admin_updateFee0_921': {
          const v6438 = v4879[1];
          
          break;
          }
        case 'Funder_deployPool0_921': {
          const v7216 = v4879[1];
          
          break;
          }
        case 'Staker_emergencyWithdraw0_921': {
          const v7994 = v4879[1];
          
          break;
          }
        case 'Staker_harvest0_921': {
          const v8772 = v4879[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_harvest"
            });
          ;
          const v9076 = v8772[stdlib.checkedBigNumberify('./staker.rsh:515:10:spread', stdlib.UInt_max, '0')];
          const v9077 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc1, v9076, ctc8), null);
          const v9084 = await ctc.getContractAddress();
          const v9085 = [v4079];
          const v9086 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v9087 = {
            end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewardToken: v9085,
            rewards: v9086,
            stakeToken: v4079,
            start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v9091 = {
            lastRewardsPerShare_: v9086,
            lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            opts: v9087,
            poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            remainingRewards: v9086,
            rewarder: v9084,
            rewardsPerBlock_: v9086,
            totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v9099 = stdlib.fromSome(v9077, v9091);
          const v9100 = v9099.remainingRewards;
          const v9101 = v9099.opts;
          const v9102 = v9101.rewardToken;
          const v9103 = v9099.rewarder;
          let v9105;
          const v9107 = v9099.totalStaked;
          const v9108 = v9099.lastRewardsRefreshed;
          const v9109 = v9099.lastRewardsPerShare_;
          const v9110 = v9099.rewardsPerBlock_;
          const v9111 = v9101.end;
          const v9115 = v9101.start;
          const v9116 = stdlib.eq256(v9107, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          if (v9116) {
            v9105 = v9109;
            }
          else {
            const v9117 = stdlib.le(v9111, v4881);
            const v9118 = v9117 ? v9111 : v4881;
            const v9119 = stdlib.ge(v9115, v9108);
            const v9120 = v9119 ? v9115 : v9108;
            let v9121;
            const v9122 = stdlib.ge(v9120, v9118);
            if (v9122) {
              v9121 = stdlib.checkedBigNumberify('./staker.rsh:55:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v9123 = stdlib.safeSub(v9118, v9120);
              v9121 = v9123;
              }
            const v9124 = v9110[stdlib.checkedBigNumberify('./staker.rsh:232:44:array ref', stdlib.UInt_max, '0')];
            const v9125 = stdlib.cast("UInt", "UInt256", v9121, false, true);
            const v9126 = stdlib.safeMul256(v9124, v9125);
            const v9127 = stdlib.safeDiv256(v9126, v9107);
            const v9128 = v9109[stdlib.checkedBigNumberify('./staker.rsh:233:40:array ref', stdlib.UInt_max, '0')];
            const v9129 = stdlib.safeAdd256(v9128, v9127);
            const v9130 = [v9129];
            v9105 = v9130;
            }
          const v9151 = v9099.poolId;
          const v9152 = [v9151, v4878];
          const v9153 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v9152, ctc10), null);
          const v9155 = {
            rewards: v9086,
            stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v9158 = stdlib.fromSome(v9153, v9155);
          const v9159 = v9158.stake;
          const v9167 = v9158.rewards;
          const v9168 = v9167[stdlib.checkedBigNumberify('./staker.rsh:245:60:array ref', stdlib.UInt_max, '0')];
          const v9169 = v9105[stdlib.checkedBigNumberify('./staker.rsh:247:65:array ref', stdlib.UInt_max, '0')];
          const v9170 = stdlib.safeMul256(v9159, v9169);
          const v9171 = stdlib.safeDiv256(v9170, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v9172;
          const v9173 = stdlib.ge256(v9168, v9171);
          if (v9173) {
            v9172 = stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v9174 = stdlib.safeSub256(v9171, v9168);
            v9172 = v9174;
            }
          const v9175 = v9100[stdlib.checkedBigNumberify('./staker.rsh:251:58:array ref', stdlib.UInt_max, '0')];
          const v9176 = stdlib.le256(v9172, v9175);
          const v9177 = v9176 ? v9172 : v9175;
          const v9178 = [v9177];
          const v9179 = [v9076, v4878];
          const v9180 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v9179, ctc10), null);
          const v9185 = stdlib.fromSome(v9180, v9155);
          const v9186 = v9185.rewards;
          const v9193 = stdlib.safeSub256(v9175, v9177);
          const v9195 = v9102[stdlib.checkedBigNumberify('./staker.rsh:539:24:array ref', stdlib.UInt_max, '0')];
          const v9197 = [v9195, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9103];
          const v9198 = [v9195, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
          const v9199 = [v9103, v9084];
          const v9200 = [v9195, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v9199];
          const v9203 = [];
          const v9204 = stdlib.bytesFromHex("0x4a968f8f");
          const v9205 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v9195,
              remote: ({
                accs: [v9103, v4878],
                apps: [v9195],
                bills: stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v9197], [ctc23, v9198], [ctc25, v9200]],
                fees: stdlib.checkedBigNumberify('./staker.rsh:202:19:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc20.defaultValue /* simReturnVal */];})();
          const v9206 = await txn1.getOutput('internal', 'v9205', ctc21, v9205);
          const v9208 = v9206[stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0')];
          const v9213 = stdlib.add(v4096, v9208);
          const v9224 = v9185.stake;
          const v9225 = v9186[stdlib.checkedBigNumberify('./staker.rsh:530:43:array ref', stdlib.UInt_max, '0')];
          const v9226 = stdlib.safeAdd256(v9225, v9177);
          const v9227 = [v9226];
          const v9228 = {
            rewards: v9227,
            stake: v9224
            };
          await stdlib.simMapSet(sim_r, 1, ctc19, v9179, ctc10, v9228);
          const v9230 = [v9193];
          const v9231 = {
            totalRemaining: v9230,
            userReceived: v9178
            };
          const v9232 = await txn1.getOutput('Staker_harvest', 'v9231', ctc22, v9231);
          
          null;
          const v9254 = {
            lastRewardsPerShare_: v9105,
            lastRewardsRefreshed: v4881,
            opts: v9101,
            poolId: v9151,
            remainingRewards: v9230,
            rewarder: v9103,
            rewardsPerBlock_: v9110,
            totalStaked: v9107
            };
          await stdlib.simMapSet(sim_r, 0, ctc1, v9076, ctc8, v9254);
          const v15021 = v4092;
          const v15024 = v9213;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_stake0_921': {
          const v9550 = v4879[1];
          
          break;
          }
        case 'Staker_withdraw0_921': {
          const v10328 = v4879[1];
          
          break;
          }
        case 'nop0_921': {
          const v11106 = v4879[1];
          
          break;
          }
        case 'touch0_921': {
          const v11884 = v4879[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc12, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
  switch (v4879[0]) {
    case 'Admin_deletePool0_921': {
      const v4882 = v4879[1];
      return;
      break;
      }
    case 'Admin_grant0_921': {
      const v5660 = v4879[1];
      return;
      break;
      }
    case 'Admin_updateFee0_921': {
      const v6438 = v4879[1];
      return;
      break;
      }
    case 'Funder_deployPool0_921': {
      const v7216 = v4879[1];
      return;
      break;
      }
    case 'Staker_emergencyWithdraw0_921': {
      const v7994 = v4879[1];
      return;
      break;
      }
    case 'Staker_harvest0_921': {
      const v8772 = v4879[1];
      undefined /* setApiDetails */;
      ;
      const v9076 = v8772[stdlib.checkedBigNumberify('./staker.rsh:515:10:spread', stdlib.UInt_max, '0')];
      const v9077 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v9076, ctc8), null);
      const v9078 = {
        None: 0,
        Some: 1
        }[v9077[0]];
      const v9079 = stdlib.eq(v9078, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v9079, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:516:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:537:13:application call to [unknown function] (defined at: ./staker.rsh:537:13:function exp)'],
        msg: 'pool does not exist',
        who: 'Staker_harvest'
        });
      const v9084 = await ctc.getContractAddress();
      const v9085 = [v4079];
      const v9086 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v9087 = {
        end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewardToken: v9085,
        rewards: v9086,
        stakeToken: v4079,
        start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v9091 = {
        lastRewardsPerShare_: v9086,
        lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        opts: v9087,
        poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        remainingRewards: v9086,
        rewarder: v9084,
        rewardsPerBlock_: v9086,
        totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v9099 = stdlib.fromSome(v9077, v9091);
      const v9100 = v9099.remainingRewards;
      const v9101 = v9099.opts;
      const v9102 = v9101.rewardToken;
      const v9103 = v9099.rewarder;
      let v9105;
      const v9107 = v9099.totalStaked;
      const v9108 = v9099.lastRewardsRefreshed;
      const v9109 = v9099.lastRewardsPerShare_;
      const v9110 = v9099.rewardsPerBlock_;
      const v9111 = v9101.end;
      const v9115 = v9101.start;
      const v9116 = stdlib.eq256(v9107, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      if (v9116) {
        v9105 = v9109;
        }
      else {
        const v9117 = stdlib.le(v9111, v4881);
        const v9118 = v9117 ? v9111 : v4881;
        const v9119 = stdlib.ge(v9115, v9108);
        const v9120 = v9119 ? v9115 : v9108;
        let v9121;
        const v9122 = stdlib.ge(v9120, v9118);
        if (v9122) {
          v9121 = stdlib.checkedBigNumberify('./staker.rsh:55:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v9123 = stdlib.safeSub(v9118, v9120);
          v9121 = v9123;
          }
        const v9124 = v9110[stdlib.checkedBigNumberify('./staker.rsh:232:44:array ref', stdlib.UInt_max, '0')];
        const v9125 = stdlib.cast("UInt", "UInt256", v9121, false, true);
        const v9126 = stdlib.safeMul256(v9124, v9125);
        const v9127 = stdlib.safeDiv256(v9126, v9107);
        const v9128 = v9109[stdlib.checkedBigNumberify('./staker.rsh:233:40:array ref', stdlib.UInt_max, '0')];
        const v9129 = stdlib.safeAdd256(v9128, v9127);
        const v9130 = [v9129];
        v9105 = v9130;
        }
      const v9151 = v9099.poolId;
      const v9152 = [v9151, v4878];
      const v9153 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v9152, ctc10), null);
      const v9155 = {
        rewards: v9086,
        stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v9158 = stdlib.fromSome(v9153, v9155);
      const v9159 = v9158.stake;
      const v9167 = v9158.rewards;
      const v9168 = v9167[stdlib.checkedBigNumberify('./staker.rsh:245:60:array ref', stdlib.UInt_max, '0')];
      const v9169 = v9105[stdlib.checkedBigNumberify('./staker.rsh:247:65:array ref', stdlib.UInt_max, '0')];
      const v9170 = stdlib.safeMul256(v9159, v9169);
      const v9171 = stdlib.safeDiv256(v9170, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v9172;
      const v9173 = stdlib.ge256(v9168, v9171);
      if (v9173) {
        v9172 = stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v9174 = stdlib.safeSub256(v9171, v9168);
        v9172 = v9174;
        }
      const v9175 = v9100[stdlib.checkedBigNumberify('./staker.rsh:251:58:array ref', stdlib.UInt_max, '0')];
      const v9176 = stdlib.le256(v9172, v9175);
      const v9177 = v9176 ? v9172 : v9175;
      const v9178 = [v9177];
      const v9179 = [v9076, v4878];
      const v9180 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v9179, ctc10), null);
      const v9185 = stdlib.fromSome(v9180, v9155);
      const v9186 = v9185.rewards;
      const v9193 = stdlib.safeSub256(v9175, v9177);
      const v9195 = v9102[stdlib.checkedBigNumberify('./staker.rsh:539:24:array ref', stdlib.UInt_max, '0')];
      const v9197 = [v9195, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9103];
      const v9198 = [v9195, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
      const v9199 = [v9103, v9084];
      const v9200 = [v9195, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v9199];
      const v9203 = [];
      const v9204 = stdlib.bytesFromHex("0x4a968f8f");
      const v9205 = undefined /* Remote */;
      const v9206 = await txn1.getOutput('internal', 'v9205', ctc21, v9205);
      const v9208 = v9206[stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0')];
      const v9213 = stdlib.add(v4096, v9208);
      const v9214 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9208);
      stdlib.assert(v9214, {
        at: './staker.rsh:209:13:application',
        fs: ['at ./staker.rsh:538:35:application call to [unknown function] (defined at: ./staker.rsh:192:54:function exp)', 'at ./staker.rsh:537:13:application call to [unknown function] (defined at: ./staker.rsh:537:13:function exp)'],
        msg: 'remote bill check',
        who: 'Staker_harvest'
        });
      const v9224 = v9185.stake;
      const v9225 = v9186[stdlib.checkedBigNumberify('./staker.rsh:530:43:array ref', stdlib.UInt_max, '0')];
      const v9226 = stdlib.safeAdd256(v9225, v9177);
      const v9227 = [v9226];
      const v9228 = {
        rewards: v9227,
        stake: v9224
        };
      await stdlib.mapSet(map1, ctc19, v9179, ctc10, v9228);
      const v9230 = [v9193];
      const v9231 = {
        totalRemaining: v9230,
        userReceived: v9178
        };
      const v9232 = await txn1.getOutput('Staker_harvest', 'v9231', ctc22, v9231);
      if (v2663) {
        stdlib.protect(ctc0, await interact.out(v8772, v9232), {
          at: './staker.rsh:515:11:application',
          fs: ['at ./staker.rsh:515:11:application call to [unknown function] (defined at: ./staker.rsh:515:11:function exp)', 'at ./staker.rsh:549:12:application call to "k" (defined at: ./staker.rsh:537:13:function exp)', 'at ./staker.rsh:537:13:application call to [unknown function] (defined at: ./staker.rsh:537:13:function exp)'],
          msg: 'out',
          who: 'Staker_harvest'
          });
        }
      else {
        }
      
      null;
      const v9254 = {
        lastRewardsPerShare_: v9105,
        lastRewardsRefreshed: v4881,
        opts: v9101,
        poolId: v9151,
        remainingRewards: v9230,
        rewarder: v9103,
        rewardsPerBlock_: v9110,
        totalStaked: v9107
        };
      await stdlib.mapSet(map0, ctc1, v9076, ctc8, v9254);
      const v15021 = v4092;
      const v15024 = v9213;
      return;
      
      break;
      }
    case 'Staker_stake0_921': {
      const v9550 = v4879[1];
      return;
      break;
      }
    case 'Staker_withdraw0_921': {
      const v10328 = v4879[1];
      return;
      break;
      }
    case 'nop0_921': {
      const v11106 = v4879[1];
      return;
      break;
      }
    case 'touch0_921': {
      const v11884 = v4879[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Staker_stake3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_stake3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_stake3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc2], ['rewards', ctc5], ['start', ctc1], ['end', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc6], ['rewarder', ctc7], ['totalStaked', ctc4], ['remainingRewards', ctc5], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc5], ['rewardsPerBlock_', ctc5]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['stake', ctc4], ['rewards', ctc5]]);
  const ctc11 = stdlib.T_Data({
    None: ctc0,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Object({
    fee: ctc1,
    manager: ctc7,
    poolCount: ctc1,
    poolIndex: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Admin_deletePool0_921: ctc14,
    Admin_grant0_921: ctc15,
    Admin_updateFee0_921: ctc14,
    Funder_deployPool0_921: ctc16,
    Staker_emergencyWithdraw0_921: ctc14,
    Staker_harvest0_921: ctc14,
    Staker_stake0_921: ctc13,
    Staker_withdraw0_921: ctc13,
    nop0_921: ctc17,
    touch0_921: ctc17
    });
  const ctc19 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc20 = stdlib.T_Bool;
  const ctc21 = stdlib.T_Tuple([ctc1, ctc20]);
  const ctc22 = stdlib.T_Struct([['newUserStaked', ctc4], ['newEveryoneStaked', ctc4]]);
  const ctc23 = stdlib.T_Tuple([ctc2, ctc1, ctc7]);
  const ctc24 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc25 = stdlib.T_Tuple([ctc2, ctc1, ctc24]);
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc11;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v4079, v4092, v4096] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc12, ctc1]);
  const v4429 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:372:36:application call to [unknown function] (defined at: ./staker.rsh:372:36:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_stake0_921" (defined at: ./staker.rsh:372:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'in',
    who: 'Staker_stake'
    });
  const v4430 = v4429[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4431 = v4429[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4434 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v4430, ctc8), null);
  const v4435 = {
    None: 0,
    Some: 1
    }[v4434[0]];
  const v4436 = stdlib.eq(v4435, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v4436, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:373:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:372:36:application call to [unknown function] (defined at: ./staker.rsh:372:36:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_stake0_921" (defined at: ./staker.rsh:372:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'pool does not exist',
    who: 'Staker_stake'
    });
  const v4441 = await ctc.getContractAddress();
  const v4442 = [v4079];
  const v4443 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v4444 = {
    end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    rewardToken: v4442,
    rewards: v4443,
    stakeToken: v4079,
    start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v4448 = {
    lastRewardsPerShare_: v4443,
    lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    opts: v4444,
    poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    remainingRewards: v4443,
    rewarder: v4441,
    rewardsPerBlock_: v4443,
    totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v4456 = stdlib.fromSome(v4434, v4448);
  const v4458 = v4456.lastRewardsRefreshed;
  const v4459 = v4456.opts;
  const v4465 = v4459.end;
  const v4468 = stdlib.lt(v4458, v4465);
  stdlib.assert(v4468, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:381:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:372:36:application call to [unknown function] (defined at: ./staker.rsh:372:36:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_stake0_921" (defined at: ./staker.rsh:372:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'can only stake before the end',
    who: 'Staker_stake'
    });
  const v4470 = stdlib.gt256(v4431, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v4470, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:384:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:372:36:application call to [unknown function] (defined at: ./staker.rsh:372:36:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_stake0_921" (defined at: ./staker.rsh:372:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'must stake more than 0',
    who: 'Staker_stake'
    });
  const v4528 = ['Staker_stake0_921', v4429];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4079, v4092, v4096, v4528],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:372:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
      
      switch (v4879[0]) {
        case 'Admin_deletePool0_921': {
          const v4882 = v4879[1];
          
          break;
          }
        case 'Admin_grant0_921': {
          const v5660 = v4879[1];
          
          break;
          }
        case 'Admin_updateFee0_921': {
          const v6438 = v4879[1];
          
          break;
          }
        case 'Funder_deployPool0_921': {
          const v7216 = v4879[1];
          
          break;
          }
        case 'Staker_emergencyWithdraw0_921': {
          const v7994 = v4879[1];
          
          break;
          }
        case 'Staker_harvest0_921': {
          const v8772 = v4879[1];
          
          break;
          }
        case 'Staker_stake0_921': {
          const v9550 = v4879[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_stake"
            });
          ;
          const v10035 = v9550[stdlib.checkedBigNumberify('./staker.rsh:372:10:spread', stdlib.UInt_max, '0')];
          const v10036 = v9550[stdlib.checkedBigNumberify('./staker.rsh:372:10:spread', stdlib.UInt_max, '1')];
          const v10037 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc1, v10035, ctc8), null);
          const v10044 = await ctc.getContractAddress();
          const v10045 = [v4079];
          const v10046 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v10047 = {
            end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewardToken: v10045,
            rewards: v10046,
            stakeToken: v4079,
            start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v10051 = {
            lastRewardsPerShare_: v10046,
            lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            opts: v10047,
            poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            remainingRewards: v10046,
            rewarder: v10044,
            rewardsPerBlock_: v10046,
            totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v10059 = stdlib.fromSome(v10037, v10051);
          const v10060 = v10059.lastRewardsPerShare_;
          const v10061 = v10059.lastRewardsRefreshed;
          const v10062 = v10059.opts;
          const v10063 = v10059.poolId;
          const v10064 = v10059.remainingRewards;
          const v10065 = v10059.rewarder;
          const v10066 = v10059.rewardsPerBlock_;
          const v10067 = v10059.totalStaked;
          const v10068 = v10062.end;
          const v10069 = v10062.stakeToken;
          let v10075;
          const v10085 = v10062.start;
          const v10086 = stdlib.eq256(v10067, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          if (v10086) {
            v10075 = v10060;
            }
          else {
            const v10087 = stdlib.le(v10068, v4881);
            const v10088 = v10087 ? v10068 : v4881;
            const v10089 = stdlib.ge(v10085, v10061);
            const v10090 = v10089 ? v10085 : v10061;
            let v10091;
            const v10092 = stdlib.ge(v10090, v10088);
            if (v10092) {
              v10091 = stdlib.checkedBigNumberify('./staker.rsh:55:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v10093 = stdlib.safeSub(v10088, v10090);
              v10091 = v10093;
              }
            const v10094 = v10066[stdlib.checkedBigNumberify('./staker.rsh:232:44:array ref', stdlib.UInt_max, '0')];
            const v10095 = stdlib.cast("UInt", "UInt256", v10091, false, true);
            const v10096 = stdlib.safeMul256(v10094, v10095);
            const v10097 = stdlib.safeDiv256(v10096, v10067);
            const v10098 = v10060[stdlib.checkedBigNumberify('./staker.rsh:233:40:array ref', stdlib.UInt_max, '0')];
            const v10099 = stdlib.safeAdd256(v10098, v10097);
            const v10100 = [v10099];
            v10075 = v10100;
            }
          const v10101 = stdlib.safeAdd256(v10067, v10036);
          const v10102 = [v10035, v4878];
          const v10103 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc19, v10102, ctc10), null);
          const v10105 = {
            rewards: v10046,
            stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v10108 = stdlib.fromSome(v10103, v10105);
          const v10109 = v10108.stake;
          const v10110 = stdlib.safeAdd256(v10109, v10036);
          const v10118 = v10108.rewards;
          const v10119 = v10075[stdlib.checkedBigNumberify('./staker.rsh:395:58:array ref', stdlib.UInt_max, '0')];
          const v10120 = stdlib.safeMul256(v10036, v10119);
          const v10121 = stdlib.safeDiv256(v10120, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          const v10122 = v10118[stdlib.checkedBigNumberify('./staker.rsh:396:27:array ref', stdlib.UInt_max, '0')];
          const v10123 = stdlib.safeAdd256(v10122, v10121);
          const v10128 = [v10069, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
          const v10129 = [v10069, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10044];
          const v10130 = [v4878, v10044];
          const v10131 = [v10069, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v10130];
          const v10134 = [];
          const v10135 = stdlib.bytesFromHex("0x4a968f8f");
          const v10136 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v10069,
              remote: ({
                accs: [v4878, v10044],
                apps: [v10069],
                bills: stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v10128], [ctc23, v10129], [ctc25, v10131]],
                fees: stdlib.checkedBigNumberify('./staker.rsh:202:19:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc20.defaultValue /* simReturnVal */];})();
          const v10137 = await txn1.getOutput('internal', 'v10136', ctc21, v10136);
          const v10139 = v10137[stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0')];
          const v10144 = stdlib.add(v4096, v10139);
          const v10147 = [v10123];
          const v10148 = {
            rewards: v10147,
            stake: v10110
            };
          await stdlib.simMapSet(sim_r, 1, ctc19, v10102, ctc10, v10148);
          const v10157 = {
            lastRewardsPerShare_: v10075,
            lastRewardsRefreshed: v4881,
            opts: v10062,
            poolId: v10063,
            remainingRewards: v10064,
            rewarder: v10065,
            rewardsPerBlock_: v10066,
            totalStaked: v10101
            };
          await stdlib.simMapSet(sim_r, 0, ctc1, v10035, ctc8, v10157);
          const v10158 = {
            newEveryoneStaked: v10101,
            newUserStaked: v10110
            };
          null;
          const v10160 = await txn1.getOutput('Staker_stake', 'v10158', ctc22, v10158);
          
          const v15065 = v4092;
          const v15068 = v10144;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Staker_withdraw0_921': {
          const v10328 = v4879[1];
          
          break;
          }
        case 'nop0_921': {
          const v11106 = v4879[1];
          
          break;
          }
        case 'touch0_921': {
          const v11884 = v4879[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc12, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
  switch (v4879[0]) {
    case 'Admin_deletePool0_921': {
      const v4882 = v4879[1];
      return;
      break;
      }
    case 'Admin_grant0_921': {
      const v5660 = v4879[1];
      return;
      break;
      }
    case 'Admin_updateFee0_921': {
      const v6438 = v4879[1];
      return;
      break;
      }
    case 'Funder_deployPool0_921': {
      const v7216 = v4879[1];
      return;
      break;
      }
    case 'Staker_emergencyWithdraw0_921': {
      const v7994 = v4879[1];
      return;
      break;
      }
    case 'Staker_harvest0_921': {
      const v8772 = v4879[1];
      return;
      break;
      }
    case 'Staker_stake0_921': {
      const v9550 = v4879[1];
      undefined /* setApiDetails */;
      ;
      const v10035 = v9550[stdlib.checkedBigNumberify('./staker.rsh:372:10:spread', stdlib.UInt_max, '0')];
      const v10036 = v9550[stdlib.checkedBigNumberify('./staker.rsh:372:10:spread', stdlib.UInt_max, '1')];
      const v10037 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v10035, ctc8), null);
      const v10038 = {
        None: 0,
        Some: 1
        }[v10037[0]];
      const v10039 = stdlib.eq(v10038, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v10039, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:373:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:400:13:application call to [unknown function] (defined at: ./staker.rsh:400:13:function exp)'],
        msg: 'pool does not exist',
        who: 'Staker_stake'
        });
      const v10044 = await ctc.getContractAddress();
      const v10045 = [v4079];
      const v10046 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v10047 = {
        end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewardToken: v10045,
        rewards: v10046,
        stakeToken: v4079,
        start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v10051 = {
        lastRewardsPerShare_: v10046,
        lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        opts: v10047,
        poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        remainingRewards: v10046,
        rewarder: v10044,
        rewardsPerBlock_: v10046,
        totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v10059 = stdlib.fromSome(v10037, v10051);
      const v10060 = v10059.lastRewardsPerShare_;
      const v10061 = v10059.lastRewardsRefreshed;
      const v10062 = v10059.opts;
      const v10063 = v10059.poolId;
      const v10064 = v10059.remainingRewards;
      const v10065 = v10059.rewarder;
      const v10066 = v10059.rewardsPerBlock_;
      const v10067 = v10059.totalStaked;
      const v10068 = v10062.end;
      const v10069 = v10062.stakeToken;
      const v10071 = stdlib.lt(v10061, v10068);
      stdlib.assert(v10071, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:381:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:400:13:application call to [unknown function] (defined at: ./staker.rsh:400:13:function exp)'],
        msg: 'can only stake before the end',
        who: 'Staker_stake'
        });
      const v10073 = stdlib.gt256(v10036, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v10073, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:384:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:400:13:application call to [unknown function] (defined at: ./staker.rsh:400:13:function exp)'],
        msg: 'must stake more than 0',
        who: 'Staker_stake'
        });
      let v10075;
      const v10085 = v10062.start;
      const v10086 = stdlib.eq256(v10067, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      if (v10086) {
        v10075 = v10060;
        }
      else {
        const v10087 = stdlib.le(v10068, v4881);
        const v10088 = v10087 ? v10068 : v4881;
        const v10089 = stdlib.ge(v10085, v10061);
        const v10090 = v10089 ? v10085 : v10061;
        let v10091;
        const v10092 = stdlib.ge(v10090, v10088);
        if (v10092) {
          v10091 = stdlib.checkedBigNumberify('./staker.rsh:55:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v10093 = stdlib.safeSub(v10088, v10090);
          v10091 = v10093;
          }
        const v10094 = v10066[stdlib.checkedBigNumberify('./staker.rsh:232:44:array ref', stdlib.UInt_max, '0')];
        const v10095 = stdlib.cast("UInt", "UInt256", v10091, false, true);
        const v10096 = stdlib.safeMul256(v10094, v10095);
        const v10097 = stdlib.safeDiv256(v10096, v10067);
        const v10098 = v10060[stdlib.checkedBigNumberify('./staker.rsh:233:40:array ref', stdlib.UInt_max, '0')];
        const v10099 = stdlib.safeAdd256(v10098, v10097);
        const v10100 = [v10099];
        v10075 = v10100;
        }
      const v10101 = stdlib.safeAdd256(v10067, v10036);
      const v10102 = [v10035, v4878];
      const v10103 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc19, v10102, ctc10), null);
      const v10105 = {
        rewards: v10046,
        stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v10108 = stdlib.fromSome(v10103, v10105);
      const v10109 = v10108.stake;
      const v10110 = stdlib.safeAdd256(v10109, v10036);
      const v10118 = v10108.rewards;
      const v10119 = v10075[stdlib.checkedBigNumberify('./staker.rsh:395:58:array ref', stdlib.UInt_max, '0')];
      const v10120 = stdlib.safeMul256(v10036, v10119);
      const v10121 = stdlib.safeDiv256(v10120, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      const v10122 = v10118[stdlib.checkedBigNumberify('./staker.rsh:396:27:array ref', stdlib.UInt_max, '0')];
      const v10123 = stdlib.safeAdd256(v10122, v10121);
      const v10128 = [v10069, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
      const v10129 = [v10069, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10044];
      const v10130 = [v4878, v10044];
      const v10131 = [v10069, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v10130];
      const v10134 = [];
      const v10135 = stdlib.bytesFromHex("0x4a968f8f");
      const v10136 = undefined /* Remote */;
      const v10137 = await txn1.getOutput('internal', 'v10136', ctc21, v10136);
      const v10139 = v10137[stdlib.checkedBigNumberify('./staker.rsh:209:13:application', stdlib.UInt_max, '0')];
      const v10144 = stdlib.add(v4096, v10139);
      const v10145 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10139);
      stdlib.assert(v10145, {
        at: './staker.rsh:209:13:application',
        fs: ['at ./staker.rsh:401:35:application call to [unknown function] (defined at: ./staker.rsh:192:54:function exp)', 'at ./staker.rsh:400:13:application call to [unknown function] (defined at: ./staker.rsh:400:13:function exp)'],
        msg: 'remote bill check',
        who: 'Staker_stake'
        });
      const v10147 = [v10123];
      const v10148 = {
        rewards: v10147,
        stake: v10110
        };
      await stdlib.mapSet(map1, ctc19, v10102, ctc10, v10148);
      const v10157 = {
        lastRewardsPerShare_: v10075,
        lastRewardsRefreshed: v4881,
        opts: v10062,
        poolId: v10063,
        remainingRewards: v10064,
        rewarder: v10065,
        rewardsPerBlock_: v10066,
        totalStaked: v10101
        };
      await stdlib.mapSet(map0, ctc1, v10035, ctc8, v10157);
      const v10158 = {
        newEveryoneStaked: v10101,
        newUserStaked: v10110
        };
      null;
      const v10160 = await txn1.getOutput('Staker_stake', 'v10158', ctc22, v10158);
      if (v2663) {
        stdlib.protect(ctc0, await interact.out(v9550, v10160), {
          at: './staker.rsh:372:11:application',
          fs: ['at ./staker.rsh:372:11:application call to [unknown function] (defined at: ./staker.rsh:372:11:function exp)', 'at ./staker.rsh:413:12:application call to "k" (defined at: ./staker.rsh:400:13:function exp)', 'at ./staker.rsh:400:13:application call to [unknown function] (defined at: ./staker.rsh:400:13:function exp)'],
          msg: 'out',
          who: 'Staker_stake'
          });
        }
      else {
        }
      
      const v15065 = v4092;
      const v15068 = v10144;
      return;
      
      break;
      }
    case 'Staker_withdraw0_921': {
      const v10328 = v4879[1];
      return;
      break;
      }
    case 'nop0_921': {
      const v11106 = v4879[1];
      return;
      break;
      }
    case 'touch0_921': {
      const v11884 = v4879[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Staker_withdraw3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Staker_withdraw3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Staker_withdraw3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc2], ['rewards', ctc5], ['start', ctc1], ['end', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc6], ['rewarder', ctc7], ['totalStaked', ctc4], ['remainingRewards', ctc5], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc5], ['rewardsPerBlock_', ctc5]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['stake', ctc4], ['rewards', ctc5]]);
  const ctc11 = stdlib.T_Data({
    None: ctc0,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Object({
    fee: ctc1,
    manager: ctc7,
    poolCount: ctc1,
    poolIndex: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Tuple([ctc6]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Data({
    Admin_deletePool0_921: ctc15,
    Admin_grant0_921: ctc16,
    Admin_updateFee0_921: ctc15,
    Funder_deployPool0_921: ctc17,
    Staker_emergencyWithdraw0_921: ctc15,
    Staker_harvest0_921: ctc15,
    Staker_stake0_921: ctc13,
    Staker_withdraw0_921: ctc13,
    nop0_921: ctc18,
    touch0_921: ctc18
    });
  const ctc20 = stdlib.T_Struct([['newUserStaked', ctc4], ['newEveryoneStaked', ctc4]]);
  const ctc21 = stdlib.T_Bool;
  const ctc22 = stdlib.T_Tuple([ctc1, ctc21]);
  const ctc23 = stdlib.T_Tuple([ctc2, ctc1, ctc7]);
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc11;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v4079, v4092, v4096] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc12, ctc1]);
  const v4530 = ctc.selfAddress();
  const v4532 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:426:39:application call to [unknown function] (defined at: ./staker.rsh:426:39:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_withdraw0_921" (defined at: ./staker.rsh:426:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'in',
    who: 'Staker_withdraw'
    });
  const v4533 = v4532[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4534 = v4532[stdlib.checkedBigNumberify('./staker.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4537 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v4533, ctc8), null);
  const v4538 = {
    None: 0,
    Some: 1
    }[v4537[0]];
  const v4539 = stdlib.eq(v4538, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v4539, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:427:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:426:39:application call to [unknown function] (defined at: ./staker.rsh:426:39:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_withdraw0_921" (defined at: ./staker.rsh:426:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'pool does not exist',
    who: 'Staker_withdraw'
    });
  const v4544 = await ctc.getContractAddress();
  const v4545 = [v4079];
  const v4546 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v4547 = {
    end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    rewardToken: v4545,
    rewards: v4546,
    stakeToken: v4079,
    start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v4551 = {
    lastRewardsPerShare_: v4546,
    lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    opts: v4547,
    poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    remainingRewards: v4546,
    rewarder: v4544,
    rewardsPerBlock_: v4546,
    totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v4559 = stdlib.fromSome(v4537, v4551);
  const v4567 = v4559.totalStaked;
  const v4569 = [v4533, v4530];
  const v4570 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v4569, ctc10), null);
  const v4572 = {
    rewards: v4546,
    stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v4575 = stdlib.fromSome(v4570, v4572);
  const v4576 = v4575.stake;
  const v4577 = stdlib.le256(v4534, v4576);
  stdlib.assert(v4577, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:434:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:426:39:application call to [unknown function] (defined at: ./staker.rsh:426:39:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_withdraw0_921" (defined at: ./staker.rsh:426:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'can only withdraw if balance is sufficient',
    who: 'Staker_withdraw'
    });
  const v4580 = stdlib.le256(v4534, v4567);
  stdlib.assert(v4580, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./staker.rsh:436:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:426:39:application call to [unknown function] (defined at: ./staker.rsh:426:39:function exp)', 'at ./staker.rsh:171:29:application call to "runStaker_withdraw0_921" (defined at: ./staker.rsh:426:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'can only withdraw if balance is sufficient',
    who: 'Staker_withdraw'
    });
  const v4632 = ['Staker_withdraw0_921', v4532];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4079, v4092, v4096, v4632],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:426:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
      
      switch (v4879[0]) {
        case 'Admin_deletePool0_921': {
          const v4882 = v4879[1];
          
          break;
          }
        case 'Admin_grant0_921': {
          const v5660 = v4879[1];
          
          break;
          }
        case 'Admin_updateFee0_921': {
          const v6438 = v4879[1];
          
          break;
          }
        case 'Funder_deployPool0_921': {
          const v7216 = v4879[1];
          
          break;
          }
        case 'Staker_emergencyWithdraw0_921': {
          const v7994 = v4879[1];
          
          break;
          }
        case 'Staker_harvest0_921': {
          const v8772 = v4879[1];
          
          break;
          }
        case 'Staker_stake0_921': {
          const v9550 = v4879[1];
          
          break;
          }
        case 'Staker_withdraw0_921': {
          const v10328 = v4879[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_withdraw"
            });
          ;
          const v10949 = v10328[stdlib.checkedBigNumberify('./staker.rsh:426:10:spread', stdlib.UInt_max, '0')];
          const v10950 = v10328[stdlib.checkedBigNumberify('./staker.rsh:426:10:spread', stdlib.UInt_max, '1')];
          const v10951 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc1, v10949, ctc8), null);
          const v10958 = await ctc.getContractAddress();
          const v10959 = [v4079];
          const v10960 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v10961 = {
            end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewardToken: v10959,
            rewards: v10960,
            stakeToken: v4079,
            start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v10965 = {
            lastRewardsPerShare_: v10960,
            lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            opts: v10961,
            poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            remainingRewards: v10960,
            rewarder: v10958,
            rewardsPerBlock_: v10960,
            totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v10973 = stdlib.fromSome(v10951, v10965);
          const v10974 = v10973.lastRewardsPerShare_;
          const v10975 = v10973.lastRewardsRefreshed;
          const v10976 = v10973.opts;
          const v10977 = v10973.poolId;
          const v10978 = v10973.remainingRewards;
          const v10979 = v10973.rewarder;
          const v10980 = v10973.rewardsPerBlock_;
          const v10981 = v10973.totalStaked;
          const v10982 = v10976.stakeToken;
          const v10983 = [v10949, v4878];
          const v10984 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc14, v10983, ctc10), null);
          const v10986 = {
            rewards: v10960,
            stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v10989 = stdlib.fromSome(v10984, v10986);
          const v10990 = v10989.stake;
          const v10993 = stdlib.safeSub256(v10990, v10950);
          const v10996 = stdlib.safeSub256(v10981, v10950);
          const v11004 = v10989.rewards;
          let v11006;
          const v11012 = v10976.end;
          const v11016 = v10976.start;
          const v11017 = stdlib.eq256(v10981, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          if (v11017) {
            v11006 = v10974;
            }
          else {
            const v11018 = stdlib.le(v11012, v4881);
            const v11019 = v11018 ? v11012 : v4881;
            const v11020 = stdlib.ge(v11016, v10975);
            const v11021 = v11020 ? v11016 : v10975;
            let v11022;
            const v11023 = stdlib.ge(v11021, v11019);
            if (v11023) {
              v11022 = stdlib.checkedBigNumberify('./staker.rsh:55:25:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v11024 = stdlib.safeSub(v11019, v11021);
              v11022 = v11024;
              }
            const v11025 = v10980[stdlib.checkedBigNumberify('./staker.rsh:232:44:array ref', stdlib.UInt_max, '0')];
            const v11026 = stdlib.cast("UInt", "UInt256", v11022, false, true);
            const v11027 = stdlib.safeMul256(v11025, v11026);
            const v11028 = stdlib.safeDiv256(v11027, v10981);
            const v11029 = v10974[stdlib.checkedBigNumberify('./staker.rsh:233:40:array ref', stdlib.UInt_max, '0')];
            const v11030 = stdlib.safeAdd256(v11029, v11028);
            const v11031 = [v11030];
            v11006 = v11031;
            }
          const v11032 = v11004[stdlib.checkedBigNumberify('./staker.rsh:443:48:array ref', stdlib.UInt_max, '0')];
          const v11033 = v11006[stdlib.checkedBigNumberify('./staker.rsh:441:63:array ref', stdlib.UInt_max, '0')];
          const v11034 = stdlib.safeMul256(v10950, v11033);
          const v11035 = stdlib.safeDiv256(v11034, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
          let v11036;
          const v11037 = stdlib.ge256(v11035, v11032);
          if (v11037) {
            v11036 = stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          else {
            const v11038 = stdlib.safeSub256(v11032, v11035);
            v11036 = v11038;
            }
          const v11041 = {
            newEveryoneStaked: v10996,
            newUserStaked: v10993
            };
          const v11042 = await txn1.getOutput('Staker_withdraw', 'v11041', ctc20, v11041);
          
          const v11052 = [v10982, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10958];
          const v11053 = [v10982, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
          const v11056 = [];
          const v11057 = stdlib.bytesFromHex("0xda7025b9");
          const v11058 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v10982,
              remote: ({
                accs: [v4878],
                apps: [v10982],
                bills: stdlib.checkedBigNumberify('./staker.rsh:190:13:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v11052], [ctc23, v11053]],
                fees: stdlib.checkedBigNumberify('./staker.rsh:184:19:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./staker.rsh:190:13:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc21.defaultValue /* simReturnVal */];})();
          const v11059 = await txn1.getOutput('internal', 'v11058', ctc22, v11058);
          const v11061 = v11059[stdlib.checkedBigNumberify('./staker.rsh:190:13:application', stdlib.UInt_max, '0')];
          const v11066 = stdlib.add(v4096, v11061);
          const v11069 = [v11036];
          const v11070 = {
            rewards: v11069,
            stake: v10993
            };
          await stdlib.simMapSet(sim_r, 1, ctc14, v10983, ctc10, v11070);
          null;
          const v11080 = {
            lastRewardsPerShare_: v10974,
            lastRewardsRefreshed: v10975,
            opts: v10976,
            poolId: v10977,
            remainingRewards: v10978,
            rewarder: v10979,
            rewardsPerBlock_: v10980,
            totalStaked: v10996
            };
          await stdlib.simMapSet(sim_r, 0, ctc1, v10949, ctc8, v11080);
          const v15109 = v4092;
          const v15112 = v11066;
          sim_r.isHalt = false;
          
          break;
          }
        case 'nop0_921': {
          const v11106 = v4879[1];
          
          break;
          }
        case 'touch0_921': {
          const v11884 = v4879[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc12, ctc1, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
  switch (v4879[0]) {
    case 'Admin_deletePool0_921': {
      const v4882 = v4879[1];
      return;
      break;
      }
    case 'Admin_grant0_921': {
      const v5660 = v4879[1];
      return;
      break;
      }
    case 'Admin_updateFee0_921': {
      const v6438 = v4879[1];
      return;
      break;
      }
    case 'Funder_deployPool0_921': {
      const v7216 = v4879[1];
      return;
      break;
      }
    case 'Staker_emergencyWithdraw0_921': {
      const v7994 = v4879[1];
      return;
      break;
      }
    case 'Staker_harvest0_921': {
      const v8772 = v4879[1];
      return;
      break;
      }
    case 'Staker_stake0_921': {
      const v9550 = v4879[1];
      return;
      break;
      }
    case 'Staker_withdraw0_921': {
      const v10328 = v4879[1];
      undefined /* setApiDetails */;
      ;
      const v10949 = v10328[stdlib.checkedBigNumberify('./staker.rsh:426:10:spread', stdlib.UInt_max, '0')];
      const v10950 = v10328[stdlib.checkedBigNumberify('./staker.rsh:426:10:spread', stdlib.UInt_max, '1')];
      const v10951 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v10949, ctc8), null);
      const v10952 = {
        None: 0,
        Some: 1
        }[v10951[0]];
      const v10953 = stdlib.eq(v10952, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v10953, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:427:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:450:13:application call to [unknown function] (defined at: ./staker.rsh:450:13:function exp)'],
        msg: 'pool does not exist',
        who: 'Staker_withdraw'
        });
      const v10958 = await ctc.getContractAddress();
      const v10959 = [v4079];
      const v10960 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v10961 = {
        end: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewardToken: v10959,
        rewards: v10960,
        stakeToken: v4079,
        start: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v10965 = {
        lastRewardsPerShare_: v10960,
        lastRewardsRefreshed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        opts: v10961,
        poolId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        remainingRewards: v10960,
        rewarder: v10958,
        rewardsPerBlock_: v10960,
        totalStaked: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v10973 = stdlib.fromSome(v10951, v10965);
      const v10974 = v10973.lastRewardsPerShare_;
      const v10975 = v10973.lastRewardsRefreshed;
      const v10976 = v10973.opts;
      const v10977 = v10973.poolId;
      const v10978 = v10973.remainingRewards;
      const v10979 = v10973.rewarder;
      const v10980 = v10973.rewardsPerBlock_;
      const v10981 = v10973.totalStaked;
      const v10982 = v10976.stakeToken;
      const v10983 = [v10949, v4878];
      const v10984 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v10983, ctc10), null);
      const v10986 = {
        rewards: v10960,
        stake: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v10989 = stdlib.fromSome(v10984, v10986);
      const v10990 = v10989.stake;
      const v10991 = stdlib.le256(v10950, v10990);
      stdlib.assert(v10991, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:434:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:450:13:application call to [unknown function] (defined at: ./staker.rsh:450:13:function exp)'],
        msg: 'can only withdraw if balance is sufficient',
        who: 'Staker_withdraw'
        });
      const v10993 = stdlib.safeSub256(v10990, v10950);
      const v10994 = stdlib.le256(v10950, v10981);
      stdlib.assert(v10994, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./staker.rsh:436:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./staker.rsh:450:13:application call to [unknown function] (defined at: ./staker.rsh:450:13:function exp)'],
        msg: 'can only withdraw if balance is sufficient',
        who: 'Staker_withdraw'
        });
      const v10996 = stdlib.safeSub256(v10981, v10950);
      const v11004 = v10989.rewards;
      let v11006;
      const v11012 = v10976.end;
      const v11016 = v10976.start;
      const v11017 = stdlib.eq256(v10981, stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      if (v11017) {
        v11006 = v10974;
        }
      else {
        const v11018 = stdlib.le(v11012, v4881);
        const v11019 = v11018 ? v11012 : v4881;
        const v11020 = stdlib.ge(v11016, v10975);
        const v11021 = v11020 ? v11016 : v10975;
        let v11022;
        const v11023 = stdlib.ge(v11021, v11019);
        if (v11023) {
          v11022 = stdlib.checkedBigNumberify('./staker.rsh:55:25:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v11024 = stdlib.safeSub(v11019, v11021);
          v11022 = v11024;
          }
        const v11025 = v10980[stdlib.checkedBigNumberify('./staker.rsh:232:44:array ref', stdlib.UInt_max, '0')];
        const v11026 = stdlib.cast("UInt", "UInt256", v11022, false, true);
        const v11027 = stdlib.safeMul256(v11025, v11026);
        const v11028 = stdlib.safeDiv256(v11027, v10981);
        const v11029 = v10974[stdlib.checkedBigNumberify('./staker.rsh:233:40:array ref', stdlib.UInt_max, '0')];
        const v11030 = stdlib.safeAdd256(v11029, v11028);
        const v11031 = [v11030];
        v11006 = v11031;
        }
      const v11032 = v11004[stdlib.checkedBigNumberify('./staker.rsh:443:48:array ref', stdlib.UInt_max, '0')];
      const v11033 = v11006[stdlib.checkedBigNumberify('./staker.rsh:441:63:array ref', stdlib.UInt_max, '0')];
      const v11034 = stdlib.safeMul256(v10950, v11033);
      const v11035 = stdlib.safeDiv256(v11034, stdlib.checkedBigNumberify('./staker.rsh:5:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000000000'));
      let v11036;
      const v11037 = stdlib.ge256(v11035, v11032);
      if (v11037) {
        v11036 = stdlib.checkedBigNumberify('./staker.rsh:15:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      else {
        const v11038 = stdlib.safeSub256(v11032, v11035);
        v11036 = v11038;
        }
      const v11041 = {
        newEveryoneStaked: v10996,
        newUserStaked: v10993
        };
      const v11042 = await txn1.getOutput('Staker_withdraw', 'v11041', ctc20, v11041);
      if (v2663) {
        stdlib.protect(ctc0, await interact.out(v10328, v11042), {
          at: './staker.rsh:426:11:application',
          fs: ['at ./staker.rsh:426:11:application call to [unknown function] (defined at: ./staker.rsh:426:11:function exp)', 'at ./staker.rsh:451:12:application call to "k" (defined at: ./staker.rsh:450:13:function exp)', 'at ./staker.rsh:450:13:application call to [unknown function] (defined at: ./staker.rsh:450:13:function exp)'],
          msg: 'out',
          who: 'Staker_withdraw'
          });
        }
      else {
        }
      
      const v11052 = [v10982, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10958];
      const v11053 = [v10982, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4878];
      const v11056 = [];
      const v11057 = stdlib.bytesFromHex("0xda7025b9");
      const v11058 = undefined /* Remote */;
      const v11059 = await txn1.getOutput('internal', 'v11058', ctc22, v11058);
      const v11061 = v11059[stdlib.checkedBigNumberify('./staker.rsh:190:13:application', stdlib.UInt_max, '0')];
      const v11066 = stdlib.add(v4096, v11061);
      const v11067 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11061);
      stdlib.assert(v11067, {
        at: './staker.rsh:190:13:application',
        fs: ['at ./staker.rsh:452:31:application call to [unknown function] (defined at: ./staker.rsh:177:43:function exp)', 'at ./staker.rsh:450:13:application call to [unknown function] (defined at: ./staker.rsh:450:13:function exp)'],
        msg: 'remote bill check',
        who: 'Staker_withdraw'
        });
      const v11069 = [v11036];
      const v11070 = {
        rewards: v11069,
        stake: v10993
        };
      await stdlib.mapSet(map1, ctc14, v10983, ctc10, v11070);
      null;
      const v11080 = {
        lastRewardsPerShare_: v10974,
        lastRewardsRefreshed: v10975,
        opts: v10976,
        poolId: v10977,
        remainingRewards: v10978,
        rewarder: v10979,
        rewardsPerBlock_: v10980,
        totalStaked: v10996
        };
      await stdlib.mapSet(map0, ctc1, v10949, ctc8, v11080);
      const v15109 = v4092;
      const v15112 = v11066;
      return;
      
      break;
      }
    case 'nop0_921': {
      const v11106 = v4879[1];
      return;
      break;
      }
    case 'touch0_921': {
      const v11884 = v4879[1];
      return;
      break;
      }
    }
  
  
  };
export async function _nop3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _nop3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _nop3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc2], ['rewards', ctc5], ['start', ctc1], ['end', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc6], ['rewarder', ctc7], ['totalStaked', ctc4], ['remainingRewards', ctc5], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc5], ['rewardsPerBlock_', ctc5]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['stake', ctc4], ['rewards', ctc5]]);
  const ctc11 = stdlib.T_Data({
    None: ctc0,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Object({
    fee: ctc1,
    manager: ctc7,
    poolCount: ctc1,
    poolIndex: ctc1
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc18 = stdlib.T_Data({
    Admin_deletePool0_921: ctc14,
    Admin_grant0_921: ctc15,
    Admin_updateFee0_921: ctc14,
    Funder_deployPool0_921: ctc16,
    Staker_emergencyWithdraw0_921: ctc14,
    Staker_harvest0_921: ctc14,
    Staker_stake0_921: ctc17,
    Staker_withdraw0_921: ctc17,
    nop0_921: ctc13,
    touch0_921: ctc13
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc11;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v4079, v4092, v4096] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc12, ctc1]);
  const v4862 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:611:21:application call to [unknown function] (defined at: ./staker.rsh:611:21:function exp)', 'at ./staker.rsh:171:29:application call to "runnop0_921" (defined at: ./staker.rsh:611:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'in',
    who: 'nop'
    });
  const v4866 = ['nop0_921', v4862];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4079, v4092, v4096, v4866],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:611:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
      
      switch (v4879[0]) {
        case 'Admin_deletePool0_921': {
          const v4882 = v4879[1];
          
          break;
          }
        case 'Admin_grant0_921': {
          const v5660 = v4879[1];
          
          break;
          }
        case 'Admin_updateFee0_921': {
          const v6438 = v4879[1];
          
          break;
          }
        case 'Funder_deployPool0_921': {
          const v7216 = v4879[1];
          
          break;
          }
        case 'Staker_emergencyWithdraw0_921': {
          const v7994 = v4879[1];
          
          break;
          }
        case 'Staker_harvest0_921': {
          const v8772 = v4879[1];
          
          break;
          }
        case 'Staker_stake0_921': {
          const v9550 = v4879[1];
          
          break;
          }
        case 'Staker_withdraw0_921': {
          const v10328 = v4879[1];
          
          break;
          }
        case 'nop0_921': {
          const v11106 = v4879[1];
          sim_r.txns.push({
            kind: 'api',
            who: "nop"
            });
          ;
          const v11861 = null;
          const v11862 = await txn1.getOutput('nop', 'v11861', ctc0, v11861);
          
          const v15153 = v4092;
          const v15156 = v4096;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_921': {
          const v11884 = v4879[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc12, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
  switch (v4879[0]) {
    case 'Admin_deletePool0_921': {
      const v4882 = v4879[1];
      return;
      break;
      }
    case 'Admin_grant0_921': {
      const v5660 = v4879[1];
      return;
      break;
      }
    case 'Admin_updateFee0_921': {
      const v6438 = v4879[1];
      return;
      break;
      }
    case 'Funder_deployPool0_921': {
      const v7216 = v4879[1];
      return;
      break;
      }
    case 'Staker_emergencyWithdraw0_921': {
      const v7994 = v4879[1];
      return;
      break;
      }
    case 'Staker_harvest0_921': {
      const v8772 = v4879[1];
      return;
      break;
      }
    case 'Staker_stake0_921': {
      const v9550 = v4879[1];
      return;
      break;
      }
    case 'Staker_withdraw0_921': {
      const v10328 = v4879[1];
      return;
      break;
      }
    case 'nop0_921': {
      const v11106 = v4879[1];
      undefined /* setApiDetails */;
      ;
      const v11861 = null;
      const v11862 = await txn1.getOutput('nop', 'v11861', ctc0, v11861);
      if (v2663) {
        stdlib.protect(ctc0, await interact.out(v11106, v11862), {
          at: './staker.rsh:611:11:application',
          fs: ['at ./staker.rsh:611:11:application call to [unknown function] (defined at: ./staker.rsh:611:11:function exp)', 'at ./staker.rsh:614:12:application call to "k" (defined at: ./staker.rsh:613:13:function exp)', 'at ./staker.rsh:613:13:application call to [unknown function] (defined at: ./staker.rsh:613:13:function exp)'],
          msg: 'out',
          who: 'nop'
          });
        }
      else {
        }
      
      const v15153 = v4092;
      const v15156 = v4096;
      return;
      
      break;
      }
    case 'touch0_921': {
      const v11884 = v4879[1];
      return;
      break;
      }
    }
  
  
  };
export async function _touch3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc2], ['rewards', ctc5], ['start', ctc1], ['end', ctc1]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['poolId', ctc1], ['opts', ctc6], ['rewarder', ctc7], ['totalStaked', ctc4], ['remainingRewards', ctc5], ['lastRewardsRefreshed', ctc1], ['lastRewardsPerShare_', ctc5], ['rewardsPerBlock_', ctc5]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['stake', ctc4], ['rewards', ctc5]]);
  const ctc11 = stdlib.T_Data({
    None: ctc0,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Object({
    fee: ctc1,
    manager: ctc7,
    poolCount: ctc1,
    poolIndex: ctc1
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc18 = stdlib.T_Data({
    Admin_deletePool0_921: ctc14,
    Admin_grant0_921: ctc15,
    Admin_updateFee0_921: ctc14,
    Funder_deployPool0_921: ctc16,
    Staker_emergencyWithdraw0_921: ctc14,
    Staker_harvest0_921: ctc14,
    Staker_stake0_921: ctc17,
    Staker_withdraw0_921: ctc17,
    nop0_921: ctc13,
    touch0_921: ctc13
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc11;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v4079, v4092, v4096] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc12, ctc1]);
  const v4854 = stdlib.protect(ctc13, await interact.in(), {
    at: './staker.rsh:1:23:application',
    fs: ['at ./staker.rsh:597:23:application call to [unknown function] (defined at: ./staker.rsh:597:23:function exp)', 'at ./staker.rsh:171:29:application call to "runtouch0_921" (defined at: ./staker.rsh:597:10:function exp)', 'at ./staker.rsh:171:29:application call to [unknown function] (defined at: ./staker.rsh:171:29:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v4858 = ['touch0_921', v4854];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4079, v4092, v4096, v4858],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./staker.rsh:597:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
      
      switch (v4879[0]) {
        case 'Admin_deletePool0_921': {
          const v4882 = v4879[1];
          
          break;
          }
        case 'Admin_grant0_921': {
          const v5660 = v4879[1];
          
          break;
          }
        case 'Admin_updateFee0_921': {
          const v6438 = v4879[1];
          
          break;
          }
        case 'Funder_deployPool0_921': {
          const v7216 = v4879[1];
          
          break;
          }
        case 'Staker_emergencyWithdraw0_921': {
          const v7994 = v4879[1];
          
          break;
          }
        case 'Staker_harvest0_921': {
          const v8772 = v4879[1];
          
          break;
          }
        case 'Staker_stake0_921': {
          const v9550 = v4879[1];
          
          break;
          }
        case 'Staker_withdraw0_921': {
          const v10328 = v4879[1];
          
          break;
          }
        case 'nop0_921': {
          const v11106 = v4879[1];
          
          break;
          }
        case 'touch0_921': {
          const v11884 = v4879[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v12648 = (stdlib.le(await ctc.getBalance(), v4096) ? stdlib.checkedBigNumberify('./staker.rsh:600:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4096));
          const v12649 = stdlib.safeAdd(v12648, v4096);
          const v12650 = v4092.manager;
          const v12654 = stdlib.sub(v12649, v12648);
          sim_r.txns.push({
            kind: 'from',
            to: v12650,
            tok: undefined /* Nothing */
            });
          const v12655 = null;
          const v12656 = await txn1.getOutput('touch', 'v12655', ctc0, v12655);
          
          const v15197 = v4092;
          const v15200 = v12654;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc12, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4879], secs: v4881, time: v4880, didSend: v2663, from: v4878 } = txn1;
  switch (v4879[0]) {
    case 'Admin_deletePool0_921': {
      const v4882 = v4879[1];
      return;
      break;
      }
    case 'Admin_grant0_921': {
      const v5660 = v4879[1];
      return;
      break;
      }
    case 'Admin_updateFee0_921': {
      const v6438 = v4879[1];
      return;
      break;
      }
    case 'Funder_deployPool0_921': {
      const v7216 = v4879[1];
      return;
      break;
      }
    case 'Staker_emergencyWithdraw0_921': {
      const v7994 = v4879[1];
      return;
      break;
      }
    case 'Staker_harvest0_921': {
      const v8772 = v4879[1];
      return;
      break;
      }
    case 'Staker_stake0_921': {
      const v9550 = v4879[1];
      return;
      break;
      }
    case 'Staker_withdraw0_921': {
      const v10328 = v4879[1];
      return;
      break;
      }
    case 'nop0_921': {
      const v11106 = v4879[1];
      return;
      break;
      }
    case 'touch0_921': {
      const v11884 = v4879[1];
      undefined /* setApiDetails */;
      ;
      const v12648 = (stdlib.le(await ctc.getBalance(), v4096) ? stdlib.checkedBigNumberify('./staker.rsh:600:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4096));
      const v12649 = stdlib.safeAdd(v12648, v4096);
      const v12650 = v4092.manager;
      const v12654 = stdlib.sub(v12649, v12648);
      ;
      const v12655 = null;
      const v12656 = await txn1.getOutput('touch', 'v12655', ctc0, v12655);
      if (v2663) {
        stdlib.protect(ctc0, await interact.out(v11884, v12656), {
          at: './staker.rsh:597:11:application',
          fs: ['at ./staker.rsh:597:11:application call to [unknown function] (defined at: ./staker.rsh:597:11:function exp)', 'at ./staker.rsh:602:12:application call to "k" (defined at: ./staker.rsh:599:13:function exp)', 'at ./staker.rsh:599:13:application call to [unknown function] (defined at: ./staker.rsh:599:13:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v15197 = v4092;
      const v15200 = v12654;
      return;
      
      break;
      }
    }
  
  
  };
export async function Admin_deletePool(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_deletePool expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_deletePool expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_deletePool3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_grant3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_updateFee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_updateFee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_updateFee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_updateFee3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Funder_deployPool(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Funder_deployPool expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Funder_deployPool expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Funder_deployPool3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Staker_emergencyWithdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_emergencyWithdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_emergencyWithdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Staker_emergencyWithdraw3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Staker_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Staker_harvest3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Staker_stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Staker_stake3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Staker_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Staker_withdraw3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function nop(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for nop expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for nop expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _nop3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _touch3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Admin_deletePool(uint64)(uint64,((uint64),uint64,(uint256),uint64,uint64),address,uint256,(uint256),uint64,(uint256),(uint256))`, `Admin_grant(address)void`, `Admin_updateFee(uint64)void`, `Funder_deployPool(((uint64),uint64,(uint256),uint64,uint64))uint64`, `Staker_emergencyWithdraw(uint64)(uint256,uint256)`, `Staker_harvest(uint64)((uint256),(uint256))`, `Staker_stake(uint64,uint256)(uint256,uint256)`, `Staker_withdraw(uint64,uint256)(uint256,uint256)`, `_reachp_0((uint64,address))void`, `_reachp_2((uint64,(byte,byte[64])))void`, `nop()void`, `touch()void`],
    pure: [`Info(uint64)(uint64,((uint64),uint64,(uint256),uint64,uint64),address,uint256,(uint256),uint64,(uint256),(uint256))`, `Opts()((uint64),uint64,(uint256),uint64,uint64)`, `rewardsAvailable(uint64,address)(uint256)`, `rewardsAvailableAt(uint64,address,uint64)(uint256)`, `staked(uint64,address)uint256`],
    sigs: [`Admin_deletePool(uint64)(uint64,((uint64),uint64,(uint256),uint64,uint64),address,uint256,(uint256),uint64,(uint256),(uint256))`, `Admin_grant(address)void`, `Admin_updateFee(uint64)void`, `Funder_deployPool(((uint64),uint64,(uint256),uint64,uint64))uint64`, `Info(uint64)(uint64,((uint64),uint64,(uint256),uint64,uint64),address,uint256,(uint256),uint64,(uint256),(uint256))`, `Opts()((uint64),uint64,(uint256),uint64,uint64)`, `Staker_emergencyWithdraw(uint64)(uint256,uint256)`, `Staker_harvest(uint64)((uint256),(uint256))`, `Staker_stake(uint64,uint256)(uint256,uint256)`, `Staker_withdraw(uint64,uint256)(uint256,uint256)`, `_reachp_0((uint64,address))void`, `_reachp_2((uint64,(byte,byte[64])))void`, `nop()void`, `rewardsAvailable(uint64,address)(uint256)`, `rewardsAvailableAt(uint64,address,uint64)(uint256)`, `staked(uint64,address)uint256`, `touch()void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CSAPAAgBOEAY8AEGMAPUnQaoAdTbAigFJggAAQABASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVAvkAAVhcHBJRARKlo+PIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD0JABNpwJbkxGEEPZihkSSJbNQFJI1s1AoEQWzUFKWSCEQQQy5fJBCCAkiUEKIm0PAQsKJHABDXHz+wEOJXnnARYdZ+iBF8RxfMEnknUAQS5EahCBMXykoAE1K/BgwTdhVj7BN86hy4E4z2AUgTs9nvYBPU3CCE2GgCOEQCGAFoBEAFJDpwQ6BDXEPwAmQABASgAbg7KAPgRChDaAPMANhoBFzULI68pNAsWUCWvUFA1CyEJNAESRIgRajQLIls1DDQLVwhBNQ2ABCYM/vs0DBZQNA1QsDQMiBGJNA0iVY0KDwYPCQ8MDw8PEg8VDxgPIg8sDy9C/6Y2GgE1CyOvKjQLUDIDUFA1C0L/pjYaARc1CyOvgAECNAsWUCWvUFA1C0L/jjYaATULI6+AAQM0C1BQNQtC/3s2GgEXNQs0ASEJEkSIEN8yAzUMI680EhY0EhZQNAxQI69QI69QUDIKUDIDUDQMUCOvUDQMUDQMUCghBq8pNAsWUIgQkYgQhTUEMRkiEkSABBUffHU0BFCwJEMiREL/6jYaARc1CyOvgAEENAsWUCWvUFA1C0L/BDYaARc1CyOvgAEFNAsWUCWvUFA1C0L+7DYaARc2GgI1CzUMI6+AAQY0DBY0C1BQIQWvUFA1C0L+yzYaARc2GgI1CzUMI6+AAQc0DBY0C1BQIQWvUFA1C0L+qjQNJFs1CyghBq8pNAsWUIgP8kk1FCJVJBJENBEhDVtJNRMiDUQyAzUNI680EhY0EhZQNA1QI69QI69QUDIKUDIDUDQNUCOvUDQNUDQNUDQUiA+oSTUMV2ggMgOoRCEKKTQLFlC8Ik4CTYgP4IAIAAAAAAAAEzs0DFCwNAw1BIAEwfMzEjQLFlAxAFCwNBFXAAg0EVcIIFA0EyQJFlA0EVcwCFAyBjIHNQ81EDURNBIWNBFQNA4WUCEJMgY1AjUBKUxXAEhnKDQBFjQCFlA0BRZQZzEZIhJEiA9mNANA/qhC/ps0EVcIIDEAEkQoNQuACAAAAAAAABZxNAtQsDQLNQQ0EVcACDQNVwEgUDQRVygIUDQRVzAIUDIGMgc1DzUQNRFC/4k0DSRbNQs0EVcIIEk1DTEAEkQ0C4GQTg5EKDUMgAgAAAAAAAAZkTQMULA0DDUENAsWNA1QNBFXKAhQNBFXMAhQMgYyBzUPNRA1EUL/PDQNVwFASTULVwAINRo0CyNbNRk0C1cQIDUYNAshCFs1FzQLJVtJNRY0Fw1ENBg1FTQRIls1FDQaFzUMNBFXCCA1EycENAwWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhB7IQNAyyGCcFshoxAEmyHLIaNBNJshyyGjQVIQWvNBQWUKOIDfsnBqOIDfWAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcQoogNzycGoogNybIaNAyyMrMyCmA0CQk0ChcJFrcAPlcEAFA1DYAIAAAAAAAAHNA0DVCwNA1JNQwiWzUNIjQNEkQ0ESEIWyQINQwhCik0DBZQNAwWNAtQMQBQMgNQNBhQNBcWUDIDUDQVK6OIDWUhBa80FjQXCRZQoogNV1CIDXGABDFo1rg0DBZQMQBQNBkWUDQaUDQYUDQXFlA0FhZQsIAIAAAAAAAAHNs0DBZQsDQMFjUENBQWNBNQNBEhDVskCBZQNAwWUDIGMgc0DjQNCDUONQ81EDURQv20NA0kWzULKCEGryk0CxZQiAz5STUMIlUkEkQyCjUZMgM1EyOvNBIWNBIWUDQTUCOvUCOvUFA0GVAyA1A0E1Ajr1A0E1A0E1A0DIgMtkk1FlcIQDUVNBZXaCA1DTQVI1s1DDQLFjEAUDUYMgM0E1AoIQSvKjQYUIgMkogMhkk1F1cAIEk1FDIDpUQ0FDQNpkQ0DTQUoYgMYTUTJwQ0DBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEHshA0DLIYJweyGjEASbIcsho0FLIaNAyyMrMyCmA0CQk0ChcJFrcAPlcEAFA1DYAIAAAAAAAAIEA0DVCwNA1JNQwiWzUNIjQNEkQhDCo0GFAyAzQXVyAgUIgMBDIDNBNQNQyABLGkVTw0CxZQMQBQNBRQNAxQMQBQsCEKKTQLFlA0FlcACDQVUDQWV0ggUDQTUDQWV4ggUDQWV6gIUDQWV7AgUDQWV9AgUIgLs4AIAAAAAAAAIFU0DFCwNAw1BDIGMgc0DjQNCDUONQ81EEL8LYgLqzQNJFs1DCghBq8pNAwWUIgLb0k1CyJVJBJEMgo1HDIDNRsjrzQSFjQSFlA0G1Ajr1Ajr1BQNBxQMgNQNBtQI69QNBtQNBtQNAuICyxJNRpXCEA1GTQaV0ggNRg0GldoIDUWNBohC1s1HTQaV7AgNRU0GlfQIDUUNBklWzUNNBkhCFs1CzQWMgOoQQkQNBU1FzQaIls1DTIDNBtQSTULKCEEryo0DRYxAFBQiArUiArISTUVVyAgNRs0FVcAIDQXo4gKqyuiiAqmNRM0GzQTp0EJEjIDNRU0GleIIEk1EzQVSTQTpk01GjQMFjEAUDUbNAsoIQSvKjQbUIgKhYgKeTUVNBkiWzUdJwQ0HRZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEHshA0HbIYJwWyGjQYSbIcshoxAEmyHLIaNBqyGjQdsjKzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAACP1NAtQsDQLSTUcIls1CyI0CxJEIQwqNBtQNBVXACA0FVcgIDQaoIgJ4lCICfw0EzQaoYgJ1jUVNBo0FVA1E4AIAAAAAAAAJA80E1CwNBM1BIAEBXxwaTQMFlAxAFA0E1AxAFCwIQopNAwWUDQNFjQZUDQYUDQWUDQVUDIHFlA0F1A0FFCICaIyBjIHNA40Cwg1DjUPNRBC+i6ICaw0CyJbNR00C1cIIDUcKCEGryk0HRZQiAlpSTULIlUkEkQyCjUbMgM1GiOvNBIWNBIWUDQaUCOvUCOvUFA0G1AyA1A0GlAjr1A0GlA0GlA0C4gJJkk1GVewIDUYNBkhC1s1HjQZVwhANRc0GVfQIDUWNBlXaCA1FTQXJVs1DDQXI1s1FDQeNAwMRDQcMgOlRDQXIQhbNQs0FTIDqEEHVDQYNRM0FTQcoIgIxTULNB0WMQBQNQ0yAzQaUCghBK8qNA1QiAi+iAiySTUMVwAgNBygiAicNRgnBDQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQeyEDQUshgnBbIaMQBJshyyGjQbSbIcsho0HLIaNBSyMrMyCmA0CQk0ChcJFrcAPlcEAFA1FYAIAAAAAAAAJ5g0FVCwNBVJNRQiWzUVIjQVEkQhDCo0DVA0GDQMVyAgNBw0E6OICBYroogIEaCICA1QiAgnIQopNB0WUDQZVwAINBdQNBlXSCBQNAtQNBlXiCBQMgcWUDQTUDQWUIgH/DQYNAtQNQyABONzHeo0HRZQMQBQNBxQNAxQsIAIAAAAAAAAJ640DFCwNAw1BDIGMgc0DjQVCDUONQ81EEL4W4gH2TQLIls1ITQLVwggNSAoIQavKTQhFlCIB5ZJNQwiVSQSRDIKNR8yAzULI680EhY0EhZQNAtQI69QI69QUDQfUDIDUDQLUCOvUDQLUDQLUDQMiAdTSTUeV7AgNR00HiELWzUcNB5XCEA1GzQeV9AgNRo0HldoIDUZNBsjWzUYNCEWMQBQNRcyAzQLUCghBK8qNBdQiAcaiAcOSTUWVwAgNQs0IDQLpkQ0CzQgoYgG7jUVNCA0GaZENBk0IKGIBt41FDQbJVs1DDQbIQhbNQs0GTIDqEEFkjQdNRM0FlcgIDULNCA0E6OIBrQroogGr0k1DDQLp0EFuTIDNQ00FTQUUDUMgAgAAAAAAAArITQMULA0DDUEJwQ0GBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEHshA0GLIYJweyGjEASbIcsho0ILIaNBiyMrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAKzI0C1CwNAtJNRMiWzULIjQLEkQhDCo0F1A0FTQNUIgGMYAEn6DYJzQhFlAxAFA0IFA0DFAxAFCwIQopNCEWUDQeVwAINBtQNB5XSCBQNBRQNB5XiCBQNBwWUDQdUDQaUIgF7zIGMgc0DjQLCDUONQ81EEL2eyg1C4AIAAAAAAAALlU0C1CwNAs1BDIGMgc1DzUQQvZbMgpgMgp4CTQOCUk1DDQRVwggiAXrKDULgAgAAAAAAAAxbzQLULA0CzUEMgYyBzQMNA4INAwJNQ41DzUQQvYcgEkAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC88k0ASEJEkSIBTMyAzUOI680EhY0EhZQNA5QI69QI69QUDIKUDIDUDQOUCOvUDQOUDQOUCghBq8pNAwWUIgE5YgE2Uk1DVewIDUTNA0hC1s1FDQNVwhANRE0DVdoIDUSNBElWzUQNBEhCFs1DDQSMgOoQQPONBM1DzIDNA5QKCEEryo0DVcACDQLUFCIBJaIBIpJNQxXICA1DjQMVwAgNA+jiARtK6KIBGg1CzQONAunQQH7MgM1DDQNV4ggSTULNAxJNAumTTUEQvPNNAEhCRJEiARpNAs1DjIDNQ8jrzQSFjQSFlA0D1Ajr1Ajr1BQMgpQMgNQNA9QI69QNA9QNA9QKCEGryk0DRZQiAQXiAQLSTULVwhANQ00C1doIDUUNAshC1s1EzQLV7AgNRI0DSVbNRE0DSEIWzUQNBQyA6hBAXk0EjUVMgM0D1AoIQSvKjQLVwAINAxQUIgDyIgDvEk1DVcgIDUONA1XACA0FaOIA58roogDmjUMNA40DKdBAYUyAzUNNAtXiCBJNQw0DUk0DKZNNQRC8v80ASEJEkSIA5shBK8oIQSvKjQMFjQLUFCIA3CIA2RXACA1BELy2YBJAAAAAAAAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQvG7NAsiWzUMgATpktLSNAwWUDQLVwggULA0DIgDUTEYNRKACAAAAAAAAAAeMQBQI69QI69QMgYyByI1DjUPNRA1EULze4gDB4HAmgyIAxqxIrIBIQeyEIAGCDEAMgkSsh6AAQiyH7O0PTUFNhoBNQtC/4+IAtk2GgE1C0LxPyIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1BYgCtoFIryIiQvMtNAs0DqGIAls1DEL9/DQONBFJNA4OTTUNNBM0EEk0Ew9NSTUONA0PQQAkIjUQNBI0C1fQICEFrzQQFlCjiAIkNBSiiAIeoIgCGjUVQv5KNA00Dgk1EEL/1TQMNA6hiAIDNQ1C/nJC8gpC8ulC8yhC83JC9PdC9ns0DVcBKDULQvhwNA1XASg1C0L6OUL8FkL8MzIHNA1JMgcOTTUTNB00C0k0HQ9NSTUNNBMPQQAhIjULNBU0FCEFrzQLFlCjiAGjNBaiiAGdoIgBmTUXQva2NBM0DQk1C0L/2DQTNBuhiAGCNRVC9uUyBzQMSTIHDk01DTQeNAtJNB4PTUk1DDQND0EAISI1CzQYNBYhBa80CxZQo4gBTjQVoogBSKCIAUQ1E0L4cjQNNAwJNQtC/9gyBzQMSTIHDk01DTQcNAtJNBwPTUk1DDQND0EAISI1CzQdNBohBa80CxZQo4gBBjQZoogBAKCIAPw1E0L6NDQNNAwJNQtC/9g0CzQMoYgA5TUNQvo+SEy/SIkisgEkshCyB7IIs4k0FDQQSTQUDk01ETQUNAxJNBQPTUk1EDQRD0EAJCI1DDQTNA1X0CAhBa80DBZQo4gAnTQSoogAl6CIAJM1D0L79TQRNBAJNQxC/9VC+yE2GgEXNhoCNQs1DEL7YzYaARc2GgI2GgMXNQs1DDUNQvwZNhoBFzYaAjULNQxC/NlC/PxIiUwJSTUGMgmIAKOJCUlB/+5JNQYxFjQAJAhJNQAJRwKJMRkhDhJEsSKyASEHshA0BbIYIQ6yGbOBoI0GiABpiABaIjIKMgmIAHhC8OlJFYEgTAmvTFCJSVcBAEwiVU2JvkkWUQcIRQRNUIlMSb1A/vxLA4gAPEL+9EkiWzUSSVcIODURIQRbNQ6JsSKyASEHshA0BbIYs4kkNQOJNAY0B0oPQf9cQv9kNAcINQeJsUL+wDQGCDUGiUkiEkw0AhIRRImxsglC/qo=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `2`,
    1000: `539`,
    1001: `539`,
    1002: `540`,
    1003: `540`,
    1004: `540`,
    1005: `541`,
    1006: `541`,
    1007: `542`,
    1008: `542`,
    1009: `543`,
    101: `2`,
    1010: `544`,
    1011: `545`,
    1012: `545`,
    1013: `546`,
    1014: `546`,
    1015: `547`,
    1016: `547`,
    1017: `547`,
    1018: `548`,
    1019: `548`,
    102: `2`,
    1020: `549`,
    1021: `549`,
    1022: `550`,
    1023: `550`,
    1024: `551`,
    1025: `552`,
    1026: `552`,
    1027: `553`,
    1028: `553`,
    1029: `554`,
    103: `2`,
    1030: `555`,
    1031: `556`,
    1032: `557`,
    1033: `557`,
    1034: `558`,
    1035: `558`,
    1036: `559`,
    1037: `560`,
    1038: `566`,
    1039: `566`,
    104: `2`,
    1040: `567`,
    1041: `567`,
    1042: `568`,
    1043: `568`,
    1044: `569`,
    1045: `570`,
    1046: `571`,
    1047: `571`,
    1048: `572`,
    1049: `572`,
    105: `2`,
    1050: `573`,
    1051: `574`,
    1052: `574`,
    1053: `575`,
    1054: `575`,
    1055: `576`,
    1056: `576`,
    1057: `576`,
    1058: `577`,
    1059: `577`,
    106: `2`,
    1060: `578`,
    1061: `578`,
    1062: `579`,
    1063: `579`,
    1064: `580`,
    1065: `581`,
    1066: `582`,
    1067: `583`,
    1068: `583`,
    1069: `584`,
    107: `2`,
    1070: `584`,
    1071: `585`,
    1072: `586`,
    1073: `586`,
    1074: `587`,
    1075: `588`,
    1076: `588`,
    1077: `589`,
    1078: `590`,
    1079: `590`,
    108: `2`,
    1080: `591`,
    1081: `592`,
    1082: `593`,
    1083: `593`,
    1084: `594`,
    1085: `595`,
    1086: `596`,
    1087: `596`,
    1088: `597`,
    1089: `597`,
    109: `2`,
    1090: `598`,
    1091: `598`,
    1092: `599`,
    1093: `599`,
    1094: `601`,
    1095: `601`,
    1096: `602`,
    1097: `602`,
    1098: `603`,
    1099: `603`,
    11: `2`,
    110: `2`,
    1100: `604`,
    1101: `604`,
    1102: `605`,
    1103: `606`,
    1104: `606`,
    1105: `607`,
    1106: `607`,
    1107: `608`,
    1108: `608`,
    1109: `610`,
    111: `2`,
    1110: `611`,
    1111: `611`,
    1112: `612`,
    1113: `612`,
    1114: `613`,
    1115: `613`,
    1116: `614`,
    1117: `614`,
    1118: `615`,
    1119: `616`,
    112: `2`,
    1120: `616`,
    1121: `617`,
    1122: `618`,
    1123: `619`,
    1124: `620`,
    1125: `620`,
    1126: `620`,
    1127: `621`,
    1128: `621`,
    1129: `622`,
    113: `4`,
    1130: `623`,
    1131: `623`,
    1132: `623`,
    1133: `624`,
    1134: `624`,
    1135: `624`,
    1136: `624`,
    1137: `624`,
    1138: `624`,
    1139: `624`,
    114: `4`,
    1140: `624`,
    1141: `624`,
    1142: `624`,
    1143: `624`,
    1144: `624`,
    1145: `624`,
    1146: `624`,
    1147: `624`,
    1148: `624`,
    1149: `624`,
    115: `5`,
    1150: `624`,
    1151: `624`,
    1152: `624`,
    1153: `624`,
    1154: `624`,
    1155: `624`,
    1156: `624`,
    1157: `624`,
    1158: `624`,
    1159: `624`,
    116: `5`,
    1160: `624`,
    1161: `624`,
    1162: `624`,
    1163: `624`,
    1164: `624`,
    1165: `624`,
    1166: `624`,
    1167: `625`,
    1168: `626`,
    1169: `626`,
    117: `5`,
    1170: `626`,
    1171: `627`,
    1172: `627`,
    1173: `628`,
    1174: `629`,
    1175: `629`,
    1176: `629`,
    1177: `630`,
    1178: `630`,
    1179: `634`,
    118: `6`,
    1180: `634`,
    1181: `635`,
    1182: `635`,
    1183: `636`,
    1184: `641`,
    1185: `641`,
    1186: `642`,
    1187: `643`,
    1188: `643`,
    1189: `644`,
    119: `7`,
    1190: `645`,
    1191: `645`,
    1192: `646`,
    1193: `647`,
    1194: `648`,
    1195: `649`,
    1196: `649`,
    1197: `649`,
    1198: `650`,
    1199: `650`,
    12: `2`,
    120: `8`,
    1200: `650`,
    1201: `651`,
    1202: `652`,
    1203: `652`,
    1204: `653`,
    1205: `653`,
    1206: `653`,
    1207: `653`,
    1208: `653`,
    1209: `653`,
    121: `9`,
    1210: `653`,
    1211: `653`,
    1212: `653`,
    1213: `653`,
    1214: `654`,
    1215: `654`,
    1216: `655`,
    1217: `656`,
    1218: `657`,
    1219: `657`,
    122: `10`,
    1220: `658`,
    1221: `659`,
    1222: `659`,
    1223: `660`,
    1224: `661`,
    1225: `662`,
    1226: `662`,
    1227: `663`,
    1228: `664`,
    1229: `664`,
    123: `11`,
    1230: `665`,
    1231: `666`,
    1232: `671`,
    1233: `671`,
    1234: `672`,
    1235: `672`,
    1236: `673`,
    1237: `674`,
    1238: `675`,
    1239: `676`,
    124: `11`,
    1240: `676`,
    1241: `678`,
    1242: `678`,
    1243: `679`,
    1244: `680`,
    1245: `680`,
    1246: `681`,
    1247: `682`,
    1248: `683`,
    1249: `683`,
    125: `12`,
    1250: `684`,
    1251: `685`,
    1252: `685`,
    1253: `686`,
    1254: `687`,
    1255: `687`,
    1256: `688`,
    1257: `689`,
    1258: `689`,
    1259: `690`,
    126: `13`,
    1260: `691`,
    1261: `691`,
    1262: `692`,
    1263: `693`,
    1264: `693`,
    1265: `694`,
    1266: `695`,
    1267: `696`,
    1268: `696`,
    1269: `697`,
    127: `14`,
    1270: `698`,
    1271: `698`,
    1272: `699`,
    1273: `700`,
    1274: `701`,
    1275: `701`,
    1276: `701`,
    1277: `702`,
    1278: `702`,
    1279: `703`,
    128: `15`,
    1280: `704`,
    1281: `704`,
    1282: `705`,
    1283: `705`,
    1284: `706`,
    1285: `707`,
    1286: `708`,
    1287: `709`,
    1288: `710`,
    1289: `710`,
    129: `15`,
    1290: `710`,
    1291: `711`,
    1292: `712`,
    1293: `712`,
    1294: `712`,
    1295: `713`,
    1296: `713`,
    1297: `713`,
    1298: `713`,
    1299: `713`,
    13: `2`,
    130: `16`,
    1300: `713`,
    1301: `714`,
    1302: `714`,
    1303: `715`,
    1304: `716`,
    1305: `717`,
    1306: `717`,
    1307: `718`,
    1308: `719`,
    1309: `719`,
    131: `16`,
    1310: `720`,
    1311: `721`,
    1312: `722`,
    1313: `722`,
    1314: `723`,
    1315: `724`,
    1316: `724`,
    1317: `725`,
    1318: `726`,
    1319: `726`,
    132: `17`,
    1320: `727`,
    1321: `728`,
    1322: `729`,
    1323: `729`,
    1324: `730`,
    1325: `731`,
    1326: `732`,
    1327: `734`,
    1328: `734`,
    1329: `734`,
    133: `18`,
    1330: `734`,
    1331: `734`,
    1332: `734`,
    1333: `734`,
    1334: `734`,
    1335: `734`,
    1336: `734`,
    1337: `735`,
    1338: `735`,
    1339: `736`,
    134: `18`,
    1340: `737`,
    1341: `738`,
    1342: `739`,
    1343: `739`,
    1344: `740`,
    1345: `741`,
    1346: `741`,
    1347: `742`,
    1348: `742`,
    1349: `743`,
    135: `19`,
    1350: `744`,
    1351: `744`,
    1352: `745`,
    1353: `746`,
    1354: `746`,
    1355: `747`,
    1356: `747`,
    1357: `748`,
    1358: `749`,
    1359: `750`,
    136: `20`,
    1360: `751`,
    1361: `752`,
    1362: `753`,
    1363: `753`,
    1364: `754`,
    1365: `755`,
    1366: `756`,
    1367: `756`,
    1368: `757`,
    1369: `757`,
    137: `22`,
    1370: `758`,
    1371: `758`,
    1372: `759`,
    1373: `759`,
    1374: `760`,
    1375: `761`,
    1376: `761`,
    1377: `762`,
    1378: `762`,
    1379: `763`,
    138: `22`,
    1380: `763`,
    1381: `764`,
    1382: `764`,
    1383: `765`,
    1384: `765`,
    1385: `765`,
    1386: `768`,
    1387: `768`,
    1388: `769`,
    1389: `770`,
    139: `22`,
    1390: `771`,
    1391: `771`,
    1392: `773`,
    1393: `774`,
    1394: `774`,
    1395: `775`,
    1396: `776`,
    1397: `777`,
    1398: `777`,
    1399: `778`,
    14: `2`,
    140: `22`,
    1400: `779`,
    1401: `780`,
    1402: `780`,
    1403: `780`,
    1404: `781`,
    1405: `782`,
    1406: `782`,
    1407: `783`,
    1408: `784`,
    1409: `785`,
    141: `22`,
    1410: `786`,
    1411: `787`,
    1412: `792`,
    1413: `792`,
    1414: `793`,
    1415: `793`,
    1416: `794`,
    1417: `794`,
    1418: `795`,
    1419: `795`,
    142: `22`,
    1420: `796`,
    1421: `797`,
    1422: `798`,
    1423: `798`,
    1424: `799`,
    1425: `800`,
    1426: `800`,
    1427: `801`,
    1428: `802`,
    1429: `803`,
    143: `22`,
    1430: `803`,
    1431: `804`,
    1432: `805`,
    1433: `806`,
    1434: `807`,
    1435: `808`,
    1436: `809`,
    1437: `810`,
    1438: `811`,
    1439: `812`,
    144: `22`,
    1440: `812`,
    1441: `813`,
    1442: `814`,
    1443: `814`,
    1444: `815`,
    1445: `816`,
    1446: `816`,
    1447: `817`,
    1448: `818`,
    1449: `819`,
    145: `22`,
    1450: `820`,
    1451: `821`,
    1452: `821`,
    1453: `822`,
    1454: `823`,
    1455: `823`,
    1456: `824`,
    1457: `825`,
    1458: `825`,
    1459: `826`,
    146: `22`,
    1460: `826`,
    1461: `826`,
    1462: `827`,
    1463: `828`,
    1464: `828`,
    1465: `829`,
    1466: `829`,
    1467: `829`,
    1468: `830`,
    1469: `830`,
    147: `22`,
    1470: `831`,
    1471: `831`,
    1472: `832`,
    1473: `832`,
    1474: `832`,
    1475: `833`,
    1476: `833`,
    1477: `834`,
    1478: `834`,
    1479: `835`,
    148: `22`,
    1480: `836`,
    1481: `837`,
    1482: `837`,
    1483: `838`,
    1484: `838`,
    1485: `839`,
    1486: `840`,
    1487: `840`,
    1488: `841`,
    1489: `842`,
    149: `22`,
    1490: `842`,
    1491: `843`,
    1492: `843`,
    1493: `844`,
    1494: `844`,
    1495: `845`,
    1496: `847`,
    1497: `848`,
    1498: `848`,
    1499: `849`,
    15: `2`,
    150: `22`,
    1500: `850`,
    1501: `851`,
    1502: `851`,
    1503: `852`,
    1504: `853`,
    1505: `853`,
    1506: `853`,
    1507: `854`,
    1508: `854`,
    1509: `854`,
    151: `22`,
    1510: `855`,
    1511: `856`,
    1512: `856`,
    1513: `857`,
    1514: `857`,
    1515: `857`,
    1516: `858`,
    1517: `859`,
    1518: `859`,
    1519: `860`,
    152: `22`,
    1520: `860`,
    1521: `861`,
    1522: `862`,
    1523: `867`,
    1524: `867`,
    1525: `868`,
    1526: `868`,
    1527: `869`,
    1528: `870`,
    1529: `875`,
    153: `22`,
    1530: `875`,
    1531: `876`,
    1532: `876`,
    1533: `877`,
    1534: `878`,
    1535: `878`,
    1536: `878`,
    1537: `879`,
    1538: `879`,
    1539: `880`,
    154: `22`,
    1540: `880`,
    1541: `881`,
    1542: `881`,
    1543: `882`,
    1544: `883`,
    1545: `884`,
    1546: `885`,
    1547: `885`,
    1548: `886`,
    1549: `886`,
    155: `22`,
    1550: `887`,
    1551: `888`,
    1552: `888`,
    1553: `889`,
    1554: `890`,
    1555: `890`,
    1556: `891`,
    1557: `892`,
    1558: `892`,
    1559: `893`,
    156: `22`,
    1560: `894`,
    1561: `895`,
    1562: `895`,
    1563: `896`,
    1564: `897`,
    1565: `898`,
    1566: `898`,
    1567: `899`,
    1568: `899`,
    1569: `900`,
    157: `22`,
    1570: `900`,
    1571: `901`,
    1572: `901`,
    1573: `903`,
    1574: `903`,
    1575: `904`,
    1576: `904`,
    1577: `905`,
    1578: `905`,
    1579: `906`,
    158: `22`,
    1580: `906`,
    1581: `907`,
    1582: `908`,
    1583: `908`,
    1584: `909`,
    1585: `909`,
    1586: `910`,
    1587: `910`,
    1588: `911`,
    1589: `911`,
    159: `22`,
    1590: `914`,
    1591: `914`,
    1592: `915`,
    1593: `915`,
    1594: `916`,
    1595: `921`,
    1596: `921`,
    1597: `922`,
    1598: `923`,
    1599: `923`,
    16: `2`,
    160: `22`,
    1600: `924`,
    1601: `925`,
    1602: `925`,
    1603: `926`,
    1604: `927`,
    1605: `928`,
    1606: `929`,
    1607: `929`,
    1608: `929`,
    1609: `930`,
    161: `22`,
    1610: `930`,
    1611: `930`,
    1612: `931`,
    1613: `932`,
    1614: `932`,
    1615: `933`,
    1616: `933`,
    1617: `933`,
    1618: `933`,
    1619: `933`,
    162: `22`,
    1620: `933`,
    1621: `933`,
    1622: `933`,
    1623: `933`,
    1624: `933`,
    1625: `934`,
    1626: `934`,
    1627: `935`,
    1628: `936`,
    1629: `937`,
    163: `22`,
    1630: `937`,
    1631: `938`,
    1632: `939`,
    1633: `939`,
    1634: `940`,
    1635: `941`,
    1636: `942`,
    1637: `942`,
    1638: `943`,
    1639: `944`,
    164: `22`,
    1640: `944`,
    1641: `945`,
    1642: `946`,
    1643: `951`,
    1644: `951`,
    1645: `952`,
    1646: `953`,
    1647: `953`,
    1648: `954`,
    1649: `955`,
    165: `22`,
    1650: `955`,
    1651: `956`,
    1652: `956`,
    1653: `957`,
    1654: `957`,
    1655: `957`,
    1656: `958`,
    1657: `959`,
    1658: `959`,
    1659: `959`,
    166: `22`,
    1660: `960`,
    1661: `960`,
    1662: `961`,
    1663: `961`,
    1664: `962`,
    1665: `963`,
    1666: `963`,
    1667: `964`,
    1668: `964`,
    1669: `964`,
    167: `22`,
    1670: `964`,
    1671: `964`,
    1672: `964`,
    1673: `965`,
    1674: `965`,
    1675: `966`,
    1676: `967`,
    1677: `968`,
    1678: `968`,
    1679: `969`,
    168: `22`,
    1680: `970`,
    1681: `970`,
    1682: `971`,
    1683: `972`,
    1684: `972`,
    1685: `973`,
    1686: `974`,
    1687: `974`,
    1688: `975`,
    1689: `976`,
    169: `22`,
    1690: `978`,
    1691: `978`,
    1692: `979`,
    1693: `980`,
    1694: `980`,
    1695: `981`,
    1696: `982`,
    1697: `983`,
    1698: `983`,
    1699: `984`,
    17: `2`,
    170: `22`,
    1700: `984`,
    1701: `984`,
    1702: `985`,
    1703: `985`,
    1704: `986`,
    1705: `987`,
    1706: `987`,
    1707: `988`,
    1708: `988`,
    1709: `988`,
    171: `22`,
    1710: `989`,
    1711: `990`,
    1712: `990`,
    1713: `991`,
    1714: `992`,
    1715: `992`,
    1716: `993`,
    1717: `993`,
    1718: `993`,
    1719: `994`,
    172: `22`,
    1720: `995`,
    1721: `995`,
    1722: `996`,
    1723: `996`,
    1724: `996`,
    1725: `997`,
    1726: `998`,
    1727: `998`,
    1728: `999`,
    1729: `999`,
    173: `22`,
    1730: `999`,
    1731: `1000`,
    1732: `1001`,
    1733: `1001`,
    1734: `1002`,
    1735: `1002`,
    1736: `1002`,
    1737: `1003`,
    1738: `1004`,
    1739: `1004`,
    174: `22`,
    1740: `1004`,
    1741: `1005`,
    1742: `1005`,
    1743: `1005`,
    1744: `1005`,
    1745: `1005`,
    1746: `1005`,
    1747: `1005`,
    1748: `1005`,
    1749: `1005`,
    175: `22`,
    1750: `1005`,
    1751: `1006`,
    1752: `1006`,
    1753: `1007`,
    1754: `1008`,
    1755: `1009`,
    1756: `1009`,
    1757: `1010`,
    1758: `1010`,
    1759: `1011`,
    176: `22`,
    1760: `1011`,
    1761: `1012`,
    1762: `1012`,
    1763: `1013`,
    1764: `1013`,
    1765: `1014`,
    1766: `1014`,
    1767: `1015`,
    1768: `1016`,
    1769: `1016`,
    177: `22`,
    1770: `1017`,
    1771: `1017`,
    1772: `1018`,
    1773: `1018`,
    1774: `1019`,
    1775: `1019`,
    1776: `1019`,
    1777: `1022`,
    1778: `1022`,
    1779: `1022`,
    178: `22`,
    1780: `1024`,
    1781: `1024`,
    1782: `1025`,
    1783: `1026`,
    1784: `1027`,
    1785: `1027`,
    1786: `1029`,
    1787: `1030`,
    1788: `1030`,
    1789: `1031`,
    179: `22`,
    1790: `1032`,
    1791: `1033`,
    1792: `1033`,
    1793: `1034`,
    1794: `1035`,
    1795: `1036`,
    1796: `1036`,
    1797: `1036`,
    1798: `1037`,
    1799: `1038`,
    18: `2`,
    180: `22`,
    1800: `1038`,
    1801: `1039`,
    1802: `1040`,
    1803: `1041`,
    1804: `1042`,
    1805: `1043`,
    1806: `1048`,
    1807: `1048`,
    1808: `1049`,
    1809: `1049`,
    181: `22`,
    1810: `1050`,
    1811: `1050`,
    1812: `1051`,
    1813: `1051`,
    1814: `1052`,
    1815: `1053`,
    1816: `1054`,
    1817: `1054`,
    1818: `1055`,
    1819: `1056`,
    182: `22`,
    1820: `1056`,
    1821: `1057`,
    1822: `1058`,
    1823: `1059`,
    1824: `1059`,
    1825: `1060`,
    1826: `1061`,
    1827: `1062`,
    1828: `1063`,
    1829: `1064`,
    183: `22`,
    1830: `1065`,
    1831: `1066`,
    1832: `1067`,
    1833: `1068`,
    1834: `1068`,
    1835: `1069`,
    1836: `1070`,
    1837: `1070`,
    1838: `1071`,
    1839: `1072`,
    184: `22`,
    1840: `1072`,
    1841: `1073`,
    1842: `1074`,
    1843: `1075`,
    1844: `1076`,
    1845: `1077`,
    1846: `1077`,
    1847: `1078`,
    1848: `1079`,
    1849: `1079`,
    185: `22`,
    1850: `1080`,
    1851: `1081`,
    1852: `1081`,
    1853: `1082`,
    1854: `1082`,
    1855: `1082`,
    1856: `1083`,
    1857: `1084`,
    1858: `1084`,
    1859: `1085`,
    186: `22`,
    1860: `1085`,
    1861: `1085`,
    1862: `1086`,
    1863: `1086`,
    1864: `1087`,
    1865: `1087`,
    1866: `1088`,
    1867: `1088`,
    1868: `1088`,
    1869: `1089`,
    187: `22`,
    1870: `1089`,
    1871: `1090`,
    1872: `1090`,
    1873: `1091`,
    1874: `1091`,
    1875: `1091`,
    1876: `1092`,
    1877: `1092`,
    1878: `1093`,
    1879: `1093`,
    188: `22`,
    1880: `1094`,
    1881: `1094`,
    1882: `1095`,
    1883: `1096`,
    1884: `1096`,
    1885: `1097`,
    1886: `1097`,
    1887: `1098`,
    1888: `1098`,
    1889: `1098`,
    189: `22`,
    1890: `1099`,
    1891: `1099`,
    1892: `1100`,
    1893: `1100`,
    1894: `1101`,
    1895: `1101`,
    1896: `1101`,
    1897: `1102`,
    1898: `1102`,
    1899: `1103`,
    19: `2`,
    190: `22`,
    1900: `1103`,
    1901: `1104`,
    1902: `1105`,
    1903: `1106`,
    1904: `1106`,
    1905: `1107`,
    1906: `1107`,
    1907: `1108`,
    1908: `1108`,
    1909: `1109`,
    191: `22`,
    1910: `1110`,
    1911: `1110`,
    1912: `1111`,
    1913: `1111`,
    1914: `1112`,
    1915: `1112`,
    1916: `1113`,
    1917: `1114`,
    1918: `1114`,
    1919: `1114`,
    192: `22`,
    1920: `1115`,
    1921: `1115`,
    1922: `1116`,
    1923: `1116`,
    1924: `1118`,
    1925: `1118`,
    1926: `1119`,
    1927: `1120`,
    1928: `1121`,
    1929: `1121`,
    193: `22`,
    1930: `1122`,
    1931: `1122`,
    1932: `1123`,
    1933: `1123`,
    1934: `1124`,
    1935: `1125`,
    1936: `1126`,
    1937: `1126`,
    1938: `1128`,
    1939: `1129`,
    194: `22`,
    1940: `1129`,
    1941: `1130`,
    1942: `1131`,
    1943: `1132`,
    1944: `1132`,
    1945: `1133`,
    1946: `1134`,
    1947: `1134`,
    1948: `1135`,
    1949: `1136`,
    195: `22`,
    1950: `1137`,
    1951: `1137`,
    1952: `1137`,
    1953: `1138`,
    1954: `1138`,
    1955: `1138`,
    1956: `1139`,
    1957: `1140`,
    1958: `1140`,
    1959: `1141`,
    196: `22`,
    1960: `1141`,
    1961: `1141`,
    1962: `1142`,
    1963: `1142`,
    1964: `1143`,
    1965: `1143`,
    1966: `1144`,
    1967: `1144`,
    1968: `1144`,
    1969: `1145`,
    197: `22`,
    1970: `1145`,
    1971: `1146`,
    1972: `1147`,
    1973: `1147`,
    1974: `1147`,
    1975: `1148`,
    1976: `1149`,
    1977: `1150`,
    1978: `1150`,
    1979: `1150`,
    198: `22`,
    1980: `1151`,
    1981: `1151`,
    1982: `1152`,
    1983: `1152`,
    1984: `1153`,
    1985: `1153`,
    1986: `1154`,
    1987: `1155`,
    1988: `1155`,
    1989: `1155`,
    199: `22`,
    1990: `1156`,
    1991: `1156`,
    1992: `1157`,
    1993: `1157`,
    1994: `1159`,
    1995: `1159`,
    1996: `1160`,
    1997: `1160`,
    1998: `1160`,
    1999: `1161`,
    2: `2`,
    20: `2`,
    200: `22`,
    2000: `1162`,
    2001: `1162`,
    2002: `1163`,
    2003: `1163`,
    2004: `1164`,
    2005: `1165`,
    2006: `1165`,
    2007: `1166`,
    2008: `1167`,
    2009: `1168`,
    201: `22`,
    2010: `1168`,
    2011: `1169`,
    2012: `1169`,
    2013: `1170`,
    2014: `1171`,
    2015: `1171`,
    2016: `1172`,
    2017: `1173`,
    2018: `1173`,
    2019: `1174`,
    202: `22`,
    2020: `1174`,
    2021: `1176`,
    2022: `1177`,
    2023: `1177`,
    2024: `1178`,
    2025: `1179`,
    2026: `1180`,
    2027: `1180`,
    2028: `1181`,
    2029: `1182`,
    203: `22`,
    2030: `1182`,
    2031: `1182`,
    2032: `1183`,
    2033: `1183`,
    2034: `1183`,
    2035: `1184`,
    2036: `1184`,
    2037: `1185`,
    2038: `1185`,
    2039: `1186`,
    204: `22`,
    2040: `1187`,
    2041: `1188`,
    2042: `1188`,
    2043: `1189`,
    2044: `1189`,
    2045: `1190`,
    2046: `1190`,
    2047: `1191`,
    2048: `1192`,
    2049: `1193`,
    205: `22`,
    2050: `1194`,
    2051: `1194`,
    2052: `1195`,
    2053: `1195`,
    2054: `1196`,
    2055: `1197`,
    2056: `1197`,
    2057: `1198`,
    2058: `1199`,
    2059: `1199`,
    206: `22`,
    2060: `1200`,
    2061: `1201`,
    2062: `1201`,
    2063: `1202`,
    2064: `1203`,
    2065: `1204`,
    2066: `1204`,
    2067: `1205`,
    2068: `1206`,
    2069: `1207`,
    207: `22`,
    2070: `1207`,
    2071: `1208`,
    2072: `1208`,
    2073: `1209`,
    2074: `1209`,
    2075: `1210`,
    2076: `1210`,
    2077: `1212`,
    2078: `1212`,
    2079: `1213`,
    208: `22`,
    2080: `1213`,
    2081: `1214`,
    2082: `1214`,
    2083: `1215`,
    2084: `1215`,
    2085: `1217`,
    2086: `1218`,
    2087: `1218`,
    2088: `1219`,
    2089: `1219`,
    209: `22`,
    2090: `1220`,
    2091: `1220`,
    2092: `1221`,
    2093: `1222`,
    2094: `1222`,
    2095: `1223`,
    2096: `1223`,
    2097: `1224`,
    2098: `1224`,
    2099: `1225`,
    21: `2`,
    210: `22`,
    2100: `1225`,
    2101: `1229`,
    2102: `1229`,
    2103: `1230`,
    2104: `1230`,
    2105: `1231`,
    2106: `1236`,
    2107: `1236`,
    2108: `1237`,
    2109: `1238`,
    211: `22`,
    2110: `1238`,
    2111: `1239`,
    2112: `1240`,
    2113: `1240`,
    2114: `1241`,
    2115: `1242`,
    2116: `1243`,
    2117: `1244`,
    2118: `1244`,
    2119: `1244`,
    212: `22`,
    2120: `1245`,
    2121: `1245`,
    2122: `1245`,
    2123: `1246`,
    2124: `1247`,
    2125: `1247`,
    2126: `1248`,
    2127: `1248`,
    2128: `1248`,
    2129: `1248`,
    213: `22`,
    2130: `1248`,
    2131: `1248`,
    2132: `1248`,
    2133: `1248`,
    2134: `1248`,
    2135: `1248`,
    2136: `1249`,
    2137: `1249`,
    2138: `1250`,
    2139: `1251`,
    214: `22`,
    2140: `1252`,
    2141: `1252`,
    2142: `1253`,
    2143: `1254`,
    2144: `1254`,
    2145: `1255`,
    2146: `1256`,
    2147: `1257`,
    2148: `1257`,
    2149: `1258`,
    215: `22`,
    2150: `1259`,
    2151: `1259`,
    2152: `1260`,
    2153: `1261`,
    2154: `1266`,
    2155: `1266`,
    2156: `1267`,
    2157: `1268`,
    2158: `1268`,
    2159: `1269`,
    216: `22`,
    2160: `1270`,
    2161: `1270`,
    2162: `1271`,
    2163: `1271`,
    2164: `1271`,
    2165: `1272`,
    2166: `1272`,
    2167: `1273`,
    2168: `1273`,
    2169: `1273`,
    217: `22`,
    2170: `1274`,
    2171: `1274`,
    2172: `1275`,
    2173: `1276`,
    2174: `1276`,
    2175: `1276`,
    2176: `1277`,
    2177: `1278`,
    2178: `1278`,
    2179: `1278`,
    218: `22`,
    2180: `1279`,
    2181: `1279`,
    2182: `1280`,
    2183: `1280`,
    2184: `1281`,
    2185: `1282`,
    2186: `1282`,
    2187: `1282`,
    2188: `1283`,
    2189: `1283`,
    219: `22`,
    2190: `1284`,
    2191: `1284`,
    2192: `1285`,
    2193: `1285`,
    2194: `1286`,
    2195: `1287`,
    2196: `1287`,
    2197: `1288`,
    2198: `1288`,
    2199: `1288`,
    22: `2`,
    220: `22`,
    2200: `1288`,
    2201: `1288`,
    2202: `1288`,
    2203: `1288`,
    2204: `1288`,
    2205: `1288`,
    2206: `1288`,
    2207: `1289`,
    2208: `1289`,
    2209: `1290`,
    221: `22`,
    2210: `1291`,
    2211: `1292`,
    2212: `1292`,
    2213: `1293`,
    2214: `1293`,
    2215: `1294`,
    2216: `1294`,
    2217: `1294`,
    2218: `1294`,
    2219: `1294`,
    222: `22`,
    2220: `1294`,
    2221: `1295`,
    2222: `1295`,
    2223: `1296`,
    2224: `1297`,
    2225: `1298`,
    2226: `1298`,
    2227: `1299`,
    2228: `1300`,
    2229: `1300`,
    223: `22`,
    2230: `1301`,
    2231: `1302`,
    2232: `1302`,
    2233: `1303`,
    2234: `1304`,
    2235: `1306`,
    2236: `1306`,
    2237: `1307`,
    2238: `1308`,
    2239: `1308`,
    224: `23`,
    2240: `1309`,
    2241: `1310`,
    2242: `1311`,
    2243: `1311`,
    2244: `1312`,
    2245: `1313`,
    2246: `1313`,
    2247: `1314`,
    2248: `1315`,
    2249: `1315`,
    225: `23`,
    2250: `1316`,
    2251: `1317`,
    2252: `1317`,
    2253: `1318`,
    2254: `1319`,
    2255: `1319`,
    2256: `1320`,
    2257: `1321`,
    2258: `1321`,
    2259: `1322`,
    226: `23`,
    2260: `1323`,
    2261: `1324`,
    2262: `1324`,
    2263: `1325`,
    2264: `1326`,
    2265: `1326`,
    2266: `1327`,
    2267: `1328`,
    2268: `1328`,
    2269: `1328`,
    227: `24`,
    2270: `1329`,
    2271: `1329`,
    2272: `1330`,
    2273: `1330`,
    2274: `1331`,
    2275: `1331`,
    2276: `1332`,
    2277: `1332`,
    2278: `1333`,
    2279: `1334`,
    228: `24`,
    2280: `1334`,
    2281: `1335`,
    2282: `1335`,
    2283: `1336`,
    2284: `1336`,
    2285: `1337`,
    2286: `1337`,
    2287: `1337`,
    2288: `1340`,
    2289: `1340`,
    229: `24`,
    2290: `1340`,
    2291: `1342`,
    2292: `1342`,
    2293: `1343`,
    2294: `1344`,
    2295: `1345`,
    2296: `1345`,
    2297: `1346`,
    2298: `1346`,
    2299: `1347`,
    23: `2`,
    230: `24`,
    2300: `1347`,
    2301: `1347`,
    2302: `1348`,
    2303: `1348`,
    2304: `1350`,
    2305: `1351`,
    2306: `1351`,
    2307: `1352`,
    2308: `1353`,
    2309: `1354`,
    231: `24`,
    2310: `1354`,
    2311: `1355`,
    2312: `1356`,
    2313: `1357`,
    2314: `1357`,
    2315: `1357`,
    2316: `1358`,
    2317: `1359`,
    2318: `1359`,
    2319: `1360`,
    232: `24`,
    2320: `1361`,
    2321: `1362`,
    2322: `1363`,
    2323: `1364`,
    2324: `1369`,
    2325: `1369`,
    2326: `1370`,
    2327: `1370`,
    2328: `1371`,
    2329: `1371`,
    233: `24`,
    2330: `1372`,
    2331: `1372`,
    2332: `1373`,
    2333: `1374`,
    2334: `1375`,
    2335: `1375`,
    2336: `1376`,
    2337: `1377`,
    2338: `1377`,
    2339: `1378`,
    234: `24`,
    2340: `1379`,
    2341: `1380`,
    2342: `1380`,
    2343: `1381`,
    2344: `1382`,
    2345: `1383`,
    2346: `1384`,
    2347: `1385`,
    2348: `1386`,
    2349: `1387`,
    235: `24`,
    2350: `1388`,
    2351: `1389`,
    2352: `1389`,
    2353: `1390`,
    2354: `1391`,
    2355: `1391`,
    2356: `1392`,
    2357: `1393`,
    2358: `1393`,
    2359: `1394`,
    236: `24`,
    2360: `1395`,
    2361: `1396`,
    2362: `1397`,
    2363: `1398`,
    2364: `1398`,
    2365: `1399`,
    2366: `1400`,
    2367: `1400`,
    2368: `1401`,
    2369: `1402`,
    237: `24`,
    2370: `1402`,
    2371: `1403`,
    2372: `1403`,
    2373: `1403`,
    2374: `1404`,
    2375: `1405`,
    2376: `1405`,
    2377: `1406`,
    2378: `1406`,
    2379: `1406`,
    238: `24`,
    2380: `1407`,
    2381: `1407`,
    2382: `1408`,
    2383: `1408`,
    2384: `1409`,
    2385: `1409`,
    2386: `1410`,
    2387: `1411`,
    2388: `1411`,
    2389: `1412`,
    239: `24`,
    2390: `1412`,
    2391: `1413`,
    2392: `1413`,
    2393: `1413`,
    2394: `1414`,
    2395: `1414`,
    2396: `1415`,
    2397: `1415`,
    2398: `1416`,
    2399: `1416`,
    24: `2`,
    240: `24`,
    2400: `1416`,
    2401: `1417`,
    2402: `1417`,
    2403: `1418`,
    2404: `1418`,
    2405: `1419`,
    2406: `1419`,
    2407: `1419`,
    2408: `1420`,
    2409: `1420`,
    241: `24`,
    2410: `1421`,
    2411: `1421`,
    2412: `1422`,
    2413: `1423`,
    2414: `1424`,
    2415: `1424`,
    2416: `1425`,
    2417: `1425`,
    2418: `1426`,
    2419: `1427`,
    242: `24`,
    2420: `1428`,
    2421: `1428`,
    2422: `1429`,
    2423: `1429`,
    2424: `1430`,
    2425: `1430`,
    2426: `1431`,
    2427: `1432`,
    2428: `1437`,
    2429: `1437`,
    243: `24`,
    2430: `1438`,
    2431: `1438`,
    2432: `1439`,
    2433: `1440`,
    2434: `1445`,
    2435: `1445`,
    2436: `1446`,
    2437: `1446`,
    2438: `1447`,
    2439: `1448`,
    244: `24`,
    2440: `1448`,
    2441: `1449`,
    2442: `1449`,
    2443: `1450`,
    2444: `1450`,
    2445: `1451`,
    2446: `1452`,
    2447: `1452`,
    2448: `1452`,
    2449: `1453`,
    245: `24`,
    2450: `1453`,
    2451: `1454`,
    2452: `1454`,
    2453: `1456`,
    2454: `1456`,
    2455: `1457`,
    2456: `1457`,
    2457: `1458`,
    2458: `1459`,
    2459: `1459`,
    246: `24`,
    2460: `1459`,
    2461: `1460`,
    2462: `1460`,
    2463: `1461`,
    2464: `1461`,
    2465: `1462`,
    2466: `1463`,
    2467: `1463`,
    2468: `1464`,
    2469: `1465`,
    247: `24`,
    2470: `1465`,
    2471: `1466`,
    2472: `1466`,
    2473: `1467`,
    2474: `1467`,
    2475: `1468`,
    2476: `1470`,
    2477: `1471`,
    2478: `1471`,
    2479: `1472`,
    248: `24`,
    2480: `1473`,
    2481: `1474`,
    2482: `1474`,
    2483: `1475`,
    2484: `1476`,
    2485: `1476`,
    2486: `1476`,
    2487: `1477`,
    2488: `1477`,
    2489: `1477`,
    249: `24`,
    2490: `1478`,
    2491: `1479`,
    2492: `1479`,
    2493: `1480`,
    2494: `1480`,
    2495: `1480`,
    2496: `1481`,
    2497: `1481`,
    2498: `1482`,
    2499: `1483`,
    25: `2`,
    250: `24`,
    2500: `1483`,
    2501: `1483`,
    2502: `1484`,
    2503: `1484`,
    2504: `1485`,
    2505: `1485`,
    2506: `1486`,
    2507: `1486`,
    2508: `1487`,
    2509: `1488`,
    251: `24`,
    2510: `1489`,
    2511: `1490`,
    2512: `1490`,
    2513: `1491`,
    2514: `1491`,
    2515: `1492`,
    2516: `1493`,
    2517: `1493`,
    2518: `1494`,
    2519: `1495`,
    252: `24`,
    2520: `1495`,
    2521: `1496`,
    2522: `1497`,
    2523: `1497`,
    2524: `1498`,
    2525: `1499`,
    2526: `1500`,
    2527: `1500`,
    2528: `1501`,
    2529: `1502`,
    253: `24`,
    2530: `1503`,
    2531: `1503`,
    2532: `1504`,
    2533: `1504`,
    2534: `1505`,
    2535: `1505`,
    2536: `1506`,
    2537: `1506`,
    2538: `1508`,
    2539: `1508`,
    254: `24`,
    2540: `1509`,
    2541: `1509`,
    2542: `1510`,
    2543: `1510`,
    2544: `1511`,
    2545: `1511`,
    2546: `1512`,
    2547: `1513`,
    2548: `1513`,
    2549: `1514`,
    255: `24`,
    2550: `1514`,
    2551: `1515`,
    2552: `1515`,
    2553: `1517`,
    2554: `1518`,
    2555: `1518`,
    2556: `1519`,
    2557: `1519`,
    2558: `1520`,
    2559: `1520`,
    256: `24`,
    2560: `1521`,
    2561: `1521`,
    2562: `1525`,
    2563: `1525`,
    2564: `1526`,
    2565: `1526`,
    2566: `1527`,
    2567: `1532`,
    2568: `1532`,
    2569: `1533`,
    257: `24`,
    2570: `1534`,
    2571: `1534`,
    2572: `1535`,
    2573: `1536`,
    2574: `1536`,
    2575: `1537`,
    2576: `1538`,
    2577: `1539`,
    2578: `1540`,
    2579: `1540`,
    258: `24`,
    2580: `1540`,
    2581: `1541`,
    2582: `1541`,
    2583: `1541`,
    2584: `1542`,
    2585: `1543`,
    2586: `1543`,
    2587: `1544`,
    2588: `1544`,
    2589: `1544`,
    259: `24`,
    2590: `1544`,
    2591: `1544`,
    2592: `1544`,
    2593: `1544`,
    2594: `1544`,
    2595: `1544`,
    2596: `1544`,
    2597: `1545`,
    2598: `1545`,
    2599: `1546`,
    26: `2`,
    260: `24`,
    2600: `1547`,
    2601: `1548`,
    2602: `1548`,
    2603: `1549`,
    2604: `1550`,
    2605: `1550`,
    2606: `1551`,
    2607: `1552`,
    2608: `1553`,
    2609: `1553`,
    261: `24`,
    2610: `1554`,
    2611: `1555`,
    2612: `1555`,
    2613: `1556`,
    2614: `1557`,
    2615: `1562`,
    2616: `1562`,
    2617: `1563`,
    2618: `1564`,
    2619: `1564`,
    262: `24`,
    2620: `1565`,
    2621: `1566`,
    2622: `1566`,
    2623: `1567`,
    2624: `1567`,
    2625: `1568`,
    2626: `1568`,
    2627: `1568`,
    2628: `1569`,
    2629: `1569`,
    263: `26`,
    2630: `1570`,
    2631: `1570`,
    2632: `1571`,
    2633: `1572`,
    2634: `1572`,
    2635: `1572`,
    2636: `1573`,
    2637: `1574`,
    2638: `1575`,
    2639: `1575`,
    264: `29`,
    2640: `1575`,
    2641: `1576`,
    2642: `1577`,
    2643: `1577`,
    2644: `1577`,
    2645: `1578`,
    2646: `1579`,
    2647: `1579`,
    2648: `1579`,
    2649: `1580`,
    265: `29`,
    2650: `1580`,
    2651: `1581`,
    2652: `1582`,
    2653: `1582`,
    2654: `1583`,
    2655: `1584`,
    2656: `1585`,
    2657: `1585`,
    2658: `1586`,
    2659: `1586`,
    266: `29`,
    2660: `1586`,
    2661: `1587`,
    2662: `1587`,
    2663: `1588`,
    2664: `1589`,
    2665: `1589`,
    2666: `1590`,
    2667: `1590`,
    2668: `1590`,
    2669: `1591`,
    267: `30`,
    2670: `1592`,
    2671: `1592`,
    2672: `1593`,
    2673: `1594`,
    2674: `1594`,
    2675: `1595`,
    2676: `1595`,
    2677: `1595`,
    2678: `1596`,
    2679: `1597`,
    268: `31`,
    2680: `1597`,
    2681: `1598`,
    2682: `1599`,
    2683: `1600`,
    2684: `1600`,
    2685: `1601`,
    2686: `1602`,
    2687: `1602`,
    2688: `1603`,
    2689: `1604`,
    269: `31`,
    2690: `1604`,
    2691: `1604`,
    2692: `1605`,
    2693: `1605`,
    2694: `1606`,
    2695: `1606`,
    2696: `1607`,
    2697: `1608`,
    2698: `1608`,
    2699: `1609`,
    27: `2`,
    270: `34`,
    2700: `1609`,
    2701: `1609`,
    2702: `1609`,
    2703: `1609`,
    2704: `1609`,
    2705: `1610`,
    2706: `1610`,
    2707: `1611`,
    2708: `1612`,
    2709: `1613`,
    271: `35`,
    2710: `1613`,
    2711: `1614`,
    2712: `1615`,
    2713: `1615`,
    2714: `1616`,
    2715: `1617`,
    2716: `1617`,
    2717: `1618`,
    2718: `1619`,
    2719: `1621`,
    272: `36`,
    2720: `1621`,
    2721: `1621`,
    2722: `1621`,
    2723: `1621`,
    2724: `1621`,
    2725: `1621`,
    2726: `1621`,
    2727: `1621`,
    2728: `1621`,
    2729: `1622`,
    273: `37`,
    2730: `1622`,
    2731: `1623`,
    2732: `1624`,
    2733: `1625`,
    2734: `1625`,
    2735: `1626`,
    2736: `1626`,
    2737: `1627`,
    2738: `1627`,
    2739: `1628`,
    274: `37`,
    2740: `1628`,
    2741: `1629`,
    2742: `1629`,
    2743: `1630`,
    2744: `1630`,
    2745: `1631`,
    2746: `1632`,
    2747: `1632`,
    2748: `1633`,
    2749: `1633`,
    275: `38`,
    2750: `1634`,
    2751: `1634`,
    2752: `1635`,
    2753: `1635`,
    2754: `1635`,
    2755: `1638`,
    2756: `1638`,
    2757: `1638`,
    2758: `1640`,
    2759: `1640`,
    276: `39`,
    2760: `1641`,
    2761: `1642`,
    2762: `1643`,
    2763: `1643`,
    2764: `1644`,
    2765: `1644`,
    2766: `1645`,
    2767: `1645`,
    2768: `1645`,
    2769: `1646`,
    277: `40`,
    2770: `1646`,
    2771: `1648`,
    2772: `1649`,
    2773: `1649`,
    2774: `1650`,
    2775: `1651`,
    2776: `1652`,
    2777: `1652`,
    2778: `1653`,
    2779: `1654`,
    278: `41`,
    2780: `1655`,
    2781: `1655`,
    2782: `1655`,
    2783: `1656`,
    2784: `1657`,
    2785: `1657`,
    2786: `1658`,
    2787: `1659`,
    2788: `1660`,
    2789: `1661`,
    279: `42`,
    2790: `1662`,
    2791: `1667`,
    2792: `1667`,
    2793: `1668`,
    2794: `1668`,
    2795: `1669`,
    2796: `1669`,
    2797: `1670`,
    2798: `1670`,
    2799: `1671`,
    28: `2`,
    280: `43`,
    2800: `1672`,
    2801: `1673`,
    2802: `1673`,
    2803: `1674`,
    2804: `1675`,
    2805: `1675`,
    2806: `1676`,
    2807: `1677`,
    2808: `1678`,
    2809: `1678`,
    281: `44`,
    2810: `1679`,
    2811: `1680`,
    2812: `1681`,
    2813: `1682`,
    2814: `1683`,
    2815: `1684`,
    2816: `1685`,
    2817: `1686`,
    2818: `1687`,
    2819: `1687`,
    282: `44`,
    2820: `1688`,
    2821: `1689`,
    2822: `1689`,
    2823: `1690`,
    2824: `1691`,
    2825: `1691`,
    2826: `1692`,
    2827: `1693`,
    2828: `1694`,
    2829: `1695`,
    283: `47`,
    2830: `1696`,
    2831: `1696`,
    2832: `1697`,
    2833: `1698`,
    2834: `1698`,
    2835: `1699`,
    2836: `1700`,
    2837: `1700`,
    2838: `1701`,
    2839: `1701`,
    284: `47`,
    2840: `1701`,
    2841: `1702`,
    2842: `1703`,
    2843: `1703`,
    2844: `1704`,
    2845: `1704`,
    2846: `1704`,
    2847: `1705`,
    2848: `1705`,
    2849: `1706`,
    285: `48`,
    2850: `1706`,
    2851: `1707`,
    2852: `1707`,
    2853: `1708`,
    2854: `1709`,
    2855: `1709`,
    2856: `1710`,
    2857: `1710`,
    2858: `1711`,
    2859: `1711`,
    286: `48`,
    2860: `1711`,
    2861: `1712`,
    2862: `1712`,
    2863: `1713`,
    2864: `1713`,
    2865: `1714`,
    2866: `1714`,
    2867: `1714`,
    2868: `1715`,
    2869: `1715`,
    287: `49`,
    2870: `1716`,
    2871: `1716`,
    2872: `1717`,
    2873: `1717`,
    2874: `1717`,
    2875: `1718`,
    2876: `1718`,
    2877: `1719`,
    2878: `1719`,
    2879: `1720`,
    288: `50`,
    2880: `1721`,
    2881: `1722`,
    2882: `1722`,
    2883: `1723`,
    2884: `1723`,
    2885: `1724`,
    2886: `1725`,
    2887: `1725`,
    2888: `1726`,
    2889: `1727`,
    289: `51`,
    2890: `1727`,
    2891: `1728`,
    2892: `1728`,
    2893: `1729`,
    2894: `1729`,
    2895: `1730`,
    2896: `1732`,
    2897: `1733`,
    2898: `1733`,
    2899: `1734`,
    29: `2`,
    290: `51`,
    2900: `1735`,
    2901: `1736`,
    2902: `1736`,
    2903: `1737`,
    2904: `1738`,
    2905: `1738`,
    2906: `1738`,
    2907: `1739`,
    2908: `1739`,
    2909: `1739`,
    291: `51`,
    2910: `1740`,
    2911: `1741`,
    2912: `1741`,
    2913: `1742`,
    2914: `1742`,
    2915: `1742`,
    2916: `1743`,
    2917: `1743`,
    2918: `1744`,
    2919: `1744`,
    292: `52`,
    2920: `1745`,
    2921: `1745`,
    2922: `1746`,
    2923: `1747`,
    2924: `1752`,
    2925: `1752`,
    2926: `1753`,
    2927: `1753`,
    2928: `1754`,
    2929: `1755`,
    293: `52`,
    2930: `1755`,
    2931: `1755`,
    2932: `1756`,
    2933: `1756`,
    2934: `1757`,
    2935: `1757`,
    2936: `1758`,
    2937: `1758`,
    2938: `1759`,
    2939: `1760`,
    294: `53`,
    2940: `1765`,
    2941: `1765`,
    2942: `1766`,
    2943: `1766`,
    2944: `1767`,
    2945: `1768`,
    2946: `1768`,
    2947: `1768`,
    2948: `1769`,
    2949: `1769`,
    295: `54`,
    2950: `1770`,
    2951: `1770`,
    2952: `1771`,
    2953: `1772`,
    2954: `1773`,
    2955: `1773`,
    2956: `1774`,
    2957: `1774`,
    2958: `1775`,
    2959: `1775`,
    296: `55`,
    2960: `1776`,
    2961: `1777`,
    2962: `1777`,
    2963: `1778`,
    2964: `1778`,
    2965: `1779`,
    2966: `1779`,
    2967: `1780`,
    2968: `1781`,
    2969: `1781`,
    297: `55`,
    2970: `1781`,
    2971: `1782`,
    2972: `1782`,
    2973: `1783`,
    2974: `1783`,
    2975: `1785`,
    2976: `1785`,
    2977: `1786`,
    2978: `1786`,
    2979: `1786`,
    298: `56`,
    2980: `1787`,
    2981: `1787`,
    2982: `1788`,
    2983: `1788`,
    2984: `1789`,
    2985: `1789`,
    2986: `1790`,
    2987: `1791`,
    2988: `1791`,
    2989: `1791`,
    299: `56`,
    2990: `1792`,
    2991: `1793`,
    2992: `1794`,
    2993: `1794`,
    2994: `1794`,
    2995: `1795`,
    2996: `1796`,
    2997: `1796`,
    2998: `1797`,
    2999: `1797`,
    3: `2`,
    30: `2`,
    300: `57`,
    3000: `1798`,
    3001: `1799`,
    3002: `1799`,
    3003: `1799`,
    3004: `1800`,
    3005: `1800`,
    3006: `1801`,
    3007: `1801`,
    3008: `1803`,
    3009: `1803`,
    301: `57`,
    3010: `1804`,
    3011: `1804`,
    3012: `1805`,
    3013: `1806`,
    3014: `1806`,
    3015: `1807`,
    3016: `1807`,
    3017: `1807`,
    3018: `1807`,
    3019: `1807`,
    302: `57`,
    3020: `1807`,
    3021: `1807`,
    3022: `1807`,
    3023: `1807`,
    3024: `1807`,
    3025: `1808`,
    3026: `1808`,
    3027: `1809`,
    3028: `1810`,
    3029: `1811`,
    303: `58`,
    3030: `1811`,
    3031: `1812`,
    3032: `1812`,
    3033: `1813`,
    3034: `1813`,
    3035: `1814`,
    3036: `1814`,
    3037: `1815`,
    3038: `1816`,
    3039: `1817`,
    304: `58`,
    3040: `1818`,
    3041: `1818`,
    3042: `1819`,
    3043: `1819`,
    3044: `1820`,
    3045: `1821`,
    3046: `1821`,
    3047: `1822`,
    3048: `1823`,
    3049: `1823`,
    305: `59`,
    3050: `1824`,
    3051: `1825`,
    3052: `1825`,
    3053: `1826`,
    3054: `1827`,
    3055: `1828`,
    3056: `1828`,
    3057: `1829`,
    3058: `1830`,
    3059: `1831`,
    306: `59`,
    3060: `1831`,
    3061: `1832`,
    3062: `1832`,
    3063: `1833`,
    3064: `1833`,
    3065: `1834`,
    3066: `1834`,
    3067: `1836`,
    3068: `1836`,
    3069: `1837`,
    307: `59`,
    3070: `1837`,
    3071: `1838`,
    3072: `1838`,
    3073: `1839`,
    3074: `1839`,
    3075: `1840`,
    3076: `1841`,
    3077: `1841`,
    3078: `1842`,
    3079: `1842`,
    308: `59`,
    3080: `1843`,
    3081: `1843`,
    3082: `1844`,
    3083: `1844`,
    3084: `1847`,
    3085: `1847`,
    3086: `1848`,
    3087: `1848`,
    3088: `1849`,
    3089: `1854`,
    309: `59`,
    3090: `1854`,
    3091: `1855`,
    3092: `1856`,
    3093: `1856`,
    3094: `1857`,
    3095: `1858`,
    3096: `1858`,
    3097: `1859`,
    3098: `1860`,
    3099: `1861`,
    31: `2`,
    310: `59`,
    3100: `1862`,
    3101: `1862`,
    3102: `1862`,
    3103: `1863`,
    3104: `1863`,
    3105: `1863`,
    3106: `1864`,
    3107: `1865`,
    3108: `1865`,
    3109: `1866`,
    311: `60`,
    3110: `1866`,
    3111: `1866`,
    3112: `1866`,
    3113: `1866`,
    3114: `1866`,
    3115: `1866`,
    3116: `1866`,
    3117: `1866`,
    3118: `1866`,
    3119: `1867`,
    312: `60`,
    3120: `1867`,
    3121: `1868`,
    3122: `1869`,
    3123: `1870`,
    3124: `1870`,
    3125: `1871`,
    3126: `1872`,
    3127: `1872`,
    3128: `1873`,
    3129: `1874`,
    313: `61`,
    3130: `1875`,
    3131: `1875`,
    3132: `1876`,
    3133: `1877`,
    3134: `1877`,
    3135: `1878`,
    3136: `1879`,
    3137: `1884`,
    3138: `1884`,
    3139: `1885`,
    314: `62`,
    3140: `1886`,
    3141: `1886`,
    3142: `1887`,
    3143: `1888`,
    3144: `1888`,
    3145: `1889`,
    3146: `1889`,
    3147: `1890`,
    3148: `1891`,
    3149: `1891`,
    315: `63`,
    3150: `1891`,
    3151: `1892`,
    3152: `1892`,
    3153: `1892`,
    3154: `1892`,
    3155: `1892`,
    3156: `1892`,
    3157: `1893`,
    3158: `1893`,
    3159: `1894`,
    316: `63`,
    3160: `1895`,
    3161: `1896`,
    3162: `1896`,
    3163: `1897`,
    3164: `1898`,
    3165: `1898`,
    3166: `1899`,
    3167: `1900`,
    3168: `1900`,
    3169: `1901`,
    317: `64`,
    3170: `1902`,
    3171: `1902`,
    3172: `1903`,
    3173: `1904`,
    3174: `1906`,
    3175: `1906`,
    3176: `1907`,
    3177: `1908`,
    3178: `1908`,
    3179: `1909`,
    318: `65`,
    3180: `1910`,
    3181: `1911`,
    3182: `1911`,
    3183: `1912`,
    3184: `1912`,
    3185: `1912`,
    3186: `1913`,
    3187: `1913`,
    3188: `1914`,
    3189: `1915`,
    319: `67`,
    3190: `1915`,
    3191: `1916`,
    3192: `1916`,
    3193: `1916`,
    3194: `1917`,
    3195: `1918`,
    3196: `1918`,
    3197: `1919`,
    3198: `1920`,
    3199: `1920`,
    32: `2`,
    320: `67`,
    3200: `1921`,
    3201: `1921`,
    3202: `1921`,
    3203: `1922`,
    3204: `1923`,
    3205: `1923`,
    3206: `1924`,
    3207: `1925`,
    3208: `1926`,
    3209: `1926`,
    321: `68`,
    3210: `1927`,
    3211: `1928`,
    3212: `1928`,
    3213: `1929`,
    3214: `1930`,
    3215: `1930`,
    3216: `1930`,
    3217: `1931`,
    3218: `1931`,
    3219: `1932`,
    322: `68`,
    3220: `1932`,
    3221: `1933`,
    3222: `1933`,
    3223: `1934`,
    3224: `1934`,
    3225: `1935`,
    3226: `1936`,
    3227: `1936`,
    3228: `1937`,
    3229: `1937`,
    323: `68`,
    3230: `1938`,
    3231: `1938`,
    3232: `1939`,
    3233: `1939`,
    3234: `1939`,
    3235: `1942`,
    3236: `1943`,
    3237: `1943`,
    3238: `1944`,
    3239: `1944`,
    324: `69`,
    3240: `1944`,
    3241: `1944`,
    3242: `1944`,
    3243: `1944`,
    3244: `1944`,
    3245: `1944`,
    3246: `1944`,
    3247: `1944`,
    3248: `1945`,
    3249: `1945`,
    325: `69`,
    3250: `1946`,
    3251: `1947`,
    3252: `1948`,
    3253: `1948`,
    3254: `1949`,
    3255: `1949`,
    3256: `1950`,
    3257: `1950`,
    3258: `1951`,
    3259: `1951`,
    326: `70`,
    3260: `1952`,
    3261: `1952`,
    3262: `1953`,
    3263: `1953`,
    3264: `1954`,
    3265: `1954`,
    3266: `1954`,
    3267: `1957`,
    3268: `1957`,
    3269: `1958`,
    327: `71`,
    3270: `1959`,
    3271: `1959`,
    3272: `1960`,
    3273: `1961`,
    3274: `1962`,
    3275: `1962`,
    3276: `1963`,
    3277: `1965`,
    3278: `1966`,
    3279: `1966`,
    328: `72`,
    3280: `1968`,
    3281: `1968`,
    3282: `1969`,
    3283: `1969`,
    3284: `1969`,
    3285: `1970`,
    3286: `1970`,
    3287: `1970`,
    3288: `1971`,
    3289: `1972`,
    329: `72`,
    3290: `1972`,
    3291: `1973`,
    3292: `1973`,
    3293: `1973`,
    3294: `1973`,
    3295: `1973`,
    3296: `1973`,
    3297: `1973`,
    3298: `1973`,
    3299: `1973`,
    33: `2`,
    330: `72`,
    3300: `1973`,
    3301: `1974`,
    3302: `1974`,
    3303: `1975`,
    3304: `1976`,
    3305: `1977`,
    3306: `1977`,
    3307: `1978`,
    3308: `1978`,
    3309: `1979`,
    331: `72`,
    3310: `1979`,
    3311: `1980`,
    3312: `1980`,
    3313: `1981`,
    3314: `1981`,
    3315: `1982`,
    3316: `1982`,
    3317: `1983`,
    3318: `1984`,
    3319: `1984`,
    332: `72`,
    3320: `1985`,
    3321: `1986`,
    3322: `1986`,
    3323: `1987`,
    3324: `1987`,
    3325: `1988`,
    3326: `1988`,
    3327: `1989`,
    3328: `1989`,
    3329: `1989`,
    333: `72`,
    3330: `1992`,
    3331: `1992`,
    3332: `1992`,
    3333: `1992`,
    3334: `1992`,
    3335: `1992`,
    3336: `1992`,
    3337: `1992`,
    3338: `1992`,
    3339: `1992`,
    334: `72`,
    3340: `1992`,
    3341: `1992`,
    3342: `1992`,
    3343: `1992`,
    3344: `1992`,
    3345: `1992`,
    3346: `1992`,
    3347: `1992`,
    3348: `1992`,
    3349: `1992`,
    335: `72`,
    3350: `1992`,
    3351: `1992`,
    3352: `1992`,
    3353: `1992`,
    3354: `1992`,
    3355: `1992`,
    3356: `1992`,
    3357: `1992`,
    3358: `1992`,
    3359: `1992`,
    336: `72`,
    3360: `1992`,
    3361: `1992`,
    3362: `1992`,
    3363: `1992`,
    3364: `1992`,
    3365: `1992`,
    3366: `1992`,
    3367: `1992`,
    3368: `1992`,
    3369: `1992`,
    337: `72`,
    3370: `1992`,
    3371: `1992`,
    3372: `1992`,
    3373: `1992`,
    3374: `1992`,
    3375: `1992`,
    3376: `1992`,
    3377: `1992`,
    3378: `1992`,
    3379: `1992`,
    338: `72`,
    3380: `1992`,
    3381: `1992`,
    3382: `1992`,
    3383: `1992`,
    3384: `1992`,
    3385: `1992`,
    3386: `1992`,
    3387: `1992`,
    3388: `1992`,
    3389: `1992`,
    339: `72`,
    3390: `1992`,
    3391: `1992`,
    3392: `1992`,
    3393: `1992`,
    3394: `1992`,
    3395: `1992`,
    3396: `1992`,
    3397: `1992`,
    3398: `1992`,
    3399: `1992`,
    34: `2`,
    340: `72`,
    3400: `1992`,
    3401: `1992`,
    3402: `1992`,
    3403: `1992`,
    3404: `1992`,
    3405: `1993`,
    3406: `1993`,
    3407: `1994`,
    3408: `1994`,
    3409: `1994`,
    341: `72`,
    3410: `1997`,
    3411: `1997`,
    3412: `1998`,
    3413: `1998`,
    3414: `1999`,
    3415: `2000`,
    3416: `2003`,
    3417: `2003`,
    3418: `2003`,
    3419: `2004`,
    342: `72`,
    3420: `2004`,
    3421: `2005`,
    3422: `2005`,
    3423: `2006`,
    3424: `2007`,
    3425: `2008`,
    3426: `2008`,
    3427: `2009`,
    3428: `2010`,
    3429: `2010`,
    343: `72`,
    3430: `2011`,
    3431: `2012`,
    3432: `2013`,
    3433: `2013`,
    3434: `2014`,
    3435: `2015`,
    3436: `2016`,
    3437: `2017`,
    3438: `2018`,
    3439: `2019`,
    344: `72`,
    3440: `2020`,
    3441: `2021`,
    3442: `2022`,
    3443: `2022`,
    3444: `2023`,
    3445: `2024`,
    3446: `2024`,
    3447: `2025`,
    3448: `2026`,
    3449: `2026`,
    345: `72`,
    3450: `2027`,
    3451: `2028`,
    3452: `2029`,
    3453: `2030`,
    3454: `2031`,
    3455: `2031`,
    3456: `2032`,
    3457: `2033`,
    3458: `2033`,
    3459: `2034`,
    346: `72`,
    3460: `2036`,
    3461: `2037`,
    3462: `2037`,
    3463: `2038`,
    3464: `2039`,
    3465: `2040`,
    3466: `2040`,
    3467: `2041`,
    3468: `2042`,
    3469: `2043`,
    347: `72`,
    3470: `2043`,
    3471: `2043`,
    3472: `2044`,
    3473: `2044`,
    3474: `2044`,
    3475: `2045`,
    3476: `2046`,
    3477: `2046`,
    3478: `2047`,
    3479: `2047`,
    348: `72`,
    3480: `2047`,
    3481: `2048`,
    3482: `2048`,
    3483: `2049`,
    3484: `2049`,
    3485: `2050`,
    3486: `2050`,
    3487: `2051`,
    3488: `2052`,
    3489: `2052`,
    349: `72`,
    3490: `2053`,
    3491: `2053`,
    3492: `2054`,
    3493: `2054`,
    3494: `2054`,
    3495: `2055`,
    3496: `2055`,
    3497: `2056`,
    3498: `2056`,
    3499: `2057`,
    35: `2`,
    350: `73`,
    3500: `2057`,
    3501: `2057`,
    3502: `2058`,
    3503: `2058`,
    3504: `2059`,
    3505: `2059`,
    3506: `2060`,
    3507: `2061`,
    3508: `2062`,
    3509: `2062`,
    351: `73`,
    3510: `2063`,
    3511: `2063`,
    3512: `2064`,
    3513: `2064`,
    3514: `2065`,
    3515: `2066`,
    3516: `2066`,
    3517: `2067`,
    3518: `2067`,
    3519: `2068`,
    352: `73`,
    3520: `2068`,
    3521: `2069`,
    3522: `2070`,
    3523: `2070`,
    3524: `2070`,
    3525: `2071`,
    3526: `2071`,
    3527: `2072`,
    3528: `2072`,
    3529: `2074`,
    353: `76`,
    3530: `2074`,
    3531: `2075`,
    3532: `2075`,
    3533: `2076`,
    3534: `2078`,
    3535: `2079`,
    3536: `2079`,
    3537: `2080`,
    3538: `2081`,
    3539: `2082`,
    354: `76`,
    3540: `2082`,
    3541: `2083`,
    3542: `2083`,
    3543: `2083`,
    3544: `2084`,
    3545: `2084`,
    3546: `2085`,
    3547: `2086`,
    3548: `2087`,
    3549: `2087`,
    355: `76`,
    3550: `2087`,
    3551: `2088`,
    3552: `2088`,
    3553: `2088`,
    3554: `2089`,
    3555: `2090`,
    3556: `2090`,
    3557: `2091`,
    3558: `2091`,
    3559: `2091`,
    356: `77`,
    3560: `2092`,
    3561: `2092`,
    3562: `2093`,
    3563: `2093`,
    3564: `2094`,
    3565: `2094`,
    3566: `2094`,
    3567: `2095`,
    3568: `2095`,
    3569: `2096`,
    357: `77`,
    3570: `2097`,
    3571: `2097`,
    3572: `2097`,
    3573: `2098`,
    3574: `2099`,
    3575: `2100`,
    3576: `2100`,
    3577: `2100`,
    3578: `2101`,
    3579: `2101`,
    358: `80`,
    3580: `2102`,
    3581: `2102`,
    3582: `2103`,
    3583: `2103`,
    3584: `2104`,
    3585: `2105`,
    3586: `2105`,
    3587: `2105`,
    3588: `2106`,
    3589: `2106`,
    359: `81`,
    3590: `2107`,
    3591: `2107`,
    3592: `2109`,
    3593: `2109`,
    3594: `2110`,
    3595: `2110`,
    3596: `2110`,
    3597: `2111`,
    3598: `2112`,
    3599: `2112`,
    36: `2`,
    360: `82`,
    3600: `2113`,
    3601: `2113`,
    3602: `2114`,
    3603: `2115`,
    3604: `2115`,
    3605: `2116`,
    3606: `2117`,
    3607: `2118`,
    3608: `2118`,
    3609: `2119`,
    361: `83`,
    3610: `2119`,
    3611: `2119`,
    3612: `2122`,
    3613: `2122`,
    3614: `2123`,
    3615: `2123`,
    3616: `2124`,
    3617: `2125`,
    3618: `2128`,
    3619: `2128`,
    362: `83`,
    3620: `2128`,
    3621: `2129`,
    3622: `2129`,
    3623: `2130`,
    3624: `2130`,
    3625: `2131`,
    3626: `2131`,
    3627: `2132`,
    3628: `2132`,
    3629: `2133`,
    363: `84`,
    3630: `2134`,
    3631: `2135`,
    3632: `2135`,
    3633: `2136`,
    3634: `2137`,
    3635: `2137`,
    3636: `2138`,
    3637: `2139`,
    3638: `2140`,
    3639: `2140`,
    364: `85`,
    3640: `2141`,
    3641: `2142`,
    3642: `2143`,
    3643: `2144`,
    3644: `2145`,
    3645: `2146`,
    3646: `2147`,
    3647: `2148`,
    3648: `2149`,
    3649: `2149`,
    365: `85`,
    3650: `2150`,
    3651: `2151`,
    3652: `2151`,
    3653: `2152`,
    3654: `2153`,
    3655: `2153`,
    3656: `2154`,
    3657: `2155`,
    3658: `2156`,
    3659: `2157`,
    366: `86`,
    3660: `2158`,
    3661: `2158`,
    3662: `2159`,
    3663: `2160`,
    3664: `2160`,
    3665: `2161`,
    3666: `2163`,
    3667: `2164`,
    3668: `2164`,
    3669: `2165`,
    367: `87`,
    3670: `2166`,
    3671: `2167`,
    3672: `2167`,
    3673: `2168`,
    3674: `2169`,
    3675: `2170`,
    3676: `2170`,
    3677: `2170`,
    3678: `2171`,
    3679: `2171`,
    368: `88`,
    3680: `2171`,
    3681: `2172`,
    3682: `2173`,
    3683: `2173`,
    3684: `2174`,
    3685: `2174`,
    3686: `2174`,
    3687: `2175`,
    3688: `2175`,
    3689: `2176`,
    369: `88`,
    3690: `2176`,
    3691: `2177`,
    3692: `2177`,
    3693: `2177`,
    3694: `2178`,
    3695: `2178`,
    3696: `2179`,
    3697: `2179`,
    3698: `2180`,
    3699: `2180`,
    37: `2`,
    370: `89`,
    3700: `2181`,
    3701: `2182`,
    3702: `2182`,
    3703: `2183`,
    3704: `2183`,
    3705: `2184`,
    3706: `2184`,
    3707: `2184`,
    3708: `2185`,
    3709: `2185`,
    371: `89`,
    3710: `2186`,
    3711: `2186`,
    3712: `2187`,
    3713: `2188`,
    3714: `2189`,
    3715: `2189`,
    3716: `2190`,
    3717: `2190`,
    3718: `2191`,
    3719: `2191`,
    372: `89`,
    3720: `2192`,
    3721: `2193`,
    3722: `2193`,
    3723: `2194`,
    3724: `2194`,
    3725: `2195`,
    3726: `2195`,
    3727: `2196`,
    3728: `2197`,
    3729: `2197`,
    373: `92`,
    3730: `2197`,
    3731: `2198`,
    3732: `2198`,
    3733: `2199`,
    3734: `2199`,
    3735: `2201`,
    3736: `2201`,
    3737: `2202`,
    3738: `2202`,
    3739: `2203`,
    374: `92`,
    3740: `2205`,
    3741: `2206`,
    3742: `2206`,
    3743: `2207`,
    3744: `2208`,
    3745: `2209`,
    3746: `2209`,
    3747: `2210`,
    3748: `2210`,
    3749: `2210`,
    375: `92`,
    3750: `2211`,
    3751: `2211`,
    3752: `2212`,
    3753: `2213`,
    3754: `2214`,
    3755: `2214`,
    3756: `2214`,
    3757: `2215`,
    3758: `2215`,
    3759: `2215`,
    376: `93`,
    3760: `2216`,
    3761: `2217`,
    3762: `2217`,
    3763: `2218`,
    3764: `2218`,
    3765: `2218`,
    3766: `2219`,
    3767: `2219`,
    3768: `2220`,
    3769: `2220`,
    377: `94`,
    3770: `2221`,
    3771: `2221`,
    3772: `2221`,
    3773: `2222`,
    3774: `2222`,
    3775: `2223`,
    3776: `2224`,
    3777: `2224`,
    3778: `2224`,
    3779: `2225`,
    378: `94`,
    3780: `2226`,
    3781: `2227`,
    3782: `2227`,
    3783: `2227`,
    3784: `2228`,
    3785: `2228`,
    3786: `2229`,
    3787: `2229`,
    3788: `2230`,
    3789: `2230`,
    379: `97`,
    3790: `2231`,
    3791: `2232`,
    3792: `2232`,
    3793: `2232`,
    3794: `2233`,
    3795: `2233`,
    3796: `2234`,
    3797: `2234`,
    3798: `2236`,
    3799: `2236`,
    38: `2`,
    380: `98`,
    3800: `2237`,
    3801: `2237`,
    3802: `2237`,
    3803: `2238`,
    3804: `2239`,
    3805: `2239`,
    3806: `2240`,
    3807: `2240`,
    3808: `2241`,
    3809: `2242`,
    381: `99`,
    3810: `2242`,
    3811: `2243`,
    3812: `2244`,
    3813: `2245`,
    3814: `2245`,
    3815: `2246`,
    3816: `2246`,
    3817: `2246`,
    3818: `2249`,
    3819: `2249`,
    382: `99`,
    3820: `2250`,
    3821: `2250`,
    3822: `2251`,
    3823: `2252`,
    3824: `2255`,
    3825: `2255`,
    3826: `2255`,
    3827: `2256`,
    3828: `2256`,
    3829: `2257`,
    383: `99`,
    3830: `2259`,
    3831: `2260`,
    3832: `2260`,
    3833: `2261`,
    3834: `2262`,
    3835: `2263`,
    3836: `2263`,
    3837: `2264`,
    3838: `2265`,
    3839: `2265`,
    384: `100`,
    3840: `2266`,
    3841: `2267`,
    3842: `2268`,
    3843: `2268`,
    3844: `2268`,
    3845: `2269`,
    3846: `2269`,
    3847: `2269`,
    3848: `2270`,
    3849: `2270`,
    385: `100`,
    3850: `2270`,
    3851: `2271`,
    3852: `2271`,
    3853: `2272`,
    3854: `2272`,
    3855: `2272`,
    3856: `2275`,
    3857: `2275`,
    3858: `2275`,
    3859: `2275`,
    386: `101`,
    3860: `2275`,
    3861: `2275`,
    3862: `2275`,
    3863: `2275`,
    3864: `2275`,
    3865: `2275`,
    3866: `2275`,
    3867: `2275`,
    3868: `2275`,
    3869: `2275`,
    387: `102`,
    3870: `2275`,
    3871: `2275`,
    3872: `2275`,
    3873: `2275`,
    3874: `2275`,
    3875: `2275`,
    3876: `2275`,
    3877: `2275`,
    3878: `2275`,
    3879: `2275`,
    388: `103`,
    3880: `2275`,
    3881: `2275`,
    3882: `2275`,
    3883: `2275`,
    3884: `2275`,
    3885: `2275`,
    3886: `2275`,
    3887: `2275`,
    3888: `2275`,
    3889: `2275`,
    389: `104`,
    3890: `2275`,
    3891: `2275`,
    3892: `2275`,
    3893: `2275`,
    3894: `2275`,
    3895: `2275`,
    3896: `2275`,
    3897: `2275`,
    3898: `2275`,
    3899: `2275`,
    39: `2`,
    390: `105`,
    3900: `2275`,
    3901: `2275`,
    3902: `2275`,
    3903: `2275`,
    3904: `2275`,
    3905: `2275`,
    3906: `2275`,
    3907: `2275`,
    3908: `2275`,
    3909: `2275`,
    391: `106`,
    3910: `2275`,
    3911: `2275`,
    3912: `2275`,
    3913: `2275`,
    3914: `2275`,
    3915: `2275`,
    3916: `2275`,
    3917: `2275`,
    3918: `2275`,
    3919: `2275`,
    392: `107`,
    3920: `2275`,
    3921: `2275`,
    3922: `2275`,
    3923: `2275`,
    3924: `2275`,
    3925: `2275`,
    3926: `2275`,
    3927: `2275`,
    3928: `2275`,
    3929: `2275`,
    393: `107`,
    3930: `2275`,
    3931: `2276`,
    3932: `2276`,
    3933: `2277`,
    3934: `2277`,
    3935: `2277`,
    3936: `2280`,
    3937: `2280`,
    3938: `2281`,
    3939: `2282`,
    394: `108`,
    3940: `2283`,
    3941: `2283`,
    3942: `2284`,
    3943: `2284`,
    3944: `2284`,
    3945: `2284`,
    3946: `2284`,
    3947: `2284`,
    3948: `2285`,
    3949: `2285`,
    395: `108`,
    3950: `2286`,
    3951: `2287`,
    3952: `2288`,
    3953: `2288`,
    3954: `2289`,
    3955: `2289`,
    3956: `2289`,
    3957: `2290`,
    3958: `2291`,
    3959: `2293`,
    396: `108`,
    3960: `2293`,
    3961: `2294`,
    3962: `2294`,
    3963: `2294`,
    3964: `2295`,
    3965: `2295`,
    3966: `2296`,
    3967: `2296`,
    3968: `2297`,
    3969: `2297`,
    397: `111`,
    3970: `2297`,
    3971: `2297`,
    3972: `2297`,
    3973: `2297`,
    3974: `2297`,
    3975: `2297`,
    3976: `2297`,
    3977: `2297`,
    3978: `2298`,
    3979: `2298`,
    398: `111`,
    3980: `2299`,
    3981: `2300`,
    3982: `2301`,
    3983: `2302`,
    3984: `2303`,
    3985: `2304`,
    3986: `2305`,
    3987: `2306`,
    3988: `2306`,
    3989: `2307`,
    399: `111`,
    3990: `2307`,
    3991: `2308`,
    3992: `2309`,
    3993: `2309`,
    3994: `2310`,
    3995: `2310`,
    3996: `2311`,
    3997: `2311`,
    3998: `2312`,
    3999: `2312`,
    4: `2`,
    40: `2`,
    400: `112`,
    4000: `2313`,
    4001: `2313`,
    4002: `2313`,
    4003: `2315`,
    4004: `2315`,
    4005: `2315`,
    4006: `2316`,
    4007: `2316`,
    4008: `2316`,
    4009: `2316`,
    401: `112`,
    4010: `2317`,
    4011: `2317`,
    4012: `2317`,
    4013: `2319`,
    4014: `2320`,
    4015: `2321`,
    4016: `2321`,
    4017: `2322`,
    4018: `2322`,
    4019: `2323`,
    402: `115`,
    4020: `2323`,
    4021: `2325`,
    4022: `2325`,
    4023: `2325`,
    4024: `2325`,
    4025: `2325`,
    4026: `2325`,
    4027: `2325`,
    4028: `2325`,
    4029: `2326`,
    403: `116`,
    4030: `2326`,
    4031: `2327`,
    4032: `2327`,
    4033: `2327`,
    4034: `2328`,
    4035: `2328`,
    4036: `2329`,
    4037: `2331`,
    4038: `2331`,
    4039: `2332`,
    404: `117`,
    4040: `2332`,
    4041: `2334`,
    4042: `2334`,
    4043: `2334`,
    4044: `2335`,
    4045: `2335`,
    4046: `2336`,
    4047: `2336`,
    4048: `2336`,
    4049: `2338`,
    405: `117`,
    4050: `2338`,
    4051: `2338`,
    4052: `2340`,
    4053: `2340`,
    4054: `2340`,
    4055: `2341`,
    4056: `2341`,
    4057: `2342`,
    4058: `2342`,
    4059: `2342`,
    406: `117`,
    4060: `2344`,
    4061: `2345`,
    4062: `2345`,
    4063: `2346`,
    4064: `2347`,
    4065: `2348`,
    4066: `2348`,
    4067: `2349`,
    4068: `2349`,
    4069: `2350`,
    407: `118`,
    4070: `2351`,
    4071: `2352`,
    4072: `2353`,
    4073: `2353`,
    4074: `2354`,
    4075: `2355`,
    4076: `2356`,
    4077: `2357`,
    4078: `2357`,
    4079: `2358`,
    408: `118`,
    4080: `2359`,
    4081: `2360`,
    4082: `2361`,
    4083: `2361`,
    4084: `2362`,
    4085: `2362`,
    4086: `2362`,
    4087: `2363`,
    4088: `2363`,
    4089: `2364`,
    409: `119`,
    4090: `2365`,
    4091: `2366`,
    4092: `2367`,
    4093: `2367`,
    4094: `2367`,
    4095: `2369`,
    4096: `2369`,
    4097: `2370`,
    4098: `2370`,
    4099: `2371`,
    41: `2`,
    410: `120`,
    4100: `2372`,
    4101: `2372`,
    4102: `2372`,
    4103: `2373`,
    4104: `2373`,
    4105: `2374`,
    4106: `2374`,
    4107: `2374`,
    4108: `2376`,
    4109: `2376`,
    411: `121`,
    4110: `2377`,
    4111: `2377`,
    4112: `2378`,
    4113: `2379`,
    4114: `2379`,
    4115: `2380`,
    4116: `2381`,
    4117: `2382`,
    4118: `2382`,
    4119: `2383`,
    412: `121`,
    4120: `2383`,
    4121: `2384`,
    4122: `2384`,
    4123: `2385`,
    4124: `2386`,
    4125: `2386`,
    4126: `2387`,
    4127: `2388`,
    4128: `2389`,
    4129: `2390`,
    413: `122`,
    4130: `2390`,
    4131: `2391`,
    4132: `2391`,
    4133: `2392`,
    4134: `2393`,
    4135: `2393`,
    4136: `2393`,
    4137: `2394`,
    4138: `2395`,
    4139: `2395`,
    414: `122`,
    4140: `2397`,
    4141: `2397`,
    4142: `2398`,
    4143: `2398`,
    4144: `2399`,
    4145: `2399`,
    4146: `2399`,
    4147: `2400`,
    4148: `2400`,
    4149: `2401`,
    415: `122`,
    4150: `2402`,
    4151: `2402`,
    4152: `2403`,
    4153: `2404`,
    4154: `2405`,
    4155: `2406`,
    4156: `2406`,
    4157: `2406`,
    4158: `2407`,
    4159: `2407`,
    416: `125`,
    4160: `2408`,
    4161: `2409`,
    4162: `2409`,
    4163: `2409`,
    4164: `2410`,
    4165: `2411`,
    4166: `2411`,
    4167: `2411`,
    4168: `2412`,
    4169: `2412`,
    417: `125`,
    4170: `2413`,
    4171: `2413`,
    4172: `2413`,
    4173: `2415`,
    4174: `2415`,
    4175: `2416`,
    4176: `2416`,
    4177: `2417`,
    4178: `2418`,
    4179: `2418`,
    418: `125`,
    4180: `2419`,
    4181: `2419`,
    4182: `2419`,
    4183: `2421`,
    4184: `2421`,
    4185: `2422`,
    4186: `2422`,
    4187: `2423`,
    4188: `2424`,
    4189: `2424`,
    419: `126`,
    4190: `2424`,
    4191: `2425`,
    4192: `2425`,
    4193: `2426`,
    4194: `2426`,
    4195: `2426`,
    4196: `2428`,
    4197: `2428`,
    4198: `2428`,
    4199: `2430`,
    42: `2`,
    420: `127`,
    4200: `2430`,
    4201: `2430`,
    4202: `2432`,
    4203: `2432`,
    4204: `2432`,
    4205: `2434`,
    4206: `2434`,
    4207: `2434`,
    4208: `2436`,
    4209: `2436`,
    421: `127`,
    4210: `2436`,
    4211: `2438`,
    4212: `2438`,
    4213: `2438`,
    4214: `2440`,
    4215: `2440`,
    4216: `2441`,
    4217: `2441`,
    4218: `2441`,
    4219: `2442`,
    422: `130`,
    4220: `2442`,
    4221: `2443`,
    4222: `2443`,
    4223: `2443`,
    4224: `2445`,
    4225: `2445`,
    4226: `2446`,
    4227: `2446`,
    4228: `2446`,
    4229: `2447`,
    423: `130`,
    4230: `2447`,
    4231: `2448`,
    4232: `2448`,
    4233: `2448`,
    4234: `2450`,
    4235: `2450`,
    4236: `2450`,
    4237: `2452`,
    4238: `2452`,
    4239: `2452`,
    424: `131`,
    4240: `2454`,
    4241: `2454`,
    4242: `2455`,
    4243: `2455`,
    4244: `2456`,
    4245: `2457`,
    4246: `2457`,
    4247: `2458`,
    4248: `2459`,
    4249: `2460`,
    425: `131`,
    4250: `2460`,
    4251: `2461`,
    4252: `2461`,
    4253: `2462`,
    4254: `2462`,
    4255: `2463`,
    4256: `2464`,
    4257: `2464`,
    4258: `2465`,
    4259: `2466`,
    426: `132`,
    4260: `2467`,
    4261: `2468`,
    4262: `2468`,
    4263: `2469`,
    4264: `2469`,
    4265: `2470`,
    4266: `2471`,
    4267: `2471`,
    4268: `2471`,
    4269: `2472`,
    427: `133`,
    4270: `2473`,
    4271: `2473`,
    4272: `2475`,
    4273: `2475`,
    4274: `2476`,
    4275: `2476`,
    4276: `2477`,
    4277: `2477`,
    4278: `2478`,
    4279: `2479`,
    428: `136`,
    4280: `2479`,
    4281: `2480`,
    4282: `2481`,
    4283: `2482`,
    4284: `2483`,
    4285: `2483`,
    4286: `2483`,
    4287: `2484`,
    4288: `2484`,
    4289: `2485`,
    429: `136`,
    4290: `2486`,
    4291: `2486`,
    4292: `2486`,
    4293: `2487`,
    4294: `2488`,
    4295: `2488`,
    4296: `2488`,
    4297: `2489`,
    4298: `2489`,
    4299: `2490`,
    43: `2`,
    430: `136`,
    4300: `2490`,
    4301: `2490`,
    4302: `2492`,
    4303: `2492`,
    4304: `2493`,
    4305: `2493`,
    4306: `2494`,
    4307: `2495`,
    4308: `2495`,
    4309: `2496`,
    431: `137`,
    4310: `2496`,
    4311: `2496`,
    4312: `2498`,
    4313: `2498`,
    4314: `2499`,
    4315: `2499`,
    4316: `2500`,
    4317: `2501`,
    4318: `2501`,
    4319: `2501`,
    432: `137`,
    4320: `2502`,
    4321: `2502`,
    4322: `2503`,
    4323: `2503`,
    4324: `2503`,
    4325: `2505`,
    4326: `2505`,
    4327: `2506`,
    4328: `2506`,
    4329: `2507`,
    433: `138`,
    4330: `2508`,
    4331: `2508`,
    4332: `2509`,
    4333: `2510`,
    4334: `2511`,
    4335: `2511`,
    4336: `2512`,
    4337: `2512`,
    4338: `2513`,
    4339: `2513`,
    434: `138`,
    4340: `2514`,
    4341: `2515`,
    4342: `2515`,
    4343: `2516`,
    4344: `2517`,
    4345: `2518`,
    4346: `2519`,
    4347: `2519`,
    4348: `2520`,
    4349: `2520`,
    435: `139`,
    4350: `2521`,
    4351: `2522`,
    4352: `2522`,
    4353: `2522`,
    4354: `2523`,
    4355: `2524`,
    4356: `2524`,
    4357: `2526`,
    4358: `2526`,
    4359: `2527`,
    436: `140`,
    4360: `2527`,
    4361: `2528`,
    4362: `2528`,
    4363: `2529`,
    4364: `2530`,
    4365: `2530`,
    4366: `2531`,
    4367: `2532`,
    4368: `2533`,
    4369: `2534`,
    437: `141`,
    4370: `2534`,
    4371: `2534`,
    4372: `2535`,
    4373: `2535`,
    4374: `2536`,
    4375: `2537`,
    4376: `2537`,
    4377: `2537`,
    4378: `2538`,
    4379: `2539`,
    438: `141`,
    4380: `2539`,
    4381: `2539`,
    4382: `2540`,
    4383: `2540`,
    4384: `2541`,
    4385: `2541`,
    4386: `2541`,
    4387: `2543`,
    4388: `2543`,
    4389: `2544`,
    439: `142`,
    4390: `2544`,
    4391: `2545`,
    4392: `2546`,
    4393: `2546`,
    4394: `2547`,
    4395: `2547`,
    4396: `2547`,
    4397: `2549`,
    4398: `2549`,
    4399: `2550`,
    44: `2`,
    440: `143`,
    4400: `2550`,
    4401: `2551`,
    4402: `2552`,
    4403: `2552`,
    4404: `2553`,
    4405: `2554`,
    4406: `2555`,
    4407: `2555`,
    4408: `2556`,
    4409: `2556`,
    441: `143`,
    4410: `2557`,
    4411: `2557`,
    4412: `2558`,
    4413: `2559`,
    4414: `2559`,
    4415: `2560`,
    4416: `2561`,
    4417: `2562`,
    4418: `2563`,
    4419: `2563`,
    442: `144`,
    4420: `2564`,
    4421: `2564`,
    4422: `2565`,
    4423: `2566`,
    4424: `2566`,
    4425: `2566`,
    4426: `2567`,
    4427: `2568`,
    4428: `2568`,
    4429: `2570`,
    443: `145`,
    4430: `2570`,
    4431: `2571`,
    4432: `2571`,
    4433: `2572`,
    4434: `2572`,
    4435: `2573`,
    4436: `2574`,
    4437: `2574`,
    4438: `2575`,
    4439: `2576`,
    444: `146`,
    4440: `2577`,
    4441: `2578`,
    4442: `2578`,
    4443: `2578`,
    4444: `2579`,
    4445: `2579`,
    4446: `2580`,
    4447: `2581`,
    4448: `2581`,
    4449: `2581`,
    445: `146`,
    4450: `2582`,
    4451: `2583`,
    4452: `2583`,
    4453: `2583`,
    4454: `2584`,
    4455: `2584`,
    4456: `2585`,
    4457: `2585`,
    4458: `2585`,
    4459: `2587`,
    446: `147`,
    4460: `2587`,
    4461: `2588`,
    4462: `2588`,
    4463: `2589`,
    4464: `2590`,
    4465: `2590`,
    4466: `2591`,
    4467: `2591`,
    4468: `2591`,
    4469: `2593`,
    447: `148`,
    4470: `2593`,
    4471: `2594`,
    4472: `2594`,
    4473: `2595`,
    4474: `2596`,
    4475: `2596`,
    4476: `2596`,
    4477: `2597`,
    4478: `2597`,
    4479: `2598`,
    448: `149`,
    4480: `2598`,
    4481: `2598`,
    4482: `2600`,
    4483: `2601`,
    4484: `2602`,
    4485: `2603`,
    4486: `2604`,
    4487: `2606`,
    4488: `2607`,
    4489: `2607`,
    449: `150`,
    4490: `2608`,
    4491: `2609`,
    4492: `2609`,
    4493: `2610`,
    4494: `2610`,
    4495: `2611`,
    4496: `2611`,
    4497: `2612`,
    4498: `2613`,
    4499: `2615`,
    45: `2`,
    450: `151`,
    4500: `2615`,
    4501: `2616`,
    4502: `2616`,
    4503: `2617`,
    4504: `2618`,
    4505: `2618`,
    4506: `2619`,
    4507: `2620`,
    4508: `2621`,
    4509: `2621`,
    451: `152`,
    4510: `2622`,
    4511: `2622`,
    4512: `2623`,
    4513: `2623`,
    4514: `2624`,
    4515: `2625`,
    4516: `2625`,
    4517: `2626`,
    4518: `2627`,
    4519: `2628`,
    452: `153`,
    4520: `2629`,
    4521: `2629`,
    4522: `2630`,
    4523: `2630`,
    4524: `2631`,
    4525: `2632`,
    4526: `2632`,
    4527: `2632`,
    4528: `2633`,
    4529: `2634`,
    453: `154`,
    4530: `2634`,
    4531: `2636`,
    4532: `2636`,
    4533: `2637`,
    4534: `2637`,
    4535: `2638`,
    4536: `2638`,
    4537: `2638`,
    4538: `2639`,
    4539: `2639`,
    454: `155`,
    4540: `2640`,
    4541: `2641`,
    4542: `2641`,
    4543: `2642`,
    4544: `2643`,
    4545: `2644`,
    4546: `2645`,
    4547: `2645`,
    4548: `2645`,
    4549: `2646`,
    455: `155`,
    4550: `2646`,
    4551: `2647`,
    4552: `2648`,
    4553: `2648`,
    4554: `2648`,
    4555: `2649`,
    4556: `2650`,
    4557: `2650`,
    4558: `2650`,
    4559: `2651`,
    456: `156`,
    4560: `2651`,
    4561: `2652`,
    4562: `2652`,
    4563: `2652`,
    4564: `2654`,
    4565: `2654`,
    4566: `2655`,
    4567: `2655`,
    4568: `2656`,
    4569: `2657`,
    457: `157`,
    4570: `2657`,
    4571: `2658`,
    4572: `2658`,
    4573: `2658`,
    4574: `2661`,
    4575: `2661`,
    4576: `2661`,
    4577: `2664`,
    4578: `2664`,
    4579: `2664`,
    458: `157`,
    4580: `2665`,
    4581: `2666`,
    4582: `2666`,
    4583: `2666`,
    4584: `2667`,
    4585: `2667`,
    4586: `2668`,
    4587: `2668`,
    4588: `2669`,
    4589: `2669`,
    459: `158`,
    4590: `2669`,
    4591: `2672`,
    4592: `2672`,
    4593: `2672`,
    4594: `2673`,
    4595: `2674`,
    4596: `2674`,
    4597: `2674`,
    4598: `2675`,
    4599: `2675`,
    46: `2`,
    460: `159`,
    4600: `2675`,
    4601: `2676`,
    4602: `2677`,
    4603: `2677`,
    4604: `2678`,
    4605: `2678`,
    4606: `2679`,
    4607: `2679`,
    4608: `2680`,
    4609: `2680`,
    461: `159`,
    4610: `2680`,
    4611: `2683`,
    4612: `2683`,
    4613: `2683`,
    4614: `2684`,
    4615: `2685`,
    4616: `2685`,
    4617: `2685`,
    4618: `2686`,
    4619: `2686`,
    462: `160`,
    4620: `2687`,
    4621: `2687`,
    4622: `2688`,
    4623: `2688`,
    4624: `2688`,
    4625: `2691`,
    4626: `2691`,
    4627: `2691`,
    4628: `2693`,
    4629: `2694`,
    463: `161`,
    4630: `2696`,
    4631: `2697`,
    4632: `2698`,
    4633: `2699`,
    4634: `2699`,
    4635: `2700`,
    4636: `2700`,
    4637: `2701`,
    4638: `2701`,
    4639: `2701`,
    464: `162`,
    4640: `2702`,
    4641: `2704`,
    4642: `2705`,
    4643: `2706`,
    4644: `2706`,
    4645: `2706`,
    4646: `2707`,
    4647: `2708`,
    4648: `2708`,
    4649: `2711`,
    465: `163`,
    4650: `2711`,
    4651: `2712`,
    4652: `2712`,
    4653: `2713`,
    4654: `2714`,
    4655: `2715`,
    4656: `2716`,
    4657: `2716`,
    4658: `2717`,
    4659: `2718`,
    466: `164`,
    4660: `2718`,
    4661: `2719`,
    4662: `2719`,
    4663: `2720`,
    4664: `2720`,
    4665: `2721`,
    4666: `2722`,
    4667: `2723`,
    4668: `2723`,
    4669: `2724`,
    467: `164`,
    4670: `2725`,
    4671: `2726`,
    4672: `2727`,
    4673: `2727`,
    4674: `2728`,
    4675: `2729`,
    4676: `2730`,
    4677: `2732`,
    4678: `2732`,
    4679: `2733`,
    468: `165`,
    4680: `2733`,
    4681: `2734`,
    4682: `2735`,
    4683: `2738`,
    4684: `2739`,
    4685: `2740`,
    4686: `2740`,
    4687: `2741`,
    4688: `2741`,
    4689: `2742`,
    469: `166`,
    4690: `2742`,
    4691: `2743`,
    4692: `2743`,
    4693: `2744`,
    4694: `2744`,
    4695: `2745`,
    4696: `2745`,
    4697: `2746`,
    4698: `2746`,
    4699: `2747`,
    47: `2`,
    470: `166`,
    4700: `2749`,
    4701: `2749`,
    4702: `2749`,
    4703: `2749`,
    4704: `2750`,
    4705: `2750`,
    4706: `2750`,
    4707: `2751`,
    4708: `2751`,
    4709: `2751`,
    471: `167`,
    4710: `2753`,
    4711: `2754`,
    4712: `2754`,
    4713: `2755`,
    4714: `2755`,
    4715: `2756`,
    4716: `2756`,
    4717: `2756`,
    4718: `2757`,
    4719: `2757`,
    472: `169`,
    4720: `2757`,
    4721: `2759`,
    4722: `2760`,
    4723: `2761`,
    4724: `2761`,
    4725: `2762`,
    4726: `2763`,
    4727: `2764`,
    4728: `2765`,
    4729: `2766`,
    473: `170`,
    4730: `2767`,
    4731: `2769`,
    4732: `2770`,
    4733: `2770`,
    4734: `2770`,
    4735: `2771`,
    4736: `2772`,
    4737: `2773`,
    4738: `2774`,
    4739: `2775`,
    474: `170`,
    4740: `2777`,
    4741: `2778`,
    4742: `2779`,
    4743: `2780`,
    4744: `2780`,
    4745: `2780`,
    4746: `2781`,
    4747: `2781`,
    4748: `2782`,
    4749: `2783`,
    475: `171`,
    4750: `2784`,
    4751: `2786`,
    4752: `2787`,
    4753: `2788`,
    4754: `2789`,
    4755: `2789`,
    4756: `2789`,
    4757: `2790`,
    4758: `2790`,
    4759: `2791`,
    476: `172`,
    4760: `2791`,
    4761: `2791`,
    4762: `2792`,
    4763: `2792`,
    4764: `2792`,
    4765: `2794`,
    4766: `2795`,
    4767: `2796`,
    4768: `2797`,
    4769: `2797`,
    477: `173`,
    4770: `2798`,
    4771: `2799`,
    4772: `2799`,
    4773: `2799`,
    4774: `2800`,
    4775: `2800`,
    4776: `2801`,
    4777: `2801`,
    4778: `2802`,
    4779: `2803`,
    478: `173`,
    4780: `2803`,
    4781: `2804`,
    4782: `2806`,
    4783: `2807`,
    4784: `2808`,
    4785: `2808`,
    4786: `2809`,
    4787: `2809`,
    4788: `2810`,
    4789: `2810`,
    479: `174`,
    4790: `2811`,
    4791: `2811`,
    4792: `2812`,
    4793: `2812`,
    4794: `2813`,
    4795: `2814`,
    4796: `2816`,
    4797: `2817`,
    4798: `2817`,
    4799: `2818`,
    48: `2`,
    480: `175`,
    4800: `2820`,
    4801: `2820`,
    4802: `2821`,
    4803: `2821`,
    4804: `2822`,
    4805: `2823`,
    4806: `2824`,
    4807: `2824`,
    4808: `2824`,
    4809: `2825`,
    481: `176`,
    4810: `2825`,
    4811: `2825`,
    4812: `2827`,
    4813: `2827`,
    4814: `2828`,
    4815: `2829`,
    4816: `2829`,
    4817: `2830`,
    4818: `2832`,
    4819: `2833`,
    482: `176`,
    4820: `2833`,
    4821: `2833`,
    4822: `2835`,
    4823: `2835`,
    4824: `2836`,
    4825: `2837`,
    4826: `2837`,
    4827: `2838`,
    4828: `2840`,
    4829: `2841`,
    483: `176`,
    4830: `2842`,
    4831: `2843`,
    4832: `2844`,
    4833: `2844`,
    4834: `2845`,
    4835: `2846`,
    4836: `2847`,
    4837: `2848`,
    4838: `2850`,
    4839: `2851`,
    484: `177`,
    4840: `2851`,
    4841: `2852`,
    485: `177`,
    486: `177`,
    487: `178`,
    488: `178`,
    489: `180`,
    49: `2`,
    490: `180`,
    491: `181`,
    492: `182`,
    493: `183`,
    494: `186`,
    495: `186`,
    496: `186`,
    497: `186`,
    498: `186`,
    499: `186`,
    5: `2`,
    50: `2`,
    500: `187`,
    501: `187`,
    502: `188`,
    503: `189`,
    504: `191`,
    505: `192`,
    506: `197`,
    507: `198`,
    508: `201`,
    509: `201`,
    51: `2`,
    510: `201`,
    511: `204`,
    512: `204`,
    513: `204`,
    514: `205`,
    515: `206`,
    516: `206`,
    517: `209`,
    518: `210`,
    519: `211`,
    52: `2`,
    520: `211`,
    521: `211`,
    522: `212`,
    523: `212`,
    524: `213`,
    525: `214`,
    526: `215`,
    527: `216`,
    528: `217`,
    529: `218`,
    53: `2`,
    530: `219`,
    531: `219`,
    532: `220`,
    533: `220`,
    534: `220`,
    535: `223`,
    536: `223`,
    537: `223`,
    538: `224`,
    539: `225`,
    54: `2`,
    540: `225`,
    541: `228`,
    542: `229`,
    543: `230`,
    544: `230`,
    545: `230`,
    546: `231`,
    547: `231`,
    548: `232`,
    549: `233`,
    55: `2`,
    550: `234`,
    551: `235`,
    552: `236`,
    553: `237`,
    554: `238`,
    555: `238`,
    556: `239`,
    557: `239`,
    558: `239`,
    559: `242`,
    56: `2`,
    560: `242`,
    561: `242`,
    562: `243`,
    563: `244`,
    564: `244`,
    565: `244`,
    566: `245`,
    567: `245`,
    568: `246`,
    569: `246`,
    57: `2`,
    570: `249`,
    571: `250`,
    572: `251`,
    573: `251`,
    574: `251`,
    575: `252`,
    576: `252`,
    577: `253`,
    578: `254`,
    579: `254`,
    58: `2`,
    580: `255`,
    581: `256`,
    582: `257`,
    583: `257`,
    584: `258`,
    585: `259`,
    586: `260`,
    587: `261`,
    588: `261`,
    589: `262`,
    59: `2`,
    590: `262`,
    591: `262`,
    592: `265`,
    593: `265`,
    594: `265`,
    595: `266`,
    596: `267`,
    597: `267`,
    598: `267`,
    599: `268`,
    6: `2`,
    60: `2`,
    600: `268`,
    601: `269`,
    602: `269`,
    603: `272`,
    604: `273`,
    605: `274`,
    606: `274`,
    607: `274`,
    608: `275`,
    609: `275`,
    61: `2`,
    610: `276`,
    611: `277`,
    612: `277`,
    613: `278`,
    614: `279`,
    615: `280`,
    616: `280`,
    617: `281`,
    618: `282`,
    619: `283`,
    62: `2`,
    620: `284`,
    621: `284`,
    622: `285`,
    623: `285`,
    624: `285`,
    625: `288`,
    626: `288`,
    627: `289`,
    628: `290`,
    629: `291`,
    63: `2`,
    630: `291`,
    631: `293`,
    632: `294`,
    633: `294`,
    634: `295`,
    635: `296`,
    636: `297`,
    637: `297`,
    638: `298`,
    639: `299`,
    64: `2`,
    640: `300`,
    641: `300`,
    642: `300`,
    643: `301`,
    644: `302`,
    645: `302`,
    646: `303`,
    647: `304`,
    648: `305`,
    649: `306`,
    65: `2`,
    650: `307`,
    651: `312`,
    652: `312`,
    653: `313`,
    654: `313`,
    655: `314`,
    656: `315`,
    657: `316`,
    658: `316`,
    659: `317`,
    66: `2`,
    660: `318`,
    661: `319`,
    662: `324`,
    663: `324`,
    664: `325`,
    665: `325`,
    666: `326`,
    667: `327`,
    668: `328`,
    669: `328`,
    67: `2`,
    670: `329`,
    671: `330`,
    672: `330`,
    673: `331`,
    674: `332`,
    675: `333`,
    676: `333`,
    677: `334`,
    678: `335`,
    679: `336`,
    68: `2`,
    680: `337`,
    681: `338`,
    682: `339`,
    683: `340`,
    684: `341`,
    685: `342`,
    686: `342`,
    687: `343`,
    688: `344`,
    689: `344`,
    69: `2`,
    690: `345`,
    691: `346`,
    692: `346`,
    693: `347`,
    694: `348`,
    695: `349`,
    696: `350`,
    697: `351`,
    698: `351`,
    699: `352`,
    7: `2`,
    70: `2`,
    700: `353`,
    701: `353`,
    702: `354`,
    703: `355`,
    704: `355`,
    705: `356`,
    706: `356`,
    707: `356`,
    708: `357`,
    709: `358`,
    71: `2`,
    710: `358`,
    711: `359`,
    712: `359`,
    713: `359`,
    714: `360`,
    715: `360`,
    716: `361`,
    717: `362`,
    718: `367`,
    719: `367`,
    72: `2`,
    720: `368`,
    721: `369`,
    722: `369`,
    723: `370`,
    724: `371`,
    725: `373`,
    726: `374`,
    727: `375`,
    728: `375`,
    729: `376`,
    73: `2`,
    730: `377`,
    731: `377`,
    732: `377`,
    733: `378`,
    734: `378`,
    735: `378`,
    736: `378`,
    737: `378`,
    738: `378`,
    739: `378`,
    74: `2`,
    740: `378`,
    741: `378`,
    742: `378`,
    743: `379`,
    744: `379`,
    745: `380`,
    746: `381`,
    747: `382`,
    748: `382`,
    749: `383`,
    75: `2`,
    750: `383`,
    751: `384`,
    752: `384`,
    753: `384`,
    754: `384`,
    755: `384`,
    756: `384`,
    757: `385`,
    758: `385`,
    759: `386`,
    76: `2`,
    760: `387`,
    761: `388`,
    762: `388`,
    763: `389`,
    764: `390`,
    765: `392`,
    766: `392`,
    767: `393`,
    768: `393`,
    769: `393`,
    77: `2`,
    770: `394`,
    771: `394`,
    772: `395`,
    773: `395`,
    774: `395`,
    775: `396`,
    776: `397`,
    777: `397`,
    778: `398`,
    779: `399`,
    78: `2`,
    780: `400`,
    781: `401`,
    782: `402`,
    783: `402`,
    784: `403`,
    785: `403`,
    786: `403`,
    787: `404`,
    788: `405`,
    789: `405`,
    79: `2`,
    790: `406`,
    791: `406`,
    792: `407`,
    793: `407`,
    794: `408`,
    795: `408`,
    796: `409`,
    797: `409`,
    798: `413`,
    799: `413`,
    8: `2`,
    80: `2`,
    800: `414`,
    801: `415`,
    802: `415`,
    803: `416`,
    804: `417`,
    805: `417`,
    806: `418`,
    807: `419`,
    808: `420`,
    809: `420`,
    81: `2`,
    810: `421`,
    811: `421`,
    812: `423`,
    813: `423`,
    814: `424`,
    815: `424`,
    816: `425`,
    817: `426`,
    818: `427`,
    819: `427`,
    82: `2`,
    820: `427`,
    821: `428`,
    822: `429`,
    823: `430`,
    824: `430`,
    825: `431`,
    826: `432`,
    827: `432`,
    828: `433`,
    829: `434`,
    83: `2`,
    830: `435`,
    831: `435`,
    832: `436`,
    833: `437`,
    834: `438`,
    835: `439`,
    836: `439`,
    837: `440`,
    838: `441`,
    839: `442`,
    84: `2`,
    840: `444`,
    841: `444`,
    842: `444`,
    843: `446`,
    844: `446`,
    845: `447`,
    846: `447`,
    847: `447`,
    848: `448`,
    849: `448`,
    85: `2`,
    850: `448`,
    851: `451`,
    852: `451`,
    853: `452`,
    854: `452`,
    855: `452`,
    856: `453`,
    857: `453`,
    858: `454`,
    859: `455`,
    86: `2`,
    860: `460`,
    861: `461`,
    862: `461`,
    863: `462`,
    864: `462`,
    865: `462`,
    866: `462`,
    867: `462`,
    868: `462`,
    869: `462`,
    87: `2`,
    870: `462`,
    871: `462`,
    872: `462`,
    873: `463`,
    874: `463`,
    875: `464`,
    876: `465`,
    877: `466`,
    878: `466`,
    879: `467`,
    88: `2`,
    880: `467`,
    881: `468`,
    882: `468`,
    883: `469`,
    884: `469`,
    885: `469`,
    886: `470`,
    887: `470`,
    888: `471`,
    889: `471`,
    89: `2`,
    890: `471`,
    891: `472`,
    892: `473`,
    893: `473`,
    894: `474`,
    895: `474`,
    896: `474`,
    897: `475`,
    898: `476`,
    899: `476`,
    9: `2`,
    90: `2`,
    900: `477`,
    901: `477`,
    902: `477`,
    903: `478`,
    904: `479`,
    905: `479`,
    906: `480`,
    907: `480`,
    908: `481`,
    909: `481`,
    91: `2`,
    910: `482`,
    911: `482`,
    912: `483`,
    913: `483`,
    914: `484`,
    915: `484`,
    916: `484`,
    917: `487`,
    918: `487`,
    919: `488`,
    92: `2`,
    920: `489`,
    921: `490`,
    922: `490`,
    923: `491`,
    924: `491`,
    925: `492`,
    926: `492`,
    927: `492`,
    928: `493`,
    929: `494`,
    93: `2`,
    930: `494`,
    931: `495`,
    932: `495`,
    933: `496`,
    934: `497`,
    935: `502`,
    936: `502`,
    937: `503`,
    938: `503`,
    939: `503`,
    94: `2`,
    940: `504`,
    941: `505`,
    942: `510`,
    943: `511`,
    944: `511`,
    945: `512`,
    946: `512`,
    947: `512`,
    948: `512`,
    949: `512`,
    95: `2`,
    950: `512`,
    951: `512`,
    952: `512`,
    953: `512`,
    954: `512`,
    955: `513`,
    956: `513`,
    957: `514`,
    958: `515`,
    959: `516`,
    96: `2`,
    960: `516`,
    961: `517`,
    962: `517`,
    963: `518`,
    964: `518`,
    965: `519`,
    966: `520`,
    967: `520`,
    968: `521`,
    969: `522`,
    97: `2`,
    970: `522`,
    971: `523`,
    972: `523`,
    973: `523`,
    974: `524`,
    975: `525`,
    976: `525`,
    977: `526`,
    978: `526`,
    979: `526`,
    98: `2`,
    980: `527`,
    981: `528`,
    982: `528`,
    983: `529`,
    984: `529`,
    985: `530`,
    986: `530`,
    987: `531`,
    988: `531`,
    989: `532`,
    99: `2`,
    990: `532`,
    991: `533`,
    992: `533`,
    993: `533`,
    994: `536`,
    995: `536`,
    996: `537`,
    997: `537`,
    998: `537`,
    999: `538`
    },
  appClear: `CQ==`,
  appClearMap: {
    },
  companionInfo: {
    _api_Staker_harvest2: 1,
    _api_Staker_stake2: 1,
    _api_Staker_withdraw2: 1
    },
  extraPages: 2,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 13,
  warnings: [`Step 2 calls a remote object at /app/staker.rsh:190:13:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/staker.rsh:209:13:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './staker.rsh:619:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './staker.rsh:171:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Admin_deletePool": Admin_deletePool,
  "Admin_grant": Admin_grant,
  "Admin_updateFee": Admin_updateFee,
  "Deployer": Deployer,
  "Funder_deployPool": Funder_deployPool,
  "Staker_emergencyWithdraw": Staker_emergencyWithdraw,
  "Staker_harvest": Staker_harvest,
  "Staker_stake": Staker_stake,
  "Staker_withdraw": Staker_withdraw,
  "nop": nop,
  "touch": touch
  };
export const _APIs = {
  Admin: {
    deletePool: Admin_deletePool,
    grant: Admin_grant,
    updateFee: Admin_updateFee
    },
  Funder: {
    deployPool: Funder_deployPool
    },
  Staker: {
    emergencyWithdraw: Staker_emergencyWithdraw,
    harvest: Staker_harvest,
    stake: Staker_stake,
    withdraw: Staker_withdraw
    },
  nop: nop,
  touch: touch
  };

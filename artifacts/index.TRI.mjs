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
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  return {
    Register: [ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc1], ['locked', ctc5]]);
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Data({
    Harvest: ctc2,
    Kill: ctc3,
    NewInfo: ctc6,
    NewUmvirs: ctc7,
    NoOp: ctc3,
    Rewards: ctc1
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Object({
    locked: ctc5,
    lpFee: ctc4,
    protoAddr: ctc1,
    protoFee: ctc4,
    totFee: ctc4
    });
  const ctc11 = stdlib.T_Object({
    closed: ctc5,
    cmds: ctc9,
    info: ctc10,
    umvirs: ctc7
    });
  const ctc12 = stdlib.T_UInt;
  const ctc13 = stdlib.T_Struct([['umvirs', ctc7], ['cmds', ctc9], ['protoInfo', ctc6]]);
  
  const _Info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1750, v1767, v1771] = svs;
      return (await ((async () => {
        
        const v1816 = v1767.umvirs;
        const v1817 = v1767.cmds;
        const v1818 = v1767.info;
        const v1819 = v1818.protoFee;
        const v1820 = v1818.lpFee;
        const v1821 = v1818.totFee;
        const v1822 = v1818.protoAddr;
        const v1823 = v1818.locked;
        const v1824 = {
          locked: v1823,
          lpFee: v1820,
          protoAddr: v1822,
          protoFee: v1819,
          totFee: v1821
          };
        const v1825 = {
          cmds: v1817,
          protoInfo: v1824,
          umvirs: v1816
          };
        
        return v1825;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        decode: _Info,
        dom: [],
        rng: ctc13
        }
      },
    views: {
      3: [ctc8, ctc11, ctc12]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt256;
  const ctc1 = stdlib.T_Object({
    lpFee: ctc0,
    protoFee: ctc0,
    totFee: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc4 = stdlib.T_Object({
    info: ctc1,
    umvirs: ctc3
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc6, ctc2, ctc6, ctc6, ctc2]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc2], ['locked', ctc8]]);
  const ctc10 = stdlib.T_Data({
    Harvest: ctc7,
    Kill: ctc5,
    NewInfo: ctc9,
    NewUmvirs: ctc3,
    NoOp: ctc5,
    Rewards: ctc2
    });
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_UInt;
  const ctc13 = stdlib.T_Tuple([ctc12, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc6, ctc6, ctc6]);
  const ctc15 = stdlib.T_Data({
    Umvir_propose0_270: ctc11,
    Umvir_support0_270: ctc13,
    register0_270: ctc14
    });
  const ctc16 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc17 = stdlib.T_Tuple([ctc16, ctc12]);
  const ctc18 = stdlib.T_Tuple([ctc12, ctc17]);
  
  
  const v1701 = stdlib.protect(ctc4, interact.params, 'for Deployer\'s interact field params');
  const v1702 = v1701.info;
  const v1703 = v1701.umvirs;
  const v1704 = v1702.lpFee;
  const v1705 = v1702.protoFee;
  const v1706 = v1702.totFee;
  
  const v1717 = stdlib.lt256(v1705, stdlib.checkedBigNumberify('./TRI.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v1718 = stdlib.lt256(v1704, stdlib.checkedBigNumberify('./TRI.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v1719 = v1717 ? v1718 : false;
  let v1720;
  if (v1719) {
    const v1721 = stdlib.safeAdd256(v1704, v1705);
    const v1722 = stdlib.eq256(v1706, v1721);
    v1720 = v1722;
    }
  else {
    v1720 = false;
    }
  const v1723 = stdlib.lt256(v1706, stdlib.checkedBigNumberify('./TRI.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v1724 = v1720 ? v1723 : false;
  const v1725 = stdlib.gt256(v1706, stdlib.checkedBigNumberify('./TRI.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1726 = v1724 ? v1725 : false;
  stdlib.assert(v1726, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./TRI.rsh:399:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'invalid protocol info',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1703, v1702],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./TRI.rsh:398:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1],
    pay: [stdlib.checkedBigNumberify('./TRI.rsh:398:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1729, v1730], secs: v1732, time: v1731, didSend: v105, from: v1728 } = txn1;
      
      const v1733 = v1730.protoFee;
      const v1734 = v1730.lpFee;
      const v1735 = v1730.totFee;
      ;
      const v1747 = await ctc.getContractInfo();
      
      const v1750 = ['NoOp', null];
      const v1756 = [v1750, v1750, v1750];
      const v1760 = await ctc.getContractAddress();
      const v1765 = {
        locked: false,
        lpFee: v1734,
        protoAddr: v1760,
        protoFee: v1733,
        totFee: v1735
        };
      const v1766 = {
        closed: false,
        cmds: v1756,
        info: v1765,
        umvirs: v1729
        };
      const v1767 = v1766;
      const v1768 = v1731;
      const v1771 = stdlib.checkedBigNumberify('./TRI.rsh:394:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1814 = v1767.closed;
        const v1815 = v1814 ? false : true;
        
        return v1815;})()) {
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
    tys: [ctc3, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1729, v1730], secs: v1732, time: v1731, didSend: v105, from: v1728 } = txn1;
  const v1733 = v1730.protoFee;
  const v1734 = v1730.lpFee;
  const v1735 = v1730.totFee;
  const v1736 = stdlib.lt256(v1733, stdlib.checkedBigNumberify('./TRI.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v1737 = stdlib.lt256(v1734, stdlib.checkedBigNumberify('./TRI.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v1738 = v1736 ? v1737 : false;
  let v1739;
  if (v1738) {
    const v1740 = stdlib.safeAdd256(v1734, v1733);
    const v1741 = stdlib.eq256(v1735, v1740);
    v1739 = v1741;
    }
  else {
    v1739 = false;
    }
  const v1742 = stdlib.lt256(v1735, stdlib.checkedBigNumberify('./TRI.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v1743 = v1739 ? v1742 : false;
  const v1744 = stdlib.gt256(v1735, stdlib.checkedBigNumberify('./TRI.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1745 = v1743 ? v1744 : false;
  stdlib.assert(v1745, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./TRI.rsh:399:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'invalid protocol info',
    who: 'Deployer'
    });
  ;
  const v1747 = await ctc.getContractInfo();
  stdlib.protect(ctc5, await interact.ready(v1747), {
    at: './TRI.rsh:401:21:application',
    fs: ['at ./TRI.rsh:401:21:application call to [unknown function] (defined at: ./TRI.rsh:401:21:function exp)', 'at ./TRI.rsh:401:21:application call to "liftedInteract" (defined at: ./TRI.rsh:401:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v1750 = ['NoOp', null];
  const v1756 = [v1750, v1750, v1750];
  const v1760 = await ctc.getContractAddress();
  const v1765 = {
    locked: false,
    lpFee: v1734,
    protoAddr: v1760,
    protoFee: v1733,
    totFee: v1735
    };
  const v1766 = {
    closed: false,
    cmds: v1756,
    info: v1765,
    umvirs: v1729
    };
  let v1767 = v1766;
  let v1768 = v1731;
  let v1771 = stdlib.checkedBigNumberify('./TRI.rsh:394:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v1814 = v1767.closed;
    const v1815 = v1814 ? false : true;
    
    return v1815;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2100], secs: v2102, time: v2101, didSend: v1217, from: v2099 } = txn3;
    switch (v2100[0]) {
      case 'Umvir_propose0_270': {
        const v2103 = v2100[1];
        undefined /* setApiDetails */;
        const v2108 = v2103[stdlib.checkedBigNumberify('./TRI.rsh:474:12:spread', stdlib.UInt_max, '0')];
        let v2109;
        switch (v2108[0]) {
          case 'Harvest': {
            const v2110 = v2108[1];
            v2109 = true;
            
            break;
            }
          case 'Kill': {
            const v2111 = v2108[1];
            v2109 = true;
            
            break;
            }
          case 'NewInfo': {
            const v2112 = v2108[1];
            const v2113 = v2112.protoFee;
            const v2114 = v2112.lpFee;
            const v2115 = v2112.totFee;
            const v2116 = stdlib.lt256(v2113, stdlib.checkedBigNumberify('./TRI.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2117 = stdlib.lt256(v2114, stdlib.checkedBigNumberify('./TRI.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2118 = v2116 ? v2117 : false;
            let v2119;
            if (v2118) {
              const v2120 = stdlib.safeAdd256(v2114, v2113);
              const v2121 = stdlib.eq256(v2115, v2120);
              v2119 = v2121;
              }
            else {
              v2119 = false;
              }
            const v2122 = stdlib.lt256(v2115, stdlib.checkedBigNumberify('./TRI.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2123 = v2119 ? v2122 : false;
            const v2124 = stdlib.gt256(v2115, stdlib.checkedBigNumberify('./TRI.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v2125 = v2123 ? v2124 : false;
            v2109 = v2125;
            
            break;
            }
          case 'NewUmvirs': {
            const v2126 = v2108[1];
            v2109 = true;
            
            break;
            }
          case 'NoOp': {
            const v2127 = v2108[1];
            v2109 = true;
            
            break;
            }
          case 'Rewards': {
            const v2128 = v2108[1];
            v2109 = true;
            
            break;
            }
          }
        stdlib.assert(v2109, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./TRI.rsh:475:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:474:34:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
          msg: 'invalid command',
          who: 'Deployer'
          });
        const v2130 = v1767.umvirs;
        const v2131 = ['None', null];
        const v2132 = await stdlib.Array_asyncReduce([v2130], v2131, async([v2134], v2133, v2135) => {
          const v2136 = {
            None: 0,
            Some: 1
            }[v2133[0]];
          const v2137 = stdlib.eq(v2136, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v2138 = stdlib.addressEq(v2099, v2134);
          const v2139 = v2137 ? v2138 : false;
          const v2140 = ['Some', v2135];
          const v2141 = v2139 ? v2140 : v2133;
          
          return v2141;})
        const v2142 = {
          None: 0,
          Some: 1
          }[v2132[0]];
        const v2143 = stdlib.eq(v2142, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2143, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./TRI.rsh:466:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:476:29:application call to "chkUmvir" (defined at: ./TRI.rsh:464:32:function exp)', 'at ./TRI.rsh:474:34:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
          msg: 'not umvir',
          who: 'Deployer'
          });
        ;
        let v2159;
        switch (v2108[0]) {
          case 'Harvest': {
            const v2160 = v2108[1];
            v2159 = true;
            
            break;
            }
          case 'Kill': {
            const v2161 = v2108[1];
            v2159 = true;
            
            break;
            }
          case 'NewInfo': {
            const v2162 = v2108[1];
            const v2163 = v2162.protoFee;
            const v2164 = v2162.lpFee;
            const v2165 = v2162.totFee;
            const v2166 = stdlib.lt256(v2163, stdlib.checkedBigNumberify('./TRI.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2167 = stdlib.lt256(v2164, stdlib.checkedBigNumberify('./TRI.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2168 = v2166 ? v2167 : false;
            let v2169;
            if (v2168) {
              const v2170 = stdlib.safeAdd256(v2164, v2163);
              const v2171 = stdlib.eq256(v2165, v2170);
              v2169 = v2171;
              }
            else {
              v2169 = false;
              }
            const v2172 = stdlib.lt256(v2165, stdlib.checkedBigNumberify('./TRI.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2173 = v2169 ? v2172 : false;
            const v2174 = stdlib.gt256(v2165, stdlib.checkedBigNumberify('./TRI.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v2175 = v2173 ? v2174 : false;
            v2159 = v2175;
            
            break;
            }
          case 'NewUmvirs': {
            const v2176 = v2108[1];
            v2159 = true;
            
            break;
            }
          case 'NoOp': {
            const v2177 = v2108[1];
            v2159 = true;
            
            break;
            }
          case 'Rewards': {
            const v2178 = v2108[1];
            v2159 = true;
            
            break;
            }
          }
        stdlib.assert(v2159, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./TRI.rsh:475:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:480:15:application call to [unknown function] (defined at: ./TRI.rsh:480:15:function exp)'],
          msg: 'invalid command',
          who: 'Deployer'
          });
        const v2182 = await stdlib.Array_asyncReduce([v2130], v2131, async([v2184], v2183, v2185) => {
          const v2186 = {
            None: 0,
            Some: 1
            }[v2183[0]];
          const v2187 = stdlib.eq(v2186, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v2188 = stdlib.addressEq(v2099, v2184);
          const v2189 = v2187 ? v2188 : false;
          const v2190 = ['Some', v2185];
          const v2191 = v2189 ? v2190 : v2183;
          
          return v2191;})
        const v2192 = {
          None: 0,
          Some: 1
          }[v2182[0]];
        const v2193 = stdlib.eq(v2192, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2193, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./TRI.rsh:466:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:476:29:application call to "chkUmvir" (defined at: ./TRI.rsh:464:32:function exp)', 'at ./TRI.rsh:480:15:application call to [unknown function] (defined at: ./TRI.rsh:480:15:function exp)'],
          msg: 'not umvir',
          who: 'Deployer'
          });
        const v2195 = stdlib.fromSome(v2182, stdlib.checkedBigNumberify('./TRI.rsh:467:33:decimal', stdlib.UInt_max, '0'));
        const v2196 = v1767.cmds;
        const v2198 = stdlib.Array_set(v2196, v2195, v2108);
        const v2200 = true;
        await txn3.getOutput('Umvir_propose', 'v2200', ctc8, v2200);
        const v2226 = v1767.closed;
        const v2228 = v1767.info;
        const v2230 = {
          closed: v2226,
          cmds: v2198,
          info: v2228,
          umvirs: v2130
          };
        const cv1767 = v2230;
        const cv1768 = v2101;
        const cv1771 = v1771;
        
        v1767 = cv1767;
        v1768 = cv1768;
        v1771 = cv1771;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Umvir_support0_270': {
        const v2482 = v2100[1];
        undefined /* setApiDetails */;
        ;
        const v2613 = v2482[stdlib.checkedBigNumberify('./TRI.rsh:538:12:spread', stdlib.UInt_max, '0')];
        const v2614 = v2482[stdlib.checkedBigNumberify('./TRI.rsh:538:12:spread', stdlib.UInt_max, '1')];
        let v2615;
        switch (v2614[0]) {
          case 'Harvest': {
            const v2616 = v2614[1];
            v2615 = true;
            
            break;
            }
          case 'Kill': {
            const v2617 = v2614[1];
            v2615 = true;
            
            break;
            }
          case 'NewInfo': {
            const v2618 = v2614[1];
            const v2619 = v2618.protoFee;
            const v2620 = v2618.lpFee;
            const v2621 = v2618.totFee;
            const v2622 = stdlib.lt256(v2619, stdlib.checkedBigNumberify('./TRI.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2623 = stdlib.lt256(v2620, stdlib.checkedBigNumberify('./TRI.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2624 = v2622 ? v2623 : false;
            let v2625;
            if (v2624) {
              const v2626 = stdlib.safeAdd256(v2620, v2619);
              const v2627 = stdlib.eq256(v2621, v2626);
              v2625 = v2627;
              }
            else {
              v2625 = false;
              }
            const v2628 = stdlib.lt256(v2621, stdlib.checkedBigNumberify('./TRI.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2629 = v2625 ? v2628 : false;
            const v2630 = stdlib.gt256(v2621, stdlib.checkedBigNumberify('./TRI.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v2631 = v2629 ? v2630 : false;
            v2615 = v2631;
            
            break;
            }
          case 'NewUmvirs': {
            const v2632 = v2614[1];
            v2615 = true;
            
            break;
            }
          case 'NoOp': {
            const v2633 = v2614[1];
            v2615 = true;
            
            break;
            }
          case 'Rewards': {
            const v2634 = v2614[1];
            v2615 = true;
            
            break;
            }
          }
        stdlib.assert(v2615, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./TRI.rsh:539:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
          msg: 'invalid command',
          who: 'Deployer'
          });
        const v2636 = v1767.umvirs;
        const v2637 = stdlib.lt(v2613, stdlib.checkedBigNumberify('./TRI.rsh:540:30:dot', stdlib.UInt_max, '3'));
        stdlib.assert(v2637, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./TRI.rsh:540:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
          msg: 'illegal idx',
          who: 'Deployer'
          });
        const v2640 = ['None', null];
        const v2641 = await stdlib.Array_asyncReduce([v2636], v2640, async([v2643], v2642, v2644) => {
          const v2645 = {
            None: 0,
            Some: 1
            }[v2642[0]];
          const v2646 = stdlib.eq(v2645, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v2647 = stdlib.addressEq(v2099, v2643);
          const v2648 = v2646 ? v2647 : false;
          const v2649 = ['Some', v2644];
          const v2650 = v2648 ? v2649 : v2642;
          
          return v2650;})
        const v2651 = {
          None: 0,
          Some: 1
          }[v2641[0]];
        const v2652 = stdlib.eq(v2651, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2652, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./TRI.rsh:466:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:541:29:application call to "chkUmvir" (defined at: ./TRI.rsh:464:32:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
          msg: 'not umvir',
          who: 'Deployer'
          });
        const v2654 = stdlib.fromSome(v2641, stdlib.checkedBigNumberify('./TRI.rsh:467:33:decimal', stdlib.UInt_max, '0'));
        const v2655 = stdlib.eq(v2613, v2654);
        const v2656 = v2655 ? false : true;
        stdlib.assert(v2656, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./TRI.rsh:542:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
          msg: 'cannot support self',
          who: 'Deployer'
          });
        const v2658 = v1767.cmds;
        const v2660 = v2658[v2613];
        const v2661 = stdlib.digest([ctc10], [v2614]);
        const v2662 = stdlib.digest([ctc10], [v2660]);
        const v2663 = stdlib.digestEq(v2661, v2662);
        stdlib.assert(v2663, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./TRI.rsh:544:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
          msg: 'command switched',
          who: 'Deployer'
          });
        const v2668 = stdlib.Array_set(v2658, v2613, v1750);
        const v2671 = true;
        await txn3.getOutput('Umvir_support', 'v2671', ctc8, v2671);
        switch (v2614[0]) {
          case 'Harvest': {
            const v2698 = v2614[1];
            const v2699 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '0')];
            const v2700 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '1')];
            const v2701 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '2')];
            const v2702 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '3')];
            const v2703 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '4')];
            const v2704 = [v2701, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2700];
            const v2705 = [v2701, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2703];
            const v2706 = [v2702, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2700];
            const v2707 = [v2702, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2703];
            const v2708 = v1767.info;
            const v2709 = v2708.protoFee;
            const v2710 = v2708.lpFee;
            const v2711 = v2708.totFee;
            const v2712 = v2708.protoAddr;
            const v2713 = v2708.locked;
            const v2716 = [];
            const v2727 = {
              locked: v2713,
              lpFee: v2710,
              protoAddr: v2712,
              protoFee: v2709,
              totFee: v2711
              };
            const v2728 = undefined /* Remote */;
            const v2729 = await txn3.getOutput('internal', 'v2728', ctc18, v2728);
            const v2731 = v2729[stdlib.checkedBigNumberify('./TRI.rsh:522:17:application', stdlib.UInt_max, '0')];
            const v2740 = stdlib.add(v1771, v2731);
            const v2741 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2731);
            stdlib.assert(v2741, {
              at: './TRI.rsh:522:17:application',
              fs: ['at ./TRI.rsh:507:20:application call to [unknown function] (defined at: ./TRI.rsh:511:58:function exp)', 'at ./TRI.rsh:507:20:application call to [unknown function] (defined at: ./TRI.rsh:507:20:function exp)', 'at ./TRI.rsh:549:57:application call to "evalCommand" (defined at: ./TRI.rsh:506:35:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            const v2745 = v1767.closed;
            const v2746 = {
              closed: v2745,
              cmds: v2668,
              info: v2708,
              umvirs: v2636
              };
            const cv1767 = v2746;
            const cv1768 = v2101;
            const cv1771 = v2740;
            
            v1767 = cv1767;
            v1768 = cv1768;
            v1771 = cv1771;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Kill': {
            const v2749 = v2614[1];
            const v2752 = v1767.info;
            const v2754 = {
              closed: true,
              cmds: v2658,
              info: v2752,
              umvirs: v2636
              };
            const v2757 = v2754.info;
            const v2758 = v2754.umvirs;
            const v2759 = v2754.closed;
            const v2760 = {
              closed: v2759,
              cmds: v2668,
              info: v2757,
              umvirs: v2758
              };
            const cv1767 = v2760;
            const cv1768 = v2101;
            const cv1771 = v1771;
            
            v1767 = cv1767;
            v1768 = cv1768;
            v1771 = cv1771;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NewInfo': {
            const v2763 = v2614[1];
            const v2764 = v1767.closed;
            const v2768 = v2763.locked;
            const v2769 = v2763.lpFee;
            const v2770 = v2763.protoAddr;
            const v2771 = v2763.protoFee;
            const v2772 = v2763.totFee;
            const v2773 = {
              locked: v2768,
              lpFee: v2769,
              protoAddr: v2770,
              protoFee: v2771,
              totFee: v2772
              };
            const v2774 = {
              closed: v2764,
              cmds: v2658,
              info: v2773,
              umvirs: v2636
              };
            const v2778 = v2774.info;
            const v2779 = v2774.umvirs;
            const v2780 = v2774.closed;
            const v2781 = {
              closed: v2780,
              cmds: v2668,
              info: v2778,
              umvirs: v2779
              };
            const cv1767 = v2781;
            const cv1768 = v2101;
            const cv1771 = v1771;
            
            v1767 = cv1767;
            v1768 = cv1768;
            v1771 = cv1771;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NewUmvirs': {
            const v2784 = v2614[1];
            const v2785 = v1767.closed;
            const v2787 = v1767.info;
            const v2789 = {
              closed: v2785,
              cmds: v2658,
              info: v2787,
              umvirs: v2784
              };
            const v2792 = v2789.info;
            const v2793 = v2789.umvirs;
            const v2794 = v2789.closed;
            const v2795 = {
              closed: v2794,
              cmds: v2668,
              info: v2792,
              umvirs: v2793
              };
            const cv1767 = v2795;
            const cv1768 = v2101;
            const cv1771 = v1771;
            
            v1767 = cv1767;
            v1768 = cv1768;
            v1771 = cv1771;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NoOp': {
            const v2798 = v2614[1];
            const v2800 = v1767.info;
            const v2802 = v1767.closed;
            const v2803 = {
              closed: v2802,
              cmds: v2668,
              info: v2800,
              umvirs: v2636
              };
            const cv1767 = v2803;
            const cv1768 = v2101;
            const cv1771 = v1771;
            
            v1767 = cv1767;
            v1768 = cv1768;
            v1771 = cv1771;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Rewards': {
            const v2806 = v2614[1];
            const v2808 = (stdlib.le(await ctc.getBalance(), v1771) ? stdlib.checkedBigNumberify('./TRI.rsh:526:43:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1771));
            const v2809 = stdlib.safeAdd(v2808, v1771);
            const v2813 = stdlib.sub(v2809, v2808);
            ;
            const v2815 = v1767.info;
            const v2817 = v1767.closed;
            const v2818 = {
              closed: v2817,
              cmds: v2668,
              info: v2815,
              umvirs: v2636
              };
            const cv1767 = v2818;
            const cv1768 = v2101;
            const cv1771 = v2813;
            
            v1767 = cv1767;
            v1768 = cv1768;
            v1771 = cv1771;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'register0_270': {
        const v2861 = v2100[1];
        undefined /* setApiDetails */;
        const v2909 = v2861[stdlib.checkedBigNumberify('./TRI.rsh:449:12:spread', stdlib.UInt_max, '0')];
        const v2913 = stdlib.ctcAddrEq(v2909, v2099);
        stdlib.assert(v2913, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./TRI.rsh:436:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:450:15:application call to "chkCtc" (defined at: ./TRI.rsh:435:39:function exp)', 'at ./TRI.rsh:449:50:application call to [unknown function] (defined at: ./TRI.rsh:449:50:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:449:50:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
          msg: 'not contract',
          who: 'Deployer'
          });
        ;
        const v3202 = v2861[stdlib.checkedBigNumberify('./TRI.rsh:449:12:spread', stdlib.UInt_max, '1')];
        const v3203 = v2861[stdlib.checkedBigNumberify('./TRI.rsh:449:12:spread', stdlib.UInt_max, '2')];
        const v3210 = v1767.info;
        const v3211 = v3210.protoFee;
        const v3212 = v3210.lpFee;
        const v3213 = v3210.totFee;
        const v3214 = v3210.protoAddr;
        const v3215 = v3210.locked;
        const v3216 = {
          locked: v3215,
          lpFee: v3212,
          protoAddr: v3214,
          protoFee: v3211,
          totFee: v3213
          };
        await txn3.getOutput('register', 'v3216', ctc9, v3216);
        const v3238 = [v2909, v3202, v3203];
        null;
        const cv1767 = v1767;
        const cv1768 = v2101;
        const cv1771 = v1771;
        
        v1767 = cv1767;
        v1768 = cv1768;
        v1771 = cv1771;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _Umvir_propose3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Umvir_propose3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Umvir_propose3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc1], ['locked', ctc5]]);
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Data({
    Harvest: ctc2,
    Kill: ctc3,
    NewInfo: ctc6,
    NewUmvirs: ctc7,
    NoOp: ctc3,
    Rewards: ctc1
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Object({
    locked: ctc5,
    lpFee: ctc4,
    protoAddr: ctc1,
    protoFee: ctc4,
    totFee: ctc4
    });
  const ctc11 = stdlib.T_Object({
    closed: ctc5,
    cmds: ctc9,
    info: ctc10,
    umvirs: ctc7
    });
  const ctc12 = stdlib.T_UInt;
  const ctc13 = stdlib.T_Tuple([ctc8]);
  const ctc14 = stdlib.T_Tuple([ctc12, ctc8]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc16 = stdlib.T_Data({
    Umvir_propose0_270: ctc13,
    Umvir_support0_270: ctc14,
    register0_270: ctc15
    });
  
  
  const [v1750, v1767, v1771] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc8, ctc11, ctc12]);
  const v1851 = ctc.selfAddress();
  const v1853 = stdlib.protect(ctc13, await interact.in(), {
    at: './TRI.rsh:1:23:application',
    fs: ['at ./TRI.rsh:474:34:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to "runUmvir_propose0_270" (defined at: ./TRI.rsh:474:12:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'in',
    who: 'Umvir_propose'
    });
  const v1854 = v1853[stdlib.checkedBigNumberify('./TRI.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v1875;
  switch (v1854[0]) {
    case 'Harvest': {
      const v1876 = v1854[1];
      v1875 = true;
      
      break;
      }
    case 'Kill': {
      const v1877 = v1854[1];
      v1875 = true;
      
      break;
      }
    case 'NewInfo': {
      const v1878 = v1854[1];
      const v1879 = v1878.protoFee;
      const v1880 = v1878.lpFee;
      const v1881 = v1878.totFee;
      const v1882 = stdlib.lt256(v1879, stdlib.checkedBigNumberify('./TRI.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v1883 = stdlib.lt256(v1880, stdlib.checkedBigNumberify('./TRI.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v1884 = v1882 ? v1883 : false;
      let v1885;
      if (v1884) {
        const v1886 = stdlib.safeAdd256(v1880, v1879);
        const v1887 = stdlib.eq256(v1881, v1886);
        v1885 = v1887;
        }
      else {
        v1885 = false;
        }
      const v1888 = stdlib.lt256(v1881, stdlib.checkedBigNumberify('./TRI.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v1889 = v1885 ? v1888 : false;
      const v1890 = stdlib.gt256(v1881, stdlib.checkedBigNumberify('./TRI.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1891 = v1889 ? v1890 : false;
      v1875 = v1891;
      
      break;
      }
    case 'NewUmvirs': {
      const v1892 = v1854[1];
      v1875 = true;
      
      break;
      }
    case 'NoOp': {
      const v1893 = v1854[1];
      v1875 = true;
      
      break;
      }
    case 'Rewards': {
      const v1894 = v1854[1];
      v1875 = true;
      
      break;
      }
    }
  stdlib.assert(v1875, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./TRI.rsh:475:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:474:34:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to "runUmvir_propose0_270" (defined at: ./TRI.rsh:474:12:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'invalid command',
    who: 'Umvir_propose'
    });
  const v1896 = v1767.umvirs;
  const v1897 = ['None', null];
  const v1898 = await stdlib.Array_asyncReduce([v1896], v1897, async([v1900], v1899, v1901) => {
    const v1902 = {
      None: 0,
      Some: 1
      }[v1899[0]];
    const v1903 = stdlib.eq(v1902, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v1904 = stdlib.addressEq(v1851, v1900);
    const v1905 = v1903 ? v1904 : false;
    const v1906 = ['Some', v1901];
    const v1907 = v1905 ? v1906 : v1899;
    
    return v1907;})
  const v1908 = {
    None: 0,
    Some: 1
    }[v1898[0]];
  const v1909 = stdlib.eq(v1908, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1909, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./TRI.rsh:466:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:476:29:application call to "chkUmvir" (defined at: ./TRI.rsh:464:32:function exp)', 'at ./TRI.rsh:474:34:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to "runUmvir_propose0_270" (defined at: ./TRI.rsh:474:12:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'not umvir',
    who: 'Umvir_propose'
    });
  const v1939 = ['Umvir_propose0_270', v1853];
  
  let v2051;
  switch (v1854[0]) {
    case 'Harvest': {
      const v2052 = v1854[1];
      v2051 = true;
      
      break;
      }
    case 'Kill': {
      const v2053 = v1854[1];
      v2051 = true;
      
      break;
      }
    case 'NewInfo': {
      const v2054 = v1854[1];
      const v2055 = v2054.protoFee;
      const v2056 = v2054.lpFee;
      const v2057 = v2054.totFee;
      const v2058 = stdlib.lt256(v2055, stdlib.checkedBigNumberify('./TRI.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v2059 = stdlib.lt256(v2056, stdlib.checkedBigNumberify('./TRI.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v2060 = v2058 ? v2059 : false;
      let v2061;
      if (v2060) {
        const v2062 = stdlib.safeAdd256(v2056, v2055);
        const v2063 = stdlib.eq256(v2057, v2062);
        v2061 = v2063;
        }
      else {
        v2061 = false;
        }
      const v2064 = stdlib.lt256(v2057, stdlib.checkedBigNumberify('./TRI.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v2065 = v2061 ? v2064 : false;
      const v2066 = stdlib.gt256(v2057, stdlib.checkedBigNumberify('./TRI.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2067 = v2065 ? v2066 : false;
      v2051 = v2067;
      
      break;
      }
    case 'NewUmvirs': {
      const v2068 = v1854[1];
      v2051 = true;
      
      break;
      }
    case 'NoOp': {
      const v2069 = v1854[1];
      v2051 = true;
      
      break;
      }
    case 'Rewards': {
      const v2070 = v1854[1];
      v2051 = true;
      
      break;
      }
    }
  stdlib.assert(v2051, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./TRI.rsh:475:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:474:34:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'invalid command',
    who: 'Umvir_propose'
    });
  const v2074 = await stdlib.Array_asyncReduce([v1896], v1897, async([v2076], v2075, v2077) => {
    const v2078 = {
      None: 0,
      Some: 1
      }[v2075[0]];
    const v2079 = stdlib.eq(v2078, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v2080 = stdlib.addressEq(v1851, v2076);
    const v2081 = v2079 ? v2080 : false;
    const v2082 = ['Some', v2077];
    const v2083 = v2081 ? v2082 : v2075;
    
    return v2083;})
  const v2084 = {
    None: 0,
    Some: 1
    }[v2074[0]];
  const v2085 = stdlib.eq(v2084, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2085, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./TRI.rsh:466:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:476:29:application call to "chkUmvir" (defined at: ./TRI.rsh:464:32:function exp)', 'at ./TRI.rsh:474:34:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'not umvir',
    who: 'Umvir_propose'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1750, v1767, v1771, v1939],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./TRI.rsh:479:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2100], secs: v2102, time: v2101, didSend: v1217, from: v2099 } = txn1;
      
      switch (v2100[0]) {
        case 'Umvir_propose0_270': {
          const v2103 = v2100[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Umvir_propose"
            });
          const v2108 = v2103[stdlib.checkedBigNumberify('./TRI.rsh:474:12:spread', stdlib.UInt_max, '0')];
          const v2130 = v1767.umvirs;
          const v2131 = ['None', null];
          ;
          const v2182 = await stdlib.Array_asyncReduce([v2130], v2131, async([v2184], v2183, v2185) => {
            const v2186 = {
              None: 0,
              Some: 1
              }[v2183[0]];
            const v2187 = stdlib.eq(v2186, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v2188 = stdlib.addressEq(v2099, v2184);
            const v2189 = v2187 ? v2188 : false;
            const v2190 = ['Some', v2185];
            const v2191 = v2189 ? v2190 : v2183;
            
            return v2191;})
          const v2195 = stdlib.fromSome(v2182, stdlib.checkedBigNumberify('./TRI.rsh:467:33:decimal', stdlib.UInt_max, '0'));
          const v2196 = v1767.cmds;
          const v2198 = stdlib.Array_set(v2196, v2195, v2108);
          const v2200 = true;
          const v2201 = await txn1.getOutput('Umvir_propose', 'v2200', ctc5, v2200);
          
          const v2226 = v1767.closed;
          const v2228 = v1767.info;
          const v2230 = {
            closed: v2226,
            cmds: v2198,
            info: v2228,
            umvirs: v2130
            };
          const v8725 = v2230;
          const v8727 = v1771;
          const v8728 = v2230.closed;
          if (v8728) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Umvir_support0_270': {
          const v2482 = v2100[1];
          
          break;
          }
        case 'register0_270': {
          const v2861 = v2100[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc11, ctc12, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2100], secs: v2102, time: v2101, didSend: v1217, from: v2099 } = txn1;
  switch (v2100[0]) {
    case 'Umvir_propose0_270': {
      const v2103 = v2100[1];
      undefined /* setApiDetails */;
      const v2108 = v2103[stdlib.checkedBigNumberify('./TRI.rsh:474:12:spread', stdlib.UInt_max, '0')];
      let v2109;
      switch (v2108[0]) {
        case 'Harvest': {
          const v2110 = v2108[1];
          v2109 = true;
          
          break;
          }
        case 'Kill': {
          const v2111 = v2108[1];
          v2109 = true;
          
          break;
          }
        case 'NewInfo': {
          const v2112 = v2108[1];
          const v2113 = v2112.protoFee;
          const v2114 = v2112.lpFee;
          const v2115 = v2112.totFee;
          const v2116 = stdlib.lt256(v2113, stdlib.checkedBigNumberify('./TRI.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2117 = stdlib.lt256(v2114, stdlib.checkedBigNumberify('./TRI.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2118 = v2116 ? v2117 : false;
          let v2119;
          if (v2118) {
            const v2120 = stdlib.safeAdd256(v2114, v2113);
            const v2121 = stdlib.eq256(v2115, v2120);
            v2119 = v2121;
            }
          else {
            v2119 = false;
            }
          const v2122 = stdlib.lt256(v2115, stdlib.checkedBigNumberify('./TRI.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2123 = v2119 ? v2122 : false;
          const v2124 = stdlib.gt256(v2115, stdlib.checkedBigNumberify('./TRI.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2125 = v2123 ? v2124 : false;
          v2109 = v2125;
          
          break;
          }
        case 'NewUmvirs': {
          const v2126 = v2108[1];
          v2109 = true;
          
          break;
          }
        case 'NoOp': {
          const v2127 = v2108[1];
          v2109 = true;
          
          break;
          }
        case 'Rewards': {
          const v2128 = v2108[1];
          v2109 = true;
          
          break;
          }
        }
      stdlib.assert(v2109, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./TRI.rsh:475:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:474:34:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
        msg: 'invalid command',
        who: 'Umvir_propose'
        });
      const v2130 = v1767.umvirs;
      const v2131 = ['None', null];
      const v2132 = await stdlib.Array_asyncReduce([v2130], v2131, async([v2134], v2133, v2135) => {
        const v2136 = {
          None: 0,
          Some: 1
          }[v2133[0]];
        const v2137 = stdlib.eq(v2136, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v2138 = stdlib.addressEq(v2099, v2134);
        const v2139 = v2137 ? v2138 : false;
        const v2140 = ['Some', v2135];
        const v2141 = v2139 ? v2140 : v2133;
        
        return v2141;})
      const v2142 = {
        None: 0,
        Some: 1
        }[v2132[0]];
      const v2143 = stdlib.eq(v2142, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2143, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./TRI.rsh:466:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:476:29:application call to "chkUmvir" (defined at: ./TRI.rsh:464:32:function exp)', 'at ./TRI.rsh:474:34:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:474:34:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
        msg: 'not umvir',
        who: 'Umvir_propose'
        });
      ;
      let v2159;
      switch (v2108[0]) {
        case 'Harvest': {
          const v2160 = v2108[1];
          v2159 = true;
          
          break;
          }
        case 'Kill': {
          const v2161 = v2108[1];
          v2159 = true;
          
          break;
          }
        case 'NewInfo': {
          const v2162 = v2108[1];
          const v2163 = v2162.protoFee;
          const v2164 = v2162.lpFee;
          const v2165 = v2162.totFee;
          const v2166 = stdlib.lt256(v2163, stdlib.checkedBigNumberify('./TRI.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2167 = stdlib.lt256(v2164, stdlib.checkedBigNumberify('./TRI.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2168 = v2166 ? v2167 : false;
          let v2169;
          if (v2168) {
            const v2170 = stdlib.safeAdd256(v2164, v2163);
            const v2171 = stdlib.eq256(v2165, v2170);
            v2169 = v2171;
            }
          else {
            v2169 = false;
            }
          const v2172 = stdlib.lt256(v2165, stdlib.checkedBigNumberify('./TRI.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2173 = v2169 ? v2172 : false;
          const v2174 = stdlib.gt256(v2165, stdlib.checkedBigNumberify('./TRI.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2175 = v2173 ? v2174 : false;
          v2159 = v2175;
          
          break;
          }
        case 'NewUmvirs': {
          const v2176 = v2108[1];
          v2159 = true;
          
          break;
          }
        case 'NoOp': {
          const v2177 = v2108[1];
          v2159 = true;
          
          break;
          }
        case 'Rewards': {
          const v2178 = v2108[1];
          v2159 = true;
          
          break;
          }
        }
      stdlib.assert(v2159, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./TRI.rsh:475:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:480:15:application call to [unknown function] (defined at: ./TRI.rsh:480:15:function exp)'],
        msg: 'invalid command',
        who: 'Umvir_propose'
        });
      const v2182 = await stdlib.Array_asyncReduce([v2130], v2131, async([v2184], v2183, v2185) => {
        const v2186 = {
          None: 0,
          Some: 1
          }[v2183[0]];
        const v2187 = stdlib.eq(v2186, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v2188 = stdlib.addressEq(v2099, v2184);
        const v2189 = v2187 ? v2188 : false;
        const v2190 = ['Some', v2185];
        const v2191 = v2189 ? v2190 : v2183;
        
        return v2191;})
      const v2192 = {
        None: 0,
        Some: 1
        }[v2182[0]];
      const v2193 = stdlib.eq(v2192, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2193, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./TRI.rsh:466:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:476:29:application call to "chkUmvir" (defined at: ./TRI.rsh:464:32:function exp)', 'at ./TRI.rsh:480:15:application call to [unknown function] (defined at: ./TRI.rsh:480:15:function exp)'],
        msg: 'not umvir',
        who: 'Umvir_propose'
        });
      const v2195 = stdlib.fromSome(v2182, stdlib.checkedBigNumberify('./TRI.rsh:467:33:decimal', stdlib.UInt_max, '0'));
      const v2196 = v1767.cmds;
      const v2198 = stdlib.Array_set(v2196, v2195, v2108);
      const v2200 = true;
      const v2201 = await txn1.getOutput('Umvir_propose', 'v2200', ctc5, v2200);
      if (v1217) {
        stdlib.protect(ctc3, await interact.out(v2103, v2201), {
          at: './TRI.rsh:474:13:application',
          fs: ['at ./TRI.rsh:474:13:application call to [unknown function] (defined at: ./TRI.rsh:474:13:function exp)', 'at ./TRI.rsh:481:14:application call to "k" (defined at: ./TRI.rsh:480:15:function exp)', 'at ./TRI.rsh:480:15:application call to [unknown function] (defined at: ./TRI.rsh:480:15:function exp)'],
          msg: 'out',
          who: 'Umvir_propose'
          });
        }
      else {
        }
      
      const v2226 = v1767.closed;
      const v2228 = v1767.info;
      const v2230 = {
        closed: v2226,
        cmds: v2198,
        info: v2228,
        umvirs: v2130
        };
      const v8725 = v2230;
      const v8727 = v1771;
      const v8728 = v2230.closed;
      if (v8728) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Umvir_support0_270': {
      const v2482 = v2100[1];
      return;
      break;
      }
    case 'register0_270': {
      const v2861 = v2100[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Umvir_support3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Umvir_support3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Umvir_support3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc1], ['locked', ctc5]]);
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Data({
    Harvest: ctc2,
    Kill: ctc3,
    NewInfo: ctc6,
    NewUmvirs: ctc7,
    NoOp: ctc3,
    Rewards: ctc1
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Object({
    locked: ctc5,
    lpFee: ctc4,
    protoAddr: ctc1,
    protoFee: ctc4,
    totFee: ctc4
    });
  const ctc11 = stdlib.T_Object({
    closed: ctc5,
    cmds: ctc9,
    info: ctc10,
    umvirs: ctc7
    });
  const ctc12 = stdlib.T_UInt;
  const ctc13 = stdlib.T_Tuple([ctc12, ctc8]);
  const ctc14 = stdlib.T_Tuple([ctc8]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc16 = stdlib.T_Data({
    Umvir_propose0_270: ctc14,
    Umvir_support0_270: ctc13,
    register0_270: ctc15
    });
  const ctc17 = stdlib.T_Struct([['A', ctc4], ['B', ctc4]]);
  const ctc18 = stdlib.T_Tuple([ctc17, ctc12]);
  const ctc19 = stdlib.T_Tuple([ctc12, ctc18]);
  const ctc20 = stdlib.T_Tuple([ctc0, ctc12, ctc1]);
  
  
  const [v1750, v1767, v1771] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc8, ctc11, ctc12]);
  const v1941 = ctc.selfAddress();
  const v1943 = stdlib.protect(ctc13, await interact.in(), {
    at: './TRI.rsh:1:23:application',
    fs: ['at ./TRI.rsh:538:40:application call to [unknown function] (defined at: ./TRI.rsh:538:40:function exp)', 'at ./TRI.rsh:413:31:application call to "runUmvir_support0_270" (defined at: ./TRI.rsh:538:12:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'in',
    who: 'Umvir_support'
    });
  const v1944 = v1943[stdlib.checkedBigNumberify('./TRI.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1945 = v1943[stdlib.checkedBigNumberify('./TRI.rsh:1:23:application', stdlib.UInt_max, '1')];
  let v1967;
  switch (v1945[0]) {
    case 'Harvest': {
      const v1968 = v1945[1];
      v1967 = true;
      
      break;
      }
    case 'Kill': {
      const v1969 = v1945[1];
      v1967 = true;
      
      break;
      }
    case 'NewInfo': {
      const v1970 = v1945[1];
      const v1971 = v1970.protoFee;
      const v1972 = v1970.lpFee;
      const v1973 = v1970.totFee;
      const v1974 = stdlib.lt256(v1971, stdlib.checkedBigNumberify('./TRI.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v1975 = stdlib.lt256(v1972, stdlib.checkedBigNumberify('./TRI.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v1976 = v1974 ? v1975 : false;
      let v1977;
      if (v1976) {
        const v1978 = stdlib.safeAdd256(v1972, v1971);
        const v1979 = stdlib.eq256(v1973, v1978);
        v1977 = v1979;
        }
      else {
        v1977 = false;
        }
      const v1980 = stdlib.lt256(v1973, stdlib.checkedBigNumberify('./TRI.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v1981 = v1977 ? v1980 : false;
      const v1982 = stdlib.gt256(v1973, stdlib.checkedBigNumberify('./TRI.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1983 = v1981 ? v1982 : false;
      v1967 = v1983;
      
      break;
      }
    case 'NewUmvirs': {
      const v1984 = v1945[1];
      v1967 = true;
      
      break;
      }
    case 'NoOp': {
      const v1985 = v1945[1];
      v1967 = true;
      
      break;
      }
    case 'Rewards': {
      const v1986 = v1945[1];
      v1967 = true;
      
      break;
      }
    }
  stdlib.assert(v1967, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./TRI.rsh:539:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:538:40:application call to [unknown function] (defined at: ./TRI.rsh:538:40:function exp)', 'at ./TRI.rsh:413:31:application call to "runUmvir_support0_270" (defined at: ./TRI.rsh:538:12:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'invalid command',
    who: 'Umvir_support'
    });
  const v1988 = v1767.umvirs;
  const v1989 = stdlib.lt(v1944, stdlib.checkedBigNumberify('./TRI.rsh:540:30:dot', stdlib.UInt_max, '3'));
  stdlib.assert(v1989, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./TRI.rsh:540:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:538:40:application call to [unknown function] (defined at: ./TRI.rsh:538:40:function exp)', 'at ./TRI.rsh:413:31:application call to "runUmvir_support0_270" (defined at: ./TRI.rsh:538:12:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'illegal idx',
    who: 'Umvir_support'
    });
  const v1992 = ['None', null];
  const v1993 = await stdlib.Array_asyncReduce([v1988], v1992, async([v1995], v1994, v1996) => {
    const v1997 = {
      None: 0,
      Some: 1
      }[v1994[0]];
    const v1998 = stdlib.eq(v1997, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v1999 = stdlib.addressEq(v1941, v1995);
    const v2000 = v1998 ? v1999 : false;
    const v2001 = ['Some', v1996];
    const v2002 = v2000 ? v2001 : v1994;
    
    return v2002;})
  const v2003 = {
    None: 0,
    Some: 1
    }[v1993[0]];
  const v2004 = stdlib.eq(v2003, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2004, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./TRI.rsh:466:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:541:29:application call to "chkUmvir" (defined at: ./TRI.rsh:464:32:function exp)', 'at ./TRI.rsh:538:40:application call to [unknown function] (defined at: ./TRI.rsh:538:40:function exp)', 'at ./TRI.rsh:413:31:application call to "runUmvir_support0_270" (defined at: ./TRI.rsh:538:12:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'not umvir',
    who: 'Umvir_support'
    });
  const v2006 = stdlib.fromSome(v1993, stdlib.checkedBigNumberify('./TRI.rsh:467:33:decimal', stdlib.UInt_max, '0'));
  const v2007 = stdlib.eq(v1944, v2006);
  const v2008 = v2007 ? false : true;
  stdlib.assert(v2008, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./TRI.rsh:542:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:538:40:application call to [unknown function] (defined at: ./TRI.rsh:538:40:function exp)', 'at ./TRI.rsh:413:31:application call to "runUmvir_support0_270" (defined at: ./TRI.rsh:538:12:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'cannot support self',
    who: 'Umvir_support'
    });
  const v2010 = v1767.cmds;
  const v2012 = v2010[v1944];
  const v2013 = stdlib.digest([ctc8], [v1945]);
  const v2014 = stdlib.digest([ctc8], [v2012]);
  const v2015 = stdlib.digestEq(v2013, v2014);
  stdlib.assert(v2015, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./TRI.rsh:544:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:538:40:application call to [unknown function] (defined at: ./TRI.rsh:538:40:function exp)', 'at ./TRI.rsh:413:31:application call to "runUmvir_support0_270" (defined at: ./TRI.rsh:538:12:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'command switched',
    who: 'Umvir_support'
    });
  const v2047 = ['Umvir_support0_270', v1943];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1750, v1767, v1771, v2047],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./TRI.rsh:538:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2100], secs: v2102, time: v2101, didSend: v1217, from: v2099 } = txn1;
      
      switch (v2100[0]) {
        case 'Umvir_propose0_270': {
          const v2103 = v2100[1];
          
          break;
          }
        case 'Umvir_support0_270': {
          const v2482 = v2100[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Umvir_support"
            });
          ;
          const v2613 = v2482[stdlib.checkedBigNumberify('./TRI.rsh:538:12:spread', stdlib.UInt_max, '0')];
          const v2614 = v2482[stdlib.checkedBigNumberify('./TRI.rsh:538:12:spread', stdlib.UInt_max, '1')];
          const v2636 = v1767.umvirs;
          const v2658 = v1767.cmds;
          const v2668 = stdlib.Array_set(v2658, v2613, v1750);
          const v2671 = true;
          const v2672 = await txn1.getOutput('Umvir_support', 'v2671', ctc5, v2671);
          
          switch (v2614[0]) {
            case 'Harvest': {
              const v2698 = v2614[1];
              const v2699 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '0')];
              const v2700 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '1')];
              const v2701 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '2')];
              const v2702 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '3')];
              const v2703 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '4')];
              const v2704 = [v2701, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2700];
              const v2705 = [v2701, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2703];
              const v2706 = [v2702, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2700];
              const v2707 = [v2702, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2703];
              const v2708 = v1767.info;
              const v2709 = v2708.protoFee;
              const v2710 = v2708.lpFee;
              const v2711 = v2708.totFee;
              const v2712 = v2708.protoAddr;
              const v2713 = v2708.locked;
              const v2716 = [];
              const v2727 = {
                locked: v2713,
                lpFee: v2710,
                protoAddr: v2712,
                protoFee: v2709,
                totFee: v2711
                };
              const v2728 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2699,
                  remote: ({
                    accs: [v2703],
                    apps: [v2699, v2701, v2702],
                    bills: stdlib.checkedBigNumberify('./TRI.rsh:522:17:application', stdlib.UInt_max, '0'),
                    boxes: [[ctc20, v2704], [ctc20, v2705], [ctc20, v2706], [ctc20, v2707]],
                    fees: stdlib.checkedBigNumberify('./TRI.rsh:514:23:decimal', stdlib.UInt_max, '3'),
                    pays: stdlib.checkedBigNumberify('./TRI.rsh:522:17:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc18.defaultValue /* simReturnVal */];})();
              const v2729 = await txn1.getOutput('internal', 'v2728', ctc19, v2728);
              const v2731 = v2729[stdlib.checkedBigNumberify('./TRI.rsh:522:17:application', stdlib.UInt_max, '0')];
              const v2740 = stdlib.add(v1771, v2731);
              const v2745 = v1767.closed;
              const v2746 = {
                closed: v2745,
                cmds: v2668,
                info: v2708,
                umvirs: v2636
                };
              const v8770 = v2746;
              const v8772 = v2740;
              const v8773 = v2746.closed;
              if (v8773) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.isHalt = false;
                }
              break;
              }
            case 'Kill': {
              const v2749 = v2614[1];
              const v2752 = v1767.info;
              const v2754 = {
                closed: true,
                cmds: v2658,
                info: v2752,
                umvirs: v2636
                };
              const v2757 = v2754.info;
              const v2758 = v2754.umvirs;
              const v2759 = v2754.closed;
              const v2760 = {
                closed: v2759,
                cmds: v2668,
                info: v2757,
                umvirs: v2758
                };
              const v8775 = v2760;
              const v8777 = v1771;
              const v8778 = v2760.closed;
              if (v8778) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.isHalt = false;
                }
              break;
              }
            case 'NewInfo': {
              const v2763 = v2614[1];
              const v2764 = v1767.closed;
              const v2768 = v2763.locked;
              const v2769 = v2763.lpFee;
              const v2770 = v2763.protoAddr;
              const v2771 = v2763.protoFee;
              const v2772 = v2763.totFee;
              const v2773 = {
                locked: v2768,
                lpFee: v2769,
                protoAddr: v2770,
                protoFee: v2771,
                totFee: v2772
                };
              const v2774 = {
                closed: v2764,
                cmds: v2658,
                info: v2773,
                umvirs: v2636
                };
              const v2778 = v2774.info;
              const v2779 = v2774.umvirs;
              const v2780 = v2774.closed;
              const v2781 = {
                closed: v2780,
                cmds: v2668,
                info: v2778,
                umvirs: v2779
                };
              const v8780 = v2781;
              const v8782 = v1771;
              const v8783 = v2781.closed;
              if (v8783) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.isHalt = false;
                }
              break;
              }
            case 'NewUmvirs': {
              const v2784 = v2614[1];
              const v2785 = v1767.closed;
              const v2787 = v1767.info;
              const v2789 = {
                closed: v2785,
                cmds: v2658,
                info: v2787,
                umvirs: v2784
                };
              const v2792 = v2789.info;
              const v2793 = v2789.umvirs;
              const v2794 = v2789.closed;
              const v2795 = {
                closed: v2794,
                cmds: v2668,
                info: v2792,
                umvirs: v2793
                };
              const v8785 = v2795;
              const v8787 = v1771;
              const v8788 = v2795.closed;
              if (v8788) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.isHalt = false;
                }
              break;
              }
            case 'NoOp': {
              const v2798 = v2614[1];
              const v2800 = v1767.info;
              const v2802 = v1767.closed;
              const v2803 = {
                closed: v2802,
                cmds: v2668,
                info: v2800,
                umvirs: v2636
                };
              const v8790 = v2803;
              const v8792 = v1771;
              const v8793 = v2803.closed;
              if (v8793) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.isHalt = false;
                }
              break;
              }
            case 'Rewards': {
              const v2806 = v2614[1];
              const v2808 = (stdlib.le(await ctc.getBalance(), v1771) ? stdlib.checkedBigNumberify('./TRI.rsh:526:43:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1771));
              const v2809 = stdlib.safeAdd(v2808, v1771);
              const v2813 = stdlib.sub(v2809, v2808);
              sim_r.txns.push({
                kind: 'from',
                to: v2806,
                tok: undefined /* Nothing */
                });
              const v2815 = v1767.info;
              const v2817 = v1767.closed;
              const v2818 = {
                closed: v2817,
                cmds: v2668,
                info: v2815,
                umvirs: v2636
                };
              const v8795 = v2818;
              const v8797 = v2813;
              const v8798 = v2818.closed;
              if (v8798) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.isHalt = false;
                }
              break;
              }
            }
          break;
          }
        case 'register0_270': {
          const v2861 = v2100[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc11, ctc12, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2100], secs: v2102, time: v2101, didSend: v1217, from: v2099 } = txn1;
  switch (v2100[0]) {
    case 'Umvir_propose0_270': {
      const v2103 = v2100[1];
      return;
      break;
      }
    case 'Umvir_support0_270': {
      const v2482 = v2100[1];
      undefined /* setApiDetails */;
      ;
      const v2613 = v2482[stdlib.checkedBigNumberify('./TRI.rsh:538:12:spread', stdlib.UInt_max, '0')];
      const v2614 = v2482[stdlib.checkedBigNumberify('./TRI.rsh:538:12:spread', stdlib.UInt_max, '1')];
      let v2615;
      switch (v2614[0]) {
        case 'Harvest': {
          const v2616 = v2614[1];
          v2615 = true;
          
          break;
          }
        case 'Kill': {
          const v2617 = v2614[1];
          v2615 = true;
          
          break;
          }
        case 'NewInfo': {
          const v2618 = v2614[1];
          const v2619 = v2618.protoFee;
          const v2620 = v2618.lpFee;
          const v2621 = v2618.totFee;
          const v2622 = stdlib.lt256(v2619, stdlib.checkedBigNumberify('./TRI.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2623 = stdlib.lt256(v2620, stdlib.checkedBigNumberify('./TRI.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2624 = v2622 ? v2623 : false;
          let v2625;
          if (v2624) {
            const v2626 = stdlib.safeAdd256(v2620, v2619);
            const v2627 = stdlib.eq256(v2621, v2626);
            v2625 = v2627;
            }
          else {
            v2625 = false;
            }
          const v2628 = stdlib.lt256(v2621, stdlib.checkedBigNumberify('./TRI.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2629 = v2625 ? v2628 : false;
          const v2630 = stdlib.gt256(v2621, stdlib.checkedBigNumberify('./TRI.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2631 = v2629 ? v2630 : false;
          v2615 = v2631;
          
          break;
          }
        case 'NewUmvirs': {
          const v2632 = v2614[1];
          v2615 = true;
          
          break;
          }
        case 'NoOp': {
          const v2633 = v2614[1];
          v2615 = true;
          
          break;
          }
        case 'Rewards': {
          const v2634 = v2614[1];
          v2615 = true;
          
          break;
          }
        }
      stdlib.assert(v2615, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./TRI.rsh:539:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
        msg: 'invalid command',
        who: 'Umvir_support'
        });
      const v2636 = v1767.umvirs;
      const v2637 = stdlib.lt(v2613, stdlib.checkedBigNumberify('./TRI.rsh:540:30:dot', stdlib.UInt_max, '3'));
      stdlib.assert(v2637, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./TRI.rsh:540:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
        msg: 'illegal idx',
        who: 'Umvir_support'
        });
      const v2640 = ['None', null];
      const v2641 = await stdlib.Array_asyncReduce([v2636], v2640, async([v2643], v2642, v2644) => {
        const v2645 = {
          None: 0,
          Some: 1
          }[v2642[0]];
        const v2646 = stdlib.eq(v2645, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v2647 = stdlib.addressEq(v2099, v2643);
        const v2648 = v2646 ? v2647 : false;
        const v2649 = ['Some', v2644];
        const v2650 = v2648 ? v2649 : v2642;
        
        return v2650;})
      const v2651 = {
        None: 0,
        Some: 1
        }[v2641[0]];
      const v2652 = stdlib.eq(v2651, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2652, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./TRI.rsh:466:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:541:29:application call to "chkUmvir" (defined at: ./TRI.rsh:464:32:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
        msg: 'not umvir',
        who: 'Umvir_support'
        });
      const v2654 = stdlib.fromSome(v2641, stdlib.checkedBigNumberify('./TRI.rsh:467:33:decimal', stdlib.UInt_max, '0'));
      const v2655 = stdlib.eq(v2613, v2654);
      const v2656 = v2655 ? false : true;
      stdlib.assert(v2656, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./TRI.rsh:542:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
        msg: 'cannot support self',
        who: 'Umvir_support'
        });
      const v2658 = v1767.cmds;
      const v2660 = v2658[v2613];
      const v2661 = stdlib.digest([ctc8], [v2614]);
      const v2662 = stdlib.digest([ctc8], [v2660]);
      const v2663 = stdlib.digestEq(v2661, v2662);
      stdlib.assert(v2663, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./TRI.rsh:544:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
        msg: 'command switched',
        who: 'Umvir_support'
        });
      const v2668 = stdlib.Array_set(v2658, v2613, v1750);
      const v2671 = true;
      const v2672 = await txn1.getOutput('Umvir_support', 'v2671', ctc5, v2671);
      if (v1217) {
        stdlib.protect(ctc3, await interact.out(v2482, v2672), {
          at: './TRI.rsh:538:13:application',
          fs: ['at ./TRI.rsh:538:13:application call to [unknown function] (defined at: ./TRI.rsh:538:13:function exp)', 'at ./TRI.rsh:548:14:application call to "k" (defined at: ./TRI.rsh:547:15:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
          msg: 'out',
          who: 'Umvir_support'
          });
        }
      else {
        }
      
      switch (v2614[0]) {
        case 'Harvest': {
          const v2698 = v2614[1];
          const v2699 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '0')];
          const v2700 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '1')];
          const v2701 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '2')];
          const v2702 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '3')];
          const v2703 = v2698[stdlib.checkedBigNumberify('./TRI.rsh:511:23:array', stdlib.UInt_max, '4')];
          const v2704 = [v2701, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2700];
          const v2705 = [v2701, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2703];
          const v2706 = [v2702, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2700];
          const v2707 = [v2702, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2703];
          const v2708 = v1767.info;
          const v2709 = v2708.protoFee;
          const v2710 = v2708.lpFee;
          const v2711 = v2708.totFee;
          const v2712 = v2708.protoAddr;
          const v2713 = v2708.locked;
          const v2716 = [];
          const v2727 = {
            locked: v2713,
            lpFee: v2710,
            protoAddr: v2712,
            protoFee: v2709,
            totFee: v2711
            };
          const v2728 = undefined /* Remote */;
          const v2729 = await txn1.getOutput('internal', 'v2728', ctc19, v2728);
          const v2731 = v2729[stdlib.checkedBigNumberify('./TRI.rsh:522:17:application', stdlib.UInt_max, '0')];
          const v2740 = stdlib.add(v1771, v2731);
          const v2741 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2731);
          stdlib.assert(v2741, {
            at: './TRI.rsh:522:17:application',
            fs: ['at ./TRI.rsh:507:20:application call to [unknown function] (defined at: ./TRI.rsh:511:58:function exp)', 'at ./TRI.rsh:507:20:application call to [unknown function] (defined at: ./TRI.rsh:507:20:function exp)', 'at ./TRI.rsh:549:57:application call to "evalCommand" (defined at: ./TRI.rsh:506:35:function exp)', 'at ./TRI.rsh:547:15:application call to [unknown function] (defined at: ./TRI.rsh:547:15:function exp)'],
            msg: 'remote bill check',
            who: 'Umvir_support'
            });
          const v2745 = v1767.closed;
          const v2746 = {
            closed: v2745,
            cmds: v2668,
            info: v2708,
            umvirs: v2636
            };
          const v8770 = v2746;
          const v8772 = v2740;
          const v8773 = v2746.closed;
          if (v8773) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Kill': {
          const v2749 = v2614[1];
          const v2752 = v1767.info;
          const v2754 = {
            closed: true,
            cmds: v2658,
            info: v2752,
            umvirs: v2636
            };
          const v2757 = v2754.info;
          const v2758 = v2754.umvirs;
          const v2759 = v2754.closed;
          const v2760 = {
            closed: v2759,
            cmds: v2668,
            info: v2757,
            umvirs: v2758
            };
          const v8775 = v2760;
          const v8777 = v1771;
          const v8778 = v2760.closed;
          if (v8778) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'NewInfo': {
          const v2763 = v2614[1];
          const v2764 = v1767.closed;
          const v2768 = v2763.locked;
          const v2769 = v2763.lpFee;
          const v2770 = v2763.protoAddr;
          const v2771 = v2763.protoFee;
          const v2772 = v2763.totFee;
          const v2773 = {
            locked: v2768,
            lpFee: v2769,
            protoAddr: v2770,
            protoFee: v2771,
            totFee: v2772
            };
          const v2774 = {
            closed: v2764,
            cmds: v2658,
            info: v2773,
            umvirs: v2636
            };
          const v2778 = v2774.info;
          const v2779 = v2774.umvirs;
          const v2780 = v2774.closed;
          const v2781 = {
            closed: v2780,
            cmds: v2668,
            info: v2778,
            umvirs: v2779
            };
          const v8780 = v2781;
          const v8782 = v1771;
          const v8783 = v2781.closed;
          if (v8783) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'NewUmvirs': {
          const v2784 = v2614[1];
          const v2785 = v1767.closed;
          const v2787 = v1767.info;
          const v2789 = {
            closed: v2785,
            cmds: v2658,
            info: v2787,
            umvirs: v2784
            };
          const v2792 = v2789.info;
          const v2793 = v2789.umvirs;
          const v2794 = v2789.closed;
          const v2795 = {
            closed: v2794,
            cmds: v2668,
            info: v2792,
            umvirs: v2793
            };
          const v8785 = v2795;
          const v8787 = v1771;
          const v8788 = v2795.closed;
          if (v8788) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'NoOp': {
          const v2798 = v2614[1];
          const v2800 = v1767.info;
          const v2802 = v1767.closed;
          const v2803 = {
            closed: v2802,
            cmds: v2668,
            info: v2800,
            umvirs: v2636
            };
          const v8790 = v2803;
          const v8792 = v1771;
          const v8793 = v2803.closed;
          if (v8793) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Rewards': {
          const v2806 = v2614[1];
          const v2808 = (stdlib.le(await ctc.getBalance(), v1771) ? stdlib.checkedBigNumberify('./TRI.rsh:526:43:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1771));
          const v2809 = stdlib.safeAdd(v2808, v1771);
          const v2813 = stdlib.sub(v2809, v2808);
          ;
          const v2815 = v1767.info;
          const v2817 = v1767.closed;
          const v2818 = {
            closed: v2817,
            cmds: v2668,
            info: v2815,
            umvirs: v2636
            };
          const v8795 = v2818;
          const v8797 = v2813;
          const v8798 = v2818.closed;
          if (v8798) {
            return;
            }
          else {
            return;
            }
          break;
          }
        }
      break;
      }
    case 'register0_270': {
      const v2861 = v2100[1];
      return;
      break;
      }
    }
  
  
  };
export async function _register3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _register3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _register3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Struct([['protoFee', ctc4], ['lpFee', ctc4], ['totFee', ctc4], ['protoAddr', ctc1], ['locked', ctc5]]);
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc8 = stdlib.T_Data({
    Harvest: ctc2,
    Kill: ctc3,
    NewInfo: ctc6,
    NewUmvirs: ctc7,
    NoOp: ctc3,
    Rewards: ctc1
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc10 = stdlib.T_Object({
    locked: ctc5,
    lpFee: ctc4,
    protoAddr: ctc1,
    protoFee: ctc4,
    totFee: ctc4
    });
  const ctc11 = stdlib.T_Object({
    closed: ctc5,
    cmds: ctc9,
    info: ctc10,
    umvirs: ctc7
    });
  const ctc12 = stdlib.T_UInt;
  const ctc13 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc8]);
  const ctc15 = stdlib.T_Tuple([ctc12, ctc8]);
  const ctc16 = stdlib.T_Data({
    Umvir_propose0_270: ctc14,
    Umvir_support0_270: ctc15,
    register0_270: ctc13
    });
  
  
  const [v1750, v1767, v1771] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc8, ctc11, ctc12]);
  const v1828 = ctc.selfAddress();
  const v1830 = stdlib.protect(ctc13, await interact.in(), {
    at: './TRI.rsh:1:23:application',
    fs: ['at ./TRI.rsh:449:50:application call to [unknown function] (defined at: ./TRI.rsh:449:50:function exp)', 'at ./TRI.rsh:413:31:application call to "runregister0_270" (defined at: ./TRI.rsh:449:12:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v1831 = v1830[stdlib.checkedBigNumberify('./TRI.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1838 = stdlib.ctcAddrEq(v1831, v1828);
  stdlib.assert(v1838, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./TRI.rsh:436:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:450:15:application call to "chkCtc" (defined at: ./TRI.rsh:435:39:function exp)', 'at ./TRI.rsh:449:50:application call to [unknown function] (defined at: ./TRI.rsh:449:50:function exp)', 'at ./TRI.rsh:413:31:application call to "runregister0_270" (defined at: ./TRI.rsh:449:12:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
    msg: 'not contract',
    who: 'register'
    });
  const v1849 = ['register0_270', v1830];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1750, v1767, v1771, v1849],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./TRI.rsh:452:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2100], secs: v2102, time: v2101, didSend: v1217, from: v2099 } = txn1;
      
      switch (v2100[0]) {
        case 'Umvir_propose0_270': {
          const v2103 = v2100[1];
          
          break;
          }
        case 'Umvir_support0_270': {
          const v2482 = v2100[1];
          
          break;
          }
        case 'register0_270': {
          const v2861 = v2100[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          const v2909 = v2861[stdlib.checkedBigNumberify('./TRI.rsh:449:12:spread', stdlib.UInt_max, '0')];
          ;
          const v3202 = v2861[stdlib.checkedBigNumberify('./TRI.rsh:449:12:spread', stdlib.UInt_max, '1')];
          const v3203 = v2861[stdlib.checkedBigNumberify('./TRI.rsh:449:12:spread', stdlib.UInt_max, '2')];
          const v3210 = v1767.info;
          const v3211 = v3210.protoFee;
          const v3212 = v3210.lpFee;
          const v3213 = v3210.totFee;
          const v3214 = v3210.protoAddr;
          const v3215 = v3210.locked;
          const v3216 = {
            locked: v3215,
            lpFee: v3212,
            protoAddr: v3214,
            protoFee: v3211,
            totFee: v3213
            };
          const v3217 = await txn1.getOutput('register', 'v3216', ctc6, v3216);
          
          const v3238 = [v2909, v3202, v3203];
          null;
          const v8840 = v1767;
          const v8842 = v1771;
          const v8843 = v1767.closed;
          if (v8843) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc11, ctc12, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2100], secs: v2102, time: v2101, didSend: v1217, from: v2099 } = txn1;
  switch (v2100[0]) {
    case 'Umvir_propose0_270': {
      const v2103 = v2100[1];
      return;
      break;
      }
    case 'Umvir_support0_270': {
      const v2482 = v2100[1];
      return;
      break;
      }
    case 'register0_270': {
      const v2861 = v2100[1];
      undefined /* setApiDetails */;
      const v2909 = v2861[stdlib.checkedBigNumberify('./TRI.rsh:449:12:spread', stdlib.UInt_max, '0')];
      const v2913 = stdlib.ctcAddrEq(v2909, v2099);
      stdlib.assert(v2913, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./TRI.rsh:436:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./TRI.rsh:450:15:application call to "chkCtc" (defined at: ./TRI.rsh:435:39:function exp)', 'at ./TRI.rsh:449:50:application call to [unknown function] (defined at: ./TRI.rsh:449:50:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:449:50:function exp)', 'at ./TRI.rsh:413:31:application call to [unknown function] (defined at: ./TRI.rsh:413:31:function exp)'],
        msg: 'not contract',
        who: 'register'
        });
      ;
      const v3202 = v2861[stdlib.checkedBigNumberify('./TRI.rsh:449:12:spread', stdlib.UInt_max, '1')];
      const v3203 = v2861[stdlib.checkedBigNumberify('./TRI.rsh:449:12:spread', stdlib.UInt_max, '2')];
      const v3210 = v1767.info;
      const v3211 = v3210.protoFee;
      const v3212 = v3210.lpFee;
      const v3213 = v3210.totFee;
      const v3214 = v3210.protoAddr;
      const v3215 = v3210.locked;
      const v3216 = {
        locked: v3215,
        lpFee: v3212,
        protoAddr: v3214,
        protoFee: v3211,
        totFee: v3213
        };
      const v3217 = await txn1.getOutput('register', 'v3216', ctc6, v3216);
      if (v1217) {
        stdlib.protect(ctc3, await interact.out(v2861, v3217), {
          at: './TRI.rsh:449:13:application',
          fs: ['at ./TRI.rsh:449:13:application call to [unknown function] (defined at: ./TRI.rsh:449:13:function exp)', 'at ./TRI.rsh:454:14:application call to "k" (defined at: ./TRI.rsh:453:15:function exp)', 'at ./TRI.rsh:453:15:application call to [unknown function] (defined at: ./TRI.rsh:453:15:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      const v3238 = [v2909, v3202, v3203];
      null;
      const v8840 = v1767;
      const v8842 = v1771;
      const v8843 = v1767.closed;
      if (v8843) {
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function Umvir_propose(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Umvir_propose expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Umvir_propose expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Umvir_propose3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Umvir_support(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Umvir_support expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Umvir_support expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Umvir_support3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _register3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Umvir_propose((byte,byte[129]))byte`, `Umvir_support(uint64,(byte,byte[129]))byte`, `_reachp_0((uint64,address[3],(uint256,uint256,uint256)))void`, `_reachp_2((uint64,(byte,byte[138])))void`, `register(uint64,uint64,uint64)(uint256,uint256,uint256,address,byte)`],
    pure: [`Info()(address[3],(byte,byte[129])[3],(uint256,uint256,uint256,address,byte))`],
    sigs: [`Info()(address[3],(byte,byte[129])[3],(uint256,uint256,uint256,address,byte))`, `Umvir_propose((byte,byte[129]))byte`, `Umvir_support(uint64,(byte,byte[129]))byte`, `_reachp_0((uint64,address[3],(uint256,uint256,uint256)))void`, `_reachp_2((uint64,(byte,byte[138])))void`, `register(uint64,uint64,uint64)(uint256,uint256,uint256,address,byte)`]
    },
  GlobalNumByteSlice: 7,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCANAAGHA4EBCAMgiARgggGGA38JJgkgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQBAQEAAAECAQMBBAEFBWFwcElEMRhBAxsrZEkiWzUBIQRbNQIqZClkUCcEZFAnBWRQJwZkUCcHZFCCBgROb92CBGbkfKYEasP1IgTVCrF+BOdhhfAE88VKLTYaAI4GAAECvgBQAqoAmwgrADQBIQUSRIgImDQTJCVYNQs0EyEHIQhYNBMjIQpYUDQLV0EgNAtXASBQNAtXYSBQNAtXISBQNAtXAAFQUDUEMRkiEkSABBUffHU0BFCwI0M2GgE1CyEEryo0C1AhBK9QUDULIQU0ARJEiAg2NAsiWzUMNAtXCIs1EIAE2rZtjDQMFlA0EFCwNAyICAM0ECJVjQMHfAd/B4lC/2U2GgEXNhoCNQs1DCEEryk0DBY0C1BQUDULQv+sNBBXAYJJNQwiVY0GAsgCzgLUAxoDIAMmQv8uNAsiWzUYNAtXCIJJNRciVY0GBLgEvgTEBQoFEAUWQv8NNAsiWzUNJwg0DRZQAzEAEkQ0EyQlWEk1DldBIDQOVwEgUDQOV2EgUDQOVyEgUDQOVwABUDUMgAgAAAAAAAAMkDQMULA0DDUENA0WNAtXCAhQNAtXEAhQNQyABEZ05aw0DFCwMgY1EjQTVwABF0EGlTEZgQUSRIgHEyIyCjIJiAdENANA/tVC/sghBK8nBDQNFjQMFlA0CxZQUIFyr1BQNQtC/sw0CyJbNQw0C1cIYDUONAtXaGA1D4AEVMIG2jQMFlA0DlA0D1CwNAyIBs40D1cgIDUNNA9XACA1DDQPV0AgNQs0DSikNAwopBBBBhA0CzQMNA2giAaFqDUPNA80CyikEDQLMgOlEESAggEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANRQqNBRJUDQUUFAqNAxQMgpQNA1QNAtQUDQOUDIGIjURNRI1E0L+sIgFzoGgjQY0Bgg1BjYaATULQv7ZiAW6NhoBNQtC/ZoiMTQSRIEHMTUSRCIxNhJEIjE3EkSIBZqB8gWvIiI1AjUBKksBVwB/ZylLAVd/f2cnBEsBV/5/ZycFSwGB/QIhC1hnJwZLAYH8AyELWGcnB0yB+wSBd1hnKzQBFjQCFlBnMRkiEkSIBU1C/j80GkQ0EyEHIQhYNRghDK9JNRA1CyI1FTQYIQY0FQshBlg1FjQLKTQVFlA0CyJVIhIxADQWEhBNNQs0FSMISTUVIQUMQP/RNAsiVSMSRDQMIlWNBgD3AP0BAwFJAU8BVUL8aSM1GkL/mCM1GkL/kjQMVwGBSTULVwAgNRk0C1cgIDUYNAtXQCA1EDQZKKQ0GCikEEEAMTQQNBg0GaCIBJ2oNQs0CzQQKKQQNBAyA6UQNRpC/0wjNRpC/0YjNRpC/0AjNRpC/zoiNQtC/9Y0GUQ0EDULIjUNNBghBjQNCyEGWDUONAspNA0WUDQLIlUiEjEANA4SEE01CzQNIwhJNQ0hBQxA/9E0CyJVIxJEIzUNgAgAAAAAAAAImDQNFlEHCFCwNA0WUQcINQQ0E1cAATQTIyEKWCEErzQLiAQoFyEJCzQMXVA0EyQlWFA0GFAyBjUSNRNC/M8jNRlC/3AjNRlC/2o0DFcBgUk1C1cAIDUXNAtXICA1FjQLV0AgNRU0FyikNBYopBBBADE0FTQWNBegiAOpqDULNAs0FSikEDQVMgOlEDUZQv8kIzUZQv8eIzUZQv8YIzUZQv8SIjULQv/WNBZENBMhByEIWDUMNBghBQxEIQyvNQsiNQ00DCEGNA0LIQZYNQ40Cyk0DRZQNAsiVSISMQA0DhIQTTULNA0jCEk1DSEFDED/0TQLIlUjEkQ0GCEErzQLiANKFxNENBMjIQpYNQ00FwE0DSEJNBgLIQlYARJENA00GCEJCzQUXTULIzUOgAgAAAAAAAAKbzQOFlEHCFCwNA4WUQcINQQ0FyJVjQYAbQFJAXYBxgH6AhRC+lgjNRZC/0cjNRZC/0E0F1cBgUk1C1cAIDUVNAtXICA1EDQLV0AgNQw0FSikNBAopBBBADE0DDQQNBWgiAKMqDULNAs0DCikEDQMMgOlEDUWQv77IzUWQv71IzUWQv7vIzUWQv7pIjULQv/WNBdXAVhJNQ0iWzUWNA1XCCA1FTQNgShbNRA0DYEwWzUPNA1XOCA1DjQTJCVYNRcnCDQWFlADNQgyCng1CSsyCmA0CQkWNQqxIrIBgQayEDQWshiABODZW7WyGjQOSbIcsho0F1dBIDQXVwEgUDQXV2EgUDQXVyEgUDQXVwABULIaNBayMjQQsjI0D7IyszIKYDQJCTQKFwkWtwA+VwQAUDUNgAgAAAAAAAAKqDQNULA0DUk1DiJbNQ0iNA0SRDQTVwABNAtQNBdQNAxQMgY0ETQNCDURNRI1E0L6bCk0DVA0EyQlWFA0DFBJNQ5XAAE0C1A0DiQlWFA0DiEHIQhYUDIGNRI1E0L6PzQXVwGBNQ40E1cAATQNUDQOV4ABNA5XICBQNA5XYCBQNA5XACBQNA5XQCBQUDQMUEk1D1cAATQLUDQPJCVYUDQPIQchCFhQMgY1EjUTQvnvNBNXAAE0DVA0EyQlWFA0F1cBYFBJNQxXAAE0C1A0DCQlWFA0DCEHIQhYUDIGNRI1E0L5uzQTVwABNAtQNBMkJVhQNAxQMgY1EjUTQvmhMgpgMgp4CTQRCUk1DTQXVwEgiAC9NBNXAAE0C1A0EyQlWFA0DFAyBjQNNBEINA0JNRE1EjUTQvloIjUPQvn3NBQ0E1A0ERZQIQUyBkL63yKyASOyELIHsgiziUL4oDQQVwGKNQtC+LE0EFcBGDULQvjINhoBFzYaAhc2GgMXNQs1DDUNQvk8SIlMCUk1BjIJiAA/iQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiUkVIQZMCa9MUIkjNQOJNAY0B0oPQf+6Qv/CsUL/eUkiEkw0AhIRRIlJVwEATCJVTYlJVwCCNRRJIQmB6ARYNROB6gVbNRGJsbIJQv9K`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `22`,
    1000: `464`,
    1001: `465`,
    1002: `465`,
    1003: `466`,
    1004: `467`,
    1005: `467`,
    1006: `470`,
    1007: `470`,
    1008: `471`,
    1009: `471`,
    101: `23`,
    1010: `472`,
    1011: `472`,
    1012: `473`,
    1013: `474`,
    1014: `474`,
    1015: `475`,
    1016: `476`,
    1017: `476`,
    1018: `477`,
    1019: `477`,
    102: `23`,
    1020: `478`,
    1021: `479`,
    1022: `479`,
    1023: `480`,
    1024: `481`,
    1025: `482`,
    1026: `482`,
    1027: `483`,
    1028: `484`,
    1029: `485`,
    103: `24`,
    1030: `486`,
    1031: `487`,
    1032: `487`,
    1033: `488`,
    1034: `488`,
    1035: `489`,
    1036: `490`,
    1037: `491`,
    1038: `492`,
    1039: `492`,
    104: `25`,
    1040: `493`,
    1041: `493`,
    1042: `494`,
    1043: `495`,
    1044: `496`,
    1045: `497`,
    1046: `497`,
    1047: `498`,
    1048: `498`,
    1049: `499`,
    105: `26`,
    1050: `500`,
    1051: `500`,
    1052: `500`,
    1053: `502`,
    1054: `502`,
    1055: `503`,
    1056: `504`,
    1057: `505`,
    1058: `506`,
    1059: `507`,
    106: `26`,
    1060: `515`,
    1061: `515`,
    1062: `516`,
    1063: `517`,
    1064: `518`,
    1065: `518`,
    1066: `518`,
    1067: `518`,
    1068: `518`,
    1069: `518`,
    107: `27`,
    1070: `518`,
    1071: `518`,
    1072: `518`,
    1073: `518`,
    1074: `518`,
    1075: `518`,
    1076: `518`,
    1077: `518`,
    1078: `519`,
    1079: `519`,
    108: `28`,
    1080: `519`,
    1081: `521`,
    1082: `522`,
    1083: `522`,
    1084: `523`,
    1085: `523`,
    1086: `523`,
    1087: `525`,
    1088: `526`,
    1089: `526`,
    109: `29`,
    1090: `527`,
    1091: `527`,
    1092: `527`,
    1093: `529`,
    1094: `529`,
    1095: `530`,
    1096: `530`,
    1097: `530`,
    1098: `531`,
    1099: `532`,
    11: `2`,
    110: `29`,
    1100: `532`,
    1101: `533`,
    1102: `533`,
    1103: `533`,
    1104: `534`,
    1105: `534`,
    1106: `535`,
    1107: `535`,
    1108: `536`,
    1109: `536`,
    111: `30`,
    1110: `536`,
    1111: `537`,
    1112: `537`,
    1113: `538`,
    1114: `538`,
    1115: `539`,
    1116: `539`,
    1117: `539`,
    1118: `540`,
    1119: `540`,
    112: `31`,
    1120: `541`,
    1121: `541`,
    1122: `542`,
    1123: `543`,
    1124: `544`,
    1125: `544`,
    1126: `545`,
    1127: `546`,
    1128: `547`,
    1129: `548`,
    113: `33`,
    1130: `548`,
    1131: `548`,
    1132: `549`,
    1133: `549`,
    1134: `550`,
    1135: `550`,
    1136: `551`,
    1137: `551`,
    1138: `552`,
    1139: `553`,
    114: `33`,
    1140: `553`,
    1141: `553`,
    1142: `554`,
    1143: `555`,
    1144: `555`,
    1145: `557`,
    1146: `557`,
    1147: `558`,
    1148: `558`,
    1149: `559`,
    115: `33`,
    1150: `560`,
    1151: `561`,
    1152: `562`,
    1153: `562`,
    1154: `563`,
    1155: `563`,
    1156: `564`,
    1157: `565`,
    1158: `566`,
    1159: `566`,
    116: `33`,
    1160: `567`,
    1161: `567`,
    1162: `567`,
    1163: `569`,
    1164: `570`,
    1165: `570`,
    1166: `571`,
    1167: `571`,
    1168: `571`,
    1169: `573`,
    117: `33`,
    1170: `574`,
    1171: `574`,
    1172: `575`,
    1173: `575`,
    1174: `575`,
    1175: `577`,
    1176: `578`,
    1177: `578`,
    1178: `579`,
    1179: `579`,
    118: `33`,
    1180: `579`,
    1181: `581`,
    1182: `582`,
    1183: `582`,
    1184: `583`,
    1185: `583`,
    1186: `583`,
    1187: `585`,
    1188: `585`,
    1189: `586`,
    119: `33`,
    1190: `591`,
    1191: `591`,
    1192: `592`,
    1193: `592`,
    1194: `593`,
    1195: `594`,
    1196: `594`,
    1197: `597`,
    1198: `597`,
    1199: `598`,
    12: `2`,
    120: `33`,
    1200: `598`,
    1201: `599`,
    1202: `599`,
    1203: `600`,
    1204: `601`,
    1205: `601`,
    1206: `602`,
    1207: `603`,
    1208: `603`,
    1209: `604`,
    121: `33`,
    1210: `604`,
    1211: `605`,
    1212: `606`,
    1213: `606`,
    1214: `607`,
    1215: `608`,
    1216: `609`,
    1217: `609`,
    1218: `610`,
    1219: `611`,
    122: `33`,
    1220: `612`,
    1221: `613`,
    1222: `614`,
    1223: `614`,
    1224: `615`,
    1225: `615`,
    1226: `616`,
    1227: `617`,
    1228: `618`,
    1229: `619`,
    123: `33`,
    1230: `619`,
    1231: `620`,
    1232: `620`,
    1233: `621`,
    1234: `622`,
    1235: `623`,
    1236: `624`,
    1237: `624`,
    1238: `625`,
    1239: `625`,
    124: `33`,
    1240: `626`,
    1241: `627`,
    1242: `627`,
    1243: `627`,
    1244: `629`,
    1245: `629`,
    1246: `630`,
    1247: `631`,
    1248: `632`,
    1249: `633`,
    125: `33`,
    1250: `634`,
    1251: `640`,
    1252: `641`,
    1253: `641`,
    1254: `642`,
    1255: `642`,
    1256: `642`,
    1257: `642`,
    1258: `642`,
    1259: `642`,
    126: `33`,
    1260: `642`,
    1261: `642`,
    1262: `642`,
    1263: `642`,
    1264: `643`,
    1265: `643`,
    1266: `644`,
    1267: `645`,
    1268: `645`,
    1269: `645`,
    127: `33`,
    1270: `646`,
    1271: `647`,
    1272: `648`,
    1273: `648`,
    1274: `649`,
    1275: `650`,
    1276: `650`,
    1277: `650`,
    1278: `651`,
    1279: `651`,
    128: `33`,
    1280: `652`,
    1281: `652`,
    1282: `653`,
    1283: `653`,
    1284: `653`,
    1285: `654`,
    1286: `654`,
    1287: `655`,
    1288: `656`,
    1289: `656`,
    129: `33`,
    1290: `657`,
    1291: `658`,
    1292: `658`,
    1293: `659`,
    1294: `660`,
    1295: `660`,
    1296: `661`,
    1297: `661`,
    1298: `661`,
    1299: `662`,
    13: `2`,
    130: `33`,
    1300: `663`,
    1301: `663`,
    1302: `664`,
    1303: `665`,
    1304: `665`,
    1305: `666`,
    1306: `667`,
    1307: `668`,
    1308: `668`,
    1309: `669`,
    131: `33`,
    1310: `670`,
    1311: `671`,
    1312: `672`,
    1313: `673`,
    1314: `673`,
    1315: `674`,
    1316: `675`,
    1317: `675`,
    1318: `676`,
    1319: `676`,
    132: `33`,
    1320: `677`,
    1321: `677`,
    1322: `678`,
    1323: `678`,
    1324: `678`,
    1325: `680`,
    1326: `681`,
    1327: `681`,
    1328: `682`,
    1329: `682`,
    133: `33`,
    1330: `682`,
    1331: `684`,
    1332: `685`,
    1333: `685`,
    1334: `686`,
    1335: `686`,
    1336: `686`,
    1337: `688`,
    1338: `688`,
    1339: `689`,
    134: `33`,
    1340: `689`,
    1341: `689`,
    1342: `690`,
    1343: `691`,
    1344: `691`,
    1345: `692`,
    1346: `692`,
    1347: `692`,
    1348: `693`,
    1349: `693`,
    135: `33`,
    1350: `694`,
    1351: `694`,
    1352: `695`,
    1353: `695`,
    1354: `695`,
    1355: `696`,
    1356: `696`,
    1357: `697`,
    1358: `697`,
    1359: `698`,
    136: `33`,
    1360: `698`,
    1361: `698`,
    1362: `699`,
    1363: `699`,
    1364: `700`,
    1365: `700`,
    1366: `701`,
    1367: `702`,
    1368: `703`,
    1369: `703`,
    137: `33`,
    1370: `704`,
    1371: `705`,
    1372: `706`,
    1373: `707`,
    1374: `707`,
    1375: `707`,
    1376: `708`,
    1377: `708`,
    1378: `709`,
    1379: `709`,
    138: `33`,
    1380: `710`,
    1381: `710`,
    1382: `711`,
    1383: `712`,
    1384: `712`,
    1385: `712`,
    1386: `713`,
    1387: `714`,
    1388: `714`,
    1389: `716`,
    139: `33`,
    1390: `716`,
    1391: `717`,
    1392: `717`,
    1393: `718`,
    1394: `719`,
    1395: `720`,
    1396: `721`,
    1397: `721`,
    1398: `722`,
    1399: `722`,
    14: `2`,
    140: `33`,
    1400: `723`,
    1401: `724`,
    1402: `725`,
    1403: `725`,
    1404: `726`,
    1405: `726`,
    1406: `726`,
    1407: `728`,
    1408: `729`,
    1409: `729`,
    141: `33`,
    1410: `730`,
    1411: `730`,
    1412: `730`,
    1413: `732`,
    1414: `733`,
    1415: `733`,
    1416: `734`,
    1417: `734`,
    1418: `734`,
    1419: `736`,
    142: `33`,
    1420: `737`,
    1421: `737`,
    1422: `738`,
    1423: `738`,
    1424: `738`,
    1425: `740`,
    1426: `741`,
    1427: `741`,
    1428: `742`,
    1429: `742`,
    143: `33`,
    1430: `742`,
    1431: `744`,
    1432: `744`,
    1433: `745`,
    1434: `750`,
    1435: `750`,
    1436: `751`,
    1437: `751`,
    1438: `752`,
    1439: `752`,
    144: `33`,
    1440: `753`,
    1441: `754`,
    1442: `754`,
    1443: `755`,
    1444: `755`,
    1445: `756`,
    1446: `756`,
    1447: `757`,
    1448: `758`,
    1449: `763`,
    145: `34`,
    1450: `763`,
    1451: `764`,
    1452: `765`,
    1453: `765`,
    1454: `766`,
    1455: `767`,
    1456: `767`,
    1457: `770`,
    1458: `770`,
    1459: `771`,
    146: `34`,
    1460: `771`,
    1461: `772`,
    1462: `772`,
    1463: `773`,
    1464: `774`,
    1465: `774`,
    1466: `775`,
    1467: `776`,
    1468: `776`,
    1469: `777`,
    147: `34`,
    1470: `777`,
    1471: `778`,
    1472: `779`,
    1473: `779`,
    1474: `780`,
    1475: `781`,
    1476: `782`,
    1477: `782`,
    1478: `783`,
    1479: `784`,
    148: `35`,
    1480: `785`,
    1481: `786`,
    1482: `787`,
    1483: `787`,
    1484: `788`,
    1485: `788`,
    1486: `789`,
    1487: `790`,
    1488: `791`,
    1489: `792`,
    149: `35`,
    1490: `792`,
    1491: `793`,
    1492: `793`,
    1493: `794`,
    1494: `795`,
    1495: `796`,
    1496: `797`,
    1497: `797`,
    1498: `798`,
    1499: `798`,
    15: `2`,
    150: `35`,
    1500: `799`,
    1501: `800`,
    1502: `800`,
    1503: `800`,
    1504: `802`,
    1505: `802`,
    1506: `803`,
    1507: `804`,
    1508: `805`,
    1509: `806`,
    151: `35`,
    1510: `807`,
    1511: `813`,
    1512: `813`,
    1513: `814`,
    1514: `814`,
    1515: `815`,
    1516: `816`,
    1517: `816`,
    1518: `817`,
    1519: `817`,
    152: `35`,
    1520: `817`,
    1521: `818`,
    1522: `819`,
    1523: `820`,
    1524: `825`,
    1525: `825`,
    1526: `826`,
    1527: `827`,
    1528: `827`,
    1529: `828`,
    153: `35`,
    1530: `829`,
    1531: `829`,
    1532: `830`,
    1533: `830`,
    1534: `831`,
    1535: `832`,
    1536: `832`,
    1537: `833`,
    1538: `833`,
    1539: `834`,
    154: `35`,
    1540: `834`,
    1541: `835`,
    1542: `836`,
    1543: `836`,
    1544: `837`,
    1545: `838`,
    1546: `839`,
    1547: `840`,
    1548: `845`,
    1549: `845`,
    155: `35`,
    1550: `846`,
    1551: `846`,
    1552: `847`,
    1553: `847`,
    1554: `848`,
    1555: `849`,
    1556: `849`,
    1557: `850`,
    1558: `851`,
    1559: `851`,
    156: `35`,
    1560: `852`,
    1561: `853`,
    1562: `853`,
    1563: `854`,
    1564: `854`,
    1565: `854`,
    1566: `854`,
    1567: `854`,
    1568: `854`,
    1569: `854`,
    157: `35`,
    1570: `854`,
    1571: `854`,
    1572: `854`,
    1573: `855`,
    1574: `855`,
    1575: `856`,
    1576: `857`,
    1577: `857`,
    1578: `857`,
    1579: `858`,
    158: `35`,
    1580: `859`,
    1581: `860`,
    1582: `860`,
    1583: `861`,
    1584: `862`,
    1585: `862`,
    1586: `862`,
    1587: `863`,
    1588: `863`,
    1589: `864`,
    159: `35`,
    1590: `864`,
    1591: `865`,
    1592: `866`,
    1593: `867`,
    1594: `867`,
    1595: `867`,
    1596: `867`,
    1597: `867`,
    1598: `867`,
    1599: `867`,
    16: `2`,
    160: `35`,
    1600: `867`,
    1601: `867`,
    1602: `867`,
    1603: `867`,
    1604: `867`,
    1605: `867`,
    1606: `867`,
    1607: `868`,
    1608: `868`,
    1609: `868`,
    161: `35`,
    1610: `870`,
    1611: `871`,
    1612: `871`,
    1613: `872`,
    1614: `872`,
    1615: `872`,
    1616: `874`,
    1617: `875`,
    1618: `875`,
    1619: `876`,
    162: `37`,
    1620: `876`,
    1621: `876`,
    1622: `878`,
    1623: `878`,
    1624: `879`,
    1625: `879`,
    1626: `879`,
    1627: `880`,
    1628: `881`,
    1629: `881`,
    163: `40`,
    1630: `882`,
    1631: `882`,
    1632: `882`,
    1633: `883`,
    1634: `883`,
    1635: `884`,
    1636: `884`,
    1637: `885`,
    1638: `885`,
    1639: `885`,
    164: `40`,
    1640: `886`,
    1641: `886`,
    1642: `887`,
    1643: `887`,
    1644: `888`,
    1645: `888`,
    1646: `888`,
    1647: `889`,
    1648: `889`,
    1649: `890`,
    165: `41`,
    1650: `890`,
    1651: `891`,
    1652: `892`,
    1653: `893`,
    1654: `893`,
    1655: `894`,
    1656: `895`,
    1657: `896`,
    1658: `897`,
    1659: `897`,
    166: `41`,
    1660: `897`,
    1661: `898`,
    1662: `898`,
    1663: `899`,
    1664: `899`,
    1665: `900`,
    1666: `900`,
    1667: `901`,
    1668: `902`,
    1669: `902`,
    167: `42`,
    1670: `902`,
    1671: `903`,
    1672: `904`,
    1673: `904`,
    1674: `906`,
    1675: `906`,
    1676: `907`,
    1677: `907`,
    1678: `908`,
    1679: `909`,
    168: `43`,
    1680: `910`,
    1681: `911`,
    1682: `911`,
    1683: `912`,
    1684: `912`,
    1685: `913`,
    1686: `914`,
    1687: `915`,
    1688: `915`,
    1689: `916`,
    169: `46`,
    1690: `916`,
    1691: `916`,
    1692: `918`,
    1693: `919`,
    1694: `919`,
    1695: `920`,
    1696: `920`,
    1697: `920`,
    1698: `922`,
    1699: `923`,
    17: `2`,
    170: `46`,
    1700: `923`,
    1701: `924`,
    1702: `924`,
    1703: `924`,
    1704: `926`,
    1705: `927`,
    1706: `927`,
    1707: `928`,
    1708: `928`,
    1709: `928`,
    171: `46`,
    1710: `930`,
    1711: `931`,
    1712: `931`,
    1713: `932`,
    1714: `932`,
    1715: `932`,
    1716: `934`,
    1717: `934`,
    1718: `935`,
    1719: `935`,
    172: `47`,
    1720: `935`,
    1721: `936`,
    1722: `937`,
    1723: `937`,
    1724: `938`,
    1725: `939`,
    1726: `940`,
    1727: `940`,
    1728: `941`,
    1729: `941`,
    173: `47`,
    1730: `942`,
    1731: `942`,
    1732: `942`,
    1733: `943`,
    1734: `943`,
    1735: `944`,
    1736: `944`,
    1737: `945`,
    1738: `945`,
    1739: `946`,
    174: `48`,
    1740: `947`,
    1741: `947`,
    1742: `948`,
    1743: `948`,
    1744: `949`,
    1745: `949`,
    1746: `950`,
    1747: `951`,
    1748: `951`,
    1749: `952`,
    175: `49`,
    1750: `952`,
    1751: `953`,
    1752: `953`,
    1753: `953`,
    1754: `954`,
    1755: `954`,
    1756: `955`,
    1757: `955`,
    1758: `956`,
    1759: `957`,
    176: `50`,
    1760: `958`,
    1761: `959`,
    1762: `959`,
    1763: `960`,
    1764: `960`,
    1765: `961`,
    1766: `961`,
    1767: `962`,
    1768: `963`,
    1769: `964`,
    177: `51`,
    1770: `965`,
    1771: `965`,
    1772: `966`,
    1773: `966`,
    1774: `967`,
    1775: `968`,
    1776: `968`,
    1777: `969`,
    1778: `970`,
    1779: `970`,
    178: `51`,
    1780: `971`,
    1781: `972`,
    1782: `972`,
    1783: `973`,
    1784: `974`,
    1785: `975`,
    1786: `975`,
    1787: `976`,
    1788: `977`,
    1789: `978`,
    179: `52`,
    1790: `978`,
    1791: `979`,
    1792: `979`,
    1793: `980`,
    1794: `980`,
    1795: `981`,
    1796: `981`,
    1797: `983`,
    1798: `983`,
    1799: `984`,
    18: `2`,
    180: `52`,
    1800: `984`,
    1801: `984`,
    1802: `984`,
    1803: `984`,
    1804: `984`,
    1805: `985`,
    1806: `985`,
    1807: `986`,
    1808: `986`,
    1809: `988`,
    181: `53`,
    1810: `989`,
    1811: `989`,
    1812: `990`,
    1813: `990`,
    1814: `991`,
    1815: `991`,
    1816: `992`,
    1817: `992`,
    1818: `992`,
    1819: `993`,
    182: `53`,
    1820: `993`,
    1821: `994`,
    1822: `994`,
    1823: `994`,
    1824: `995`,
    1825: `996`,
    1826: `996`,
    1827: `997`,
    1828: `997`,
    1829: `997`,
    183: `54`,
    1830: `998`,
    1831: `999`,
    1832: `999`,
    1833: `1000`,
    1834: `1000`,
    1835: `1000`,
    1836: `1001`,
    1837: `1002`,
    1838: `1002`,
    1839: `1003`,
    184: `54`,
    1840: `1003`,
    1841: `1003`,
    1842: `1004`,
    1843: `1005`,
    1844: `1005`,
    1845: `1010`,
    1846: `1010`,
    1847: `1011`,
    1848: `1011`,
    1849: `1013`,
    185: `55`,
    1850: `1013`,
    1851: `1014`,
    1852: `1014`,
    1853: `1016`,
    1854: `1016`,
    1855: `1017`,
    1856: `1017`,
    1857: `1018`,
    1858: `1025`,
    1859: `1025`,
    186: `56`,
    1860: `1026`,
    1861: `1027`,
    1862: `1027`,
    1863: `1028`,
    1864: `1029`,
    1865: `1029`,
    1866: `1030`,
    1867: `1031`,
    1868: `1032`,
    1869: `1033`,
    187: `56`,
    1870: `1033`,
    1871: `1033`,
    1872: `1034`,
    1873: `1034`,
    1874: `1034`,
    1875: `1035`,
    1876: `1036`,
    1877: `1036`,
    1878: `1037`,
    1879: `1037`,
    188: `57`,
    1880: `1037`,
    1881: `1037`,
    1882: `1037`,
    1883: `1037`,
    1884: `1037`,
    1885: `1037`,
    1886: `1037`,
    1887: `1037`,
    1888: `1038`,
    1889: `1038`,
    189: `58`,
    1890: `1039`,
    1891: `1040`,
    1892: `1041`,
    1893: `1041`,
    1894: `1042`,
    1895: `1043`,
    1896: `1043`,
    1897: `1044`,
    1898: `1045`,
    1899: `1046`,
    19: `2`,
    190: `58`,
    1900: `1046`,
    1901: `1047`,
    1902: `1048`,
    1903: `1048`,
    1904: `1049`,
    1905: `1050`,
    1906: `1057`,
    1907: `1057`,
    1908: `1058`,
    1909: `1058`,
    191: `59`,
    1910: `1058`,
    1911: `1059`,
    1912: `1059`,
    1913: `1060`,
    1914: `1061`,
    1915: `1061`,
    1916: `1062`,
    1917: `1063`,
    1918: `1063`,
    1919: `1064`,
    192: `60`,
    1920: `1065`,
    1921: `1065`,
    1922: `1066`,
    1923: `1066`,
    1924: `1067`,
    1925: `1067`,
    1926: `1068`,
    1927: `1069`,
    1928: `1069`,
    1929: `1070`,
    193: `61`,
    1930: `1070`,
    1931: `1071`,
    1932: `1071`,
    1933: `1072`,
    1934: `1072`,
    1935: `1072`,
    1936: `1074`,
    1937: `1075`,
    1938: `1075`,
    1939: `1076`,
    194: `61`,
    1940: `1077`,
    1941: `1077`,
    1942: `1078`,
    1943: `1079`,
    1944: `1080`,
    1945: `1081`,
    1946: `1082`,
    1947: `1082`,
    1948: `1083`,
    1949: `1084`,
    195: `62`,
    1950: `1085`,
    1951: `1085`,
    1952: `1086`,
    1953: `1086`,
    1954: `1086`,
    1955: `1087`,
    1956: `1087`,
    1957: `1088`,
    1958: `1089`,
    1959: `1089`,
    196: `62`,
    1960: `1090`,
    1961: `1091`,
    1962: `1092`,
    1963: `1093`,
    1964: `1094`,
    1965: `1094`,
    1966: `1095`,
    1967: `1095`,
    1968: `1096`,
    1969: `1096`,
    197: `62`,
    1970: `1097`,
    1971: `1098`,
    1972: `1099`,
    1973: `1099`,
    1974: `1100`,
    1975: `1100`,
    1976: `1101`,
    1977: `1101`,
    1978: `1102`,
    1979: `1102`,
    198: `63`,
    1980: `1102`,
    1981: `1104`,
    1982: `1104`,
    1983: `1105`,
    1984: `1105`,
    1985: `1105`,
    1986: `1106`,
    1987: `1106`,
    1988: `1107`,
    1989: `1107`,
    199: `63`,
    1990: `1108`,
    1991: `1108`,
    1992: `1108`,
    1993: `1109`,
    1994: `1109`,
    1995: `1110`,
    1996: `1111`,
    1997: `1111`,
    1998: `1112`,
    1999: `1112`,
    2: `2`,
    20: `2`,
    200: `64`,
    2000: `1112`,
    2001: `1113`,
    2002: `1113`,
    2003: `1114`,
    2004: `1114`,
    2005: `1114`,
    2006: `1115`,
    2007: `1116`,
    2008: `1116`,
    2009: `1117`,
    201: `64`,
    2010: `1117`,
    2011: `1117`,
    2012: `1118`,
    2013: `1119`,
    2014: `1119`,
    2015: `1120`,
    2016: `1120`,
    2017: `1120`,
    2018: `1121`,
    2019: `1122`,
    202: `64`,
    2020: `1122`,
    2021: `1123`,
    2022: `1123`,
    2023: `1123`,
    2024: `1124`,
    2025: `1125`,
    2026: `1126`,
    2027: `1126`,
    2028: `1127`,
    2029: `1128`,
    203: `65`,
    2030: `1129`,
    2031: `1129`,
    2032: `1130`,
    2033: `1130`,
    2034: `1130`,
    2035: `1131`,
    2036: `1131`,
    2037: `1132`,
    2038: `1133`,
    2039: `1133`,
    204: `66`,
    2040: `1134`,
    2041: `1135`,
    2042: `1136`,
    2043: `1137`,
    2044: `1138`,
    2045: `1138`,
    2046: `1139`,
    2047: `1139`,
    2048: `1140`,
    2049: `1140`,
    205: `66`,
    2050: `1141`,
    2051: `1142`,
    2052: `1143`,
    2053: `1143`,
    2054: `1144`,
    2055: `1144`,
    2056: `1145`,
    2057: `1145`,
    2058: `1146`,
    2059: `1146`,
    206: `67`,
    2060: `1146`,
    2061: `1148`,
    2062: `1148`,
    2063: `1149`,
    2064: `1149`,
    2065: `1149`,
    2066: `1150`,
    2067: `1150`,
    2068: `1151`,
    2069: `1152`,
    207: `67`,
    2070: `1152`,
    2071: `1153`,
    2072: `1154`,
    2073: `1155`,
    2074: `1156`,
    2075: `1157`,
    2076: `1157`,
    2077: `1158`,
    2078: `1158`,
    2079: `1158`,
    208: `67`,
    2080: `1159`,
    2081: `1160`,
    2082: `1161`,
    2083: `1161`,
    2084: `1162`,
    2085: `1162`,
    2086: `1162`,
    2087: `1163`,
    2088: `1163`,
    2089: `1164`,
    209: `68`,
    2090: `1165`,
    2091: `1165`,
    2092: `1166`,
    2093: `1167`,
    2094: `1168`,
    2095: `1169`,
    2096: `1170`,
    2097: `1170`,
    2098: `1171`,
    2099: `1171`,
    21: `2`,
    210: `69`,
    2100: `1172`,
    2101: `1172`,
    2102: `1173`,
    2103: `1174`,
    2104: `1175`,
    2105: `1175`,
    2106: `1176`,
    2107: `1176`,
    2108: `1177`,
    2109: `1177`,
    211: `69`,
    2110: `1178`,
    2111: `1178`,
    2112: `1178`,
    2113: `1180`,
    2114: `1180`,
    2115: `1181`,
    2116: `1181`,
    2117: `1181`,
    2118: `1182`,
    2119: `1182`,
    212: `70`,
    2120: `1183`,
    2121: `1184`,
    2122: `1184`,
    2123: `1185`,
    2124: `1186`,
    2125: `1187`,
    2126: `1188`,
    2127: `1189`,
    2128: `1189`,
    2129: `1190`,
    213: `70`,
    2130: `1191`,
    2131: `1191`,
    2132: `1192`,
    2133: `1192`,
    2134: `1193`,
    2135: `1193`,
    2136: `1194`,
    2137: `1194`,
    2138: `1194`,
    2139: `1196`,
    214: `70`,
    2140: `1196`,
    2141: `1197`,
    2142: `1198`,
    2143: `1198`,
    2144: `1199`,
    2145: `1200`,
    2146: `1201`,
    2147: `1201`,
    2148: `1202`,
    2149: `1204`,
    215: `71`,
    2150: `1205`,
    2151: `1205`,
    2152: `1207`,
    2153: `1207`,
    2154: `1208`,
    2155: `1208`,
    2156: `1208`,
    2157: `1209`,
    2158: `1209`,
    2159: `1209`,
    216: `72`,
    2160: `1210`,
    2161: `1210`,
    2162: `1211`,
    2163: `1211`,
    2164: `1211`,
    2165: `1212`,
    2166: `1212`,
    2167: `1213`,
    2168: `1214`,
    2169: `1214`,
    217: `72`,
    2170: `1215`,
    2171: `1216`,
    2172: `1217`,
    2173: `1218`,
    2174: `1219`,
    2175: `1219`,
    2176: `1220`,
    2177: `1221`,
    2178: `1221`,
    2179: `1222`,
    218: `73`,
    2180: `1222`,
    2181: `1223`,
    2182: `1223`,
    2183: `1224`,
    2184: `1225`,
    2185: `1225`,
    2186: `1226`,
    2187: `1227`,
    2188: `1227`,
    2189: `1228`,
    219: `73`,
    2190: `1228`,
    2191: `1229`,
    2192: `1229`,
    2193: `1230`,
    2194: `1230`,
    2195: `1230`,
    2196: `1232`,
    2197: `1233`,
    2198: `1233`,
    2199: `1234`,
    22: `2`,
    220: `73`,
    2200: `1234`,
    2201: `1234`,
    2202: `1237`,
    2203: `1237`,
    2204: `1238`,
    2205: `1238`,
    2206: `1239`,
    2207: `1240`,
    2208: `1240`,
    2209: `1241`,
    221: `74`,
    2210: `1242`,
    2211: `1243`,
    2212: `1243`,
    2213: `1244`,
    2214: `1244`,
    2215: `1245`,
    2216: `1245`,
    2217: `1245`,
    2218: `1247`,
    2219: `1248`,
    222: `75`,
    2220: `1248`,
    2221: `1249`,
    2222: `1250`,
    2223: `1250`,
    2224: `1251`,
    2225: `1251`,
    2226: `1252`,
    2227: `1252`,
    2228: `1253`,
    2229: `1254`,
    223: `76`,
    2230: `1256`,
    2231: `1256`,
    2232: `1256`,
    2233: `1258`,
    2234: `1258`,
    2235: `1259`,
    2236: `1259`,
    2237: `1259`,
    2238: `1260`,
    2239: `1260`,
    224: `76`,
    2240: `1261`,
    2241: `1261`,
    2242: `1261`,
    2243: `1263`,
    2244: `1263`,
    2245: `1264`,
    2246: `1264`,
    2247: `1264`,
    2248: `1265`,
    2249: `1265`,
    225: `78`,
    2250: `1266`,
    2251: `1266`,
    2252: `1266`,
    2253: `1268`,
    2254: `1268`,
    2255: `1268`,
    2256: `1269`,
    2257: `1270`,
    2258: `1270`,
    2259: `1270`,
    226: `78`,
    2260: `1271`,
    2261: `1272`,
    2262: `1272`,
    2263: `1272`,
    2264: `1273`,
    2265: `1274`,
    2266: `1274`,
    2267: `1275`,
    2268: `1275`,
    2269: `1276`,
    227: `79`,
    2270: `1276`,
    2271: `1277`,
    2272: `1277`,
    2273: `1277`,
    2274: `1279`,
    2275: `1280`,
    2276: `1282`,
    2277: `1283`,
    2278: `1284`,
    2279: `1285`,
    228: `80`,
    2280: `1285`,
    2281: `1286`,
    2282: `1286`,
    2283: `1287`,
    2284: `1287`,
    2285: `1287`,
    2286: `1288`,
    2287: `1290`,
    2288: `1291`,
    2289: `1292`,
    229: `81`,
    2290: `1292`,
    2291: `1292`,
    2292: `1293`,
    2293: `1294`,
    2294: `1294`,
    2295: `1297`,
    2296: `1297`,
    2297: `1298`,
    2298: `1298`,
    2299: `1299`,
    23: `2`,
    230: `84`,
    2300: `1300`,
    2301: `1301`,
    2302: `1302`,
    2303: `1302`,
    2304: `1303`,
    2305: `1304`,
    2306: `1304`,
    2307: `1305`,
    2308: `1305`,
    2309: `1306`,
    231: `84`,
    2310: `1306`,
    2311: `1307`,
    2312: `1308`,
    2313: `1309`,
    2314: `1309`,
    2315: `1310`,
    2316: `1311`,
    2317: `1312`,
    2318: `1313`,
    2319: `1313`,
    232: `84`,
    2320: `1314`,
    2321: `1315`,
    2322: `1316`,
    2323: `1318`,
    2324: `1319`,
    2325: `1320`,
    2326: `1320`,
    2327: `1321`,
    2328: `1322`,
    2329: `1323`,
    233: `84`,
    2330: `1324`,
    2331: `1325`,
    2332: `1326`,
    2333: `1328`,
    2334: `1329`,
    2335: `1329`,
    2336: `1330`,
    2337: `1332`,
    2338: `1332`,
    2339: `1333`,
    234: `84`,
    2340: `1333`,
    2341: `1334`,
    2342: `1335`,
    2343: `1336`,
    2344: `1336`,
    2345: `1336`,
    2346: `1337`,
    2347: `1337`,
    2348: `1337`,
    2349: `1339`,
    235: `84`,
    2350: `1340`,
    2351: `1340`,
    2352: `1340`,
    2353: `1342`,
    2354: `1343`,
    2355: `1344`,
    2356: `1345`,
    2357: `1346`,
    2358: `1346`,
    2359: `1347`,
    236: `85`,
    2360: `1348`,
    2361: `1349`,
    2362: `1350`,
    2363: `1352`,
    2364: `1353`,
    2365: `1353`,
    2366: `1353`,
    2367: `1354`,
    2368: `1355`,
    2369: `1356`,
    237: `85`,
    2370: `1357`,
    2371: `1358`,
    2372: `1360`,
    2373: `1361`,
    2374: `1361`,
    2375: `1361`,
    2376: `1362`,
    2377: `1362`,
    2378: `1363`,
    2379: `1364`,
    238: `86`,
    2380: `1364`,
    2381: `1365`,
    2382: `1365`,
    2383: `1365`,
    2384: `1366`,
    2385: `1367`,
    2386: `1367`,
    2387: `1368`,
    2388: `1368`,
    2389: `1368`,
    239: `87`,
    2390: `1369`,
    2391: `1370`,
    2392: `1370`,
    2393: `1371`,
    2394: `1373`,
    2395: `1374`,
    2396: `1374`,
    2397: `1375`,
    24: `2`,
    240: `89`,
    241: `90`,
    242: `92`,
    243: `92`,
    244: `92`,
    245: `93`,
    246: `93`,
    247: `95`,
    248: `95`,
    249: `96`,
    25: `2`,
    250: `97`,
    251: `98`,
    252: `98`,
    253: `99`,
    254: `100`,
    255: `100`,
    256: `101`,
    257: `102`,
    258: `103`,
    259: `104`,
    26: `2`,
    260: `104`,
    261: `106`,
    262: `106`,
    263: `107`,
    264: `107`,
    265: `108`,
    266: `109`,
    267: `110`,
    268: `110`,
    269: `110`,
    27: `2`,
    270: `111`,
    271: `111`,
    272: `112`,
    273: `113`,
    274: `114`,
    275: `114`,
    276: `115`,
    277: `115`,
    278: `116`,
    279: `116`,
    28: `2`,
    280: `116`,
    281: `117`,
    282: `117`,
    283: `118`,
    284: `118`,
    285: `118`,
    286: `118`,
    287: `118`,
    288: `118`,
    289: `119`,
    29: `2`,
    290: `119`,
    291: `120`,
    292: `121`,
    293: `122`,
    294: `122`,
    295: `123`,
    296: `124`,
    297: `126`,
    298: `126`,
    299: `127`,
    3: `2`,
    30: `2`,
    300: `127`,
    301: `127`,
    302: `128`,
    303: `128`,
    304: `129`,
    305: `130`,
    306: `131`,
    307: `131`,
    308: `131`,
    309: `131`,
    31: `2`,
    310: `131`,
    311: `131`,
    312: `131`,
    313: `131`,
    314: `132`,
    315: `132`,
    316: `132`,
    317: `134`,
    318: `134`,
    319: `134`,
    32: `2`,
    320: `135`,
    321: `136`,
    322: `136`,
    323: `136`,
    324: `137`,
    325: `137`,
    326: `138`,
    327: `138`,
    328: `140`,
    329: `140`,
    33: `2`,
    330: `141`,
    331: `142`,
    332: `143`,
    333: `143`,
    334: `144`,
    335: `145`,
    336: `145`,
    337: `146`,
    338: `147`,
    339: `148`,
    34: `2`,
    340: `149`,
    341: `149`,
    342: `150`,
    343: `150`,
    344: `150`,
    345: `152`,
    346: `152`,
    347: `153`,
    348: `153`,
    349: `153`,
    35: `2`,
    350: `154`,
    351: `155`,
    352: `155`,
    353: `156`,
    354: `157`,
    355: `158`,
    356: `158`,
    357: `158`,
    358: `158`,
    359: `158`,
    36: `2`,
    360: `158`,
    361: `158`,
    362: `158`,
    363: `158`,
    364: `158`,
    365: `158`,
    366: `158`,
    367: `158`,
    368: `158`,
    369: `159`,
    37: `2`,
    370: `159`,
    371: `159`,
    372: `161`,
    373: `161`,
    374: `162`,
    375: `163`,
    376: `164`,
    377: `164`,
    378: `165`,
    379: `165`,
    38: `2`,
    380: `166`,
    381: `166`,
    382: `166`,
    383: `167`,
    384: `168`,
    385: `168`,
    386: `169`,
    387: `170`,
    388: `171`,
    389: `171`,
    39: `2`,
    390: `171`,
    391: `171`,
    392: `171`,
    393: `171`,
    394: `171`,
    395: `171`,
    396: `171`,
    397: `171`,
    398: `171`,
    399: `171`,
    4: `2`,
    40: `2`,
    400: `171`,
    401: `171`,
    402: `172`,
    403: `172`,
    404: `172`,
    405: `174`,
    406: `174`,
    407: `175`,
    408: `176`,
    409: `177`,
    41: `2`,
    410: `177`,
    411: `178`,
    412: `178`,
    413: `179`,
    414: `179`,
    415: `180`,
    416: `181`,
    417: `182`,
    418: `183`,
    419: `183`,
    42: `2`,
    420: `184`,
    421: `185`,
    422: `193`,
    423: `193`,
    424: `194`,
    425: `195`,
    426: `196`,
    427: `197`,
    428: `198`,
    429: `198`,
    43: `2`,
    430: `199`,
    431: `199`,
    432: `199`,
    433: `200`,
    434: `200`,
    435: `201`,
    436: `201`,
    437: `201`,
    438: `202`,
    439: `203`,
    44: `2`,
    440: `203`,
    441: `204`,
    442: `204`,
    443: `204`,
    444: `205`,
    445: `206`,
    446: `206`,
    447: `207`,
    448: `207`,
    449: `207`,
    45: `2`,
    450: `208`,
    451: `209`,
    452: `209`,
    453: `210`,
    454: `210`,
    455: `210`,
    456: `211`,
    457: `212`,
    458: `212`,
    459: `213`,
    46: `2`,
    460: `213`,
    461: `213`,
    462: `213`,
    463: `213`,
    464: `213`,
    465: `213`,
    466: `213`,
    467: `213`,
    468: `213`,
    469: `214`,
    47: `2`,
    470: `214`,
    471: `215`,
    472: `216`,
    473: `217`,
    474: `217`,
    475: `218`,
    476: `218`,
    477: `219`,
    478: `219`,
    479: `220`,
    48: `2`,
    480: `221`,
    481: `221`,
    482: `222`,
    483: `222`,
    484: `222`,
    485: `223`,
    486: `224`,
    487: `224`,
    488: `225`,
    489: `225`,
    49: `2`,
    490: `225`,
    491: `226`,
    492: `227`,
    493: `227`,
    494: `228`,
    495: `228`,
    496: `228`,
    497: `228`,
    498: `228`,
    499: `228`,
    5: `2`,
    50: `2`,
    500: `229`,
    501: `229`,
    502: `230`,
    503: `231`,
    504: `233`,
    505: `233`,
    506: `234`,
    507: `234`,
    508: `236`,
    509: `236`,
    51: `2`,
    510: `237`,
    511: `237`,
    512: `237`,
    513: `238`,
    514: `239`,
    515: `239`,
    516: `239`,
    517: `241`,
    518: `241`,
    519: `242`,
    52: `2`,
    520: `242`,
    521: `243`,
    522: `244`,
    523: `246`,
    524: `246`,
    525: `246`,
    526: `248`,
    527: `249`,
    528: `249`,
    529: `250`,
    53: `2`,
    530: `250`,
    531: `251`,
    532: `251`,
    533: `251`,
    534: `253`,
    535: `253`,
    536: `254`,
    537: `254`,
    538: `254`,
    539: `255`,
    54: `2`,
    540: `255`,
    541: `255`,
    542: `257`,
    543: `257`,
    544: `258`,
    545: `259`,
    546: `259`,
    547: `260`,
    548: `260`,
    549: `261`,
    55: `2`,
    550: `262`,
    551: `262`,
    552: `263`,
    553: `264`,
    554: `265`,
    555: `265`,
    556: `266`,
    557: `267`,
    558: `268`,
    559: `269`,
    56: `2`,
    560: `269`,
    561: `270`,
    562: `271`,
    563: `272`,
    564: `273`,
    565: `273`,
    566: `274`,
    567: `274`,
    568: `274`,
    569: `276`,
    57: `2`,
    570: `276`,
    571: `277`,
    572: `278`,
    573: `279`,
    574: `279`,
    575: `280`,
    576: `280`,
    577: `281`,
    578: `281`,
    579: `281`,
    58: `2`,
    580: `282`,
    581: `282`,
    582: `283`,
    583: `283`,
    584: `284`,
    585: `284`,
    586: `284`,
    587: `285`,
    588: `285`,
    589: `286`,
    59: `2`,
    590: `286`,
    591: `286`,
    592: `286`,
    593: `286`,
    594: `286`,
    595: `287`,
    596: `287`,
    597: `288`,
    598: `289`,
    599: `290`,
    6: `2`,
    60: `2`,
    600: `290`,
    601: `291`,
    602: `292`,
    603: `292`,
    604: `293`,
    605: `294`,
    606: `296`,
    607: `296`,
    608: `297`,
    609: `297`,
    61: `2`,
    610: `297`,
    611: `298`,
    612: `298`,
    613: `299`,
    614: `299`,
    615: `299`,
    616: `300`,
    617: `300`,
    618: `301`,
    619: `301`,
    62: `2`,
    620: `302`,
    621: `302`,
    622: `302`,
    623: `303`,
    624: `303`,
    625: `304`,
    626: `304`,
    627: `305`,
    628: `305`,
    629: `305`,
    63: `2`,
    630: `306`,
    631: `306`,
    632: `307`,
    633: `307`,
    634: `308`,
    635: `309`,
    636: `310`,
    637: `310`,
    638: `311`,
    639: `312`,
    64: `2`,
    640: `313`,
    641: `314`,
    642: `314`,
    643: `314`,
    644: `315`,
    645: `315`,
    646: `316`,
    647: `316`,
    648: `317`,
    649: `317`,
    65: `2`,
    650: `318`,
    651: `319`,
    652: `319`,
    653: `319`,
    654: `320`,
    655: `321`,
    656: `321`,
    657: `323`,
    658: `323`,
    659: `324`,
    66: `2`,
    660: `324`,
    661: `325`,
    662: `326`,
    663: `327`,
    664: `328`,
    665: `328`,
    666: `329`,
    667: `329`,
    668: `330`,
    669: `331`,
    67: `2`,
    670: `332`,
    671: `336`,
    672: `336`,
    673: `336`,
    674: `336`,
    675: `336`,
    676: `336`,
    677: `336`,
    678: `336`,
    679: `336`,
    68: `2`,
    680: `336`,
    681: `336`,
    682: `336`,
    683: `336`,
    684: `336`,
    685: `336`,
    686: `336`,
    687: `336`,
    688: `336`,
    689: `336`,
    69: `2`,
    690: `336`,
    691: `336`,
    692: `336`,
    693: `336`,
    694: `336`,
    695: `336`,
    696: `336`,
    697: `336`,
    698: `336`,
    699: `336`,
    7: `2`,
    70: `2`,
    700: `336`,
    701: `336`,
    702: `336`,
    703: `336`,
    704: `336`,
    705: `336`,
    706: `336`,
    707: `336`,
    708: `336`,
    709: `336`,
    71: `2`,
    710: `336`,
    711: `336`,
    712: `336`,
    713: `336`,
    714: `336`,
    715: `336`,
    716: `336`,
    717: `336`,
    718: `336`,
    719: `336`,
    72: `2`,
    720: `336`,
    721: `336`,
    722: `336`,
    723: `336`,
    724: `336`,
    725: `336`,
    726: `336`,
    727: `336`,
    728: `336`,
    729: `336`,
    73: `2`,
    730: `336`,
    731: `336`,
    732: `336`,
    733: `336`,
    734: `336`,
    735: `336`,
    736: `336`,
    737: `336`,
    738: `336`,
    739: `336`,
    74: `2`,
    740: `336`,
    741: `336`,
    742: `336`,
    743: `336`,
    744: `336`,
    745: `336`,
    746: `336`,
    747: `336`,
    748: `336`,
    749: `336`,
    75: `4`,
    750: `336`,
    751: `336`,
    752: `336`,
    753: `336`,
    754: `336`,
    755: `336`,
    756: `336`,
    757: `336`,
    758: `336`,
    759: `336`,
    76: `4`,
    760: `336`,
    761: `336`,
    762: `336`,
    763: `336`,
    764: `336`,
    765: `336`,
    766: `336`,
    767: `336`,
    768: `336`,
    769: `336`,
    77: `5`,
    770: `336`,
    771: `336`,
    772: `336`,
    773: `336`,
    774: `336`,
    775: `336`,
    776: `336`,
    777: `336`,
    778: `336`,
    779: `336`,
    78: `5`,
    780: `336`,
    781: `336`,
    782: `336`,
    783: `336`,
    784: `336`,
    785: `336`,
    786: `336`,
    787: `336`,
    788: `336`,
    789: `336`,
    79: `5`,
    790: `336`,
    791: `336`,
    792: `336`,
    793: `336`,
    794: `336`,
    795: `336`,
    796: `336`,
    797: `336`,
    798: `336`,
    799: `336`,
    8: `2`,
    80: `6`,
    800: `336`,
    801: `336`,
    802: `336`,
    803: `336`,
    804: `337`,
    805: `337`,
    806: `338`,
    807: `339`,
    808: `339`,
    809: `340`,
    81: `7`,
    810: `341`,
    811: `342`,
    812: `342`,
    813: `343`,
    814: `344`,
    815: `345`,
    816: `346`,
    817: `346`,
    818: `347`,
    819: `348`,
    82: `8`,
    820: `348`,
    821: `349`,
    822: `350`,
    823: `350`,
    824: `351`,
    825: `352`,
    826: `352`,
    827: `353`,
    828: `354`,
    829: `355`,
    83: `9`,
    830: `355`,
    831: `356`,
    832: `357`,
    833: `357`,
    834: `358`,
    835: `359`,
    836: `359`,
    837: `360`,
    838: `360`,
    839: `361`,
    84: `10`,
    840: `361`,
    841: `362`,
    842: `362`,
    843: `362`,
    844: `364`,
    845: `364`,
    846: `364`,
    847: `365`,
    848: `365`,
    849: `365`,
    85: `11`,
    850: `365`,
    851: `367`,
    852: `367`,
    853: `368`,
    854: `369`,
    855: `369`,
    856: `370`,
    857: `370`,
    858: `370`,
    859: `371`,
    86: `11`,
    860: `371`,
    861: `372`,
    862: `372`,
    863: `372`,
    864: `374`,
    865: `374`,
    866: `374`,
    867: `375`,
    868: `375`,
    869: `375`,
    87: `12`,
    870: `376`,
    871: `376`,
    872: `377`,
    873: `377`,
    874: `377`,
    875: `379`,
    876: `380`,
    877: `380`,
    878: `381`,
    879: `382`,
    88: `12`,
    880: `383`,
    881: `383`,
    882: `384`,
    883: `384`,
    884: `385`,
    885: `386`,
    886: `387`,
    887: `388`,
    888: `388`,
    889: `389`,
    89: `13`,
    890: `390`,
    891: `391`,
    892: `392`,
    893: `392`,
    894: `393`,
    895: `394`,
    896: `395`,
    897: `395`,
    898: `395`,
    899: `396`,
    9: `2`,
    90: `14`,
    900: `396`,
    901: `396`,
    902: `397`,
    903: `398`,
    904: `399`,
    905: `401`,
    906: `401`,
    907: `402`,
    908: `402`,
    909: `403`,
    91: `14`,
    910: `404`,
    911: `404`,
    912: `405`,
    913: `405`,
    914: `405`,
    915: `406`,
    916: `407`,
    917: `408`,
    918: `408`,
    919: `409`,
    92: `15`,
    920: `409`,
    921: `409`,
    922: `410`,
    923: `411`,
    924: `411`,
    925: `412`,
    926: `412`,
    927: `413`,
    928: `413`,
    929: `413`,
    93: `16`,
    930: `414`,
    931: `415`,
    932: `415`,
    933: `416`,
    934: `416`,
    935: `417`,
    936: `417`,
    937: `417`,
    938: `418`,
    939: `418`,
    94: `17`,
    940: `419`,
    941: `420`,
    942: `421`,
    943: `421`,
    944: `422`,
    945: `422`,
    946: `423`,
    947: `423`,
    948: `423`,
    949: `424`,
    95: `18`,
    950: `424`,
    951: `425`,
    952: `426`,
    953: `427`,
    954: `427`,
    955: `428`,
    956: `429`,
    957: `429`,
    958: `429`,
    959: `430`,
    96: `19`,
    960: `430`,
    961: `431`,
    962: `432`,
    963: `433`,
    964: `434`,
    965: `434`,
    966: `435`,
    967: `436`,
    968: `436`,
    969: `437`,
    97: `20`,
    970: `438`,
    971: `439`,
    972: `440`,
    973: `440`,
    974: `441`,
    975: `442`,
    976: `443`,
    977: `445`,
    978: `445`,
    979: `445`,
    98: `20`,
    980: `446`,
    981: `446`,
    982: `446`,
    983: `448`,
    984: `448`,
    985: `449`,
    986: `456`,
    987: `456`,
    988: `457`,
    989: `457`,
    99: `21`,
    990: `458`,
    991: `458`,
    992: `459`,
    993: `460`,
    994: `460`,
    995: `461`,
    996: `461`,
    997: `462`,
    998: `463`,
    999: `464`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 6,
  stateSize: 754,
  unsupported: [],
  version: 13,
  warnings: [`API Umvir_support may use up to 9 transaction references, but the limit is 8. API Umvir_support starts at /app/TRI.rsh:413:31:application.`, `Step 2 calls a remote object at /app/TRI.rsh:522:17:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 may use up to 9 transaction references, but the limit is 8. Step 2 starts at /app/TRI.rsh:413:31:dot.`]
  };
export const _stateSourceMap = {
  2: {
    at: './TRI.rsh:562:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './TRI.rsh:413:31:after expr stmt semicolon',
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
  "Umvir_propose": Umvir_propose,
  "Umvir_support": Umvir_support,
  "register": register
  };
export const _APIs = {
  Umvir: {
    propose: Umvir_propose,
    support: Umvir_support
    },
  register: register
  };

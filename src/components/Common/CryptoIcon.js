import React from 'react';
import Colors from './Colors'

import AE from './Icons/black/ae.js'
import AION from './Icons/black/aion.js'
import BAT from './Icons/black/bat.js'
import BNB from './Icons/black/bnb.js'
import BTM from './Icons/black/btm.js'
import FUN from './Icons/black/fun.js'
import GNT from './Icons/black/gnt.js'
import KCS from './Icons/black/kcs.js'
import KNC from './Icons/black/knc.js'
import LOOM from './Icons/black/loom.js'
import LRC from './Icons/black/lrc.js'
import MITH from './Icons/black/mith.js'
import MKR from './Icons/black/mkr.js'
import NPXS from './Icons/black/npxs.js'
import OMG from './Icons/black/omg.js'
import PPT from './Icons/black/ppt.js'
// import PRFT from './Icons/black/prft.js'
import REP from './Icons/black/rep.js'
import SNT from './Icons/black/snt.js'
import TRX from './Icons/black/trx.js'
import TUSD from './Icons/black/tusd.js'
import WTC from './Icons/black/wtc.js'
import ZRX from './Icons/black/zrx.js'
import ETH from './Icons/black/eth.js'
import USD from './Icons/black/usd.js'



const CryptoIcon = ({ name, color, size }) => {
  color = color || Colors.BLUE5
  size = size || 28

  switch (name) {
    // eslint-disable-next-line
    case 'AE': return <AE width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'AION': return <AION width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'BAT': return <BAT width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'BNB': return <BNB width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'BTM': return <BTM width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'FUN': return <FUN width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'GNT': return <GNT width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'KCS': return <KCS width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'KNC': return <KNC width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'LOOM': return <LOOM width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'LRC': return <LRC width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'MITH': return <MITH width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'MKR': return <MKR width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'NPXS': return <NPXS width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'OMG': return <OMG width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'PPT': return <PPT width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'USDC': return <USD width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'DAI': return <USD width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    // case 'PRFT': return <PRFT width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'REP': return <REP width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'SNT': return <SNT width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'TRX': return <TRX width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'TUSD': return <TUSD width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'WTC': return <WTC width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'ETH': return <ETH width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'WETH': return <ETH width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'ZRX': return <ZRX width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    //case 'LOOM': return <LOOM width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32" ine
    default: return <ETH width={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
  }
}

export default CryptoIcon

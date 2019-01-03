import React from 'react';
import Colors from './Colors'

import AE from './Icons/icon/ae.js'
import AION from './Icons/icon/aion.js'
import BAT from './Icons/icon/bat.js'
import BNB from './Icons/icon/bnb.js'
import BTM from './Icons/icon/btm.js'
import FUN from './Icons/icon/fun.js'
import GNT from './Icons/icon/gnt.js'
import KCS from './Icons/icon/kcs.js'
import KNC from './Icons/icon/knc.js'
import LOOM from './Icons/icon/loom.js'
import LRC from './Icons/icon/lrc.js'
import MITH from './Icons/icon/mith.js'
import MKR from './Icons/icon/mkr.js'
import NPXS from './Icons/icon/npxs.js'
import OMG from './Icons/icon/omg.js'
import PPT from './Icons/icon/ppt.js'
import REP from './Icons/icon/rep.js'
import SNT from './Icons/icon/snt.js'
import TRX from './Icons/icon/trx.js'
import TUSD from './Icons/icon/tusd.js'
import WTC from './Icons/icon/wtc.js'
import ZRX from './Icons/icon/zrx.js'
import ETH from './Icons/icon/eth.js'
import DAI from './Icons/icon/dai.js'
import USD from './Icons/icon/usd.js'
import FLMI from './Icons/icon/flmi.js'
import FRECN from './Icons/icon/frecn.js'

import Generic from './Icons/icon/generic.js'

const ColoredCryptoIcon = ({ name, color, size }) => {
  color = color || Colors.BLUE5
  size = size || 28

  switch (name) {
    // eslint-disable-next-line
    case 'AE': return <AE width={size} height={size} viewBox="0 0 32 32"  />
    case 'AION': return <AION width={size} height={size} viewBox="0 0 32 32"  />
    case 'BAT': return <BAT width={size} height={size} viewBox="0 0 32 32"  />
    case 'BNB': return <BNB width={size} height={size} viewBox="0 0 32 32"  />
    case 'BTM': return <BTM width={size} height={size} viewBox="0 0 32 32"  />
    case 'FUN': return <FUN width={size} height={size} viewBox="0 0 32 32"  />
    case 'GNT': return <GNT width={size} height={size} viewBox="0 0 32 32"  />
    case 'KCS': return <KCS width={size} height={size} viewBox="0 0 32 32"  />
    case 'KNC': return <KNC width={size} height={size} viewBox="0 0 32 32"  />
    case 'LOOM': return <LOOM width={size} height={size} viewBox="0 0 32 32"  />
    case 'LRC': return <LRC width={size} height={size} viewBox="0 0 32 32"  />
    case 'MITH': return <MITH width={size} height={size} viewBox="0 0 32 32"  />
    case 'MKR': return <MKR width={size} height={size} viewBox="0 0 32 32"  />
    case 'NPXS': return <NPXS width={size} height={size} viewBox="0 0 32 32"  />
    case 'OMG': return <OMG width={size} height={size} viewBox="0 0 32 32"  />
    case 'PPT': return <PPT width={size} height={size} viewBox="0 0 32 32"  />
    case 'DAI': return <DAI width={size} height={size} viewBox="0 0 32 32"  />
    case 'USDC': return <USD width={size} height={size} viewBox="0 0 32 32"  />
    case 'REP': return <REP width={size} height={size} viewBox="0 0 32 32"  />
    case 'SNT': return <SNT width={size} height={size} viewBox="0 0 32 32"  />
    case 'TRX': return <TRX width={size} height={size} viewBox="0 0 32 32"  />
    case 'TUSD': return <TUSD width={size} height={size} viewBox="0 0 32 32"  />
    case 'WTC': return <WTC width={size} height={size} viewBox="0 0 32 32"  />
    case 'ETH': return <ETH width={size} height={size} viewBox="0 0 32 32"  />
    case 'WETH': return <ETH width={size} height={size} viewBox="0 0 32 32"  />
    case 'ZRX': return <ZRX width={size} height={size} viewBox="0 0 32 32"  />
    case 'FLMI': return <FLMI width={size} height={size} viewBox="0 0 32 32"  />
    case 'FRECN': return <FRECN width={size} height={size} viewBox="0 0 32 32"  />
    default: return <Generic width={size} height={size} viewBox="0 0 32 32"  />
  }
}


export default ColoredCryptoIcon
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
// import PRFT from './Icons/icon/prft.js'
import REP from './Icons/icon/rep.js'
import SNT from './Icons/icon/snt.js'
import TRX from './Icons/icon/trx.js'
import TUSD from './Icons/icon/tusd.js'
import WTC from './Icons/icon/wtc.js'
import ZRX from './Icons/icon/zrx.js'
import ETH from './Icons/icon/eth.js'
import USD from './Icons/icon/usd.js'


const ColoredCryptoIcon = ({ name, color, size }) => {
  color = color || Colors.BLUE5
  size = size || 28

  switch (name) {
    // eslint-disable-next-line
    case 'AE': return <AE witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'AION': return <AION witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'BAT': return <BAT witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'BNB': return <BNB witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'BTM': return <BTM witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'FUN': return <FUN witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'GNT': return <GNT witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'KCS': return <KCS witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'KNC': return <KNC witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'LOOM': return <LOOM witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'LRC': return <LRC witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'MITH': return <MITH witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'MKR': return <MKR witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'NPXS': return <NPXS witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'OMG': return <OMG witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'PPT': return <PPT witdh={size} height={size} viewBox="0 0 32 32"  />
    // case 'PRFT': return <PRFT witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'DAI': return <USD witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'USDC': return <USD witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'REP': return <REP witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'SNT': return <SNT witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'TRX': return <TRX witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'TUSD': return <TUSD witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'WTC': return <WTC witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'ETH': return <ETH witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'WETH': return <ETH witdh={size} height={size} viewBox="0 0 32 32"  />
    case 'ZRX': return <ZRX witdh={size} height={size} viewBox="0 0 32 32"  />
    //case 'LOOM': return <LOOM witdh={size} height={size} viewBox="0 0 32 32" ine
    default: return <ETH witdh={size} height={size} viewBox="0 0 32 32"  />
  }
}

export default ColoredCryptoIcon
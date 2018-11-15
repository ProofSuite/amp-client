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



const CryptoIcon = ({ name, color, size }) => {
  color = color || Colors.BLUE5
  size = size || 28

  switch (name) {
    // eslint-disable-next-line
    case 'AE': return <AE witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'AION': return <AION witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'BAT': return <BAT witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'BNB': return <BNB witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'BTM': return <BTM witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'FUN': return <FUN witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'GNT': return <GNT witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'KCS': return <KCS witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'KNC': return <KNC witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'LOOM': return <LOOM witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'LRC': return <LRC witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'MITH': return <MITH witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'MKR': return <MKR witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'NPXS': return <NPXS witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'OMG': return <OMG witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'PPT': return <PPT witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    // case 'PRFT': return <PRFT witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'REP': return <REP witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'SNT': return <SNT witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'TRX': return <TRX witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'TUSD': return <TUSD witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'WTC': return <WTC witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'ETH': return <ETH witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'WETH': return <ETH witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    case 'ZRX': return <ZRX witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
    //case 'LOOM': return <LOOM witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32" ine
    default: return <ETH witdh={size} height={size} fill={Colors.BLUE5} viewBox="0 0 32 32"  />
  }
}

export default CryptoIcon

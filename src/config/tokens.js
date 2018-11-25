import { DEFAULT_NETWORK_ID } from './environment.js'
import addresses from './addresses.json';

const networkIDs = ['1000', '8888', '4', '1']

export const defaultTokenDecimals = {
  BNB: 18,
  OMG: 18,
  ZRX: 18,
  AE: 18,
  TRX: 18,
  MKR: 18,
  BAT: 18,
  REP: 18,
  BTM: 18,
  NPXS: 18,
  WTC: 18,
  KCS: 18,
  GNT: 18,
  PPT: 18,
  SNT: 18,
  DGX: 18,
  MITH: 18,
  AION: 18,
  LOOM: 18,
  DAI: 18,
  USDC: 6,
}

export const defaultTokens = [
  "WETH",
  "BNB",
  "OMG",
  "ZRX",
  "AE",
  "TRX",
  "MKR",
  "BAT",
  "REP",
  "BTM",
  "NPXS",
  "WTC",
  "KCS",
  "GNT",
  "PPT",
  "SNT",
  "DGX",
  "MITH",
  "AION",
  "LOOM",
  "DAI",
  "USDC",
]

let tokensBySymbolTable = {}

for (let networkID of networkIDs) {
  tokensBySymbolTable[networkID] = {}
  for (let token of defaultTokens) {
    if (addresses[networkID][token]) {
      tokensBySymbolTable[networkID][token] = {
        symbol: token,
        address: addresses[networkID][token],
        decimals: defaultTokenDecimals[token] || 18
      }
    }
  }
}

export const tokensBySymbol = tokensBySymbolTable[DEFAULT_NETWORK_ID];
export const tokenSymbols = Object.keys(tokensBySymbol);
export const tokens = Object.values(tokensBySymbol);
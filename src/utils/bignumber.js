import { utils } from 'ethers'
import { ether } from './constants'

export const max = (a, b) => {
  return a.gt(b) ? a : b
}

export const min = (a, b) => {
  return b.gt(a) ? b : a
}

export const fromWeiToFloat = (amount, decimals = 2) => {
  let decimalsMultiplier = utils.bigNumberify(10 ** decimals)
  let bigAmount = utils
    .bigNumberify(amount)
    .mul(decimalsMultiplier)
    .div(ether)

  return Number(bigAmount) / Number(decimalsMultiplier)
}

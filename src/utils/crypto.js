import { utils } from 'ethers'
import { randInt } from './helpers'

export const getOrderHash = order => {
  return utils.solidityKeccak256(
    ['bytes', 'bytes', 'bytes', 'bytes', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256'],
    [
      order.exchangeAddress,
      order.userAddress,
      order.sellToken,
      order.buyToken,
      order.sellAmount,
      order.buyAmount,
      order.makeFee,
      order.takeFee,
      order.expires,
      order.nonce
    ]
  )
}

export const getOrderCancelHash = orderCancel => {
  return utils.solidityKeccak256(['bytes'], [orderCancel.orderHash])
}

export const getTradeHash = trade => {
  return utils.solidityKeccak256(
    ['bytes', 'bytes', 'uint256', 'uint256'],
    [trade.orderHash, trade.taker, trade.amount, trade.tradeNonce]
  )
}

export const getRandomNonce = () => {
  return randInt(0, 1e16).toString()
}

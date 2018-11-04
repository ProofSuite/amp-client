import { utils } from 'ethers'
import { randInt } from './helpers'

export const getOrderHash = order => {
  return utils.solidityKeccak256(
    ['bytes', 'bytes', 'bytes', 'bytes', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256'],
    [
      order.exchangeAddress,
      order.userAddress,
      order.baseToken,
      order.quoteToken,
      order.amount,
      order.pricepoint,
      order.side === 'BUY' ? '0' : '1',
      order.nonce,
      order.makeFee,
      order.takeFee
    ]
  )
}

export const getOrderCancelHash = orderCancel => {
  return utils.solidityKeccak256(['bytes'], [orderCancel.orderHash])
}

export const getTradeHash = trade => {
  return utils.solidityKeccak256(
    ['bytes', 'bytes'],
    [trade.makerOrderHash, trade.takerOrderHash]
  )
}

export const getRandomNonce = () => {
  return randInt(0, 1e16).toString()
}
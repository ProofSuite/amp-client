import { utils } from 'ethers'
import { getOrderHash, getOrderCancelHash, getTradeHash, getRandomNonce } from '../../../utils/crypto'
import { EXCHANGE_ADDRESS } from '../../../config/contracts'
import { round, computePricepoint, computeAmountPoints } from '../../../utils/helpers'

export const signOrder = async function(order) {
  order.hash = getOrderHash(order)

  let signature = await this.signMessage(utils.arrayify(order.hash))
  let { r, s, v } = utils.splitSignature(signature)

  order.signature = { R: r, S: s, V: v }
  return order
}

export const signTrade = async function(trade) {
  trade.hash = getTradeHash(trade)
  let signature = await this.signMessage(utils.arrayify(trade.hash))
  let { r, s, v } = utils.splitSignature(signature)

  trade.signature = { R: r, S: s, V: v }
  return trade
}

// The amountPrecisionMultiplier and pricePrecisionMultiplier are temporary multipliers
// that are used to turn decimal values into rounded integers that can be converted into
// big numbers that can be used to compute large amounts (ex: in wei) with the amountMultiplier
// and priceMultiplier. After multiplying with amountMultiplier and priceMultiplier, the result
// numbers are divided by the precision multipliers.
// So in the end we have:
// amountPoints ~ amount * amountMultiplier ~ amount * 1e18
// pricePoints ~ price * priceMultiplier ~ price * 1e6
export const createRawOrder = async function(params) {
  let order = {}
  let { userAddress, side, pair, amount, price, makeFee, takeFee } = params
  let { baseTokenAddress, quoteTokenAddress, baseTokenDecimals, quoteTokenDecimals } = pair
  let exchangeAddress = EXCHANGE_ADDRESS[this.provider.network.chainId]

  let precisionMultiplier = utils.bigNumberify(10).pow(9)
  let priceMultiplier = utils.bigNumberify(10).pow(18)
  let baseMultiplier = utils.bigNumberify(10).pow(baseTokenDecimals)
  let quoteMultiplier = utils.bigNumberify(10).pow(quoteTokenDecimals)
  let pricepoint = computePricepoint({ price, priceMultiplier, quoteMultiplier, precisionMultiplier })
  let amountPoints = computeAmountPoints({ amount, baseMultiplier, precisionMultiplier })

  order.exchangeAddress = exchangeAddress
  order.userAddress = userAddress
  order.baseToken = baseTokenAddress
  order.quoteToken = quoteTokenAddress
  order.amount = amountPoints.toString()
  order.pricepoint = pricepoint.toString()
  order.side = side
  order.makeFee = makeFee
  order.takeFee = takeFee
  order.nonce = getRandomNonce()
  order.hash = getOrderHash(order)

  let signature = await this.signMessage(utils.arrayify(order.hash))
  let { r, s, v } = utils.splitSignature(signature)

  order.signature = { R: r, S: s, V: v }
  return order
}

export const createOrderCancel = async function(orderHash) {
  let orderCancel = {}
  orderCancel.orderHash = orderHash
  orderCancel.hash = getOrderCancelHash(orderCancel)

  let signature = await this.signMessage(utils.arrayify(orderCancel.hash))
  let { r, s, v } = utils.splitSignature(signature)
  orderCancel.signature = { R: r, S: s, V: v }

  return orderCancel
}

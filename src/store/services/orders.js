import { getOrderHash, getTradeHash } from '../../utils/crypto'

export const validateOrderHash = async (hash, order) => {
  let computedHash = getOrderHash(order)

  return computedHash !== hash ? false : true
}

export const validateTradeHash = async (hash, trade) => {
  let computedHash = getTradeHash(trade)

  return computedHash !== hash ? false : true
}

// We currently assume that the order is already signed
export const signOrder = async (signer, order) => {
  let computedHash = getOrderHash(order)
  if (order.hash !== computedHash) throw new Error('Invalid Hash')

  let signature = await signer.signMessage(utils.arrayify(order.hash))
  let { r, s, v } = utils.splitSignature(signature)

  order.signature = { R: r, S: s, V: v }
  return order
}

export const signTrade = async (signer, trade) => {
  let computedHash = getTradeHash(trade)
  if (trade.hash !== computedHash) throw new Error('Invalid Hash')

  let signature = await signer.signMessage(utils.arrayify(trade.hash))
  let { r, s, v } = utils.splitSignature(signature)

  trade.signature = { R: r, S: s, V: v }
  return trade
}

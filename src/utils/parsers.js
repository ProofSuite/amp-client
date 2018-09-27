import { isFloat, isInteger, round } from './helpers'
import { fromWeiToFloat } from './bignumber'
import { ether } from './constants'
import { utils } from 'ethers'

export const parseJSONData = obj => {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      parseJSONData(obj[key])
    } else if (typeof obj[key] === typeof []) {
      obj[key].forEach(elem => parseJSONData(elem))
    } else {
      if (typeof obj[key] === 'string') {
        if (isFloat(obj[key])) {
          obj[key] = parseFloat(obj[key])
        } else if (isInteger(obj[key])) {
          obj[key] = parseInt(obj[key], 10)
        }
      }
    }
  }

  return obj
}

export const parseJSONToFixed = (obj, decimals = 2) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      parseJSONToFixed(obj[key], decimals)
    } else if (typeof obj[key] === typeof []) {
      obj[key].forEach(elem => parseJSONToFixed(elem, decimals))
    } else if (typeof obj[key] === 'string') {
      if (isFloat(obj[key])) {
        obj[key] = round(obj[key], decimals)
      } else if (isInteger(obj[key])) {
        obj[key] = round(obj[key], decimals)
      }
    } else if (typeof obj[key] === 'number') {
      obj[key] = round(obj[key], decimals)
    }
  }

  return obj
}

export const parseOrders = (orders, decimals = 2) => {
  let parsed = orders.map(order => ({
    time: order.createdAt,
    amount: fromWeiToFloat(order.amount, decimals),
    buyAmount: fromWeiToFloat(order.buyAmount, decimals),
    sellAmount: fromWeiToFloat(order.sellAmount, decimals),
    filled: fromWeiToFloat(order.filledAmount, decimals),
    price: round(order.pricepoint, decimals),
    hash: order.hash,
    side: order.side,
    pair: order.pairName,
    type: 'LIMIT',
    status: order.status
  }))

  return parsed
}

export const parseTrades = (trades, decimals = 2) => {
  let parsed = trades.map(trade => ({
    time: trade.createdAt,
    price: round(trade.pricepoint, decimals),
    amount: fromWeiToFloat(trade.amount, decimals),
    hash: trade.hash,
    orderHash: trade.orderHash,
    type: trade.type || 'LIMIT',
    side: trade.side,
    pair: trade.pairName,
    maker: trade.maker,
    taker: trade.taker
  }))

  return parsed
}

export const parseOrderBookData = (data, decimals = 2) => {
  let { bids, asks } = data

  asks = asks.map(ask => ({
    price: round(ask.pricepoint, decimals),
    amount: fromWeiToFloat(ask.amount, decimals)
  }))

  bids = bids.map(bid => ({
    price: round(bid.pricepoint, decimals),
    amount: fromWeiToFloat(bid.amount, decimals)
  }))

  return { asks, bids }
}

// export const parseOrderBookData = (data, decimals = 2) => {
//   let { buys, sells, trades } = data;

//   let bids = buys.map(buy => ({
//     price: round(buy.price, decimals),
//     amount: round(buy.volume, decimals),
//   }));

//   let asks = sells.map(sell => ({
//     price: round(sell.price, decimals),
//     amount: round(sell.volume, decimals),
//   }));

//   trades = trades.map(trade => ({
//     time: trade.createdAt,
//     pricepoint: round(trade.pricepoint, decimals),
//     amount: round(trade.amount, decimals),
//     hash: trade.hash,
//     orderHash: trade.orderHash,
//     type: trade.type || "LIMIT",
//     side: trade.side,
//     pair: trade.pairName,
//     maker: trade.maker,
//     taker: trade.taker,
//   }));

//   return {
//     bids,
//     asks,
//     trades,
//   };
// };

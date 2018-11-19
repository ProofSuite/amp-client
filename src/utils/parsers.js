import { isFloat, isInteger, round } from './helpers'
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

export const parseTokenAmount = (amount, tokenDecimals = 18, precision = 2) => {
  let precisionMultiplier = utils.bigNumberify((10 ** precision).toString())
  let decimalsMultiplier = utils.bigNumberify((10 ** tokenDecimals).toString())
  let bigAmount = utils.bigNumberify(amount)
                    .mul(precisionMultiplier)
                    .div(decimalsMultiplier)

  return Number(bigAmount) / Number(precisionMultiplier)
}

export const parsePricepoint = (pricepoint, pricePointMultiplier = 1e9, precision = '6') => {
  return (Math.round((pricepoint / pricePointMultiplier) * Math.pow(10, precision)) / Math.pow(10, precision))
}

export const parseOrder = (order, tokenDecimals = 18, precision = 2) => ({
  time: order.createdAt,
  amount: parseTokenAmount(order.amount, tokenDecimals, precision),
  filled: parseTokenAmount(order.filledAmount, tokenDecimals, precision),
  price: parsePricepoint(order.pricepoint),
  hash: order.hash,
  side: order.side,
  pair: order.pairName,
  type: 'LIMIT',
  status: order.status
})

export const parseOrders = (orders, tokenDecimals = 18, precision = 2) => {
  let parsed = orders.map(order => ({
    time: order.createdAt,
    amount: parseTokenAmount(order.amount, tokenDecimals, precision),
    filled: parseTokenAmount(order.filledAmount, tokenDecimals, precision),
    price: parsePricepoint(order.pricepoint),
    hash: order.hash,
    side: order.side,
    pair: order.pairName,
    type: 'LIMIT',
    status: order.status
  }))

  return parsed
}

export const parseTrade = (trade, tokenDecimals = 18, precision = 2) => ({
  time: trade.createdAt,
  price: parsePricepoint(trade.pricepoint),
  amount: parseTokenAmount(trade.amount, tokenDecimals, precision),
  hash: trade.hash,
  orderHash: trade.orderHash,
  type: trade.type || 'LIMIT',
  side: trade.side,
  pair: trade.pairName,
  status: trade.status === 'SUCCESS' ? 'EXECUTED' : trade.status,
  maker: utils.getAddress(trade.maker),
  taker: utils.getAddress(trade.taker)
})

export const parseTrades = (trades, tokenDecimals = 18, precision = 2) => {
  let parsed = trades.map(trade => ({
    time: trade.createdAt,
    price: parsePricepoint(trade.pricepoint),
    amount: parseTokenAmount(trade.amount, tokenDecimals, precision),
    hash: trade.hash,
    orderHash: trade.orderHash,
    type: trade.type || 'LIMIT',
    side: trade.side,
    pair: trade.pairName,
    status: trade.status === 'SUCCESS' ? 'EXECUTED' : trade.status,
    maker: utils.getAddress(trade.maker),
    taker: utils.getAddress(trade.taker)
  }))

  return parsed
}

export const parseOrderBookData = (data, tokenDecimals = 18, precision = 2) => {
  let { bids, asks } = data

  asks = asks.map(ask => ({
    price: parsePricepoint(ask.pricepoint),
    amount: parseTokenAmount(ask.amount, tokenDecimals, precision)
  }))

  bids = bids.map(bid => ({
    price: parsePricepoint(bid.pricepoint),
    amount: parseTokenAmount(bid.amount, tokenDecimals, precision)
  }))

  return { asks, bids }
}

export const parseTokenPairData = (data, tokenDecimals = 18) => {
  let parsed = data.map(datum => ({
    pair: datum.pair.pairName,
    lastPrice: datum.close ? parsePricepoint(datum.close) : null,
    change: datum.open ? round((datum.close - datum.open) / datum.open, 1) : null,
    high: datum.high ? parsePricepoint(datum.high) : null,
    low: datum.low ? parsePricepoint(datum.low) : null,
    volume: datum.volume ? parseTokenAmount(datum.volume, tokenDecimals, 0) : null
  }))

  return parsed
}

export const parseOHLCV = (data, baseTokenDecimals = 18) => {
  let parsed = data.map(datum => {
    return {
      date: new Date(datum.timestamp),
      open: parsePricepoint(datum.open),
      high: parsePricepoint(datum.high),
      low: parsePricepoint(datum.low),
      close: parsePricepoint(datum.close),
      volume: parseTokenAmount(datum.volume, baseTokenDecimals, 2)
    }
  })

  return parsed
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

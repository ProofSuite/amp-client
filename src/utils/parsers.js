// @flow

import { isFloat, isInteger, round, computeChange } from './helpers'
import { utils } from 'ethers'

import type { TokenPair, APITokens, APIToken, Tokens } from '../types/tokens'
import type { Order } from '../types/orders'
import type { Trade } from '../types/trades'
import type { OrderBookData } from '../types/orderBook'
import type { Candles } from '../types/ohlcv'
import type { APIPairData } from '../types/api'

export const parseJSONData = (obj: Object) => {
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

export const parseJSONToFixed = (obj: Object, decimals: number = 2) => {
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


export const parseToken = (token: APIToken) => {
  return {
    address: token.address,
    active: token.active,
    listed: token.listed,
    quote: token.quote,
    symbol: token.symbol,
    decimals: token.decimals,
    rank: token.rank,
  }
}

export const parseTokens = (tokens: APITokens) => {
  let parsedTokens = tokens.map((token) => {
    return {
      address: token.address,
      active: token.active,
      listed: token.listed,
      quote: token.quote,
      symbol: token.symbol,
      decimals: token.decimals,
      rank: token.rank,
    }
  })

  return parsedTokens  
}

export const parseTokenAmount = (amount: string, pair: TokenPair, precision: number = 2) => {
  let { baseTokenDecimals } = pair
  let precisionMultiplier = utils.bigNumberify(10).pow(precision)
  let baseMultiplier = utils.bigNumberify(10).pow(baseTokenDecimals)
  let bigAmount = utils.bigNumberify(amount).mul(precisionMultiplier).div(baseMultiplier)

  return Number(bigAmount) / Number(precisionMultiplier)
}


export const parsePricepoint = (pricepoint: string, pair: TokenPair, precision: number = 6) => {
  let { quoteTokenDecimals } = pair
  let priceMultiplier = utils.bigNumberify(10).pow(18)
  let quoteMultiplier = utils.bigNumberify(10).pow(quoteTokenDecimals)
  let bigPricepoint = utils.bigNumberify(pricepoint)

  return (Number(bigPricepoint.div(priceMultiplier).toString()) / Number(quoteMultiplier.toString()))
}



export const parseOrder = (order: Order, pair: TokenPair, precision: number = 2) => {
  
  return {
  time: order.createdAt,
  amount: parseTokenAmount(order.amount, pair, precision),
  filled: parseTokenAmount(order.filledAmount, pair, precision),
  price: parsePricepoint(order.pricepoint, pair, precision),
  hash: order.hash,
  side: order.side,
  pair: order.pairName,
  type: 'LIMIT',
  status: order.status
}}

export const parseOrders = (orders: Array<Order>, pairs: Object, precision: number = 2) => {
  let parsedOrders = []

  orders.forEach(order => {
    let pair = pairs[order.pairName]
    if (pair) {
      parsedOrders.push({
        time: order.createdAt,
        amount: parseTokenAmount(order.amount, pair, precision),
        filled: parseTokenAmount(order.filledAmount, pair, precision),
        price: parsePricepoint(order.pricepoint, pair, precision),
        hash: order.hash,
        side: order.side,
        pair: order.pairName,
        type: 'LIMIT',
        status: order.status
      })
    }
  })

  return parsedOrders
}

export const parseTrade = (trade: Trade, pair: TokenPair, precision: number = 2) => {  
  return {
    time: trade.createdAt,
    price: parsePricepoint(trade.pricepoint, pair, precision),
    amount: parseTokenAmount(trade.amount, pair, precision),
    hash: trade.hash,
    orderHash: trade.orderHash,
    type: trade.type || 'LIMIT',
    side: trade.side,
    pair: trade.pairName,
    status: trade.status === 'SUCCESS' ? 'EXECUTED' : trade.status,
    maker: utils.getAddress(trade.maker),
    taker: utils.getAddress(trade.taker)
}}

export const parseTrades = (trades: Array<Trade>, pair: TokenPair, precision: number = 2) => {
  let parsed = (trades: any).map(trade => ({
    time: trade.createdAt,
    price: parsePricepoint(trade.pricepoint, pair, precision),
    amount: parseTokenAmount(trade.amount, pair, precision),
    hash: trade.hash,
    txHash: trade.txHash,
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

export const parseOrderBookData = (data: OrderBookData, pair: TokenPair, precision: number = 2) => {
  let { bids, asks } = data

  asks = asks.map(ask => ({
    price: parsePricepoint(ask.pricepoint, pair, precision),
    amount: parseTokenAmount(ask.amount, pair, precision)
  }))

  bids = bids.map(bid => ({
    price: parsePricepoint(bid.pricepoint, pair, precision),
    amount: parseTokenAmount(bid.amount, pair, precision)
  }))

  return { asks, bids }
}

export const parseTokenPairsData = (data: APIPairData, pairs: Object) => {
  let parsed = (data: APIPairData).map(datum => {
    let pair = pairs[datum.pair.pairName]
    
    return {
      pair: pair.pair,
      price: datum.price ? parsePricepoint(datum.price, pair) : null,
      lastPrice: datum.close ? parsePricepoint(datum.close, pair) : null,
      change: datum.open ? computeChange(datum.open, datum.close) : null,
      high: datum.high ? parsePricepoint(datum.high, pair) : null,
      low: datum.low ? parsePricepoint(datum.low, pair) : null,
      volume: datum.volume ? parseTokenAmount(datum.volume, pair, 0) : null,
      orderVolume: datum.orderVolume ? parseTokenAmount(datum.orderVolume, pair, 0) : null,
      orderCount: datum.orderCount ? datum.orderCount : null,
    }
  })
    
  return parsed
}

export const parseTokenPairData = (data: APIPairData, pair: TokenPair) => {

  console.log(data)

  let parsed = (data: APIPairData).map(datum => {
    return {
      pair: datum.pair.pairName,
      price: datum.price ? parsePricepoint(datum.price, pair) : null,
      lastPrice: datum.close ? parsePricepoint(datum.close, pair) : null,
      change: datum.open ? computeChange(datum.open, datum.close) : null,
      high: datum.high ? parsePricepoint(datum.high, pair) : null,
      low: datum.low ? parsePricepoint(datum.low, pair) : null,
      volume: datum.volume ? parseTokenAmount(datum.volume, pair, 0) : null,
      orderVolume: datum.orderVolume ? parseTokenAmount(datum.orderVolume, pair, 0) : null,
      orderCount: datum.orderCount ? datum.orderCount : null,
    }
  })
    
  return parsed
}

export const parseOHLCV = (data: Candles, pair: TokenPair) => {
  let parsed = (data: Candles).map(datum => {
    return {
      date: new Date(datum.timestamp),
      open: parsePricepoint(datum.open, pair),
      high: parsePricepoint(datum.high, pair),
      low: parsePricepoint(datum.low, pair),
      close: parsePricepoint(datum.close, pair),
      volume: parseTokenAmount(datum.volume, pair, 2)
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

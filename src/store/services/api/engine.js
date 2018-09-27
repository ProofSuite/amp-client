// @flow
import tokenPairData from '../../../jsons/tokenPairData.json'
import { parseJSONToFixed, parseOrders, parseTrades, parseOrderBookData } from '../../../utils/parsers'
import fetch from 'isomorphic-fetch'

const request = (endpoint, options) => {
  return fetch(`http://localhost:8081${endpoint}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    ...options
  })
}

export const fetchTokens = async () => {
  const response = await request(`/tokens`)

  if (response.status !== 200) {
    throw new Error('Error')
  }

  const data = await response.json()
  return data
}

export const fetchToken = async (address: string) => {
  const response = await request(`/tokens/${address}`)

  if (response.status !== 200) {
    throw new Error('Error')
  }

  const data = await response.json()
  return data
}

export const fetchPairs = async () => {
  const response = await request(`/pairs`)

  if (response.status !== 200) {
    throw new Error('Error')
  }

  const data = await response.json()
  return data
}

export const fetchPair = async (baseToken: string, quoteToken: string) => {
  const response = await request(`/pair?baseToken=${baseToken}&quoteToken=${quoteToken}`)
  const data = await response.json()

  if (response.status === 400) {
    throw new Error(data.error)
  }

  if (response.status !== 200) {
    console.log(data.error)
    throw new Error('Server Error')
  }

  return data
}

export const fetchBalance = async (address: string) => {
  const response = await request(`/balances/${address}`)

  if (response.status !== 200) {
    throw new Error('Error')
  }

  const { data } = await response.json()
  return data
}

export const fetchOrders = async (address: string) => {
  const response = await request(`/orders?address=${address}`)
  const data = await response.json()

  if (response.status === 400) {
    throw new Error(data.error)
  }

  if (response.status !== 200) {
    console.log(data)
    throw new Error('Server error')
  }

  return data
}

export const fetchOrderHistory = async (address: string) => {
  const response = await request(`/orders/history?address=${address}`)
  const data = await response.json()

  if (response.status === 400) {
    throw new Error(data.error)
  }

  if (response.status !== 200) {
    console.log(data.error)
    throw new Error('Server error')
  }

  return data
}

export const fetchOrderPositions = async (address: string) => {
  const response = await request(`/orders/positions?address=${address}`)
  const data = await response.json()

  if (response.status === 400) {
    throw new Error(data.error)
  }

  if (response.status !== 200) {
    console.log(data.error)
    throw new Error('Server error')
  }

  return data
}

export const fetchTokenPairTrades = async (baseToken: string, quoteToken: string) => {
  const response = await request(`/trades/pair?baseToken=${baseToken}&quoteToken=${quoteToken}`)
  const data = await response.json()

  if (response.status === 400) {
    throw new Error(data.error)
  }

  if (response.status !== 200) {
    console.log(data)
    throw new Error('Server Error')
  }

  return data
}

export const fetchAddressTrades = async (address: string) => {
  const response = await request(`/trades?address=${address}`)
  const data = await response.json()

  if (response.status === 400) {
    throw new Error(data.error)
  }

  if (response.status !== 200) {
    console.log(data)
    throw new Error('Server Error')
  }

  return data
}

export const fetchOrderBook = async (baseToken: string, quoteToken: string) => {
  const response = await request(`/orderbook?baseToken=${baseToken}&quoteToken=${quoteToken}`)
  const data = await response.json()

  if (response.status === 400) {
    throw new Error(data.error)
  }

  if (response.status !== 200) {
    console.log(data)
    throw new Error('Server Error')
  }

  return data
}

export const fetchRawOrderBook = async (baseToken: string, quoteToken: string) => {
  const response = await request(`/orderbook/raw?baseToken=${baseToken}&quoteToken=${quoteToken}`)
  const data = await response.json()

  if (response.status === 400) {
    throw new Error(data.error)
  }

  if (response.status !== 200) {
    console.log(data)
    throw new Error('Server Error')
  }

  return data
}

export const getTokenPairData = async () => {
  const data = parseJSONToFixed(tokenPairData)
  return data
}

export const getOrders = async (userAddress: string) => {
  let orders = await fetchOrders(userAddress)
  let parsedOrders = parseOrders(orders)

  return parsedOrders
}

export const getTrades = async (baseToken: string, quoteToken: string) => {
  let trades = await fetchTokenPairTrades(baseToken, quoteToken)
  let parsedTrades = parseTrades(trades)

  return parsedTrades
}

export const getOrderBookData = async (baseToken: string, quoteToken: string) => {
  let orderbook = await fetchOrderBook(baseToken, quoteToken)

  console.log(orderbook)

  let { asks, bids } = parseOrderBookData(orderbook)

  return { asks, bids }
}

// export const test = async () => {
//   let orders = await fetchOrders("0xE8E84ee367BC63ddB38d3D01bCCEF106c194dc47")
//   let parsed = parseOrders(orders)

//   console.log(parsed)

//   return parsed
// }

// export const test2 = async () => {
//   let trades = await fetchAddressTrades("0xE8E84ee367BC63ddB38d3D01bCCEF106c194dc47")
//   let parsed = parseTrades(trades)

//   console.log(trades)

//   return parsed
// }

// test2()

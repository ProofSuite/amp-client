// @flow
import { ENGINE_HTTP_URL } from '../../../config/urls'
import { parseTokens, parseTokenPairData, parseOrders, parseTrades, parseOrderBookData } from '../../../utils/parsers'
import fetch from 'isomorphic-fetch'

import type { Orders } from '../../../types/orders'
import type { Trades } from '../../../types/trades'
import type { TokenPair, Tokens } from '../../../types/tokens'

const request = (endpoint, options) => {
  return fetch(`${ENGINE_HTTP_URL}${endpoint}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    ...options
  })
}

export const fetchInfo = async () => {
  const response = await request(`/info`)

  if (response.status !== 200) {
    throw new Error('Error')
  }

  const { data } = await response.json()
  return data
}

export const fetchFees = async () => {
  const response = await request('/fees')

  if (response.status !== 200) {
    throw new Error('Error')
  }

  const { data } = await response.json()
  return data
}

export const fetchTokens = async () => {
  const response = await request(`/tokens`)

  if (response.status !== 200) {
    throw new Error('Error')
  }

  const { data } = await response.json()
  return data
}

export const fetchToken = async (address: string) => {
  const response = await request(`/tokens/${address}`)

  if (response.status !== 200) {
    throw new Error('Error')
  }

  const { data } = await response.json()
  return data
}

export const fetchPairs = async () => {
  const response = await request(`/pairs`)

  if (response.status !== 200) {
    throw new Error('Error')
  }

  const { data } = await response.json()
  return data
}

export const fetchPair = async (baseToken: string, quoteToken: string) => {
  const response = await request(`/pair?baseToken=${baseToken}&quoteToken=${quoteToken}`)


  if (response.status === 400) {
    const { error } = await response.json()
    throw new Error(error)
  }

  if (response.status !== 200) {
    throw new Error('Server Error')
  }

  const { data } = await response.json()
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


  if (response.status === 400) {
    const { error } = await response.json()
    throw new Error(error)
  }

  if (response.status !== 200) {
    throw new Error('Server error')
  }

  const { data } = await response.json()
  return data
}

export const fetchOrderHistory = async (address: string) => {
  const response = await request(`/orders/history?address=${address}`)

  if (response.status === 400) {
    const { error } = await response.json()
    throw new Error(error)
  }

  if (response.status !== 200) {
    throw new Error('Server error')
  }

  const { data } = await response.json()
  return data
}

export const fetchOrderPositions = async (address: string) => {
  const response = await request(`/orders/positions?address=${address}`)

  if (response.status === 400) {
    const { error } = await response.json()
    throw new Error(error)
  }

  if (response.status !== 200) {
    throw new Error('Server error')
  }

  const { data } = await response.json()
  return data
}

export const fetchTokenPairTrades = async (baseToken: string, quoteToken: string) => {
  const response = await request(`/trades/pair?baseToken=${baseToken}&quoteToken=${quoteToken}`)
  const data = await response.json()

  if (response.status === 400) {
    const { error } = await response.json()
    throw new Error(error)
  }

  if (response.status !== 200) {
    throw new Error('Server Error')
  }

  return data
}

export const fetchAddressTrades = async (address: string) => {
  const response = await request(`/trades?address=${address}`)
  const data = await response.json()

  if (response.status === 400) {
    const { error } = await response.json()
    throw new Error(error)
  }

  if (response.status !== 200) {
    throw new Error('Server Error')
  }

  return data
}

export const fetchOrderBook = async (baseToken: string, quoteToken: string) => {
  const response = await request(`/orderbook?baseToken=${baseToken}&quoteToken=${quoteToken}`)

  if (response.status === 400) {
    const { error } = await response.json()
    throw new Error(error)
  }

  if (response.status !== 200) {
    throw new Error('Server Error')
  }

  const { data } = await response.json()
  return data
}

export const fetchRawOrderBook = async (baseToken: string, quoteToken: string) => {
  const response = await request(`/orderbook/raw?baseToken=${baseToken}&quoteToken=${quoteToken}`)

  if (response.status === 400) {
    const { error } = await response.json()
    throw new Error(error)
  }

  if (response.status !== 200) {
    throw new Error('Server Error')
  }

  const { data } = await response.json()
  return data
}

export const fetchTokenPairData = async () => {
  const response = await request('/pairs/data')


  if (response.status === 400) {
    const { error } = await response.json()
    throw new Error(error)
  }

  if (response.status !== 200) {
    throw new Error('Server error')
  }

  const { data } = await response.json()
  return data
}

export const createAccount = async (address: string) => {
  const response = await request(`/account/create?address=${address}`, { method: 'post'})

  if (response.status === 400) {
    const { error } = await response.json()
    throw new Error(error)
  }

  if (response.status !== 200) {
    throw new Error('Server error')
  }

  const { data } = await response.json()
  return data
}

export const getTokens = async() => {
  let tokens = await fetchTokens()
  let parsedTokens = []

  if (tokens) parsedTokens = parseTokens(tokens)

  return parsedTokens
}


export const getOrders = async (userAddress: string, pairs: Object): Orders => {
  let orders = await fetchOrders(userAddress)
  let parsedOrders

  if (orders) parsedOrders = parseOrders(orders, pairs)

  return parsedOrders
}

export const getTrades = async (pair: TokenPair): Trades => {
  let { baseTokenAddress, quoteTokenAddress } = pair
  let trades = await fetchTokenPairTrades(baseTokenAddress, quoteTokenAddress)
  let parsedTrades = parseTrades(trades, pair)

  return parsedTrades
}

export const getOrderBookData = async (pair: TokenPair) => {
  let { baseTokenAddress, quoteTokenAddress } = pair
  let orderbook = await fetchOrderBook(baseTokenAddress, quoteTokenAddress)
  let { asks, bids } = parseOrderBookData(orderbook, pair)

  return { asks, bids }
}

export const getTokenPairData = async (pair: TokenPair) => {
  let data = await fetchTokenPairData()
  let parsedData = parseTokenPairData(data, pair)

  return parsedData
}

export const getExchangeAddress = async () => {
  let data = await fetchInfo()
  let exchangeAddress = data.exchangeAddress

  return exchangeAddress
}



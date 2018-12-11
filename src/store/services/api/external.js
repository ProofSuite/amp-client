import { EXCHANGE_RATE_API_URL } from '../../../config/urls'

import fetch from 'isomorphic-fetch'

const request = (endpoint, options) => {
  return fetch(`${EXCHANGE_RATE_API_URL}${endpoint}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    ...options
  })
}

export const fetchExchangeRate = async (baseCurrencies, quoteCurrencies) => {
    baseCurrencies = baseCurrencies.join(',')
    quoteCurrencies = quoteCurrencies.join(',')

    const response = await request(`/data/pricemulti?fsyms=${baseCurrencies}&tsyms=${quoteCurrencies}`)

    if (response.status !== 200) {
        throw new Error('error')
    }

    const data = await response.json()

    return data
}
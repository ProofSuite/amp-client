// @flow
const addMonths = require('date-fns/add_months')

const request = (endpoint: string, options: Object) => {
  return fetch(`http://localhost:8081${endpoint}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'content-type': 'application/json'
    },
    mode: 'cors',
    ...options
  })
}

export const getOHLCV = async (
  baseToken: string,
  quoteToken: string,
  from: number,
  to: number,
  duration: number,
  units: string
) => {
  let now = Date.now()
  duration = duration || 1
  units = units || 'hour'
  from = from || Math.floor(addMonths(new Date(now), -2).getTime() / 1000)
  to = to || Math.floor(new Date(now).getTime() / 1000)

  const response = await request(
    `/ohlcv?baseToken=${baseToken}&quoteToken=${quoteToken}&duration=${duration}&units=${units}&from=${from}&to=${to}`,
    {}
  )

  if (response.status !== 200) {
    throw new Error('Error')
  }

  const data = await response.json()
  const pricePointMultiplier = 1e4

  let parsedData = data.map(datum => {
    return {
      date: new Date(datum.timestamp),
      open: Number(datum.open / pricePointMultiplier),
      high: Number(datum.high / pricePointMultiplier),
      low: Number(datum.low / pricePointMultiplier),
      close: Number(datum.close / pricePointMultiplier),
      volume: datum.volume / 1000000000000000000
    }
  })

  return parsedData
}

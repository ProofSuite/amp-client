// @flow
import { tsvParse } from 'd3-dsv'
import { timeParse } from 'd3-time-format'

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
  duration = duration || 1
  units = units || 'day'

  const response = await request(
    `/ohlcv?baseToken=${baseToken}&quoteToken=${quoteToken}&duration=${duration}&unit=${units}`,
    {}
  )

  if (response.status !== 200) {
    throw new Error('Error')
  }

  console.log(response)

  window.res = response

  const data = await response.json()

  let parsedData = data.map(datum => {
    return {
      date: new Date(datum.ts),
      open: Number(datum.o),
      high: Number(datum.h),
      low: Number(datum.l),
      close: Number(datum.c),
      volume: datum.v / 1000000000000000000
    }
  })

  console.log(parsedData)

  return parsedData
}

// export function parseData() {
//   return function(data) {
//     data.date = new Date(data.ts)
//     data.open = Number(data.o)
//     data.high = Number(data.h)
//     data.low = Number(data.l)
//     data.close = Number(data.c)
//     data.volume = data.v / 1000000000000000000

//     return data
//   }
// }

// export function parseData(parse: any) {
//   return function(d: any) {
//     d.date = parse(d.date)
//     d.open = +d.open
//     d.high = +d.high
//     d.low = +d.low
//     d.close = +d.close
//     d.volume = +d.volume
//     return d
//   }
// }

// export const parseDate = timeParse('%Y-%m-%d')

// export function getData() {
//   const ohlcv = fetch('http://rrag.github.io/react-stockcharts/data/MSFT_full.tsv')
//     .then(response => response.text())
//     .then(data => {
//       return tsvParse(data, parseData(parseDate))
//     })
//   return ohlcv
// }

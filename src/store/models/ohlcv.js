// @flow
import OHLCVModel from '../domains/ohlcv'
import * as actionCreators from '../actions/ohlcv'
import { timeSpans } from '../../components/OHLCV/SmallChart'
import type { SendTimelineParams } from '../../types/ohlcv'
import type { State, ThunkAction } from '../../types'

export default function getOHLCVModel(state: State) {
  return OHLCVModel(state.ohlcv)
}

export const updateTimeLine = ({ updateWRT }: SendTimelineParams): ThunkAction => {
  return async (dispatch, getState) => {
    let currentDuration = getState().ohlcv.currentDuration.label
    let currentTimeSpan = getState().ohlcv.currentTimeSpan.label

    if (updateWRT === 'timespan') {
      let candles = byTimeSpan(currentDuration, currentTimeSpan)
      if (candles > 40) {
        return dispatch(actionCreators.saveNoOfCandles(parseInt(candles, 10)))
      }
    } else {
      let { candles, time } = byDuration(currentDuration)
      if (time) {
        dispatch(actionCreators.saveTimeSpan(timeSpans[time]))
      }
      return dispatch(actionCreators.saveNoOfCandles(parseInt(candles, 10)))
    }
  }
}

function byDuration(duration) {
  switch (duration) {
    case '1h':
      return { time: 0, candles: 60 }

    case '6h':
      return { time: 1, candles: 72 }

    case '12h':
      return { time: 1, candles: 144 }

    case '1d':
      return { time: 2, candles: 96 }

    case '3d':
      return { time: 3, candles: 144 }

    case '7d':
      return { time: 4, candles: 168 }

    case '1M':
      return { time: 5, candles: 180 }

    case '3M':
      return { time: 6, candles: 180 }

    case '6M':
      return { time: 7, candles: 180 }

    case '1Y':
      return { time: 8, candles: 104 }

    default:
      return { candles: 150, time: '' }
  }
}

function byTimeSpan(duration, time) {
  return getCandles(duration) / timeToMinutes(time)
}

function getCandles(duration) {
  switch (duration) {
    case '1h':
      return 60

    case '4h':
      return 240

    case '12h':
      return 720

    case '1d':
      return 1440

    case '3d':
      return 4320

    case '7d':
      return 10080

    case '1M':
      return 44640

    case '3M':
      return 133920

    case '6M':
      return 267840

    case '1Y':
      return 535680

    default:
      return 0
  }
}

function timeToMinutes(time) {
  switch (time) {
    case '1m':
      return 1

    case '5m':
      return 5

    case '15m':
      return 15

    case '30m':
      return 20

    case '1h':
      return 60

    case '4h':
      return 240

    case '12h':
      return 720

    case '1d':
      return 1440

    case '7d':
      return 10080

    case '1M':
      return 44640

    default:
      return 0
  }
}

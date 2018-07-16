import { accelerationFactor, maxAccelerationFactor } from './indicatorSettings';
import {
  atr,
  bollingerBand,
  ema,
  forceIndex,
  macd,
  rsi,
  sar,
  sma,
  stochasticOscillator,
  tma,
  wma,
} from 'react-stockcharts/lib/indicator';

/******************
 *** INDICATORS ***
 ******************/

export const ema26 = ema()
  .id(0)
  .options({ windowSize: 26 })
  .merge((d, c) => {
    d.ema26 = c;
  })
  .accessor(d => d.ema26);

export const ema12 = ema()
  .id(1)
  .options({ windowSize: 12 })
  .merge((d, c) => {
    d.ema12 = c;
  })
  .accessor(d => d.ema12);

export const atr14 = atr()
  .options({ windowSize: 14 })
  .merge((d, c) => {
    d.atr14 = c;
  })
  .accessor(d => d.atr14);

export const ema20 = ema()
  .options({ windowSize: 20 })
  .merge((d, c) => {
    d.ema20 = c;
  }) // Required, if not provided, log a error
  .accessor(d => d.ema20) // Required, if not provided, log an error during calculation
  .stroke('blue'); // Optional

export const sma20 = sma()
  .options({ windowSize: 20 })
  .merge((d, c) => {
    d.ema20 = c;
  })
  .accessor(d => d.ema20);

export const tma20 = tma()
  .options({ windowSize: 20 })
  .merge((d, c) => {
    d.tma20 = c;
  })
  .accessor(d => d.tma20);

export const wma20 = wma()
  .options({ windowSize: 20 })
  .merge((d, c) => {
    d.wma20 = c;
  })
  .accessor(d => d.wma20);

export const ema50 = ema()
  .options({ windowSize: 50 })
  .merge((d, c) => {
    d.ema50 = c;
  })
  .accessor(d => d.ema50);

export const smaVolume50 = sma()
  .options({ windowSize: 20, sourcePath: 'volume' })
  .merge((d, c) => {
    d.smaVolume50 = c;
  })
  .accessor(d => d.smaVolume50)
  .stroke('#4682B4')
  .fill('#4682B4');

export const bb = bollingerBand()
  .merge((d, c) => {
    d.bb = c;
  })
  .accessor(d => d.bb);

export const defaultSar = sar()
  .options({
    accelerationFactor,
    maxAccelerationFactor,
  })
  .merge((d, c) => {
    d.sar = c;
  })
  .accessor(d => d.sar);

export const macdCalculator = macd()
  .options({
    fast: 12,
    slow: 26,
    signal: 9,
  })
  .merge((d, c) => {
    d.macd = c;
  })
  .accessor(d => d.macd);

export const rsiCalculator = rsi()
  .options({ windowSize: 14 })
  .merge((d, c) => {
    d.rsi = c;
  })
  .accessor(d => d.rsi);

export const slowSTO = stochasticOscillator()
  .options({ windowSize: 14, kWindowSize: 3 })
  .merge((d, c) => {
    d.slowSTO = c;
  })
  .accessor(d => d.slowSTO);

export const fastSTO = stochasticOscillator()
  .options({ windowSize: 14, kWindowSize: 1 })
  .merge((d, c) => {
    d.fastSTO = c;
  })
  .accessor(d => d.fastSTO);

export const fullSTO = stochasticOscillator()
  .options({ windowSize: 14, kWindowSize: 3, dWindowSize: 4 })
  .merge((d, c) => {
    d.fullSTO = c;
  })
  .accessor(d => d.fullSTO);

export const fi = forceIndex()
  .merge((d, c) => {
    d.fi = c;
  })
  .accessor(d => d.fi);

export const fiEMA13 = ema()
  .id(1)
  .options({ windowSize: 13, sourcePath: 'fi' })
  .merge((d, c) => {
    d.fiEMA13 = c;
  })
  .accessor(d => d.fiEMA13);

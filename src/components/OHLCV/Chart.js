import React from 'react'
import ReactDOM from 'react-dom'
import { format } from 'd3-format'
import { timeFormat } from 'd3-time-format'
import { Chart, ChartCanvas } from 'react-stockcharts'
import { ClickCallback } from "react-stockcharts/lib/interactive";
import { Menu, MenuItem, ContextMenuTarget } from '@blueprintjs/core'

import {
  AreaSeries,
  BarSeries,
  CandlestickSeries,
  LineSeries,
  MACDSeries,
  ScatterSeries,
  RSISeries,
  CircleMarker,
  StraightLine
} from 'react-stockcharts/lib/series'

import { 
  XAxis, 
  YAxis
} from 'react-stockcharts/lib/axes'

import {
  CrossHairCursor,
  CurrentCoordinate,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY
} from 'react-stockcharts/lib/coordinates'

import { elderRay } from 'react-stockcharts/lib/indicator'
import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale'
import { fitWidth } from 'react-stockcharts/lib/helper'
import { last } from 'react-stockcharts/lib/utils'

import {
  MACDTooltip,
  MovingAverageTooltip,
  OHLCTooltip,
  RSITooltip,
  SingleValueTooltip
} from 'react-stockcharts/lib/tooltip'


import {
  macdAppearance,
  atrAppearance,
  axisAppearance,
  mouseEdgeAppearance,
  theme,
  canvasGradient,
  edgeIndicatorAppearance,
  volumeAppearance
} from './indicatorSettings'

import { curveMonotoneX } from 'd3-shape'

import {
  atr14,
  bb,
  defaultSar,
  ema12,
  ema20,
  ema26,
  ema50,
  fi,
  fullSTO,
  macdCalculator,
  rsiCalculator,
  sma20,
  smaVolume50,
  tma20,
  wma20
} from './indicators'

function calculateData(inputData) {
  const elder = elderRay()
  return ema20(
    wma20(
      tma20(
        sma20(
          ema50(
            bb(
              smaVolume50(macdCalculator(ema12(ema26(elder(rsiCalculator(fullSTO(fi(defaultSar(atr14(inputData))))))))))
            )
          )
        )
      )
    )
  )
}

class OHLCVChart extends React.Component {

  renderContextMenu = (moreProps, e) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log('eyyyey')

    // let menu = (
    //   <Menu>
    //       <MenuItem text="Reset Default Layout" />
    //   </Menu>
    // )

    // console.log('hey again')

    // return ReactDOM.createPortal(
    //   menu,
    //   document.body
    // )

    // console.log('hey again again')
  }

  render() {
    const {
      type,
      data: initialData,
      width,
      ratio,
      indicatorHeight,
      atr,
      macd,
      rsi,
      line,
      volume,
      chartHeight,
      forceIndex,
      currentChart,
      noOfCandles,
    } = this.props

    let calculatedData = calculateData(initialData)
    if (calculatedData.length <= 1) {
      return null
    }

    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(d => d.date)
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(calculatedData)
    const start = xAccessor(last(data))
    const end = xAccessor(data[Math.max(0, data.length - noOfCandles)])
    const xExtents = [start, end]
    const height = chartHeight + indicatorHeight + 50

    var margin = { left: 70, right: 70, top: 20, bottom: 30 }
    var gridHeight = height - margin.top - margin.bottom
    var gridWidth = width - margin.left - margin.right + 50
    var showGrid = true

    var yGrid = showGrid
      ? {
          innerTickSize: -1 * gridWidth,
          tickStrokeDasharray: 'ShortDot',
          tickStrokeOpacity: 0.1,
          tickStrokeWidth: 1
        }
      : {}

    var xGrid = showGrid
      ? {
          innerTickSize: -1 * gridHeight,
          tickStrokeDasharray: 'ShortDot',
          tickStrokeOpacity: 0.1,
          tickStrokeWidth: 1
        }
      : {}

    return (
      <div>
        <ChartCanvas
          height={chartHeight + indicatorHeight + 50}
          width={width}
          ratio={ratio}
          margin={{ left: 50, right: 50, top: 20, bottom: 40 }}
          type={type}
          seriesName="MSFT"
          data={data}
          xScale={xScale}
          xAccessor={xAccessor}
          displayXAccessor={displayXAccessor}
          xExtents={xExtents}
        >
          {currentChart.name === 'Candles' && (
            <Chart
              id={1}
              height={chartHeight}
              yExtents={[d => [d.high, d.low], ema26.accessor(), ema12.accessor()]}
              padding={{ top: 10, bottom: 20 }}
            >
              <XAxis
                axisAt="bottom"
                orient="bottom"
                {...xGrid}
                showTicks={!macd.active && !rsi.active && !atr.active && !forceIndex.active}
                {...axisAppearance}
                outerTickSize={0}
              />

              <YAxis axisAt="right" orient="right" ticks={10} {...yGrid} {...axisAppearance} outerTickSize={0} />

              <CandlestickSeries
                opacity={0.6}
                widthRatio={0.6}
                fill={d => { return d.close >= d.open ? theme.GREEN3 : theme.RED2 }}
                candleStrokeWidth={3}
                strokeWidth={3}
                stroke={d => { return d.close >= d.open ? theme.GREEN3 : theme.RED2 }}
                wickStroke={d => { return d.close >= d.open ? theme.GREEN3 : theme.RED2 }}
              />

              <MouseCoordinateX
                at="bottom"
                orient="bottom"
                displayFormat={timeFormat('%m-%d/%H:%M')}
                rectRadius={5}
                {...mouseEdgeAppearance}
              />

              <MouseCoordinateY at="right" orient="right" displayFormat={format('.2f')} {...mouseEdgeAppearance} />

              {line.active && (
                <div>
                  <LineSeries yAccessor={ema26.accessor()} stroke={ema26.stroke()} />
                  <LineSeries yAccessor={ema12.accessor()} stroke={ema12.stroke()} />
                  <CurrentCoordinate yAccessor={ema26.accessor()} fill={ema26.stroke()} />
                  <CurrentCoordinate yAccessor={ema12.accessor()} fill={ema12.stroke()} />
                </div>
              )}

              <EdgeIndicator
                itemType="last"
                orient="right"
                edgeAt="right"
                yAccessor={d => d.close}
                fill={d => (d.close >= d.open ? theme.GREEN3 : theme.RED2)}
                stroke={d => (d.close >= d.open ? theme.GREEN3 : theme.RED2)}
                textFill={theme.white}
                {...edgeIndicatorAppearance}
              />

              <OHLCTooltip origin={[-30, 0]} {...mouseEdgeAppearance} />

              <MovingAverageTooltip
                onClick={e => console.log()}
                origin={[-28, 15]}
                options={[
                  {
                    yAccessor: ema26.accessor(),
                    type: 'EMA',
                    stroke: ema26.stroke(),
                    windowSize: ema26.options().windowSize
                  },
                  {
                    yAccessor: ema12.accessor(),
                    type: 'EMA',
                    stroke: ema12.stroke(),
                    windowSize: ema12.options().windowSize
                  }
                ]}
              />
              {/* <ClickCallback
                onContextMenu={this.renderContextMenu}
					    /> */}
            </Chart>
          )}

          {currentChart.name === 'Area' && (
            <Chart id={0} yExtents={d => d.close} height={chartHeight}>
              <defs>
                <linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
                  <stop offset="0%" stopColor={theme.skyBlue2} stopOpacity={0.2} />
                  <stop offset="70%" stopColor={theme.skyBlue1} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={theme.skyBlue} stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <MouseCoordinateX
                at="bottom"
                orient="bottom"
                displayFormat={timeFormat('%m-%d/%H:%M')}
                rectRadius={5}
                {...mouseEdgeAppearance}
              />
              <MouseCoordinateY at="right" orient="right" displayFormat={format('.2f')} {...mouseEdgeAppearance} />
              <XAxis
                axisAt="bottom"
                orient="bottom"
                showTicks={!macd.active && !rsi.active && !atr.active && !forceIndex.active}
                {...xGrid}
                {...axisAppearance}
                outerTickSize={0}
              />
              <YAxis axisAt="right" orient="right" {...yGrid} ticks={10} {...axisAppearance} outerTickSize={0} />
              <AreaSeries
                yAccessor={d => d.close}
                fill="url(#MyGradient)"
                strokeWidth={2}
                interpolation={curveMonotoneX}
                canvasGradient={canvasGradient}
              />
            </Chart>
          )}

          {currentChart.name === 'Line' && (
            <Chart id={1} height={chartHeight} yExtents={d => [d.high, d.low]}>
              <MouseCoordinateX
                at="bottom"
                orient="bottom"
                displayFormat={timeFormat('%m-%d/%H:%M')}
                rectRadius={5}
                {...mouseEdgeAppearance}
              />
              <MouseCoordinateY at="right" orient="right" displayFormat={format('.2f')} {...mouseEdgeAppearance} />
              <XAxis
                axisAt="bottom"
                orient="bottom"
                {...xGrid}
                showTicks={!macd.active && !rsi.active && !atr.active && !forceIndex.active}
                {...axisAppearance}
                outerTickSize={0}
              />
              <YAxis axisAt="right" orient="right" ticks={10} {...yGrid} {...axisAppearance} outerTickSize={0} />
              <LineSeries yAccessor={d => d.close} strokeDasharray="Solid" />
              <ScatterSeries yAccessor={d => d.close} marker={CircleMarker} markerProps={{ r: 3 }} />
              <OHLCTooltip forChart={1} origin={[-40, 0]} />
            </Chart>
          )}

          {currentChart.name === 'Line' && (
            <Chart id={1} height={chartHeight} yExtents={d => [d.high, d.low]}>
              <MouseCoordinateX
                at="bottom"
                orient="bottom"
                displayFormat={timeFormat('%m-%d/%H:%M')}
                rectRadius={5}
                {...mouseEdgeAppearance}
              />
              <MouseCoordinateY at="right" orient="right" displayFormat={format('.2f')} {...mouseEdgeAppearance} />
              <XAxis
                axisAt="bottom"
                orient="bottom"
                {...xGrid}
                showTicks={!macd.active && !rsi.active && !atr.active && !forceIndex.active}
                {...axisAppearance}
                outerTickSize={0}
              />
              <YAxis axisAt="right" orient="right" ticks={10} {...yGrid} {...axisAppearance} outerTickSize={0} />
              <LineSeries yAccessor={d => d.close} strokeDasharray="Solid" />
              <ScatterSeries yAccessor={d => d.close} marker={CircleMarker} markerProps={{ r: 3 }} />
              <OHLCTooltip forChart={1} origin={[-40, 0]} />
            </Chart>
          )}

          {currentChart.name === 'Heikin Ashi' && (
            <Chart
              id={0}
              height={chartHeight}
              yExtents={[d => [d.high, d.low], ema20.accessor(), ema50.accessor()]}
              padding={{ top: 10, bottom: 20 }}
            >
              <MouseCoordinateY at="right" orient="right" displayFormat={format('.2f')} {...mouseEdgeAppearance} />
              <XAxis
                axisAt="bottom"
                orient="bottom"
                {...xGrid}
                showTicks={!macd.active && !rsi.active && !atr.active && !forceIndex.active}
                {...axisAppearance}
                outerTickSize={0}
              />
              <YAxis axisAt="right" orient="right" ticks={10} {...yGrid} {...axisAppearance} outerTickSize={0} />
              <MouseCoordinateY at="right" orient="right" displayFormat={format('.1f')} />

              <CandlestickSeries
                fill={d => d.close >= d.open ? theme.GREEN3 : theme.RED2 }
                opacity={1}
                stroke={d => d.close >= d.open ? theme.GREEN3 : theme.RED2 }
                widthRatio={0.8}
                wickStroke={d => d.close >= d.open ? theme.GREEN3 : theme.RED2 }
              />

              {line.active && (
                <div>
                  <LineSeries yAccessor={ema26.accessor()} stroke={ema26.stroke()} />
                  <LineSeries yAccessor={ema12.accessor()} stroke={ema12.stroke()} />
                  <CurrentCoordinate yAccessor={ema26.accessor()} fill={ema26.stroke()} />
                  <CurrentCoordinate yAccessor={ema12.accessor()} fill={ema12.stroke()} />
                </div>
              )}

              <EdgeIndicator
                itemType="last"
                orient="right"
                edgeAt="right"
                yAccessor={ema20.accessor()}
                fill={ema20.fill()}
                {...edgeIndicatorAppearance}
              />
              <EdgeIndicator
                itemType="last"
                orient="right"
                edgeAt="right"
                yAccessor={ema50.accessor()}
                fill={ema50.fill()}
                {...edgeIndicatorAppearance}
              />
              <EdgeIndicator
                itemType="last"
                orient="right"
                edgeAt="right"
                yAccessor={d => d.close}
                fill={d => (d.close > d.open ? theme.green : '#FF0000')}
                {...edgeIndicatorAppearance}
              />
              <EdgeIndicator
                itemType="first"
                orient="left"
                edgeAt="left"
                yAccessor={ema20.accessor()}
                fill={ema20.fill()}
                {...edgeIndicatorAppearance}
              />
              <EdgeIndicator
                itemType="first"
                orient="left"
                edgeAt="left"
                yAccessor={ema50.accessor()}
                fill={ema50.fill()}
                {...edgeIndicatorAppearance}
              />
              <EdgeIndicator
                itemType="first"
                orient="left"
                edgeAt="left"
                yAccessor={d => d.close}
                fill={d => (d.close > d.open ? theme.green : '#FF0000')}
                {...edgeIndicatorAppearance}
              />

              <OHLCTooltip origin={[-40, 0]} />
              <MovingAverageTooltip
                origin={[-28, 15]}
                options={[
                  {
                    yAccessor: ema20.accessor(),
                    type: 'EMA',
                    stroke: ema20.stroke(),
                    windowSize: ema20.options().windowSize
                  },
                  {
                    yAccessor: ema50.accessor(),
                    type: 'EMA',
                    stroke: ema50.stroke(),
                    windowSize: ema50.options().windowSize
                  }
                ]}
              />
            </Chart>
          )}

          {volume.active && (
            <Chart
              id={2}
              height={150}
              yExtents={[d => d.volume, smaVolume50.accessor()]}
              origin={(w, h) => [0, h - indicatorHeight - 150]}
            >
              <MouseCoordinateY at="left" orient="left" displayFormat={format('.4s')} {...mouseEdgeAppearance} />
              <BarSeries yAccessor={d => d.volume} fill={d => d.close > d.open ? theme.GREEN3 : theme.RED2} />
              <AreaSeries yAccessor={smaVolume50.accessor()} {...volumeAppearance} />
            </Chart>
          )}

          {macd.active && (
            <Chart
              id={3}
              height={160}
              yExtents={macdCalculator.accessor()}
              origin={(w, h) => [
                0,
                h -
                  macd.height -
                  (atr.active ? atr.height : 0) -
                  (rsi.active ? rsi.height : 0) -
                  (forceIndex.active ? forceIndex.height : 0)
              ]}
              padding={{ top: 35, bottom: 10 }}
            >
              <XAxis
                axisAt="bottom"
                orient="bottom"
                {...axisAppearance}
                {...xGrid}
                showTicks={!atr.active && !rsi.active}
              />
              <YAxis axisAt="right" orient="right" ticks={2} {...yGrid} {...axisAppearance} />

              {!atr.active &&
                !rsi.active && (
                  <MouseCoordinateX
                    at="bottom"
                    orient="bottom"
                    displayFormat={timeFormat('%Y-%m-%d')}
                    rectRadius={5}
                    {...mouseEdgeAppearance}
                  />
                )}
              <MouseCoordinateY at="right" orient="right" displayFormat={format('.2f')} {...mouseEdgeAppearance} />
              <MACDSeries yAccessor={d => d.macd} {...macdAppearance} />
              <MACDTooltip
                origin={[-28, 35]}
                yAccessor={d => d.macd}
                options={macdCalculator.options()}
                appearance={macdAppearance}
              />
            </Chart>
          )}
          {rsi.active && (
            <Chart
              id={4}
              yExtents={[0, 100]}
              height={rsi.height}
              origin={(w, h) => [
                0,
                h - rsi.height - (atr.active ? atr.height : 0) - (forceIndex.active ? forceIndex.height : 0)
              ]}
              padding={{ top: 10, bottom: 10 }}
            >
              <XAxis
                axisAt="bottom"
                orient="bottom"
                showTicks={!atr.active && !forceIndex.active}
                {...xGrid}
                {...axisAppearance}
                outerTickSize={0}
              />

              <YAxis axisAt="right" orient="right" tickValues={[30, 50, 70]} {...yGrid} {...axisAppearance} />

              {!atr.active &&
                !forceIndex.active && (
                  <MouseCoordinateX
                    at="bottom"
                    orient="bottom"
                    displayFormat={timeFormat('%Y-%m-%d')}
                    {...mouseEdgeAppearance}
                  />
                )}
              <MouseCoordinateY at="right" orient="right" displayFormat={format('.2f')} {...mouseEdgeAppearance} />

              <RSISeries yAccessor={d => d.rsi} />

              <RSITooltip origin={[-28, 15]} yAccessor={d => d.rsi} options={rsiCalculator.options()} />
            </Chart>
          )}
          {atr.active && (
            <Chart
              id={5}
              yExtents={atr14.accessor()}
              height={atr.height}
              origin={(w, h) => [0, h - atr.height - (forceIndex.active ? forceIndex.height : 0)]}
              padding={{ top: 10, bottom: 10 }}
            >
              <XAxis
                axisAt="bottom"
                orient="bottom"
                {...xGrid}
                {...axisAppearance}
                outerTickSize={0}
                showTicks={!forceIndex.active}
              />
              <YAxis axisAt="right" orient="right" {...yGrid} {...axisAppearance} ticks={2} />

              {!forceIndex.active && (
                <MouseCoordinateX
                  at="bottom"
                  orient="bottom"
                  displayFormat={timeFormat('%Y-%m-%d')}
                  {...mouseEdgeAppearance}
                />
              )}
              <MouseCoordinateY at="right" orient="right" displayFormat={format('.2f')} {...mouseEdgeAppearance} />

              <LineSeries yAccessor={atr14.accessor()} {...atrAppearance} />
              <SingleValueTooltip
                yAccessor={atr14.accessor()}
                yLabel={`ATR (${atr14.options().windowSize})`}
                yDisplayFormat={format('.2f')}
                /* valueStroke={atr14.stroke()} - optional prop */
                /* labelStroke="#4682B4" - optional prop */
                origin={[-40, 15]}
              />
            </Chart>
          )}

          {forceIndex.active && (
            <Chart
              id={6}
              height={150}
              yExtents={fi.accessor()}
              origin={(w, h) => [0, h - 150]}
              padding={{ top: 30, right: 0, bottom: 10, left: 0 }}
            >
              <XAxis axisAt="bottom" orient="bottom" {...xGrid} {...axisAppearance} outerTickSize={0} />
              <YAxis
                axisAt="right"
                orient="right"
                {...yGrid}
                ticks={4}
                tickFormat={format('.2s')}
                {...axisAppearance}
              />
              <MouseCoordinateX
                at="bottom"
                orient="bottom"
                displayFormat={timeFormat('%Y-%m-%d')}
                {...mouseEdgeAppearance}
              />
              <MouseCoordinateY at="right" orient="right" displayFormat={format('.4s')} {...mouseEdgeAppearance} />

              <AreaSeries baseAt={scale => scale(0)} yAccessor={fi.accessor()} />
              <StraightLine yValue={0} />

              <SingleValueTooltip
                yAccessor={fi.accessor()}
                yLabel="ForceIndex (1)"
                yDisplayFormat={format('.4s')}
                origin={[-40, 15]}
              />
            </Chart>
          )}
          <CrossHairCursor />
        </ChartCanvas>
      </div>
    )
  }
}

OHLCVChart = ContextMenuTarget(OHLCVChart)
OHLCVChart = fitWidth(OHLCVChart)

export default OHLCVChart

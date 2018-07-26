import React from 'react';
import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';
import { Chart, ChartCanvas } from 'react-stockcharts';
import {
  AreaSeries,
  BarSeries,
  CandlestickSeries,
  LineSeries,
  MACDSeries,
  RSISeries,
  StraightLine,
} from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import {
  CrossHairCursor,
  CurrentCoordinate,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
} from 'react-stockcharts/lib/coordinates';
import { elderRay } from 'react-stockcharts/lib/indicator';

import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale';
import {
  MACDTooltip,
  MovingAverageTooltip,
  OHLCTooltip,
  RSITooltip,
  SingleValueTooltip,
} from 'react-stockcharts/lib/tooltip';
import { fitWidth } from 'react-stockcharts/lib/helper';
import { last } from 'react-stockcharts/lib/utils';
import { macdAppearance, mouseEdgeAppearance, theme } from './indicatorSettings';

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
  wma20,
} from './indicators';

function calculateData(inputData) {
  const elder = elderRay();
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
  );
}

class OHLCVChart extends React.Component {
  constructor(props) {
    super(props);
    this.saveNode = this.saveNode.bind(this);
    this.resetXDomain = this.resetXDomain.bind(this);
  }

  saveNode(node) {
    this.node = node;
  }
  resetXDomain() {
    this.node.resetXDomain();
  }
  render() {
    const {
      type,
      data: initialData,
      expandedChard,
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
    } = this.props;

    let calculatedData = calculateData(initialData);
    if (calculatedData.length <= 1) {
      return null;
    }
    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(d => d.date);
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(calculatedData);

    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 150)]);
    const xExtents = [start, end];

    return (
      <div>
        <p onClick={this.resetXDomain}>reset</p>
        <ChartCanvas
          ref={this.saveNode}
          height={chartHeight + indicatorHeight + 50}
          width={width}
          ratio={ratio}
          margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
          type={type}
          seriesName="MSFT"
          data={data}
          xScale={xScale}
          xAccessor={xAccessor}
          displayXAccessor={displayXAccessor}
          xExtents={xExtents}
        >
          <Chart
            id={1}
            height={chartHeight}
            yExtents={[d => [d.high, d.low], ema26.accessor(), ema12.accessor()]}
            padding={{ top: 10, bottom: 20 }}
          >
            <XAxis
              axisAt="bottom"
              orient="bottom"
              showTicks={!macd.active && !rsi.active && !atr.active && !forceIndex.active}
              stroke={theme.axis}
              fill={theme.axis}
              tickStroke={theme.axis}
              outerTickSize={0}
            />

            <YAxis
              axisAt="right"
              orient="right"
              ticks={10}
              stroke={theme.axis}
              tickStroke={theme.axis}
              fill={theme.axis}
              outerTickSize={0}
            />

            <CandlestickSeries
              fill={d => {
                return d.close > d.open ? theme.greenMint : theme.redDesire;
              }}
              opacity={1}
              stroke={d => {
                return d.close > d.open ? theme.greenNeon : theme.redChilli;
              }}
              wickStroke={d => {
                return d.close > d.open ? theme.greenNeon : theme.redChilli;
              }}
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
              fill={d => (d.close > d.open ? '#A2F5BF' : '#F9ACAA')}
              stroke={d => (d.close > d.open ? '#0B4228' : '#6A1B19')}
              textFill={d => (d.close > d.open ? '#0B4228' : '#420806')}
              strokeOpacity={1}
              strokeWidth={3}
              arrowWidth={2}
            />

            <OHLCTooltip origin={[-40, 0]} />

            <MovingAverageTooltip
              onClick={e => console.log(e)}
              origin={[-38, 15]}
              options={[
                {
                  yAccessor: ema26.accessor(),
                  type: 'EMA',
                  stroke: ema26.stroke(),
                  windowSize: ema26.options().windowSize,
                },
                {
                  yAccessor: ema12.accessor(),
                  type: 'EMA',
                  stroke: ema12.stroke(),
                  windowSize: ema12.options().windowSize,
                },
              ]}
            />
          </Chart>
          {volume.active && (
            <Chart
              id={2}
              height={150}
              yExtents={[d => d.volume, smaVolume50.accessor()]}
              origin={(w, h) => [0, h - indicatorHeight - 150]}
            >
              <MouseCoordinateY at="left" orient="left" displayFormat={format('.4s')} {...mouseEdgeAppearance} />

              <BarSeries yAccessor={d => d.volume} fill={d => (d.close > d.open ? '#6BA583' : '#FF0000')} />
              <AreaSeries yAccessor={smaVolume50.accessor()} stroke={smaVolume50.stroke()} fill={smaVolume50.fill()} />
            </Chart>
          )}

          {macd.active && (
            <Chart
              id={3}
              height={150}
              yExtents={macdCalculator.accessor()}
              origin={(w, h) => [
                0,
                h -
                  macd.height -
                  (atr.active ? atr.height : 0) -
                  (rsi.active ? rsi.height : 0) -
                  (forceIndex.active ? forceIndex.height : 0),
              ]}
              padding={{ top: 10, bottom: 10 }}
            >
              <XAxis
                axisAt="bottom"
                orient="bottom"
                stroke={theme.axis}
                tickStroke={theme.axis}
                fill={theme.axis}
                showTicks={!atr.active && !rsi.active}
              />
              <YAxis
                axisAt="right"
                orient="right"
                ticks={2}
                stroke={theme.axis}
                tickStroke={theme.axis}
                fill={theme.axis}
              />

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
                origin={[-38, 15]}
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
                h - rsi.height - (atr.active ? atr.height : 0) - (forceIndex.active ? forceIndex.height : 0),
              ]}
              padding={{ top: 10, bottom: 10 }}
            >
              <XAxis
                axisAt="bottom"
                orient="bottom"
                showTicks={!atr.active && !forceIndex.active}
                stroke={theme.axis}
                tickStroke={theme.axis}
                fill={theme.axis}
                outerTickSize={0}
              />

              <YAxis
                axisAt="right"
                orient="right"
                tickValues={[30, 50, 70]}
                stroke={theme.axis}
                tickStroke={theme.axis}
                fill={theme.axis}
              />

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

              <RSITooltip origin={[-38, 15]} yAccessor={d => d.rsi} options={rsiCalculator.options()} />
            </Chart>
          )}
          {atr.active &&
            expandedChard && (
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
                  stroke={theme.axis}
                  tickStroke={theme.axis}
                  fill={theme.axis}
                  outerTickSize={0}
                  showTicks={!forceIndex.active}
                />
                <YAxis
                  axisAt="right"
                  orient="right"
                  stroke={theme.axis}
                  tickStroke={theme.axis}
                  fill={theme.axis}
                  ticks={2}
                />

                {!forceIndex.active && (
                  <MouseCoordinateX
                    at="bottom"
                    orient="bottom"
                    displayFormat={timeFormat('%Y-%m-%d')}
                    {...mouseEdgeAppearance}
                  />
                )}
                <MouseCoordinateY at="right" orient="right" displayFormat={format('.2f')} {...mouseEdgeAppearance} />

                <LineSeries yAccessor={atr14.accessor()} stroke={atr14.stroke()} />
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

          {forceIndex.active &&
            expandedChard && (
              <Chart
                id={6}
                height={150}
                yExtents={fi.accessor()}
                origin={(w, h) => [0, h - 150]}
                padding={{ top: 30, right: 0, bottom: 10, left: 0 }}
              >
                <XAxis
                  axisAt="bottom"
                  orient="bottom"
                  stroke={theme.axis}
                  tickStroke={theme.axis}
                  fill={theme.axis}
                  outerTickSize={0}
                />
                <YAxis
                  axisAt="right"
                  orient="right"
                  ticks={4}
                  tickFormat={format('.2s')}
                  stroke={theme.axis}
                  tickStroke={theme.axis}
                  fill={theme.axis}
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
    );
  }
}
OHLCVChart = fitWidth(OHLCVChart);

export default OHLCVChart;

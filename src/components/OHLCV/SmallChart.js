//@flow
import React from 'react';
import { IndicatorSelect, StandardSelect } from '../SelectMenu';
import ChartLoadingScreen from './ChartLoadingScreen';
import { Card } from '@blueprintjs/core';
import type { SendTimelineParams } from '../../types/ohlcv';

type Indicator = {
  name: string,
  active: boolean,
  height: number,
  rank: number,
};

const timeSpans: Array<Object> = [
  { name: '1 min', label: '1 m' },
  { name: '5 min', label: '5 m' },
  { name: '15 min', label: '15 m' },
  { name: '30 min', label: '30 m' },
  { name: '1 hr', label: '1 h' },
  { name: '4 hr', label: '4 h' },
  { name: '12 hr', label: '12 h' },
  { name: '1 day', label: '1 d' },
  { name: '7 days', label: '7 d' },
  { name: '1 month', label: '1 M' },
].map((p, index) => ({ ...p, rank: index }));

const indicators: Array<Indicator> = [
  { name: 'Volume', active: true, height: 0 },
  { name: 'Trendline', active: true, height: 0 },
  { name: 'MACD', active: true, height: 150 },
  { name: 'RSI', active: false, height: 150 },
  { name: 'ATR', active: false, height: 150 },
  { name: 'ForceIndex', active: false, height: 150 },
].map((p, index) => ({ ...p, rank: index }));

const chartTypes: Array<Object> = [
  { name: 'Candles', icon: 'timeline-bar-chart' },
  { name: 'Heikin Ashi', aicon: 'chart' },
  { name: 'Line', icon: 'timeline-line-chart' },
  { name: 'Area', icon: 'timeline-area-chart' },
].map((p, index) => ({ ...p, rank: index }));

const duration: Array<Object> = [
  { name: '1 Hour', label: '1 h' },
  { name: '6 Hour', label: '6 h' },
  { name: '1 Day', label: '1 d' },
  { name: '3 Days', label: '3 d' },
  { name: '7 Days', label: '7 d' },
  { name: '1 Month', label: '1 M' },
  { name: '6 Month', label: '6 M' },
  { name: '1 Year', label: '1 Y' },
  { name: 'Lifetime', label: 'Lifetime' },
].map((p, index) => ({ ...p, rank: index }));

type Props = {
  ohlcvData: Array<Object>,
  pairId: string,
  pair: string,
  updateTimeLine: SendTimelineParams => void,
};
type State = {
  chartHeight: number,
  indicatorHeight: number,
  currentTimeSpan: Object,
  currentDuration: Object,
  currentChart: Object,
  indicators: Array<Indicator>,
  timeSpans: Array<Object>,
  chartTypes: Array<Object>,
  duration: Array<Object>,
  expandedChard: boolean,
};

export default class SmallChart extends React.PureComponent<Props, State> {
  state = {
    chartHeight: 500,
    indicatorHeight: 150,
    currentTimeSpan: timeSpans[0],
    currentDuration: duration[0],
    currentChart: chartTypes[0],
    chartTypes: chartTypes,
    indicators: indicators,
    timeSpans: timeSpans,
    duration: duration,
    expandedChard: true,
  };

  changeDuration = (e: Object) => {
    this.setState({ currentDuration: e });
    const { currentTimeSpan } = this.state;
    const { pair, pairId } = this.props;

    this.props.updateTimeLine({ pair, pairId, time: currentTimeSpan.name, duration: e.name });
  };

  changeTimeSpan = (e: Object) => {
    const { currentDuration } = this.state;
    const { pair, pairId } = this.props;

    this.setState({ currentTimeSpan: e });
    this.props.updateTimeLine({ pair, pairId, time: e.name, duration: currentDuration.name });
  };

  changeChartType = (e: Object) => {
    this.setState({ currentChart: e });
  };

  onUpdateIndicators = (indicator: Indicator, active: boolean) => {
    const { indicators, indicatorHeight } = this.state;
    let newIndicatorHeight;

    active
      ? (newIndicatorHeight = indicatorHeight + indicators[indicator.rank].height)
      : (newIndicatorHeight = indicatorHeight - indicators[indicator.rank].height);

    this.setState({
      indicators: [
        ...indicators.slice(0, indicator.rank),
        { ...indicators[indicator.rank], active },
        ...indicators.slice(indicator.rank + 1),
      ],
      indicatorHeight: newIndicatorHeight,
    });
  };

  render() {
    const {
      props: { ohlcvData },
      state: { indicators, chartHeight, indicatorHeight, expandedChard, currentChart },
      changeTimeSpan,
      onUpdateIndicators,
      changeDuration,
      changeChartType,
    } = this;

    return (
      <Card className="main-chart">
        <Toolbar
          changeDuration={changeDuration}
          onUpdateIndicators={onUpdateIndicators}
          changeTimeSpan={changeTimeSpan}
          changeChartType={changeChartType}
          state={this.state}
        />
        <ChartLoadingScreen
          volume={indicators[0]}
          line={indicators[1]}
          macd={indicators[2]}
          rsi={indicators[3]}
          atr={indicators[4]}
          forceIndex={indicators[5]}
          indicatorHeight={indicatorHeight}
          chartHeight={chartHeight}
          currentChart={currentChart}
          expandedChard={expandedChard}
          data={ohlcvData || []}
          width="100%"
        />
      </Card>
    );
  }
}

const Toolbar = ({
  state,
  onUpdateIndicators,
  changeTimeSpan,
  updateProps,
  changeDuration,
  changeChartType,
  indicators,
}) => (
  <div className="toolbar">
    <div className="left">
      <div className="menu chart-type">
        <StandardSelect
          items={state.chartTypes}
          item={state.currentChart || chartTypes[0]}
          handleChange={changeChartType}
          icon="series-configuration"
          type="icon"
        />
      </div>
      <div className="menu time-span">
        <StandardSelect
          items={state.timeSpans}
          item={state.currentTimeSpan || timeSpans[0]}
          handleChange={changeTimeSpan}
          icon="series-add"
          type="text"
        />
      </div>
      <div className="menu">
        <StandardSelect
          items={state.duration}
          item={state.currentDuration || duration[0]}
          handleChange={changeDuration}
          icon="series-add"
          type="text"
        />
      </div>
      <div className="menu multi-select">
        <IndicatorSelect indicators={state.indicators} onUpdateIndicators={onUpdateIndicators} />
      </div>
    </div>
  </div>
);

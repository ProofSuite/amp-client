//@flow
import React from 'react';
import { IndicatorSelect, StandardSelect } from '../SelectMenu';
import ChartLoadingScreen from './ChartLoadingScreen';
import { Card, Button } from '@blueprintjs/core';
import type { SendTimelineParams } from '../../types/ohlcv';
import styled from 'styled-components';

type Indicator = {
  name: string,
  active: boolean,
  height: number,
  rank: number,
};

export const timeSpans: Array<Object> = [
  { name: '1 min', label: '1m' },
  { name: '5 min', label: '5m' },
  { name: '15 min', label: '15m' },
  { name: '30 min', label: '30m' },
  { name: '1 hr', label: '1h' },
  { name: '4 hr', label: '4h' },
  { name: '12 hr', label: '12h' },
  { name: '1 day', label: '1d' },
  { name: '7 days', label: '7d' },
  { name: '1 month', label: '1M' },
].map((p, index) => ({ ...p, rank: index }));

const indicators: Array<Indicator> = [
  { name: 'Volume', active: true, height: 0 },
  { name: 'Trendline', active: true, height: 0 },
  { name: 'MACD', active: true, height: 160 },
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

export const duration: Array<Object> = [
  { name: '1 Hour', label: '1h' },
  { name: '6 Hour', label: '6h' },
  { name: '12 Hour', label: '12h' },
  { name: '1 Day', label: '1d' },
  { name: '3 Days', label: '3d' },
  { name: '7 Days', label: '7d' },
  { name: '1 Month', label: '1M' },
  { name: '6 Month', label: '3M' },
  { name: '6 Month', label: '6M' },
  { name: '1 Year', label: '1Y' },
  { name: 'Full', label: 'Full' },
].map((p, index) => ({ ...p, rank: index }));

type Props = {
  ohlcvData: Array<Object>,
  currentTimeSpan: Object,
  currentDuration: Object,
  noOfCandles: number,
  updateTimeLine: SendTimelineParams => void,
  saveDuration: Object => void,
  saveTimeSpan: Object => void,
};
type State = {
  chartHeight: number,
  indicatorHeight: number,
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
    currentChart: chartTypes[0],
    chartTypes: chartTypes,
    indicators: indicators,
    timeSpans: timeSpans,
    duration: duration,
    expandedChard: true,
  };

  changeDuration = (index: number) => {
    const { duration } = this.state;
    const { currentTimeSpan } = this.props;

    this.props.saveDuration(duration[index]);
    this.props.updateTimeLine({ updateWRT: 'duration', time: currentTimeSpan.label, duration: duration[index].label });
  };

  changeTimeSpan = (e: Object) => {
    const { currentDuration } = this.props;

    this.props.saveTimeSpan(e);
    this.props.updateTimeLine({ updateWRT: 'timespan', time: e.label, duration: currentDuration.label });
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
      props: { ohlcvData, currentDuration, currentTimeSpan, noOfCandles },
      state: { indicators, chartHeight, indicatorHeight, expandedChard, currentChart },
      changeTimeSpan,
      onUpdateIndicators,
      changeDuration,
      changeChartType,
    } = this;
    return (
      <Wrapper className="main-chart">
        <Toolbar
          changeDuration={changeDuration}
          onUpdateIndicators={onUpdateIndicators}
          changeTimeSpan={changeTimeSpan}
          changeChartType={changeChartType}
          currentDuration={currentDuration}
          currentTimeSpan={currentTimeSpan}
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
          noOfCandles={noOfCandles}
          currentChart={currentChart}
          expandedChard={expandedChard}
          data={ohlcvData}
          width="100%"
        />
      </Wrapper>
    );
  }
}

const Toolbar = ({
  state,
  onUpdateIndicators,
  changeTimeSpan,
  currentTimeSpan,
  currentDuration,
  updateProps,
  changeDuration,
  changeChartType,
  indicators,
}) => (
  <ToolbarWrapper>
    <ChartTypeMenu>
      <StandardSelect
        items={state.chartTypes}
        item={state.currentChart || state.chartTypes[0]}
        handleChange={changeChartType}
        icon="series-configuration"
        type="icon"
      />
    </ChartTypeMenu>
    <TimeSpanMenu>
      <StandardSelect
        items={state.timeSpans}
        item={currentTimeSpan || state.timeSpans[0]}
        handleChange={changeTimeSpan}
        icon="series-add"
        type="text"
      />
    </TimeSpanMenu>

    <DurationMenu duration={state.duration} currentDuration={currentDuration} changeDuration={changeDuration} />

    <TimeSpanMenu>
      <IndicatorSelect indicators={state.indicators} onUpdateIndicators={onUpdateIndicators} />
    </TimeSpanMenu>
  </ToolbarWrapper>
);

const DurationMenu = ({ duration, changeDuration, currentDuration }) => {
  return (
    <DurationWrapper>
      {duration.map((dur, index) => {
        const { label } = dur;
        return (
          <Button
            key={index}
            onClick={() => changeDuration(index)}
            text={label}
            minimal
            intent={currentDuration.label === label ? 'primary' : ''}
            active={currentDuration.label === label}
          />
        );
      })}
    </DurationWrapper>
  );
};

const DurationWrapper = styled.div`
  position: relative;
  float: left;
  margin-right: 25px;
  display: flex;
  padding: 0 !important;
  flex-direction: row !important;
  margin-right: 25px;
  & button {
    padding: 0 5px !important;
  }
  &:active {
    background-color: transparent !important;
  }
`;

const ToolbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;

  @media only screen and (max-width: 1200px) {
    display: none;
  }

`;

const ChartTypeMenu = styled.div`
  position: relative;
  float: left;
  margin-right: 25px;
  display: flex;
  width: 30px;
  flex-direction: column;
`;

const Wrapper = styled(Card)`
  height: 100%;
  min-height: 775px;
  padding: 20px 20px 0 20px;
`;

const TimeSpanMenu = styled.div`
  position: relative;
  float: left;
  margin-right: 25px;
  display: flex;
  width: auto;
  flex-direction: column;
`;

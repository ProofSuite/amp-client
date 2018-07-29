//@flow
import React from 'react';
import { MultiSelect, StandardSelect } from '../SelectMenu';
import ChartLoadingScreen from './ChartLoadingScreen';
import { Button, Card, Icon, Overlay } from '@blueprintjs/core';

const timeSpans: Array<Object> = [
  { name: '1 min' },
  { name: '5 min' },
  { name: '15 min' },
  { name: '30 min' },
  { name: '1 hr' },
  { name: '4 hr' },
  { name: '12 hr' },
  { name: '1 day' },
  { name: '7 days' },
  { name: '1 month' },
].map((p, index) => ({ ...p, rank: index }));

const indicators: Array<Object> = [
  { name: 'Volume', active: true, height: 0 },
  { name: 'Trendline', active: true, height: 0 },
  { name: 'MACD', active: true, height: 150 },
  { name: 'RSI', active: true, height: 150 },
  { name: 'ATR', active: false, height: 150 },
  { name: 'ForceIndex', active: false, height: 150 },
  { name: 'Reset', active: false, height: 0 },
].map((p, index) => ({ ...p, rank: index }));

type Props = {
  ohlcvData: Array<Object>,
  pairId: string,
  pair: string,
  toggleExpand: () => void,
  expandedChard: boolean,
  updateTimeLine: SendTimelineParams => void,
};
type State = {
  chartHeight: number,
  indicatorHeight: number,
  currentTimeSpan: Object,
  currentDuration: string,
  indicators: Array<Object>,
  timeSpans: Array<Object>,
  expandedChard: boolean,
};

export default class ExtendedChart extends React.Component<Props, State> {
  state = {
    chartHeight: 450,
    indicatorHeight: 300,
    currentTimeSpan: timeSpans[0],
    currentDuration: '',
    indicators: indicators,
    timeSpans: timeSpans,
    expandedChard: false,
  };
  static defaultProps = {
    toggleExpand: () => () => {},
    expandedChard: false,
  };

  getObjectFromArray = (arr: Array<Object>, name: string) => {
    let foundObj = {};
    arr.map(obj => {
      if (obj.name === name) {
        foundObj = obj;
      }
    });
    return foundObj;
  };

  toogleChartIndicator = (ind: Object) => {
    if (ind.name === 'Reset') {
      this.state.indicators = indicators;
    } else {
      let indicatorTemp = this.getObjectFromArray(this.state.indicators, ind.name);
      if (indicatorTemp.active) {
        this.state.indicatorHeight = this.state.indicatorHeight - indicatorTemp.height;
      } else {
        this.state.indicatorHeight = this.state.indicatorHeight + indicatorTemp.height;
      }
      indicatorTemp.active = !indicatorTemp.active;
    }
    this.forceUpdate();
    console.log(this.state.indicators);
  };

  changeDuration = (menu: string) => {
    const { currentTimeSpan } = this.state;
    const { pair, pairId } = this.props;

    this.setState({ currentDuration: menu });
    this.props.updateTimeLine({ pair, pairId, time: currentTimeSpan.name, duration: menu });
  };
  changeTimeSpan = (e: Object) => {
    const { currentDuration } = this.state;
    const { pair, pairId } = this.props;

    this.setState({ currentTimeSpan: e });
    this.props.updateTimeLine({ pair, pairId, time: e.name, duration: currentDuration });
  };

  render() {
    const {
      props: { expandedChard, toggleExpand, ohlcvData, hideOrderBook, toggleOrderBook },
      state: { indicators, chartHeight, indicatorHeight },
      changeTimeSpan,
      toogleChartIndicator,
      changeDuration,
    } = this;

    return (
      <Overlay isOpen={expandedChard} className="pt-overlay-scroll-container chart-overlay">
        <Card style={{ width: '100%' }} className="pt-dark main-chart">
          <Toolbar
            changeDuration={changeDuration}
            toggleExpand={toggleExpand}
            toogleChartIndicator={toogleChartIndicator}
            changeTimeSpan={changeTimeSpan}
            state={this.state}
            hideOrderBook={hideOrderBook}
            toggleOrderBook={toggleOrderBook}
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
            data={ohlcvData}
            expandedChard={expandedChard}
            width="100%"
          />
        </Card>
      </Overlay>
    );
  }
}

const Toolbar = ({ state, toogleChartIndicator, toggleOrderBook, changeTimeSpan, changeDuration }) => (
  <div className="toolbar">
    <div className="menu time-span">
      <StandardSelect
        items={state.timeSpans}
        item={state.currentTimeSpan || timeSpans[0]}
        handleChange={changeTimeSpan}
        icon="series-add"
      />
    </div>
    <div className="menu">
      <MultiSelect
        items={state.indicators}
        item={{ name: 'Indicators' }}
        handleChange={toogleChartIndicator}
        icon="series-search"
      />
    </div>
    <div className="menu duration">
      <Icon icon="time" />
      <Button onClick={() => changeDuration('1 hr')} text="1h" />
      <Button onClick={() => changeDuration('6 hr')} text="6h" />
      <Button onClick={() => changeDuration('1 day')} text="1d" />
      <Button onClick={() => changeDuration('3 days')} text="3d" />
      <Button onClick={() => changeDuration('7 days')} text="7d" />
      <Button onClick={() => changeDuration('1 month')} text="1m" />
      <Button onClick={() => changeDuration('3 months')} text="3m" />
      <Button onClick={() => changeDuration('6 months')} text="6m" />
    </div>
    <Button icon="fullscreen" onClick={toggleOrderBook} />
  </div>
);

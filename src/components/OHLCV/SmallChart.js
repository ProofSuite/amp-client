//@flow
import React from 'react';
import { MultiSelect, StandardSelect } from '../SelectMenu';
import ChartLoadingScreen from './ChartLoadingScreen';
import { Button, Card, Icon } from '@blueprintjs/core';

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
  { name: 'RSI', active: false, height: 150 },
  { name: 'ATR', active: false, height: 150 },
  { name: 'ForceIndex', active: false, height: 300 },
  { name: 'Reset', active: false, height: 0 },
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
  currentDuration: string,
  indicators: Array<Object>,
  timeSpans: Array<Object>,
  expandedChard: boolean,
};

export default class SmallChart extends React.PureComponent<Props, State> {
  state = {
    chartHeight: 400,
    indicatorHeight: 150,
    showIndicatorMenu: false,
    showTimeSpanMenu: false,
    currentTimeSpan: timeSpans[0],
    currentDuration: '',
    indicators: indicators,
    timeSpans: timeSpans,
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
      if (ind.name === 'MACD') {
        this.state.indicators[3].active = false;
      } else if (ind.name === 'RSI') {
        this.state.indicators[2].active = false;
      }
      indicatorTemp.active = !indicatorTemp.active;
    }
    if (!this.state.indicators[2].active && !this.state.indicators[3].active) {
      this.setState({
        chartHeight: 550,
      });
    } else {
      this.setState({
        chartHeight: 400,
      });
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
      <Card className="pt-dark main-chart">
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
    );
  }
}

const Toolbar = ({ state, toogleChartIndicator, changeTimeSpan, changeDuration, toggleOrderBook, hideOrderBook }) => (
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
    {hideOrderBook && <Button onClick={toggleOrderBook} icon="menu-closed" />}
    {!hideOrderBook && <Button onClick={toggleOrderBook} icon="menu-open" />}
  </div>
);

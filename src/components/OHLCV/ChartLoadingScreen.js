import React from 'react';
import Chart from './Chart';
import { Loading } from '../Common';
import { TypeChooser } from 'react-stockcharts/lib/helper';

export default class ChartLoadingScreen extends React.Component {
  render() {
    const nullIndicator = { name: '', height: 0, active: false };
    const { macd, volume, chartHeight, indicatorHeight, rsi, line, expandedChard, atr, forceIndex, data } = this.props;

    if (!data || data.length < 1) {
      return <Loading />;
    }
    return (
      <div className="chart-container">
        <TypeChooser>
          {type => (
            <Chart
              type={type}
              macd={macd}
              volume={volume}
              chartHeight={chartHeight}
              indicatorHeight={indicatorHeight}
              rsi={rsi}
              line={line}
              expandedChard={expandedChard}
              atr={atr ? atr : nullIndicator}
              forceIndex={forceIndex ? forceIndex : nullIndicator}
              data={data}
            />
          )}
        </TypeChooser>
      </div>
    );
  }
}

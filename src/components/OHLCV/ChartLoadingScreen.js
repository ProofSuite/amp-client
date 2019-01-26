// @flow
import React from 'react';
import Chart from './Chart';
import { Loading, AMPLogo, Centered, LargeText } from '../Common';
import { TypeChooser } from 'react-stockcharts/lib/helper';
import { AutoSizer } from 'react-virtualized'
import styled from 'styled-components';

import { Collapse } from '@blueprintjs/core'

type Props = {
  macd: Object,
  volume: Object,
  indicatorHeight: number,
  rsi: Object,
  line: Object,
  currentChart: Object,
  atr: Object,
  forceIndex: Object,
  data: Array<Object>,
  noOfCandles: number,
  width: string,
};

export default class ChartLoadingScreen extends React.PureComponent<Props> {
  render() {
    const nullIndicator = { name: '', height: 0, active: false };
    const {
      macd,
      volume,
      noOfCandles,
      currentChart,
      indicatorHeight,
      rsi,
      line,
      atr,
      forceIndex,
      data,
    } = this.props;

    if (!data) {
      return <Loading />;
    }

    if (data.length < 1) {
      return (
        <React.Fragment>
          <Centered>
            <AMPLogo height="150em" width="150em" />
            <LargeText muted>No trades during this period. Make the first one!</LargeText>
          </Centered>
        </React.Fragment>
      )
    }

    return (
        <Wrapper transitionDuration={100} className="chart-container">
          <AutoSizer>
            {({ width, height }) => (
              <TypeChooser>
                {type => (
                  <Chart
                    type={type}
                    macd={macd}
                    volume={volume}
                    indicatorHeight={indicatorHeight}
                    chartHeight={height-indicatorHeight}
                    rsi={rsi}
                    line={line}
                    currentChart={currentChart}
                    atr={atr ? atr : nullIndicator}
                    forceIndex={forceIndex ? forceIndex : nullIndicator}
                    data={data}
                    noOfCandles={noOfCandles}
                    width={width}
                />
                )}
              </TypeChooser>
            )
          }
          </AutoSizer>
        </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  text-align: left;
  flex: 0.9;
`;
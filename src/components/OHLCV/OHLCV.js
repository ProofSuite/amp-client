import React from 'react';
import SmallChart from './SmallChart';
import type { SendTimelineParams } from '../../types/ohlcv';

type Props = {
  ohlcvData: Array<Object>,
  pair: string,
  pairId: string,
  updateTimeLine: SendTimelineParams => void,
};

export default class OHLCV extends React.PureComponent<Props, State> {
  render() {
    const {
      props: { ohlcvData, pair, updateTimeLine, pairId, hideOrderBook, toggleOrderBook },
    } = this;

    return (
      <React.Fragment>
        <SmallChart
          updateTimeLine={updateTimeLine}
          ohlcvData={ohlcvData}
          pair={pair}
          pairId={pairId}
          hideOrderBook={hideOrderBook}
          toggleOrderBook={toggleOrderBook}
        />
      </React.Fragment>
    );
  }
}

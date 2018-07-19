//@flow
import React from 'react';
import SmallChart from './SmallChart';
import ExtendedChart from './ExtendedChart';
import type { SendTimelineParams } from '../../types/ohlcv';

type State = {
  expandedChard: boolean,
};

type Props = {
  ohlcvData: Array<Object>,
  pair: string,
  pairId: string,
  updateTimeLine: SendTimelineParams => void,
};

export default class OHLCVRenderer extends React.PureComponent<Props, State> {
  state = {
    expandedChard: false,
  };

  toggleExpand = () => {
    this.setState(prevState => {
      return {
        expandedChard: !prevState.expandedChard,
      };
    });
  };

  render() {
    const {
      props: { ohlcvData, pair, updateTimeLine, pairId },
      state: { expandedChard },
      toggleExpand,
    } = this;
    console.log('this.props: ', this.props);
    return (
      <React.Fragment>
        <SmallChart
          updateTimeLine={updateTimeLine}
          ohlcvData={ohlcvData}
          pair={pair}
          pairId={pairId}
          toggleExpand={toggleExpand}
          expandedChard={expandedChard}
        />
        <ExtendedChart
          updateTimeLine={updateTimeLine}
          ohlcvData={ohlcvData}
          pair={pair}
          pairId={pairId}
          expandedChard={expandedChard}
          toggleExpand={toggleExpand}
        />
      </React.Fragment>
    );
  }
}

//@flow
import React from 'react';
import SmallChart from './SmallChart';
import type { SendTimelineParams } from '../../types/ohlcv';
import * as ohlcv from '../../jsons/ohlcvData.json';

type Props = {
  ohlcvData: Array<Object>,
  pair: string,
  pairId: string,
  updateTimeLine: SendTimelineParams => void,
};

export default class OHLCV extends React.PureComponent<Props> {
  render() {
    const {
      props: { ohlcvData, pair, updateTimeLine, pairId },
    } = this;
    return (
      <React.Fragment>
        <SmallChart updateTimeLine={updateTimeLine} ohlcvData={ohlcvData} pair={pair} pairId={pairId} />
      </React.Fragment>
    );
  }
}

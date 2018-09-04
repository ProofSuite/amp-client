import React from 'react';
import SmallChart from './SmallChart';
import type { SendTimelineParams } from '../../types/ohlcv';

type Props = {
  ohlcvData: Array<Object>,
  currentTimeSpan: Object,
  currentDuration: Object,
  noOfCandles: number,
  updateTimeLine: SendTimelineParams => void,
  saveDuration: Object => void,
  saveTimeSpan: Object => void,
};

export default class OHLCV extends React.PureComponent<Props, State> {
  render() {
    const {
      ohlcvData,
      currentDuration,
      noOfCandles,
      currentTimeSpan,
      updateTimeLine,
      saveTimeSpan,
      saveDuration,
    } = this.props;

    console.log(
      'ohlcvData" ',
      ohlcvData,
      currentDuration,
      noOfCandles,
      currentTimeSpan,
      updateTimeLine,
      saveTimeSpan,
      saveDuration
    );
    return (
      <React.Fragment>
        <SmallChart
          updateTimeLine={updateTimeLine}
          ohlcvData={ohlcvData}
          currentTimeSpan={currentTimeSpan}
          currentDuration={currentDuration}
          saveDuration={saveDuration}
          saveTimeSpan={saveTimeSpan}
          noOfCandles={noOfCandles}
        />
      </React.Fragment>
    );
  }
}

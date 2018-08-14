import React from 'react';
import SmallChart from './SmallChart';
import type { SendTimelineParams } from '../../types/ohlcv';

type Props = {
  ohlcvData: Array<Object>,
  currentTimeSpan: Object,
  currentDuration: Object,
  updateTimeLine: SendTimelineParams => void,
  saveDuration: Object => void,
  saveTimeSpan: Object => void,
};

export default class OHLCV extends React.PureComponent<Props, State> {
  render() {
    const { ohlcvData, currentDuration, currentTimeSpan, updateTimeLine, saveTimeSpan, saveDuration } = this.props;

    return (
      <React.Fragment>
        <SmallChart
          updateTimeLine={updateTimeLine}
          ohlcvData={ohlcvData}
          currentTimeSpan={currentTimeSpan}
          currentDuration={currentDuration}
          saveDuration={saveDuration}
          saveTimeSpan={saveTimeSpan}
        />
      </React.Fragment>
    );
  }
}

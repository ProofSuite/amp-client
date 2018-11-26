// @flow
import { connect } from 'react-redux';
import ohlcvModel, { updateDuration, updateTimeSpan } from '../../store/models/ohlcv';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return ohlcvModel(state).getState();
};

export const mapDispatchToProps = {
  updateDuration,
  updateTimeSpan,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

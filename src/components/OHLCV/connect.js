// @flow
import { connect } from 'react-redux';
import ohlcvModel, { updateTimeLine } from '../../store/models/ohlcv';
import { saveDuration, saveTimeSpan } from '../../store/actions/ohlcv';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return ohlcvModel(state).getState();
};

export const mapDispatchToProps = {
  updateTimeLine,
  saveDuration,
  saveTimeSpan,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

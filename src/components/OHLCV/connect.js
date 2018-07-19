// @flow
import { connect } from 'react-redux';
import ohlcvModel, { updateTimeLine } from '../../store/models/ohlcv';

import type { OHLCVState } from '../../types/ohlcv';

export const mapStateToProps = (state: OHLCVState) => {
  return ohlcvModel(state).getState();
};

export const mapDispatchToProps = {
  updateTimeLine,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

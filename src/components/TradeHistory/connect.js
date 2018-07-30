// @flow
import { connect } from 'react-redux';
import getTradeHistoryModel from '../../store/models/tradeHistory';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return getTradeHistoryModel(state).getState();
};

export const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  null
);

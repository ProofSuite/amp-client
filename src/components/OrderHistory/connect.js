// @flow
import { connect } from 'react-redux';
import getOrderHistoryModel from '../../store/models/orderHistory';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return getOrderHistoryModel(state).getState();
};

export const mapDispatchToProps = {};

export default connect(
  mapStateToProps
  // mapDispatchToProps
);

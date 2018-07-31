// @flow
import { connect } from 'react-redux';
import ordersTableSelector from '../../store/models/ordersTable';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return {
    orders: ordersTableSelector(state).orders(),
  };
};

export default connect(
  mapStateToProps,
  null
);

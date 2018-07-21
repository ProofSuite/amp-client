// @flow
import { connect } from 'react-redux';
import orderBookModel from '../../store/models/orderBook';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return orderBookModel(state).getState();
};

export const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

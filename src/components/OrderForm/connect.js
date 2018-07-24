// @flow
import { connect } from 'react-redux';
import orderFormModel, { handleLimit, handleStopLimit } from '../../store/models/orderForm';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return orderFormModel(state).getState();
};

export const mapDispatchToProps = {
  handleLimit,
  handleStopLimit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

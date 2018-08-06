// @flow
import { connect } from 'react-redux';
import orderFormSelector, { handleLimit, handleStopLimit } from '../../store/models/orderForm';
import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return orderFormSelector(state);
};

export const mapDispatchToProps = {
  handleLimit,
  handleStopLimit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

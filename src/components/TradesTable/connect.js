// @flow
import { connect } from 'react-redux';
import tradesTableSelector from '../../store/models/tradesTable';
import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return {
    trades: tradesTableSelector(state).trades(),
    currentPair: tradesTableSelector(state).currentPair(),
  };
};

export default connect(
  mapStateToProps,
  null
);

// @flow
import { connect } from 'react-redux';
import tradingPageModel, { loadData } from '../../store/models/tradingPage';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return tradingPageModel(state).getState();
};

export const mapDispatchToProps = {
  loadData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

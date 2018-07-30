// @flow
import { connect } from 'react-redux';
import depthChartModel from '../../store/models/depthChart';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return depthChartModel(state).getState();
};

export const mapDispatchToProps = {};

export default connect(mapStateToProps);

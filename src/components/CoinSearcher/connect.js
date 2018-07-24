// @flow
import { connect } from 'react-redux';
import getCoinSearcherModel, { toggleStar } from '../../store/models/coinSearcher';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return getCoinSearcherModel(state).getState();
};

export const mapDispatchToProps = {
  toggleStar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

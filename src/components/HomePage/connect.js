// @flow
import { connect } from 'react-redux';
import homePageModel, { loadData } from '../../store/models/homePage';
import {} from '../../store/models/homePage';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return homePageModel(state).getState();
};

export const mapDispatchToProps = {
  loadData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

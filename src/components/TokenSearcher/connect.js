// @flow
import { connect } from 'react-redux';

import { updateFavorite } from '../../store/actions/tokenSearcher';
import tokenSearcherSelector from '../../store/models/tokenSearcher';
import { updateCurrentPair } from '../../store/models/tokenSearcher';

import type { State } from '../../types';

export const mapStateToProps = (state: State) => {
  return tokenSearcherSelector(state);
};

export const mapDispatchToProps = {
  updateFavorite,
  updateCurrentPair,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

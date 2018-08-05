// @flow
import { connect } from 'react-redux';
import tradingPageModel, { queryDefaultData } from '../../store/models/tradingPage';

import type { State } from '../../types';

export const mapDispatchToProps = {
  queryDefaultData,
};

export default connect(
  null,
  mapDispatchToProps
);

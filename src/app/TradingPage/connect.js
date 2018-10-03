// @flow
import { connect } from 'react-redux';
import getTradingPageSelector, { queryDefaultData } from '../../store/models/tradingPage';

import type { State } from '../../types'

export function mapStateToProps(state: State) {
  let selector = getTradingPageSelector(state)

  return {
    authenticated: selector.authenticated
  }
}

export const mapDispatchToProps = {
  queryDefaultData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

// @flow
import { connect } from 'react-redux';
import tradingPageSelector, { queryTradingPageData, toggleAllowances } from '../../store/models/tradingPage';

import type { State } from '../../types'

export function mapStateToProps(state: State) {
  let tradingPageProps = tradingPageSelector(state)

  return { ...tradingPageProps }
}

export const mapDispatchToProps = {
  queryTradingPageData,
  toggleAllowances
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

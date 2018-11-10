// @flow
import { connect } from 'react-redux';
import tradingPageSelector, { getDefaultData } from '../../store/models/tradingPage';

import type { State } from '../../types'

export function mapStateToProps(state: State) {
  let tradingPageProps = tradingPageSelector(state)

  return { ...tradingPageProps }
}

export const mapDispatchToProps = {
  getDefaultData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

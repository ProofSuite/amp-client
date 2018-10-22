// @flow
import { connect } from 'react-redux';
import getWalletPageSelector, {
  queryAccountData,
  toggleAllowance,
  redirectToTradingPage,
} from '../../store/models/walletPage';

import { removeNotification } from '../../store/actions/app';

import type { State } from '../../types'


export function mapStateToProps(state: State ) {
  let walletPageSelector = getWalletPageSelector(state)
  let { tokenData } = walletPageSelector
  let loading = !(tokenData.length > 0);

  return {
    ...walletPageSelector,
    isDefaultAccountSet: false,
    loading
  }
}

export const mapDispatchToProps = {
  queryAccountData,
  removeNotification,
  toggleAllowance,
  redirectToTradingPage,
};

export default connect(mapStateToProps, mapDispatchToProps)

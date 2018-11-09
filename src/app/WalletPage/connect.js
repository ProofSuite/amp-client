// @flow
import { connect } from 'react-redux';
import getWalletPageSelector, {
  queryAccountData,
  toggleAllowance,
  redirectToTradingPage,
} from '../../store/models/walletPage';

import { removeNotification } from '../../store/actions/app';
import { closeHelpModal } from '../../store/actions/walletPage'

import type { State } from '../../types'


export function mapStateToProps(state: State ) {
  let walletPageSelector = getWalletPageSelector(state)

  let { tokenData } = walletPageSelector
  let loading = !(tokenData.length > 0)

  return {
    ...walletPageSelector,
    loading
  }
}

export const mapDispatchToProps = {
  queryAccountData,
  removeNotification,
  toggleAllowance,
  redirectToTradingPage,
  closeHelpModal
};

export default connect(mapStateToProps, mapDispatchToProps)

// @flow
import { connect } from 'react-redux';
import getWalletPageSelector, {
  queryAccountData,
  toggleAllowance,
  redirectToTradingPage,
} from '../../store/models/walletPage';

import { removeNotification } from '../../store/actions/app';


export function mapStateToProps(state, props) {
  let walletPageSelector = getWalletPageSelector(state)
  let { depositTableData } = walletPageSelector
  let loading = !(depositTableData.length > 0);

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

import { connect } from 'react-redux';
import getWalletPageSelector, { queryAccountData } from '../../store/models/walletPage';
import accountSelector from '../../store/models/layout';
import { removeNotification } from '../../store/actions/app';

export function mapStateToProps(state, props) {
  const { depositTableData, accountAddress } = getWalletPageSelector(state);
  const { authenticated } = accountSelector(state);
  const loading = !(depositTableData.length > 0);

  return {
    depositTableData: depositTableData,
    accountAddress: accountAddress,
    loading: loading,
    isDefaultAccountSet: false,
    authenticated: authenticated,
  };
}

export const mapDispatchToProps = {
  queryAccountData,
  removeNotification,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

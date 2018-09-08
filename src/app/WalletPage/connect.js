import { connect } from 'react-redux';
import getWalletPageSelector, { queryAccountData } from '../../store/models/walletPage';
import settingsPageSelector from '../../store/models/settings';
import accountSelector from '../../store/models/layout';
import { sortTable } from '../../utils/helpers';
import { removeNotification } from '../../store/actions/app';

export function mapStateToProps(state, props) {
  const {
    depositTableData,
    accountAddress,
    currentBlock,
    etherBalance,
    provider,
    accountPrivateKey,
    gas,
    gasPrice,
  } = getWalletPageSelector(state);
  const { authenticated } = accountSelector(state);
  const loading = !(depositTableData.length > 0);
  const { pvtKeyLocked } = settingsPageSelector(state);

  return {
    depositTableData: sortTable(depositTableData, 'symbol'),
    accountAddress: accountAddress,
    accountPrivateKey: accountPrivateKey,
    loading: loading,
    isDefaultAccountSet: false,
    authenticated: authenticated,
    currentBlock: currentBlock,
    provider: provider,
    etherBalance: etherBalance,
    pvtKeyLocked: pvtKeyLocked,
    gas,
    gasPrice,
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

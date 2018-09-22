import { connect } from 'react-redux';
import walletPageSelector, {
  queryAccountData,
  toggleAllowance,
  redirectToTradingPage,
} from '../../store/models/walletPage';
import settingsPageSelector from '../../store/models/settings';
import accountSelector from '../../store/models/layout';
import { removeNotification } from '../../store/actions/app';

export function mapStateToProps(state, props) {
  const { authenticated } = accountSelector(state);
  const { pvtKeyLocked } = settingsPageSelector(state);

  const {
    depositTableData,
    accountAddress,
    currentBlock,
    etherBalance,
    provider,
    accountPrivateKey,
    gas,
    gasPrice,
  } = walletPageSelector(state);

  const loading = !(depositTableData.length > 0);

  return {
    depositTableData,
    accountAddress,
    accountPrivateKey,
    loading,
    isDefaultAccountSet: false,
    authenticated,
    currentBlock,
    provider,
    etherBalance,
    pvtKeyLocked,
    gas,
    gasPrice,
  };
}

export const mapDispatchToProps = {
  queryAccountData,
  removeNotification,
  toggleAllowance,
  redirectToTradingPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

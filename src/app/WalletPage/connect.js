import { connect } from 'react-redux';
import getWalletPageSelector, { queryAccountData } from '../../store/models/walletPage';
import accountSelector from '../../store/models/layout';
import { removeNotification } from '../../store/actions/app';

export function mapStateToProps(state, props) {
  const { depositTableData, accountAddress, currentBlock, accountPrivateKey } = getWalletPageSelector(state);
  const { authenticated } = accountSelector(state);
  const loading = !(depositTableData.length > 0);

  return {
    depositTableData: depositTableData,
    accountAddress: accountAddress,
    accountPrivateKey: accountPrivateKey,
    loading: loading,
    isDefaultAccountSet: false,
    authenticated: authenticated,
    currentBlock: currentBlock,
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

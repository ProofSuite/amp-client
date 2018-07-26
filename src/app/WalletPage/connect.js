import { connect } from 'react-redux';
import getWalletPageSelector, { queryAccountData } from '../../store/models/walletPage';

export function mapStateToProps(state, props) {
  const { depositTableData } = getWalletPageSelector(state);
  const loading = !(depositTableData.length > 0);

  return {
    depositTableData: depositTableData,
    loading: loading,
    isDefaultAccountSet: false,
  };
}

export const mapDispatchToProps = {
  queryAccountData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

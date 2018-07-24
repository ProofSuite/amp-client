import { connect } from 'react-redux';
import createSelector, { queryAccountData } from '../../store/models/walletPage';

export function mapStateToProps(state, props) {
  const depositTableSelector = createSelector(state);
  const depositTableData = depositTableSelector.balancesArray();
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

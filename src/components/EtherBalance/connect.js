import { connect } from 'react-redux';
import getEtherBalance, * as etherBalanceActionCreators from '../../store/models/etherBalance';

export function mapStateToProps(state, props) {
  const etherBalance = getEtherBalance(state);

  return {
    balance: etherBalance.get(props.address),
    isSubscribed: etherBalance.isSubscribed(props.address),
  };
}

export function mapDispatchToProps(dispatch, props) {
  return {
    subscribeBalance: () => dispatch(etherBalanceActionCreators.subscribeBalance(props.address)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

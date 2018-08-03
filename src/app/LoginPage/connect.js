import { connect } from 'react-redux';
import loginPageSelector, { loginWithMetamask, loginWithWallet } from '../../store/models/loginPage';
import { addNotification } from '../../store/actions/app';

export function mapStateToProps(state, props) {
  const selector = loginPageSelector(state);

  return {
    authenticated: selector.authenticated,
  };
}

const mapDispatchToProps = {
  loginWithWallet,
  loginWithMetamask,
  addNotification,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

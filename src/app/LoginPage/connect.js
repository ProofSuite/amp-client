import { connect } from 'react-redux';
import loginPageSelector, { loginWithWallet, loginWithMetamask } from '../../store/models/loginPage';

export function mapStateToProps(state, props) {
  const selector = loginPageSelector(state);

  return {
    authenticated: selector.authenticated,
  };
}

const mapDispatchToProps = {
  loginWithWallet,
  loginWithMetamask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

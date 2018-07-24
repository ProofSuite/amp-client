import { connect } from 'react-redux';
import loginPageSelector, { connectWithWallet, connectWithMetamask } from '../../store/models/loginPage';

export function mapStateToProps(state, props) {
  const selector = loginPageSelector(state);

  return {
    authenticated: selector.authenticated,
  };
}

const mapDispatchToProps = {
  connectWithWallet,
  connectWithMetamask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

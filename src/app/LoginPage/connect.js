import { connect } from 'react-redux';

import loginPageSelector, { 
  loginWithMetamask, 
  loginWithWallet,
  loginWithLedger
} from '../../store/models/loginPage';

import { removeNotification } from '../../store/actions/app';

export function mapStateToProps(state, props) {
  const selector = loginPageSelector(state);

  return {
    authenticated: selector.authenticated,
  };
}

const mapDispatchToProps = {
  loginWithWallet,
  loginWithMetamask,
  loginWithLedger,
  removeNotification,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

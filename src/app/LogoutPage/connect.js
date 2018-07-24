import { connect } from 'react-redux';
import logoutPageSelector, { logout } from '../../store/models/logoutPage';

export function mapStateToProps(state, props) {
  const selector = logoutPageSelector(state);

  return {
    authenticated: selector.authenticated,
  };
}

const mapDispatchToProps = {
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

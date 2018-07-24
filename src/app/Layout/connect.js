import { connect } from 'react-redux';
import layoutSelector, * as actionCreators from '../../store/models/layout';

export function mapStateToProps(state, props) {
  const selector = layoutSelector(state);

  return {
    authenticated: selector.authenticated,
    address: selector.account,
  };
}

export default connect(
  mapStateToProps,
  actionCreators
);

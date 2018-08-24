import { connect } from 'react-redux';
import layoutSelector from '../../store/models/layout';
import * as actionCreators from '../../store/models/layout';

export function mapStateToProps(state, props) {
  const selector = layoutSelector(state);

  return {
    authenticated: selector.authenticated,
    address: selector.account,
    provider: selector.provider,
    currentBlock: selector.currentBlock,
  };
}

export default connect(
  mapStateToProps,
  actionCreators
);

import { connect } from 'react-redux';
import createSelector, * as actionCreators from '../../store/models/Layout';

export function mapStateToProps(state, props) {
  const selector = createSelector(state);

  return {
    defaultAccount: selector.getDefaultAccount(),
  };
}

export default connect(
  mapStateToProps,
  actionCreators
);

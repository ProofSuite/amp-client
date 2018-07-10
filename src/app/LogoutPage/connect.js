import { connect } from 'react-redux';
import createSelector, * as actionCreators from '../../store/models/LogoutPage';

export function mapStateToProps(state, props) {
  const selector = createSelector(state);

  return {
    isDefaultAccountSet: selector.isDefaultAccountSet(),
  };
}

export default connect(
  mapStateToProps,
  actionCreators
);

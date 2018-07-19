import { connect } from 'react-redux';
import createSelector, * as actionCreators from '../../store/models/LoginPage';

export function mapStateToProps(state, props) {
  const selector = createSelector(state);

  return {
    isDefaultAccountSet: false,
  };
}

export default connect(
  mapStateToProps,
  actionCreators
);

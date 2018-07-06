import { connect } from 'react-redux';
import * as providerActionCreators from '../../store/models/provider';

export function mapDispatchToProps(dispatch) {
  return {
    setProvider: options => dispatch(providerActionCreators.setProvider(options)),
  };
}

export default connect(
  null,
  mapDispatchToProps
);

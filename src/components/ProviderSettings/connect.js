import { connect } from 'react-redux';
import getProviderModel, * as providerActionCreators from '../../store/models/provider';

export function mapStateToProps(state, props) {
  const provider = getProviderModel(state);

  return {
    loading: provider.isLoading(),
    error: provider.getError(),
    currentProvider: provider.getCurrentProvider(),
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    setProvider: options => dispatch(providerActionCreators.setProvider(options)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

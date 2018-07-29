// @flow
import { connect } from 'react-redux';
import getProviderModel, * as providerActionCreators from '../../store/models/provider';
import type { State, Dispatch } from '../../types';
import type { ProviderOptions } from '../../types/provider';

export function mapStateToProps(state: State) {
  const provider = getProviderModel(state);

  return {
    loading: provider.isLoading(),
    error: provider.getError(),
    currentProvider: provider.getCurrentProvider(),
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setProvider: (options: ProviderOptions) => dispatch(providerActionCreators.setProvider(options)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

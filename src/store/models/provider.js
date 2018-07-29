// @flow
import providerModel from '../domains/provider';
import * as actionCreators from '../actions/provider';
import { createProvider } from '../services/provider';

import type { ProviderOptions } from '../../types/provider';
import type { State, ThunkAction } from '../../types/';

export default function getProviderModel(state: State) {
  return providerModel(state.provider);
}

export function setProvider(providerOptions: ProviderOptions): ThunkAction {
  return async dispatch => {
    try {
      dispatch(actionCreators.requestProvider());
      let { options, address } = await createProvider(providerOptions);
      return dispatch(actionCreators.setProvider(options, address));
    } catch (e) {
      return dispatch(actionCreators.error(e.message));
    }
  };
}

//@flow
import type { SetProviderAction, ProviderErrorAction, ProviderOptions } from '../../types/provider';

const actionTypes = {
  setProvider: 'provider/SET_PROVIDER',
  error: 'provider/ERROR',
};

export function setProvider(options: ProviderOptions): SetProviderAction {
  return {
    type: actionTypes.setProvider,
    payload: { options },
  };
}

export function error(error: string): ProviderErrorAction {
  return {
    type: actionTypes.error,
    payload: { error },
  };
}

export default actionTypes;

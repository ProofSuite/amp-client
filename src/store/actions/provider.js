//@flow
import type {
  ProviderErrorAction,
  ProviderOptions,
  RequestProviderAction,
  SetProviderAction,
} from '../../types/provider';

const actionTypes = {
  requestProvider: 'provider/REQUEST_PROVIDER',
  setProvider: 'provider/SET_PROVIDER',
  error: 'provider/ERROR',
};

export function setProvider(options: ProviderOptions, address: ?string): SetProviderAction {
  return {
    type: actionTypes.setProvider,
    payload: { options, address },
  };
}

export function requestProvider(): RequestProviderAction {
  return {
    type: actionTypes.requestProvider,
  };
}

export function error(error: string): ProviderErrorAction {
  return {
    type: actionTypes.error,
    payload: { message: error },
  };
}

export default actionTypes;

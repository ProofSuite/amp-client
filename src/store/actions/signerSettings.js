//@flow
import type {
  SignerErrorAction,
  UpdateSignerParams,
  RequestSignerAction,
  UpdateSignerAction,
} from '../../types/signer';

const actionTypes = {
  requestSigner: 'signerSettings/REQUEST_SIGNER',
  updateSigner: 'signerSettings/UPDATE_SIGNER',
  error: 'signerSettings/ERROR',
};

export function updateSigner(params: UpdateSignerParams, address: ?string): UpdateSignerAction {
  return {
    type: actionTypes.updateSigner,
    payload: { params, address },
  };
}

export function requestSigner(): RequestSignerAction {
  return {
    type: actionTypes.requestSigner,
  };
}

export function error(error: string): SignerErrorAction {
  return {
    type: actionTypes.error,
    payload: { message: error },
  };
}

export default actionTypes;

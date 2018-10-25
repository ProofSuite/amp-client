//@flow
export type SignerState = {
  +loading: boolean,
  +error: string,
  +type: string,
  +url: string,
  +networkID: number,
};

export type UpdateSignerParams = {
  type: 'metamask' | 'wallet' | 'rpc',
  custom: boolean,
  url: ?string,
  networkID: ?number,
  wallet: ?Object,
};

export type SignerSettings = {
  type: string,
  url?: string,
  networkId?: number,
};

export type UpdateSignerAction = {
  type: 'signerSettings/UPDATE_SIGNER',
  payload: {
    params: UpdateSignerParams,
    address: ?string,
  },
};

export type SignerErrorAction = {
  type: 'signerSettings/ERROR',
  payload: { message: string },
};

export type RequestSignerAction = {
  type: 'signerSettings/REQUEST_SIGNER',
};

export type SignerEvent = any => SignerState => SignerState;
export type SignerSettingsAction = UpdateSignerAction | SignerErrorAction | RequestSignerAction;

//@flow
export type ProviderState = {
  +loading: boolean,
  +error: string,
  +type: string,
  +url: string,
  +networkId: number,
};

export type ProviderOptions = {
  type: string,
  provider?: string,
  url?: string,
  networkId?: number,
};

export type SetProviderAction = {
  type: 'provider/SET_PROVIDER',
  payload: {
    options: ProviderOptions,
    address: ?string,
  },
};

export type ProviderEvent = any => ProviderState => ProviderState;

export type ProviderErrorAction = {
  type: 'provider/ERROR',
  payload: { message: string },
};

export type RequestProviderAction = {
  type: 'provider/REQUEST_PROVIDER',
};

export type ProviderAction = SetProviderAction | ProviderErrorAction | RequestProviderAction;

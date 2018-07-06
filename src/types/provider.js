//@flow
export type ProviderState = {
  +type: string,
  +url: string,
  +networkId: number,
};

export type ProviderOptions = {
  provider?: string,
  type: string,
  url?: string,
  websockets?: boolean,
  networkId?: number,
};

export type SetProviderAction = {
  type: 'provider/SET_PROVIDER',
  payload: any,
};

export type ProviderErrorAction = {
  type: 'provider/ERROR',
  payload: any,
};

export type ProviderAction = SetProviderAction | ProviderErrorAction;

export type SettingsState = {
  +defaultGasLimit: number,
  +defaultGasPrice: number,
};

export type SetDefaultGasLimitAction = {
  type: 'settings/SET_DEFAULT_GAS_LIMIT',
  payload: { defaultGasLimit: number },
};

export type SetDefaultGasPriceAction = {
  type: 'settings/SET_DEFAULT_GAS_PRICE',
  payload: { defaultGasPrice: number },
};

export type SettingsAction = SetDefaultGasPriceAction | SetDefaultGasLimitAction;

export type SettingsEvent = any => SettingsState => SettingsState;

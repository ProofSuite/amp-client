import type { SettingsState } from '../../types/settings';

const initialState = {
  defaultGasLimit: 1000000,
  defaultGasPrice: 1000000000,
  pvtKeyLocked: true,
};

export const initialized = () => {
  const event = (state: SettingsState = initialState) => state;
  return event;
};

export const defaultGasLimitSet = (defaultGasLimit: number) => {
  const event = (state: SettingsState) => ({
    ...state,
    defaultGasLimit,
  });

  return event;
};

export const pvtKeyLockToggled = () => {
  const event = (state: SettingsState) => ({
    ...state,
    pvtKeyLocked: !state.pvtKeyLocked,
  });

  return event;
};

export const defaultGasPriceSet = (defaultGasPrice: number) => {
  const event = (state: SettingsState) => ({
    ...state,
    defaultGasPrice,
  });

  return event;
};

export default function model(state: SettingsState) {
  return {
    defaultGasPrice: () => state.defaultGasPrice,
    defaultGasLimit: () => state.defaultGasLimit,
    pvtKeyLocked: () => state.pvtKeyLocked,
    gasSettings: () => ({
      defaultgasPrice: state.defaultGasPrice,
      defaultGasLimit: state.defaultGasLimit,
    }),
  };
}

export type UpdateAppDataAction = {
  type: 'layout/UPDATE_APP_DATA',
  payload: { tokens: Array<Tokens>, pairs: Array<TokenPairs> }
}

export type UpdateReferenceCurrencyAction = {
  type: 'walletPage/UPDATE_REFERENCE_CURRENCY',
  payload: { referenceCurrency: string },
};

export type LayoutAction =
  | UpdateAppDataAction
  | UpdateReferenceCurrencyAction
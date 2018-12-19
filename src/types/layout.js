export type UpdateReferenceCurrencyAction = {
  type: 'walletPage/UPDATE_REFERENCE_CURRENCY',
  payload: { referenceCurrency: string },
};

export type LayoutAction =
 | UpdateReferenceCurrencyAction
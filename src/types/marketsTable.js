// @flow
export type UpdateAllowancePendingAction = {
  type: 'marketsTable/UPDATE_ALLOWANCE_PENDING',
  payload: { symbol: string },
}

export type UpdateCurrentPairAction = {
  type: 'marketsTable/UPDATE_CURRENT_PAIR',
  payload: { pair: string },
};

export type MarketsTableActions =
  | UpdateCurrentPairAction
  | UpdateAllowancePendingAction

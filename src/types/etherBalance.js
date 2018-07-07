//@flow
export type EtherBalanceState = { +[string]: string };

export type SubscribeBalanceAction = {
  type: 'etherBalance/SUBSCRIBE_BALANCE',
  payload: { address: string },
};

export type UpdateBalanceAction = {
  type: 'etherBalance/UPDATE_BALANCE',
  payload: { address: string, balance: string },
};

export type UnsubscribeBalanceAction = {
  type: 'etherBalance/UNSUBSCRIBE_BALANCE',
  payload: { address: string },
};

export type EtherBalanceEvent = any => EtherBalanceState => EtherBalanceState;
export type EtherBalanceAction = SubscribeBalanceAction | UpdateBalanceAction | UnsubscribeBalanceAction;

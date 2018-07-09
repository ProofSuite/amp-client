// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { ProviderState, ProviderAction, ProviderEvent } from './provider';
import type { EtherBalanceState, EtherBalanceAction, EtherBalanceEvent } from './etherBalance';

export type ReduxInitAction = { type: '@@INIT' };
export type Action = ReduxInitAction | ProviderAction | EtherBalanceAction;
export type Event = ProviderEvent | EtherBalanceEvent;
export type ActionHandler = Action => Event;
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;

export type State = {
  provider: ProviderState,
  etherBalance: EtherBalanceState,
};

export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
// export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

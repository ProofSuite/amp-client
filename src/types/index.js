import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import { ProviderState, ProviderAction } from './provider';

export type ReduxInitAction = { type: '@@INIT' };
export type State = ProviderState;
export type Action = ReduxInitAction | ProviderAction;
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;

export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
// export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

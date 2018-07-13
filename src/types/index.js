// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { ProviderState, ProviderAction, ProviderEvent } from './provider';
import type { EtherBalanceState, EtherBalanceAction, EtherBalanceEvent } from './etherBalance';
import type { AccountBalancesState, AccountBalancesEvent, AccountBalancesAction } from './accountBalances';
import type { EtherTxState, EtherTxAction, EtherTxEvent } from './etherTx';
import type { TokenState, TokenAction, TokenEvent } from './tokens';
import type { AccountState, AccountAction, AccountEvent } from './account';

export type ReduxInitAction = { type: '@@INIT' };

export type Action =
  | ReduxInitAction
  | ProviderAction
  | EtherBalanceAction
  | EtherTxAction
  | TokenAction
  | AccountBalancesAction
  | AccountAction;

export type Event = ProviderEvent | EtherBalanceEvent | EtherTxEvent | TokenEvent | AccountBalancesEvent | AccountEvent;

export type ActionHandler = Action => Event;

export type State = {
  provider: ProviderState,
  etherBalance: EtherBalanceState,
  accountBalances: AccountBalancesState,
  etherTx: EtherTxState,
  tokens: TokenState,
  account: AccountState,
};

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
// export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

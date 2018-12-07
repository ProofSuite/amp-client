// @flow
import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';
import type { SignerEvent, SignerSettingsAction, SignerState } from './signer';
import type { EtherBalanceAction, EtherBalanceEvent, EtherBalanceState } from './etherBalance';
import type { AccountBalancesAction, AccountBalancesEvent, AccountBalancesState } from './accountBalances';
import type { TransferTokensFormAction, TransferTokensFormEvent, TransferTokensFormState } from './transferTokensForm';
import type { OHLCVState } from './ohlcv';
import type { OrderBookState } from './orderBook';
import type { TradeHistoryState } from './tradeHistory';
import type { OrderHistoryState } from './orderHistory';
import type { OrderFormState } from './orderForm';
import type { TokenState, TokenPairState, TokenEvent, TokenPairEvent } from './tokens';
import type { AccountState, AccountAction, AccountEvent } from './account';
import type { LoginPageState, LoginPageAction, LoginPageEvent } from './loginPage';
import type { LogoutPageAction } from './logoutPage';
import type { DepositFormAction, DepositFormEvent, DepositFormState } from './depositForm';
import type { SettingsAction, SettingsEvent, SettingsState } from './settings';
import type { WalletsAction, WalletsEvent, WalletsState } from './wallets';
import type { NotificationState } from './notifications';

export type ReduxInitAction = { type: '@@INIT' };

export type Action =
  | ReduxInitAction
  | EtherBalanceAction
  | TransferTokensFormAction
  | AccountBalancesAction
  | AccountAction
  | DepositFormAction
  | SettingsAction
  | WalletsAction
  | LoginPageAction
  | LogoutPageAction
  | SignerSettingsAction;

export type Event =
  | LoginPageEvent
  | EtherBalanceEvent
  | TransferTokensFormEvent
  | TokenEvent
  | TokenPairEvent
  | AccountBalancesEvent
  | AccountEvent
  | DepositFormEvent
  | SettingsEvent
  | WalletsEvent
  | SignerEvent;

export type ActionHandler = Action => Event;

export type State = {
  loginPage: LoginPageState,
  signer: SignerState,
  etherBalance: EtherBalanceState,
  accountBalances: AccountBalancesState,
  transferTokensForm: TransferTokensFormState,
  ohlcv: OHLCVState,
  orderBook: OrderBookState,
  tradeHistory: TradeHistoryState,
  orderHistory: OrderHistoryState,
  orderForm: OrderFormState,
  tokens: TokenState,
  tokenPairs: TokenPairState,
  account: AccountState,
  depositForm: DepositFormState,
  settings: SettingsState,
  wallets: WalletsState,
  notifications: NotificationState,
};

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ExtraArgument = { socket: Object } & { api: Object } & { trading: Object } & { mixpanel: Object };
export type ThunkAction = (dispatch: Dispatch, getState: GetState, ExtraArgument) => any;
// export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { SignerState, SignerSettingsAction, SignerEvent } from './signer';
import type { EtherBalanceState, EtherBalanceAction, EtherBalanceEvent } from './etherBalance';
import type { AccountBalancesState, AccountBalancesEvent, AccountBalancesAction } from './accountBalances';
import type { EtherTxState, EtherTxAction, EtherTxEvent } from './etherTx';
import type { OHLCVState } from './ohlcv';
import type { OrderBookState } from './orderBook';
import type { TradingState } from './tradingPage';
import type { TradeHistoryState } from './tradeHistory';
import type { DepthChartState } from './depthChart';
import type { OrderHistoryState } from './orderHistory';
import type { OrderFormState } from './orderForm';
import type { TokenState, TokenPairState, TokenAction, TokenEvent, TokenPairEvent } from './tokens';
import type { AccountState, AccountAction, AccountEvent } from './account';
import type { LoginPageState, LoginPageAction, LoginPageEvent } from './loginPage';
import type { LogoutPageAction } from './logoutPage';
import type { DepositFormState, DepositFormAction, DepositFormEvent } from './depositForm';
import type { SettingsState, SettingsAction, SettingsEvent } from './settings';
import type { WalletsState, WalletsAction, WalletsEvent } from './wallets';

export type ReduxInitAction = { type: '@@INIT' };

export type Action =
  | ReduxInitAction
  | EtherBalanceAction
  | EtherTxAction
  | TokenAction
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
  | EtherTxEvent
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
  tradingPage: TradingState,
  homePage: HomeState,
  signer: SignerState,
  provider: ProviderState,
  etherBalance: EtherBalanceState,
  accountBalances: AccountBalancesState,
  etherTx: EtherTxState,
  ohlcv: OHLCVState,
  orderBook: OrderBookState,
  tradeHistory: TradeHistoryState,
  orderHistory: OrderHistoryState,
  orderForm: OrderFormState,
  depthChart: DepthChartState,
  etherTx: EtherTxState,
  tokens: TokenState,
  tokenPairs: TokenPairState,
  account: AccountState,
  depositForm: DepositFormState,
  settings: SettingsState,
  wallets: WalletsState,
};

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
// export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

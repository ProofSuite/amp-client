// @flow
import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';
import type { SignerEvent, SignerSettingsAction, SignerState } from './signer';
import type { EtherBalanceAction, EtherBalanceEvent, EtherBalanceState } from './etherBalance';
import type { AccountBalancesAction, AccountBalancesEvent, AccountBalancesState } from './accountBalances';
import type { EtherTxAction, EtherTxEvent, EtherTxState } from './etherTx';
import type { OHLCVState } from './ohlcv';
import type { OrderBookProps } from './orderBook';
import type { TradingState } from './tradingPage';
import type { TradeHistoryProps } from './tradeHistory';
import type { DepthChartProps } from './depthChart';
import type { OrderHistoryProps } from './orderHistory';
import type { CoinSearcherState } from './coinSearcher';
import type OrderFormProps from './orderForm';
import type { TokenAction, TokenEvent, TokenState } from './tokens';
import type { AccountAction, AccountEvent, AccountState } from './account';
import type { LoginPageAction, LoginPageEvent, LoginPageState } from './loginPage';
import type { LogoutPageAction } from './logoutPage';
import type { DepositFormAction, DepositFormEvent, DepositFormState } from './depositForm';
import type { SettingsAction, SettingsEvent, SettingsState } from './settings';
import type { WalletsAction, WalletsEvent, WalletsState } from './wallets';

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
  provider: ProviderState,
  homePage: HomeState,
  signer: SignerState,
  provider: ProviderState,
  etherBalance: EtherBalanceState,
  accountBalances: AccountBalancesState,
  etherTx: EtherTxState,
  ohlcv: OHLCVState,
  orderBook: OrderBookProps,
  tradeHistory: TradeHistoryProps,
  orderHistory: OrderHistoryProps,
  orderForm: OrderFormProps,
  depthChart: DepthChartProps,
  coinSearcher: CoinSearcherState,
  etherTx: EtherTxState,
  tokens: TokenState,
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

import accountDomain from './account'
import accountBalancesDomain from './accountBalances'
import depositFormDomain from './depositForm'
import getStartedModalDomain from './getStartedModal'
import transferTokensFormDomain from './transferTokensForm'
import loginPageDomain from './loginPage'
import ohlcvDomain from './ohlcv'
import orderBookDomain from './orderBook'
import orderFormDomain from './orderForm'
import settingsDomain from './settings'
import signerDomain from './signer'
import tokenPairsDomain from './tokenPairs'
import tokenDomain from './tokens'
import walletsDomain from './wallets'
import notificationsDomain from './notifications'
import tradesDomain from './trades'
import ordersDomain from './orders'
import convertTokensFormDomain from './convertTokensForm'
import connectionDomain from './connection';
import transactionsDomain from './transactions'
import statsDomain from './stats'

export const getConnectionDomain = state => connectionDomain(state.connection)
export const getAccountDomain = state => accountDomain(state.account)
export const getAccountBalancesDomain = state => accountBalancesDomain(state.accountBalances)
export const getDepositFormDomain = state => depositFormDomain(state.depositForm)
export const getGetStartedModalDomain = state => getStartedModalDomain(state.getStartedModal)
export const getTransferTokensFormDomain = state => transferTokensFormDomain(state.transferTokensForm)
export const getLoginPageDomain = state => loginPageDomain(state.loginPage)
export const getOhlcvDomain = state => ohlcvDomain(state.ohlcv)
export const getOrderBookDomain = state => orderBookDomain(state.orderBook)
export const getOrderFormDomain = state => orderFormDomain(state.orderForm)
export const getOrdersDomain = state => ordersDomain(state.orders)
export const getTradesDomain = state => tradesDomain(state.trades)
export const getSettingsDomain = state => settingsDomain(state.settings)
export const getSignerDomain = state => signerDomain(state.signer)
export const getTokenPairsDomain = state => tokenPairsDomain(state.tokenPairs)
export const getTokenDomain = state => tokenDomain(state.tokens)
export const getWalletsDomain = state => walletsDomain(state.wallets)
export const getNotificationsDomain = state => notificationsDomain(state.notifications)
export const getConvertTokensFormDomain = state => convertTokensFormDomain(state.convertTokensForm)
export const getTransactionsDomain = state => transactionsDomain(state.transactions)
export const getStatsDomain = state => statsDomain(state.stats)
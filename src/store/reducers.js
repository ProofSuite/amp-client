// @flow
import createReducer from './createReducer'
import accountBalancesActionTypes from './actions/accountBalances'
import transferTokensFormActionTypes from './actions/transferTokensForm'
import ohlcvActionTypes from './actions/ohlcv'
import tokenSearcherActionTypes from './actions/tokenSearcher'
import tokensActionTypes from './actions/tokens'
import accountActionTypes from './actions/account'
import depositFormActionTypes from './actions/depositForm'
import getStartedModalActionTypes from './actions/getStartedModal'
import settingsActionTypes from './actions/settings'
import createWalletActionTypes from './actions/createWallet'
import walletPageActionTypes from './actions/walletPage'
import tradingPageActionTypes from './actions/tradingPage'
import socketControllerActionTypes from './actions/socketController'
import loginPageActionTypes from './actions/loginPage'
import logoutPageActionTypes from './actions/logoutPage'
import signerSettingsActionTypes from './actions/signerSettings'
import convertTokensFormActionTypes from './actions/convertTokensForm'
import marketsPageActionTypes from './actions/marketsPage'
import appActionTypes from './actions/app'
import orderBookActionTypes from './actions/orderBook';
import marketsTableActionTypes from './actions/marketsTable';
import walletInfoActionTypes from './actions/walletInfo'
import layoutActionTypes from './actions/layout'
import orderFormActionTypes from './actions/orderForm'

import * as accountBalancesEvents from './domains/accountBalances'
import * as transferTokensFormEvents from './domains/transferTokensForm'
import * as loginPageEvents from './domains/loginPage'
import * as orderBookEvents from './domains/orderBook'
import * as tradeEvents from './domains/trades'
import * as orderEvents from './domains/orders'
import * as ohlcvEvents from './domains/ohlcv'
import * as tokensEvents from './domains/tokens'
import * as accountEvents from './domains/account'
import * as depositFormEvents from './domains/depositForm'
import * as getStartedModalEvents from './domains/getStartedModal'
import * as settingsEvents from './domains/settings'
import * as tokenPairsEvents from './domains/tokenPairs'
import * as signerEvents from './domains/signer'
import * as walletsEvents from './domains/wallets'
import * as notificationEvents from './domains/notifications'
import * as convertTokensFormEvents from './domains/convertTokensForm'
import * as connectionEvents from './domains/connection'
import * as transactionEvents from './domains/transactions'
import * as statsEvents from './domains/stats'

export const loginPage = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case loginPageActionTypes.requestLogin:
      return loginPageEvents.loginRequested()
    case loginPageActionTypes.loginError:
      return loginPageEvents.loginFailed(payload.error)
    case loginPageActionTypes.loginWithMetamask:
      return loginPageEvents.authenticated()
    case loginPageActionTypes.loginWithWallet:
      return loginPageEvents.authenticated()
    default:
      return loginPageEvents.initialized()
  }
})

export const accountBalances = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case accountBalancesActionTypes.subscribeBalance:
      return accountBalancesEvents.subscribed(payload.symbol)
    case accountBalancesActionTypes.unsubscribeBalance:
      return accountBalancesEvents.unsubscribed(payload.symbol)
    case accountBalancesActionTypes.updateBalance:
      return accountBalancesEvents.updated([{ symbol: payload.symbol, balance: payload.balance }])
    case accountBalancesActionTypes.updateBalances:
      return accountBalancesEvents.updated(payload.balances)
    case accountBalancesActionTypes.clearBalances:
      return accountBalancesEvents.cleared()
    case depositFormActionTypes.subscribeBalance:
      return accountBalancesEvents.subscribed(payload.symbol)
    case depositFormActionTypes.unsubscribeBalance:
      return accountBalancesEvents.unsubscribed(payload.symbol)
    case depositFormActionTypes.updateBalance:
      return accountBalancesEvents.updated([{ symbol: payload.symbol, balance: payload.balance }])
    case depositFormActionTypes.updateBalances:
      return accountBalancesEvents.updated(payload.balances)
    case walletPageActionTypes.updateBalances:
      return accountBalancesEvents.updated(payload.balances)
    case walletPageActionTypes.updateBalance:
      return accountBalancesEvents.updated([{ symbol: payload.symbol, balance: payload.balance }])
    case walletPageActionTypes.updateAllowances:
      return accountBalancesEvents.allowancesUpdated(payload.allowances)
    case walletPageActionTypes.updateAllowance:
      return accountBalancesEvents.allowancesUpdated([{ symbol: payload.symbol, allowance: payload.allowance }])
    case walletPageActionTypes.unlockToken:
    case walletPageActionTypes.lockToken:
      return accountBalancesEvents.allowancesPendingUpdated([ payload.symbol ])
    case orderFormActionTypes.unlockPair:
      return accountBalancesEvents.allowancesPendingUpdated([ payload.baseTokenSymbol, payload.quoteTokenSymbol ])
    default:
      return accountBalancesEvents.initialized()
  }
})

export const transactions = createReducer(action => {
  const { type, payload } = action
  switch (type) {

    case transferTokensFormActionTypes.sendTx:
    case transferTokensFormActionTypes.confirmTx:
    case transferTokensFormActionTypes.revertTx:
      return transactionEvents.txsUpdated(payload.transactions)
    case convertTokensFormActionTypes.sendConvertTx:
    case convertTokensFormActionTypes.revertConvertTx:
    case convertTokensFormActionTypes.confirmConvertTx:
    case convertTokensFormActionTypes.sendAllowTx:
    case convertTokensFormActionTypes.revertAllowTx:
    case convertTokensFormActionTypes.confirmAllowTx:
    return transactionEvents.txsUpdated(payload.transactions)
    case orderFormActionTypes.unlockPair:
    case orderFormActionTypes.confirmUnlockPair:
    case orderFormActionTypes.errorUnlockPair:
      return transactionEvents.txsUpdated(payload.transactions)
    case walletPageActionTypes.unlockToken:
    case walletPageActionTypes.lockToken:
    case walletPageActionTypes.confirmLockToken:
    case walletPageActionTypes.confirmUnlockToken:
    case walletPageActionTypes.errorLockToken:
    case walletPageActionTypes.errorUnlockToken:
      return transactionEvents.txsUpdated([ payload.tx ])
    case walletPageActionTypes.updateWalletPageData:
      return transactionEvents.txsUpdated(payload.transactions)
    default:
      return transactionEvents.initialized()
  }
})

export const signer = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case signerSettingsActionTypes.requestSigner:
      return signerEvents.signerRequested()
    case signerSettingsActionTypes.updateSigner:
      return signerEvents.signerUpdated(payload.params)
    case signerSettingsActionTypes.error:
      return signerEvents.signerError(payload.message)
    default:
      return signerEvents.initialized()
  }
})

export const transferTokensForm = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case transferTokensFormActionTypes.txError:
      return transferTokensFormEvents.txError(payload.status, payload.statusMessage)
    case transferTokensFormActionTypes.validateTx:
      return transferTokensFormEvents.txValidated(payload.statusMessage, payload.gas)
    case transferTokensFormActionTypes.invalidateTx:
      return transferTokensFormEvents.txInvalidated(payload.statusMessage)
    case transferTokensFormActionTypes.revertTx:
      return transferTokensFormEvents.txReverted(payload.statusMessage, payload.receipt)
    case transferTokensFormActionTypes.sendTx:
      return transferTokensFormEvents.txSent(payload.hash)
    case transferTokensFormActionTypes.confirmTx:
      return transferTokensFormEvents.txConfirmed(payload.receipt)
    default:
      return transferTokensFormEvents.initialized()
  }
})

export const ohlcv = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case socketControllerActionTypes.initOHLCV:
    case ohlcvActionTypes.saveData:
      return ohlcvEvents.savedOHLCVData(payload.data)
    case ohlcvActionTypes.saveDuration:
      return ohlcvEvents.savedDuration(payload.data)
    case ohlcvActionTypes.saveTimeSpan:
      return ohlcvEvents.savedTimeSpan(payload.data)
    case ohlcvActionTypes.saveNoOfCandles:
      return ohlcvEvents.savedNoOfCandles(payload)
    case tokenSearcherActionTypes.updateCurrentPair:
    case tradingPageActionTypes.updateCurrentPair:
      return ohlcvEvents.ohlcvReset()
    default:
      return ohlcvEvents.initialized()
  }
})

export const trades = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case socketControllerActionTypes.updateTradesTable:
    case tradingPageActionTypes.updateTradesTable:
    case tokenSearcherActionTypes.updateTradesTable:
      return tradeEvents.tradesUpdated(payload.trades)
    case socketControllerActionTypes.initTradesTable:
    case tradingPageActionTypes.initTradesTable:
    case tokenSearcherActionTypes.initTradesTable:
      return tradeEvents.tradesInitialized(payload.trades)
    case tradingPageActionTypes.updateCurrentPair:
    case tokenSearcherActionTypes.updateCurrentPair:
        return tradeEvents.tradesReset()
    default:
      return tradeEvents.initialized()
  }
})

export const orderBook = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case orderBookActionTypes.select:
      return orderBookEvents.selected(payload.order);
    case tradingPageActionTypes.updateOrderBook:
    case tokenSearcherActionTypes.updateOrderBook:
    case socketControllerActionTypes.updateOrderBook:
      return orderBookEvents.orderBookUpdated(payload.bids, payload.asks)
    case tradingPageActionTypes.initOrderBook:
      return orderBookEvents.orderBookInitialized(payload.bids, payload.asks)
    case tokenSearcherActionTypes.initOrderBook:
      return orderBookEvents.orderBookInitialized(payload.bids, payload.asks)
    case socketControllerActionTypes.initOrderBook:
      return orderBookEvents.orderBookInitialized(payload.bids, payload.asks)
    case tradingPageActionTypes.updateCurrentPair:
    case tokenSearcherActionTypes.updateCurrentPair:
      return orderBookEvents.orderBookReset()
    default:
      return orderBookEvents.initialized()
  }
})

export const orders = createReducer(action => {
  const { type, payload } = action
  
  switch (type) {
    case socketControllerActionTypes.updateOrdersTable:
      return orderEvents.ordersUpdated(payload.orders)
    case tradingPageActionTypes.updateTradingPageData:
      return orderEvents.ordersInitialized(payload.orders)
    default:
      return orderEvents.initialized()
  }
})

export const tokens = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case tokensActionTypes.updateTokens:
      return tokensEvents.tokensUpdated(payload.tokens)
    case walletPageActionTypes.updateWalletPageData:
      return tokensEvents.tokensUpdated(payload.tokens)
    case walletInfoActionTypes.addToken:
      return tokensEvents.tokensUpdated([payload.token])
    default:
      return tokensEvents.initialized()
  }
})

export const tokenPairs = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case tradingPageActionTypes.updateCurrentPair:
      return tokenPairsEvents.currentPairUpdated(payload.pair)
    case walletPageActionTypes.updateCurrentPair:
      return tokenPairsEvents.currentPairUpdated(payload.pair)
    case marketsTableActionTypes.updateCurrentPair:
      return tokenPairsEvents.currentPairUpdated(payload.pair)
    case tokensActionTypes.removeTokens:
      return tokenPairsEvents.tokenPairRemoved(payload)
    case tokenSearcherActionTypes.updateFavorite:
      return tokenPairsEvents.tokenPairFavorited(payload.code, payload.favorite)
    case tokenSearcherActionTypes.updateCurrentPair:
      return tokenPairsEvents.currentPairUpdated(payload.pair)
    case tradingPageActionTypes.updateTradingPageData:
      return tokenPairsEvents.tokenPairDataUpdated(payload.tokenPairData)
    case marketsPageActionTypes.updateMarketPageData:
      return tokenPairsEvents.tokenPairDataUpdated(payload.tokenPairData)
    case walletPageActionTypes.updateWalletPageData:
      return tokenPairsEvents.tokenPairsUpdated(payload.pairs)
    case walletInfoActionTypes.addToken:
      return tokenPairsEvents.tokenPairsUpdated(payload.pairs)
    case walletInfoActionTypes.registerToken:
      return tokenPairsEvents.tokenPairsUpdated(payload.pairs)
    default:
      return tokenPairsEvents.initialized()
  }
})

export const account = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case accountActionTypes.updateAccount:
      return accountEvents.accountUpdated(payload.address, '')
    case signerSettingsActionTypes.updateSigner:
      return accountEvents.accountUpdated(payload.address, '')
    case loginPageActionTypes.loginWithMetamask:
      return accountEvents.accountUpdated(payload.address, '')
    case loginPageActionTypes.loginWithWallet:
      return accountEvents.accountUpdated(payload.address, payload.privateKey)
    case walletPageActionTypes.updateShowHelpModal:
      return accountEvents.showHelpModalUpdated(payload.showHelpModal)
    case walletPageActionTypes.updateWalletPageData:
      return accountEvents.updated({ exchangeAddress: payload.exchangeAddress, currentBlock: payload.currentBlock })
    case layoutActionTypes.updateReferenceCurrency:
      return accountEvents.referenceCurrencyUpdated(payload.referenceCurrency)
    case logoutPageActionTypes.logout:
      return accountEvents.accountRemoved()
    default:
      return accountEvents.initialized()
  }
})

export const stats = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case marketsPageActionTypes.updateMarketPageData:
      return statsEvents.updated(payload.tradingStats)
    default:
      return statsEvents.initialized()
  }
})

export const depositForm = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case depositFormActionTypes.deposit:
      return depositFormEvents.deposited()
    case depositFormActionTypes.confirm:
      return depositFormEvents.confirmed()
    case depositFormActionTypes.sendConvertTx:
      return depositFormEvents.convertTxSent(payload.hash)
    case depositFormActionTypes.revertConvertTx:
      return depositFormEvents.convertTxReverted(payload.receipt)
    case depositFormActionTypes.confirmConvertTx:
      return depositFormEvents.convertTxConfirmed(payload.receipt)
    case depositFormActionTypes.sendAllowTx:
      return depositFormEvents.allowTxSent(payload.hash)
    case depositFormActionTypes.revertAllowTx:
      return depositFormEvents.allowTxReverted(payload.receipt)
    case depositFormActionTypes.confirmAllowTx:
      return depositFormEvents.allowTxConfirmed(payload.receipt)
    default:
      return depositFormEvents.initialized()
  }
})

export const getStartedModal = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case getStartedModalActionTypes.sendConvertTx:
      return getStartedModalEvents.convertTxSent(payload.hash)
    case getStartedModalActionTypes.revertConvertTx:
      return getStartedModalEvents.convertTxReverted(payload.receipt)
    case getStartedModalActionTypes.confirmConvertTx:
      return getStartedModalEvents.convertTxConfirmed(payload.receipt)
    case getStartedModalActionTypes.sendApproveTx:
      return getStartedModalEvents.approveTxSent(payload.hash)
    case getStartedModalActionTypes.revertApproveTx:
      return getStartedModalEvents.approveTxReverted(payload.receipt)
    case getStartedModalActionTypes.confirmApproveTx:
      return getStartedModalEvents.approveTxConfirmed(payload.receipt)
    default:
      return getStartedModalEvents.initialized()
  }
})

export const convertTokensForm = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case convertTokensFormActionTypes.confirm:
      return convertTokensFormEvents.confirmed(payload.tokenSymbol)
    case convertTokensFormActionTypes.reset:
      return convertTokensFormEvents.reset(payload.tokenSymbol)
    case convertTokensFormActionTypes.sendConvertTx:
      return convertTokensFormEvents.convertTxSent(payload.tokenSymbol, payload.hash)
    case convertTokensFormActionTypes.revertConvertTx:
      return convertTokensFormEvents.convertTxReverted(payload.tokenSymbol, payload.receipt)
    case convertTokensFormActionTypes.confirmConvertTx:
      return convertTokensFormEvents.convertTxConfirmed(payload.tokenSymbol, payload.receipt)
    case convertTokensFormActionTypes.sendAllowTx:
      return convertTokensFormEvents.allowTxSent(payload.tokenSymbol, payload.hash)
    case convertTokensFormActionTypes.revertAllowTx:
      return convertTokensFormEvents.allowTxReverted(payload.tokenSymbol, payload.receipt)
    case convertTokensFormActionTypes.confirmAllowTx:
      return convertTokensFormEvents.allowTxConfirmed(payload.tokenSymbol, payload.receipt)
    default:
      return convertTokensFormEvents.initialized()
    }
})

export const settings = createReducer(action => {
  const { type } = action
  switch (type) {
    case settingsActionTypes.togglePvtKeyLock:
      return settingsEvents.pvtKeyLockToggled()
    case settingsActionTypes.setDefaultGasLimit:
      return settingsEvents.defaultGasLimitSet()
    case settingsActionTypes.setDefaultGasPrice:
      return settingsEvents.defaultGasPriceSet()
    default:
      return settingsEvents.initialized()
  }
})

export const wallets = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case createWalletActionTypes.createWallet:
      return walletsEvents.walletAdded(payload.address, payload.encryptedWallet)
    case createWalletActionTypes.addWallet:
      return walletsEvents.walletAdded(payload.address, payload.encryptedWallet)
    case createWalletActionTypes.removeWallet:
      return walletsEvents.walletRemoved(payload)
    case loginPageActionTypes.createWallet:
      return walletsEvents.walletAdded(payload.address, payload.encryptedWallet)
    default:
      return walletsEvents.initialized()
  }
})

export const notifications = createReducer(action => {
  const { type, payload } = action
  switch (type) {
    case appActionTypes.addNotification:
      return notificationEvents.notificationAdded(payload.notificationType, payload.options)
    case appActionTypes.addSuccessNotification:
      return notificationEvents.notificationAdded(payload.notificationType, payload.options)
    case appActionTypes.addErrorNotification:
      return notificationEvents.notificationAdded(payload.notificationType, payload.options)
    case appActionTypes.removeNotification:
      return notificationEvents.notificationRemoved(payload.id)
    case orderFormActionTypes.unlockPair:
      return notificationEvents.notificationAdded('unlockPairPending', { 
        symbol: payload.symbol, 
        txHash: payload.txHash, 
        baseTokenSymbol: payload.baseTokenSymbol, 
        quoteTokenSymbol: payload.quoteTokenSymbol
      })
    case orderFormActionTypes.confirmUnlockPair:
      return notificationEvents.notificationAdded('unlockPairConfirmed', {
        symbol: payload.symbol,
        txHash: payload.txHash,
        baseTokenSymbol: payload.baseTokenSymbol,
        quoteTokenSymbol: payload.quoteTokenSymbol
      })
    case orderFormActionTypes.errorUnlockPair:
      return notificationEvents.notificationAdded(payload.notificationType, { intent: 'danger', message: payload.message })
    case walletPageActionTypes.unlockToken:
      return notificationEvents.notificationAdded('unlockTokenPending', { symbol: payload.symbol, txHash: payload.txHash })
    case walletPageActionTypes.lockToken:
      return notificationEvents.notificationAdded('lockTokenPending', { symbol: payload.symbol, txHash: payload.txHash })
    case walletPageActionTypes.confirmUnlockToken:
      return notificationEvents.notificationAdded('unlockTokenConfirmed', { symbol: payload.symbol, txHash: payload.txHash })
    case walletPageActionTypes.confirmLockToken:
      return notificationEvents.notificationAdded('lockTokenConfirmed', { symbol: payload.symbol, txHash: payload.txHash })
    case walletPageActionTypes.errorLockToken:
    case walletPageActionTypes.errorUnlockToken:
      return notificationEvents.notificationAdded(payload.notificationType, { intent: 'danger', message: payload.message })
    case transferTokensFormActionTypes.revertTx:
    case transferTokensFormActionTypes.revertAllowTx:
    case transferTokensFormActionTypes.revertConvertTx:
      return notificationEvents.dangerNotificationAdded(payload.message)
    case transferTokensFormActionTypes.confirmTx:
    case transferTokensFormActionTypes.sendTx:
      return notificationEvents.successNotificationAdded(payload.message)
    default:
      return notificationEvents.initialized()
  }
})

export const connection = createReducer(({ type }) => {
  switch (type) {
    case socketControllerActionTypes.createConnection:
      return connectionEvents.initiated()
    case socketControllerActionTypes.closeConnection:
    case socketControllerActionTypes.connectionError:
      return connectionEvents.closed()
    case socketControllerActionTypes.openConnection:
      return connectionEvents.opened()
    default:
      return connectionEvents.initialized()
  }
});

// @flow
import { Contract } from 'ethers';
import {
  getAccountBalancesDomain,
  getAccountDomain,
  getDepositFormDomain,
  getSignerDomain,
  getTokenDomain,
} from '../domains';

import * as actionCreators from '../actions/accountBalances';
import * as depositFormActionCreators from '../actions/depositForm';
import * as accountBalancesService from '../services/accountBalances';
import { getSigner } from '../services/signer';
import { EXCHANGE_ADDRESS, WETH_ADDRESS } from '../../config/contracts';
import { ERC20, WETH } from '../../config/abis';

import type { Token } from '../../types/common';
import type { State, ThunkAction } from '../../types';

export default function depositFormSelector(state: State) {
  let accountDomain = getAccountDomain(state);
  let tokenDomain = getTokenDomain(state);
  let accountBalancesDomain = getAccountBalancesDomain(state);
  let signerDomain = getSignerDomain(state);
  let depositFormDomain = getDepositFormDomain(state);

  return {
    accountAddress: () => accountDomain.address(),
    tokens: () => tokenDomain.tokens(),
    rankedTokens: () => tokenDomain.rankedTokens(),
    symbols: () => tokenDomain.symbols(),
    tokenIsSubscribed: (symbol: string) => accountBalancesDomain.isSubscribed(symbol),
    balances: () => accountBalancesDomain.formattedBalances(),
    networkID: () => signerDomain.getNetworkID(),
    getStep: () => depositFormDomain.getStep(),
    getAllowTxState: () => depositFormDomain.getAllowTxState(),
    getConvertTxState: () => depositFormDomain.getConvertTxState(),
  };
}

export function queryBalances(): ThunkAction {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const accountAddress = depositFormSelector(state).accountAddress();
      let tokens = depositFormSelector(state).tokens();
      tokens = tokens.filter((token: Token) => token.symbol !== 'ETH');

      if (!accountAddress) throw new Error('Account address is not set');

      const tokenBalances = await accountBalancesService.queryTokenBalances(accountAddress, tokens);
      const etherBalance = await accountBalancesService.queryEtherBalance(accountAddress);

      const balances = [etherBalance].concat(tokenBalances);
      dispatch(actionCreators.updateBalances(balances));
    } catch (error) {
      console.log('queryBalances', error.message);
    }
  };
}

export function subscribeBalance(token: Token): ThunkAction {
  return async (dispatch, getState) => {
    try {
      let unsubscribe;
      const { symbol } = token;
      const state = getState();
      const accountAddress = depositFormSelector(state).accountAddress();
      const tokenSymbols = depositFormSelector(state).symbols();
      const tokenIsSubscribed = depositFormSelector(state).tokenIsSubscribed(symbol);

      const updateBalanceHandler = balance => {
        dispatch(actionCreators.updateBalance(symbol, balance));
        dispatch(depositFormActionCreators.deposit());
      };

      if (tokenIsSubscribed) return;
      if (!accountAddress) throw new Error('Account address is not set');
      if (tokenSymbols.indexOf(symbol) === -1) throw new Error('Token is not subscribed');

      dispatch(actionCreators.subscribeBalance(symbol));

      token.address === '0x0'
        ? (unsubscribe = await accountBalancesService.subscribeEtherBalance(accountAddress, updateBalanceHandler))
        : (unsubscribe = await accountBalancesService.subscribeTokenBalance(
            accountAddress,
            token,
            updateBalanceHandler
          ));

      return () => {
        unsubscribe();
        dispatch(actionCreators.unsubscribeBalance(symbol));
      };
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const confirmEtherDeposit = (
  shouldConvert: boolean,
  shouldAllow: boolean,
  convertAmount: number
): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      dispatch(depositFormActionCreators.confirm());
      let signer = getSigner();
      let network = depositFormSelector(getState()).networkID();
      let weth = new Contract(WETH_ADDRESS[network], WETH, signer);

      if (shouldConvert) {
        if (shouldAllow) {
          // let convertTxParams = { value: 1000 };
          let convertTxPromise = weth.deposit();

          // let allowTxParams = {};
          let allowTxPromise = weth.approve(EXCHANGE_ADDRESS[network], -1, {});

          let [convertTx, allowTx] = await Promise.all([convertTxPromise, allowTxPromise]);

          dispatch(depositFormActionCreators.sendConvertTx(convertTx.hash));
          dispatch(depositFormActionCreators.sendAllowTx(allowTx.hash));

          let [convertTxReceipt, allowTxReceipt] = await Promise.all([
            signer.provider.waitForTransaction(convertTx.hash),
            signer.provider.waitForTransaction(allowTx.hash),
          ]);

          convertTxReceipt.status === '0x0'
            ? dispatch(depositFormActionCreators.revertConvertTx(convertTxReceipt))
            : dispatch(depositFormActionCreators.confirmConvertTx(convertTxReceipt));

          allowTxReceipt.status === '0x0'
            ? dispatch(depositFormActionCreators.revertAllowTx(allowTxReceipt))
            : dispatch(depositFormActionCreators.confirmAllowTx(allowTxReceipt));
        } else {
          // let convertTxParams = { value: 1000 };
          let convertTx = await weth.convert();
          dispatch(depositFormActionCreators.sendConvertTx(convertTx.hash));
          let convertTxReceipt = await signer.provider.waitForTransaction(convertTx.hash);

          convertTxReceipt.status === '0x0'
            ? dispatch(depositFormActionCreators.revertConvertTx(convertTxReceipt))
            : dispatch(depositFormActionCreators.confirmConvertTx(convertTxReceipt));
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const confirmTokenDeposit = ({ address }: Token, shouldAllow: boolean): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let signer = getSigner();
      let exchange = EXCHANGE_ADDRESS[signer.provider.network.chainId];
      let token = new Contract(address, ERC20, signer);

      if (shouldAllow) {
        let allowTx = await token.approve(exchange, -1);
        dispatch(depositFormActionCreators.sendAllowTx(allowTx.hash));

        let allowTxReceipt = await signer.provider.waitForTransaction(allowTx.hash);

        allowTxReceipt.status === '0x0'
          ? dispatch(depositFormActionCreators.revertAllowTx(allowTxReceipt))
          : dispatch(depositFormActionCreators.confirmAllowTx(allowTxReceipt));
      }

      dispatch(depositFormActionCreators.confirm());
    } catch (error) {
      console.log(error.message);
    }
  };
};

// @flow
import { Contract } from 'ethers';
import {
  getAccountBalancesDomain,
  getAccountDomain,
  getSignerDomain,
  getTokenDomain,
  getConvertTokensFormDomain,
} from '../domains';

import * as depositFormActionCreators from '../actions/depositForm';
import { getSigner } from '../services/signer';
import { EXCHANGE_ADDRESS, WETH_ADDRESS } from '../../config/contracts';
import { ERC20, WETH } from '../../config/abis';

import type { Token } from '../../types/common';
import type { State, ThunkAction } from '../../types';

export default function convertTokensFormSelector(state: State) {
  let accountDomain = getAccountDomain(state);
  let tokenDomain = getTokenDomain(state);
  let accountBalancesDomain = getAccountBalancesDomain(state);
  let convertTokensFormDomain = getConvertTokensFormDomain(state)
  let signerDomain = getSignerDomain(state);

  let tokens = tokenDomain.bySymbol()
  tokens['ETH'] = { symbol: 'ETH', address: '0x0' }

  return {
    accountAddress: () => accountDomain.address(),
    tokens: () => tokens,
    balances: () => accountBalancesDomain.balances(),
    networkId: () => signerDomain.getNetworkId(),
    convertTokensFormState: (tokenSymbol: string) => convertTokensFormDomain.convertTokensFormState(tokenSymbol),
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
      let network = convertTokensFormSelector(getState()).networkId();
      let weth = new Contract(WETH_ADDRESS[network], WETH, signer);

      if (shouldConvert) {
        if (shouldAllow) {
          let convertTxPromise = weth.deposit();
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

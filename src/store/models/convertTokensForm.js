// @flow
import { utils, Contract } from 'ethers';
import {
  getAccountBalancesDomain,
  getAccountDomain,
  getSignerDomain,
  getTokenDomain,
  getConvertTokensFormDomain,
} from '../domains';

import * as notificationActionCreators from '../actions/app'
import * as actionCreators from '../actions/convertTokensForm'
import { getSigner } from '../services/signer';
import { EXCHANGE_ADDRESS, WETH_ADDRESS } from '../../config/contracts';
import { WETH } from '../../config/abis';
import { ALLOWANCE_THRESHOLD } from '../../utils/constants'
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
    networkID: () => signerDomain.getNetworkID(),
    convertTokensFormState: (tokenSymbol: string) => convertTokensFormDomain.convertTokensFormState(tokenSymbol),
  };
}

export const convertFromWETHtoETH = (convertAmount: number): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      dispatch(actionCreators.confirm('WETH'))

      let signer = getSigner()
      let networkID = signer.networkID
      let weth = new Contract(WETH_ADDRESS[networkID], WETH, signer)
      let amount = utils.parseEther(convertAmount.toString())

      let tx = await weth.withdraw(amount)
      dispatch(actionCreators.sendConvertTx('WETH', tx.hash))

      let txReceipt = await signer.provider.waitForTransaction(tx.hash)

      if (txReceipt.status === 0) {
        dispatch(actionCreators.revertConvertTx('WETH', txReceipt))
        dispatch(notificationActionCreators.addDangerNotification({ message: 'ETH conversion transaction failed' }))
      } else {
        dispatch(actionCreators.confirmConvertTx('WETH', txReceipt))
        dispatch(notificationActionCreators.addSuccessNotification({ message: 'ETH conversion transaction successful!' }))
      }
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const convertFromETHtoWETH = (shouldAllow: boolean, convertAmount: number): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      dispatch(actionCreators.confirm('ETH'));

      let signer = getSigner();
      let networkID = signer.networkID
      let weth = new Contract(WETH_ADDRESS[networkID], WETH, signer);
      let signerAddress = await signer.getAddress()
      let txCount = await signer.provider.getTransactionCount(signerAddress)

      if (shouldAllow) {
        let convertTxPromise = weth.deposit({
          value: utils.parseEther(convertAmount.toString()),
          nonce: txCount
         });

        let allowTxPromise = weth.approve(
          EXCHANGE_ADDRESS[networkID],
          ALLOWANCE_THRESHOLD,
          { nonce: txCount + 1 }
        );

        let [convertTx, allowTx] = await Promise.all([convertTxPromise, allowTxPromise]);
        dispatch(actionCreators.sendConvertTx('ETH', convertTx.hash));
        dispatch(actionCreators.sendAllowTx('ETH', allowTx.hash));

        let [convertTxReceipt, allowTxReceipt] = await Promise.all([
          signer.provider.waitForTransaction(convertTx.hash),
          signer.provider.waitForTransaction(allowTx.hash),
        ]);

        convertTxReceipt.status === 0
          ? dispatch(actionCreators.revertConvertTx('ETH', convertTxReceipt))
          : dispatch(actionCreators.confirmConvertTx('ETH', convertTxReceipt));

        allowTxReceipt.status === 0
          ? dispatch(actionCreators.revertAllowTx('ETH', allowTxReceipt))
          : dispatch(actionCreators.confirmAllowTx('ETH', allowTxReceipt));

        (convertTxReceipt.status === 0 || allowTxReceipt.status === 0)
          ? dispatch(notificationActionCreators.addDangerNotification({ message: 'ETH conversion transaction failed' }))
          : dispatch(notificationActionCreators.addSuccessNotification({ message: 'ETH conversion transaction successful!' }))

      } else {
        let convertTx = await weth.deposit({
          value: utils.parseEther(convertAmount.toString())
        });
        dispatch(actionCreators.sendConvertTx('ETH', convertTx.hash));
        let convertTxReceipt = await signer.provider.waitForTransaction(convertTx.hash);

        convertTxReceipt.status === 0
          ? dispatch(actionCreators.revertConvertTx('ETH', convertTxReceipt))
          : dispatch(actionCreators.confirmConvertTx('ETH', convertTxReceipt));
      }

    } catch (error) {
      //TODO add an error here
      console.log(error.message);
    }
  };
};


// @flow
import { utils, Contract } from 'ethers';
import {
  getAccountBalancesDomain,
  getAccountDomain,
  getSignerDomain,
  getGetStartedModalDomain,
} from '../domains';

import * as notificationActionCreators from '../actions/app'
import * as actionCreators from '../actions/convertTokensForm'
import { push } from 'connected-react-router'

import { getSigner } from '../services/signer';
import { EXCHANGE_ADDRESS, WETH_ADDRESS } from '../../config/contracts';
import { WETH } from '../../config/abis';
import { ALLOWANCE_THRESHOLD } from '../../utils/constants'
import type { State, ThunkAction } from '../../types';

export default function convertTokensFormSelector(state: State) {
  let accountDomain = getAccountDomain(state);
  let accountBalancesDomain = getAccountBalancesDomain(state);
  let signerDomain = getSignerDomain(state);
  let getStartedModalDomain = getGetStartedModalDomain(state)

  return {
    accountAddress: () => accountDomain.address(),
    ETHBalance: () => accountBalancesDomain.etherBalance(),
    WETHBalance: () => accountBalancesDomain.tokenBalance('WETH'),
    WETHAllowance: () => accountBalancesDomain.tokenAllowance('WETH'),
    networkID: () => signerDomain.getNetworkID(),
    convertTxState: () => getStartedModalDomain.convertTxState(),
    approveTxState: () => getStartedModalDomain.approveTxState()
  };
}

export const convertETH = (convertAmount: number): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let signer = getSigner()
      let networkID = signer.networkID
      let weth = new Contract(WETH_ADDRESS[networkID], WETH, signer)
      let signerAddress = await signer.getAddress()
      let txCount = await signer.provider.getTransactionCount(signerAddress)

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

    } catch (error) {
      console.log(error.message)
    }
  }
}


export const redirectToTradingPage = (): ThunkAction => {
  return async (dispatch, getState) => {
    dispatch(push('/trade'))
  }
}


export const approveWETH = (): ThunkAction => {
  return async (dispatch, getState) => {
    try {
      let signer = getSigner()
      let networkID = signer.networkID
      let weth = new Contract(WETH_ADDRESS[networkID], WETH, signer)

      let tx = await weth.approve(EXCHANGE_ADDRESS[networkID], ALLOWANCE_THRESHOLD)
      let txReceipt = await signer.provider.waitForTransaction(tx.hash)

      txReceipt.status === 0
        ? dispatch(actionCreators.revertAllowTx('ETH', txReceipt))
        : dispatch(actionCreators.confirmConvertTx('ETH', txReceipt))

    } catch (error) {
      console.log(error.message)
    }
  }
}
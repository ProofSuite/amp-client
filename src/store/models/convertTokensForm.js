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
  return async (dispatch, getState, { mixpanel }) => {
    mixpanel.track('convert-from-weth-to-eth');

    try {
      dispatch(actionCreators.confirm('WETH'))

      let signer = getSigner()
      let networkID = signer.networkID
      let weth = new Contract(WETH_ADDRESS[networkID], WETH, signer)
      let amount = utils.parseEther(convertAmount.toString())

      let { hash } = await weth.withdraw(amount)
      let tx = { type: 'WETH Converted', status: 'PENDING', hash }
      dispatch(actionCreators.sendConvertTx('WETH', tx))

      let receipt = await signer.provider.waitForTransaction(tx.hash)

      if (receipt.status === 0) {
        let tx = { type: 'WETH Converted', status: 'ERROR', hash, receipt, time: Date.now() }
        let message = 'ETH conversion transaction failed'
        dispatch(actionCreators.revertConvertTx('WETH', tx, message))

      } else {
        let tx = { type: 'WETH Converted', status: 'CONFIRMED', hash, receipt, time: Date.now() }
        let message = 'ETH conversion transaction successful'
        dispatch(actionCreators.confirmConvertTx('WETH', tx, message))

      }
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const convertFromETHtoWETH = (shouldAllow: boolean, convertAmount: number): ThunkAction => {
  return async (dispatch, getState, { mixpanel }) => {
    mixpanel.track('convert-from-eth-to-weth');

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

        let [convertTxResult, allowTxResult] = await Promise.all([convertTxPromise, allowTxPromise]);

        let convertTx = { type: 'ETH Converted', hash: convertTxResult.hash, status: 'PENDING' }
        let allowTx = { type: 'Token Unlocked', hash: allowTxResult.hash, status: 'PENDING' }

        dispatch(actionCreators.sendConvertTx('ETH', convertTx));
        dispatch(actionCreators.sendAllowTx('ETH', allowTx));

        let [convertTxReceipt, allowTxReceipt] = await Promise.all([
          signer.provider.waitForTransaction(convertTx.hash),
          signer.provider.waitForTransaction(allowTx.hash),
        ]);


        if (convertTxReceipt.status === 0) {
          let convertTxMessage = 'ETH conversion transaction failed'
          let convertTx = { type: 'ETH Converted', hash: convertTxResult.hash, status: 'ERROR', receipt: convertTxReceipt, time: Date.now() }
          dispatch(actionCreators.revertConvertTx('ETH', convertTx, convertTxMessage))
        } else {
          let convertTx = { type: 'ETH Converted', hash: convertTxResult.hash, status: 'CONFIRMED', receipt: convertTxReceipt, time: Date.now()  }
          dispatch(actionCreators.confirmConvertTx('ETH', convertTx))
        }

        if (allowTxReceipt.status === 0) {
          let allowTxMessage = 'ETH allowance transaction failed'
          let allowTx = { type: 'Token unlocked', hash: allowTxResult.hash, status: 'ERROR', receipt: allowTxReceipt, time: Date.now() }
          dispatch(actionCreators.revertAllowTx('ETH', allowTx, allowTxMessage))
        } else {
          let convertTx = { type: 'Token unlocked', hash: allowTxResult.hash, status: 'CONFIRMED', receipt: allowTxReceipt, time: Date.now() }
          dispatch(actionCreators.confirmAllowTx('ETH', convertTx, allowTxReceipt))
        }

        if (convertTxReceipt.status !== 0 || allowTxReceipt.status !== 0) {
          dispatch(notificationActionCreators.addSuccessNotification({ message: 'ETH conversion transaction successful!' }))
        }
      } else {
        // Case of only conversion 
        let convertTxResult = await weth.deposit({ value: utils.parseEther(convertAmount.toString()) })
        let convertTx = { type: 'ETH Converted', hash: convertTxResult.hash, status: 'PENDING', time: Date.now() }
        dispatch(actionCreators.sendConvertTx('ETH', convertTx));

        let convertTxReceipt = await signer.provider.waitForTransaction(convertTx.hash);

        if (convertTxReceipt.status === 0) {
          let convertTx = { type: 'ETH Converted', hash: convertTxResult.hash, status: 'ERROR', receipt: convertTxReceipt, time: Date.now() }
          dispatch(actionCreators.revertConvertTx('ETH', convertTx))
        } else {
          let convertTx = { type: 'ETH Converted', hash: convertTxResult.hash, status: 'CONFIRMED', receipt: convertTxReceipt, time: Date.now() }
          dispatch(actionCreators.confirmConvertTx('ETH', convertTx))
          dispatch(notificationActionCreators.addSuccessNotification({ message: 'ETH conversion transaction successful!' }))
        }
      }

    } catch (error) {
      console.log(error.message);
    }
  };
};


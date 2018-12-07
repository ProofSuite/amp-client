// @flow
import { Contract, utils } from 'ethers'
import { ERC20 } from '../../config/abis'
import { EXCHANGE_ADDRESS } from '../../config/contracts'
import { getProvider, getSigner } from './signer'

export async function updateAllowance(
  tokenAddress: string,
  spender: string,
  address: string,
  balance: string,
  txConfirmHandler: boolean => void
) {
  const signer = getSigner()
  const contract = new Contract(tokenAddress, ERC20, signer)
  const tx = await contract.approve(spender, parseFloat(balance))
  const receipt = await signer.provider.waitForTransaction(tx.hash)

  receipt.status === 1
    ? txConfirmHandler(true)
    : txConfirmHandler(false)

}

export async function updateExchangeAllowance(
  tokenAddress: string,
  balance: Object | number,
  txConfirmHandler: boolean => void
) {
  const signer = getSigner()
  const exchange = EXCHANGE_ADDRESS[signer.provider.network.chainId]
  const contract = new Contract(tokenAddress, ERC20, signer)

  const tx = await contract.approve(exchange, balance)
  const receipt = await signer.provider.waitForTransaction(tx.hash)

  receipt.status === 1
    ? txConfirmHandler(true)
    : txConfirmHandler(false)
}
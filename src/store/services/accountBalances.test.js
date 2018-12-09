import { Contract } from 'ethers'
import * as signerService from './signer';
import * as accountBalancesService from './accountBalances';

// file.only

jest.mock('ethers');
jest.mock('./signer');

describe('updateAllowance', () => {
  let tokenAddress = '0x1'
  let spender = '0x2'
  let address = '0x3'
  let balance = '1000'
  let approve
  let waitForTransaction
  let txConfirmHandler


  beforeEach(() => {
    jest.resetAllMocks();

    approve = jest.fn(() => ({ hash: '0x4'}))
    waitForTransaction = jest.fn()

    Contract.mockImplementation(() => ({ approve }));
    signerService.getSigner.mockImplementation(() => (
      { 
        provider: { waitForTransaction } 
      })
    )

    txConfirmHandler = jest.fn()
  });

  it('calls the confirm handler with the value true if receipt.status = 1', async () => {
    waitForTransaction = jest.fn(() => ({ status: 1 }))

    await accountBalancesService.updateAllowance(tokenAddress, spender, address, balance, txConfirmHandler)
    expect(txConfirmHandler).toHaveBeenCalledTimes(1)
    expect(txConfirmHandler).toHaveBeenCalledWith(true)
  })

  it('calls the confirm handler with the value false if receipt.status = 0', async () => {
    waitForTransaction = jest.fn(() => ({ status: 0 }))

    await accountBalancesService.updateAllowance(tokenAddress, spender, address, balance, txConfirmHandler)
    expect(txConfirmHandler).toHaveBeenCalledTimes(1)
    expect(txConfirmHandler).toHaveBeenCalledWith(false)
  })


});

describe('updateExchangeAllowance', () => {
  let tokenAddress = '0x1'
  let spender = '0x2'
  let address = '0x3'
  let balance = '1000'
  let approve
  let waitForTransaction
  let txConfirmHandler


  beforeEach(() => {
    jest.resetAllMocks();

    approve = jest.fn(() => ({ hash: '0x4'}))
    waitForTransaction = jest.fn()

    Contract.mockImplementation(() => ({ approve }));
    signerService.getSigner.mockImplementation(() => (
      { 
        provider: { 
          waitForTransaction,
          network: {
            chainId: 1
          }
        } 
      })
    )

    txConfirmHandler = jest.fn()
  });

  it('calls the confirm handler with the value true if receipt.status = 1', async () => {
    waitForTransaction = jest.fn(() => ({ status: 1 }))

    await accountBalancesService.updateExchangeAllowance(tokenAddress, balance, txConfirmHandler)
    expect(txConfirmHandler).toHaveBeenCalledTimes(1)
    expect(txConfirmHandler).toHaveBeenCalledWith(true)
  })

  it('calls the confirm handler with the value false if receipt.status = 0', async () => {
    waitForTransaction = jest.fn(() => ({ status: 0 }))

    await accountBalancesService.updateExchangeAllowance(tokenAddress, balance, txConfirmHandler)
    expect(txConfirmHandler).toHaveBeenCalledTimes(1)
    expect(txConfirmHandler).toHaveBeenCalledWith(false)
  })
});



import { providers } from 'ethers'
import * as signerService from './signer'

jest.mock('ethers')

describe('createProvider', () => {
  let providerMock
  let listAccounts
  let getBlockNumber
  let getSigner

  beforeEach(() => {
    jest.clearAllMocks()

    getBlockNumber = jest.fn(() => Promise.resolve('test blockNumber'))
    listAccounts = jest.fn(() => Promise.resolve(['test address']))
    getSigner = jest.fn(() => 'test signer')
    providerMock = { getBlockNumber, listAccounts, getSigner }

    providers.getDefaultProvider.mockReturnValue(providerMock)
    providers.InfuraProvider.mockImplementation(() => providerMock)
    providers.JsonRpcProvider.mockImplementation(() => providerMock)
    providers.Web3Provider.mockImplementation(() => providerMock)
  })

  it('create metamask provider', async () => {
    window.web3 = {
      version: {
        network: '8888'
      },
      currentProvider: 'web3',
      eth: {
        defaultAccount: 'test defaultAccount'
      }
    }

    let params = { type: 'metamask', custom: false }
    let { settings, address } = await signerService.createSigner(params)

    expect(settings).toEqual({ type: 'metamask' })
    expect(address).toEqual({ address: 'test address', networkId: 8888 })
    expect(providers.Web3Provider).toHaveBeenCalledTimes(1)
    expect(window.signer.instance).toBe('test signer')
    expect(window.signer.type).toEqual('metamask')
  })

  it('creates local provider', async () => {
    let params = { type: 'rpc' }
    let { settings, address } = await signerService.createSigner(params)

    expect(settings).toEqual({ type: 'rpc', url: 'http://127.0.0.1:8545', networkId: 8888 })
    expect(address).toEqual('test address')
    expect(providers.JsonRpcProvider).toHaveBeenCalledTimes(1)
    expect(providers.JsonRpcProvider).toHaveBeenCalledWith('http://127.0.0.1:8545', {
      chainId: 8888,
      name: 'unspecified'
    })

    expect(window.signer.instance).toBe('test signer')
    expect(window.signer.type).toEqual('local')
  })
})

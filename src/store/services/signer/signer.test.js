import { providers } from 'ethers'
import * as signerService from './index'

jest.mock('ethers')

describe('createSigner', () => {
  let providerMock
  let listAccounts
  let getBlockNumber
  let getSigner
  let getAddress

  beforeEach(() => {
    jest.clearAllMocks()

    getBlockNumber = jest.fn(() => Promise.resolve('test blockNumber'))
    listAccounts = jest.fn(() => Promise.resolve(['test address']))
    getAddress = jest.fn(() => Promise.resolve('test address'))
    getSigner = jest.fn(() => ({ getAddress }))
    providerMock = { getBlockNumber, listAccounts, getSigner }

    let getDefaultProviderMock = jest.fn(() => providerMock)
    let InfuraProviderMock = jest.fn(() => providerMock)
    let JsonRpcProviderMock = jest.fn(() => providerMock)
    let Web3ProviderMock = jest.fn(() => providerMock)

    providers.getDefaultProvider = getDefaultProviderMock
    providers.InfuraProvider = InfuraProviderMock
    providers.JsonRpcProvider = JsonRpcProviderMock
    providers.Web3Provider = Web3ProviderMock
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
    expect(address).toEqual({ address: 'test address', networkID: 8888 })
    expect(providers.Web3Provider).toHaveBeenCalledTimes(1)
    expect(window.signer.instance).toHaveProperty('signOrder')
    expect(window.signer.instance).toHaveProperty('signTrade')
    expect(window.signer.instance).toHaveProperty('createRawOrder')
    expect(window.signer.instance).toHaveProperty('createOrderCancel')
    expect(window.signer.type).toEqual('metamask')
  })

  it('creates local provider', async () => {
    let params = { type: 'rpc' }
    let { settings, address } = await signerService.createSigner(params)

    expect(settings).toEqual({ type: 'rpc', url: 'http://localhost:8545', networkID: 8888 })
    expect(address).toEqual('test address')
    expect(providers.JsonRpcProvider).toHaveBeenCalledTimes(1)
    expect(providers.JsonRpcProvider).toHaveBeenCalledWith('http://localhost:8545')

    expect(window.signer.instance).toHaveProperty('signOrder')
    expect(window.signer.instance).toHaveProperty('signTrade')
    expect(window.signer.instance).toHaveProperty('createRawOrder')
    expect(window.signer.instance).toHaveProperty('createOrderCancel')
    expect(window.signer.type).toEqual('local')
  })
})

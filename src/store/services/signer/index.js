// @flow
import { providers, Wallet } from 'ethers'
import { signOrder, signTrade, createRawOrder, createOrderCancel } from './methods'
import { ETHEREUM_NODE_HTTP_URL } from '../../../config/urls'
import { DEFAULT_NETWORK_ID } from '../../../config/environment'

import type { UpdateSignerParams } from '../../../types/signer'

export const createSigner = async (params: UpdateSignerParams): any => {
  try {
    let { type, custom, url, networkID, wallet } = params
    let settings, address
    if (!custom) {
      switch (type) {
        case 'metamask':
          if (typeof window.web3 === 'undefined') throw new Error('Metamask not installed')
          if (typeof window.web3.eth.defaultAccount === 'undefined') throw new Error('Metamask account locked')
          address = await createMetamaskSigner()
          settings = { type: 'metamask', networkID }
          return { settings, address }
        case 'rpc':
          settings = { type: 'rpc', url: ETHEREUM_NODE_HTTP_URL, networkID: 8888 }
          address = await createRpcSigner(settings.url, settings.networkID)
          return { settings, address }
        case 'wallet':
          if (!wallet) throw new Error('Wallet not found')
          settings = { type: 'wallet', url: ETHEREUM_NODE_HTTP_URL, networkID }
          address = await createDefaultWalletSigner(wallet, networkID)
          return { settings, address }
        default:
          throw new Error('Incorrect type')
      }
    } else {
      switch (type) {
        case 'metamask':
          if (typeof window.web3 === 'undefined') throw new Error('Metamask not installed')
          if (typeof window.web3.eth.defaultAccount === 'undefined') throw new Error('Metamask account locked')
          settings = { type }
          address = await createMetamaskSigner()
          return { settings, address }

        case 'rpc':
          settings = { type, url, networkID }
          address = await createRpcSigner(url, networkID)
          return { settings, address }

        case 'wallet':
          if (!wallet) throw new Error('Wallet not found')
          networkID = networkID || 8888
          settings = { type, url, networkID }
          address = await createLocalWalletSigner(wallet, networkID)
          return { settings, address }
        default:
          throw new Error('Incorrect type')
      }
    }
  } catch (e) {
    console.log(e)
    throw new Error(e.message)
  }
}

export const createMetamaskSigner = async () => {
  let networkID = Number(window.web3.version.network)
  let provider = new providers.Web3Provider(window.ethereum || window.web3.currentProvider)

  let signer = provider.getSigner()
  let address = await signer.getAddress()

  signer.networkID = networkID
  signer.signOrder = signOrder
  signer.signTrade = signTrade
  signer.createRawOrder = createRawOrder
  signer.createOrderCancel = createOrderCancel

  window.signer = { instance: signer, type: 'metamask' }

  return { address, networkID }
}

export const createDefaultWalletSigner = async (wallet: Object, networkID: ?number) => {
  let provider
  console.log(DEFAULT_NETWORK_ID)

  networkID = networkID || DEFAULT_NETWORK_ID

  if (networkID === '8888') {
    provider = createProofNodeProvider(networkID)
  }

  if (networkID === '4' || networkID === '1') {
    let fallbackProviders = await Promise.all([
      createInfuraProvider(networkID),
      createEtherscanProvider(networkID),
      createProofNodeProvider(networkID)
    ])

    provider = new providers.FallbackProvider(fallbackProviders)
  }

  let signer = new Wallet(wallet.privateKey, provider)

  signer.networkID = networkID
  signer.signOrder = signOrder
  signer.signTrade = signTrade
  signer.createRawOrder = createRawOrder
  signer.createOrderCancel = createOrderCancel

  window.signer = { instance: signer, type: 'wallet' }

  return wallet.address
}


export const createInfuraProvider = async(networkID: number) => {
  if (networkID === '4') {
    return new providers.InfuraProvider('rinkeby')
  } else if (networkID === '1') {
    return new providers.InfuraProvider('homestead')
  } else if (networkID === '3') {
    return new providers.InfuraProvider('ropsten')
  }
}

export const createEtherscanProvider = async(networkID: number) => {
  if (networkID === '4') {
    return new providers.EtherscanProvider('rinkeby')
  } else if (networkID === '1') {
    return new providers.EtherscanProvider('homestead')
  } else if (networkID === '3') {
    return new providers.EtherscanProvider('ropsten')
  }
}

export const createProofNodeProvider = async(networkID: number) => {
  return new providers.JsonRpcProvider(ETHEREUM_NODE_HTTP_URL)
}

export const createLocalWalletSigner = async (wallet: Object, networkID: ?number) => {
  networkID = networkID || 8888

  let provider = new providers.JsonRpcProvider(ETHEREUM_NODE_HTTP_URL)
  let signer = new Wallet(wallet.privateKey, provider)

  signer.signOrder = signOrder
  signer.signTrade = signTrade
  signer.createRawOrder = createRawOrder
  signer.createOrderCancel = createOrderCancel

  window.signer = { instance: signer, type: 'wallet' }

  return wallet.address
}

export const createInfuraRinkebyWalletSigner = async (wallet: Object) => {
  let provider = new providers.InfuraProvider('rinkeby')
  let signer = new Wallet(wallet.key, provider)

  signer.signOrder = signOrder
  signer.signTrade = signTrade
  signer.createRawOrder = createRawOrder
  signer.createOrderCancel = createOrderCancel

  window.signer = { instance: signer, type: 'wallet' }

  return wallet.address
}

export const createInfuraWalletSigner = async (wallet: Object) => {
  let provider = new providers.InfuraProvider('homestead')
  let signer = new Wallet(wallet.key, provider)

  signer.signOrder = signOrder
  signer.signTrade = signTrade
  signer.createRawOrder = createRawOrder
  signer.createOrderCancel = createOrderCancel

  window.signer = { instance: signer, type: 'wallet' }

  return wallet.address
}

export const createRpcSigner = async (url: ?string, networkID: ?number) => {
  let provider = new providers.JsonRpcProvider(url)
  let accountAddresses = await provider.listAccounts()
  let signer = provider.getSigner(accountAddresses[0])

  signer.signOrder = signOrder
  signer.signTrade = signTrade
  signer.createRawOrder = createRawOrder
  signer.createOrderCancel = createOrderCancel

  window.signer = { instance: signer, type: 'local' }
  return accountAddresses[0]
}

export const getSigner = () => window.signer.instance
export const getProvider = () => window.signer.instance.provider

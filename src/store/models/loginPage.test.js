import createStore from '../../store/configureStore'
import getAccountDomain from '../domains/account'
import getWalletDomain from '../domains/wallets'
import loginPageSelector from './loginPage'
import * as actionCreators from './loginPage'
import * as walletService from '../services/wallet'
import * as signerService from '../services/signer'
import * as services from '../services/index.js'

//TODO: -> (1) Test fix at line 84(commented)
// TODO: -> (2) Currently there is a local and session storage mock which don't persist values line 205
jest.mock('../services/wallet')
jest.mock('../services/signer')
jest.mock('../services')

let accountDomain, domain

beforeEach(() => {
  jest.resetAllMocks()

  services.mixpanel = { track: jest.fn() }
})

let unsubscribe = jest.fn()
let model

describe('Login Page Model', () => {
  walletService.saveEncryptedWalletInLocalStorage = jest.fn()
  walletService.savePrivateKeyInSessionStorage = jest.fn()
  signerService.createMetamaskSigner = jest.fn(() => Promise.resolve('test address'))

  it('handles loginWithMetamask action (web3 undefined)', async () => {
    global.web3 = undefined
    const { store } = createStore()

    model = loginPageSelector(store.getState())
    expect(model.authenticated).toEqual(false)

    await store.dispatch(actionCreators.loginWithMetamask())

    model = loginPageSelector(store.getState())
    expect(model.authenticated).toEqual(false)

    accountDomain = getAccountDomain(store.getState().account)
    expect(accountDomain.address).toEqual(null)

    model = loginPageSelector(store.getState())
    expect(model.authenticated).toEqual(false)
    expect(model.loading).toEqual(false)
    expect(model.error).toEqual('Metamask not installed')
  })

  it('handles loginWithMetamask action (web3 present but account locked)', async () => {
    const { store } = createStore()
    global.web3 = {
      eth: 'test eth'
    }

    model = loginPageSelector(store.getState())
    expect(model.authenticated).toEqual(false)

    await store.dispatch(actionCreators.loginWithMetamask())

    model = loginPageSelector(store.getState())
    expect(model.authenticated).toEqual(false)

    accountDomain = getAccountDomain(store.getState().account)
    expect(accountDomain.address).toEqual(null)

    model = loginPageSelector(store.getState())
    expect(model.authenticated).toEqual(false)
    expect(model.loading).toEqual(false)
    expect(model.error).toEqual('Metamask account locked')
  })

  it('handles loginWithMetamask action (metamask unlocked)', async () => {
    global.web3 = {
      eth: {
        defaultAccount: 'c838efcb6512a2ca12027ebcdf9e1fc5e4ff7ee3'
      }
    }
    const { store } = createStore()

    model = loginPageSelector(store.getState())
    expect(model.authenticated).toEqual(false)

    await store.dispatch(actionCreators.loginWithMetamask())

    model = loginPageSelector(store.getState())

    //TODO (1)
    // expect(model.authenticated).toEqual(true);
    expect(model.loading).toEqual(false)
  })

  it('handles loginWithWallet (no storage)', async () => {
    const { store } = createStore()
    const params = {
      wallet: {
        address: 'test address'
      },
      encryptedWallet: 'test encryptedWallet',
      storeWallet: false,
      storePrivateKey: false
    }

    await store.dispatch(actionCreators.loginWithWallet(params))

    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledTimes(0)
    expect(walletService.savePrivateKeyInSessionStorage).toHaveBeenCalledTimes(0)
    domain = getWalletDomain(store.getState().wallets)
    expect(domain.addresses).toEqual(['test address'])
    expect(domain.byAddress).toEqual({
      'test address': {
        address: 'test address',
        encryptedWallet: 'test encryptedWallet'
      }
    })
  })

  it('handles loginWithWallet (no encrypted wallet)', async () => {
    const { store } = createStore()
    const params = {
      wallet: {
        address: 'test address'
      },
      storeWallet: false,
      storePrivateKey: true
    }

    await store.dispatch(actionCreators.loginWithWallet(params))

    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledTimes(0)
    expect(walletService.savePrivateKeyInSessionStorage).toHaveBeenCalledTimes(1)

    domain = getWalletDomain(store.getState().wallets)
    expect(domain.addresses).toEqual(['test address'])
    expect(domain.byAddress).toEqual({
      'test address': {
        address: 'test address',
        encryptedWallet: null
      }
    })
  })

  it('handles loginWithWallet (store encrypted wallet and private key', async () => {
    const { store } = createStore()
    const params = {
      wallet: {
        address: 'test address',
        privateKey: 'test privateKey'
      },
      encryptedWallet: 'test encryptedWallet',
      storeWallet: true,
      storePrivateKey: true
    }

    await store.dispatch(actionCreators.loginWithWallet(params))

    expect(walletService.saveEncryptedWalletInLocalStorage).toHaveBeenCalledTimes(1)
    expect(walletService.savePrivateKeyInSessionStorage).toHaveBeenCalledTimes(1)

    domain = getWalletDomain(store.getState().wallets)
    expect(domain.addresses).toEqual(['test address'])
    expect(domain.byAddress).toEqual({
      'test address': {
        address: 'test address',
        encryptedWallet: 'test encryptedWallet'
      }
    })
  })
})

describe('Create wallet (Integration Test)', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('handles loginWithWallet (store encrypted wallet and private key', async () => {
    walletService.saveEncryptedWalletInLocalStorage.mockImplementationOnce(
      require.requireActual('../services/wallet').saveEncryptedWalletInLocalStorage
    )

    walletService.savePrivateKeyInSessionStorage.mockImplementationOnce(
      require.requireActual('../services/wallet').savePrivateKeyInSessionStorage
    )

    const { store } = createStore()
    const encryptedWallet =
      '{"version":3,"id":"1a7ab7f2-b8d5-4614-a9cd-5f527be0fd01","address":"17fe89190052827fb351e965c965e5fe1ee60080","Crypto":{"ciphertext":"fddc61ff55af178a9291488b4164d38e3e261323e10ea71e5ee723ca6081837a","cipherparams":{"iv":"7bdad18b98f6d30309d0c09342d8b9f1"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"19d3e088f5fc74702a74693ba47f01ab786f2828c2801143a2a5be5a6a99863e","n":8192,"r":8,"p":1},"mac":"fb36b7047161d90e3397de802c7b26e97810ee7528db7fb2427df9d6124f8d48"}}'
    const params = {
      wallet: {
        address: '0x17fE89190052827FB351e965C965E5fE1Ee60080',
        privateKey: '0x77d7e234e5141bc98b11cb7ea8e9190dc6ef028f17ce237ec36a41cf1ac6fbec'
      },
      encryptedWallet: encryptedWallet,
      storeWallet: true,
      storePrivateKey: true
    }

    await store.dispatch(actionCreators.loginWithWallet(params))

    domain = getWalletDomain(store.getState().wallets)
    expect(domain.addresses).toEqual(['0x17fE89190052827FB351e965C965E5fE1Ee60080'])
    expect(domain.byAddress).toEqual({
      '0x17fE89190052827FB351e965C965E5fE1Ee60080': {
        address: '0x17fE89190052827FB351e965C965E5fE1Ee60080',
        encryptedWallet: encryptedWallet
      }
    })

    //TODO (2)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(sessionStorage.setItem).toHaveBeenCalledTimes(1)
    expect(localStorage.setItem).toHaveBeenCalledWith('0x17fE89190052827FB351e965C965E5fE1Ee60080', encryptedWallet)
    expect(sessionStorage.setItem).toHaveBeenCalledWith(
      '0x17fE89190052827FB351e965C965E5fE1Ee60080',
      '0x77d7e234e5141bc98b11cb7ea8e9190dc6ef028f17ce237ec36a41cf1ac6fbec'
    )
  })
})

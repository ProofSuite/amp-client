import { DEFAULT_NETWORK_ID } from '../../../config/environment'
import { ERC20, WETH } from '../../../config/abis'
import { EXCHANGE_ADDRESS } from '../../../config/contracts'
import { utils, providers, Contract, getDefaultProvider } from 'ethers'
// import abiDecoder from 'ethereum-input-data-decoder'

export const createConnection = () => {
    switch(DEFAULT_NETWORK_ID) {
        case '1':
            return window.provider = new getDefaultProvider('homestead')
        case '4':
            return window.provider = new getDefaultProvider('rinkeby')
        default:
            throw new Error('unknown network')
    }
}

export const getInfuraProvider = () => {
  return window.provider.providers[0]
}

export const getEtherscanProvider = () => {
  return window.provider.providers[1]
}

export async function detectContract(address: string) {
  try {
    const contract = new Contract(address, ERC20, window.provider)
  
    let decimals = await contract.decimals()
    let symbol = await contract.symbol()

    return { decimals, symbol }
  } catch (e) {
    console.log(e)
  }
}

export async function queryTransactionHistory(address: string) {
  try {
    const decoder = new abiDecoder([...ERC20, ...WETH])
    const provider = getEtherscanProvider()

    let txs = await provider.getHistory(address)
    let parsedTxs = []

    txs = txs.slice(Math.max(txs.length - 50, 0))

    txs.forEach(tx => {
      if (tx.data === '0x') {
          parsedTxs.push({ type: 'Ether Transferred', status: 'CONFIRMED', hash: tx.hash, time: tx.timestamp * 1000 })
        } else {
          let decoded = decoder.decodeData(tx.data)

          switch(decoded.name) {
            case 'approve':
              let value = decoded.inputs[1].toString()
              switch(value) {
                case '1000000000000000000000000000000000000':
                  parsedTxs.push({ type: 'Token Unlocked', status: 'CONFIRMED', hash: tx.hash, time: tx.timestamp * 1000 })
                  break
                case '0':
                  parsedTxs.push({ type: 'Token Locked', status: 'CONFIRMED', hash: tx.hash, time: tx.timestamp * 1000 })
                  break
                default:
                  parsedTxs.push({ type: 'Token Approved', status: 'CONFIRMED', hash: tx.hash, time: tx.timestamp * 1000 })
                  break
              }
              break
            case 'transfer':
              parsedTxs.push({ type: 'Token Transferred', status: 'CONFIRMED', hash: tx.hash, time: tx.timestamp * 1000 })
              break
            case 'deposit': 
              parsedTxs.push({ type: 'ETH Converted', status: 'CONFIRMED', hash: tx.hash, time: tx.timestamp * 1000 })
              break
            case 'withdraw':
              parsedTxs.push({ type: 'WETH Converted', status: 'CONFIRMED', hash: tx.hash, time: tx.timestamp * 1000 })
              break
            default:
              parsedTxs.push({ type: '', status: 'CONFIRMED', hash: tx.hash, time: tx.timestamp * 1000 })
          }
        }
      })

    return parsedTxs
  } catch (e) {
    console.log(e)
  }
}

export async function queryTokenBalances(address: string, tokens: Array<Token>) {
  const balancePromises = tokens.map(token => {
    const contract = new Contract(token.address, ERC20, window.provider)
    return contract.balanceOf(address)
  })

  const resolvingPromises = balancePromises.map((promise, i) => {
    return new Promise((resolve) => {
      let payload = new Array(2)
      promise.then((result) => {
        payload[0] = { 
          symbol: tokens[i].symbol, 
          balance: utils.formatUnits(result, tokens[i].decimals)}
      })
      .catch((error) => {
        payload[1] = error;
      })
      .then(() => {
        resolve(payload);
      })
    })
  })

  const errors = []
  const tokenBalances = []

  return Promise.all(resolvingPromises)
    .then((items) => {
      items.forEach((payload) => {
        if (payload[1]) {
          errors.push(payload[1])
        } else {
          tokenBalances.push(payload[0])
        }
      })

      return {
        errors: errors,
        tokenBalances: tokenBalances
      }
    })
}

export async function queryExchangeTokenAllowances(owner: string, tokens: Array<Token>) {
  const provider = window.provider
  const exchange = EXCHANGE_ADDRESS[provider.network.chainId]

  const allowancePromises = tokens.map(token => {
    const contract = new Contract(token.address, ERC20, provider)
    return contract.allowance(owner, exchange)
  })

  const resolvingPromises = allowancePromises.map((promise, i) => {
    return new Promise((resolve) => {
      let payload = new Array(2)
      promise.then((result) => {
        payload[0] = {
          symbol: tokens[i].symbol,
          allowance: utils.formatUnits(result, tokens[i].decimals)
        }
      })
      .catch((error) => {
        payload[1] = error;
      })
      .then(() => {
        resolve(payload);
      })
    })
  })

  const errors = []
  const tokenAllowances = []

  return Promise.all(resolvingPromises)
    .then((items) => {
      items.forEach((payload) => {
        if (payload[1]) {
          errors.push(payload[1])
        } else {
          tokenAllowances.push(payload[0])
        }
      })

      return {
        errors: errors,
        tokenAllowances: tokenAllowances
      }
    })
}

export async function queryTokenAllowances(owner: string, spender: string, tokens: Array<Token>) {
  let allowances
  const provider = window.provider
  const allowancePromises = tokens.map(token => {
    const contract = new Contract(token.address, ERC20, provider)
    return contract.allowance(owner, spender)
  })

  allowances = await Promise.all(allowancePromises)
  allowances = (allowances: TokenBalances).map((allowance, i) => ({
    symbol: tokens[i].symbol,
    allowance: utils.formatUnits(allowance, tokens[i].decimals)
  }))

  return allowances
}


export async function subscribeEtherBalance(address: string, callback: number => void) {
  const provider = window.provider

  const handler = balance => {
    callback(utils.formatEther(balance))
  }

  provider.on(address, handler)

  return () => {
    provider.removeListener(address, handler)
  }
}


export async function subscribeTokenBalance(address: string, token: Object, callback: number => void) {
  const provider = window.provider
  const contract = new Contract(token.address, ERC20, provider)

  const initialBalance = await contract.balanceOf(address)
  const handler = async (sender, receiver, tokens) => {

    if (receiver === address) {
      const balance = await contract.balanceOf(receiver)
      if (balance !== initialBalance) callback(utils.formatEther(balance))
    }
  }

  contract.on("Transfer", handler)

  return () => {
    provider.removeListener(address, handler)
  }
}

export async function subscribeTokenBalances(address: string, tokens: Array<Token>, callback: AccountBalance => any) {
  const provider = window.provider
  const handlers = []

  tokens.map(async token => {
    const contract = new Contract(token.address, ERC20, provider)
    // const initialBalance = await contract.balanceOf(address)

    const handler = async (sender, receiver, amount) => {
      if (receiver === address || sender === address) {
        const balance = await contract.balanceOf(address)
        callback({
          symbol: token.symbol,
          balance: utils.formatUnits(balance, token.decimals)
        })
      }
    }

    contract.on("Transfer", handler)
    handlers.push(handler)
  })

  return () => {
    handlers.forEach(handler => provider.removeListener(address, handler))
  }
}

export async function subscribeTokenAllowance(address: string, token: Object, callback: number => void) {
  const provider = window.provider
  const exchange = EXCHANGE_ADDRESS[provider.network.chainId]
  const contract = new Contract(token.address, ERC20, provider)

  const initialAllowance = await contract.allowance(exchange, address)
  const handler = async (sender, receiver, tokens) => {
    if (receiver === address) {
      const allowance = await contract.allowance(exchange, receiver)
      if (allowance !== initialAllowance) callback(utils.formatUnits(allowance, token.decimals))
    }
  }

  contract.on("Approval", handler)

  return () => {
    provider.removeListener(address, handler)
  }
}

export async function subscribeTokenAllowances(
  address: string,
  tokens: Array<Token>,
  callback: AccountAllowance => any
) {
  const provider = window.provider
  const exchange = EXCHANGE_ADDRESS[provider.network.chainId]
  const handlers = []

  tokens.map(async token => {
    const contract = new Contract(token.address, ERC20, provider)
    const handler = async (owner, spender, amount) => {
      if (owner === address && spender === exchange) {
        const allowance = await contract.allowance(owner, exchange)
        callback({
          symbol: token.symbol,
          allowance: utils.formatUnits(allowance, token.decimals)
        })
      }
    }

    contract.on("Approval", handler)
    handlers.push(handler)
  })

  return () => {
    handlers.forEach(handler => provider.removeListener(address, handler))
  }
}

export async function queryEtherBalance(address: string) {
  let provider = window.provider
  let balance = await provider.getBalance(address)
  
  return {
    symbol: 'ETH',
    balance: utils.formatEther(balance)
  }
}
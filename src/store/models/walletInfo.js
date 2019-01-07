
import * as actionCreators from '../actions/walletInfo'

import { 
    getTokenDomain, 
    getAccountBalancesDomain,
    getAccountDomain,
    getTransactionsDomain
} from '../domains'

export default function walletInfoSelector(state: State) {
    let tokenDomain = getTokenDomain(state)
    let accountDomain = getAccountDomain(state)
    let accountBalancesDomain = getAccountBalancesDomain(state)
    let transactionsDomain = getTransactionsDomain(state)

    return {
        userTokens: tokenDomain.tokenAddresses(),
        listedTokens: tokenDomain.listedTokenAddresses(),
        registeredTokens: tokenDomain.registeredTokenAddresses(),
        etherBalance: accountBalancesDomain.formattedEtherBalance(),
        accountAddress: accountDomain.address(),
        recentTransactions: transactionsDomain.recentTransactions(8)
    }
}

export function detectContract(tokenAddress: string): ThunkAction {
    return async (dispatch, getState, { provider, api, mixpanel }) => {
        mixpanel.track('wallet-page/detect-contract')

        try {
            let state = getState()
            let tokenDomain = getTokenDomain(state)
            let listedTokens = tokenDomain.listedTokenAddresses()

            if (listedTokens.indexOf(tokenAddress) !== -1) {
                return { error: 'Token is already listed' }
            }
            
            let token

            token = await api.getToken(tokenAddress)
            if (token) {
                return {
                    isRegistered: true,
                    decimals: token.decimals,
                    symbol: token.symbol
                }
            }

            token = await provider.detectContract(tokenAddress)
            if (token && token.symbol) {

                return {
                    isRegistered: false,
                    decimals: token.decimals,
                    symbol: token.symbol
                }
            }

            return { error: 'Contract not found' }
        } catch (e) {
            console.log(e)
            return { error: e.message }
        }
    }
}

export function addToken(tokenAddress: string): ThunkAction {
    return async (dispatch, getState, { provider, api, mixpanel }) => {
        mixpanel.track('wallet-page/add-token')

        try {
            let state = getState()
            let tokenDomain = getTokenDomain(state)
            let quoteTokens = tokenDomain.quoteTokens()
            let listedTokens = tokenDomain.listedTokenAddresses()
            let userTokens = tokenDomain.tokenAddresses()
            
            if (listedTokens.indexOf(tokenAddress) !== -1) {
                return { error: 'Token is already listed'}
            }

            if (userTokens.indexOf(tokenAddress) !== -1) {
                return { error: 'Token is already added' }
            }

            const { decimals, symbol } = await provider.detectContract(tokenAddress)

            if (!symbol) {
                return { error: 'Could not detect contract' }
            }

            let pairs = []
            let token

            token = await api.getToken(tokenAddress)

            if (token && token.registered) {
                pairs = quoteTokens.map((quote) => {
                    return {
                        baseTokenSymbol: token.symbol,
                        quoteTokenSymbol: quote.symbol,
                        baseTokenAddress: token.address,
                        quoteTokenAddress: quote.address,
                        baseTokenDecimals: token.decimals,
                        quoteTokenDecimals: quote.decimals,
                        makeFee: quote.makeFee,
                        takeFee: quote.takeFee,
                        listed: token.listed,
                        active: token.active
                    }
                })
            } else {
                token = {
                    symbol: symbol,
                    address: tokenAddress,
                    decimals: decimals,
                    quote: false,
                    registered: false,
                    listed: false,
                    active: false,
                }
            }

            await dispatch(actionCreators.addToken(token, pairs))

            //In case everthing works correctly, we return token and pairs as a success message
            return { token, pairs }
        } catch (e) {
            console.log(e)
            return { error: e.message }
        }
    }
}


export function registerToken(tokenAddress: string): ThunkAction {
    return async (dispatch, getState, { provider, api, mixpanel }) => {
        mixpanel.track('wallet-page/register-token')

        try {
            let state = getState()
            let tokenDomain = getTokenDomain(state)
            let listedTokens = tokenDomain.listedTokenAddresses()
            let registeredTokens = tokenDomain.registeredTokenAddresses()

            if (listedTokens.indexOf(tokenAddress) !== -1) {
                return { error: 'Token is already listed' }
            }

            if (registeredTokens.indexOf(tokenAddress) !== -1) {
                return { error: 'Token is already registered' }
            }

            let pairs = await api.createPairs(tokenAddress)
            if (pairs) await dispatch(actionCreators.registerToken(pairs))

            return { pairs }
        } catch (e) {
            console.log(e)

            return { error: e.message }
        }
    }
}
import { getTokenDomain, getAccountBalancesDomain, getTransferTokensFormDomain, getAccountDomain } from '../domains'

export default function walletInfoSelector(state: State) {
    let tokenDomain = getTokenDomain(state)
    let transferTokensDomain = getTransferTokensFormDomain(state)
    let accountDomain = getAccountDomain(state)
    let accountBalancesDomain = getAccountBalancesDomain(state)

    return {
        userTokens: tokenDomain.tokens(),
        etherBalance: accountBalancesDomain.formattedEtherBalance(),
        listedTokens: tokenDomain.tokens(),
        gas: transferTokensDomain.getGas(),
        gasPrice: transferTokensDomain.getGasPrice(),
        accountAddress: accountDomain.address()
    }
}

export function detectContract(tokenAddress: string): ThunkAction {
    return async (dispatch, getState, { provider }) => {
        const { decimals, symbol } = await provider.detectContract(tokenAddress)
        
        return { decimals, symbol }
    }
}


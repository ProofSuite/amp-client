import { 
    getAccountBalancesDomain, 
    getAccountDomain, 
    getTokenPairsDomain,
    getTokenDomain
} from '../domains'

export default function marketsTableSelector(state: State) {
    let accountDomain = getAccountDomain(state)
    let pairsDomain = getTokenPairsDomain(state)

    let pairs = pairsDomain.getTokenPairsWithData()


    return {
        pairs,
        authenticated: accountDomain.authenticated(),
    }
}
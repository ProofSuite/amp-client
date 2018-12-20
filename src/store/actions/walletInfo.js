// @flow

import type {
    AddTokenAction,
    RegisterTokenAction
} from '../../types/walletInfo'

import type { 
    Token,
    TokenPairs    
} from '../../types/tokens'

const actionTypes = {
    addToken: 'walletInfo/ADD_TOKEN',
    registerToken: 'walletInfo/REGISTER_TOKEN'
}

export function addToken(token: Token, pairs: TokenPairs): AddTokenAction {
    return {
        type: actionTypes.addToken,
        payload: { token, pairs },
    }
}

export function registerToken(pairs: TokenPairs): RegisterTokenAction {
    return {
        type: actionTypes.registerToken,
        payload: { pairs }
    }
}

export default actionTypes
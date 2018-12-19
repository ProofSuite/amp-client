// @flow

import type { Token, TokenPairs } from './tokens'

export type AddTokenAction = {
    type: 'walletInfo/ADD_TOKEN',
    payload: { token: Token, pairs: TokenPairs }
}

export type RegisterTokenAction = {
    type: 'walletInfo/REGISTER_TOKEN',
    payload: { pairs: TokenPairs }
}





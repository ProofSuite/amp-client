// @flow
import type { UpdateAppDataAction, UpdateReferenceCurrencyAction } from '../../types/layout'
import type { Tokens, TokenPairs } from '../../types/tokens'

const actionTypes = {
    updateAppData: 'layout/UPDATE_APP_DATA',
    updateReferenceCurrency: 'layout/UPDATE_REFERENCE_CURRENCY'
}

export function updateAppData(tokens: Array<Tokens>, pairs: Array<TokenPairs>): UpdateAppDataAction {
    return {
        type: actionTypes.updateAppData,
        payload: { tokens, pairs }
    }
}

export function updateReferenceCurrency(referenceCurrency: string): UpdateReferenceCurrencyAction {
    return {
        type: actionTypes.updateReferenceCurrency,
        payload: { referenceCurrency },
    }
}

export default actionTypes
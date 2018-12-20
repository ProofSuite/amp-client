// @flow
import type { UpdateReferenceCurrencyAction } from '../../types/layout'

const actionTypes = {
    updateReferenceCurrency: 'layout/UPDATE_REFERENCE_CURRENCY'
}

export function updateReferenceCurrency(referenceCurrency: string): UpdateReferenceCurrencyAction {
    return {
        type: actionTypes.updateReferenceCurrency,
        payload: { referenceCurrency },
    }
}

export default actionTypes
// @flow
import type { UpdateReferenceCurrencyAction } from '../../types/layout'

const actionTypes = {
    UpdateReferenceCurrency: 'layout/UPDATE_REFERENCE_CURRENCY'
}

export function updateReferenceCurrency(referenceCurrency: string): UpdateReferenceCurrencyAction {
    return {
        type: actionTypes.UpdateReferenceCurrency,
        payload: { referenceCurrency },
    }
}

export default actionTypes
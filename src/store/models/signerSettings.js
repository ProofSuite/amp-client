// @flow
import { getSignerDomain } from '../domains'

import { createSigner } from '../services/signer'
import * as actionCreators from '../actions/signerSettings'

import type { UpdateSignerParams } from '../../types/signer'
import type { State, ThunkAction } from '../../types/'

export default function signerSettingsSelector(state: State) {
  return getSignerDomain(state)
}

export function updateSigner(params: UpdateSignerParams): ThunkAction {
  return async dispatch => {
    try {
      dispatch(actionCreators.requestSigner())
      let { settings, address } = await createSigner(params)

      dispatch(actionCreators.updateSigner(settings, address))
    } catch (e) {
      console.log(e)
      return dispatch(actionCreators.error(e.message))
    }
  }
}

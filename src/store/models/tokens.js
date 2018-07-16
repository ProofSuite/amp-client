// @flow
import tokensModel from '../domains/tokens';
import * as actionCreators from '../actions/tokens';

import type { State } from '../../types/';

export default function getTokenModel(state: State) {
  return tokensModel(state.tokens);
}

export const updateTokens = actionCreators.updateTokens;

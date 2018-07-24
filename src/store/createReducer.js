// @flow
import type { Action, ActionHandler, State } from '../types';

export default function createReducer(actionHandler: *) {
  return (state: *, action: *) => actionHandler(action)(state);
}

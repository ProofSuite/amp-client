// @flow
import type { Action, ActionHandler, State } from './index';

export default function createReducer(actionHandler: ActionHandler) {
  return (state: State, action: Action) => actionHandler(action)(state);
}

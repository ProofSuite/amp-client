// @flow
import type { State, Action, ActionHandler } from './index';

export default function createReducer(actionHandler: ActionHandler) {
  return (state: State, action: Action) => actionHandler(action)(state);
}

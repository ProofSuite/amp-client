export default function createReducer(actionHandler) {
  return (state, action) => actionHandler(action)(state);
}

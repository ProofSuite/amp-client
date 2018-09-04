const actionTypes = {
  togglePvtKeyLock: 'settings/TOGGLE_PVTKEY_LOCK',
};

export function togglePvtKeyLock() {
  return {
    type: actionTypes.togglePvtKeyLock,
  };
}

export default actionTypes;

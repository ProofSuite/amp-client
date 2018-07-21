const actionTypes = {
  saveData: 'coinSearcher/SAVE_DATA',
  toggleStar: 'coinSearcher/TOGGLE_STAR',
};

export function saveData(data: any) {
  return {
    type: actionTypes.saveData,
    payload: { data },
  };
}

export function toggleStar(coinsList) {
  return {
    type: actionTypes.toggleStar,
    payload: { data: coinsList },
  };
}

export default actionTypes;

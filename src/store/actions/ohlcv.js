// @flow
const actionTypes = {
  saveData: 'ohlcv/SAVE_DATA',
};

export function saveData(data: Array<Object>) {
  return {
    type: actionTypes.saveData,
    payload: { data },
  };
}

export default actionTypes;

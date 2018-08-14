// @flow
const actionTypes = {
  saveData: 'ohlcv/SAVE_DATA',
  saveDuration: 'ohlcv/SAVE_DURATION',
  saveTimeSpan: 'ohlcv/SAVE_TIME_SPAN',
};

export function saveData(data: Array<Object>) {
  return {
    type: actionTypes.saveData,
    payload: { data },
  };
}

export function saveDuration(data: Object) {
  return {
    type: actionTypes.saveDuration,
    payload: { data },
  };
}

export function saveTimeSpan(data: Object) {
  return {
    type: actionTypes.saveTimeSpan,
    payload: { data },
  };
}

export default actionTypes;

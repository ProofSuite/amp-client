//@flow
import type {} from '../../types/homePage';

const actionTypes = {
  saveData: 'ohlcv/SAVE_DATA',
};

export function saveData(data) {
  return {
    type: actionTypes.saveData,
    payload: { data },
  };
}

export default actionTypes;

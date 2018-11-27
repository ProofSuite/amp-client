const actionTypes = {
  saveData: 'orderBook/SAVE_DATA',
  select: 'orderBook/SELECT',
};

export function saveData(data: any) {
  return {
    type: actionTypes.saveData,
    payload: { data },
  };
}

export function select(order) {
  return {
    type: actionTypes.select,
    payload: { order },
  };
}

export default actionTypes;

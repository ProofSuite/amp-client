const actionTypes = {
  saveData: 'orderBook/SAVE_DATA',
};

export function saveData(data: any) {
  console.log(data);
  return {
    type: actionTypes.saveData,
    payload: { data },
  };
}

export default actionTypes;

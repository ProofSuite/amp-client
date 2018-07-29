const actionTypes = {
  updateFavorite: 'tokenSearcher/UPDATE_FAVORITE',
};

export function updateFavorite(code: string, favorite: boolean) {
  return {
    type: actionTypes.updateFavorite,
    payload: { code, favorite },
  };
}

export default actionTypes;

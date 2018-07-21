//@flow
export type CoinSearchTypes = {
  state: Object,
  small: boolean,
  loading: boolean,
  filteredCoins: Array<Object>,
  decimals: number,
  toggleStar: string => void,
  onChangeFilterName: string => void,
};

export type HeaderTypes = {
  onChangeFilterName: string => void,
  filterName: string,
  sortOrder: string,
};

export type CoinSearcherState = {
  coinsList: Array<Object>,
  loading: boolean,
  small: boolean,
  decimals: number,
};

export type CoinRowTypes = {
  props: {
    index: number,
    coin: Object,
    decimals: number,
    toggleStar: string => void,
  },
};

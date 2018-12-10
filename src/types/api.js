

export type APIPairDatum = {
  pairName: string,
  close: string,
  open: string,
  high: string,
  low: string,
  volume: string,
  orderVolume: string,
  orderCount: string
};

export type APIPairData = Array<APIPairDatum>
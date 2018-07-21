//@flow
export type Order = {
  time: number,
  type: string,
  amount: number,
  price: number,
};

export type DepthChartState = {
  data: Array<Object>,
  loading: boolean,
  title: string,
};

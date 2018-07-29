//@flow
export type Order = {
  time: number,
  type: string,
  amount: number,
  price: number,
};

export type OrderHistoryProps = {
  orderHistory: Array<Order>,
  userOrderHistory: Array<Order>,
};

export type Props = {
  orderHistory: Array<Order>,
  userOrderHistory: Array<Order>,
};

export type OrderHistoryListContainerProps = {
  selectedTabId: string,
  onChange: string => void,
  authenticated: boolean,
  orderHistory: Array<Object>,
  userOrderHistory: Array<Object>,
};

export type OrderHistoryTableProps = {
  orderHistory: Array<Order>,
};

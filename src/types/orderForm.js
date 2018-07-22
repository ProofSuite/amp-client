//@flow

export type OrderFormState = {
  formName: string,
  askPrice: number,
  bidPrice: number,
  totalQuoteBalance: number,
  totalBaseBalance: number,
  loggedIn: boolean,
  baseToken: string,
  quoteToken: string,
  decimals: number,
};

export type OrderFormRendererState = {
  portion: number,
  priceType: string,
  selectedTabId: string,
  price: number,
  stopPrice: number,
  limitPrice: number,
  amount: number,
  total: number,
};

export type FormTypes = {
  state: Object,
  quoteToken: string,
  baseToken: string,
  onInputChange: Object => void,
  loggedIn: boolean,
  formName: string,
};

export type InputFieldsTypes = {
  props: Object,
  quoteToken: string,
  baseToken: string,
  onInputChange: Object => void,
};

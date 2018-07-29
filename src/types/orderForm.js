//@flow

export type OrderFormProps = {
  formName: string,
  askPrice: number,
  bidPrice: number,
  totalQuoteBalance: number,
  totalBaseBalance: number,
  baseToken: string,
  quoteToken: string,
};
export type FormProps = {
  state: Object,
  quoteToken: string,
  baseToken: string,
  onInputChange: Object => void,
  loggedIn: boolean,
  formName: string,
};

export type InputFieldsProps = {
  props: Object,
  quoteToken: string,
  baseToken: string,
  onInputChange: Object => void,
};

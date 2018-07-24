import model from './orderForm';
import * as eventCreators from './orderForm';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const initialState = {
    askPrice: 0,
    bidPrice: 0,
    totalQuoteBalance: 0,
    totalBaseBalance: 0,
    formName: '',
    quoteToken: '',
    baseToken: '',
  };

  const orderForm = getModel([eventCreators.initialized()]);

  expect(orderForm.getAskPrice()).toEqual(0);
  expect(orderForm.getBidPrice()).toEqual(0);
  expect(orderForm.getTotalQuoteBalance()).toEqual(0);
  expect(orderForm.getTotalBaseBalance()).toEqual(0);
  expect(orderForm.getFormName()).toEqual('');
  expect(orderForm.getBaseToken()).toEqual('');
  expect(orderForm.getQuoteToken()).toEqual('');
});

it('handles dataSaved event properly', () => {
  const orderFormData = {
    askPrice: 0.25,
    bidPrice: 0.1,
    totalQuoteBalance: 100,
    totalBaseBalance: 1000,
    formName: 'Sell',
    quoteToken: 'ETH',
    baseToken: 'USD',
    decimals: 7,
    loggedIn: false,
  };

  const orderForm = getModel([eventCreators.initialized(), eventCreators.dataSaved(orderFormData)]);

  expect(orderForm.getAskPrice()).toEqual(0.25);
  expect(orderForm.getBidPrice()).toEqual(0.1);
  expect(orderForm.getTotalQuoteBalance()).toEqual(100);
  expect(orderForm.getTotalBaseBalance()).toEqual(1000);
  expect(orderForm.getFormName()).toEqual('Sell');
  expect(orderForm.getQuoteToken()).toEqual('ETH');
  expect(orderForm.getBaseToken()).toEqual('USD');
});

import model from './orderBook';
import * as eventCreators from './orderBook';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const orderBookData = {
    orderList: [{ price: 0, amount: 0, type: '' }],
    quoteToken: '',
    baseToken: '',
    bookName: '',
  };
  const orderBook = getModel([eventCreators.initialized()]);

  expect(orderBook.getOrderList()).toEqual(orderBookData.orderList);
  expect(orderBook.getBaseToken()).toEqual(orderBookData.baseToken);
  expect(orderBook.getQuoteToken()).toEqual(orderBookData.quoteToken);
  expect(orderBook.getBookName()).toEqual(orderBookData.bookName);
});

it('handles dataSaved event properly', () => {
  const orderBookData = {
    orderList: [{ price: 123, amount: 0.22 }],
    baseToken: 'ETH',
    quoteToken: 'ZRX',
    bookName: 'Sell',
  };

  const orderBook = getModel([eventCreators.initialized(), eventCreators.dataSaved(orderBookData)]);

  expect(orderBook.getOrderList()).toEqual(orderBookData.orderList);
  expect(orderBook.getBaseToken()).toEqual(orderBookData.baseToken);
  expect(orderBook.getQuoteToken()).toEqual(orderBookData.quoteToken);
  expect(orderBook.getBookName()).toEqual(orderBookData.bookName);
});

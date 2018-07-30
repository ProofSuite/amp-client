import model from './orderBook';
import * as eventCreators from './orderBook';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const orderBookData = {
    orderList: [{}],
    baseToken: '',
    quoteToken: '',
  };
  const orderBook = getModel([eventCreators.initialized()]);

  expect(orderBook.getOrderList()).toEqual([{}]);
  expect(orderBook.getBaseToken()).toEqual('');
  expect(orderBook.getQuoteToken()).toEqual('');
  expect(orderBook.getBookName()).toEqual('');
});

it('handles dataSaved event properly', () => {
  const orderBookData = {
    orderList: [{ price: 123, amount: 0.22 }],
    baseToken: 'ETH',
    quoteToken: 'ZRX',
    bookName: 'Sell',
  };

  const orderBook = getModel([eventCreators.initialized(), eventCreators.dataSaved(orderBookData)]);

  expect(orderBook.getOrderList()).toEqual([{ price: 123, amount: 0.22 }]);
  expect(orderBook.getBaseToken()).toEqual('ETH');
  expect(orderBook.getQuoteToken()).toEqual('ZRX');
  expect(orderBook.getBookName()).toEqual('Sell');
});

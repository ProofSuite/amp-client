import model from './orderBook';
import * as eventCreators from './orderBook';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const orderBookData = {
    buyOrderList: [{}],
    sellOrderList: [{}],
    baseToken: '',
    quoteToken: '',
  };
  const orderBook = getModel([eventCreators.initialized()]);

  expect(orderBook.getBuyOrderList()).toEqual([{}]);
  expect(orderBook.getSellOrderList()).toEqual([{}]);
  expect(orderBook.getBaseToken()).toEqual('');
  expect(orderBook.getQuoteToken()).toEqual('');
});

it('handles dataSaved event properly', () => {
  const orderBookData = {
    buyOrderList: [{ price: 123, amount: 0.22 }],
    sellOrderList: [{ price: 12.3, amount: 33 }],
    baseToken: 'ETH',
    quoteToken: 'ZRX',
  };

  const orderBook = getModel([eventCreators.initialized(), eventCreators.dataSaved(orderBookData)]);

  expect(orderBook.getBuyOrderList()).toEqual([{ price: 123, amount: 0.22 }]);
  expect(orderBook.getSellOrderList()).toEqual([{ price: 12.3, amount: 33 }]);
  expect(orderBook.getBaseToken()).toEqual('ETH');
  expect(orderBook.getQuoteToken()).toEqual('ZRX');
});

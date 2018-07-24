import model from './orderHistory';
import * as eventCreators from './orderHistory';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const options = {
    orderHistory: [{}],
    userOrderHistory: [{}],
  };
  const orderHistory = getModel([eventCreators.initialized()]);

  expect(orderHistory.getOrderHistory()).toEqual(options.orderHistory);
  expect(orderHistory.getUserOrderHistory()).toEqual(options.userOrderHistory);
});

it('handles dataSaved event properly', () => {
  const options = {
    orderHistory: [{ order: 1123 }, { order: 312312 }, { order: 331212 }],
    userOrderHistory: [{ order: 3121 }, { order: 32112 }, { order: 33121 }],
  };
  const orderHistory = getModel([eventCreators.initialized(), eventCreators.dataSaved(options)]);

  expect(orderHistory.getOrderHistory()).toEqual(options.orderHistory);
  expect(orderHistory.getUserOrderHistory()).toEqual(options.userOrderHistory);
});

import model from './tradeHistory';
import * as eventCreators from './tradeHistory';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const tradeHistoryData = {
    marketTradeHistory: [{}],
    userTradeHistory: [{}],
  };

  const tradeHistory = getModel([eventCreators.initialized()]);

  expect(tradeHistory.getMarketTradeHistory()).toEqual(tradeHistoryData.marketTradeHistory);
  expect(tradeHistory.getUserTradeHistory()).toEqual(tradeHistoryData.userTradeHistory);
});

it('handles dataSaved event properly', () => {
  const tradeHistoryData = {
    marketTradeHistory: [{ time: 63127631232, types: 'sell', amount: 200, price: 0.12 }],
    userTradeHistory: [{ time: 63127631232, types: 'buy', amount: 200, price: 0.12 }],
  };

  const tradeHistory = getModel([eventCreators.initialized(), eventCreators.dataSaved(tradeHistoryData)]);

  expect(tradeHistory.getMarketTradeHistory()).toEqual(tradeHistoryData.marketTradeHistory);
  expect(tradeHistory.getUserTradeHistory()).toEqual(tradeHistoryData.userTradeHistory);
});

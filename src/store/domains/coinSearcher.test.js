import model from './coinSearcher';
import * as eventCreators from './coinSearcher';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const coinSearcherData = {
    coinsList: { btc: [{}] },
  };

  const coinSearcher = getModel([eventCreators.initialized()]);
  expect(coinSearcher.getCoinsList()).toEqual(coinSearcherData.coinsList);
});

it('handles dataSaved event properly', () => {
  const coinSearcherData = {
    coinsList: { btc: [1, 2, 3, 4, 5] },
  };

  const coinSearcher = getModel([eventCreators.initialized(), eventCreators.dataSaved(coinSearcherData)]);
  expect(coinSearcher.getCoinsList()).toEqual(coinSearcherData.coinsList);
});

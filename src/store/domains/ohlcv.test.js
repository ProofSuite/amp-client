import model, * as eventCreators from './ohlcv';

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const options = {
    ohlcvData: [],
  };
  const ohlcv = getModel([eventCreators.initialized()]);

  expect(ohlcv.getOHLCVData()).toEqual(options.ohlcvData);
});

it('handles savedOHLCVData event properly', () => {
  const options = {
    ohlcvData: [1, 2, 3, 4, 5],
  };
  const ohlcv = getModel([eventCreators.initialized(), eventCreators.savedOHLCVData(options.ohlcvData)]);

  expect(ohlcv.getOHLCVData()).toEqual(options.ohlcvData);
});

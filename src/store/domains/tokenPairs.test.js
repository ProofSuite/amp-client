import model, * as eventCreators from './tokenPairs';
import { quoteTokens } from '../../config/quotes';

const symbols = ['ETH', 'EOS', 'WETH', 'ZRX'];

const tokensBySymbol = {
  ETH: { symbol: 'ETH', address: '0x0' },
  EOS: { symbol: 'EOS', address: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95' },
  WETH: { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
  ZRX: { symbol: 'ZRX', address: '0xc73eec564e96e6653943d6d0e32121d455917653' },
};

function getModel(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return model(state);
}

it('handles initialized event properly', () => {
  const tokenPairsModel = getModel([eventCreators.initialized()]);
  const expectedPairs = ['EOS_WETH', 'EOS_DAI', 'WETH_DAI', 'ZRX_WETH', 'ZRX_DAI'];

  const expectedByPairsBySymbol = {
    EOS_DAI: {
      pair: 'EOS_DAI',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    EOS_WETH: {
      pair: 'EOS_WETH',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    ZRX_DAI: {
      pair: 'ZRX_DAI',
      baseTokenSymbol: 'ZRX',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0xc73eec564e96e6653943d6d0e32121d455917653',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    ZRX_WETH: {
      pair: 'ZRX_WETH',
      baseTokenSymbol: 'ZRX',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0xc73eec564e96e6653943d6d0e32121d455917653',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    WETH_DAI: {
      pair: 'WETH_DAI',
      baseTokenSymbol: 'WETH',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
  };
  expect(tokenPairsModel.getPairs()).toEqual(expectedPairs);
  expect(tokenPairsModel.getPairsBySymbol()).toEqual(expectedByPairsBySymbol);
});

it('handles tokenPairUpdated event properly', () => {
  const token = {
    symbol: 'REQ',
    address: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
  };

  const tokensPairsModel = getModel([eventCreators.initialized(), eventCreators.tokenPairUpdated(token)]);

  const expectedPairs = ['EOS_WETH', 'EOS_DAI', 'WETH_DAI', 'ZRX_WETH', 'ZRX_DAI', 'REQ_WETH', 'REQ_DAI'];

  const expectedPairsBySymbol = {
    EOS_DAI: {
      pair: 'EOS_DAI',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    EOS_WETH: {
      pair: 'EOS_WETH',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    ZRX_DAI: {
      pair: 'ZRX_DAI',
      baseTokenSymbol: 'ZRX',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0xc73eec564e96e6653943d6d0e32121d455917653',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    ZRX_WETH: {
      pair: 'ZRX_WETH',
      baseTokenSymbol: 'ZRX',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0xc73eec564e96e6653943d6d0e32121d455917653',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    WETH_DAI: {
      pair: 'WETH_DAI',
      baseTokenSymbol: 'WETH',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    REQ_WETH: {
      pair: 'REQ_WETH',
      baseTokenSymbol: 'REQ',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    REQ_DAI: {
      pair: 'REQ_DAI',
      baseTokenSymbol: 'REQ',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
  };

  expect(tokensPairsModel.getPairs()).toEqual(expectedPairs);
  expect(tokensPairsModel.getPairsBySymbol()).toEqual(expectedPairsBySymbol);
});

it('handles tokenPairUpdated event properly if the event is already if the token is a quote token', () => {
  const token = {
    symbol: 'DAI',
    address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
  };

  const tokensPairsModel = getModel([eventCreators.initialized(), eventCreators.tokenPairUpdated(token)]);

  const expectedPairs = ['EOS_WETH', 'EOS_DAI', 'WETH_DAI', 'ZRX_WETH', 'ZRX_DAI'];

  const expectedPairsBySymbol = {
    EOS_DAI: {
      pair: 'EOS_DAI',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    EOS_WETH: {
      pair: 'EOS_WETH',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    ZRX_DAI: {
      pair: 'ZRX_DAI',
      baseTokenSymbol: 'ZRX',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0xc73eec564e96e6653943d6d0e32121d455917653',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    ZRX_WETH: {
      pair: 'ZRX_WETH',
      baseTokenSymbol: 'ZRX',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0xc73eec564e96e6653943d6d0e32121d455917653',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    WETH_DAI: {
      pair: 'WETH_DAI',
      baseTokenSymbol: 'WETH',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
  };

  expect(tokensPairsModel.getPairs()).toEqual(expectedPairs);
  expect(tokensPairsModel.getPairsBySymbol()).toEqual(expectedPairsBySymbol);
});

it('handles tokenPairUpdated event properly', () => {
  const token1 = {
    symbol: 'REQ',
    address: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
  };
  const token2 = {
    symbol: 'ZRX',
    address: '0xc73eec564e96e6653943d6d0e32121d455917653',
  };

  const tokensPairsModel = getModel([
    eventCreators.initialized(),
    eventCreators.tokenPairUpdated(token1),
    eventCreators.tokenPairRemoved(token2),
  ]);

  const expectedPairs = ['EOS_WETH', 'EOS_DAI', 'WETH_DAI', 'REQ_WETH', 'REQ_DAI'];

  const expectedPairsBySymbol = {
    EOS_DAI: {
      pair: 'EOS_DAI',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    EOS_WETH: {
      pair: 'EOS_WETH',
      baseTokenSymbol: 'EOS',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    WETH_DAI: {
      pair: 'WETH_DAI',
      baseTokenSymbol: 'WETH',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    REQ_WETH: {
      pair: 'REQ_WETH',
      baseTokenSymbol: 'REQ',
      quoteTokenSymbol: 'WETH',
      baseTokenAddress: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
      quoteTokenAddress: '0x2eb24432177e82907de24b7c5a6e0a5c03226135',
    },
    REQ_DAI: {
      pair: 'REQ_DAI',
      baseTokenSymbol: 'REQ',
      quoteTokenSymbol: 'DAI',
      baseTokenAddress: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
      quoteTokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
  };

  expect(tokensPairsModel.getPairs()).toEqual(expectedPairs);
  expect(tokensPairsModel.getPairsBySymbol()).toEqual(expectedPairsBySymbol);
});

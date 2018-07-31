import * as eventCreators from './tokenPairs';
import { generateTokenPairs } from '../../utils/tokens';
import getTokenPairsDomain from './tokenPairs';
import { quoteTokens } from '../../config/quotes';

//createInitialState is not an eventCreator. We simply import it in order to create a new
//create an initial state. The default initial state used in the application has to many
//tokens to be used for tests. Therefore we recreate an initial state with less tokens
//to test the token pair model
const symbols = ['ETH', 'EOS', 'WETH', 'ZRX'];

const tokensBySymbol = {
  ETH: { symbol: 'ETH', address: '0x0' },
  EOS: { symbol: 'EOS', address: '0x8d0a722b76c0dcb91bf62334afd11f925c0adb95' },
  WETH: { symbol: 'WETH', address: '0x2eb24432177e82907de24b7c5a6e0a5c03226135' },
  ZRX: { symbol: 'ZRX', address: '0xc73eec564e96e6653943d6d0e32121d455917653' },
};

const tokens = Object.values(tokensBySymbol);

const initialTokenPairState = {
  byPair: generateTokenPairs(quoteTokens, tokens),
  data: {},
  favorites: [],
};

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return getTokenPairsDomain(state);
}

describe('Token Pair Domain', () => {
  it('handles initialized event properly', () => {
    const tokenPairsDomain = getDomain([eventCreators.initialized(initialTokenPairState)]);
    const expectedPairs = ['EOS_WETH', 'EOS_DAI', 'WETH_DAI', 'ZRX_WETH', 'ZRX_DAI'];

    const expectedByPairsByCode = {
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
    expect(tokenPairsDomain.getPairs()).toEqual(expectedPairs);
    expect(tokenPairsDomain.getPairsByCode()).toEqual(expectedByPairsByCode);
  });

  it('handles tokenPairUpdated event properly', () => {
    const token = {
      symbol: 'REQ',
      address: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
    };

    const tokenPairsDomain = getDomain([
      eventCreators.initialized(initialTokenPairState),
      eventCreators.tokenPairUpdated(token),
    ]);

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

    expect(tokenPairsDomain.getPairs()).toEqual(expectedPairs);
    expect(tokenPairsDomain.getPairsByCode()).toEqual(expectedPairsBySymbol);
  });

  it('handles tokenPairUpdated event properly if the event is already if the token is a quote token', () => {
    const token = {
      symbol: 'DAI',
      address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    };

    const tokenPairsDomain = getDomain([
      eventCreators.initialized(initialTokenPairState),
      eventCreators.tokenPairUpdated(token),
    ]);

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

    expect(tokenPairsDomain.getPairs()).toEqual(expectedPairs);
    expect(tokenPairsDomain.getPairsByCode()).toEqual(expectedPairsBySymbol);
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

    const tokenPairsDomain = getDomain([
      eventCreators.initialized(initialTokenPairState),
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

    expect(tokenPairsDomain.getPairs()).toEqual(expectedPairs);
    expect(tokenPairsDomain.getPairsByCode()).toEqual(expectedPairsBySymbol);
  });

  it('handles updated event', () => {
    const tokenPairData = {
      BNB_WETH: {
        pair: 'BNB_WETH',
        lastPrice: '7425.2945',
        change: '4.5421',
        high: '8782.7964',
        low: '6499.3696',
        volume: 720404,
      },
      BNB_DAI: {
        pair: 'BNB_DAI',
        lastPrice: '6018.7886',
        change: '1.6589',
        high: '3876.8717',
        low: '4613.5315',
        volume: 68946,
      },
      OMG_WETH: {
        pair: 'OMG_WETH',
        lastPrice: '398.8988',
        change: '3.7561',
        high: '9892.7954',
        low: '6884.7173',
        volume: 155839,
      },
    };

    const expectedTokenPairArray = [
      {
        pair: 'BNB_WETH',
        lastPrice: '7425.2945',
        change: '4.5421',
        high: '8782.7964',
        low: '6499.3696',
        volume: 720404,
      },
      {
        pair: 'BNB_DAI',
        lastPrice: '6018.7886',
        change: '1.6589',
        high: '3876.8717',
        low: '4613.5315',
        volume: 68946,
      },
      {
        pair: 'OMG_WETH',
        lastPrice: '398.8988',
        change: '3.7561',
        high: '9892.7954',
        low: '6884.7173',
        volume: 155839,
      },
    ];

    const domain = getDomain([eventCreators.initialized(), eventCreators.tokenPairDataUpdated(tokenPairData)]);

    expect(domain.getTokenPairsData()).toEqual(tokenPairData);
  });

  it('handles updated event twice', () => {
    const tokenPairData = {
      BNB_WETH: {
        pair: 'BNB_WETH',
        lastPrice: '7425.2945',
        change: '4.5421',
        high: '8782.7964',
        low: '6499.3696',
        volume: 720404,
      },
      BNB_DAI: {
        pair: 'BNB_DAI',
        lastPrice: '6018.7886',
        change: '1.6589',
        high: '3876.8717',
        low: '4613.5315',
        volume: 68946,
      },
      OMG_WETH: {
        pair: 'OMG_WETH',
        lastPrice: '398.8988',
        change: '3.7561',
        high: '9892.7954',
        low: '6884.7173',
        volume: 155839,
      },
    };

    const newTokenPairData = {
      OMG_DAI: {
        pair: 'OMG_DAI',
        lastPrice: '66.2789',
        change: '3.5460',
        high: '9211.5292',
        low: '4241.7509',
        volume: 912048,
      },
      ZRX_WETH: {
        pair: 'ZRX_WETH',
        lastPrice: '8176.7874',
        change: '1.7811',
        high: '6165.0712',
        low: '2242.4298',
        volume: 752620,
      },
      ZRX_DAI: {
        pair: 'ZRX_DAI',
        lastPrice: '7378.8467',
        change: '1.0410',
        high: '7755.4530',
        low: '2317.9722',
        volume: 786519,
      },
    };

    const expectedTokenPairData = {
      BNB_WETH: {
        pair: 'BNB_WETH',
        lastPrice: '7425.2945',
        change: '4.5421',
        high: '8782.7964',
        low: '6499.3696',
        volume: 720404,
      },
      BNB_DAI: {
        pair: 'BNB_DAI',
        lastPrice: '6018.7886',
        change: '1.6589',
        high: '3876.8717',
        low: '4613.5315',
        volume: 68946,
      },
      OMG_WETH: {
        pair: 'OMG_WETH',
        lastPrice: '398.8988',
        change: '3.7561',
        high: '9892.7954',
        low: '6884.7173',
        volume: 155839,
      },
      OMG_DAI: {
        pair: 'OMG_DAI',
        lastPrice: '66.2789',
        change: '3.5460',
        high: '9211.5292',
        low: '4241.7509',
        volume: 912048,
      },
      ZRX_WETH: {
        pair: 'ZRX_WETH',
        lastPrice: '8176.7874',
        change: '1.7811',
        high: '6165.0712',
        low: '2242.4298',
        volume: 752620,
      },
      ZRX_DAI: {
        pair: 'ZRX_DAI',
        lastPrice: '7378.8467',
        change: '1.0410',
        high: '7755.4530',
        low: '2317.9722',
        volume: 786519,
      },
    };

    const domain = getDomain([
      eventCreators.initialized(),
      eventCreators.tokenPairDataUpdated(tokenPairData),
      eventCreators.tokenPairDataUpdated(newTokenPairData),
    ]);

    expect(domain.getTokenPairsData()).toEqual(expectedTokenPairData);
  });

  it('handles updated event with overlapping data', () => {
    const tokenPairData = {
      BNB_WETH: {
        pair: 'BNB_WETH',
        lastPrice: '7425.2945',
        change: '4.5421',
        high: '8782.7964',
        low: '6499.3696',
        volume: 720404,
      },
      BNB_DAI: {
        pair: 'BNB_DAI',
        lastPrice: '6018.7886',
        change: '1.6589',
        high: '3876.8717',
        low: '4613.5315',
        volume: 68946,
      },
      OMG_WETH: {
        pair: 'OMG_WETH',
        lastPrice: '398.8988',
        change: '3.7561',
        high: '9892.7954',
        low: '6884.7173',
        volume: 155839,
      },
    };

    const newTokenPairData = {
      OMG_DAI: {
        pair: 'OMG_DAI',
        lastPrice: '66.2789',
        change: '3.5460',
        high: '9211.5292',
        low: '4241.7509',
        volume: 912048,
      },
      ZRX_WETH: {
        pair: 'ZRX_WETH',
        lastPrice: '8176.7874',
        change: '1.7811',
        high: '6165.0712',
        low: '2242.4298',
        volume: 752620,
      },
      OMG_WETH: {
        pair: 'OMG_WETH',
        lastPrice: '398.888',
        change: '3.7561',
        high: '9892.7954',
        low: '6884.7173',
        volume: 155880,
      },
    };

    const expectedTokenPairData = {
      BNB_WETH: {
        pair: 'BNB_WETH',
        lastPrice: '7425.2945',
        change: '4.5421',
        high: '8782.7964',
        low: '6499.3696',
        volume: 720404,
      },
      BNB_DAI: {
        pair: 'BNB_DAI',
        lastPrice: '6018.7886',
        change: '1.6589',
        high: '3876.8717',
        low: '4613.5315',
        volume: 68946,
      },
      OMG_DAI: {
        pair: 'OMG_DAI',
        lastPrice: '66.2789',
        change: '3.5460',
        high: '9211.5292',
        low: '4241.7509',
        volume: 912048,
      },
      ZRX_WETH: {
        pair: 'ZRX_WETH',
        lastPrice: '8176.7874',
        change: '1.7811',
        high: '6165.0712',
        low: '2242.4298',
        volume: 752620,
      },
      OMG_WETH: {
        pair: 'OMG_WETH',
        lastPrice: '398.888',
        change: '3.7561',
        high: '9892.7954',
        low: '6884.7173',
        volume: 155880,
      },
    };

    const domain = getDomain([
      eventCreators.initialized(),
      eventCreators.tokenPairDataUpdated(tokenPairData),
      eventCreators.tokenPairDataUpdated(newTokenPairData),
    ]);

    expect(domain.getTokenPairsData()).toEqual(expectedTokenPairData);
  });

  it('handles tokenPairFavorited event', () => {
    const domain = getDomain([
      eventCreators.initialized(initialTokenPairState),
      eventCreators.tokenPairFavorited('EOS_WETH', true),
    ]);

    expect(domain.getFavoritePairs()).toEqual(['EOS_WETH']);
  });

  it('handles tokenPairFavorited events', () => {
    const domain = getDomain([
      eventCreators.initialized(initialTokenPairState),
      eventCreators.tokenPairFavorited('EOS_WETH', true),
      eventCreators.tokenPairFavorited('EOS_DAI', true),
      eventCreators.tokenPairFavorited('EOS_ZRX', true),
      eventCreators.tokenPairFavorited('EOS_WETH', false),
    ]);

    expect(domain.getFavoritePairs()).toEqual(['EOS_DAI', 'EOS_ZRX']);
  });
});

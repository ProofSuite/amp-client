import { parseJSONData, parseJSONToFixed, parseOrders, parseTrades } from './parsers';
import tokenPairData from '../jsons/tokenPairData';
import orders from '../jsons/orders';
import trades from '../jsons/trades';

describe('Parsers', () => {
  it('parseJSONData parses JSON data', () => {
    let data = {
      key1: '1',
      key2: 'some string',
      key3: '1.234',
      key4: {
        key5: {
          key6: ['1.234', 1, 'some other string'],
          key7: 10.2342,
        },
      },
      key8: NaN,
      key9: undefined,
    };

    let expected = {
      key1: 1,
      key2: 'some string',
      key3: 1.234,
      key4: {
        key5: {
          key6: [1.234, 1, 'some other string'],
          key7: 10.2342,
        },
      },
      key8: NaN,
      key9: undefined,
    };

    let parsed = parseJSONData(data);
    expect(parsed).toEqual(expected);
  });

  it('parseJSONToFixed parses JSON data', () => {
    let data = {
      key1: '1',
      key2: 'some string',
      key3: '1.234',
      key4: {
        key5: {
          key6: ['1.234', 1, 'some other string'],
          key7: 10.2342,
        },
      },
      key8: NaN,
      key9: undefined,
    };

    let expected = {
      key1: 1,
      key2: 'some string',
      key3: 1.23,
      key4: {
        key5: {
          key6: [1.23, 1, 'some other string'],
          key7: 10.23,
        },
      },
      key8: NaN,
      key9: undefined,
    };

    let parsed = parseJSONToFixed(data, 2);
    expect(parsed).toEqual(expected);
  });

  it('parseOrders return correct data', () => {
    let data = [
      {
        userAddress: '0x13ae20cc1ef6758f32ba15c190a1703a80a80c4b',
        buyTokenAddress: '0x4facc27542a29a851efe5b6c88c244c2a3f93db9',
        sellTokenAddress: '0x792469d06c3fac673cffeb960ac7b7fa02ed4678',
        hash: '0xec8670a09f530571146fe610a36b426a54aa1cb26ade3a3baea820621ea30cc1',
        type: 'LIMIT',
        fee: '14949.0622',
        status: 'EXECUTED',
        side: 'SELL',
        pairName: 'ZRX_WETH',
        amount: '3326.0597',
        price: '90742.2304',
        createdAt: 1509632726412,
        filledAmount: '3326.0597',
        amountBuy: '3326.0597',
        amountSell: 301814075.62155485,
      },
      {
        userAddress: '0xf73b2e3a92c2920db9905d0e1e319a184f7b1c96',
        buyTokenAddress: '0x779efd6e63ab339c32d54e578462292000be9811',
        sellTokenAddress: '0xe8c77a1724cca81dc61bf485e4b2f71f2e7a521f',
        hash: '0x171749bfab482358b8b6444c82cda28bb358511ec65e58d18f8d56ac4e0fa25d',
        type: 'LIMIT',
        fee: '14285.0398',
        status: 'EXECUTED',
        side: 'BUY',
        pairName: 'BNB_WETH',
        amount: '7086.9957',
        price: '54663.3351',
        createdAt: 1515226280440,
        filledAmount: '7086.9957',
        amountBuy: '7086.9957',
        amountSell: 387398820.80135906,
      },
      {
        userAddress: '0x8bd3e4556d9da4f033c10cc46b98efe31690c567',
        buyTokenAddress: '0x2941e56827277dd18b3c6dd55e78d5775b36217d',
        sellTokenAddress: '0xfe401b9a40faba5e189ef2d7358a5ba90e10aaee',
        hash: '0x701116f32bd581c2ab08d411f0b4fb5e927cb8b949befe0deaada3dfd4f4579b',
        type: 'LIMIT',
        fee: '10922.6406',
        status: 'PARTIALLY_FILLED',
        side: 'SELL',
        pairName: 'OMG_WETH',
        amount: '213.6124',
        price: '8779.7196',
        createdAt: 1506551515816,
        filledAmount: 158.22270468000002,
        amountBuy: '213.6124',
        amountSell: 1875456.97508304,
      },
    ];

    let expected = [
      {
        hash: '0xec8670a09f530571146fe610a36b426a54aa1cb26ade3a3baea820621ea30cc1',
        type: 'LIMIT',
        status: 'EXECUTED',
        side: 'SELL',
        pair: 'ZRX_WETH',
        amount: 3326.06,
        price: 90742.23,
        time: 1509632726412,
        filled: 3326.06,
      },
      {
        hash: '0x171749bfab482358b8b6444c82cda28bb358511ec65e58d18f8d56ac4e0fa25d',
        type: 'LIMIT',
        status: 'EXECUTED',
        side: 'BUY',
        pair: 'BNB_WETH',
        amount: 7087,
        price: 54663.34,
        time: 1515226280440,
        filled: 7087,
      },
      {
        hash: '0x701116f32bd581c2ab08d411f0b4fb5e927cb8b949befe0deaada3dfd4f4579b',
        type: 'LIMIT',
        status: 'PARTIALLY_FILLED',
        side: 'SELL',
        pair: 'OMG_WETH',
        amount: 213.61,
        price: 8779.72,
        time: 1506551515816,
        filled: 213.61,
      },
    ];

    let parsed = parseOrders(data, 2);
    expect(parsed).toEqual(expected);
  });

  it('parse return correct data', () => {
    let data = [
      {
        amount: '3606.6333',
        price: '53983.5159',
        type: 'MARKET',
        side: 'SELL',
        hash: '0x239c611ce10346eba1fe08dbc5542499a1e6bf5675070fa7ef809dc85d75f7c9',
        orderHash: '0x0d1db9c7f2ab118c7276817aa779980c37d761a9184193eef54342b7e21901a7',
        taker: '0x8fc47d2c6c3ba1ad9b337707a2e3a6a1a81c9c42',
        maker: '0x4c45ac66b0d30a2eced64f403b0931f4b2cfff04',
        pairName: 'OMG_WETH',
        createdAt: 1504567900560,
      },
      {
        amount: '5765.6435',
        price: '98517.2261',
        type: 'MARKET',
        side: 'SELL',
        hash: '0x8c3122d67b7836f641a39e694b3b61f817ced9a9131d4287db30e1f05494f46a',
        orderHash: '0xe4622579e18fbf8c91bd02548383721e1bf686ef832474f45c2ef68596f641ae',
        taker: '0x15bbb591ee81d2a6030e1a7d9378548ff93a9d16',
        maker: '0xef4d26128669e0c30746b50ce1d23647a3464063',
        pairName: 'BNB_WETH',
        createdAt: 1506911142876,
      },
      {
        amount: '2885.4954',
        price: '23798.0868',
        type: 'LIMIT',
        side: 'SELL',
        hash: '0x5960fda2d7d3451272bca059a09e6d92b796bb9f8b5cc9d2a7d39f93e0c17346',
        orderHash: '0x3cd6f07d03507eeef1db314bdd0f91447da613f0611e4429874c09bb731b8f85',
        taker: '0x1639cb6b1d885c94fd6b0766b098195dda300044',
        maker: '0x56d386341ad7f6d65df44595617921cb72ad3082',
        pairName: 'ZRX_DAI',
        createdAt: 1511091286778,
      },
    ];

    let expected = [
      {
        amount: 3606.63,
        price: 53983.52,
        type: 'MARKET',
        side: 'SELL',
        hash: '0x239c611ce10346eba1fe08dbc5542499a1e6bf5675070fa7ef809dc85d75f7c9',
        orderHash: '0x0d1db9c7f2ab118c7276817aa779980c37d761a9184193eef54342b7e21901a7',
        taker: '0x8fc47d2c6c3ba1ad9b337707a2e3a6a1a81c9c42',
        maker: '0x4c45ac66b0d30a2eced64f403b0931f4b2cfff04',
        pair: 'OMG_WETH',
        time: 1504567900560,
      },
      {
        amount: 5765.64,
        price: 98517.23,
        type: 'MARKET',
        side: 'SELL',
        hash: '0x8c3122d67b7836f641a39e694b3b61f817ced9a9131d4287db30e1f05494f46a',
        orderHash: '0xe4622579e18fbf8c91bd02548383721e1bf686ef832474f45c2ef68596f641ae',
        taker: '0x15bbb591ee81d2a6030e1a7d9378548ff93a9d16',
        maker: '0xef4d26128669e0c30746b50ce1d23647a3464063',
        pair: 'BNB_WETH',
        time: 1506911142876,
      },
      {
        amount: 2885.5,
        price: 23798.09,
        type: 'LIMIT',
        side: 'SELL',
        hash: '0x5960fda2d7d3451272bca059a09e6d92b796bb9f8b5cc9d2a7d39f93e0c17346',
        orderHash: '0x3cd6f07d03507eeef1db314bdd0f91447da613f0611e4429874c09bb731b8f85',
        taker: '0x1639cb6b1d885c94fd6b0766b098195dda300044',
        maker: '0x56d386341ad7f6d65df44595617921cb72ad3082',
        pair: 'ZRX_DAI',
        time: 1511091286778,
      },
    ];

    let parsed = parseTrades(data, 2);
    expect(parsed).toEqual(expected);
  });
});

import { parseJSONData, parseJSONToFixed, parseOrders, parseTrades, parseOrderBookData } from './parsers'
import tokenPairData from '../jsons/tokenPairData'
import orders from '../jsons/orders'
import trades from '../jsons/trades'

describe('Parsers', () => {
  it('parseJSONData parses JSON data', () => {
    let data = {
      key1: '1',
      key2: 'some string',
      key3: '1.234',
      key4: {
        key5: {
          key6: ['1.234', 1, 'some other string'],
          key7: 10.2342
        }
      },
      key8: NaN,
      key9: undefined
    }

    let expected = {
      key1: 1,
      key2: 'some string',
      key3: 1.234,
      key4: {
        key5: {
          key6: [1.234, 1, 'some other string'],
          key7: 10.2342
        }
      },
      key8: NaN,
      key9: undefined
    }

    let parsed = parseJSONData(data)
    expect(parsed).toEqual(expected)
  })

  it('parseJSONToFixed parses JSON data', () => {
    let data = {
      key1: '1',
      key2: 'some string',
      key3: '1.234',
      key4: {
        key5: {
          key6: ['1.234', 1, 'some other string'],
          key7: 10.2342
        }
      },
      key8: NaN,
      key9: undefined
    }

    let expected = {
      key1: 1,
      key2: 'some string',
      key3: 1.23,
      key4: {
        key5: {
          key6: [1.23, 1, 'some other string'],
          key7: 10.23
        }
      },
      key8: NaN,
      key9: undefined
    }

    let parsed = parseJSONToFixed(data, 2)
    expect(parsed).toEqual(expected)
  })

//   it('parseOrders return correct data', () => {
//     let data = [
//       {
//         userAddress: '0x13ae20cc1ef6758f32ba15c190a1703a80a80c4b',
//         hash: '0xec8670a09f530571146fe610a36b426a54aa1cb26ade3a3baea820621ea30cc1',
//         type: 'LIMIT',
//         makeFee: '0',
//         takeFee: '0',
//         status: 'EXECUTED',
//         side: 'SELL',
//         pairName: 'ZRX/WETH',
//         createdAt: 1509632726412,
//         amount: '1000000000000000000',
//         pricepoint: '12000000',
//         filledAmount: '500000000000000000',
//         buyAmount: '1000000000000000000',
//         sellAmount: '1000000000000000000'
//       },
//       {
//         userAddress: '0xf73b2e3a92c2920db9905d0e1e319a184f7b1c96',
//         hash: '0x171749bfab482358b8b6444c82cda28bb358511ec65e58d18f8d56ac4e0fa25d',
//         type: 'LIMIT',
//         makeFee: '0',
//         takeFee: '0',
//         status: 'EXECUTED',
//         side: 'BUY',
//         pairName: 'BNB/WETH',
//         createdAt: 1515226280440,
//         amount: '1000000000000000000',
//         pricepoint: '50000000',
//         filledAmount: '500000000000000000',
//         buyAmount: '1000000000000000000',
//         sellAmount: '1000000000000000000'
//       },
//       {
//         userAddress: '0x8bd3e4556d9da4f033c10cc46b98efe31690c567',
//         hash: '0x701116f32bd581c2ab08d411f0b4fb5e927cb8b949befe0deaada3dfd4f4579b',
//         type: 'LIMIT',
//         makeFee: '0',
//         takeFee: '0',
//         status: 'PARTIALLY/FILLED',
//         side: 'SELL',
//         pairName: 'OMG_WETH',
//         createdAt: 1506551515816,
//         amount: '1000000000000000000',
//         pricepoint: '4500000',
//         filledAmount: '500000000000000000',
//         buyAmount: '1000000000000000000',
//         sellAmount: '1000000000000000000'
//       }
//     ]

//     let expected = [
//       {
//         time: 1509632726412,
//         amount: 1,
//         buyAmount: 1,
//         sellAmount: 1,
//         filled: 0.5,
//         price: 12,
//         hash: '0xec8670a09f530571146fe610a36b426a54aa1cb26ade3a3baea820621ea30cc1',
//         side: 'SELL',
//         pair: 'ZRX/WETH',
//         type: 'LIMIT',
//         status: 'EXECUTED'
//       },
//       {
//         time: 1515226280440,
//         amount: 1,
//         buyAmount: 1,
//         sellAmount: 1,
//         filled: 0.5,
//         price: 50,
//         hash: '0x171749bfab482358b8b6444c82cda28bb358511ec65e58d18f8d56ac4e0fa25d',
//         side: 'BUY',
//         pair: 'BNB/WETH',
//         type: 'LIMIT',
//         status: 'EXECUTED'
//       },
//       {
//         time: 1506551515816,
//         amount: 1,
//         buyAmount: 1,
//         sellAmount: 1,
//         filled: 0.5,
//         price: 4.5,
//         hash: '0x701116f32bd581c2ab08d411f0b4fb5e927cb8b949befe0deaada3dfd4f4579b',
//         side: 'SELL',
//         pair: 'OMG/WETH',
//         type: 'LIMIT',
//         status: 'PARTIALLY_FILLED'
//       }
//     ]

//     let parsed = parseOrders(data, { 2)
//     expect(parsed).toEqual(expected)
//   })

//   it('parseTrades return correct data', () => {
//     let data = [
//       {
//         amount: '360663330000000000000',
//         pricepoint: '539835159',
//         type: 'MARKET',
//         side: 'SELL',
//         hash: '0x239c611ce10346eba1fe08dbc5542499a1e6bf5675070fa7ef809dc85d75f7c9',
//         orderHash: '0x0d1db9c7f2ab118c7276817aa779980c37d761a9184193eef54342b7e21901a7',
//         taker: '0x8Fc47D2C6c3BA1ad9B337707A2e3A6A1A81c9c42',
//         maker: '0x4c45AC66B0d30a2ECED64f403b0931f4b2Cfff04',
//         pairName: 'OMG/WETH',
//         status: 'SUCCESS',
//         createdAt: 1504567900560
//       },
//       {
//         amount: '576564350000000000000000',
//         pricepoint: '985172261',
//         type: 'MARKET',
//         side: 'SELL',
//         hash: '0x8c3122d67b7836f641a39e694b3b61f817ced9a9131d4287db30e1f05494f46a',
//         orderHash: '0xe4622579e18fbf8c91bd02548383721e1bf686ef832474f45c2ef68596f641ae',
//         taker: '0x15BBb591ee81D2a6030E1a7D9378548ff93A9D16',
//         maker: '0xEF4D26128669E0C30746B50ce1D23647a3464063',
//         pairName: 'BNB/WETH',
//         status: 'SUCCESS',
//         createdAt: 1506911142876
//       },
//       {
//         amount: '2885495400000000000000000',
//         pricepoint: '237980868',
//         type: 'LIMIT',
//         side: 'SELL',
//         hash: '0x5960fda2d7d3451272bca059a09e6d92b796bb9f8b5cc9d2a7d39f93e0c17346',
//         orderHash: '0x3cd6f07d03507eeef1db314bdd0f91447da613f0611e4429874c09bb731b8f85',
//         taker: '0x1639Cb6B1D885c94FD6b0766B098195DdA300044',
//         maker: '0x56d386341aD7F6D65DF44595617921Cb72AD3082',
//         pairName: 'ZRX/DAI',
//         status: 'SUCCESS',
//         createdAt: 1511091286778
//       }
//     ]

//     let expected = [
//       {
//         amount: 360.66,
//         price: 539.835,
//         type: 'MARKET',
//         side: 'SELL',
//         hash: '0x239c611ce10346eba1fe08dbc5542499a1e6bf5675070fa7ef809dc85d75f7c9',
//         orderHash: '0x0d1db9c7f2ab118c7276817aa779980c37d761a9184193eef54342b7e21901a7',
//         taker: '0x8Fc47D2C6c3BA1ad9B337707A2e3A6A1A81c9c42',
//         maker: '0x4c45AC66B0d30a2ECED64f403b0931f4b2Cfff04',
//         pair: 'OMG/WETH',
//         status: 'EXECUTED',
//         time: 1504567900560
//       },
//       {
//         amount: 576564.35,
//         price: 985.172,
//         type: 'MARKET',
//         side: 'SELL',
//         hash: '0x8c3122d67b7836f641a39e694b3b61f817ced9a9131d4287db30e1f05494f46a',
//         orderHash: '0xe4622579e18fbf8c91bd02548383721e1bf686ef832474f45c2ef68596f641ae',
//         taker: '0x15BBb591ee81D2a6030E1a7D9378548ff93A9D16',
//         maker: '0xEF4D26128669E0C30746B50ce1D23647a3464063',
//         pair: 'BNB/WETH',
//         status: 'EXECUTED',
//         time: 1506911142876
//       },
//       {
//         amount: 2885495.4,
//         price: 237.981,
//         type: 'LIMIT',
//         side: 'SELL',
//         hash: '0x5960fda2d7d3451272bca059a09e6d92b796bb9f8b5cc9d2a7d39f93e0c17346',
//         orderHash: '0x3cd6f07d03507eeef1db314bdd0f91447da613f0611e4429874c09bb731b8f85',
//         taker: '0x1639Cb6B1D885c94FD6b0766B098195DdA300044',
//         maker: '0x56d386341aD7F6D65DF44595617921Cb72AD3082',
//         pair: 'ZRX/DAI',
//         status: 'EXECUTED',
//         time: 1511091286778
//       }
//     ]

//     let parsed = parseTrades(data, 2)
//     expect(parsed).toEqual(expected)
//   })

//   it('parseOrderBookData return correct data', () => {
//     let data = {
//       bids: [
//         {
//           pricepoint: '409039000',
//           amount: '17000000000000000000'
//         },
//         {
//           pricepoint: '407588500',
//           amount: '69000000000000000000'
//         },
//         {
//           pricepoint: '4143982',
//           amount: '76850000000000000000'
//         }
//       ],
//       asks: [
//         {
//           pricepoint: '400158600',
//           amount: '21000000000000000000'
//         },
//         {
//           pricepoint: '418170700',
//           amount: '52000000000000000000'
//         },
//         {
//           pricepoint: '402241400',
//           amount: '79000000000000000000'
//         },
//         {
//           pricepoint: '417553200',
//           amount: '16000000000000000000'
//         }
//       ]
//     }

//     let expected = {
//       bids: [
//         {
//           price: 409.039,
//           amount: 17
//         },
//         {
//           price: 407.589,
//           amount: 69
//         },
//         {
//           price: 4.144,
//           amount: 76.85
//         }
//       ],
//       asks: [
//         {
//           price: 400.159,
//           amount: 21
//         },
//         {
//           price: 418.171,
//           amount: 52
//         },
//         {
//           price: 402.241,
//           amount: 79
//         },
//         {
//           price: 417.553,
//           amount: 16
//         }
//       ]
//     }

//     let parsed = parseOrderBookData(data, 2)
//     expect(parsed).toEqual(expected)
//   })
// })
})
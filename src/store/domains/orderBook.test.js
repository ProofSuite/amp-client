import domain from './orderBook';
import * as eventCreators from './orderBook';

function getDomain(events) {
  const state = events.reduce((state, event) => event(state), undefined);
  return domain(state);
}

it('handles initialized event properly', () => {
  const domain = getDomain([eventCreators.initialized()]);

  expect(domain.getState()).toEqual({
    bids: {},
    asks: {},
    sortedBids: [],
    sortedAsks: [],
    quoteToken: '',
    baseToken: '',
  });

  expect(domain.getAsks()).toEqual({});
  expect(domain.getBids()).toEqual({});
  expect(domain.getOrderedBids()).toEqual([]);
  expect(domain.getOrderedAsks()).toEqual([]);
  expect(domain.getQuoteToken()).toEqual('');
  expect(domain.getBaseToken()).toEqual('');
});

it('handles updated event properly', () => {
  let bids = [
    {
      price: 409.039,
      amount: 17,
    },
    {
      price: 407.5885,
      amount: 69,
    },
    {
      price: 414.3982,
      amount: 76.85,
    },
    {
      price: 414.2421,
      amount: 80,
    },
    {
      price: 411.7926,
      amount: 64,
    },
  ];



  let asks = [
    {
      price: 400.1586,
      amount: 21,
    },
    {
      price: 418.1707,
      amount: 52,
    },
    {
      price: 402.2414,
      amount: 79,
    },
    {
      price: 417.5532,
      amount: 16,
    },
    {
      price: 403.755,
      amount: 43,
    },
    {
      price: 403.3452,
      amount: 45,
    },
  ];

  const domain = getDomain([eventCreators.initialized(), eventCreators.orderBookUpdated(bids, asks)]);

  expect(domain.getState()).toEqual({
    bids: {
      '409.039': {
        price: 409.039,
        amount: 17,
      },
      '407.5885': {
        price: 407.5885,
        amount: 69,
      },
      '414.3982': {
        price: 414.3982,
        amount: 76.85,
      },
      '414.2421': {
        price: 414.2421,
        amount: 80,
      },
      '411.7926': {
        price: 411.7926,
        amount: 64,
      },
    },
    asks: {
      '400.1586': {
        price: 400.1586,
        amount: 21,
      },
      '418.1707': {
        price: 418.1707,
        amount: 52,
      },
      '402.2414': {
        price: 402.2414,
        amount: 79,
      },
      '417.5532': {
        price: 417.5532,
        amount: 16,
      },
      '403.755': {
        price: 403.755,
        amount: 43,
      },
      '403.3452': {
        price: 403.3452,
        amount: 45,
      },
    },
    sortedBids: ['414.3982', '414.2421', '411.7926', '409.039', '407.5885'],
    sortedAsks: ['400.1586', '402.2414', '403.3452', '403.755', '417.5532', '418.1707'],
    quoteToken: '',
    baseToken: '',
  });

  expect(domain.getOrderBookData()).toEqual({
    bids: [
      { price: 414.3982, amount: 76.85, total: 76.85, relativeTotal: 0.2504481016783444 },
      { price: 414.2421, amount: 80, total: 156.85, relativeTotal: 0.5111618054423985 },
      { price: 411.7926, amount: 64, total: 220.85, relativeTotal: 0.7197327684536418 },
      { price: 409.039, amount: 17, total: 237.85, relativeTotal: 0.7751344305035033 },
      { price: 407.5885, amount: 69, total: 306.85, relativeTotal: 1 },
    ],
    asks: [
      { price: 400.1586, amount: 21, total: 21, relativeTotal: 0.06843734723806419 },
      { price: 402.2414, amount: 79, total: 100, relativeTotal: 0.3258921297050676 },
      { price: 403.3452, amount: 45, total: 145, relativeTotal: 0.47254358807234803 },
      { price: 403.755, amount: 43, total: 188, relativeTotal: 0.612677203845527 },
      { price: 417.5532, amount: 16, total: 204, relativeTotal: 0.6648199445983379 },
      { price: 418.1707, amount: 52, total: 256, relativeTotal: 0.834283852044973 },
    ],
  });
});


it('handles handles updated event successvely', () => {
  let bids1 = [
    {
      price: 409.039,
      amount: 17,
    },
    {
      price: 407.5885,
      amount: 69,
    }
  ];

  let bids2 = [
    {
      price: 414.3982,
      amount: 76.85,
    },
    {
      price: 414.2421,
      amount: 80,
    },
    {
      price: 411.7926,
      amount: 64,
    }
  ]

  let asks1 = [
    {
      price: 400.1586,
      amount: 21,
    },
    {
      price: 418.1707,
      amount: 52,
    },
    {
      price: 402.2414,
      amount: 79,
    },
  ]

  let asks2 = [
    {
      price: 417.5532,
      amount: 16,
    },
    {
      price: 403.755,
      amount: 43,
    },
    {
      price: 403.3452,
      amount: 45,
    },
  ]

  const domain = getDomain([eventCreators.initialized(),
    eventCreators.orderBookUpdated(bids1, asks1),
    eventCreators.orderBookUpdated(bids2, asks2)
  ]);

  expect(domain.getState()).toEqual({
    bids: {
      '409.039': {
        price: 409.039,
        amount: 17,
      },
      '407.5885': {
        price: 407.5885,
        amount: 69,
      },
      '414.3982': {
        price: 414.3982,
        amount: 76.85,
      },
      '414.2421': {
        price: 414.2421,
        amount: 80,
      },
      '411.7926': {
        price: 411.7926,
        amount: 64,
      },
    },
    asks: {
      '400.1586': {
        price: 400.1586,
        amount: 21,
      },
      '418.1707': {
        price: 418.1707,
        amount: 52,
      },
      '402.2414': {
        price: 402.2414,
        amount: 79,
      },
      '417.5532': {
        price: 417.5532,
        amount: 16,
      },
      '403.755': {
        price: 403.755,
        amount: 43,
      },
      '403.3452': {
        price: 403.3452,
        amount: 45,
      },
    },
    sortedBids: ['414.3982', '414.2421', '411.7926', '409.039', '407.5885'],
    sortedAsks: ['400.1586', '402.2414', '403.3452', '403.755', '417.5532', '418.1707'],
    quoteToken: '',
    baseToken: '',
  });

  expect(domain.getOrderBookData()).toEqual({
    bids: [
      { price: 414.3982, amount: 76.85, total: 76.85, relativeTotal: 0.2504481016783444 },
      { price: 414.2421, amount: 80, total: 156.85, relativeTotal: 0.5111618054423985 },
      { price: 411.7926, amount: 64, total: 220.85, relativeTotal: 0.7197327684536418 },
      { price: 409.039, amount: 17, total: 237.85, relativeTotal: 0.7751344305035033 },
      { price: 407.5885, amount: 69, total: 306.85, relativeTotal: 1 },
    ],
    asks: [
      { price: 400.1586, amount: 21, total: 21, relativeTotal: 0.06843734723806419 },
      { price: 402.2414, amount: 79, total: 100, relativeTotal: 0.3258921297050676 },
      { price: 403.3452, amount: 45, total: 145, relativeTotal: 0.47254358807234803 },
      { price: 403.755, amount: 43, total: 188, relativeTotal: 0.612677203845527 },
      { price: 417.5532, amount: 16, total: 204, relativeTotal: 0.6648199445983379 },
      { price: 418.1707, amount: 52, total: 256, relativeTotal: 0.834283852044973 },
    ],
  });
});
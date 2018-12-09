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
    selected: null
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
    sortedBids: [414.3982, 414.2421, 411.7926, 409.039, 407.5885],
    sortedAsks: [400.1586, 402.2414, 403.3452, 403.755, 417.5532, 418.1707],
    quoteToken: '',
    baseToken: '',
    selected: null,
  });

  expect(domain.getOrderBookData()).toEqual({
      asks: [
      {
        amount: 21,
        price: 400.1586,
        relativeTotal: 0.06843734723806419,
        total: 21
      },
      {
        amount: 79,
        price: 402.2414,
        relativeTotal: 0.3258921297050676,
        total: 100
      },
      {
        amount: 45,
        price: 403.3452,
        relativeTotal: 0.47254358807234803,
        total: 145
      },
      {
        amount: 43,
        price: 403.755,
        relativeTotal: 0.612677203845527,
        total: 188
      },
      {
        amount: 16,
        price: 417.5532,
        relativeTotal: 0.6648199445983379,
        total: 204
      },
      {
        amount: 52,
        price: 418.1707,
        relativeTotal: 0.834283852044973,
        total: 256
      }
    ],
    bids: [
      {
        amount: 76.85,
        price: 414.3982,
        relativeTotal: 0.2504481016783444,
        total: 76.85
      },
      {
        amount: 80,
        price: 414.2421,
        relativeTotal: 0.5111618054423985,
        total: 156.85
      },
      {
        amount: 64,
        price: 411.7926,
        relativeTotal: 0.7197327684536418,
        total: 220.85
      },
      {
        amount: 17,
        price: 409.039,
        relativeTotal: 0.7751344305035033,
        total: 237.85
      },
      { 
        amount: 69,
        price: 407.5885, 
        relativeTotal: 1, 
        total: 306.85
      }
    ]
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
    sortedBids: [414.3982, 414.2421, 411.7926, 409.039, 407.5885],
    sortedAsks: [400.1586, 402.2414, 403.3452, 403.755, 417.5532, 418.1707],
    quoteToken: '',
    baseToken: '',
    selected: null,
  });

  expect(domain.getOrderBookData()).toEqual({
      asks: [
      {
        amount: 21,
        price: 400.1586,
        relativeTotal: 0.06843734723806419,
        total: 21
      },
      {
        amount: 79,
        price: 402.2414,
        relativeTotal: 0.3258921297050676,
        total: 100
      },
      {
        amount: 45,
        price: 403.3452,
        relativeTotal: 0.47254358807234803,
        total: 145
      },
      {
        amount: 43,
        price: 403.755,
        relativeTotal: 0.612677203845527,
        total: 188
      },
      {
        amount: 16,
        price: 417.5532,
        relativeTotal: 0.6648199445983379,
        total: 204
      },
      {
        amount: 52,
        price: 418.1707,
        relativeTotal: 0.834283852044973,
        total: 256
      }
    ],
    bids: [
      {
        amount: 76.85,
        price: 414.3982,
        relativeTotal: 0.2504481016783444,
        total: 76.85
      },
      {
        amount: 80,
        price: 414.2421,
        relativeTotal: 0.5111618054423985,
        total: 156.85
      },
      {
        amount: 64,
        price: 411.7926,
        relativeTotal: 0.7197327684536418,
        total: 220.85
      },
      {
        amount: 17,
        price: 409.039,
        relativeTotal: 0.7751344305035033,
        total: 237.85
      },
      { amount: 69, price: 407.5885, relativeTotal: 1, total: 306.85 }
    ]
  });
});
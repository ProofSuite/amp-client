// @flow
import { tsvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';

export const request = (endpoint: string, options: Object) => {
  return fetch(`https://localhost${endpoint}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'content-type': 'application/json',
    },
    mode: 'cors',
    ...options,
  });
};

type Listener = (any, ?any) => any;

type Payload = {
  msgType: string,
  data: Object,
};

export const openConnection = (listener: Listener) => {
  if (window.socket == null) throw new Error('Connection not established');

  window.socket.onerror = error => listener(error);
  window.socket.onopen = event => listener(event);

  return () => {
    window.socket && window.socket.close();
  };
};

export const subscribeChart = (from: number, to: number, pair: string, increment: string) => {
  if (!window.socket) throw new Error('Socket connection not established');

  let payload = JSON.stringify({
    channel: 'trades',
    message: {
      event: 'subscribe',
      pair: pair,
      params: {
        from: from,
        to: to,
        duration: 30,
        units: increment,
      },
    },
  });
  window.socket.send(payload);
};

export const unsubscribeChart = (pair: string) => {
  if (!window.socket) throw new Error('Socket connection not established');

  let payload = JSON.stringify({
    channnel: 'trades',
    message: {
      event: 'unsubscribe',
      pair: pair,
    },
  });

  window.socket.send(payload);
};

export const subscribeOrderBook = (pair: string) => {
  if (!window.socket) throw new Error('Socket connection not established');

  let payload = JSON.stringify({
    channel: 'order_book',
    message: {
      event: 'subscribe',
      key: pair,
    },
  });

  window.socket.send(payload);
};

export const unsubscribeOrderBook = (pair: string) => {
  if (!window.socket) throw new Error('Socket connection not established');

  let payload = JSON.stringify({
    channel: 'order_book',
    message: {
      event: 'unsubscribe',
      key: pair,
    },
  });

  window.socket.send(payload);
};

export const onMessage = (listener: Listener) => {
  if (!window.socket) throw new Error('Socket connection not established');

  window.socket.onmessage = event => {
    let payload = JSON.parse(event.data);
    let { channel, message } = payload;

    switch (channel) {
      case 'order_book':
        parseOrderBookMessage(message, listener);
        break;
      case 'trades':
        parseTradesMessage(message, listener);
        break;
      default:
        return;
    }
  };
};

export const parseOrderBookMessage = (payload: Payload, listener: Listener) => {
  let { msgType, data } = payload;

  switch (msgType) {
    case 'init':
      return listener(msgType, data);
    case 'order_added':
      return listener(msgType, data);
    case 'order_pending':
      return listener(msgType, data);
    case 'order_executed':
      return listener(msgType, data);
    case 'order_canceled':
      return listener(msgType, data);
    default:
      return;
  }
};

export const parseTradesMessage = (payload: Payload, listener: Listener) => {
  let { msgType, data } = payload;

  switch (msgType) {
    case 'init':
      return listener(msgType, data);
    case 'trade_added':
      return listener(msgType, data);
    case 'trade_pending':
      return listener(msgType, data);
    case 'trade_executed':
      return listener(msgType, data);
    case 'trade_canceled':
      return listener(msgType, data);
    default:
      return;
  }
};

export const fetchOHLCV = async (
  baseToken: string,
  quoteToken: string,
  from: number,
  to: number,
  duration: number,
  units: string
) => {
  const response = await request(`/trades/ticks`, {
    body: JSON.stringify({
      pair: [
        {
          baseToken: baseToken,
          quoteToken: quoteToken,
        },
      ],
      from: from,
      to: to,
      duration: duration,
      units: units,
    }),
    method: 'POST',
  });

  if (response.status !== 200) {
    throw new Error('Error');
  }

  const { data } = await response.json();
  return data;
};

export function parseData(parse: any) {
  return function(d: any) {
    d.date = parse(d.date);
    d.open = +d.open;
    d.high = +d.high;
    d.low = +d.low;
    d.close = +d.close;
    d.volume = +d.volume;
    return d;
  };
}

export const parseDate = timeParse('%Y-%m-%d');

export function getData() {
  const promiseMSFT = fetch('http://rrag.github.io/react-stockcharts/data/MSFT_full.tsv')
    .then(response => response.text())
    .then(data => {
      // console.log(tsvParse(data, parseData(parseDate)), 'api data')
      return tsvParse(data, parseData(parseDate));
    });
  return promiseMSFT;
}

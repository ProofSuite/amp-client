import { parseJSONData, parseJSONToFixed } from './parsers';
import tokenPairData from '../jsons/tokenPairData';

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
});

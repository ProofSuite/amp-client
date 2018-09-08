import ethereum_address from 'ethereum-address';

export const rand = (min, max, decimals = 4) => {
  return (Math.random() * (max - min) + min).toFixed(decimals);
};

export const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const isFloat = n => parseFloat(n.match(/^-?\d*(\.\d+)?$/)) > 0;

export const isInteger = n => /^\+?\d+$/.test(n);

export const round = (n, decimals = '2') => Math.round(n * Math.pow(10, decimals)) / Math.pow(10, decimals);

//TODO remove this function
const sorter = (a, b, wrt, order) => {
  let first, second;
  if (typeof a[wrt] === 'string') {
    first = a[wrt].toUpperCase(); // ignore upper and lowercase
    second = b[wrt].toUpperCase(); // ignore upper and lowercase
  } else {
    first = a[wrt];
    second = b[wrt];
  }
  if (order === 'asc') {
    if (first < second) {
      return -1;
    }
    if (first > second) {
      return 1;
    }
  } else {
    if (first > second) {
      return -1;
    }
    if (first < second) {
      return 1;
    }
  }
  return 0;
};

//TODO remove this function
export const sortArray = (array, wrt, sortOrder = 'asc') => {
  return array.sort((a, b) => sorter(a, b, wrt, sortOrder));
};

export const sortTable = (table, column, order = 'asc') => {
  let sortedTable = table.sort((a, b) => compare(a[column], b[column]));
  return order === 'asc' ? sortedTable : sortedTable.reverse();
};

export const compare = (a, b, order = 'asc') => {
  if (typeof a === 'string') {
    a = a.toUpperCase();
    b = b.toUpperCase();
  }

  return a < b ? -1 : 1;
};

export function getObjectFromProperty(array, prop, value) {
  let foundObject;
  array.map(function(obj) {
    if (obj[prop] === value) {
      foundObject = obj;
    }
    return obj;
  });
  if (foundObject) {
    return foundObject;
  } else {
    return false;
  }
}

export const filterer = (filter, coin, wrt, filterValue) => {
  if (filter) {
    return coin[wrt] === filterValue;
  }
  return true;
};

export const isJson = text => {
  return /^[\],:{}\s]*$/.test(
    text // eslint-disable-next-line
      .replace(/\\["\\\/bfnrtu]/g, '@') // eslint-disable-next-line
      .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
      .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
  );
};

export const sortedInserts = (arr, elems) => {
  for (let elem of elems) {
    if (arr.length === 0) {
      arr = [elem];
    } else if (arr.length === 1) {
      arr.push(elem);
    } else {
      for (let i = 0, len = arr.length; i < len; i++) {
        if (elem < arr[i]) {
          arr.splice(i, 0, elem);
          break;
        }
      }
    }
  }

  return arr;
};

export function toPassowrdType(text) {
  if (typeof text === 'string' || typeof text === 'number') {
    return '*'.repeat(text.length);
  }
  return text;
}

export function getSessionStorageWallets() {
  let wallets = [{ address: 'Enter new...', key: '', rank: 0 }],
    index = 1;
  Object.keys(sessionStorage).map(key => {
    if (ethereum_address.isAddress(key)) {
      wallets.push({ address: key, key: sessionStorage[key], rank: index });
      index++;
    }
    return key;
  });
  return wallets;
}

export function getLocalStorageWallets() {
  let wallets = [{ address: 'Enter new...', key: '', rank: 0 }],
    index = 1;
  Object.keys(localStorage).map(key => {
    if (ethereum_address.isAddress(key) && isJson(localStorage[key])) {
      wallets.push({ address: key, key: localStorage[key], rank: index });
      index++;
    }
    return key;
  });
  return wallets;
}

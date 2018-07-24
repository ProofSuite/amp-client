function sorter(a, b, wrt, order) {
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
}
export function sortArray(array, wrt, sortOrder = 'asc') {
  return array.sort((a, b) => sorter(a, b, wrt, sortOrder));
}

export function getObjectFromProperty(array, prop, value) {
  let foundObject;
  array.map(function(obj) {
    if (obj[prop] === value) {
      foundObject = obj;
    }
  });
  if (foundObject) {
    return foundObject;
  } else {
    return false;
  }
}

export function filterer(filter, coin, wrt, filterValue) {
  if (filter) {
    return coin[wrt] === filterValue;
  }
  return true;
}

export const isJson = text => {
  return /^[\],:{}\s]*$/.test(
    text
      .replace(/\\["\\\/bfnrtu]/g, '@')
      .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
      .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
  );
};

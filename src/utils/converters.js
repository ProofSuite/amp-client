/**
 * for Example ETH => WEI
 * @param value
 * @param decimals
 * @returns {string}
 */
export function convertToUnit(value, decimals, format) {
  if (format === 'string') {
    return (
      Math.floor(parseFloat(value) * Math.pow(10, parseInt(decimals))) / Math.pow(10, parseInt(decimals))
    ).toString();
  } else if (format === 'int') {
    return (
      Math.floor(parseFloat(value) * Math.pow(10, parseInt(decimals))) / Math.pow(10, parseInt(decimals))
    ).toString();
  } else {
    return parseFloat(value) * Math.pow(10, parseInt(decimals));
  }
}

export function reduceDecimals(value, decimals, format = 'float') {
  if (format === 'string') {
    return (
      Math.floor(parseFloat(value) * Math.pow(10, parseInt(decimals))) / Math.pow(10, parseInt(decimals))
    ).toString();
  } else if (format === 'int') {
    return Math.floor(parseFloat(value) * Math.pow(10, parseInt(decimals))) / Math.pow(10, parseInt(decimals));
  } else {
    return Math.floor(parseFloat(value) * Math.pow(10, parseInt(decimals))) / Math.pow(10, parseInt(decimals));
  }
}

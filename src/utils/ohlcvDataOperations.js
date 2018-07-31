export function getMissingData(data) {
  for (var i = 0; i < 30; i++) {
    let random = getRandom(0, data.length - 100);
    data.splice(random, 100);
  }
  return data;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

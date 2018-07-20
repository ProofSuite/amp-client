import { tsvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';

export function parseData(parse) {
  return function(d) {
    d.date = parse(d.date);
    d.open = +d.open;
    d.high = +d.high;
    d.low = +d.low;
    d.close = +d.close;
    d.volume = +d.volume;
    // console.log(d, 'd');
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

import { createVerticalLinearGradient, hexToRGBA } from 'react-stockcharts/lib/utils';

// SAR Config
export const accelerationFactor = 0.02;
export const maxAccelerationFactor = 0.2;

export const theme = {
  greenMint: '#40944e',
  redDesire: '#d62323',
  greenNeon: '#25bb2e',
  redChilli: '#d62323',
  redHot: '#FF0000',
  mehroon2: '#F9ACAA',
  mehroon1: '#6A1B19',
  mehroon: '#420806',
  green1: '#A2F5BF',
  green: '#0B4228',
  skyBlue: '#4286f4',
  skyBlue1: '#6fa4fc',
  skyBlue2: '#b5d0ff',
  axis: '#fff',
};

// Trenline
export const trendlineApperance = {
  stroke: '#00DDFF',
  strokeOpacity: 1,
  strokeWidth: 1,
  strokeDasharray: 'Solid',
  edgeStrokeWidth: 1,
  edgeFill: theme.axis,
  edgeStroke: theme.redHot,
};

// Bollinger Band
export const bbStroke = {
  top: '#964B00',
  middle: '#000000',
  bottom: '#964B00',
};

export const bbFill = theme.skyBlue;

// MACD
export const macdAppearance = {
  stroke: {
    macd: theme.redChilli,
    signal: theme.greenNeon,
  },
  fill: {
    divergence: theme.skyBlue,
  },
};

// Mouse
export const mouseEdgeAppearance = {
  textFill: '#542605',
  stroke: '#05233B',
  strokeOpacity: 1,
  strokeWidth: 3,
  arrowWidth: 5,
  fill: theme.skyBlue2,
};

export const stoAppearance = {
  stroke: {
    top: '#964B00',
    middle: '#000000',
    bottom: '#964B00',
    dLine: '#EA2BFF',
    kLine: '#74D400',
  },
};
export const canvasGradient = createVerticalLinearGradient([
  { stop: 0, color: hexToRGBA(theme.skyBlue2, 0.2) },
  { stop: 0.7, color: hexToRGBA(theme.skyBlue1, 0.4) },
  { stop: 1, color: hexToRGBA(theme.skyBlue, 0.8) },
]);

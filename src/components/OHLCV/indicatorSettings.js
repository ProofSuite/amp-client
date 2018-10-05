import { createVerticalLinearGradient, hexToRGBA } from 'react-stockcharts/lib/utils';
import { Colors } from '../Common';
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
  mehroon1: '#6A3126',
  white: Colors.WHITE,
  RED2: Colors.RED2,
  RED4: Colors.RED5,
  GREEN3: Colors.GREEN3,
  GREEN5: Colors.GREEN5,
  mehroon: '#6A1B19',
  green1: '#A2F5BF',
  green: '#0B4228',
  green2: '#00421B',
  skyBlue: '#4286f4',
  skyBlue1: '#6fa4fc',
  skyBlue2: '#b5d0ff',
  primary: Colors.PRIMARY,
  edges: Colors.GRAY5,
  axis: Colors.GRAY4,
  black: Colors.BLACK,
  background: Colors.APP_BACKGROUND,
};

//Volume Graph(Area)
export const volumeAppearance = {
  stroke: '#7aa4ea70',
  fill: '#9dbaec70',
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
    macd: theme.RED2,
    signal: theme.GREEN3,
  },
  fill: {
    divergence: theme.PRIMARY,
  },
};

// ATR
export const atrAppearance = {
  stroke: theme.greenMint,
};

// Axis
export const axisAppearance = {
  stroke: theme.axis,
  fill: theme.axis,
  tickStroke: theme.axis,
};

// Axis
export const edgeIndicatorAppearance = {
  strokeOpacity: 1,
  strokeWidth: 1,
  arrowWidth: 0,
};

// Mouse
export const mouseEdgeAppearance = {
  textFill: theme.white,
  stroke: theme.primary,
  strokeOpacity: 1,
  strokeWidth: 1,
  arrowWidth: 0,
  fill: theme.primary,
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

import React from 'react';

const SvgGbyte = props => (
  <svg width={64} height={64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#302C2C" fillRule="nonzero" />
      <circle cx={16} cy={16} r={11} fill="#FFF" />
    </g>
  </svg>
);

export default SvgGbyte;

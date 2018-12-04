import React from 'react';

const SvgLrc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#2ab6f6" r={16} />
      <path d="M16 6l9 12.533L16 26l-9-7.467zm-1.174 6.667L10.913 18l3.913 3.2zm2.348 0V21.2l3.913-3.2z" fill="#fff" />
    </g>
  </svg>
);

export default SvgLrc;

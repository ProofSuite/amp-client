import React from 'react';

const SvgStorm = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#080d98" r={16} />
      <path d="M23 6l-12.029 8.25 6.076 3.875L9 26l13.302-9.208-5.994-3.875z" fill="#fff" />
    </g>
  </svg>
);

export default SvgStorm;

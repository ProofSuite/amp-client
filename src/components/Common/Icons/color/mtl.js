import React from 'react';

const SvgMtl = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#1E1F25" />
      <path fill="#FFF" d="M8 9h1v14H8V9zm5 3h1v9h-1v-9zm5 2h1v5h-1v-5zm5-5h1v14h-1V9z" />
    </g>
  </svg>
);

export default SvgMtl;

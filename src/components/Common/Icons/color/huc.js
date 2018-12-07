import React from 'react';

const SvgHuc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#ffc018" r={16} />
      <path d="M11.5 14.5h9V10h3v16h-3v-8.5h-9V22h-3V6h3z" fill="#fff" />
    </g>
  </svg>
);

export default SvgHuc;

import React from 'react';

const SvgLink = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#01a6fb" r={16} />
      <path
        d="M15 18.618V21a1 1 0 0 0 2 0v-2.382a1.5 1.5 0 1 0-2 0zM10 14v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zm12 0h-9.5v-1.9c0-1.988 1.567-3.6 3.5-3.6s3.5 1.612 3.5 3.6V14H16z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgLink;

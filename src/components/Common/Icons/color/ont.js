import React from 'react';

const SvgOnt = props => (
  <svg width={64} height={64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#32a4be" fillRule="nonzero" r={16} />
      <path
        d="M25 24.217L9.977 9.521A8.871 8.871 0 0 1 16.2 7c4.86 0 8.8 3.854 8.8 8.609zM7 7.783l15.023 14.696A8.871 8.871 0 0 1 15.8 25C10.94 25 7 21.146 7 16.391z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgOnt;

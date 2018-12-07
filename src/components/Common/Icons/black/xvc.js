import React from 'react';

const SvgXvc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.882-21.257V24h4.74L26 8h-4.286l-7.916 10.717V8H9.664L8 10.743z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgXvc;

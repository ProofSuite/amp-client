import React from 'react';

const SvgKnc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      fill="#FFF"
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.914-17.538L15.245 27l6.517-5.52-6.676-7.018zm.318-.473l6.358 6.782L22 10.677l-6.596 3.312zm-.397-.552l6.914-3.233L15.007 5v8.437zm-.477-8.2L10 10.362l1.113 10.96 3.655 5.126-.238-21.211z"
    />
  </svg>
);

export default SvgKnc;

import React from 'react';

const SvgTnc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#ff439b" fillRule="nonzero" r={16} />
      <path
        d="M18.226 13.804l5.633 9.696H8.245l1.871-3.103 8.412.002-2.132-3.48zm-5.75 2.256l5.727-9.52L26 19.667h-3.744l-4.12-7.16-2.001 3.554zm4.885 3.619L6 19.625 13.807 6.5l1.86 3.146-4.303 6.918h4.167z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgTnc;

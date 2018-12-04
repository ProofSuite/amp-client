import React from 'react';

const SvgVtc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#048657" />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M2.632 16.57l1.95-2.221h6.938l4.263 5.438L26.938 4.334a14.205 14.205 0 0 1 1.86 2.04 15.002 15.002 0 0 1 1.496 2.446L16.599 27.763c-.259.272-.531.408-.816.408-.286 0-.573-.136-.862-.408L6.26 16.569H2.632z"
      />
    </g>
  </svg>
);

export default SvgVtc;

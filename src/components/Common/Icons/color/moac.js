import React from 'react';

const SvgMoac = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#000" />
      <path
        d="M15.792 15.792L9.423 9.423l-.138-.208L7.02 7v17.515h2.284V12.4l4.916 4.985 1.592 1.592 1.592-1.592L22.32 12.4v12.115h2.284V7L22.32 9.215z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgMoac;

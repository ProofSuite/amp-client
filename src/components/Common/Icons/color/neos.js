import React from 'react';

const SvgNeos = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#e5f300" r={16} />
      <path
        d="M10.5 9.358l8.143 4.926v3.097l-5.714-3.433V26H10.5zm11 13.284l-8.143-4.926V14.62l5.714 3.433V6H21.5z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgNeos;

import React from 'react';

const SvgAct = props => (
  <svg width={64} height={64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#767DFF" fillRule="nonzero" />
      <path
        fill="#FFF"
        d="M13.77 6.5h4.46a.87.87 0 0 1 .759.444l6.906 12.319a.87.87 0 0 1 0 .85l-2.21 3.942a.87.87 0 0 1-.758.445H9.073a.87.87 0 0 1-.759-.445l-2.209-3.942a.87.87 0 0 1 0-.85l6.906-12.319a.87.87 0 0 1 .759-.444zM16 11.401l-4.653 8.287h9.306L16 11.401z"
      />
    </g>
  </svg>
);

export default SvgAct;

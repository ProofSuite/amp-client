import React from 'react';

const SvgZel = props => (
  <svg width={64} height={64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#183C87" fillRule="nonzero" />
      <path
        fill="#FFF"
        d="M5 15.615l4.495-2.538 4.494 2.538v4.847L9.495 23 5 20.462v-4.847zm13.01 0l4.495-2.538L27 15.615v4.847L22.505 23l-4.494-2.538v-4.847zm-.472 4.21l-1.577.867-1.499-.823V15.23l-4.1-2.316V11.23L15.961 8l5.598 3.23v1.73l-4.021 2.27v4.596z"
      />
    </g>
  </svg>
);

export default SvgZel;

import React from 'react';

const SvgCnx = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="cnx_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="cnx_svg__b" cx={16} cy={15} r={15} />
      <filter id="cnx_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="cnx_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#cnx_svg__a)" xlinkHref="#cnx_svg__b" />
      <use fill="#4C6BAE" xlinkHref="#cnx_svg__b" />
      <use
        fill="url(#cnx_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#cnx_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" filter="url(#cnx_svg__d)" transform="translate(5 4)">
        <path
          d="M1.383 12.01L0 12.153c.74-2.07 2.203-3.726 4.391-4.968.207 1.716 1.02 3.135 2.44 4.259l-1.3.135a5.503 5.503 0 0 0 4.553 4.845 6.084 6.084 0 0 1-2.987 1.185c.681 1.2 1.487 2.183 2.417 2.947a9.674 9.674 0 0 1-8.131-8.546zm19.234-2.02L22 9.847c-.74 2.07-2.203 3.726-4.391 4.968-.207-1.716-1.02-3.135-2.44-4.259l1.3-.135a5.503 5.503 0 0 0-4.626-4.857 6.085 6.085 0 0 1 2.972-1.173c-.687-1.209-1.499-2.196-2.438-2.963a9.674 9.674 0 0 1 8.24 8.562z"
          opacity={0.5}
        />
        <path d="M11.922 20.626L12.065 22c-2.07-.74-3.726-2.203-4.968-4.391 1.715-.207 3.134-1.02 4.258-2.44l.136 1.31a5.503 5.503 0 0 0 4.945-4.636 6.085 6.085 0 0 1 1.173 2.972c1.209-.687 2.196-1.499 2.963-2.438a9.674 9.674 0 0 1-8.65 8.249zM9.99 1.383L9.847 0c2.07.74 3.726 2.203 4.968 4.391-1.716.207-3.135 1.02-4.259 2.44l-.135-1.3a5.503 5.503 0 0 0-4.857 4.626 6.085 6.085 0 0 1-1.173-2.972c-1.209.687-2.196 1.499-2.963 2.438a9.674 9.674 0 0 1 8.562-8.24z" />
      </g>
    </g>
  </svg>
);

export default SvgCnx;

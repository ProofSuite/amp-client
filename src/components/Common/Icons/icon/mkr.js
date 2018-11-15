import React from 'react';

const SvgMkr = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="mkr_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="mkr_svg__b" cx={16} cy={15} r={15} />
      <filter id="mkr_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="mkr_svg__e"
        d="M7.838 11.056V21.5H6v-14l9.708 7.027V21.5H13.87v-6.077l-6.032-4.367zm10.292 4.367V21.5h-1.838v-6.973L26 7.5v14h-1.838V11.056l-6.032 4.367z"
      />
      <filter id="mkr_svg__d" width="117.5%" height="125%" x="-8.8%" y="-8.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#mkr_svg__a)" xlinkHref="#mkr_svg__b" />
      <use fill="#1ABC9C" xlinkHref="#mkr_svg__b" />
      <use
        fill="url(#mkr_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#mkr_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#mkr_svg__d)" xlinkHref="#mkr_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#mkr_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgMkr;

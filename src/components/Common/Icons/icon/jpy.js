import React from 'react';

const SvgJpy = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="jpy_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="jpy_svg__b" cx={16} cy={15} r={15} />
      <filter id="jpy_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="jpy_svg__e"
        d="M17.548 17.711v1.878h5.063v2.288h-5.063V24.5h-3.096v-2.623H9.389v-2.288h5.063v-1.878H9.389v-2.288h4.171L7.5 6.5h3.752l4.8 7.534L20.853 6.5H24.5l-6.086 8.923h4.197v2.288z"
      />
      <filter id="jpy_svg__d" width="120.6%" height="119.4%" x="-10.3%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#jpy_svg__a)" xlinkHref="#jpy_svg__b" />
      <use fill="#EAC749" xlinkHref="#jpy_svg__b" />
      <use
        fill="url(#jpy_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#jpy_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#jpy_svg__d)" xlinkHref="#jpy_svg__e" />
      <use fill="#FFF" xlinkHref="#jpy_svg__e" />
    </g>
  </svg>
);

export default SvgJpy;

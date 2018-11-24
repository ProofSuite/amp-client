import React from 'react';

const SvgTheta = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="theta_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="theta_svg__b" cx={16} cy={15} r={15} />
      <filter id="theta_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="theta_svg__e"
        d="M10.96 5h10.08l.96.993v18.014l-.96.993H10.96l-.96-.993V5.993L10.96 5zm.96 18.013h8.16V6.987h-8.16v16.026zm7.134-5.17h-2.087v2.263h-1.884v-2.262h-2.087v-1.949h6.058v1.949zm0-5.582v1.948h-6.058v-1.948h2.087V9.998h1.884v2.263h2.087z"
      />
      <filter id="theta_svg__d" width="129.2%" height="117.5%" x="-14.6%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#theta_svg__a)" xlinkHref="#theta_svg__b" />
      <use fill="#2AB8E6" xlinkHref="#theta_svg__b" />
      <use
        fill="url(#theta_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#theta_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#theta_svg__d)" xlinkHref="#theta_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#theta_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgTheta;

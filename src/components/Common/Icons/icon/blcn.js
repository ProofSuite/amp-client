import React from 'react';

const SvgBlcn = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="blcn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="blcn_svg__b" cx={16} cy={15} r={15} />
      <filter id="blcn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#blcn_svg__a)" xlinkHref="#blcn_svg__b" />
      <use fill="#2AABE4" xlinkHref="#blcn_svg__b" />
      <use
        fill="url(#blcn_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#blcn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <path
        fill="#FFF"
        d="M7.9 6h6.2a.9.9 0 0 1 .9.9v6.2a.9.9 0 0 1-.9.9H7.9a.9.9 0 0 1-.9-.9V6.9a.9.9 0 0 1 .9-.9zm10 0h6.2a.9.9 0 0 1 .9.9v6.2a.9.9 0 0 1-.9.9h-6.2a.9.9 0 0 1-.9-.9V6.9a.9.9 0 0 1 .9-.9zm0 10h6.2a.9.9 0 0 1 .9.9v6.2a.9.9 0 0 1-.9.9h-6.2a.9.9 0 0 1-.9-.9v-6.2a.9.9 0 0 1 .9-.9zm-10 0h6.2a.9.9 0 0 1 .9.9v6.2a.9.9 0 0 1-.9.9H7.9a.9.9 0 0 1-.9-.9v-6.2a.9.9 0 0 1 .9-.9z"
      />
    </g>
  </svg>
);

export default SvgBlcn;

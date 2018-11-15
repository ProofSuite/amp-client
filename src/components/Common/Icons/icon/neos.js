import React from 'react';

const SvgNeos = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="neos_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="neos_svg__b" cx={16} cy={15} r={15} />
      <filter id="neos_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="neos_svg__e"
        d="M10.5 8.358l8.143 4.926v3.097l-5.714-3.433V25H10.5V8.358zm11 13.284l-8.143-4.926V13.62l5.714 3.433V5H21.5v16.642z"
      />
      <filter id="neos_svg__d" width="131.8%" height="117.5%" x="-15.9%" y="-6.3%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#neos_svg__a)" xlinkHref="#neos_svg__b" />
      <use fill="#E5F300" xlinkHref="#neos_svg__b" />
      <use
        fill="url(#neos_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#neos_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#neos_svg__d)" xlinkHref="#neos_svg__e" />
      <use fill="#FFF" xlinkHref="#neos_svg__e" />
    </g>
  </svg>
);

export default SvgNeos;

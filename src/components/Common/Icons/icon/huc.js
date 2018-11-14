import React from 'react';

const SvgHuc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="huc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="huc_svg__b" cx={16} cy={15} r={15} />
      <filter id="huc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path id="huc_svg__e" d="M11.5 13.5h9V9h3v16h-3v-8.5h-9V21h-3V5h3v8.5z" />
      <filter id="huc_svg__d" width="123.3%" height="117.5%" x="-11.7%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#huc_svg__a)" xlinkHref="#huc_svg__b" />
      <use fill="#FFC018" xlinkHref="#huc_svg__b" />
      <use
        fill="url(#huc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#huc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#huc_svg__d)" xlinkHref="#huc_svg__e" />
      <use fill="#FFF" xlinkHref="#huc_svg__e" />
    </g>
  </svg>
);

export default SvgHuc;

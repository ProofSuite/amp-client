import React from 'react';

const SvgDcr = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="dcr_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="dcr_svg__b" cx={16} cy={15} r={15} />
      <filter id="dcr_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="dcr_svg__e"
        d="M14.856 16.62h4.42a2.987 2.987 0 0 0 2.978-2.996 2.987 2.987 0 0 0-2.978-2.995H17.87L14.856 8h4.42a5.602 5.602 0 0 1 5.488 4.545 5.632 5.632 0 0 1-3.379 6.29l3.485 3.042h-3.991l-6.023-5.258zm2.157-3.36h-4.42a2.987 2.987 0 0 0-2.978 2.994 2.987 2.987 0 0 0 2.978 2.995H14l3.012 2.63h-4.419a5.602 5.602 0 0 1-5.488-4.545 5.632 5.632 0 0 1 3.379-6.29L7.002 8h3.991l6.02 5.26z"
      />
      <filter id="dcr_svg__d" width="119.6%" height="125.2%" x="-9.8%" y="-9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#dcr_svg__a)" xlinkHref="#dcr_svg__b" />
      <use fill="#2ED6A1" xlinkHref="#dcr_svg__b" />
      <use
        fill="url(#dcr_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#dcr_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#dcr_svg__d)" xlinkHref="#dcr_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#dcr_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgDcr;

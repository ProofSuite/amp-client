import React from 'react';

const SvgDtr = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="dtr_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="dtr_svg__b" cx={16} cy={15} r={15} />
      <filter id="dtr_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="dtr_svg__d" width="119.4%" height="119.4%" x="-9.7%" y="-6.9%" filterUnits="objectBoundingBox">
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
      <use fill="#000" filter="url(#dtr_svg__a)" xlinkHref="#dtr_svg__b" />
      <use fill="#121747" xlinkHref="#dtr_svg__b" />
      <use
        fill="url(#dtr_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#dtr_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" fillRule="nonzero" filter="url(#dtr_svg__d)" transform="translate(7 6)">
        <path d="M11.032 15.87c0 1.145-.92 2.074-2.056 2.074a2.065 2.065 0 0 1-2.055-2.075V2.08A2.064 2.064 0 0 1 8.976.006c1.135 0 2.056.929 2.056 2.075v13.79zm-6.92.005a2.072 2.072 0 0 1-1.015 1.82 2.032 2.032 0 0 1-2.068 0 2.072 2.072 0 0 1-1.014-1.82v-3.1a2.072 2.072 0 0 1 1.014-1.82 2.032 2.032 0 0 1 2.068 0 2.072 2.072 0 0 1 1.014 1.82v3.1z" />
        <path
          d="M17.956 10.4c0 1.145-.92 2.074-2.056 2.074a2.065 2.065 0 0 1-2.056-2.075V5.166c0-1.146.92-2.075 2.056-2.075 1.135 0 2.056.929 2.056 2.075v5.233z"
          opacity={0.5}
        />
      </g>
    </g>
  </svg>
);

export default SvgDtr;

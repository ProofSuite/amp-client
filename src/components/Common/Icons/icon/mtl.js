import React from 'react';

const SvgMtl = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="mtl_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="mtl_svg__b" cx={16} cy={15} r={15} />
      <filter id="mtl_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path id="mtl_svg__e" d="M8 8h1v14H8V8zm5 3h1v9h-1v-9zm5 2h1v5h-1v-5zm5-5h1v14h-1V8z" />
      <filter id="mtl_svg__d" width="121.9%" height="125%" x="-10.9%" y="-8.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#mtl_svg__a)" xlinkHref="#mtl_svg__b" />
      <use fill="#302C2C" fillRule="evenodd" xlinkHref="#mtl_svg__b" />
      <use
        fill="url(#mtl_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#mtl_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#mtl_svg__d)" xlinkHref="#mtl_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#mtl_svg__e" />
    </g>
  </svg>
);

export default SvgMtl;

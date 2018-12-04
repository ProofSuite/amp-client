import React from 'react';

const SvgOmg = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="omg_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="omg_svg__b" cx={16} cy={15} r={15} />
      <filter id="omg_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="omg_svg__e"
        d="M11.856 16.29a4.353 4.353 0 0 0-4.35 4.355A4.353 4.353 0 0 0 11.855 25a4.353 4.353 0 0 0 4.352-4.355 4.353 4.353 0 0 0-4.351-4.355zm0 7.393a3.035 3.035 0 0 1-3.033-3.036 3.035 3.035 0 0 1 3.033-3.037 3.035 3.035 0 0 1 3.034 3.037 3.04 3.04 0 0 1-3.034 3.036zM21.15 7a4.353 4.353 0 0 0-4.351 4.355 4.353 4.353 0 0 0 4.35 4.355 4.353 4.353 0 0 0 4.352-4.355A4.353 4.353 0 0 0 21.149 7zm0 7.393a3.035 3.035 0 0 1-3.034-3.036A3.035 3.035 0 0 1 21.15 8.32a3.035 3.035 0 0 1 3.033 3.037 3.04 3.04 0 0 1-3.033 3.036zM11.856 7a4.358 4.358 0 0 0-1.696 8.37 4.351 4.351 0 0 0 5.288-1.556 4.36 4.36 0 0 0-.475-5.497h1.233V7h-4.35zm3.034 4.355a3.035 3.035 0 0 1-3.034 3.036 3.035 3.035 0 0 1-3.033-3.036 3.035 3.035 0 0 1 3.033-3.036 3.04 3.04 0 0 1 3.035 3.036h-.001z"
      />
      <filter id="omg_svg__d" width="119.4%" height="119.4%" x="-9.7%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#omg_svg__a)" xlinkHref="#omg_svg__b" />
      <use fill="#1A53F0" xlinkHref="#omg_svg__b" />
      <use
        fill="url(#omg_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#omg_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#omg_svg__d)" xlinkHref="#omg_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#omg_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgOmg;

import React from 'react';

const SvgBat = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="bat_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bat_svg__b" cx={16} cy={15} r={15} />
      <filter id="bat_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path id="bat_svg__e" d="M6 22.5l10.051-17L26 22.477 6 22.5zm10.027-10.12l-4.108 6.786h8.235l-4.127-6.786z" />
      <filter id="bat_svg__d" width="117.5%" height="120.6%" x="-8.8%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#bat_svg__a)" xlinkHref="#bat_svg__b" />
      <use fill="#FF5000" fillRule="evenodd" xlinkHref="#bat_svg__b" />
      <use
        fill="url(#bat_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#bat_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#bat_svg__d)" xlinkHref="#bat_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#bat_svg__e" />
    </g>
  </svg>
);

export default SvgBat;

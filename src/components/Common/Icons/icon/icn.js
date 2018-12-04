import React from 'react';

const SvgIcn = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="icn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="icn_svg__b" cx={16} cy={15} r={15} />
      <filter id="icn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="icn_svg__e"
        d="M20.833 6H23.5v18h-2.667V6zm-4.444 9h2.667v9h-2.667v-9zm-4.445-4.5h2.667V24h-2.667V10.5zm-4.444 9h2.667V24H7.5v-4.5z"
      />
      <filter id="icn_svg__d" width="121.9%" height="119.4%" x="-10.9%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#icn_svg__a)" xlinkHref="#icn_svg__b" />
      <use fill="#4C6F8C" xlinkHref="#icn_svg__b" />
      <use
        fill="url(#icn_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#icn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#icn_svg__d)" xlinkHref="#icn_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#icn_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgIcn;

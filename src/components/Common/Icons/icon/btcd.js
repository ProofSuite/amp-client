import React from 'react';

const SvgBtcd = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="btcd_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="btcd_svg__b" cx={16} cy={15} r={15} />
      <filter id="btcd_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="btcd_svg__e"
        d="M17.078 18.356c5.08-1.567 3.267-6.834 0-7.034.83 0 1.508-2.377 1.508-5.322 7.976.567 11.723 13.711-.24 17.823.077-1.067-.36-4.045-1.267-5.467zM6 16.8v-5.467h.01c2.885-.011 5.212-2.4 5.202-5.322h5.56C16.773 11.977 11.955 16.8 6 16.8zm7.287-.99c3.3 2.712 3.486 7.279 3.486 8.19h-5.561c0-3.022-1.967-5.467-4.403-5.467 4.13-.666 4.971-1.366 6.478-2.722z"
      />
      <filter id="btcd_svg__d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#btcd_svg__a)" xlinkHref="#btcd_svg__b" />
      <use fill="#F60" fillRule="evenodd" xlinkHref="#btcd_svg__b" />
      <use
        fill="url(#btcd_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#btcd_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#btcd_svg__d)" xlinkHref="#btcd_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#btcd_svg__e" />
    </g>
  </svg>
);

export default SvgBtcd;

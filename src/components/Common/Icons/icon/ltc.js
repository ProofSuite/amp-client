import React from 'react';

const SvgLtc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="ltc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ltc_svg__b" cx={16} cy={15} r={15} />
      <filter id="ltc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ltc_svg__e"
        d="M10.427 18.214L9 18.768l.688-2.759 1.444-.58L13.213 7h5.129l-1.519 6.196 1.41-.571-.68 2.75-1.427.571-.848 3.483H23L22.127 23H9.252z"
      />
      <filter id="ltc_svg__d" width="125%" height="121.9%" x="-12.5%" y="-7.8%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ltc_svg__a)" xlinkHref="#ltc_svg__b" />
      <use fill="#BFBBBB" xlinkHref="#ltc_svg__b" />
      <use
        fill="url(#ltc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ltc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#ltc_svg__d)" xlinkHref="#ltc_svg__e" />
      <use fill="#FFF" xlinkHref="#ltc_svg__e" />
    </g>
  </svg>
);

export default SvgLtc;

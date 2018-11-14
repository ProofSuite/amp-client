import React from 'react';

const SvgGbp = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="gbp_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="gbp_svg__b" cx={16} cy={15} r={15} />
      <filter id="gbp_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="gbp_svg__e"
        d="M11.087 13.815v-2.332c0-3.676 2.219-5.983 6.075-5.983 2.932 0 4.57 1.242 5.838 2.84l-2.483 1.9c-.951-1.165-1.85-1.85-3.328-1.85-1.77 0-2.827 1.217-2.827 3.17v2.255h6.578v2.637h-6.578v4.335h8.585V23.5H9v-1.977l2.087-.609v-4.462H9v-2.637h2.087z"
      />
      <filter id="gbp_svg__d" width="125%" height="119.4%" x="-12.5%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#gbp_svg__a)" xlinkHref="#gbp_svg__b" />
      <use fill="#BC3FE0" xlinkHref="#gbp_svg__b" />
      <use
        fill="url(#gbp_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#gbp_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#gbp_svg__d)" xlinkHref="#gbp_svg__e" />
      <use fill="#FFF" xlinkHref="#gbp_svg__e" />
    </g>
  </svg>
);

export default SvgGbp;

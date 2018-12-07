import React from 'react';

const SvgBcn = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="bcn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bcn_svg__b" cx={16} cy={15} r={15} />
      <filter id="bcn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="bcn_svg__e"
        d="M23.437 15.754c-.63-.696-1.536-1.128-2.72-1.296v-.025c1.037-.168 1.852-.593 2.406-1.273a3.717 3.717 0 0 0 .862-2.404c0-1.461-.47-2.454-1.444-3.235-.974-.78-2.436-1.037-4.417-1.037h-7.481v6.963H6.347v2.667h11.727c.923 0 1.616.065 2.074.434.458.369.692.846.692 1.551s-.231 1.307-.692 1.685c-.46.377-1.154.626-2.074.626H14.05v-2.074h-3.407v4.741h7.727c1.965 0 3.467-.513 4.509-1.31 1.041-.797 1.53-1.974 1.53-3.419a3.81 3.81 0 0 0-.972-2.594zm-5.793-2.314H14.05V9.144h3.594c1.848 0 2.77.721 2.77 2.148s-.922 2.148-2.77 2.148z"
      />
      <filter id="bcn_svg__d" width="119.4%" height="121.1%" x="-9.7%" y="-7.5%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#bcn_svg__a)" xlinkHref="#bcn_svg__b" />
      <use fill="#F04086" xlinkHref="#bcn_svg__b" />
      <use
        fill="url(#bcn_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#bcn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#bcn_svg__d)" xlinkHref="#bcn_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#bcn_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgBcn;

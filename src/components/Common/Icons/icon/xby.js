import React from 'react';

const SvgXby = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="xby_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xby_svg__b" cx={16} cy={15} r={15} />
      <filter id="xby_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="xby_svg__e"
        d="M6 8.016c0-.015.21-.016 2.918-.014l2.919.003 1.66 2.793 1.688 2.841.028.047.264-.45c.144-.248.262-.455.26-.461a818.43 818.43 0 0 0-1.41-2.38 268.499 268.499 0 0 1-1.406-2.38c0-.013.439-.015 3.073-.015 1.706 0 3.072.004 3.072.01 0 .02-6.515 11.097-6.53 11.1-.011.002-.964-1.608-3.276-5.537C7.467 10.526 6 8.026 6 8.016zm14.14-.009c0-.004 1.32-.007 2.931-.007H26l-.004.022c-.003.013-1.463 2.501-3.244 5.529-2.159 3.667-3.246 5.506-3.26 5.508-.013.002-.319-.507-1.345-2.234-.732-1.23-1.333-2.24-1.337-2.242-.008-.005-.533.886-.529.898.001.005.604 1.02 1.338 2.256a127.572 127.572 0 0 1 1.33 2.265c-.009.035-2.936 4.995-2.948 4.998-.019.004-2.929-4.94-2.923-4.965.005-.011 6.954-11.85 7.061-12.028z"
      />
      <filter id="xby_svg__d" width="117.5%" height="120.6%" x="-8.8%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#xby_svg__a)" xlinkHref="#xby_svg__b" />
      <use fill="#56F4F1" xlinkHref="#xby_svg__b" />
      <use
        fill="url(#xby_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#xby_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#xby_svg__d)" xlinkHref="#xby_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#xby_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgXby;

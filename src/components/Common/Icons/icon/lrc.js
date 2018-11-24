import React from 'react';

const SvgLrc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="lrc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="lrc_svg__b" cx={16} cy={15} r={15} />
      <filter id="lrc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="lrc_svg__e"
        d="M16 5l9 12.533L16 25l-9-7.467L16 5zm-1.174 6.667L10.913 17l3.913 3.2v-8.533zm2.348 0V20.2l3.913-3.2-3.913-5.333z"
      />
      <filter id="lrc_svg__d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#lrc_svg__a)" xlinkHref="#lrc_svg__b" />
      <use fill="#2AB6F6" xlinkHref="#lrc_svg__b" />
      <use
        fill="url(#lrc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#lrc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#lrc_svg__d)" xlinkHref="#lrc_svg__e" />
      <use fill="#FFF" xlinkHref="#lrc_svg__e" />
    </g>
  </svg>
);

export default SvgLrc;

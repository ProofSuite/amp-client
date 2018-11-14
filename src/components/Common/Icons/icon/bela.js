import React from 'react';

const SvgBela = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="bela_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bela_svg__b" cx={16} cy={15} r={15} />
      <filter id="bela_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="bela_svg__e"
        d="M8.297 10.568A2.422 2.422 0 0 1 7 8.422a2.416 2.416 0 1 1 4.553-1.134 8.891 8.891 0 0 1 4.501-1.216c4.94 0 8.946 4.014 8.946 8.964S20.995 24 16.054 24c-4.94 0-8.946-4.013-8.946-8.964a8.94 8.94 0 0 1 1.189-4.468zm7.757 8.878c2.43 0 4.4-1.974 4.4-4.41 0-2.435-1.97-4.41-4.4-4.41-2.43 0-4.4 1.975-4.4 4.41 0 2.436 1.97 4.41 4.4 4.41z"
      />
      <filter id="bela_svg__d" width="119.4%" height="119.4%" x="-9.7%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#bela_svg__a)" xlinkHref="#bela_svg__b" />
      <use fill="#13A0F6" xlinkHref="#bela_svg__b" />
      <use
        fill="url(#bela_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#bela_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#bela_svg__d)" xlinkHref="#bela_svg__e" />
      <use fill="#FFF" xlinkHref="#bela_svg__e" />
    </g>
  </svg>
);

export default SvgBela;

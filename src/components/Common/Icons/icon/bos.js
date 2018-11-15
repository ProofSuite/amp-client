import React from 'react';

const SvgBos = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="bos_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bos_svg__b" cx={16} cy={15} r={15} />
      <filter id="bos_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="bos_svg__e"
        d="M14.432 17.95v-1.917h2.954c1.97 0 2.955-.492 2.955-1.476V9.393c0-.983-.985-1.475-2.955-1.475H12.66v3.098H10V6h7.09C21.03 6 23 7.082 23 9.246v5.459c0 2.164-1.97 3.246-5.91 3.246h-2.658zm5.909 1.181H23v1.623C23 22.918 21.03 24 17.09 24H10V12.492h7.09c.417 0 .81.012 1.183.036v1.921a9.18 9.18 0 0 0-.887-.04H12.66v7.673h4.727c1.97 0 2.955-.492 2.955-1.475V19.13z"
      />
      <filter id="bos_svg__d" width="126.9%" height="119.4%" x="-13.5%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#bos_svg__a)" xlinkHref="#bos_svg__b" />
      <use fill="#00A8D6" xlinkHref="#bos_svg__b" />
      <use
        fill="url(#bos_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#bos_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#bos_svg__d)" xlinkHref="#bos_svg__e" />
      <use fill="#FFF" xlinkHref="#bos_svg__e" />
    </g>
  </svg>
);

export default SvgBos;

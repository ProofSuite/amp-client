import React from 'react';

const SvgTzc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="tzc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="tzc_svg__b" cx={16} cy={15} r={15} />
      <filter id="tzc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="tzc_svg__e"
        d="M17.7 14.4v7.598c.204-.05.404-.107.6-.173v2.91a10.029 10.029 0 0 1-4 .121V14.4h-3.5v-2.8h10.4v2.8h-3.5zm1.4 10.11V21.5a7.2 7.2 0 1 0-6.2 0v3.01C8.895 23.205 6 19.44 6 15 6 9.477 10.477 5 16 5s10 4.477 10 10c0 4.44-2.895 8.205-6.9 9.51z"
      />
      <filter id="tzc_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#tzc_svg__a)" xlinkHref="#tzc_svg__b" />
      <use fill="#374851" xlinkHref="#tzc_svg__b" />
      <use
        fill="url(#tzc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#tzc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#tzc_svg__d)" xlinkHref="#tzc_svg__e" />
      <use fill="#FFF" xlinkHref="#tzc_svg__e" />
    </g>
  </svg>
);

export default SvgTzc;

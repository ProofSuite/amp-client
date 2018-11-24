import React from 'react';

const SvgOax = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="oax_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="oax_svg__b" cx={16} cy={15} r={15} />
      <filter id="oax_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="oax_svg__e"
        d="M14.09 17.668l-.623 1.33h-1.382L15.838 11l2.503 5.333h-1.415l-1.12-2.315-1.122 2.354-.594 1.296zm5.454 1.3l2.93-3.95-2.951-3.98h1.615l2.141 2.91-.779 1.07.779 1.07-2.14 2.91h-2.963l-.626-1.33h1.382l.612 1.3zm4.526-3.967l-.791-1.087 2.141-2.91H27L24.07 15zm0 0L27 18.999h-1.58l-2.14-2.91.79-1.088zm-12.648-2.842a3.965 3.965 0 0 1 1.085 2.843 4.124 4.124 0 0 1-1.085 2.842C10.7 18.653 9.807 19 8.754 19a3.575 3.575 0 0 1-2.668-1.156A4 4 0 0 1 5 15.002a3.965 3.965 0 0 1 .691-2.315l.92.98a2.822 2.822 0 0 0 .362 3.265 2.396 2.396 0 0 0 1.78.81c.672 0 1.314-.293 1.78-.81a2.65 2.65 0 0 0 .723-1.895 2.82 2.82 0 0 0-.724-1.896 2.333 2.333 0 0 0-1.78-.77 2.19 2.19 0 0 0-1.249.35l-.92-.98a3.416 3.416 0 0 1 2.173-.736 3.51 3.51 0 0 1 2.665 1.154z"
      />
      <filter id="oax_svg__d" width="115.9%" height="143.8%" x="-8%" y="-15.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#oax_svg__a)" xlinkHref="#oax_svg__b" />
      <use fill="#164B79" fillRule="evenodd" xlinkHref="#oax_svg__b" />
      <use
        fill="url(#oax_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#oax_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#oax_svg__d)" xlinkHref="#oax_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#oax_svg__e" />
    </g>
  </svg>
);

export default SvgOax;

import React from 'react';

const SvgLend = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="lend_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="lend_svg__b" cx={16} cy={15} r={15} />
      <filter id="lend_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="lend_svg__e"
        d="M17.147 19.446L11.697 25l-1.554-1.705 3.777-3.85L10 15.452l1.673-1.706 5.474 5.7zm3.18-3.191L22 14.549l-3.92-3.995 3.777-3.849L20.303 5l-5.474 5.554 5.498 5.7zm-7.96-3.167l5.498 5.7 1.673-1.705-5.498-5.603-1.673 1.608z"
      />
      <filter id="lend_svg__d" width="129.2%" height="117.5%" x="-14.6%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#lend_svg__a)" xlinkHref="#lend_svg__b" />
      <use fill="#0FA9C9" fillRule="evenodd" xlinkHref="#lend_svg__b" />
      <use
        fill="url(#lend_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#lend_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#lend_svg__d)" xlinkHref="#lend_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#lend_svg__e" />
    </g>
  </svg>
);

export default SvgLend;

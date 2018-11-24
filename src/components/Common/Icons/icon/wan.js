import React from 'react';

const SvgWan = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="wan_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="wan_svg__b" cx={16} cy={15} r={15} />
      <filter id="wan_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="wan_svg__e"
        d="M7 10.09l2.667 1.13v6.353L16 13.786l6.394 3.787V11.22L25 10.09v11.974l-9-5.315-9 5.315V10.09zm.303-.489L16 4.5l8.758 5.101-2.364.978L16 6.883l-6.333 3.696L7.303 9.6zm1.879 11.821l1.97-1.13 4.878 2.825 4.818-2.825 2.03 1.13L16.03 25.5l-6.848-4.078z"
      />
      <filter id="wan_svg__d" width="119.4%" height="116.7%" x="-9.7%" y="-6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#wan_svg__a)" xlinkHref="#wan_svg__b" />
      <use fill="#136AAD" xlinkHref="#wan_svg__b" />
      <use
        fill="url(#wan_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#wan_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#wan_svg__d)" xlinkHref="#wan_svg__e" />
      <use fill="#FFF" xlinkHref="#wan_svg__e" />
    </g>
  </svg>
);

export default SvgWan;

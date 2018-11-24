import React from 'react';

const SvgNio = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="nio_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="nio_svg__b" cx={16} cy={15} r={15} />
      <filter id="nio_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="nio_svg__e"
        d="M16 12.764h-4.822L16 4.5l4.822 8.264H16zm.655 9.736l2.515-4.309 2.411-4.131L26.5 22.5h-9.845zm-3.825-4.309l2.515 4.309H5.5l4.919-8.44 2.41 4.131z"
      />
      <filter id="nio_svg__d" width="116.7%" height="119.4%" x="-8.3%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#nio_svg__a)" xlinkHref="#nio_svg__b" />
      <use fill="#70C9C9" fillRule="evenodd" xlinkHref="#nio_svg__b" />
      <use
        fill="url(#nio_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#nio_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeLinejoin="square" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#nio_svg__d)" xlinkHref="#nio_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#nio_svg__e" />
    </g>
  </svg>
);

export default SvgNio;

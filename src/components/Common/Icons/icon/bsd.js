import React from 'react';

const SvgBsd = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bsd_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="bsd_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="bsd_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#bsd_svg__a)" xlinkHref="#bsd_svg__b" />
        <use fill="#000" xlinkHref="#bsd_svg__b" />
        <use
          fill="url(#bsd_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#bsd_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path d="M27 14.2H5l12.8-4.3L19.6 4 27 14.2zM5.1 15.6h21.8l-12.8 4.2-1.8 6.1-7.2-10.3z" fill="#FFF" />
    </g>
  </svg>
);

export default SvgBsd;

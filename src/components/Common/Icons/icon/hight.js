import React from 'react';

const SvgHight = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hight_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="hight_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="hight_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#hight_svg__a)" xlinkHref="#hight_svg__b" />
        <use fill="#117FC0" xlinkHref="#hight_svg__b" />
        <use
          fill="url(#hight_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#hight_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path
        d="M25.622 9.805L17.87 22.582h-4.622l3.552-5.863h-3.53l-4.116 6.787A10.913 10.913 0 0 0 25.62 9.81l.003-.005zm-6.768-2.294l-3.364 5.537h3.536l3.918-6.462A10.913 10.913 0 0 0 6.48 20.281l7.748-12.77h4.626z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgHight;

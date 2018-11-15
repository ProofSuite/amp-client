import React from 'react';

const SvgMoac = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="moac_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="moac_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="moac_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#moac_svg__a)" xlinkHref="#moac_svg__b" />
        <use fill="#000" xlinkHref="#moac_svg__b" />
        <use
          fill="url(#moac_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#moac_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path
        d="M15.792 14.792L9.423 8.423l-.138-.208L7.02 6v17.515h2.284V11.4l4.916 4.985 1.592 1.592 1.592-1.592L22.32 11.4v12.115h2.284V6L22.32 8.215z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgMoac;

import React from 'react';

const SvgEmc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="emc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="emc_svg__b" cx={16} cy={15} r={15} />
      <filter id="emc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path id="emc_svg__e" d="M8 7v3.2h6.4v3.2H8v3.2h9.6v-6.4h3.2v9.6H8V23h16V7z" />
      <filter id="emc_svg__d" width="121.9%" height="121.9%" x="-10.9%" y="-7.8%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#emc_svg__a)" xlinkHref="#emc_svg__b" />
      <use fill="#B49FFC" xlinkHref="#emc_svg__b" />
      <use
        fill="url(#emc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#emc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#emc_svg__d)" xlinkHref="#emc_svg__e" />
      <use fill="#FFF" xlinkHref="#emc_svg__e" />
    </g>
  </svg>
);

export default SvgEmc;

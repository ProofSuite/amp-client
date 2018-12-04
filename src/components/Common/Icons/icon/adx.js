import React from 'react';

const SvgAdx = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="adx_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="adx_svg__b" cx={16} cy={15} r={15} />
      <filter id="adx_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="adx_svg__e"
        d="M11.587 7.602L16 12.208l4.305-4.606L23 10.36 18.604 15 23 19.603l-2.695 2.793L16 17.792l-4.413 4.604L9 19.68l4.36-4.706L9 10.36l2.587-2.757zm.355-.376L15.982 3l4.04 4.226-2.126 2.265-1.914-2.114-1.914 2.114-2.126-2.265zm0 15.548l2.126-2.265 1.914 2.114 1.914-2.114 2.126 2.265L15.982 27l-4.04-4.226z"
      />
      <filter id="adx_svg__d" width="125%" height="114.6%" x="-12.5%" y="-5.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#adx_svg__a)" xlinkHref="#adx_svg__b" />
      <use fill="#1B75BC" xlinkHref="#adx_svg__b" />
      <use
        fill="url(#adx_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#adx_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#adx_svg__d)" xlinkHref="#adx_svg__e" />
      <use fill="#FFF" xlinkHref="#adx_svg__e" />
    </g>
  </svg>
);

export default SvgAdx;

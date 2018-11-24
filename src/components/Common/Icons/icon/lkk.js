import React from 'react';

const SvgLkk = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="lkk_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="lkk_svg__b" cx={16} cy={15} r={15} />
      <filter id="lkk_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="lkk_svg__e"
        d="M10.005 25v-3.656L16 15.24l5.976 6.105V25L16 18.894 10.005 25zM5 12.633h8.469L16 15.24H7.531L5 12.633zm22 0l-2.531 2.606H16V4l2.531 2.586v6.047H27z"
      />
      <filter id="lkk_svg__d" width="115.9%" height="116.7%" x="-8%" y="-6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#lkk_svg__a)" xlinkHref="#lkk_svg__b" />
      <use fill="#9D01EB" xlinkHref="#lkk_svg__b" />
      <use
        fill="url(#lkk_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#lkk_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#lkk_svg__d)" xlinkHref="#lkk_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#lkk_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgLkk;

import React from 'react';

const SvgVtc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="vtc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="vtc_svg__b" cx={16} cy={15} r={15} />
      <filter id="vtc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="vtc_svg__e"
        d="M3.467 15.534l1.829-2.082H11.8l3.996 5.098L26.254 4.063a13.317 13.317 0 0 1 1.743 1.912A13.97 13.97 0 0 1 29.4 8.269L16.561 26.028c-.242.254-.497.382-.765.382-.267 0-.537-.128-.807-.382l-8.12-10.494H3.467z"
      />
      <filter id="vtc_svg__d" width="113.5%" height="115.7%" x="-6.7%" y="-5.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#vtc_svg__a)" xlinkHref="#vtc_svg__b" />
      <use fill="#048657" xlinkHref="#vtc_svg__b" />
      <use
        fill="url(#vtc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#vtc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#vtc_svg__d)" xlinkHref="#vtc_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#vtc_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgVtc;

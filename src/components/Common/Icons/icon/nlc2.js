import React from 'react';

const SvgNlc2 = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="nlc2_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="nlc2_svg__b" cx={16} cy={15} r={15} />
      <filter id="nlc2_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="nlc2_svg__e"
        d="M18.151 12.719L16.21 8.903c.404-.88.606-1.38.606-1.495 0-.413-.272-.715-.815-.908h5.948c-.733.33-1.385 1.155-1.955 2.476l-1.842 3.743zm-2.916 5.928l-.905 1.84h5.337c2.417 0 4.033-.453 4.848-1.36L21.663 23.5H7.078c1.575-.303 3.164-2.2 4.766-5.694.54-1.074 1.035-2.066 1.487-2.974l1.904 3.815zM5 19.25c1.181-.701 5.5-8.172 5.5-10.274 0-.495-.299-.963-.896-1.403h4.644l4.033 7.922 3.912-7.922H27c-2.037.536-6.07 10.146-6.07 11.264 0 .22.04.358.122.413h-4.237l-3.626-7.262-3.585 7.262H5z"
      />
      <filter id="nlc2_svg__d" width="115.9%" height="120.6%" x="-8%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#nlc2_svg__a)" xlinkHref="#nlc2_svg__b" />
      <use fill="#F28F01" xlinkHref="#nlc2_svg__b" />
      <use
        fill="url(#nlc2_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#nlc2_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#nlc2_svg__d)" xlinkHref="#nlc2_svg__e" />
      <use fill="#FFF" xlinkHref="#nlc2_svg__e" />
    </g>
  </svg>
);

export default SvgNlc2;

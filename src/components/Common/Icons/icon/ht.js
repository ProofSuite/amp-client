import React from 'react';

const SvgHt = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ht_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="ht_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="ht_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#ht_svg__a)" xlinkHref="#ht_svg__b" />
        <use fill="#2A3069" fillRule="evenodd" xlinkHref="#ht_svg__b" />
        <use
          fill="url(#ht_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#ht_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g fill="#FFF">
        <path d="M18.053 10.467c0-3.08-1.493-5.694-2.613-6.534 0 0-.093-.093-.093.094-.094 5.88-3.08 7.466-4.667 9.706-3.827 4.947-.28 10.454 3.36 11.48 2.053.56-.467-1.026-.747-4.293-.466-4.107 4.76-7.093 4.76-10.453" />
        <path d="M20.013 12.52c-.186.747-.933 2.333-1.96 3.827-3.453 4.946-1.493 7.373-.373 8.68.653.746 0 0 1.587-.747.093-.093 3.173-1.68 3.453-5.32.373-3.547-1.867-5.787-2.707-6.44" />
      </g>
    </g>
  </svg>
);

export default SvgHt;

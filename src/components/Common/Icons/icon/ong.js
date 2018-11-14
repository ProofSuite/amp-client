import React from 'react';

const SvgOng = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ong_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="ong_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="ong_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1)" fillRule="nonzero">
        <use fill="#000" filter="url(#ong_svg__a)" xlinkHref="#ong_svg__b" />
        <use fill="#000" xlinkHref="#ong_svg__b" />
        <use
          fill="url(#ong_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#ong_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g transform="translate(6 5)" fill="#FFF">
        <path d="M9.948 19.374c5.218 0 9.17-3.497 9.991-8.071h-4.452c-.666 2.43-2.731 4.207-5.486 4.207-2.735 0-4.827-1.79-5.52-4.207H0c.79 4.59 4.71 8.071 9.948 8.071z" />
        <circle cx={9.974} cy={2.297} r={2.297} />
        <path d="M4.232 11.303v-.047c0-3.265 2.34-5.932 5.714-5.932 3.374 0 5.762 2.712 5.768 5.979H4.232z" />
      </g>
    </g>
  </svg>
);

export default SvgOng;

import React from 'react';

const SvgTnc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="tnc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="tnc_svg__b" cx={16} cy={15} r={15} />
      <filter id="tnc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="tnc_svg__e"
        d="M18.226 12.804l5.633 9.696H8.245l1.871-3.103 8.412.002-2.132-3.48 1.83-3.115zm-5.75 2.256l5.727-9.52L26 18.667h-3.744l-4.12-7.16-2.001 3.554h-3.66zm4.885 3.619L6 18.625 13.807 5.5l1.86 3.146-4.303 6.918h4.167l1.83 3.115z"
      />
      <filter id="tnc_svg__d" width="117.5%" height="120.6%" x="-8.8%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#tnc_svg__a)" xlinkHref="#tnc_svg__b" />
        <use fill="#FF439B" fillRule="evenodd" xlinkHref="#tnc_svg__b" />
        <use
          fill="url(#tnc_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#tnc_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#tnc_svg__d)" xlinkHref="#tnc_svg__e" />
      <use fill="#FFF" xlinkHref="#tnc_svg__e" />
    </g>
  </svg>
);

export default SvgTnc;

import React from 'react';

const SvgRyo = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ryo_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="ryo_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="ryo_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#ryo_svg__a)" xlinkHref="#ryo_svg__b" />
        <use fill="#3D58B0" xlinkHref="#ryo_svg__b" />
        <use
          fill="url(#ryo_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#ryo_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g fill="#FFF">
        <path d="M15.987 4C9.927 4 5 8.928 5 14.987s4.928 10.986 10.987 10.986 10.987-4.927 10.987-10.986C26.974 8.927 22.046 4 15.987 4zm0 1.496a9.48 9.48 0 0 1 9.49 9.49 9.48 9.48 0 0 1-9.49 9.491 9.48 9.48 0 0 1-9.49-9.49 9.48 9.48 0 0 1 9.49-9.49z" />
        <path d="M11.905 10.93v8.114h8.164V10.93h-8.164zm1.33 1.33h5.504v5.454h-5.504V12.26z" />
      </g>
    </g>
  </svg>
);

export default SvgRyo;

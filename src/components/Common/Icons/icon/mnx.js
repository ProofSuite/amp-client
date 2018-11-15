import React from 'react';

const SvgMnx = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="mnx_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="mnx_svg__b" cx={16} cy={15} r={15} />
      <filter id="mnx_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="mnx_svg__e"
        d="M14.863 25.986C9.32 25.405 5 20.708 5 15 5 9.292 9.32 4.595 14.863 4.014v3.37A7.7 7.7 0 0 0 8.336 15a7.7 7.7 0 0 0 6.527 7.616v3.37zM17.038 4c5.23.479 9.403 4.617 9.948 9.837h-3.363a7.7 7.7 0 0 0-6.585-6.474V4zM27 16.017c-.482 5.29-4.684 9.5-9.962 9.983v-3.363a7.7 7.7 0 0 0 6.606-6.62H27z"
      />
      <filter id="mnx_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#mnx_svg__a)" xlinkHref="#mnx_svg__b" />
        <use fill="#00ADEF" fillRule="evenodd" xlinkHref="#mnx_svg__b" />
        <use
          fill="url(#mnx_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#mnx_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#mnx_svg__d)" xlinkHref="#mnx_svg__e" />
      <use fill="#FFF" xlinkHref="#mnx_svg__e" />
    </g>
  </svg>
);

export default SvgMnx;

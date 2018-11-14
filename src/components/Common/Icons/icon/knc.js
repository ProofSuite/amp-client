import React from 'react';

const SvgKnc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="knc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="knc_svg__b" cx={16} cy={15} r={15} />
      <filter id="knc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="knc_svg__e"
        d="M15.086 13.462l6.676 7.018L15.245 26l-.159-12.538zm.318-.473L22 9.677l-.238 10.094-6.358-6.782zm-.397-.552V4l6.914 5.204-6.914 3.233zm-.477-8.2l.238 21.211-3.655-5.125L10 9.362l4.53-5.125z"
      />
      <filter id="knc_svg__d" width="129.2%" height="115.9%" x="-14.6%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#knc_svg__a)" xlinkHref="#knc_svg__b" />
        <use fill="#188C92" fillRule="evenodd" xlinkHref="#knc_svg__b" />
        <use
          fill="url(#knc_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#knc_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#knc_svg__d)" xlinkHref="#knc_svg__e" />
      <use fill="#FFF" xlinkHref="#knc_svg__e" />
    </g>
  </svg>
);

export default SvgKnc;

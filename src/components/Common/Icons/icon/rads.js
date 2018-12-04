import React from 'react';

const SvgRads = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="rads_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="rads_svg__b" cx={16} cy={15} r={15} />
      <filter id="rads_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="rads_svg__e"
        d="M11.47 6.661a3.808 3.808 0 1 1 0 7.616 3.808 3.808 0 0 1 0-7.616zm3.807 12.87a3.808 3.808 0 1 1-3.808-3.808 5.253 5.253 0 0 0 5.253-5.253 3.808 3.808 0 1 1 3.808 3.808 5.253 5.253 0 0 0-5.252 5.253zm5.253 3.808a3.808 3.808 0 1 1 0-7.616 3.808 3.808 0 0 1 0 7.616zm0-2.66a1.148 1.148 0 1 0 0-2.296 1.148 1.148 0 0 0 0 2.296zm-9.06 0a1.148 1.148 0 1 0 0-2.296 1.148 1.148 0 0 0 0 2.296zm9.06-9.062a1.148 1.148 0 1 0 0-2.296 1.148 1.148 0 0 0 0 2.296zm-9.06 0a1.148 1.148 0 1 0 0-2.296 1.148 1.148 0 0 0 0 2.296z"
      />
      <filter id="rads_svg__d" width="121%" height="121%" x="-10.5%" y="-7.5%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#rads_svg__a)" xlinkHref="#rads_svg__b" />
      <use fill="#9D4BEF" xlinkHref="#rads_svg__b" />
      <use
        fill="url(#rads_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#rads_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#rads_svg__d)" xlinkHref="#rads_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#rads_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgRads;

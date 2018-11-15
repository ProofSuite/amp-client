import React from 'react';

const SvgOmni = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="omni_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="omni_svg__b" cx={16} cy={15} r={15} />
      <filter id="omni_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="omni_svg__e"
        d="M10.065 5.888a10.93 10.93 0 0 0-3.19 3.196V5.888h3.19zm15.004 3.11a10.93 10.93 0 0 0-3.134-3.11h3.134v3.11zm-3.088 15.084a10.933 10.933 0 0 0 3.088-3.08v3.08h-3.088zM6.875 20.916a10.93 10.93 0 0 0 3.144 3.166H6.875v-3.166zM26 15c0 5.514-4.486 10-10 10S6 20.514 6 15 10.486 5 16 5s10 4.486 10 10zm-10 7.292c4.02 0 7.292-3.271 7.292-7.292 0-4.02-3.271-7.292-7.292-7.292-4.02 0-7.292 3.271-7.292 7.292 0 4.02 3.271 7.292 7.292 7.292z"
      />
      <filter id="omni_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#omni_svg__a)" xlinkHref="#omni_svg__b" />
      <use fill="#1C347A" xlinkHref="#omni_svg__b" />
      <use
        fill="url(#omni_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#omni_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#omni_svg__d)" xlinkHref="#omni_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#omni_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgOmni;

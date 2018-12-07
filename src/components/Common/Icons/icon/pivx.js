import React from 'react';

const SvgPivx = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="pivx_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="pivx_svg__b" cx={16} cy={15} r={15} />
      <filter id="pivx_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="pivx_svg__e"
        d="M17.153 10.741v2.255H10v-2.255h7.153zM23 11.831c0 3.208-2.29 5.395-5.528 5.395H13.93V23.5h-2.6v-8.693h5.925c1.935 0 3.095-1.103 3.095-2.976 0-1.837-1.15-2.913-3.07-2.913h-1.687l-4.544.014V6.5h6.41c3.088 0 5.296 1.912 5.522 4.831l.019.5z"
      />
      <filter id="pivx_svg__d" width="126.9%" height="120.6%" x="-13.5%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#pivx_svg__a)" xlinkHref="#pivx_svg__b" />
      <use fill="#5E4778" fillRule="evenodd" xlinkHref="#pivx_svg__b" />
      <use
        fill="url(#pivx_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#pivx_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#pivx_svg__d)" xlinkHref="#pivx_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#pivx_svg__e" />
    </g>
  </svg>
);

export default SvgPivx;

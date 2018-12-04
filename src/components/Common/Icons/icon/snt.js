import React from 'react';

const SvgSnt = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="snt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="snt_svg__b" cx={16} cy={15} r={15} />
      <filter id="snt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="snt_svg__e"
        d="M13.3 14.02a9.144 9.144 0 0 0-1.664.144c.452-4.18 3.936-7.346 8.084-7.346 2.54 0 4.28 1.244 4.28 3.818 0 2.575-2.089 3.819-5.136 3.819-2.25 0-3.314-.434-5.564-.434m-.164 1.524C10.089 15.545 8 16.79 8 19.364s1.74 3.818 4.28 3.818c4.148 0 7.632-3.165 8.084-7.346a9.144 9.144 0 0 1-1.664.144c-2.25 0-3.315-.435-5.564-.435"
      />
      <filter id="snt_svg__d" width="121.9%" height="121.4%" x="-10.9%" y="-7.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#snt_svg__a)" xlinkHref="#snt_svg__b" />
      <use fill="#5B6DEE" fillRule="evenodd" xlinkHref="#snt_svg__b" />
      <use
        fill="url(#snt_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#snt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#snt_svg__d)" xlinkHref="#snt_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#snt_svg__e" />
    </g>
  </svg>
);

export default SvgSnt;

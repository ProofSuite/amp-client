import React from 'react';

const SvgR = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="r_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="r_svg__b" cx={16} cy={15} r={15} />
      <filter id="r_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="r_svg__e"
        d="M10.5 23.638l3.467-1.812V9.745l4.952 2.778-3.714 1.933v3.987L23.5 24v-3.745l-5.076-3.503 4.209-2.175v-3.866L13.967 6 10.5 7.812z"
      />
      <filter id="r_svg__d" width="126.9%" height="119.4%" x="-13.5%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#r_svg__a)" xlinkHref="#r_svg__b" />
      <use fill="#771A4E" fillRule="evenodd" xlinkHref="#r_svg__b" />
      <use
        fill="url(#r_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#r_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#r_svg__d)" xlinkHref="#r_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#r_svg__e" />
    </g>
  </svg>
);

export default SvgR;

import React from 'react';

const SvgLink = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="link_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="link_svg__b" cx={16} cy={15} r={15} />
      <filter id="link_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="link_svg__e"
        d="M15 17.618V20a1 1 0 0 0 2 0v-2.382a1.5 1.5 0 1 0-2 0zM10 13v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zm12 0h-9.5v-1.9c0-1.988 1.567-3.6 3.5-3.6s3.5 1.612 3.5 3.6V13H16z"
      />
      <filter id="link_svg__d" width="125%" height="119.4%" x="-12.5%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#link_svg__a)" xlinkHref="#link_svg__b" />
      <use fill="#01A6FB" xlinkHref="#link_svg__b" />
      <use
        fill="url(#link_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#link_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#link_svg__d)" xlinkHref="#link_svg__e" />
      <use fill="#FFF" xlinkHref="#link_svg__e" />
    </g>
  </svg>
);

export default SvgLink;

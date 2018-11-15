import React from 'react';

const SvgXmg = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="xmg_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xmg_svg__b" cx={16} cy={15} r={15} />
      <filter id="xmg_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="xmg_svg__e"
        d="M23 18.54L21.517 24H9v-.913l6.79-7.719-6.653-8.376V6h12.331l.43 4.252h-.79c-.521-.969-.963-1.694-1.328-2.175-.364-.481-.689-.78-.975-.899-.202-.098-.48-.168-.834-.21a10.88 10.88 0 0 0-1.273-.065h-3.503l5.249 6.54v.315l-6.488 7.365h7.405c.364 0 .698-.087 1-.26.302-.174.564-.392.785-.654a5.63 5.63 0 0 0 .615-.873 8.22 8.22 0 0 0 .498-1.022l.741.226z"
      />
      <filter id="xmg_svg__d" width="125%" height="119.4%" x="-12.5%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#xmg_svg__a)" xlinkHref="#xmg_svg__b" />
      <use fill="#004A80" xlinkHref="#xmg_svg__b" />
      <use
        fill="url(#xmg_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#xmg_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#xmg_svg__d)" xlinkHref="#xmg_svg__e" />
      <use fill="#FFF" xlinkHref="#xmg_svg__e" />
    </g>
  </svg>
);

export default SvgXmg;

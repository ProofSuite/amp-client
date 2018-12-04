import React from 'react';

const SvgXzc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="xzc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xzc_svg__b" cx={16} cy={15} r={15} />
      <filter id="xzc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="xzc_svg__e"
        d="M18.725 18.148h3.39v2.964H11.93L24.573 8.46a1.468 1.468 0 0 0 .32-1.574A1.454 1.454 0 0 0 23.55 6H8.45A1.44 1.44 0 0 0 7 7.452v10.696l6.275-6.28h-3.39v-2.98h10.168L7.427 21.54a1.468 1.468 0 0 0-.32 1.574c.229.535.748.886 1.343.886h15.1A1.45 1.45 0 0 0 25 22.548v-10.68l-6.275 6.28z"
      />
      <filter id="xzc_svg__d" width="119.4%" height="119.4%" x="-9.7%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#xzc_svg__a)" xlinkHref="#xzc_svg__b" />
      <use fill="#23B852" xlinkHref="#xzc_svg__b" />
      <use
        fill="url(#xzc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#xzc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#xzc_svg__d)" xlinkHref="#xzc_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#xzc_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgXzc;

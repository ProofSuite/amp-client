import React from 'react';

const SvgStorm = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="storm_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="storm_svg__b" cx={16} cy={15} r={15} />
      <filter id="storm_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path id="storm_svg__e" d="M23 5l-12.029 8.25 6.076 3.875L9 25l13.302-9.208-5.994-3.875z" />
      <filter id="storm_svg__d" width="125%" height="117.5%" x="-12.5%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#storm_svg__a)" xlinkHref="#storm_svg__b" />
      <use fill="#080D98" xlinkHref="#storm_svg__b" />
      <use
        fill="url(#storm_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#storm_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#storm_svg__d)" xlinkHref="#storm_svg__e" />
      <use fill="#FFF" xlinkHref="#storm_svg__e" />
    </g>
  </svg>
);

export default SvgStorm;

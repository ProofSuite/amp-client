import React from 'react';

const SvgWpr = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="wpr_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="wpr_svg__b" cx={16} cy={15} r={15} />
      <filter id="wpr_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="wpr_svg__e"
        d="M4.328 5.578a15.09 15.09 0 0 1 2.614-2.535l4.16 14.875 1.974-8.438h3.739l1.972 8.438 2.337-8.438h3.75l.034.15 3.727 13.458a15.075 15.075 0 0 1-2.498 2.968l-3.141-11.348-1.96 7.08-.035.149h-4.186l-1.87-6.932-1.87 6.932H8.89l-.034-.15L4.328 5.578z"
      />
      <filter id="wpr_svg__d" width="114.4%" height="115.2%" x="-7.2%" y="-5.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#wpr_svg__a)" xlinkHref="#wpr_svg__b" />
      <use fill="#FFE600" xlinkHref="#wpr_svg__b" />
      <use
        fill="url(#wpr_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#wpr_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#wpr_svg__d)" xlinkHref="#wpr_svg__e" />
      <use fill="#FFF" xlinkHref="#wpr_svg__e" />
    </g>
  </svg>
);

export default SvgWpr;

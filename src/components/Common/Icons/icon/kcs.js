import React from 'react';

const SvgKcs = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="kcs_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="kcs_svg__b" cx={16} cy={15} r={15} />
      <filter id="kcs_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="kcs_svg__e"
        d="M13.54 15l5.174 5.33 3.265-3.363a1.446 1.446 0 0 1 2.088 0 1.554 1.554 0 0 1 0 2.152l-4.309 4.44a1.456 1.456 0 0 1-2.088 0l-6.216-6.406v3.808c0 .836-.666 1.522-1.477 1.522-.816 0-1.477-.682-1.477-1.522V9.04c0-.84.661-1.522 1.477-1.522.815 0 1.477.682 1.477 1.522v3.808l6.216-6.406a1.456 1.456 0 0 1 2.088 0l4.31 4.44a1.554 1.554 0 0 1 0 2.152 1.446 1.446 0 0 1-2.09 0L18.715 9.67 13.54 15zm5.176-1.523c.816 0 1.478.682 1.478 1.523 0 .841-.662 1.523-1.478 1.523s-1.478-.682-1.478-1.523c0-.841.662-1.523 1.478-1.523z"
      />
      <filter id="kcs_svg__d" width="121.9%" height="119.4%" x="-10.9%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#kcs_svg__a)" xlinkHref="#kcs_svg__b" />
      <use fill="#0093DD" xlinkHref="#kcs_svg__b" />
      <use
        fill="url(#kcs_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#kcs_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#kcs_svg__d)" xlinkHref="#kcs_svg__e" />
      <use fill="#FFF" xlinkHref="#kcs_svg__e" />
    </g>
  </svg>
);

export default SvgKcs;

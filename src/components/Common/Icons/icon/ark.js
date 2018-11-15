import React from 'react';

const SvgArk = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="ark_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ark_svg__b" cx={16} cy={15} r={15} />
      <filter id="ark_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ark_svg__e"
        d="M15.947 12.347L5 23.89 15.996 6 27 24 15.947 12.347zm1.588 4.585h-3.422l1.76-1.936 1.662 1.953v-.017zm-6.6 3.177v-.024l1.941-1.987v-.009l5.92-.025 1.998 2.045h-9.858z"
      />
      <filter id="ark_svg__d" width="115.9%" height="119.4%" x="-8%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#ark_svg__a)" xlinkHref="#ark_svg__b" />
      <use fill="#F70000" fillRule="evenodd" xlinkHref="#ark_svg__b" />
      <use
        fill="url(#ark_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ark_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#ark_svg__d)" xlinkHref="#ark_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#ark_svg__e" />
    </g>
  </svg>
);

export default SvgArk;

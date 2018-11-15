import React from 'react';

const SvgGup = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="gup_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="gup_svg__b" cx={16} cy={15} r={15} />
      <filter id="gup_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="gup_svg__e"
        d="M15.99 11.679l-2.784-2.804A32.574 32.574 0 0 1 16 5a32.464 32.464 0 0 1 2.79 3.859l-2.8 2.82zm5.718 2.81c.786 2.202 1.939 4.404.84 6.518a7.503 7.503 0 0 1-3.112 3.135c-3.619 1.92-8.099.51-10.005-3.135-1.11-2.114.183-4.49.97-6.691.721-1.623 1.45-3.119 2.278-4.557l3.31 3.334 3.329-3.352c.875 1.514 1.631 3.072 2.39 4.749z"
      />
      <filter id="gup_svg__d" width="125%" height="117.5%" x="-12.5%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#gup_svg__a)" xlinkHref="#gup_svg__b" />
      <use fill="#37DCD8" fillRule="evenodd" xlinkHref="#gup_svg__b" />
      <use
        fill="url(#gup_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#gup_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#gup_svg__d)" xlinkHref="#gup_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#gup_svg__e" />
    </g>
  </svg>
);

export default SvgGup;

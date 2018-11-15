import React from 'react';

const SvgFtc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="ftc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ftc_svg__b" cx={16} cy={15} r={15} />
      <filter id="ftc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ftc_svg__e"
        d="M24.603 5s1.647 1.464.478 4.443a5.53 5.53 0 0 1-.914 1.506l-4.065 4.77-3.262 4.258s-3.746-.616-5.202.895l6.174.274s-1.318 1.443-6.52.41c0 0 .07 1.448 2.429 1.86 0 0-2.083.689-3.332-1.307 0 0 0 1.448 1.456 2.064 0 0-1.18.274-2.152-.963L8.03 24.994s-.345.069-.138-.273l1.387-1.648s.138-1.169-.696-.758c0 0-.553.205-.346.826 0 0-.834-.684.139-1.579L6.5 19.704l2.428 1.305-1.041-2.543 1.732 2.201s-.144-2.474.622-3.159c0 0 .207 2.406 1.18 2.612l-.07-5.018 1.042-.894.138 3.158s.276.342.552-.068c0 0 .627-1.032.627-4.054l1.663-1.58.208 1.238s.281.479.627.068l.345-2.405s2.22-2.543 8.05-5.565zm-11.1 13.95c5.754-5.29 8.81-10.444 8.804-10.444-2.842 1.99-8.804 10.445-8.804 10.445z"
      />
      <filter id="ftc_svg__d" width="118.4%" height="117.5%" x="-9.2%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#ftc_svg__a)" xlinkHref="#ftc_svg__b" />
      <use fill="#27323A" fillRule="evenodd" xlinkHref="#ftc_svg__b" />
      <use
        fill="url(#ftc_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ftc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#ftc_svg__d)" xlinkHref="#ftc_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#ftc_svg__e" />
    </g>
  </svg>
);

export default SvgFtc;

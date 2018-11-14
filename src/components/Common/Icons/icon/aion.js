import React from 'react';

const SvgAion = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="aion_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="aion_svg__b" cx={16} cy={15} r={15} />
      <filter id="aion_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="aion_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#aion_svg__a)" xlinkHref="#aion_svg__b" />
      <use fill="#00BFEC" fillRule="evenodd" xlinkHref="#aion_svg__b" />
      <use
        fill="url(#aion_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#aion_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" filter="url(#aion_svg__d)" transform="translate(5 4)">
        <path d="M10.971 18.15c-3.957 0-7.176-3.199-7.176-7.13 0-3.932 3.22-7.13 7.176-7.13 3.957 0 7.176 3.198 7.176 7.13 0 3.931-3.219 7.13-7.176 7.13zm0-12.864c-3.181 0-5.77 2.572-5.77 5.734 0 3.161 2.589 5.733 5.77 5.733 3.182 0 5.77-2.572 5.77-5.733 0-3.162-2.588-5.734-5.77-5.734zm5.025-2.415a9.638 9.638 0 0 0-5.025-1.406 9.67 9.67 0 0 0-4.666 1.198l-.684-1.22a11.083 11.083 0 0 1 5.35-1.376c2.04 0 4.032.558 5.761 1.614l-.736 1.19zm2.095 16.51l-.909-1.067a9.519 9.519 0 0 0 3.405-7.294h1.406c0 3.226-1.422 6.273-3.902 8.36zm-7.12 2.59c-2.557 0-5.049-.89-7.016-2.505l.896-1.076a9.667 9.667 0 0 0 6.12 2.185c1.56 0 3.048-.36 4.422-1.068l.647 1.24a11.107 11.107 0 0 1-5.069 1.225z" />
        <path
          d="M20.35 8.425a9.558 9.558 0 0 0-1.896-3.59l.9-.746a10.71 10.71 0 0 1 2.125 4.025l-1.128.311zM1.86 16.976A10.742 10.742 0 0 1 .067 11.02c0-2.962 1.18-5.728 3.323-7.789l.814.837a9.564 9.564 0 0 0-2.966 6.952c0 1.899.554 3.737 1.6 5.316l-.978.64z"
          opacity={0.5}
        />
      </g>
    </g>
  </svg>
);

export default SvgAion;

import React from 'react';

const SvgSalt = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="salt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="salt_svg__b" cx={16} cy={15} r={15} />
      <filter id="salt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path id="salt_svg__e" d="M16.5 9.445l5.804 12.214H10.696L16.5 9.445zM16.5 4L7 24h19L16.5 4z" />
      <filter id="salt_svg__d" width="118.4%" height="117.5%" x="-9.2%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#salt_svg__a)" xlinkHref="#salt_svg__b" />
      <use fill="#1BEEF4" fillRule="evenodd" xlinkHref="#salt_svg__b" />
      <use
        fill="url(#salt_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#salt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#salt_svg__d)" xlinkHref="#salt_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#salt_svg__e" />
    </g>
  </svg>
);

export default SvgSalt;

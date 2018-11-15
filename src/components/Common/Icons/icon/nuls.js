import React from 'react';

const SvgNuls = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="nuls_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="nuls_svg__b" cx={16} cy={15} r={15} />
      <filter id="nuls_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="nuls_svg__e"
        d="M14.403 18.36L16 20.464V25l-6-2.663V10.619c0-.173.077-.338.212-.453l.683-.585a.636.636 0 0 1 .923.097l5.465 7.164 3.019 1.846v-9.88l-2.668-1.331-.13 6.196-1.412-1.873-.064-6.8L22 7.779v11.664l-1.357 1.118-4.274-2.387-4.744-6.223-.065 9.454 2.825 1.447.018-4.492z"
      />
      <filter id="nuls_svg__d" width="129.2%" height="117.5%" x="-14.6%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#nuls_svg__a)" xlinkHref="#nuls_svg__b" />
      <use fill="#82BD39" xlinkHref="#nuls_svg__b" />
      <use
        fill="url(#nuls_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#nuls_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#nuls_svg__d)" xlinkHref="#nuls_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#nuls_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgNuls;

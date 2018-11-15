import React from 'react';

const SvgMco = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="mco_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="mco_svg__b" cx={16} cy={15} r={15} />
      <filter id="mco_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="mco_svg__e"
        d="M15.98 4.018l9.52 5.483v11L15.991 26l-.077-.019-9.414-5.48v-11l9.414-5.483h.066zm-.031 1.138L7.5 10.076v9.85l8.448 4.919 1.032-.597 7.52-4.325v-9.845l-7.52-4.35-1.031-.572zm-7.14 10.61l2.501-1.87 2.211 1.412v2.54l1.673 1.612-.001.756-1.612 1.51H12.22l-3.41-5.96zm7.903 4.452l-.003-.76 1.667-1.61v-2.54l2.187-1.43 2.496 1.889-3.393 5.942h-1.344l-1.61-1.491zm-2.37-4.91l-.814-2.131h4.838l-.798 2.131.236 2.382-1.867.004-1.845.003.25-2.389zm1.595-2.715l-4.598-.002.855-3.82h7.464l.9 3.825-4.621-.003z"
      />
      <filter id="mco_svg__d" width="118.4%" height="115.9%" x="-9.2%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#mco_svg__a)" xlinkHref="#mco_svg__b" />
      <use fill="#103F68" xlinkHref="#mco_svg__b" />
      <use
        fill="url(#mco_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#mco_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#mco_svg__d)" xlinkHref="#mco_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#mco_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgMco;

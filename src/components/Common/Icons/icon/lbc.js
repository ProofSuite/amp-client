import React from 'react';

const SvgLbc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="lbc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="lbc_svg__b" cx={16} cy={15} r={15} />
      <filter id="lbc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="lbc_svg__e"
        d="M24.176 16.184l-.797-.199.242-.97 2.485.621-.62 2.485-.971-.242.215-.862-8.872 5.493-9.839-4.916v-3.752l10.224-6.394 9.375 4.573v1.544l-9.759 6.063-7.247-3.593.444-.896 6.749 3.346 8.813-5.476v-.363L16.303 8.59 7.02 14.396v2.58l8.787 4.39 8.37-5.182z"
      />
      <filter id="lbc_svg__d" width="117.4%" height="123.2%" x="-8.7%" y="-8.3%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#lbc_svg__a)" xlinkHref="#lbc_svg__b" />
      <use fill="#006149" xlinkHref="#lbc_svg__b" />
      <use
        fill="url(#lbc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#lbc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#lbc_svg__d)" xlinkHref="#lbc_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#lbc_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgLbc;

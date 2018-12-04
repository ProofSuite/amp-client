import React from 'react';

const SvgRvn = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="rvn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="rvn_svg__b" cx={16} cy={15} r={15} />
      <filter id="rvn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="rvn_svg__e"
        d="M9.5 26l3.618-16.789 2.03 12.6L9.5 26zm3.688-16.885l5.497 12.709-3.443-.06-2.054-12.65zm.082-.096l7.2 1.023-1.668 11.782L13.27 9.019zm5.66 12.624l1.623-11.493 1.062 1.348-2.685 10.145zm1.517-11.71l-7.026-.999 6.326-2.082.7 3.081zm-7.06-1.107l4.306-2.985 2.054.903-6.36 2.082zm-.106-.036l.83-1.589 3.512-1.408-4.342 2.997zm.83-1.66l.396-1.24 2.894-.097-3.29 1.336zm.373-1.337l.933-.999 2.008.903-2.941.096zm.992-1.059l1.4-.686 1.81 2.118-3.21-1.432zm1.599-.602l2.089.915-.374 1.131-1.715-2.046zm1.785 2.082l.385-1.155.467 1.589-.852-.434zM16.923 4h1.529l.757.842a.048.048 0 0 1-.054.076L16.923 4zm2.416.963l3.11.868a.072.072 0 0 1 0 .14l-2.643.725-.467-1.733z"
      />
      <filter id="rvn_svg__d" width="126.9%" height="115.9%" x="-13.5%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#rvn_svg__a)" xlinkHref="#rvn_svg__b" />
      <use fill="#384182" xlinkHref="#rvn_svg__b" />
      <use
        fill="url(#rvn_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#rvn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#rvn_svg__d)" xlinkHref="#rvn_svg__e" />
      <use fill="#FFF" xlinkHref="#rvn_svg__e" />
    </g>
  </svg>
);

export default SvgRvn;

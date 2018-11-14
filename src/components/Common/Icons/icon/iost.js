import React from 'react';

const SvgIost = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="iost_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="iost_svg__b" cx={16} cy={15} r={15} />
      <filter id="iost_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="iost_svg__e"
        d="M24.5 10v10L16 25l-8.5-5V10L16 5l8.5 5zm-8.768 5.407l-.79.467 1.476.862.785-.463 2.099 1.235-3.131 1.84-6.495-3.786-.027 1.843 6.526 3.79 6.27-3.687-3.674-2.162.74-.437-1.476-.862-.735.434-1.03-.606.901-.533-1.476-.863-.897.53-1.754-1.032 3.13-1.841 4.328 2.529 1.586-.938-5.917-3.438-6.27 3.688 3.329 1.959-.628.37 1.476.863.623-.368 1.03.606z"
      />
      <filter id="iost_svg__d" width="120.6%" height="117.5%" x="-10.3%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#iost_svg__a)" xlinkHref="#iost_svg__b" />
      <use fill="#1C1C1C" xlinkHref="#iost_svg__b" />
      <use
        fill="url(#iost_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#iost_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#iost_svg__d)" xlinkHref="#iost_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#iost_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgIost;

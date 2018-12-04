import React from 'react';

const SvgCvc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="cvc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="cvc_svg__b" cx={16} cy={15} r={15} />
      <filter id="cvc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="cvc_svg__e"
        d="M17.161 15.778a2.342 2.342 0 0 0 1.33-2.106c0-1.294-1.062-2.343-2.37-2.343-1.31 0-2.373 1.049-2.373 2.343a2.34 2.34 0 0 0 1.332 2.106v2.894h2.081v-2.894m-1.04 6.722c-4.186 0-7.59-3.364-7.59-7.5s3.404-7.5 7.59-7.5c3.415 0 6.31 2.24 7.26 5.312h2.616C24.987 8.342 20.949 5 16.12 5 10.531 5 6 9.477 6 15s4.531 10 10.12 10c4.829 0 8.867-3.342 9.877-7.812H23.38c-.95 3.072-3.845 5.312-7.26 5.312"
      />
      <filter id="cvc_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#cvc_svg__a)" xlinkHref="#cvc_svg__b" />
      <use fill="#3AB03E" fillRule="evenodd" xlinkHref="#cvc_svg__b" />
      <use
        fill="url(#cvc_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#cvc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#cvc_svg__d)" xlinkHref="#cvc_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#cvc_svg__e" />
    </g>
  </svg>
);

export default SvgCvc;

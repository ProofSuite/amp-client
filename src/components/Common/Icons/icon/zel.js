import React from 'react';

const SvgZel = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="zel_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="zel_svg__b" cx={16} cy={15} r={15} />
      <filter id="zel_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="zel_svg__e"
        d="M5 14.615l4.495-2.538 4.494 2.538v4.847L9.495 22 5 19.462v-4.847zm13.01 0l4.495-2.538L27 14.615v4.847L22.505 22l-4.494-2.538v-4.847zm-.472 4.21l-1.577.867-1.499-.823V14.23l-4.1-2.316V10.23L15.961 7l5.598 3.23v1.73l-4.021 2.27v4.596z"
      />
      <filter id="zel_svg__d" width="115.9%" height="123.3%" x="-8%" y="-8.3%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#zel_svg__a)" xlinkHref="#zel_svg__b" />
        <use fill="#183C87" fillRule="evenodd" xlinkHref="#zel_svg__b" />
        <use
          fill="url(#zel_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#zel_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeLinejoin="square" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#zel_svg__d)" xlinkHref="#zel_svg__e" />
      <use fill="#FFF" xlinkHref="#zel_svg__e" />
    </g>
  </svg>
);

export default SvgZel;

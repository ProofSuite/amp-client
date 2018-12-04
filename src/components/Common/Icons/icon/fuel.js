import React from 'react';

const SvgFuel = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="fuel_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="fuel_svg__b" cx={16} cy={15} r={15} />
      <filter id="fuel_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="fuel_svg__e"
        d="M25.532 9h-6.495l-1.926 4.83h-6.074v-2.487h6.074L18 9H8.802a.43.43 0 0 0-.432.427v4.402H6.89L6 16.171h2.37v4.397c0 .238.196.432.438.432h4.451l.889-2.341h-3.111V16.17h5.037L14.148 21h2.963l2.074-4.83h6.38c.24 0 .435-.192.435-.429v-6.28A.465.465 0 0 0 25.532 9zm-2.05 4.46c0 .204-.167.37-.374.37h-3.034l1.037-2.486h1.995a.373.373 0 0 1 .377.368v1.747z"
      />
      <filter id="fuel_svg__d" width="117.5%" height="129.2%" x="-8.8%" y="-10.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#fuel_svg__a)" xlinkHref="#fuel_svg__b" />
      <use fill="#4096D0" fillRule="evenodd" xlinkHref="#fuel_svg__b" />
      <use
        fill="url(#fuel_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#fuel_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#fuel_svg__d)" xlinkHref="#fuel_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#fuel_svg__e" />
    </g>
  </svg>
);

export default SvgFuel;

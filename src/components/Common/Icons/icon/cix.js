import React from 'react';

const SvgCix = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="cix_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="cix_svg__b" cx={16} cy={15} r={15} />
      <filter id="cix_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="cix_svg__e"
        d="M24.668 17.863l-1.059-.663 2.31-.027.048-.026v.025l.954-.01-1.619 2.634-.145-1.27-7.364 4.063L15 18.86l-7.83 4.126v-.94l8.073-4.253 2.792 3.729 6.634-3.659zm-10.112-.905l-3.06 1.611V7.644h3.06v9.314zm8.653.481l-3.06 1.7V7.644h3.06v9.795z"
      />
      <filter id="cix_svg__d" width="117.7%" height="122.8%" x="-8.9%" y="-8.1%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
      <path
        id="cix_svg__g"
        d="M18.883 19.843l-.657.364-2.404-3.21V8.894h3.06v10.949zm-8.654-.607l-3.06 1.612V10.312h3.06v8.924z"
      />
      <filter id="cix_svg__f" width="129.9%" height="129.3%" x="-14.9%" y="-10.5%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#cix_svg__a)" xlinkHref="#cix_svg__b" />
      <use fill="#0576B4" fillRule="evenodd" xlinkHref="#cix_svg__b" />
      <use
        fill="url(#cix_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#cix_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#cix_svg__d)" xlinkHref="#cix_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#cix_svg__e" />
      <use fill="#000" filter="url(#cix_svg__f)" xlinkHref="#cix_svg__g" />
      <use fill="#FFF" fillOpacity={0.5} fillRule="evenodd" xlinkHref="#cix_svg__g" />
    </g>
  </svg>
);

export default SvgCix;

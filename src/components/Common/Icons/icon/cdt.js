import React from 'react';

const SvgCdt = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="cdt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="cdt_svg__b" cx={16} cy={15} r={15} />
      <filter id="cdt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="cdt_svg__e"
        d="M27 15.03c0 2.91-1.145 5.7-3.186 7.758A10.832 10.832 0 0 1 16.12 26v-2.802c3.948.012 7.325-2.857 7.984-6.782h-3.89c.154-.456.233-.934.234-1.416a4.78 4.78 0 0 0-.234-1.416h3.89c-.668-3.92-4.04-6.784-7.984-6.782V4c6.008.058 10.855 4.972 10.88 11.03zm-7.254 2.359h3.072c-1.136 3.305-4.472 5.3-7.893 4.72C11.505 21.527 9 18.541 9 15.043c0-3.497 2.505-6.483 5.925-7.064 3.421-.58 6.757 1.415 7.893 4.72h-3.072a4.72 4.72 0 0 0-1.316-1.327 4.299 4.299 0 0 0-5.965 1.327c-1.284 2.027-.695 4.72 1.316 6.015a4.299 4.299 0 0 0 5.965-1.326z"
      />
      <filter id="cdt_svg__d" width="119.4%" height="115.9%" x="-9.7%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#cdt_svg__a)" xlinkHref="#cdt_svg__b" />
      <use fill="#272731" fillRule="evenodd" xlinkHref="#cdt_svg__b" />
      <use
        fill="url(#cdt_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#cdt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#cdt_svg__d)" xlinkHref="#cdt_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#cdt_svg__e" />
    </g>
  </svg>
);

export default SvgCdt;

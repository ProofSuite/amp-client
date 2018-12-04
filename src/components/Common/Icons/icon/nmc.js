import React from 'react';

const SvgNmc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="nmc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="nmc_svg__b" cx={16} cy={15} r={15} />
      <filter id="nmc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="nmc_svg__e"
        d="M19.261 22.5l.001-.002a1.8 1.8 0 0 0 .458-.05c.876-.205 1.617-.97 1.793-1.796L25 7.556l-2.772-.014-2.286 8.568-6.18-8.597-.004.004.003-.01L12.74 7.5v.001a1.9 1.9 0 0 0-.459.049c-.875.206-1.616.971-1.793 1.796L7 22.445l2.773.012 2.285-8.568 6.18 8.598h.003l1.02.013zm-6.593-10.894l.483-1.81 6.181 8.599-.483 1.81-6.18-8.6z"
      />
      <filter id="nmc_svg__d" width="119.4%" height="123.3%" x="-9.7%" y="-8.3%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#nmc_svg__a)" xlinkHref="#nmc_svg__b" />
      <use fill="#186C9D" xlinkHref="#nmc_svg__b" />
      <use
        fill="url(#nmc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#nmc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#nmc_svg__d)" xlinkHref="#nmc_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#nmc_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgNmc;

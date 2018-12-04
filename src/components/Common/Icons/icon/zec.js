import React from 'react';

const SvgZec = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="zec_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="zec_svg__b" cx={16} cy={15} r={15} />
      <filter id="zec_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="zec_svg__e"
        d="M15.096 18.846h6.297v3.35h-3.875c.064.958.097 1.847.161 2.804h-3.261v-2.77h-3.876c0-1.093-.129-2.187.065-3.213.097-.547.678-1.026 1.033-1.504a462.137 462.137 0 0 1 3.714-4.581c.485-.582.969-1.129 1.518-1.778h-6.04v-3.35h3.586V5h3.132v2.735h3.908c0 1.128.129 2.222-.065 3.248-.097.547-.678 1.026-1.065 1.504a462.138 462.138 0 0 1-3.714 4.581 37.083 37.083 0 0 1-1.518 1.778z"
      />
      <filter id="zec_svg__d" width="131.8%" height="117.5%" x="-15.9%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#zec_svg__a)" xlinkHref="#zec_svg__b" />
      <use fill="#ECB244" xlinkHref="#zec_svg__b" />
      <use
        fill="url(#zec_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#zec_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#zec_svg__d)" xlinkHref="#zec_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#zec_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgZec;

import React from 'react';

const SvgKmd = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="kmd_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="kmd_svg__b" cx={16} cy={15} r={15} />
      <filter id="kmd_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="kmd_svg__e"
        d="M16 4l7.482 3.207c.223.095.4.275.494.5L27 15l-3.023 7.38a.932.932 0 0 1-.504.506L16 26l-7.473-3.114a.932.932 0 0 1-.504-.507L5 15l3.024-7.294a.932.932 0 0 1 .494-.5L16 4zm0 4.475l-4.568 1.957L9.475 15l1.957 4.568L16 21.525l4.568-1.957L22.525 15l-1.957-4.568L16 8.475zm0 1.957l3.263 1.305L20.568 15l-1.305 3.263L16 19.568l-3.263-1.305L11.432 15l1.305-3.263L16 10.432z"
      />
      <filter id="kmd_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#kmd_svg__a)" xlinkHref="#kmd_svg__b" />
      <use fill="#326464" xlinkHref="#kmd_svg__b" />
      <use
        fill="url(#kmd_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#kmd_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#kmd_svg__d)" xlinkHref="#kmd_svg__e" />
      <use fill="#FFF" xlinkHref="#kmd_svg__e" />
    </g>
  </svg>
);

export default SvgKmd;

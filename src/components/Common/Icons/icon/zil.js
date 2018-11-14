import React from 'react';

const SvgZil = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="zil_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="zil_svg__b" cx={16} cy={15} r={15} />
      <filter id="zil_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="zil_svg__d" width="125%" height="117.5%" x="-12.5%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#zil_svg__a)" xlinkHref="#zil_svg__b" />
      <use fill="#49C1BF" fillRule="evenodd" xlinkHref="#zil_svg__b" />
      <use
        fill="url(#zil_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#zil_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" filter="url(#zil_svg__d)" transform="translate(9 5)">
        <path fillOpacity={0.304} d="M0 1.281l11.114 5.383 2.845-1.282L2.891 0z" />
        <path
          fillOpacity={0.646}
          d="M11.114 6.651l2.845-1.281v2.865l-2.845 1.281V6.651zm0 13.284v-8.937l2.845-1.295v8.951l-2.845 1.281z"
        />
        <path d="M0 1.284v2.897l7.693 3.737L0 11.728v2.856l11.114 5.373v-2.874l-7.548-3.671 7.548-3.881V6.666z" />
      </g>
    </g>
  </svg>
);

export default SvgZil;

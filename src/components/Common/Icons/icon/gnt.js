import React from 'react';

const SvgGnt = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="gnt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="gnt_svg__b" cx={16} cy={15} r={15} />
      <filter id="gnt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="gnt_svg__e"
        d="M20.499 4.288l1.203 1.204-2.277 2.34c.48.73.738 1.591.738 2.479a4.448 4.448 0 0 1-1.258 3.131 4.183 4.183 0 0 1-2.217 1.226v2.039a4.273 4.273 0 0 1 2.213 1.22 4.451 4.451 0 0 1 1.262 3.136 4.451 4.451 0 0 1-1.262 3.135 4.262 4.262 0 0 1-3.07 1.302 4.24 4.24 0 0 1-3.07-1.302 4.474 4.474 0 0 1-1.261-3.135c0-1.18.448-2.299 1.258-3.132a4.183 4.183 0 0 1 2.217-1.225v-2.04a4.274 4.274 0 0 1-2.213-1.22A4.474 4.474 0 0 1 11.5 10.31c0-1.18.448-2.299 1.262-3.135a4.262 4.262 0 0 1 3.07-1.303c.86 0 1.687.262 2.395.749L20.5 4.288zm-4.667 14.057a2.53 2.53 0 0 0-1.857.79 2.751 2.751 0 0 0-.775 1.928c0 .725.275 1.402.775 1.927a2.58 2.58 0 0 0 1.857.79 2.53 2.53 0 0 0 1.856-.79 2.751 2.751 0 0 0 .775-1.927c0-.725-.275-1.402-.778-1.931a2.527 2.527 0 0 0-1.853-.787zm1.853-6.09a2.754 2.754 0 0 0 .778-1.931 2.7 2.7 0 0 0-.775-1.928 2.578 2.578 0 0 0-1.856-.79 2.53 2.53 0 0 0-1.857.79 2.751 2.751 0 0 0-.775 1.928c0 .725.275 1.402.775 1.927a2.58 2.58 0 0 0 1.857.79c.711 0 1.367-.276 1.853-.786z"
      />
      <filter id="gnt_svg__d" width="134.3%" height="116.5%" x="-17.2%" y="-5.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#gnt_svg__a)" xlinkHref="#gnt_svg__b" />
      <use fill="#001D57" xlinkHref="#gnt_svg__b" />
      <use
        fill="url(#gnt_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#gnt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#gnt_svg__d)" xlinkHref="#gnt_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#gnt_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgGnt;

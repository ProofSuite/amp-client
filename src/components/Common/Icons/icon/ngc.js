import React from 'react';

const SvgNgc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="ngc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ngc_svg__b" cx={16} cy={15} r={15} />
      <filter id="ngc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ngc_svg__e"
        d="M20.5 15.842L13.804 25l.247-7.441H12.5l.634-6.532 7.084-.976-2.326 5.925 2.608-.134zm-5.498 6.498v-1.75c0-.13-.11-.236-.246-.236a.241.241 0 0 0-.247.235v1.751c0 .13.11.236.247.236a.241.241 0 0 0 .246-.236zm-1.832-5.286h1.41l-.065 2.693a.258.258 0 0 0 .079.19c.052.051.123.08.197.08h.012a.27.27 0 0 0 .275-.258l.065-3.177h-1.41l.473-5.219a.21.21 0 0 0-.059-.165.231.231 0 0 0-.167-.07h-.04a.223.223 0 0 0-.226.197l-.544 5.729zm0-6.6L15.778 8.3c.14-2.155-1.27-2.492-1.27-2.492L14.72 5c2.326.673 1.974 3.232 1.974 3.232l3.383 1.414-6.907.809z"
      />
      <filter id="ngc_svg__d" width="143.8%" height="117.5%" x="-21.9%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ngc_svg__a)" xlinkHref="#ngc_svg__b" />
      <use fill="#F80000" xlinkHref="#ngc_svg__b" />
      <use
        fill="url(#ngc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ngc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#ngc_svg__d)" xlinkHref="#ngc_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#ngc_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgNgc;

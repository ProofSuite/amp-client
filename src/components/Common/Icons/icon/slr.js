import React from 'react';

const SvgSlr = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="slr_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="slr_svg__b" cx={16} cy={15} r={15} />
      <filter id="slr_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="slr_svg__e"
        d="M11.921 21c.117.364 1.565 1.864 3.072 1.864 2.234 0 3.539-1.348 3.539-3.298 0-1.806-.904-2.838-3.188-3.842-2.761-1.118-4.468-2.753-4.468-5.477C10.876 7.237 13.06 5 16.348 5c1.732 0 3.487 1.09 4.069 1.818L19.02 8.273c-.552-.344-1.215-1.209-2.747-1.209-2.309 0-3.188 1.577-3.188 2.896 0 1.807 1.03 2.696 3.363 3.728 2.862 1.262 4.318 2.839 4.318 5.677 0 2.983-1.944 5.635-5.935 5.635-1.632 0-3.375-1.09-4.423-2.424L11.921 21zm1.862-10.303c-.349-.727-.116-1.454-.116-1.454 8.844-1.455 7.215 7.15 7.215 7.15-.698-1.332-1.396-1.575-1.396-1.575.116-4.97-5.703-4.121-5.703-4.121zm3.957 7.879c.35.849-.054 1.732-.054 1.732-10.07 1.298-7.35-7.91-7.353-7.91.534 1.414 1.198 1.745 1.198 1.745-.19 5.766 6.209 4.433 6.209 4.433z"
      />
      <filter id="slr_svg__d" width="131.8%" height="117.5%" x="-15.9%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#slr_svg__a)" xlinkHref="#slr_svg__b" />
      <use fill="#FDA616" xlinkHref="#slr_svg__b" />
      <use
        fill="url(#slr_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#slr_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#slr_svg__d)" xlinkHref="#slr_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#slr_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgSlr;

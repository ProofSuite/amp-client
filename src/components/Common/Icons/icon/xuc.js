import React from 'react';

const SvgXuc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="xuc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xuc_svg__b" cx={16} cy={15} r={15} />
      <filter id="xuc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="xuc_svg__e"
        d="M27 15c0 6.075-4.925 11-11 11S5 21.075 5 15C5 8.924 9.925 4 16 4s11 4.925 11 11zm-3.77.346c.007-.125 0 0 0-.127 0-3.607-2.665-6.811-6.122-7.35v-2.1l-2.24.698V7.87c-3.455.538-6.102 3.52-6.102 7.125 0 3.69 2.77 6.73 6.344 7.165v2.068l2.24-.698v-1.446a7.23 7.23 0 0 0 5.441-4.68H20.47a5.08 5.08 0 0 1-4.48 2.685 5.094 5.094 0 0 1-5.077-4.726l12.318-.017zM11.25 13.13a5.093 5.093 0 0 1 4.74-3.229 5.095 5.095 0 0 1 4.737 3.23h-9.476z"
      />
      <filter id="xuc_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#xuc_svg__a)" xlinkHref="#xuc_svg__b" />
      <use fill="#25AAE3" fillRule="evenodd" xlinkHref="#xuc_svg__b" />
      <use
        fill="url(#xuc_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#xuc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#xuc_svg__d)" xlinkHref="#xuc_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#xuc_svg__e" />
    </g>
  </svg>
);

export default SvgXuc;

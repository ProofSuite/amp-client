import React from 'react';

const SvgNav = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="nav_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="nav_svg__b" cx={16} cy={15} r={15} />
      <filter id="nav_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="nav_svg__e"
        d="M21.32 21h-4.796l-3.798-7.005L9.797 21H5l5.018-12h4.797l3.945 7.276L22.203 9H27l-5.68 12z"
      />
      <filter id="nav_svg__d" width="115.9%" height="129.2%" x="-8%" y="-10.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#nav_svg__a)" xlinkHref="#nav_svg__b" />
      <use fill="#7D59B5" xlinkHref="#nav_svg__b" />
      <use
        fill="url(#nav_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#nav_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#nav_svg__d)" xlinkHref="#nav_svg__e" />
      <use fill="#FFF" xlinkHref="#nav_svg__e" />
    </g>
  </svg>
);

export default SvgNav;

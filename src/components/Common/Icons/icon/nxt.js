import React from 'react';

const SvgNxt = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="nxt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="nxt_svg__b" cx={16} cy={15} r={15} />
      <filter id="nxt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="nxt_svg__e"
        d="M26.082 15.833c-.507 0-.918-.373-.918-.833v-.834h-4.612c-.507 0-.918-.373-.918-.833 0-.46.411-.833.918-.833h5.53c.507 0 .918.373.918.833V15c0 .46-.41.833-.918.833zm-4.549 0h1.835c.507 0 .918.373.918.833 0 .46-.41.834-.918.834h-2.816a.987.987 0 0 1-.423-.094l-5.352-3.24h-1.542c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835c.198 0 .381.057.531.154l5.232 3.18h.7zm-6.463 0c.507 0 .918.373.918.833 0 .46-.411.834-.918.834h-1.835a.988.988 0 0 1-.423-.094l-5.352-3.24H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835a.98.98 0 0 1 .531.154l5.232 3.18h1.554zm-9.152 0h1.835c.507 0 .918.373.918.834 0 .46-.411.833-.918.833H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.834.918-.834z"
      />
      <filter id="nxt_svg__d" width="115.9%" height="170%" x="-8%" y="-25%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#nxt_svg__a)" xlinkHref="#nxt_svg__b" />
      <use fill="#008FBB" xlinkHref="#nxt_svg__b" />
      <use
        fill="url(#nxt_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#nxt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#nxt_svg__d)" xlinkHref="#nxt_svg__e" />
      <use fill="#FFF" xlinkHref="#nxt_svg__e" />
    </g>
  </svg>
);

export default SvgNxt;

import React from 'react';

const SvgDgd = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="dgd_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="dgd_svg__b" cx={16} cy={15} r={15} />
      <filter id="dgd_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="dgd_svg__e"
        d="M12.5 10v3h-7v-3h7zm1 0h2v10h-10v-6h8v-4zm-6 6v2h6v-2h-6zm19-4h-8v6h6v-2h-4v-2h6v6h-10V10h10v2z"
      />
      <filter id="dgd_svg__d" width="116.7%" height="135%" x="-8.3%" y="-12.5%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#dgd_svg__a)" xlinkHref="#dgd_svg__b" />
      <use fill="#F4D029" xlinkHref="#dgd_svg__b" />
      <use
        fill="url(#dgd_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#dgd_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#dgd_svg__d)" xlinkHref="#dgd_svg__e" />
      <use fill="#FFF" xlinkHref="#dgd_svg__e" />
    </g>
  </svg>
);

export default SvgDgd;

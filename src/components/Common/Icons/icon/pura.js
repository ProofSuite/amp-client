import React from 'react';

const SvgPura = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="pura_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="pura_svg__b" cx={16} cy={15} r={15} />
      <filter id="pura_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="pura_svg__e"
        d="M11.192 7h7.764c2.148.127 4.511 1.01 5.46 3.06 1.187 2.611.597 6.283-2.077 7.773-2.466 1.41-5.416.854-8.124.97-.073 1.334.3 2.886-.63 4.014-.374.54-2.089 1.183-2.089 1.183s-.158-1.449-.216-4.71c-.037-.9.11-1.91.883-2.495.905-.778 2.188-.535 3.287-.575 1.66-.044 3.404.21 4.98-.43 2.312-.945 2.396-4.804.066-5.777-2.379-.922-5.006-.083-7.45-.593-1.11-.311-1.609-1.404-1.854-2.42zM7 11.43c2.03.037 4.064-.071 6.09.051 1.473.113 2.44 1.447 2.594 2.811-2.044-.01-4.093.065-6.138-.025C8.29 14.194 7.363 13.174 7 12.049v-.618z"
      />
      <filter id="pura_svg__d" width="119.4%" height="120.6%" x="-9.7%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#pura_svg__a)" xlinkHref="#pura_svg__b" />
      <use fill="#333" xlinkHref="#pura_svg__b" />
      <use
        fill="url(#pura_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#pura_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#pura_svg__d)" xlinkHref="#pura_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#pura_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgPura;

import React from 'react';

const SvgVet = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="vet_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="vet_svg__b" cx={16} cy={15} r={15} />
      <filter id="vet_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="vet_svg__e"
        d="M14.738 23.734L7.04 8.046a.38.38 0 0 1 .34-.546h2.668c.143 0 .277.08.34.206l5.622 11.381c.5 1.02 1.951 1.02 2.452 0l5.604-11.372a.382.382 0 0 1 .34-.206h.332c.197 0 .322.206.233.376l-7.78 15.85c-.501 1.02-1.951 1.02-2.453 0z"
      />
      <filter id="vet_svg__d" width="119.4%" height="120.6%" x="-9.7%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#vet_svg__a)" xlinkHref="#vet_svg__b" />
      <use fill="#15BDFF" xlinkHref="#vet_svg__b" />
      <use
        fill="url(#vet_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#vet_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#vet_svg__d)" xlinkHref="#vet_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#vet_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgVet;

import React from 'react';

const SvgPpt = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="ppt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ppt_svg__b" cx={16} cy={15} r={15} />
      <filter id="ppt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ppt_svg__e"
        d="M16.049 7.316c-1.316 0-2.383-.733-2.383-1.638 0-.905 1.067-1.638 2.383-1.638s2.382.733 2.382 1.638c0 .905-1.066 1.638-2.382 1.638zM14.816 25.6V8.104h5.312c.197 0 .336.147.336.344v9.708c0 .196-.14.364-.336.364H17.2v7.08c0 .197-.15.376-.347.376h-1.668a.384.384 0 0 1-.369-.375zm-.896-7.081h-2.01a.378.378 0 0 1-.374-.364V8.448c0-.197.177-.344.373-.344h2.011V18.52z"
      />
      <filter id="ppt_svg__d" width="139.2%" height="116%" x="-19.6%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#ppt_svg__a)" xlinkHref="#ppt_svg__b" />
      <use fill="#152743" fillRule="evenodd" xlinkHref="#ppt_svg__b" />
      <use
        fill="url(#ppt_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ppt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#ppt_svg__d)" xlinkHref="#ppt_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#ppt_svg__e" />
    </g>
  </svg>
);

export default SvgPpt;

import React from 'react';

const SvgDcn = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="dcn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="dcn_svg__b" cx={16} cy={15} r={15} />
      <filter id="dcn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="dcn_svg__e"
        d="M10.998 29.146a14.999 14.999 0 0 1-5.307-3.25c.106-.183.21-.37.226-.395 2.235-3.538 4.243-7.198 5.755-11.11 1.604-4.148 2.887-8.406 4.11-12.681.11-.382.24-.757.36-1.135.128.149.176.286.215.426.767 2.743 1.51 5.493 2.306 8.228 1.45 4.98 3.492 9.706 6.195 14.134.304.498.814 1.318 1.528 2.46a14.996 14.996 0 0 1-5.59 3.394 4039.55 4039.55 0 0 0-4.66-14.153l-.144-.003c-1.096 3.085-2.76 7.78-4.994 14.085zm5.306-29.1h-.115l.043-.044h.005l.067.044z"
      />
      <filter id="dcn_svg__d" width="116.9%" height="112%" x="-8.5%" y="-4.3%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#dcn_svg__a)" xlinkHref="#dcn_svg__b" />
      <use fill="#136485" xlinkHref="#dcn_svg__b" />
      <use
        fill="url(#dcn_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#dcn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#dcn_svg__d)" xlinkHref="#dcn_svg__e" />
      <use fill="#FFF" xlinkHref="#dcn_svg__e" />
    </g>
  </svg>
);

export default SvgDcn;

import React from 'react';

const SvgPpc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="ppc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ppc_svg__b" cx={16} cy={15} r={15} />
      <filter id="ppc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ppc_svg__e"
        d="M9 6.5c12.093.447 16.756 7.706 14.415 14.183-.663 1.803-1.368 2.79-2.85 3.817.06-.26.122-.52.17-.787.876-5.053-.785-11.134-8.912-14.493 6.466 3.848 9.075 10.695 6.06 15.115C12.75 25.142 9 20.759 9 15.709V6.5z"
      />
      <filter id="ppc_svg__d" width="123.3%" height="119.4%" x="-11.7%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ppc_svg__a)" xlinkHref="#ppc_svg__b" />
      <use fill="#3CB054" xlinkHref="#ppc_svg__b" />
      <use
        fill="url(#ppc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ppc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#ppc_svg__d)" xlinkHref="#ppc_svg__e" />
      <use fill="#FFF" xlinkHref="#ppc_svg__e" />
    </g>
  </svg>
);

export default SvgPpc;

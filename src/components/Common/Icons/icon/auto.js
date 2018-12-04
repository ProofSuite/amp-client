import React from 'react';

const SvgAuto = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="auto_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="auto_svg__b" cx={16} cy={15} r={15} />
      <filter id="auto_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="auto_svg__e"
        d="M24.5 18.267l-4.185-2.511.48-1.989 1.787 1.055V11.19l-5.74-3.422v7.9l-1.365.755 7.538 4.47L16 25l-8.5-4.978v-9.955L16 5l8.5 5.067v8.2zM9.418 11.19v6.478l5.518-3.2V7.9l-5.518 3.289zm4.097 6.344l-3.138 1.919L16 22.745l3.175-1.86-5.66-3.352z"
      />
      <filter id="auto_svg__d" width="120.6%" height="117.5%" x="-10.3%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#auto_svg__a)" xlinkHref="#auto_svg__b" />
      <use fill="#FAB431" xlinkHref="#auto_svg__b" />
      <use
        fill="url(#auto_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#auto_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#auto_svg__d)" xlinkHref="#auto_svg__e" />
      <use fill="#FFF" xlinkHref="#auto_svg__e" />
    </g>
  </svg>
);

export default SvgAuto;

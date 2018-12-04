import React from 'react';

const SvgDock = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dock_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="dock_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="dock_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#dock_svg__a)" xlinkHref="#dock_svg__b" />
        <use fill="#786DBC" xlinkHref="#dock_svg__b" />
        <use
          fill="url(#dock_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#dock_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path
        d="M16.815 11.05L15.39 9.62a1.001 1.001 0 0 1 1.383-1.447l.034.034 3.181 3.181a1 1 0 0 1 0 1.415l-3.185 3.182a1 1 0 0 1-1.413-1.414l1.493-1.494A4.983 4.983 0 1 0 21 18.003V7a1 1 0 0 1 2 0v11.137a7 7 0 1 1-6.186-7.091v.004z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgDock;

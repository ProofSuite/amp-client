import React from 'react';

const SvgGsc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gsc_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="gsc_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="gsc_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#gsc_svg__a)" xlinkHref="#gsc_svg__b" />
        <use fill="#FF0060" xlinkHref="#gsc_svg__b" />
        <use
          fill="url(#gsc_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#gsc_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path
        d="M24.163 11.442H15.93a3.488 3.488 0 1 0 3.265 4.702H15.93a.92.92 0 0 1-.92-.92v-.112a.92.92 0 0 1 .92-.921h5.442c.04.254.059.51.056.767a5.498 5.498 0 1 1-5.498-5.525l.168-.028a.328.328 0 0 0 .111.028h4.884c2.665 0 3.754-1.424 3.754-3.433H15.93a8.93 8.93 0 1 0 8.93 8.972v-2.819a.698.698 0 0 0-.697-.711z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgGsc;

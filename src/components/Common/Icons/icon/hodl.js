import React from 'react';

const SvgHodl = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hodl_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="hodl_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="hodl_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#hodl_svg__a)" xlinkHref="#hodl_svg__b" />
        <use fill="#D59143" fillRule="evenodd" xlinkHref="#hodl_svg__b" />
        <use
          fill="url(#hodl_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#hodl_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path
        d="M8.865 15.18c-.46.366-.872 1.018-.85 2.012.014.688.384 1.16.85 1.48V19.9c0 .767.374 1.486 1.002 1.927l4.314 2.95V9.703l-5.316 1.554v3.924zm1.158-.362c.895.655.895 4.547.895 4.547s-1.012-.098-1.849-.565c.69.232 1.244.18 1.485.207l.016.001h.003l.013.002.033.003h.024s.141-3.396-.887-3.992c-.167-.058-.462-.023-.787.08.414-.28.847-.374 1.054-.283zm4.531 6.137h2.9v3.828h-2.9v-3.828zm-.657-11.537l-5.032 1.44V5.462c0-.403.488-.606.773-.32l4.515 4.533-.256-.257zm.658 5.395h2.899v5.773h-2.9v-5.773zm3.548-5.395l-.186.187 4.445-4.463a.453.453 0 0 1 .773.32v5.396l-5.032-1.44zm-3.548.285h2.899v4.738h-2.9V9.703zm8.58 5.478v-3.924l-5.308-1.552v15.078l4.306-2.956a2.353 2.353 0 0 0 1.002-1.927v-1.228c.466-.321.836-.792.85-1.48.022-.995-.39-1.646-.85-2.011zm-1.743 3.887h.023l.015-.002h.004l.031-.003h.002l.014-.002a6.23 6.23 0 0 0 .132-.015h.006c.29-.037.646-.034 1.191-.205.04-.012.08-.025.121-.04-.837.468-1.849.566-1.849.566s0-3.891.895-4.547c.208-.09.64.004 1.054.285-.325-.104-.62-.138-.787-.08-1.029.594-.852 4.043-.852 4.043z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgHodl;

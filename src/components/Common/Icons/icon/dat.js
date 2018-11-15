import React from 'react';

const SvgDat = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="dat_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="dat_svg__b" cx={16} cy={15} r={15} />
      <filter id="dat_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="dat_svg__e"
        d="M20.054 4.606c.392 0 .708.12.947.359s.358.554.358.947v11.674c0 1.33-.315 2.543-.947 3.635a6.882 6.882 0 0 1-2.534 2.56c-1.058.614-2.244.921-3.559.921-1.314 0-2.517-.307-3.61-.921a6.882 6.882 0 0 1-2.534-2.56c-.614-1.092-.921-2.304-.921-3.635 0-1.332.281-2.535.845-3.61.58-1.092 1.365-1.946 2.355-2.56 1.007-.614 2.125-.922 3.353-.922a6.306 6.306 0 0 1 4.941 2.33V5.912c0-.393.12-.708.359-.947a1.33 1.33 0 0 1 .947-.359zm-5.735 17.792c.854 0 1.622-.204 2.304-.614a4.468 4.468 0 0 0 1.639-1.74c.392-.735.589-1.554.589-2.458 0-.905-.197-1.716-.59-2.432a4.287 4.287 0 0 0-1.638-1.716c-.682-.426-1.45-.64-2.304-.64-.853 0-1.63.214-2.33.64a4.528 4.528 0 0 0-1.638 1.716c-.392.716-.588 1.527-.588 2.432 0 .904.196 1.723.588 2.457a4.73 4.73 0 0 0 1.639 1.741c.7.41 1.476.614 2.33.614z"
      />
      <filter id="dat_svg__d" width="124.8%" height="117.4%" x="-12.4%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#dat_svg__a)" xlinkHref="#dat_svg__b" />
      <use fill="#2D9CDB" xlinkHref="#dat_svg__b" />
      <use
        fill="url(#dat_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#dat_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#dat_svg__d)" xlinkHref="#dat_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#dat_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgDat;

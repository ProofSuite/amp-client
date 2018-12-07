import React from 'react';

const SvgMed = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="med_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="med_svg__b" cx={16} cy={15} r={15} />
      <filter id="med_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="med_svg__e"
        d="M24 11.061v8.915l-2.536 1.48v-5.95L16 18.776l-5.464-3.273v5.953L8 19.976V11.06l8 4.805 8-4.805zm-7.97 11.117l2.34-1.399 2.31 1.399L16.03 25l-4.648-2.822 2.31-1.399 2.339 1.399zm4.62-14.356l-2.311 1.399L16 7.822l-2.339 1.399-2.31-1.399L16 5l4.65 2.822z"
      />
      <filter id="med_svg__d" width="121.9%" height="117.5%" x="-10.9%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#med_svg__a)" xlinkHref="#med_svg__b" />
      <use fill="#00B0FF" xlinkHref="#med_svg__b" />
      <use
        fill="url(#med_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#med_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#med_svg__d)" xlinkHref="#med_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#med_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgMed;

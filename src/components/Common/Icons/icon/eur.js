import React from 'react';

const SvgEur = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="eur_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="eur_svg__b" cx={16} cy={15} r={15} />
      <filter id="eur_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="eur_svg__e"
        d="M8 18.004L8.81 16h.857a16.279 16.279 0 0 1-.034-1.03c0-.448.019-.864.056-1.25H8l.81-2.003h1.274C11.27 7.906 13.944 6 18.103 6c1.367 0 2.666.177 3.897.532v2.524a8.92 8.92 0 0 0-3.683-.776c-2.493 0-4.096 1.146-4.81 3.438h7.423l-.81 2.003h-7.097a6.938 6.938 0 0 0-.056.995c0 .479.015.907.045 1.285h6.183l-.8 2.003H13.44c.533 1.389 1.183 2.355 1.949 2.9.765.544 1.858.816 3.277.816 1.014 0 2.125-.247 3.334-.741v2.373c-1.149.432-2.515.648-4.1.648-4.167 0-6.803-1.999-7.906-5.996H8z"
      />
      <filter id="eur_svg__d" width="125%" height="119.4%" x="-12.5%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#eur_svg__a)" xlinkHref="#eur_svg__b" />
      <use fill="#0F8FF8" xlinkHref="#eur_svg__b" />
      <use
        fill="url(#eur_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#eur_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#eur_svg__d)" xlinkHref="#eur_svg__e" />
      <use fill="#FFF" xlinkHref="#eur_svg__e" />
    </g>
  </svg>
);

export default SvgEur;

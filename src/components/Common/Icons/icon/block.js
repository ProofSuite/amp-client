import React from 'react';

const SvgBlock = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="block_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="block_svg__b" cx={16} cy={15} r={15} />
      <filter id="block_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="block_svg__e"
        d="M5.522 0H15.75L21 9l-5.25 9H5.431l5.16-9-5.07-9zm5.43 3.166L14.303 9l-3.35 5.834h2.988L17.289 9l-3.35-5.834h-2.986z"
      />
      <filter id="block_svg__d" width="122.5%" height="119.4%" x="-11.2%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
      <path id="block_svg__g" d="M6.613 4.026L3.711 9l2.876 4.93-1.839 3.209L0 9 4.789.789z" />
      <filter id="block_svg__f" width="152.9%" height="121.4%" x="-26.5%" y="-7.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#block_svg__a)" xlinkHref="#block_svg__b" />
        <use fill="#101341" fillRule="evenodd" xlinkHref="#block_svg__b" />
        <use
          fill="url(#block_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#block_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <g transform="translate(5.5 6)">
        <use fill="#000" filter="url(#block_svg__d)" xlinkHref="#block_svg__e" />
        <use fill="#FFF" xlinkHref="#block_svg__e" />
        <g opacity={0.5}>
          <use fill="#000" filter="url(#block_svg__f)" xlinkHref="#block_svg__g" />
          <use fill="#FFF" xlinkHref="#block_svg__g" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgBlock;

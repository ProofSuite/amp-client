import React from 'react';

const SvgEla = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="ela_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ela_svg__b" cx={16} cy={15} r={15} />
      <filter id="ela_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="ela_svg__d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ela_svg__a)" xlinkHref="#ela_svg__b" />
      <use fill="#3FBADF" xlinkHref="#ela_svg__b" />
      <use
        fill="url(#ela_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ela_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" fillRule="nonzero" filter="url(#ela_svg__d)" transform="translate(6 6)">
        <path fillOpacity={0.4} d="M5 15.119l5-2.82v5.635L5 15.12zm0-9l5-2.82v5.635L5 6.12z" />
        <path fillOpacity={0.7} d="M20 12.23l-5 2.886V9.43l5 2.8zm0-9l-5 2.886V.43l5 2.8z" />
        <path fillOpacity={0.8} d="M5 15.116V9.433l5 2.87-5 2.813zm0-9V.433l5 2.87-5 2.813z" />
        <path d="M15 15.116l-5-2.812 5-2.874v5.686zm0-9l-5-2.812L15 .43v5.686z" />
        <path fillOpacity={0.6} d="M15 15.116l-5 2.818v-5.63l5 2.812zm0-9l-5 2.818v-5.63l5 2.812z" />
        <path fillOpacity={0.5} d="M5 9.433v5.683l-5-2.885 5-2.798zm0-9v5.683L0 3.231 5 .433z" />
      </g>
    </g>
  </svg>
);

export default SvgEla;

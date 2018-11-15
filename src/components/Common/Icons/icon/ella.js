import React from 'react';

const SvgElla = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="ella_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ella_svg__b" cx={16} cy={15} r={15} />
      <filter id="ella_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ella_svg__e"
        d="M18.073 12.212L16 10.14l-2.087 2.086-2.164-2.164L16 4l4.28 6.005-2.207 2.207zm-4.883.738L11.14 15l2.072 2.073-2.156 2.156L5 15l5.99-4.25 2.2 2.2zm5.584 4.137L20.86 15l-2.064-2.064 2.226-2.226L27 15l-6.044 4.269-2.182-2.182zm-4.838.71L16 19.86l2.05-2.05 2.182 2.183L16 26l-4.204-6.064 2.14-2.14zM16 11.527L19.472 15 16 18.472 12.528 15 16 11.528z"
      />
      <filter id="ella_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ella_svg__a)" xlinkHref="#ella_svg__b" />
      <use fill="#396A28" xlinkHref="#ella_svg__b" />
      <use
        fill="url(#ella_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ella_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#ella_svg__d)" xlinkHref="#ella_svg__e" />
      <use fill="#FFF" xlinkHref="#ella_svg__e" />
    </g>
  </svg>
);

export default SvgElla;

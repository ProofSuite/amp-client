import React from 'react';

const SvgSky = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="sky_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="sky_svg__b" cx={16} cy={15} r={15} />
      <filter id="sky_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="sky_svg__e"
        d="M24.027 11.803L19.215 22.5h-1.923l5.065-11.26a5.384 5.384 0 0 1 1.67.563zm-8.42-6.284L8.204 21.978C6.316 21.082 5 19.119 5 16.833c0-3.13 2.462-5.666 5.5-5.666 0-2.995 2.254-5.44 5.107-5.648zm5.894 5.648L16.402 22.5h-2.083l6.402-14.23c.493.848.78 1.836.78 2.897zm1.894 10.982l3.266-7.256c.216.608.339 1.26.339 1.943 0 2.438-1.5 4.515-3.605 5.313zm1.442-9.814c.456.36.86.788 1.186 1.279l-3.986 8.858a5.025 5.025 0 0 1-.536.028h-1.236l4.572-10.165zM16.02 5.5c.78.003 1.519.174 2.19.481L10.78 22.5h-.28c-.69 0-1.35-.136-1.957-.377L16.02 5.5zm4.267 2.118L13.592 22.5h-2.246l7.327-16.285c.622.358 1.17.836 1.614 1.403z"
      />
      <filter id="sky_svg__d" width="115.9%" height="120.6%" x="-8%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#sky_svg__a)" xlinkHref="#sky_svg__b" />
      <use fill="#0072FF" fillRule="evenodd" xlinkHref="#sky_svg__b" />
      <use
        fill="url(#sky_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#sky_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#sky_svg__d)" xlinkHref="#sky_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#sky_svg__e" />
    </g>
  </svg>
);

export default SvgSky;

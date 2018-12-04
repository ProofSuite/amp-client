import React from 'react';

const SvgEvx = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="evx_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="evx_svg__b" cx={16} cy={15} r={15} />
      <filter id="evx_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="evx_svg__e"
        d="M10.082 16.21l-2.618 2.62-1.23 1.23A10.937 10.937 0 0 1 5 15C5 8.935 9.935 4 16 4s11 4.935 11 11-4.935 11-11 11c-2.346 0-4.522-.739-6.31-1.995a11.08 11.08 0 0 1-1.277-1.047l1.162-1.163 8.417-8.417a1.621 1.621 0 0 1 1.614-1.49 1.62 1.62 0 0 1 1.61 1.455l3.874 3.874A9.346 9.346 0 0 0 25.356 15c0-5.16-4.197-9.356-9.356-9.356-5.16 0-9.356 4.197-9.356 9.356 0 .718.081 1.417.235 2.089L9.367 14.6a1.621 1.621 0 0 1 1.599-1.365 1.62 1.62 0 0 1 1.593 1.334l1.583 1.582-1.163 1.162-1.114-1.114a1.61 1.61 0 0 1-1.783.01zm8.709-1.306l-7.918 7.918A9.301 9.301 0 0 0 16 24.356c3.753 0 6.997-2.221 8.486-5.418l-4.045-4.046a1.609 1.609 0 0 1-1.65.012zm.844-2.116a.728.728 0 1 0 .002 1.455.728.728 0 0 0-.002-1.455zm-8.66 1.327a.728.728 0 1 0 0 1.456.728.728 0 0 0 0-1.456z"
      />
      <filter id="evx_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#evx_svg__a)" xlinkHref="#evx_svg__b" />
      <use fill="#044AAC" xlinkHref="#evx_svg__b" />
      <use
        fill="url(#evx_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#evx_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#evx_svg__d)" xlinkHref="#evx_svg__e" />
      <use fill="#FFF" xlinkHref="#evx_svg__e" />
    </g>
  </svg>
);

export default SvgEvx;

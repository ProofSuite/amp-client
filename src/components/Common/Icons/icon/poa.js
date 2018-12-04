import React from 'react';

const SvgPoa = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="poa_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="poa_svg__b" cx={16} cy={15} r={15} />
      <filter id="poa_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="poa_svg__e"
        d="M5 23L16 4l11 19H5zm6.872-9.676c1.285-.858 2.663-1.291 4.128-1.291 1.465 0 2.843.433 4.128 1.291L16 6.194l-4.128 7.13zm-1.951 3.37l-2.997 5.177h18.152l-2.997-5.176c-1.81 1.989-3.843 2.999-6.079 2.999-2.236 0-4.27-1.01-6.08-3zM16 18.565c1.938 0 3.711-.89 5.338-2.7-1.627-1.813-3.4-2.702-5.338-2.702-1.938 0-3.711.89-5.338 2.701 1.627 1.812 3.4 2.702 5.338 2.702zm0-.483c-1.16 0-2.101-.975-2.101-2.178 0-1.202.94-2.177 2.101-2.177 1.16 0 2.101.975 2.101 2.177 0 1.203-.94 2.178-2.101 2.178zm0-1.13c.559 0 1.012-.469 1.012-1.048 0-.579-.453-1.048-1.012-1.048-.559 0-1.012.47-1.012 1.048 0 .58.453 1.049 1.012 1.049z"
      />
      <filter id="poa_svg__d" width="115.9%" height="118.4%" x="-8%" y="-6.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#poa_svg__a)" xlinkHref="#poa_svg__b" />
      <use fill="#444FA1" fillRule="evenodd" xlinkHref="#poa_svg__b" />
      <use
        fill="url(#poa_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#poa_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#poa_svg__d)" xlinkHref="#poa_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#poa_svg__e" />
    </g>
  </svg>
);

export default SvgPoa;

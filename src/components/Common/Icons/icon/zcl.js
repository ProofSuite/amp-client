import React from 'react';

const SvgZcl = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="zcl_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="zcl_svg__b" cx={16} cy={15} r={15} />
      <filter id="zcl_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="zcl_svg__e"
        d="M15.992 26C9.917 25.996 5 21.07 5 14.986 5 8.915 9.932 3.996 16.015 4 22.08 4.004 27.008 8.934 27 15.002c-.012 6.002-4.836 10.99-11.008 10.998zm-4.483-5.97c.031-.059.055-.106.078-.144.984-1.736 1.97-3.47 2.956-5.202.864-1.518 1.726-3.038 2.585-4.558a.146.146 0 0 1 .15-.09c1.004.005 2.012.005 3.015.005h.143c-1.394 2.46-2.778 4.903-4.173 7.36.05.004.078.004.105.004 2.519 0 5.036.001 7.552.004.085 0 .112-.031.131-.105a8.318 8.318 0 0 0 .105-4.127c-.376-1.65-1.201-3.043-2.418-4.208a7.657 7.657 0 0 0-1.84-1.297c-1.674-.854-3.437-1.125-5.285-.8-1.84.327-3.39 1.196-4.661 2.57-.167.18-.318.373-.477.56.004.011.012.02.016.03h7.18c-.04.075-.067.129-.098.18-.437.776-.88 1.548-1.313 2.325a.198.198 0 0 1-.202.116c-2.262-.004-4.524-.005-6.784-.004h-.136c-1.146 3.603.473 8.122 4.534 9.93 3.932 1.756 8.055.14 9.988-2.557-3.715.007-7.432.01-11.15.007zm12.643 1.898c1.395-1.55 2.635-4.1 2.557-7.163-.062-2.523-.926-4.74-2.541-6.7-.504.508-.996 1.001-1.484 1.494 2.56 3.079 2.67 7.632.027 10.901l1.441 1.468z"
      />
      <filter id="zcl_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#zcl_svg__a)" xlinkHref="#zcl_svg__b" />
      <use fill="#C87035" xlinkHref="#zcl_svg__b" />
      <use
        fill="url(#zcl_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#zcl_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#zcl_svg__d)" xlinkHref="#zcl_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#zcl_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgZcl;

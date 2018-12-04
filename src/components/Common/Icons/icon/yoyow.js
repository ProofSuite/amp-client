import React from 'react';

const SvgYoyow = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="yoyow_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="yoyow_svg__b" cx={16} cy={15} r={15} />
      <filter id="yoyow_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="yoyow_svg__e"
        d="M21.49 15.575c.34.364.546.849.546 1.381 0 1.129-.928 2.044-2.072 2.044-1.143 0-2.07-.915-2.07-2.044 0-.532.206-1.017.544-1.381A.743.743 0 0 1 17.243 15a.72.72 0 0 1 .157-.45c-.369.334-.86.538-1.4.538-.54 0-1.031-.204-1.4-.538a.72.72 0 0 1 .157.45c0 .403-.33.73-.74.73a.743.743 0 0 1-.455-.155c.338.364.545.849.545 1.381 0 1.129-.928 2.044-2.071 2.044-1.144 0-2.072-.915-2.072-2.044 0-.532.207-1.017.545-1.381A.743.743 0 0 1 9.314 15a.72.72 0 0 1 .157-.45c-.369.334-.86.538-1.4.538-1.144 0-2.071-.915-2.071-2.044S6.927 11 8.071 11c1.144 0 2.071.915 2.071 2.044a2.02 2.02 0 0 1-.545 1.381.743.743 0 0 1 1.196.575.72.72 0 0 1-.157.45c.368-.334.86-.538 1.4-.538.54 0 1.03.204 1.4.538a.72.72 0 0 1-.158-.45.743.743 0 1 1 1.196-.575 2.022 2.022 0 0 1-.545-1.381c0-1.129.927-2.044 2.071-2.044 1.144 0 2.071.915 2.071 2.044a2.02 2.02 0 0 1-.545 1.381.743.743 0 0 1 1.196.575.72.72 0 0 1-.157.45c.368-.334.86-.538 1.4-.538.54 0 1.03.204 1.4.538a.72.72 0 0 1-.158-.45.743.743 0 1 1 1.196-.575 2.022 2.022 0 0 1-.545-1.381c0-1.129.927-2.044 2.071-2.044 1.144 0 2.071.915 2.071 2.044s-.927 2.044-2.071 2.044c-.54 0-1.031-.204-1.4-.538a.72.72 0 0 1 .157.45c0 .403-.33.73-.74.73a.743.743 0 0 1-.455-.155z"
      />
      <filter id="yoyow_svg__d" width="117.5%" height="143.8%" x="-8.8%" y="-15.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#yoyow_svg__a)" xlinkHref="#yoyow_svg__b" />
      <use fill="#21A5DE" fillRule="evenodd" xlinkHref="#yoyow_svg__b" />
      <use
        fill="url(#yoyow_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#yoyow_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#yoyow_svg__d)" xlinkHref="#yoyow_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#yoyow_svg__e" />
    </g>
  </svg>
);

export default SvgYoyow;

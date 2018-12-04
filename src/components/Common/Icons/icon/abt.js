import React from 'react';

const SvgAbt = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="abt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="abt_svg__b" cx={16} cy={15} r={15} />
      <filter id="abt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="abt_svg__e"
        d="M6.5 9.487L16 4l9.5 5.487v11.026L16 26l-9.5-5.487V9.487zm.912 9.97l3.81-2.205 1.933-3.385-5.743-3.323v8.913zm.457.791l7.702 4.449V20.44l-4.038-2.313-3.664 2.12zm16.719-9.673l-5.692 3.293 1.932 3.382 3.76 2.176v-8.851zm-.43-.808l-7.675-4.433v4.309l1.96 3.431 5.715-3.307zm-6.047 4.555L16.939 15l2.325 1.345-1.153-2.023zm-.453-.794l-1.175-2.06v2.74l1.175-.68zm-4.864 2.815L15.114 15l-1.169-.676-1.15 2.019zm-.346 1.256l3.123 1.788v-3.595l-3.123 1.807zm-4.58-7.847l5.74 3.32 1.963-3.435V5.303L7.868 9.752zm16.29 10.481l-3.636-2.104-4.039 2.341v4.196l7.675-4.433zm-4.548-2.632l-3.127-1.809v3.622L19.61 17.6zm-5.212-4.071l1.173.678v-2.735l-1.173 2.057z"
      />
      <filter id="abt_svg__d" width="118.4%" height="115.9%" x="-9.2%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#abt_svg__a)" xlinkHref="#abt_svg__b" />
      <use fill="#3EFFFF" xlinkHref="#abt_svg__b" />
      <use
        fill="url(#abt_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#abt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#abt_svg__d)" xlinkHref="#abt_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#abt_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgAbt;

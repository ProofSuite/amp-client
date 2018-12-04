import React from 'react';

const SvgBtm = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="btm_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="btm_svg__b" cx={16} cy={15} r={15} />
      <filter id="btm_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="btm_svg__e"
        d="M10.827 14.376l-1.745 3.698.812 3.032 2.066.552 2.564 2.567-.772.775-6.112-1.64L6 17.248l1.23-1.228 5.342-5.343-1.745 3.699-1.745 3.698 5.442-5.442-1.952-1.955-1.745 3.699zm2.805 2.1l5.442 5.442 3.032-.812.554-2.066 2.565-2.564.775.772-1.638 6.114L18.248 25l-6.569-6.572 1.953-1.952zm4.736-2.952l-5.442-5.442-3.034.812-.552 2.063-2.565 2.567L6 12.752l1.64-6.114L13.752 5l1.228 1.23 5.34 5.34-1.952 1.954zM20.04 8.34l-2.564-2.565.772-.775 6.114 1.638L26 12.752l-6.572 6.569-1.952-1.953 5.444-5.444-.814-3.032-2.066-.552z"
      />
      <filter id="btm_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#btm_svg__a)" xlinkHref="#btm_svg__b" />
      <use fill="#504C4C" fillRule="evenodd" xlinkHref="#btm_svg__b" />
      <use
        fill="url(#btm_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#btm_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#btm_svg__d)" xlinkHref="#btm_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#btm_svg__e" />
    </g>
  </svg>
);

export default SvgBtm;

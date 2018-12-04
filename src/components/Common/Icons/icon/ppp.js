import React from 'react';

const SvgPpp = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="ppp_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ppp_svg__b" cx={16} cy={15} r={15} />
      <filter id="ppp_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ppp_svg__e"
        d="M23.312 6.044a1.33 1.33 0 0 1 0 1.846l-3.13 3.209a1.29 1.29 0 0 1-.342.25 1.19 1.19 0 0 1-1.442-.211L15.28 7.944l-6.005 6.159 1.45 1.483a1.17 1.17 0 0 1-.007 1.62 1.105 1.105 0 0 1-1.582.007L6.83 14.86a1.174 1.174 0 0 1 0-1.632l.016-.015a.198.198 0 0 0 .014-.015l7.624-7.82h.001l.001-.001.025-.026A1.147 1.147 0 0 1 16 5.21c.072.049.14.104.2.167l2.984 3.053 2.327-2.386a1.255 1.255 0 0 1 1.802 0zm1.858 9.102a1.165 1.165 0 0 1 .001 1.627l-.016.015a.198.198 0 0 0-.015.015l-7.654 7.847a1.148 1.148 0 0 1-1.754-.121l-2.917-2.984-2.313 2.378a1.254 1.254 0 0 1-1.233.342 1.29 1.29 0 0 1-.904-.925c-.117-.451.01-.933.335-1.262l3.129-3.208c.178-.186.407-.312.657-.362.404-.09.826.036 1.119.336l3.126 3.198 5.994-6.144-1.45-1.483a1.17 1.17 0 0 1 .007-1.62 1.105 1.105 0 0 1 1.582-.007l2.273 2.325.002.002.003.002.028.03z"
      />
      <filter id="ppp_svg__d" width="118.4%" height="117.5%" x="-9.2%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ppp_svg__a)" xlinkHref="#ppp_svg__b" />
      <use fill="#348F8D" xlinkHref="#ppp_svg__b" />
      <use
        fill="url(#ppp_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ppp_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#ppp_svg__d)" xlinkHref="#ppp_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#ppp_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgPpp;

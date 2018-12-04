import React from 'react';

const SvgMds = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="mds_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="mds_svg__b" cx={16} cy={15} r={15} />
      <filter id="mds_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="mds_svg__e"
        d="M14.22 14.589a1.507 1.507 0 1 1 0-3.014 1.507 1.507 0 0 1 0 3.014zm3.698 0a1.507 1.507 0 1 1 0-3.014 1.507 1.507 0 0 1 0 3.014zm-3.699 3.699a1.507 1.507 0 1 1 0-3.014 1.507 1.507 0 0 1 0 3.014zm3.699 0a1.507 1.507 0 1 1 0-3.014 1.507 1.507 0 0 1 0 3.014zm3.698-4.11a1.096 1.096 0 1 1 0-2.192 1.096 1.096 0 0 1 0 2.192zm0 3.699a1.096 1.096 0 1 1 0-2.192 1.096 1.096 0 0 1 0 2.192zm-11.232-3.699a1.096 1.096 0 1 1 0-2.192 1.096 1.096 0 0 1 0 2.192zm0 3.699a1.096 1.096 0 1 1 0-2.192 1.096 1.096 0 0 1 0 2.192zm3.835 3.698a1.096 1.096 0 1 1 0-2.191 1.096 1.096 0 0 1 0 2.191zm3.699 0a1.096 1.096 0 1 1 0-2.191 1.096 1.096 0 0 1 0 2.191zM14.219 10.48a1.096 1.096 0 1 1 0-2.191 1.096 1.096 0 0 1 0 2.191zm3.699 0a1.096 1.096 0 1 1 0-2.191 1.096 1.096 0 0 1 0 2.191zm-3.699-4.11a.685.685 0 1 1 0-1.369.685.685 0 0 1 0 1.37zm3.699 0a.685.685 0 1 1 0-1.369.685.685 0 0 1 0 1.37zm7.397 7.398a.685.685 0 1 1 0-1.37.685.685 0 0 1 0 1.37zm0 3.699a.685.685 0 1 1 0-1.37.685.685 0 0 1 0 1.37zm-18.63-3.699a.685.685 0 1 1 0-1.37.685.685 0 0 1 0 1.37zm0 3.699a.685.685 0 1 1 0-1.37.685.685 0 0 1 0 1.37zM14.219 25a.685.685 0 1 1 0-1.37.685.685 0 0 1 0 1.37zm3.699 0a.685.685 0 1 1 0-1.37.685.685 0 0 1 0 1.37z"
      />
      <filter id="mds_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#mds_svg__a)" xlinkHref="#mds_svg__b" />
      <use fill="#1E252C" xlinkHref="#mds_svg__b" />
      <use
        fill="url(#mds_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#mds_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#mds_svg__d)" xlinkHref="#mds_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#mds_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgMds;

import React from 'react';

const SvgMona = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="mona_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="mona_svg__b" cx={16} cy={15} r={15} />
      <filter id="mona_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="mona_svg__e"
        d="M23.53 12.414L22.105 6l-2.797 4.414a14.096 14.096 0 0 0-6.617 0L9.902 6l-1.43 6.414C6.937 13.642 6 15.247 6 17.009c0 3.86 4.476 6.989 9.997 6.989s9.997-3.13 9.997-6.989c-.001-1.762-.93-3.367-2.465-4.595zM10.442 15.35h-.666l1.627-1.876h1.184l-2.145 1.876zm5.504 4.584l-2.766-4.872.683-.39.617 1.085h3.021l.644-1.09.676.402-2.875 4.865zm5.613-4.584l-2.146-1.876h1.192l1.625 1.876h-.671zm-5.6 3.015l-1.033-1.82h2.108l-1.075 1.82z"
      />
      <filter id="mona_svg__d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#mona_svg__a)" xlinkHref="#mona_svg__b" />
      <use fill="#DEC799" fillRule="evenodd" xlinkHref="#mona_svg__b" />
      <use
        fill="url(#mona_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#mona_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#mona_svg__d)" xlinkHref="#mona_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#mona_svg__e" />
    </g>
  </svg>
);

export default SvgMona;

import React from 'react';

const SvgUtk = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="utk_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="utk_svg__b" cx={16} cy={15} r={15} />
      <filter id="utk_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="utk_svg__e"
        d="M14.353 21.298V8.028H10.5V5h11v3.028h-3.853v13.27h-3.294zM13.466 25c-1.989 0-2.93-.956-2.93-2.978V8.896h2.894v12.992c0 .32.105.426.419.426h4.339c.314 0 .42-.107.42-.426V8.896H21.5v13.126c0 2.022-.942 2.978-2.93 2.978h-5.104z"
      />
      <filter id="utk_svg__d" width="131.8%" height="117.5%" x="-15.9%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#utk_svg__a)" xlinkHref="#utk_svg__b" />
      <use fill="#30367A" xlinkHref="#utk_svg__b" />
      <use
        fill="url(#utk_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#utk_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#utk_svg__d)" xlinkHref="#utk_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#utk_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgUtk;

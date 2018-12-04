import React from 'react';

const SvgRic = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="ric_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ric_svg__b" cx={16} cy={15} r={15} />
      <filter id="ric_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ric_svg__e"
        d="M10.144 19.024c.3-.455.584-.881.852-1.28H7.932a.093.093 0 0 1-.093-.093v-.636c0-.051.042-.093.093-.093h3.622c1.937-2.829 2.905-3.994 2.905-4.113 0-.183-.04-.274-.7-.274-1.304 0-3.449-.931-3.449-3.473C10.31 7.679 12.547 6 13.853 6c.606 0 .699.257.42.274-.746.046-2.378 1.536-2.378 2.97 0 .96.852 2.605 2.75 2.605 2.242 0 4.157-3.564 8.812-3.564 2.797 0 3.543 2.188 3.543 2.788 0 .6-.873.914-2.051.914-1.178 0-1.222-2.103-3.59-2.103-3.718 0-6.884 4.026-8.405 7.038h2.624c.052 0 .093.042.093.093v.636a.093.093 0 0 1-.093.094h-3.01c-.208.48-.363.915-.46 1.28h2.63c.052 0 .094.04.094.092v.637a.093.093 0 0 1-.093.093H11.99c.049 1.166 1.027 2.217 2.936 3.153h-7.32a185.324 185.324 0 0 1 2-3.153H7.094A.093.093 0 0 1 7 19.754v-.637c0-.051.042-.093.093-.093h3.051z"
      />
      <filter id="ric_svg__d" width="117.5%" height="120.6%" x="-8.8%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ric_svg__a)" xlinkHref="#ric_svg__b" />
      <use fill="#60E4DD" xlinkHref="#ric_svg__b" />
      <use
        fill="url(#ric_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ric_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#ric_svg__d)" xlinkHref="#ric_svg__e" />
      <use fill="#FFF" xlinkHref="#ric_svg__e" />
    </g>
  </svg>
);

export default SvgRic;

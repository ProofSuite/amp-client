import React from 'react';

const SvgZen = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="zen_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="zen_svg__b" cx={16} cy={15} r={15} />
      <filter id="zen_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="zen_svg__e"
        d="M18.666 16.298l-1.345-.804v-3.627l-3.16-1.846V8.35l4.505 2.62v5.33zM16.83 12.63v1.534l-3.215 1.888v3.74l-1.3.778v-5.287l4.515-2.653zm-2.296 3.485l1.444-.835 3.088 1.839 3.109-1.839 1.4.837-4.524 2.664-4.517-2.666zm4.517 3.135l4.919-2.897v5.773L19.052 25l-4.919-2.89v-5.764l4.92 2.903zm-7.137-4.2v5.76L7 17.946v-5.783l4.898-2.886 4.933 2.884-4.916 2.888zM23.97 7.861v5.793l-4.904 2.885v-5.803L14.16 7.882 19.073 5l4.898 2.86z"
      />
      <filter id="zen_svg__d" width="120.6%" height="117.5%" x="-10.3%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#zen_svg__a)" xlinkHref="#zen_svg__b" />
      <use fill="#234871" xlinkHref="#zen_svg__b" />
      <use
        fill="url(#zen_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#zen_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#zen_svg__d)" xlinkHref="#zen_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#zen_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgZen;

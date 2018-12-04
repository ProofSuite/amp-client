import React from 'react';

const SvgMzc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="mzc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="mzc_svg__b" cx={16} cy={15} r={15} />
      <filter id="mzc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="mzc_svg__e"
        d="M16.811 10.567v1.863h2.214l-1 1.148h-1.487v1.443h1.547l-.758 1.148h-.789v2.944l-1.273 1.736v-4.68h-1.76l.971-1.148h.789v-1.443h-2.487l1-1.148h1.487V10.5c-.733-.793-1.744-1.19-3.033-1.19-2.472 0-4.428 2.635-4.428 5.255 0 1.746.4 3.228 1.198 4.445l-1.38 1.604C6.541 19.012 6 17.182 6 15.124 6 10.605 9.89 8 12.641 8c1.684 0 2.974.706 3.87 2.117 1.714-1.176 3.467-1.764 5.259-1.764 2.744 0 4.23 3.35 4.23 6.55 0 4.258-2.866 5.902-3.912 6.094a.207.207 0 0 1-.205-.082.194.194 0 0 1 .051-.276c1.619-1.088 2.428-2.755 2.428-5 0-4.901-2.517-6.035-4.367-6.035a5.693 5.693 0 0 0-3.184.963z"
      />
      <filter id="mzc_svg__d" width="117.5%" height="126.9%" x="-8.8%" y="-9.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#mzc_svg__a)" xlinkHref="#mzc_svg__b" />
      <use fill="#FFAA05" xlinkHref="#mzc_svg__b" />
      <use
        fill="url(#mzc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#mzc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#mzc_svg__d)" xlinkHref="#mzc_svg__e" />
      <use fill="#FFF" xlinkHref="#mzc_svg__e" />
    </g>
  </svg>
);

export default SvgMzc;

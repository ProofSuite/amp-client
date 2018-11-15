import React from 'react';

const SvgEtc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="etc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="etc_svg__b" cx={16} cy={15} r={15} />
      <filter id="etc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="etc_svg__d" width="125%" height="114.6%" x="-12.5%" y="-5.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#etc_svg__a)" xlinkHref="#etc_svg__b" />
      <use fill="#328332" xlinkHref="#etc_svg__b" />
      <use
        fill="url(#etc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#etc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" filter="url(#etc_svg__d)" transform="translate(9 3)">
        <path
          fillRule="nonzero"
          d="M6.989 12.553l-6.721-.577 6.72-3.802v4.379zm0 4.46v6.94C4.652 20.315 2.076 16.311 0 13.07c2.45 1.38 5.008 2.823 6.989 3.944zm0-10.068L0 10.845 6.989 0v6.945z"
        />
        <path
          fillOpacity={0.601}
          fillRule="nonzero"
          d="M13.71 11.976l-6.721.577V8.174l6.72 3.802zm-6.721 5.038c1.98-1.12 4.537-2.564 6.988-3.944-2.076 3.242-4.652 7.246-6.988 10.882v-6.938zm0-10.069V0l6.988 10.845-6.988-3.9z"
        />
        <path opacity={0.2} d="M6.989 12.553l6.72-.577-6.72 3.775z" />
        <path opacity={0.603} d="M6.988 12.553l-6.721-.577 6.721 3.775z" />
      </g>
    </g>
  </svg>
);

export default SvgEtc;

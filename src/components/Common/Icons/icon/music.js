import React from 'react';

const SvgMusic = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="music_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="music_svg__b" cx={16} cy={15} r={15} />
      <filter id="music_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="music_svg__e"
        d="M3.613 23.462c-1.56-2.279-1.523-2.21.069.099C4.712 22.045 7.09 21 9.848 21c1.894 0 3.607.5 4.834 1.303L18.485.213A15.003 15.003 0 0 0 16.008 0c8.064.004 14.64 6.371 14.978 14.353a14.943 14.943 0 0 0-4.531-10.095c2.59 5.727.318 8.787.318 8.787-1.758-5.287-6.849-6.06-6.849-6.06s-3.348 18.045-3.348 18.273c0 1.954-2.076 3.606-4.894 4.106 1.3.39 2.683.614 4.109.635a14.987 14.987 0 0 1-12.178-6.537z"
      />
      <filter id="music_svg__d" width="112.3%" height="111.7%" x="-6.1%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#music_svg__a)" xlinkHref="#music_svg__b" />
      <use fill="#FBBF02" fillRule="evenodd" xlinkHref="#music_svg__b" />
      <use
        fill="url(#music_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#music_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#music_svg__d)" xlinkHref="#music_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#music_svg__e" />
    </g>
  </svg>
);

export default SvgMusic;

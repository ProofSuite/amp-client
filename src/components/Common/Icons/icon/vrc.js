import React from 'react';

const SvgVrc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="vrc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="vrc_svg__b" cx={16} cy={15} r={15} />
      <filter id="vrc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="vrc_svg__e"
        d="M20.265 7H25l-9 18L7 7h4.704l4.327 9.113L20.265 7zM16 11.959c-.788 0-1.427-.656-1.427-1.465 0-.81.639-1.466 1.427-1.466s1.427.657 1.427 1.466c0 .809-.64 1.465-1.427 1.465zm6.465 4.04c.788 0 1.427.657 1.426 1.466 0 .81-.638 1.465-1.426 1.465-.788 0-1.427-.656-1.427-1.465S21.677 16 22.465 16z"
      />
      <filter id="vrc_svg__d" width="119.4%" height="119.4%" x="-9.7%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#vrc_svg__a)" xlinkHref="#vrc_svg__b" />
      <use fill="#418BCA" xlinkHref="#vrc_svg__b" />
      <use
        fill="url(#vrc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#vrc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#vrc_svg__d)" xlinkHref="#vrc_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#vrc_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgVrc;

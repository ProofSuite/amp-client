import React from 'react';

const SvgNxs = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="nxs_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="nxs_svg__b" cx={15} cy={15} r={15} />
      <filter id="nxs_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="nxs_svg__e"
        d="M1.88 22.275c.567-1.654 1.66-3.444 3.182-5.213a1.875 1.875 0 0 1 2.613-2.634 32.787 32.787 0 0 1 3.849-2.914c6.5-4.222 13.37-5.57 16.72-3.561a14.907 14.907 0 0 1 1.709 5.846c-1.082 3.542-4.656 7.774-9.749 11.08-3.513 2.282-7.134 3.725-10.25 4.251a15.049 15.049 0 0 1-8.075-6.855zm3.515-4.87c-2.197 2.539-3.078 5.15-2.013 6.79 1.61 2.479 7.05 1.802 12.152-1.511 5.101-3.314 7.933-8.008 6.323-10.486-1.609-2.478-7.05-1.801-12.15 1.512-.566.367-1.104.752-1.611 1.148a1.875 1.875 0 0 1-2.701 2.546z"
      />
      <filter id="nxs_svg__d" width="112.5%" height="115.8%" x="-6.2%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1)">
      <use fill="#000" filter="url(#nxs_svg__a)" xlinkHref="#nxs_svg__b" />
      <use fill="#4099CD" xlinkHref="#nxs_svg__b" />
      <use
        fill="url(#nxs_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#nxs_svg__b"
      />
      <circle cx={15} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#nxs_svg__d)" xlinkHref="#nxs_svg__e" />
      <use fill="#FFF" xlinkHref="#nxs_svg__e" />
    </g>
  </svg>
);

export default SvgNxs;

import React from 'react';

const SvgTkn = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="tkn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="tkn_svg__b" cx={16} cy={15} r={15} />
      <filter id="tkn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="tkn_svg__e"
        d="M13.092 6.913L17.495 5l-.036 5.053H23v3.5h-5.578v6.063c0 1.84 3.12 2.057 4.294 1.444l1.064 3.176c-2.606 1.515-9.725 1.154-9.725-4.584V6.912h.037zm-4.11 7.578C7.887 14.491 7 13.425 7 12.11c0-1.316.887-2.382 1.982-2.382 1.094 0 1.981 1.066 1.981 2.382 0 1.315-.887 2.381-1.981 2.381z"
      />
      <filter id="tkn_svg__d" width="121.9%" height="117.5%" x="-10.9%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#tkn_svg__a)" xlinkHref="#tkn_svg__b" />
      <use fill="#24DD7B" fillRule="evenodd" xlinkHref="#tkn_svg__b" />
      <use
        fill="url(#tkn_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#tkn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#tkn_svg__d)" xlinkHref="#tkn_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#tkn_svg__e" />
    </g>
  </svg>
);

export default SvgTkn;

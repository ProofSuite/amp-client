import React from 'react';

const SvgMaid = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="maid_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="maid_svg__b" cx={16} cy={15} r={15} />
      <filter id="maid_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="maid_svg__e"
        d="M20.246 18.154v6.487L9.29 18.333c-3.24-1.897-3.034-3.077-3.034-5.64l11.263 6.512v-1.564 1.564L6.257 12.692l10.954-6.307c3.24-1.847 4.166-1.077 6.429.205l-5.631 3.256L23.64 6.59v12.615c0 3.744-1.131 4.154-3.394 5.436v-6.487z"
      />
      <filter id="maid_svg__d" width="120.1%" height="118.1%" x="-10.1%" y="-6.5%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#maid_svg__a)" xlinkHref="#maid_svg__b" />
      <use fill="#5592D7" xlinkHref="#maid_svg__b" />
      <use
        fill="url(#maid_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#maid_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" fillRule="nonzero">
        <path d="M20.246 11.667V24.64L9.29 18.333c-3.24-1.897-3.034-3.077-3.034-5.64l11.263 6.512v-5.949l2.726-1.59z" />
        <path
          d="M17.52 19.205L6.257 12.692l10.954-6.307c3.24-1.847 4.166-1.077 6.429.205l-11.263 6.513 5.143 2.974v3.128z"
          opacity={0.6}
        />
        <path
          d="M12.377 13.103L23.64 6.59v12.615c0 3.744-1.131 4.154-3.394 5.436V11.667L15.05 14.64l-2.674-1.538z"
          opacity={0.2}
        />
      </g>
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#maid_svg__d)" xlinkHref="#maid_svg__e" />
        <use fill="#FFF" fillOpacity={0} fillRule="evenodd" xlinkHref="#maid_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgMaid;

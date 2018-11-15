import React from 'react';

const SvgBrd = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="brd_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="brd_svg__b" cx={16} cy={15} r={15} />
      <filter id="brd_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="brd_svg__e"
        d="M8 8.039C8 7.465 8.472 7 9.054 7h7.588c4.476 0 6.055.528 7.143 1.601a3.43 3.43 0 0 1 .98 2.606c0 1.851-.997 3.106-3.687 3.657 2.598.454 3.917 1.51 3.917 3.634a3.604 3.604 0 0 1-1.02 2.696C22.91 22.244 21.17 23 16.487 23H9.054A1.047 1.047 0 0 1 8 21.961V8.039zm5.761 5.962c0-.383.315-.693.703-.693h2.443c1.394 0 2.437-.068 2.92-.568a1.18 1.18 0 0 0 .323-.891c.03-.32-.078-.638-.3-.875-.49-.482-1.532-.567-2.943-.567H12.36v9.232h4.5c1.532 0 2.667-.114 3.197-.642.244-.25.37-.59.346-.937.022-.353-.103-.7-.346-.96-.536-.527-1.67-.567-3.197-.567h-2.38a.708.708 0 0 1-.516-.205.687.687 0 0 1-.204-.51V14z"
      />
      <filter id="brd_svg__d" width="120.6%" height="121.9%" x="-10.3%" y="-7.8%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#brd_svg__a)" xlinkHref="#brd_svg__b" />
      <use fill="#FE5D86" xlinkHref="#brd_svg__b" />
      <use
        fill="url(#brd_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#brd_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#brd_svg__d)" xlinkHref="#brd_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#brd_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgBrd;

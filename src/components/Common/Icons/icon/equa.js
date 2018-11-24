import React from 'react';

const SvgEqua = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="equa_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="equa_svg__b" cx={16} cy={15} r={15} />
      <filter id="equa_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="equa_svg__e"
        d="M16.72 9.078s-4.127.606-4.728 5.193c0 0-.638 5.134 4.608 6.52a4.36 4.36 0 0 0 1.113.143h.258c.534 0 1.046.214 1.424.594.378.38.59.896.59 1.434a2.014 2.014 0 0 1-1.856 2.022c-2.579.174-6.04-1.092-8.286-4.136 0 0-4.399-6.325.395-12.137a10.172 10.172 0 0 1 4.277-3.072c1.97-.737 4.856-1.211 7.361.756 0 0 3.353 2.597 1.634 6.837 0 0-1.204 3.375-5.33 3.635l-.573-.032a1.895 1.895 0 0 1-1.414-.691 1.922 1.922 0 0 1-.413-1.527 1.904 1.904 0 0 1 1.818-1.605l.582-.04s1.977-.086 1.805-2.423c0 0-.172-2.077-3.266-1.47"
      />
      <filter id="equa_svg__d" width="121.9%" height="117.5%" x="-10.9%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#equa_svg__a)" xlinkHref="#equa_svg__b" />
      <use fill="#F68922" fillRule="evenodd" xlinkHref="#equa_svg__b" />
      <use
        fill="url(#equa_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#equa_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#equa_svg__d)" xlinkHref="#equa_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#equa_svg__e" />
    </g>
  </svg>
);

export default SvgEqua;

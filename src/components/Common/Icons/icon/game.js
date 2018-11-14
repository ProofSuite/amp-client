import React from 'react';

const SvgGame = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="game_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="game_svg__b" cx={16} cy={15} r={15} />
      <filter id="game_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="game_svg__e"
        d="M12.869 11.685h11.085v2.488H12.869v-2.488zm11.085 4.144H24v6.543s-8.647 6.265-15.363-.552c0 0-3.68-3.732-2.346-9.168 0 0 1.058-6.771 9.108-7.6 0 0 4.967-.692 8.187 2.994l-1.932 1.888s-4.094-4.238-9.567-.92c0 0-4.462 2.487-2.622 8.752 0 0 2.024 5.436 8.371 4.33 0 0 2.162-.492 3.266-1.444v-2.335H12.87v-2.488h11.085z"
      />
      <filter id="game_svg__d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#game_svg__a)" xlinkHref="#game_svg__b" />
      <use fill="#2D475B" xlinkHref="#game_svg__b" />
      <use
        fill="url(#game_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#game_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#game_svg__d)" xlinkHref="#game_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#game_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgGame;

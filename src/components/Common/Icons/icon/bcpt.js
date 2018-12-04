import React from 'react';

const SvgBcpt = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="bcpt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bcpt_svg__b" cx={16} cy={15} r={15} />
      <filter id="bcpt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="bcpt_svg__e"
        d="M16 26C9.925 26 5 21.075 5 15S9.925 4 16 4s11 4.925 11 11-4.925 11-11 11zm0-1.102c5.466 0 9.898-4.432 9.898-9.898 0-5.466-4.432-9.898-9.898-9.898-5.466 0-9.898 4.432-9.898 9.898 0 5.466 4.432 9.898 9.898 9.898zm6.043-13.778c.165 2.938-2.55 3.714-2.55 3.714 3.103.443 2.937 3.104 2.937 3.104 0 4.322-4.822 4.491-4.822 4.491h-6.763V7.572h6.098c5.1.222 5.1 3.548 5.1 3.548zm-7.706-.887v3.602h2.44s1.718-.055 1.828-1.441v-.887s0-1.163-1.663-1.274h-2.605zm4.6 8.15v-.888s0-1.165-1.662-1.276h-2.939v3.605h2.773s1.718-.055 1.829-1.442z"
      />
      <filter id="bcpt_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#bcpt_svg__a)" xlinkHref="#bcpt_svg__b" />
      <use fill="#404040" fillRule="evenodd" xlinkHref="#bcpt_svg__b" />
      <use
        fill="url(#bcpt_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#bcpt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#bcpt_svg__d)" xlinkHref="#bcpt_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#bcpt_svg__e" />
    </g>
  </svg>
);

export default SvgBcpt;

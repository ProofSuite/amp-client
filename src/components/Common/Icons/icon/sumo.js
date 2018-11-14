import React from 'react';

const SvgSumo = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="sumo_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="sumo_svg__b" cx={16} cy={15} r={15} />
      <filter id="sumo_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="sumo_svg__e"
        d="M18.061 8.084c3.404 3.566 4.268 4.196 5.095 4.423-2.875-.36-4.497-.564-7.206-1.986l-1.71 1.99L25 14.9c-3.366 2.862-4.824 4.387-6.939 7.014H13.99c-1.789-2.618-2.982-3.468-5.28-4.527 3.058.282 4.758.47 7.24 1.94l1.861-2.09L7 14.9c2.514-2.072 3.977-3.454 6.989-6.816h4.072zm-3.821-.497c.93-1.145 1.31-1.702 1.81-2.587.49.912.869 1.475 1.76 2.587h-3.57zm3.57 14.826C16.879 23.558 16.498 24.115 16 25c-.49-.912-.87-1.475-1.76-2.587h3.57z"
      />
      <filter id="sumo_svg__d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#sumo_svg__a)" xlinkHref="#sumo_svg__b" />
      <use fill="#2D9CDB" fillRule="evenodd" xlinkHref="#sumo_svg__b" />
      <use
        fill="url(#sumo_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#sumo_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeLinejoin="square" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#sumo_svg__d)" xlinkHref="#sumo_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#sumo_svg__e" />
    </g>
  </svg>
);

export default SvgSumo;

import React from 'react';

const SvgVia = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="via_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="via_svg__b" cx={16} cy={15} r={15} />
      <filter id="via_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="via_svg__e"
        d="M11.133 13.296H8.005v-1.719h2.47L8.58 6.627 10.144 6l3.55 9.267 4.601.03L21.856 6l1.565.627-1.896 4.95h2.47v1.72h-3.128l-.771 2.01 3.904.025-.01 1.719-4.55-.029L16 26l-3.456-9.021L8 16.949l.01-1.718 3.874.025-.75-1.96zm3.22 3.694L16 21.288l1.638-4.277-3.284-.02z"
      />
      <filter id="via_svg__d" width="121.9%" height="117.5%" x="-10.9%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#via_svg__a)" xlinkHref="#via_svg__b" />
      <use fill="#565656" xlinkHref="#via_svg__b" />
      <use
        fill="url(#via_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#via_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#via_svg__d)" xlinkHref="#via_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#via_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgVia;

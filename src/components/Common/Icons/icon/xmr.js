import React from 'react';

const SvgXmr = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="xmr_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xmr_svg__b" cx={16} cy={15} r={15} />
      <filter id="xmr_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="xmr_svg__e"
        d="M15.97 4.235c5.985 0 10.825 4.84 10.825 10.824a11.07 11.07 0 0 1-.558 3.432h-3.226V9.397l-7.04 7.04-7.04-7.04v9.094H5.704a11.07 11.07 0 0 1-.557-3.432c0-5.984 4.84-10.824 10.824-10.824zM14.358 18.02L16 19.635l1.613-1.614 3.051-3.08v5.72h4.547a10.806 10.806 0 0 1-9.24 5.192c-3.902 0-7.334-2.082-9.24-5.192h4.546v-5.72l3.08 3.08z"
      />
      <filter id="xmr_svg__d" width="116.2%" height="116.2%" x="-8.1%" y="-5.8%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#xmr_svg__a)" xlinkHref="#xmr_svg__b" />
      <use fill="#F60" xlinkHref="#xmr_svg__b" />
      <use
        fill="url(#xmr_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#xmr_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#xmr_svg__d)" xlinkHref="#xmr_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#xmr_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgXmr;

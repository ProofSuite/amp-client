import React from 'react';

const SvgTel = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="tel_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="tel_svg__b" cx={16} cy={15} r={15} />
      <filter id="tel_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="tel_svg__e"
        d="M25.08 10.478c.633.513 1.032 1.574.892 2.353l-1.36 7.524c-.142.784-.892 1.647-1.664 1.918l-7.419 2.605c-.772.271-1.92.075-2.552-.438l-6.058-4.917c-.633-.513-1.033-1.569-.89-2.353l1.36-7.524C7.53 8.862 8.28 8 9.053 7.728l7.42-2.606c.773-.272 1.92-.074 2.553.438l6.054 4.918zm-6.311 3.378l.302-1.53-2.832.005.4-2.016h-.915a5.759 5.759 0 0 1-2.748 2.225l-.257 1.319h1.238s-.419 1.894-.56 2.593c-.35 1.78.53 3.042 1.882 3.042h2.288l.4-1.69h-1.914c-.85 0-.805-.465-.64-1.29l.527-2.662 2.829.004z"
      />
      <filter id="tel_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#tel_svg__a)" xlinkHref="#tel_svg__b" />
      <use fill="#14C8FF" xlinkHref="#tel_svg__b" />
      <use
        fill="url(#tel_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#tel_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#tel_svg__d)" xlinkHref="#tel_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#tel_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgTel;

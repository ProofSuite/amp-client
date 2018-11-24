import React from 'react';

const SvgDoge = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="doge_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="doge_svg__b" cx={16} cy={15} r={15} />
      <filter id="doge_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="doge_svg__e"
        d="M13.248 13.61h4.314v2.286h-4.314v4.818h2.721c1.077 0 1.958-.145 2.644-.437.686-.291 1.224-.694 1.615-1.21a4.4 4.4 0 0 0 .796-1.815 11.4 11.4 0 0 0 .21-2.252 11.4 11.4 0 0 0-.21-2.252 4.396 4.396 0 0 0-.796-1.815c-.391-.516-.93-.919-1.615-1.21-.686-.292-1.567-.437-2.644-.437h-2.721v4.325zm-2.766 2.286H9v-2.285h1.482V7h6.549c1.21 0 2.257.21 3.142.627.885.419 1.607.99 2.168 1.715.56.724.977 1.572 1.25 2.543.273.971.409 2.01.409 3.115a11.47 11.47 0 0 1-.41 3.115c-.272.97-.689 1.819-1.25 2.543-.56.725-1.282 1.296-2.167 1.715-.885.418-1.933.627-3.142.627h-6.549v-7.104z"
      />
      <filter id="doge_svg__d" width="123.3%" height="121.9%" x="-11.7%" y="-7.8%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#doge_svg__a)" xlinkHref="#doge_svg__b" />
      <use fill="#C3A634" xlinkHref="#doge_svg__b" />
      <use
        fill="url(#doge_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#doge_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#doge_svg__d)" xlinkHref="#doge_svg__e" />
      <use fill="#FFF" xlinkHref="#doge_svg__e" />
    </g>
  </svg>
);

export default SvgDoge;

import React from 'react';

const SvgXbc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="xbc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xbc_svg__b" cx={16} cy={15} r={15} />
      <filter id="xbc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="xbc_svg__e"
        d="M26.51 16.917v2.25h-1.5v-2.25h-2.25v-1.5h2.25v-2.25h1.5v2.25h2.25v1.5h-2.25zm-6.657-4.519c.13 1.359-.426 2.174-1.314 2.637 1.462.36 2.378 1.249 2.198 3.242-.224 2.474-2.027 3.138-4.603 3.29v2.6h-1.532V21.6c-.396 0-.803-.003-1.223-.011v2.577h-1.53l-.001-2.605c-.359-.003-.724-.009-1.095-.01H8.76l.304-1.871s1.133.018 1.114 0c.433-.001.548-.32.575-.52v-4.11h.163a1.204 1.204 0 0 0-.162-.01v-2.934c-.06-.319-.261-.687-.882-.687.019-.022-1.112 0-1.112 0V9.746h2.112v.009c.318 0 .644-.007.976-.014V7.167h1.531V9.69c.41-.008.82-.017 1.224-.017V7.167h1.531v2.575c1.978.177 3.544.8 3.719 2.656zm-2.144 5.57c0-2.03-3.255-1.725-4.294-1.725v3.45c1.038 0 4.295.221 4.294-1.725zm-.712-4.87c0-1.846-2.717-1.565-3.582-1.565v3.13c.865 0 3.581.207 3.582-1.564z"
      />
      <filter id="xbc_svg__d" width="117.5%" height="120.6%" x="-8.8%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#xbc_svg__a)" xlinkHref="#xbc_svg__b" />
      <use fill="#F7931A" xlinkHref="#xbc_svg__b" />
      <use
        fill="url(#xbc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#xbc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero" transform="rotate(14 18.76 15.667)">
        <use fill="#000" filter="url(#xbc_svg__d)" xlinkHref="#xbc_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#xbc_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgXbc;

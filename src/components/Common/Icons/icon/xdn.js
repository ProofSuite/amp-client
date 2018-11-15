import React from 'react';

const SvgXdn = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="xdn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xdn_svg__b" cx={16} cy={15} r={15} />
      <filter id="xdn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="xdn_svg__e"
        d="M13.309 11h2.738c1.322 0 3.683.803 3.683 4s-2.36 4-3.683 4H13.31v-8zm1.51 6.38h1.134c.944 0 2.077-.578 2.077-2.38s-1.133-2.38-2.077-2.38H14.82v4.76zM20.77 11h.566l5.098 7.026V11H27v8h-.567l-5.098-6.872V19h-.567v-8zM5 11h1.888v2H5v-2zm2.833 0H9.72v2H7.833v-2zm2.832 0h1.889v2h-1.889v-2zm0 3h1.889v2h-1.889v-2zm0 3h1.889v2h-1.889v-2zm-2.832-3H9.72v2H7.833v-2z"
      />
      <filter id="xdn_svg__d" width="115.9%" height="143.8%" x="-8%" y="-15.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#xdn_svg__a)" xlinkHref="#xdn_svg__b" />
      <use fill="#4F7AA2" xlinkHref="#xdn_svg__b" />
      <use
        fill="url(#xdn_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#xdn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#xdn_svg__d)" xlinkHref="#xdn_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#xdn_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgXdn;

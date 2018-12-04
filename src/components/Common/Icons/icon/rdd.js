import React from 'react';

const SvgRdd = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="rdd_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="rdd_svg__b" cx={16} cy={15} r={15} />
      <filter id="rdd_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#rdd_svg__a)" xlinkHref="#rdd_svg__b" />
      <use fill="#E30613" xlinkHref="#rdd_svg__b" />
      <use
        fill="url(#rdd_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#rdd_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF">
        <path
          d="M15.361 26C9.64 26 5 21.407 5 15.742 5 10.077 9.639 5.484 15.361 5.484c5.723 0 10.362 4.593 10.362 10.258C25.723 21.407 21.083 26 15.36 26zM17.15 8.423c2.416.989 4.152 2.85 5.384 5.358l.93-.647c-1.044-2.512-2.973-4.486-6.076-5.766l-.238 1.055z"
          opacity={0.75}
        />
        <path
          fillRule="nonzero"
          d="M26.992 8.321C26.992 5.935 25.037 4 22.627 4s-4.365 1.935-4.365 4.321c0 .228.018.455.054.68 1.453.846 2.62 2.06 3.553 3.576.25.043.504.066.758.066 2.41 0 4.365-1.935 4.365-4.322z"
        />
      </g>
    </g>
  </svg>
);

export default SvgRdd;

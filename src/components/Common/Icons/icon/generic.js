import React from 'react';

const SvgGeneric = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="generic_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="generic_svg__b" cx={16} cy={15} r={15} />
      <filter id="generic_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="generic_svg__e"
        d="M21.002 8.855A7.947 7.947 0 0 1 24 14.278l-2.847-.708a5.357 5.357 0 0 0-3.86-3.667c-2.866-.713-5.76.991-6.465 3.806-.703 2.815 1.05 5.675 3.917 6.388a5.373 5.373 0 0 0 5.134-1.43l2.847.707a7.974 7.974 0 0 1-5.2 3.385L16.716 26l-2.596-.645.644-2.575a8.28 8.28 0 0 1-1.298-.323l-.643 2.575-2.596-.646.81-3.241c-2.378-1.875-3.575-4.996-2.804-8.081.771-3.086 3.297-5.281 6.28-5.823L15.323 4l2.596.645-.644 2.575a8.28 8.28 0 0 1 1.298.323l.643-2.575 2.596.646-.81 3.241z"
      />
      <filter id="generic_svg__d" width="121.9%" height="115.9%" x="-10.9%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#generic_svg__a)" xlinkHref="#generic_svg__b" />
        <use fill="#EFB914" fillRule="evenodd" xlinkHref="#generic_svg__b" />
        <use
          fill="url(#generic_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#generic_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#generic_svg__d)" xlinkHref="#generic_svg__e" />
      <use fill="#FFF" xlinkHref="#generic_svg__e" />
    </g>
  </svg>
);

export default SvgGeneric;

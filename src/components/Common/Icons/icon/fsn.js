import React from 'react';

const SvgFsn = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="fsn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="fsn_svg__b" cx={16} cy={15} r={15} />
      <filter id="fsn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="fsn_svg__e"
        d="M25 10.844c-.931-.975-2.845-1.792-6.414-2.293a55.13 55.13 0 0 0-3.388-.37c-.879-.052-1.732-.105-2.56-.105-1.37 2.056-2.664 4.534-3.802 7.513-1.241 3.269-2.353 6.485-3.13 9.411h-.232c.078-3.137.595-6.696 1.655-10.386.699-2.4 1.526-4.508 2.457-6.353C5.396 8.709 2.396 10 1 11.846 2.19 8.92 5.733 6.442 11.138 5.572c2.87-4.297 6.259-6.221 9.078-5.378.982.29 1.81.923 2.482 1.82a.803.803 0 0 0-.258-.133c-2.07-.843-4.862.37-7.578 3.375h.13c6.077-.027 9.155 2.557 10.008 5.588zm-7.603 3.954c1.655 0 3 1.397 3 3.11 0 1.714-1.345 3.111-3 3.111-1.656 0-3-1.397-3-3.11 0-1.74 1.344-3.11 3-3.11z"
      />
      <filter id="fsn_svg__d" width="114.6%" height="114%" x="-7.3%" y="-5%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#fsn_svg__a)" xlinkHref="#fsn_svg__b" />
      <use fill="#1D9AD7" xlinkHref="#fsn_svg__b" />
      <use
        fill="url(#fsn_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#fsn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#fsn_svg__d)" xlinkHref="#fsn_svg__e" />
      <use fill="#FFF" xlinkHref="#fsn_svg__e" />
    </g>
  </svg>
);

export default SvgFsn;

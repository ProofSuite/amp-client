import React from 'react';

const SvgCob = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="cob_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="cob_svg__b" cx={16} cy={15} r={15} />
      <filter id="cob_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="cob_svg__e"
        d="M16 24h-4.536l2.272-3.957h4.528L20.536 24H16zM13.737 9.955h-.001L11.464 6h9.072l-2.272 3.956h-4.528zm9.999 9.539h-.002.002l-2.273 3.958-2.264-3.957h.001l2.263-3.958H26l-2.264 3.957zM8.264 10.496l2.272-3.957 2.264 3.957-2.264 3.956H6l2.264-3.956zm4.535 9h.001l-2.264 3.957-2.272-3.957L6 15.537h4.536l2.264 3.957zm10.937-9L26 14.453h-4.536l-2.265-3.957 2.264-3.957 2.273 3.957z"
      />
      <filter id="cob_svg__d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#cob_svg__a)" xlinkHref="#cob_svg__b" />
      <use fill="#13BF99" xlinkHref="#cob_svg__b" />
      <use
        fill="url(#cob_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#cob_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#cob_svg__d)" xlinkHref="#cob_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#cob_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgCob;

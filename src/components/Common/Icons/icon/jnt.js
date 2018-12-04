import React from 'react';

const SvgJnt = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="jnt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="jnt_svg__b" cx={16} cy={15} r={15} />
      <filter id="jnt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="jnt_svg__e"
        d="M16 25a3.626 3.626 0 0 1-1.844-.505l-5.306-3.12A3.785 3.785 0 0 1 7 18.114v-6.23a3.797 3.797 0 0 1 1.85-3.259l5.306-3.12A3.664 3.664 0 0 1 16.008 5c.645 0 1.28.174 1.836.505l5.306 3.121A3.785 3.785 0 0 1 25 11.885v6.23a3.797 3.797 0 0 1-1.85 3.26l-5.306 3.12c-.56.33-1.196.505-1.844.505zm-3.052-6.429l-.983 1a2.69 2.69 0 0 0 1.957.822c1.53-.002 2.772-1.264 2.774-2.823v-.852c.42.247.897.377 1.382.376a2.663 2.663 0 0 0 1.965-.812l-.982-1c-.26.266-.614.416-.983.416a1.397 1.397 0 0 1-1.382-1.407V9.595h-1.382v7.984c0 .779-.62 1.41-1.385 1.41a1.37 1.37 0 0 1-.981-.418z"
      />
      <filter id="jnt_svg__d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#jnt_svg__a)" xlinkHref="#jnt_svg__b" />
      <use fill="#0050DB" xlinkHref="#jnt_svg__b" />
      <use
        fill="url(#jnt_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#jnt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#jnt_svg__d)" xlinkHref="#jnt_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#jnt_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgJnt;

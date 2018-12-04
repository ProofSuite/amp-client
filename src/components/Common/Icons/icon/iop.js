import React from 'react';

const SvgIop = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="iop_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="iop_svg__b" cx={16} cy={15} r={15} />
      <filter id="iop_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="iop_svg__e"
        d="M10.123 7.283l.398-.717A1.09 1.09 0 0 1 11.473 6h8.955c.371 0 .716.192.917.508h4.058v7.14l.449.79a1.14 1.14 0 0 1 0 1.124l-.449.79v3.072l-3.437 2.978-.592 1.041a1.09 1.09 0 0 1-.946.557h-8.955a1.09 1.09 0 0 1-.952-.566l-.025-.044H6.498v-7.2l-.355-.639a1.14 1.14 0 0 1 0-1.104l.355-.639v-3.233l3.625-3.293zm1.35-.164L7.095 15l4.378 7.881h8.955L24.905 15l-4.477-7.881h-8.955zm.405.712h8.149L24.1 15l-4.073 7.17h-8.149L7.895 15l3.983-7.17zm1.883 3.05l-2.189 4.068 2.19 4.068h4.676l2.189-4.068-2.19-4.068h-4.676z"
      />
      <filter id="iop_svg__d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#iop_svg__a)" xlinkHref="#iop_svg__b" />
        <use fill="#4CB8D1" fillRule="evenodd" xlinkHref="#iop_svg__b" />
        <use
          fill="url(#iop_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#iop_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#iop_svg__d)" xlinkHref="#iop_svg__e" />
      <use fill="#FFF" xlinkHref="#iop_svg__e" />
    </g>
  </svg>
);

export default SvgIop;

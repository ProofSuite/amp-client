import React from 'react';

const SvgGbx = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="gbx_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="gbx_svg__b" cx={16} cy={15} r={15} />
      <filter id="gbx_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="gbx_svg__e"
        d="M15.699 10.006v2.06h-4.7c-.61 0-1.361.214-1.92.61-.693.492-1.08 1.229-1.08 2.327 0 1.099.387 1.835 1.08 2.327.559.396 1.31.61 1.92.61h2V20h-2a5.448 5.448 0 0 1-3.054-.973C6.717 18.155 6 16.789 6 15.003s.717-3.152 1.945-4.024a5.447 5.447 0 0 1 3.053-.973h4.7zm-5 6.182v-2.06h5V20H13.7v-3.812h-3zM19 12.06V10h7v10h-9.002v-7.933h2v5.872H24v-5.878h-5.002z"
      />
      <filter id="gbx_svg__d" width="117.5%" height="135%" x="-8.8%" y="-12.5%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#gbx_svg__a)" xlinkHref="#gbx_svg__b" />
      <use fill="#1666AF" xlinkHref="#gbx_svg__b" />
      <use
        fill="url(#gbx_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#gbx_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#gbx_svg__d)" xlinkHref="#gbx_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#gbx_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgGbx;

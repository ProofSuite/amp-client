import React from 'react';

const SvgVivo = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="vivo_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="vivo_svg__b" cx={16} cy={15} r={15} />
      <filter id="vivo_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="vivo_svg__e"
        d="M23.049 9.277a1.574 1.574 0 0 1 2.19-.537c.75.47.986 1.47.526 2.237-1.704 2.838-3.627 5.808-5.23 8.076-2.34 3.31-2.847 4.447-4.535 4.447-1.688 0-2.068-1.003-4.475-4.456-1.43-2.05-3.223-4.795-5.27-8.036A1.647 1.647 0 0 1 6.73 8.76a1.573 1.573 0 0 1 2.202.485c2.023 3.202 6.593 9.876 7.081 10.471.51-.604 5.372-7.667 7.036-10.44z"
      />
      <filter id="vivo_svg__d" width="117.5%" height="123.3%" x="-8.8%" y="-8.3%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#vivo_svg__a)" xlinkHref="#vivo_svg__b" />
      <use fill="#408AF1" xlinkHref="#vivo_svg__b" />
      <use
        fill="url(#vivo_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#vivo_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#vivo_svg__d)" xlinkHref="#vivo_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#vivo_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgVivo;

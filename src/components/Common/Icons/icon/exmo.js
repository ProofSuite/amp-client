import React from 'react';

const SvgExmo = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="exmo_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="exmo_svg__b" cx={16} cy={15} r={15} />
      <filter id="exmo_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="exmo_svg__e"
        d="M19.7 12.055l-2.869 7.75-.018.047-.526-1.055-1.1.5 2.885-7.797 1.1-.5.527 1.055zm7.18.183L24.012 20l-.527-1.058-1.1.5.067-.182 2.867-7.76 1.1-.5.525 1.055-.064.183zm-6.14 6.712l1.689-4.563-1.103.5-.524-1.057-1.694 4.562.525 1.058 1.107-.5zm-9.137-4.5H6.558l.86.8-.86.813h5.04l.856-.813-.851-.8zM5.86 17.833h8.155l-.857.807.857.805H5.86L5 18.64l.86-.808zm2.501-6.768h8.15l-.854.808.855.805h-8.15l-.86-.806.86-.807z"
      />
      <filter id="exmo_svg__d" width="115.9%" height="138.9%" x="-8%" y="-13.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#exmo_svg__a)" xlinkHref="#exmo_svg__b" />
        <use fill="#347FFB" fillRule="evenodd" xlinkHref="#exmo_svg__b" />
        <use
          fill="url(#exmo_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#exmo_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#exmo_svg__d)" xlinkHref="#exmo_svg__e" />
      <use fill="#FFF" xlinkHref="#exmo_svg__e" />
    </g>
  </svg>
);

export default SvgExmo;

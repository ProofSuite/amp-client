import React from 'react';

const SvgTaas = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="taas_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="taas_svg__b" cx={16} cy={15} r={15} />
      <filter id="taas_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="taas_svg__e"
        d="M4 12h1.298v1.221H4V12zm1.298 4.774h3.777V18H4v-3.558h3.81v1.22H5.299v1.112zm17.627-2.332H28V18h-3.81v-1.226h2.512v-1.111h-3.777v-1.221zm3.798-1.162h-3.8v-1.221h3.8v1.22zm-16.411 1.162h5.075v2.384h-1.264V18h-3.811v-3.558zm3.777 2.332v-1.111H11.61v1.11h2.48zM10.312 12h5.075v1.221h-5.075V12zm6.334 2.442h5.075v2.384h-1.264V18h-3.81v-3.558zm3.772 2.332v-1.111h-2.48v1.11h2.48zM16.646 12h5.075v1.221h-5.075V12z"
      />
      <filter id="taas_svg__d" width="114.6%" height="158.3%" x="-7.3%" y="-20.8%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#taas_svg__a)" xlinkHref="#taas_svg__b" />
      <use fill="#002342" fillRule="evenodd" xlinkHref="#taas_svg__b" />
      <use
        fill="url(#taas_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#taas_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#taas_svg__d)" xlinkHref="#taas_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#taas_svg__e" />
    </g>
  </svg>
);

export default SvgTaas;

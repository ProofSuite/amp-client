import React from 'react';

const SvgTau = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="tau_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="tau_svg__b" cx={16} cy={15} r={15} />
      <filter id="tau_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="tau_svg__e"
        d="M8.094 12.678l2.11 2.11H6l2.094-2.11zm2.11 2.55l-2.11 2.094L6 15.228h4.203zm2.852-2.853l-2.11 2.094v-4.203l2.11 2.109zm-2.55 2.094l-2.093-2.094 2.094-2.11v4.204zm2.854-2.413l-2.094-2.094h4.203l-2.11 2.094zm0-4.643l2.109 2.109h-4.203l2.094-2.11zm4.962-.304l-2.11 2.094V5l2.11 2.11zm-2.55 2.094L13.678 7.11 15.772 5v4.203zm-2.716 8.437l-2.11 2.094v-4.203l2.11 2.11zm-4.643 0l2.094-2.109v4.203L8.413 17.64zm10.212-5.584l-2.094-2.094h4.203l-2.109 2.094zm-2.094-2.534l2.094-2.11 2.11 2.11H16.53zM15.47 20.493l-2.11 2.094-2.093-2.094h4.203zm-2.11-2.55l2.11 2.11h-4.203l2.094-2.11zm10.228-5.568l-2.109 2.094v-4.203l2.11 2.109zm-4.643 0l2.094-2.11v4.204l-2.094-2.094zm-5.266 10.53l2.094-2.108V25l-2.094-2.094zm2.534-2.108l2.11 2.109L16.212 25v-4.203zm2.413 1.79l-2.094-2.094h4.203l-2.109 2.094zm0-4.643l2.11 2.11H16.53l2.094-2.11zm2.853-2.413l2.11 2.11-2.11 2.093v-4.203zm-2.534 2.11l2.094-2.11v4.203l-2.094-2.094zm4.947-.32l-2.094-2.093H26l-2.11 2.094zm0-4.643L26 14.788h-4.203l2.094-2.11z"
      />
      <filter id="tau_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#tau_svg__a)" xlinkHref="#tau_svg__b" />
      <use fill="#7B346E" xlinkHref="#tau_svg__b" />
      <use
        fill="url(#tau_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#tau_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#tau_svg__d)" xlinkHref="#tau_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#tau_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgTau;

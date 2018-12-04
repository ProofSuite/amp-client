import React from 'react';

const SvgRub = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="rub_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="rub_svg__b" cx={16} cy={15} r={15} />
      <filter id="rub_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="rub_svg__e"
        d="M10.5 14.238h1.764V6h4.547c.844 0 1.614.099 2.31.297.696.198 1.292.5 1.789.904.497.404.886.917 1.168 1.536.281.62.422 1.36.422 2.221s-.15 1.61-.447 2.247a4.478 4.478 0 0 1-1.218 1.588 5.113 5.113 0 0 1-1.813.943 7.91 7.91 0 0 1-2.261.31h-2.51v2.608h4v1.705h-4V24h-1.987v-3.641H10.5v-1.705h1.764v-2.608H10.5v-1.808zm6.31 0c1.143 0 2.042-.271 2.696-.813.654-.543.982-1.365.982-2.467 0-1.101-.328-1.902-.982-2.401-.654-.5-1.553-.75-2.695-.75h-2.56v6.431h2.56z"
      />
      <filter id="rub_svg__d" width="129.2%" height="119.4%" x="-14.6%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#rub_svg__a)" xlinkHref="#rub_svg__b" />
      <use fill="#64D1FF" xlinkHref="#rub_svg__b" />
      <use
        fill="url(#rub_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#rub_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#rub_svg__d)" xlinkHref="#rub_svg__e" />
      <use fill="#FFF" xlinkHref="#rub_svg__e" />
    </g>
  </svg>
);

export default SvgRub;

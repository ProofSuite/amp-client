import React from 'react';

const SvgAtm = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="atm_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="atm_svg__b" cx={16} cy={15} r={15} />
      <filter id="atm_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="atm_svg__d" width="142.3%" height="129.5%" x="-21.2%" y="-10.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.104987545 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <path
        id="atm_svg__f"
        d="M8.878 15.596v2.035A4.369 4.369 0 0 1 4.509 22h-.14A4.369 4.369 0 0 1 0 17.631v-6.865a4.369 4.369 0 0 1 4.122-4.362V4.369A4.369 4.369 0 0 1 8.491 0h.14A4.369 4.369 0 0 1 13 4.369v6.865a4.369 4.369 0 0 1-4.122 4.362zm0 0v-4.83a4.369 4.369 0 0 0-4.369-4.369h-.14a4.05 4.05 0 0 0-.247.007v4.83a4.369 4.369 0 0 0 4.369 4.369h.14c.083 0 .165-.002.247-.007z"
      />
      <filter id="atm_svg__e" width="126.9%" height="115.9%" x="-13.5%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#atm_svg__a)" xlinkHref="#atm_svg__b" />
      <use fill="#346FCE" xlinkHref="#atm_svg__b" />
      <use
        fill="url(#atm_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#atm_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g filter="url(#atm_svg__d)" transform="rotate(-28 18.75 -5.975)">
        <use fill="#000" filter="url(#atm_svg__e)" xlinkHref="#atm_svg__f" />
        <use fill="#FFF" xlinkHref="#atm_svg__f" />
      </g>
    </g>
  </svg>
);

export default SvgAtm;

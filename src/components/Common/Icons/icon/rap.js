import React from 'react';

const SvgRap = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="rap_svg__c">
        <stop stopColor="#FFF" offset="0%" />
        <stop offset="100%" />
      </linearGradient>
      <circle id="rap_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="rap_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#rap_svg__a)" xlinkHref="#rap_svg__b" />
        <use fill="#000" xlinkHref="#rap_svg__b" />
        <use
          fill="url(#rap_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#rap_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path
        d="M12.478 5.435v19.478H9V5h3.478v.435zM14.957 5h1.956c4.044 0 6.74 2.565 6.74 6.217 0 2.957-1.61 5.218-4.523 5.957l5.087 7.739H20.13L13.174 14.13h3.348c2.217 0 3.608-1 3.608-2.956 0-1.957-1.39-2.957-3.608-2.957H15V5h-.043z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgRap;

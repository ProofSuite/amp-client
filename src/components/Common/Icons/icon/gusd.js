import React from 'react';

const SvgGusd = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gusd_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="gusd_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="gusd_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#gusd_svg__a)" xlinkHref="#gusd_svg__b" />
        <use fill="#00DCFA" xlinkHref="#gusd_svg__b" />
        <use
          fill="url(#gusd_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#gusd_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path
        d="M19.07 5c-3.517 0-6.505 2.706-6.882 6.188C8.706 11.565 6 14.553 6 18.071A6.934 6.934 0 0 0 12.93 25c3.517 0 6.517-2.706 6.882-6.188C23.294 18.435 26 15.447 26 11.929A6.934 6.934 0 0 0 19.07 5zm5.306 7.706a5.392 5.392 0 0 1-4.517 4.518v-4.518h4.517zM7.624 17.294a5.392 5.392 0 0 1 4.517-4.53v4.518H7.624v.012zm10.611 1.565a5.359 5.359 0 0 1-5.306 4.576 5.358 5.358 0 0 1-5.305-4.576h10.611zm.06-6.153v4.576h-4.59v-4.576h4.59zm6.081-1.565H13.765a5.359 5.359 0 0 1 5.306-4.576 5.358 5.358 0 0 1 5.305 4.576z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgGusd;

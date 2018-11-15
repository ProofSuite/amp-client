import React from 'react';

const SvgNpxs = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="npxs_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="npxs_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="npxs_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#npxs_svg__a)" xlinkHref="#npxs_svg__b" />
        <use fill="#F5D100" fillRule="evenodd" xlinkHref="#npxs_svg__b" />
        <use
          fill="url(#npxs_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#npxs_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g fill="#FFF">
        <path d="M15.975 4C9.925 4 5 8.925 5 14.975s4.925 10.983 10.983 10.983c6.059 0 10.983-4.925 10.983-10.983C26.966 8.916 22.033 4 15.975 4zm0 21.112c-5.585 0-10.137-4.544-10.137-10.137C5.846 9.39 10.39 4.846 15.975 4.846c5.584 0 10.137 4.544 10.137 10.137 0 5.585-4.544 10.129-10.137 10.129z" />
        <path d="M10.292 10.102l.808-.808 4.295 4.296-.807.808zm6.25 6.252l.808-.808 4.295 4.296-.807.808zm-1.37-1.377l.807-.807.814.814-.807.807zm1.383-1.352L20.85 9.33l.808.808-4.296 4.296zm-6.231 6.223l4.295-4.296.808.808-4.296 4.296z" />
      </g>
    </g>
  </svg>
);

export default SvgNpxs;

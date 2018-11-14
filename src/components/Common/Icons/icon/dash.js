import React from 'react';

const SvgDash = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dash_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="dash_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="dash_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#dash_svg__a)" xlinkHref="#dash_svg__b" />
        <use fill="#008CE7" fillRule="evenodd" xlinkHref="#dash_svg__b" />
        <use
          fill="url(#dash_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#dash_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g fill="#FFF">
        <path d="M18.777 8.004H12.23l-.542 3.03 5.906.008c2.908 0 3.77 1.056 3.743 2.809-.012.898-.404 2.417-.57 2.908-.447 1.313-1.369 2.808-4.822 2.805l-5.74-.004-.543 3.034h6.532c2.302 0 3.283-.27 4.32-.748 2.298-1.06 3.667-3.33 4.217-6.294.815-4.41-.202-7.548-5.954-7.548z" />
        <path d="M15.826 15.018c.214-.886.28-1.242.28-1.242h-6.7c-1.714 0-1.959 1.115-2.121 1.792a27.99 27.99 0 0 0-.281 1.242h6.701c1.713 0 1.959-1.115 2.12-1.792z" />
      </g>
    </g>
  </svg>
);

export default SvgDash;

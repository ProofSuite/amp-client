import React from 'react';

const SvgMsr = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="msr_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="msr_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="msr_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#msr_svg__a)" xlinkHref="#msr_svg__b" />
        <use fill="#47B95C" fillRule="evenodd" xlinkHref="#msr_svg__b" />
        <use
          fill="url(#msr_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#msr_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g fill="#FFF">
        <path d="M16 6c-4.968 0-9 4.032-9 9 0 .12.012.234.018.354h4.224l2.04-3.51L16 15.738l2.712-3.894 2.04 3.51h4.224c.006-.12.018-.234.018-.354C25 10.032 20.968 6 16 6zm6.204 8.268c-.366-3.102-3.006-5.514-6.204-5.514s-5.838 2.418-6.204 5.514H8.704A7.338 7.338 0 0 1 16 7.668c3.798 0 6.924 2.898 7.296 6.6h-1.092z" />
        <path d="M18.634 13.86L16 17.64l-2.634-3.78-1.5 2.58h-4.74C7.816 20.724 11.518 24 16 24s8.184-3.276 8.874-7.566h-4.74l-1.5-2.574zm3.078 3.66h1.164c-1.032 2.802-3.72 4.812-6.876 4.812s-5.844-2.01-6.876-4.812h1.164A6.254 6.254 0 0 0 16 21.246c2.55 0 4.74-1.536 5.712-3.726z" />
      </g>
    </g>
  </svg>
);

export default SvgMsr;

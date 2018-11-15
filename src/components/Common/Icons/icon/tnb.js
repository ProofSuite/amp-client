import React from 'react';

const SvgTnb = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="tnb_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="tnb_svg__b" cx={16} cy={15} r={15} />
      <filter id="tnb_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="tnb_svg__e"
        d="M15.598 10.857h.003l-.03.13-.26 1.227h-.03L13.568 19.5h-2.179l1.747-7.286h-2.932L8.558 19.5H6.162l2.178-9h7.333l-.075.357zm4.141-.357h3.63c3.123.143 2.832 2.214 2.832 2.214H27l-.29.857h-.727c-.217.786-1.67 1.215-1.67 1.215 1.67.214 1.598 1.5 1.598 1.5h.799l-.218.857h-.654c-.167 1.19-1.222 1.768-2.089 2.043a5.35 5.35 0 0 1-1.62.243H17.56l2.18-8.929zM7.323 12.214H5l.436-1.714h2.323l-.436 1.714zm9.948 6.286l-1.888-4.429.799-3.428 1.887 4.214-.798 3.643zm5.554-4.429c.26 0 .51-.1.693-.282a.956.956 0 0 0 0-1.364.988.988 0 0 0-.693-.282H21.41l-.435 1.928h1.851zm-.489 3.715c.651 0 1.179-.496 1.179-1.107 0-.612-.525-1.108-1.179-1.108h-1.702l-.524 2.215h2.226z"
      />
      <filter id="tnb_svg__d" width="115.9%" height="138.9%" x="-8%" y="-13.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#tnb_svg__a)" xlinkHref="#tnb_svg__b" />
      <use fill="#FFC04E" xlinkHref="#tnb_svg__b" />
      <use
        fill="url(#tnb_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#tnb_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#tnb_svg__d)" xlinkHref="#tnb_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#tnb_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgTnb;

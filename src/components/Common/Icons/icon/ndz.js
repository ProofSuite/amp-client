import React from 'react';

const SvgNdz = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="ndz_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ndz_svg__b" cx={16} cy={15} r={15} />
      <filter id="ndz_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ndz_svg__e"
        d="M18.586 16.376c-.087.027-.171.06-.253.098l-3.676-3.821a1.91 1.91 0 0 0-1.14-2.794V7.186l-.984-.55 2.273-1.315a2.384 2.384 0 0 1 2.388 0l4.519 2.616-1.786 1.033a1.911 1.911 0 0 0-2.686 1.747 1.91 1.91 0 0 0 1.345 1.824v3.835zm1.138 0V12.54a1.91 1.91 0 0 0 1.092-2.773l2.03-1.174.97.56A2.372 2.372 0 0 1 25 11.207v7.586c0 .846-.451 1.628-1.185 2.053l-4.09 2.368v-3.192a1.91 1.91 0 0 0 1.344-1.823 1.91 1.91 0 0 0-1.345-1.823zm-2.227.869a1.91 1.91 0 0 0 1.089 2.777v3.851l-1.392.806a2.384 2.384 0 0 1-2.388 0L9.94 21.863l1.828-1.428a1.91 1.91 0 0 0 1.231.447 1.911 1.911 0 0 0 1.914-1.91 1.91 1.91 0 0 0-1.397-1.838v-3.598c.105-.029.207-.067.304-.113l3.676 3.822zm-5.118-.079a1.91 1.91 0 0 0-1.226 2.308L8.882 21.25l-.697-.403A2.372 2.372 0 0 1 7 18.793v-7.586c0-.846.451-1.628 1.185-2.053l3.205-1.856.99.553v2.04a1.91 1.91 0 0 0-1.294 1.807c0 .837.541 1.55 1.293 1.806v3.662zM13 12.523a.827.827 0 1 1-.002-1.653.827.827 0 0 1 .002 1.653zm0 7.275a.827.827 0 1 1-.002-1.653.827.827 0 0 1 .002 1.653zm6.155-8.255a.827.827 0 1 1-.002-1.653.827.827 0 0 1 .002 1.653zm0 7.482a.827.827 0 1 1-.002-1.654.827.827 0 0 1 .002 1.654z"
      />
      <filter id="ndz_svg__d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#ndz_svg__a)" xlinkHref="#ndz_svg__b" />
        <use fill="#622FBA" fillRule="evenodd" xlinkHref="#ndz_svg__b" />
        <use
          fill="url(#ndz_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#ndz_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#ndz_svg__d)" xlinkHref="#ndz_svg__e" />
      <use fill="#FFF" xlinkHref="#ndz_svg__e" />
    </g>
  </svg>
);

export default SvgNdz;

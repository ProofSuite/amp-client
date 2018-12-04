import React from 'react';

const SvgPay = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="pay_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="pay_svg__b" cx={16} cy={15} r={15} />
      <filter id="pay_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="pay_svg__e"
        d="M26.91 14.696a1.137 1.137 0 0 0-.215-.3C24.793 12.242 20.922 8 20.922 8l-4.917 5.378-4.98-5.327S7.109 12.33 5.19 14.507c-.25.246-.25.69-.026.952.997 1.136 5.894 6.536 5.894 6.536l4.94-5.414L20.904 22l5.917-6.546s.125-.13.152-.217c.058-.18.016-.376-.063-.541m-18.992.599c-.16-.189-.106-.486.043-.665.626-.713 3.131-3.4 3.131-3.4l3.49 3.705-3.496 3.824s-2.14-2.284-3.168-3.464m15.988.126a2.267 2.267 0 0 1-.256.355l-2.71 2.945L17.44 15l3.444-3.775s1.984 2.055 2.893 3.16c.077.096.168.187.207.309.083.239.03.505-.079.726"
      />
      <filter id="pay_svg__d" width="115.9%" height="125%" x="-8%" y="-8.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#pay_svg__a)" xlinkHref="#pay_svg__b" />
      <use fill="#302C2C" fillRule="evenodd" xlinkHref="#pay_svg__b" />
      <use
        fill="url(#pay_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#pay_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#pay_svg__d)" xlinkHref="#pay_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#pay_svg__e" />
    </g>
  </svg>
);

export default SvgPay;

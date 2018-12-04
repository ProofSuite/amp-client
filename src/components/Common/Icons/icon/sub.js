import React from 'react';

const SvgSub = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="sub_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="sub_svg__b" cx={16} cy={15} r={15} />
      <filter id="sub_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="sub_svg__e"
        d="M12.117 4.314a.24.24 0 0 1 .15-.05.25.25 0 0 1 .15.05l1.257.942a.25.25 0 1 1-.301.4l-1.106-.827L8.67 7.526l15.8 11.854a.252.252 0 0 1 0 .403l-1.161.87a.25.25 0 0 1-.3-.402l.893-.67L8.101 7.729a.248.248 0 0 1 0-.4l4.016-3.014zm4.017 0a.247.247 0 0 1 .3-.002l8.035 6.027a.246.246 0 0 1 .086.279.249.249 0 0 1-.237.172h-4.017a.255.255 0 0 1-.15-.05l-5.273-3.954a.25.25 0 1 1 .301-.402l5.207 3.904h3.179l-7.28-5.46-5.04 3.78a.25.25 0 1 1-.301-.402l5.19-3.892zM9.21 9.509a.252.252 0 0 1 .3.402l-.841.63L24.47 22.395a.25.25 0 0 1 0 .402l-4.017 3.013a.253.253 0 0 1-.3 0l-1.163-.872a.251.251 0 0 1 .303-.402l1.01.757 3.6-2.7L8.098 10.742a.253.253 0 0 1 0-.402l1.11-.83zm-.959 9.819v.002h4.015a.24.24 0 0 1 .15.05l5.216 3.911a.25.25 0 1 1-.3.402l-5.146-3.861H9.005l7.281 5.46 5.03-3.772a.251.251 0 0 1 .302.402l-5.181 3.884a.25.25 0 0 1-.15.05.246.246 0 0 1-.151-.05l-8.037-6.025a.251.251 0 1 1 .152-.453z"
      />
      <filter id="sub_svg__d" width="121.1%" height="116.2%" x="-10.6%" y="-5.8%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#sub_svg__a)" xlinkHref="#sub_svg__b" />
      <use fill="#E53431" fillRule="evenodd" xlinkHref="#sub_svg__b" />
      <use
        fill="url(#sub_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#sub_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#sub_svg__d)" xlinkHref="#sub_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#sub_svg__e" />
    </g>
  </svg>
);

export default SvgSub;

import React from 'react';

const SvgOst = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ost_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="ost_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="ost_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#ost_svg__a)" xlinkHref="#ost_svg__b" />
        <use fill="#34445B" fillRule="evenodd" xlinkHref="#ost_svg__b" />
        <use
          fill="url(#ost_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#ost_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g fill="#FFF">
        <path d="M15.82 10.319l1.76-2.743a1.776 1.776 0 1 0-1.06-.675l-2.182 3.405a6.965 6.965 0 0 0-6.25 7.618 6.97 6.97 0 0 0 7.618 6.25 6.97 6.97 0 0 0 6.25-7.618 6.971 6.971 0 0 0-6.136-6.237zm-.801 10.607a3.693 3.693 0 0 1-3.696-3.695 3.693 3.693 0 0 1 3.696-3.696c1.539 0 2.913.952 3.456 2.39a2.137 2.137 0 0 0-2.996-.378 2.136 2.136 0 0 0-.378 2.995 2.136 2.136 0 0 0 3.367.007 3.688 3.688 0 0 1-3.45 2.377z" />
        <path d="M15.82 10.319l1.76-2.743a1.776 1.776 0 1 0-1.06-.675l-2.182 3.405a6.965 6.965 0 0 0-6.25 7.618 6.97 6.97 0 0 0 7.618 6.25 6.97 6.97 0 0 0 6.25-7.618 6.971 6.971 0 0 0-6.136-6.237zm-.801 10.607a3.693 3.693 0 0 1-3.696-3.695 3.693 3.693 0 0 1 3.696-3.696c1.539 0 2.913.952 3.456 2.39a2.137 2.137 0 0 0-2.996-.378 2.136 2.136 0 0 0-.378 2.995 2.136 2.136 0 0 0 3.367.007 3.688 3.688 0 0 1-3.45 2.377z" />
      </g>
    </g>
  </svg>
);

export default SvgOst;

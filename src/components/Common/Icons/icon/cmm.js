import React from 'react';

const SvgCmm = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cmm_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="cmm_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="cmm_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#cmm_svg__a)" xlinkHref="#cmm_svg__b" />
        <use fill="#2FD2E5" xlinkHref="#cmm_svg__b" />
        <use
          fill="url(#cmm_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#cmm_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path
        d="M16.855 4.006a10.806 10.806 0 0 0-6.884 2.175 1.618 1.618 0 0 0-.1 2.504c.57.54 1.447.582 2.067.1a7.687 7.687 0 0 1 10.353.835c.54.558.557 1.44.038 2.019-.548.587-1.47.62-2.057.07l-.071-.07a4.801 4.801 0 1 0 0 6.47 1.427 1.427 0 0 1 1.705-.323 1.446 1.446 0 0 1 .423 2.264 7.713 7.713 0 0 1-10.395.913 1.618 1.618 0 0 0-2.08.1 1.637 1.637 0 0 0 .136 2.527 10.864 10.864 0 1 0 6.865-19.584zm-.2 13.556a2.689 2.689 0 1 1 .02-5.377 2.689 2.689 0 0 1-.02 5.377z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgCmm;

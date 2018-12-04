import React from 'react';

const SvgNeu = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="neu_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="neu_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="neu_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#neu_svg__a)" xlinkHref="#neu_svg__b" />
        <use fill="#B3BA00" fillRule="evenodd" xlinkHref="#neu_svg__b" />
        <use
          fill="url(#neu_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#neu_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g fill="#FFF">
        <path d="M13.273 10.186l-.12.075 5.597 8.845v-8.853l-2.795-1.657zm-.181 9.425l2.863 1.703 2.614-1.552-5.477-8.657zm-2.502-7.836v6.36l1.997 1.182v-8.725zm8.665 7.58l2.064-1.22v-6.36l-2.064-1.22z" />
        <path d="M16 4C9.927 4 5 8.927 5 15s4.927 11 11 11 11-4.927 11-11S22.073 4 16 4zm-.045 17.984l-5.937-3.518v-7.03l5.937-3.51 5.937 3.51v7.03l-5.937 3.518z" />
      </g>
    </g>
  </svg>
);

export default SvgNeu;

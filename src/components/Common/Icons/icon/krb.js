import React from 'react';

const SvgKrb = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="krb_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="krb_svg__b" cx={16} cy={15} r={15} />
      <filter id="krb_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#krb_svg__a)" xlinkHref="#krb_svg__b" />
      <use fill="#00AEEF" fillRule="evenodd" xlinkHref="#krb_svg__b" />
      <use
        fill="url(#krb_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#krb_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <path
        fill="#FFF"
        d="M15.76 13.706c.238-.041.448-.13.632-.265s.358-.363.521-.675l3.625-6.987c.142-.234.316-.42.516-.566a1.2 1.2 0 0 1 .7-.213h2.299l-4.514 8.218c-.2.338-.427.613-.68.826a2.772 2.772 0 0 1-.851.483c.484.125.889.328 1.22.613.326.28.637.676.926 1.185L24.5 25h-2.53c-.511 0-.922-.275-1.232-.82l-3.562-7.351c-.184-.328-.384-.561-.6-.702-.215-.14-.489-.223-.815-.244v3.73h-1.989v-3.746H12.31V25H9.5V5h2.81v8.738h1.462V9.416h1.989v4.29z"
      />
    </g>
  </svg>
);

export default SvgKrb;

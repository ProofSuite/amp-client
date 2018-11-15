import React from 'react';

const SvgSys = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="sys_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="sys_svg__b" cx={16} cy={15} r={15} />
      <filter id="sys_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="sys_svg__e"
        d="M18.046 14.103a.117.117 0 0 0-.114.041.108.108 0 0 0 .023.156C22.334 17.478 16.101 24.754 4 17.011c10.26 9.655 24.547-1.01 14.046-2.908zm-5.844-4.248c-9.086 2.907 1.323 9.763 2.226 6.3a.11.11 0 0 0-.083-.137.12.12 0 0 0-.064.001c-1.337.435-8.701-1.624-2.08-6.164zM28 11.602c-7.867-5.61-22.628-.984-15.013 2.977a.119.119 0 0 0 .157-.047.11.11 0 0 0 .003-.098C10.05 7.89 25.781 9.88 28 11.602zm-6.528 8.151c4.159-1.89.777-8.361-4.724-7.112a.116.116 0 0 1-.138-.085.107.107 0 0 1 .04-.11c4.28-3.216 12.314 4.292 4.822 7.307z"
      />
      <filter id="sys_svg__d" width="114.6%" height="129.2%" x="-7.3%" y="-10.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#sys_svg__a)" xlinkHref="#sys_svg__b" />
      <use fill="#0082C6" fillRule="evenodd" xlinkHref="#sys_svg__b" />
      <use
        fill="url(#sys_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#sys_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#sys_svg__d)" xlinkHref="#sys_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#sys_svg__e" />
    </g>
  </svg>
);

export default SvgSys;

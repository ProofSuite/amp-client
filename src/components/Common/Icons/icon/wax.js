import React from 'react';

const SvgWax = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="wax_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="wax_svg__b" cx={16} cy={15} r={15} />
      <filter id="wax_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="wax_svg__e"
        d="M28 17.962h-2.364l-1.677-1.436-1.671 1.43H20.29l-.955-1.16h-3.292l.833-1.029h1.619l-1.233-1.508-4.305 5.241H10.96l1.246-1.522h-2.081L9 14.824l-1.116 3.13H5.773L4 13.041h1.62l1.192 3.346L8 13.056h2l1.185 3.324 1.184-3.325h1.625l-1.788 4.923.398-.486 3.652-4.445h2.01l3.039 3.708 1.462-1.257L18.14 11.5h2.375L28 17.962zm-2.345-2.972l-1.115-.956 1.113-.948 2.25.002-2.248 1.902z"
      />
      <filter id="wax_svg__d" width="114.6%" height="143.8%" x="-7.3%" y="-15.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#wax_svg__a)" xlinkHref="#wax_svg__b" />
      <use fill="#F89022" xlinkHref="#wax_svg__b" />
      <use
        fill="url(#wax_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#wax_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#wax_svg__d)" xlinkHref="#wax_svg__e" />
      <use fill="#FFF" xlinkHref="#wax_svg__e" />
    </g>
  </svg>
);

export default SvgWax;

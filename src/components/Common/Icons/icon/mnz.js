import React from 'react';

const SvgMnz = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="mnz_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="mnz_svg__b" cx={15} cy={15} r={15} />
      <filter id="mnz_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
    </defs>
    <g fill="none" transform="translate(1)">
      <use fill="#000" filter="url(#mnz_svg__a)" xlinkHref="#mnz_svg__b" />
      <use fill="#7F368A" fillRule="evenodd" xlinkHref="#mnz_svg__b" />
      <use
        fill="url(#mnz_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#mnz_svg__b"
      />
      <circle cx={15} cy={15} r={14.5} stroke="#000" strokeLinejoin="square" strokeOpacity={0.097} />
      <path
        fill="#FFF"
        d="M23.97 19.984c.062.246-.184.37-.368.308h-3.074a.887.887 0 0 1-.43-.123c-.185-.062-.308-.308-.37-.555v-.061L16.84 8.895c-.061 0-.245.185-.307.185-.061.062-.184.123-.246.062a.297.297 0 0 1-.123-.37c.123-.308.43-.493.738-.554.369-.062.676-.062 1.045-.062h2.275c.184 0 .368 0 .553.062.184.123.246.37.307.554.123.431.185.863.308 1.294l1.475 5.544.553 2.218c.185.677.43 1.417.554 2.156zm-7.13 0c.06.246-.185.37-.37.308h-3.073a.887.887 0 0 1-.43-.123c-.185-.062-.308-.308-.37-.555v-.061L9.709 8.895c-.061 0-.246.185-.307.185-.062.062-.185.123-.246.062-.123-.062-.184-.247-.123-.37.123-.308.43-.493.738-.554.369-.062.676-.062 1.045-.062h2.274c.185 0 .37 0 .554.062.184.123.246.37.307.554.123.431.185.863.307 1.294l1.476 5.544.553 2.218c.185.677.43 1.417.553 2.156zm-5.656-2.341l-.738 2.34a.59.59 0 0 1-.553.432H6.635a.617.617 0 0 1-.615-.616v-.123l2.582-9.733c.061-.124.184-.247.307-.247.185 0 .307.123.307.247l1.968 7.7zm7.254-.185l-.43 1.294c-.062.123-.123.185-.246.185s-.185-.062-.246-.185l-2.152-7.516.43-1.54c0-.123.123-.185.246-.185s.246.062.246.185l2.152 7.762z"
      />
    </g>
  </svg>
);

export default SvgMnz;

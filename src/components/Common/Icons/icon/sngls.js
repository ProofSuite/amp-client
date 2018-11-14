import React from 'react';

const SvgSngls = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="sngls_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="sngls_svg__b" cx={16} cy={15} r={15} />
      <filter id="sngls_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="sngls_svg__e"
        d="M16.913 20.234l-.932 1.736-.932-1.736C9.419 19.797 5 15.599 5 15.599c0-.01 4.294-4.078 9.809-4.614l.73-1.25L15.98 9l.75 1.25.422.735c5.514.526 9.809 4.614 9.809 4.614s-4.42 4.198-10.05 4.635zM5.932 15.599c-.01 0 4.246 2.908 8.521 3.523l-2.084-3.9.566-.982.52.972-.01.01 2.027 3.99c.163.01.326.01.49.01.163 0 .317 0 .48-.01l1.489-2.968 1.086-2.024.566.982-2.084 3.91c4.275-.605 8.53-3.443 8.53-3.523 0-.07-4.053-2.778-8.223-3.473l.634 1.102-.528 1.061-1.374-2.302a10.45 10.45 0 0 0-.557-.02c-.183 0-.375.01-.567.02l-1.403 2.302-.518-1.012.662-1.141c-4.169.705-8.223 3.473-8.223 3.473z"
      />
      <filter id="sngls_svg__d" width="115.9%" height="127%" x="-8%" y="-9.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#sngls_svg__a)" xlinkHref="#sngls_svg__b" />
      <use fill="#B30D23" xlinkHref="#sngls_svg__b" />
      <use
        fill="url(#sngls_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#sngls_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#sngls_svg__d)" xlinkHref="#sngls_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#sngls_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgSngls;

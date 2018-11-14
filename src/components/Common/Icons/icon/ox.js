import React from 'react';

const SvgOx = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="ox_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ox_svg__b" cx={16} cy={15} r={15} />
      <filter id="ox_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ox_svg__e"
        d="M16.858 24.5h-1.716c-1.288 0-1.653-1.194-1.653-2.106 0-.912.065-1.325.065-1.737 0-.65-.328-2.273-.923-2.953-1.159-1.325-1.889-2.512-1.889-4.234-1.008-.521-2.79-.999-3.476-1.78C6.58 10.907 6 9.8 6 8.214c0-.405.086-.977.258-1.715.395 1.234 1.003 2.08 1.824 2.54 1.201.674 2.555 1.173 3.712 1.173h8.412c1.157 0 2.51-.5 3.712-1.173.82-.46 1.429-1.306 1.824-2.54.172.738.258 1.31.258 1.715 0 1.585-.58 2.693-1.266 3.474-.687.782-2.468 1.26-3.476 1.78 0 1.723-.73 2.91-1.889 4.235-.595.68-.923 2.303-.923 2.953 0 .412.065.825.065 1.737 0 .912-.365 2.106-1.653 2.106z"
      />
      <filter id="ox_svg__d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#ox_svg__a)" xlinkHref="#ox_svg__b" />
        <use fill="#4392CD" fillRule="evenodd" xlinkHref="#ox_svg__b" />
        <use
          fill="url(#ox_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#ox_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#ox_svg__d)" xlinkHref="#ox_svg__e" />
      <use fill="#FFF" xlinkHref="#ox_svg__e" />
    </g>
  </svg>
);

export default SvgOx;

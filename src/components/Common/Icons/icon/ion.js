import React from 'react';

const SvgIon = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="ion_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ion_svg__b" cx={16} cy={15} r={15} />
      <filter id="ion_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ion_svg__e"
        d="M7.026 18.009A2.712 2.712 0 0 1 4 15.309a2.712 2.712 0 0 1 2.682-2.718c.96-4.41 4.87-7.711 9.546-7.711.873 0 1.72.115 2.525.33A2.7 2.7 0 0 1 21.005 4a2.712 2.712 0 0 1 2.705 2.718c0 .469-.118.91-.326 1.294A9.809 9.809 0 0 1 26 14.698a9.811 9.811 0 0 1-2.904 6.985c.326.448.518 1.001.518 1.599A2.712 2.712 0 0 1 20.908 26a2.707 2.707 0 0 1-2.519-1.724 9.76 9.76 0 0 1-2.16.24c-4.241 0-7.851-2.714-9.203-6.507zm.49-.105c1.3 3.568 4.71 6.115 8.712 6.115.695 0 1.372-.077 2.023-.222a2.712 2.712 0 0 1 2.657-3.233c.72 0 1.376.283 1.86.744a9.314 9.314 0 0 0 2.737-6.61c0-2.41-.91-4.606-2.405-6.26-.496.61-1.25.999-2.095.999a2.712 2.712 0 0 1-2.706-2.719c0-.374.076-.731.212-1.056a9.253 9.253 0 0 0-2.283-.284c-4.416 0-8.112 3.101-9.047 7.255a2.715 2.715 0 0 1 2.23 2.676 2.718 2.718 0 0 1-1.896 2.595zm8.712-.484a2.715 2.715 0 0 1-2.708-2.722 2.715 2.715 0 0 1 2.708-2.721 2.715 2.715 0 0 1 2.709 2.721 2.715 2.715 0 0 1-2.709 2.722z"
      />
      <filter id="ion_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ion_svg__a)" xlinkHref="#ion_svg__b" />
      <use fill="#57BEEA" xlinkHref="#ion_svg__b" />
      <use
        fill="url(#ion_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ion_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#ion_svg__d)" xlinkHref="#ion_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#ion_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgIon;

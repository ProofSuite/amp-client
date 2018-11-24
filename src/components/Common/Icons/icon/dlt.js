import React from 'react';

const SvgDlt = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="dlt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="dlt_svg__b" cx={16} cy={15} r={15} />
      <filter id="dlt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="dlt_svg__e"
        d="M15.807 7.958L9.713 20.965H19.83c.293 0 .558.18.673.455l.011.025a.641.641 0 0 1-.031.56.96.96 0 0 1-.835.495H8.896a.826.826 0 0 1-.466-.145l-.056-.038a.874.874 0 0 1-.29-1.09l7.19-15.149c.075-.158.182-.298.313-.41a.692.692 0 0 1 .892-.01.497.497 0 0 1 .135.172l7.293 15.252c.1.207.12.444.058.666a.57.57 0 0 1-.548.423h-.084a.877.877 0 0 1-.794-.516L16.249 7.96a.244.244 0 0 0-.22-.145.244.244 0 0 0-.222.143z"
      />
      <filter id="dlt_svg__d" width="121.9%" height="120.6%" x="-10.9%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#dlt_svg__a)" xlinkHref="#dlt_svg__b" />
      <use fill="#F4AE95" fillRule="evenodd" xlinkHref="#dlt_svg__b" />
      <use
        fill="url(#dlt_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#dlt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#dlt_svg__d)" xlinkHref="#dlt_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#dlt_svg__e" />
    </g>
  </svg>
);

export default SvgDlt;

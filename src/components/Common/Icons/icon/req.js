import React from 'react';

const SvgReq = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="req_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="req_svg__b" cx={16} cy={15} r={15} />
      <filter id="req_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="req_svg__e"
        d="M10 5h6.607c.902.007 1.574.057 2.016.15a5.389 5.389 0 0 1 3.589 2.436c.918 1.457 1.038 3.358.34 4.925-.632 1.442-1.954 2.571-3.5 2.98-.981.278-2.01.175-3.018.193a5181.37 5181.37 0 0 1 5.165 8.418L19.77 25c-2.995-4.88-5.24-8.54-6.735-10.98 1.593-.008 3.186.012 4.778-.01 1.837-.049 3.444-1.642 3.482-3.444.12-1.557-.91-3.11-2.415-3.622-.416-.159-1.07-.233-1.963-.22L10 6.721V5z"
      />
      <filter id="req_svg__d" width="126.9%" height="117.5%" x="-13.5%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#req_svg__a)" xlinkHref="#req_svg__b" />
      <use fill="#6CFCCD" fillRule="evenodd" xlinkHref="#req_svg__b" />
      <use
        fill="url(#req_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#req_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#req_svg__d)" xlinkHref="#req_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#req_svg__e" />
    </g>
  </svg>
);

export default SvgReq;

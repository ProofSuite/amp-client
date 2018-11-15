import React from 'react';

const SvgCnd = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="cnd_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="cnd_svg__b" cx={16} cy={15} r={15} />
      <filter id="cnd_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="cnd_svg__e"
        d="M19.473 10.479l2.667-.611 1.033-1.701-1.02-1.673-1.306-.902L18.164 5l-1.655.933-2.648-.472-3.636 2.519-.283 2.942-1.543.644.178 2.729-1.077.858 1.076 3.072.162.322 1.138 3.163 2.339.828 1.734 1.764 1.994.698.902-.26 1.431-.165 2.098-.601 3.126-1.765-.818-3.232-1.574-.62-.784.897-2.205.542-3.207-.508-1.035-1.197.36-1.171-1.516-2.399 1.275-1.556.136-2.645 1.826-1.048 1.252-.5 1.7.307z"
      />
      <filter id="cnd_svg__d" width="121.9%" height="117.5%" x="-10.9%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#cnd_svg__a)" xlinkHref="#cnd_svg__b" />
      <use fill="#383939" xlinkHref="#cnd_svg__b" />
      <use
        fill="url(#cnd_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#cnd_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#cnd_svg__d)" xlinkHref="#cnd_svg__e" />
      <use fill="#FFF" xlinkHref="#cnd_svg__e" />
    </g>
  </svg>
);

export default SvgCnd;

import React from 'react';

const SvgPoly = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="poly_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="poly_svg__b" cx={16} cy={15} r={15} />
      <filter id="poly_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="poly_svg__e"
        d="M27 10.263l-.044-.707-.218.593-1.226 1.03-1.404.209-.42-.389 1.231-1.633L26.179 9l-1.364.028-1.983 1.382-1.859-.128L18.363 9l-1.542.299-4.811 3.846-2.318.717-.954.931-1.706.023-.845 1.51L5 16.654l1.122.147 1.043-1.353 1.612.323-.03 1.448-.805 2.084-.46 1.928-.495.769 1.256-.266-.143-.788 1.068-2.118 2.056-.797.796-1.268 1.345-.94 2.67.375 2.689-1.135-.455 1.795-1.196.104-.341 1.472 1.023-.655 1.696-.707 1.325-1.999.084-.945.712.707 2.071 1.249 1.177-.537-.069-2.639-.342-1.021 1.538-.375z"
      />
      <filter id="poly_svg__d" width="115.9%" height="126.9%" x="-8%" y="-9.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#poly_svg__a)" xlinkHref="#poly_svg__b" />
      <use fill="#4C5A95" fillRule="evenodd" xlinkHref="#poly_svg__b" />
      <use
        fill="url(#poly_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#poly_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#poly_svg__d)" xlinkHref="#poly_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#poly_svg__e" />
    </g>
  </svg>
);

export default SvgPoly;

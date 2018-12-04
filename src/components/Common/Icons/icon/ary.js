import React from 'react';

const SvgAry = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="ary_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ary_svg__b" cx={16} cy={15} r={15} />
      <filter id="ary_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ary_svg__e"
        d="M23.917 20.11a.848.848 0 0 0 .57-.86v1.1a.91.91 0 0 1-.595.86l-7.588 2.733a.806.806 0 0 1-.596 0L8.12 21.211a.9.9 0 0 1-.595-.86v-1.1c0 .379.235.733.595.86l7.613 2.732a.806.806 0 0 0 .595 0l7.589-2.733zm0-1.948a.867.867 0 0 0 .57-.86v1.1a.91.91 0 0 1-.595.86l-7.588 2.733a.806.806 0 0 1-.596 0L8.12 19.263a.9.9 0 0 1-.595-.86V17.29c0 .392.235.733.595.872l7.613 2.733a.806.806 0 0 0 .595 0l7.589-2.733zm0-1.96a.88.88 0 0 0 .583-.848v1.1a.91.91 0 0 1-.596.86l-7.588 2.733a.806.806 0 0 1-.595 0L8.12 17.302a.9.9 0 0 1-.595-.86v-1.1c0 .379.235.733.595.86l7.613 2.732a.806.806 0 0 0 .595 0l7.589-2.732zM7.5 9.662a.9.9 0 0 1 .595-.86l7.601-2.745a.806.806 0 0 1 .595 0l7.601 2.745a.9.9 0 0 1 .595.86v4.832a.91.91 0 0 1-.595.86l-7.613 2.732a.806.806 0 0 1-.595 0l-7.589-2.732a.9.9 0 0 1-.595-.86V9.662z"
      />
      <filter id="ary_svg__d" width="120.6%" height="119.4%" x="-10.3%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#ary_svg__a)" xlinkHref="#ary_svg__b" />
      <use fill="#343434" fillRule="evenodd" xlinkHref="#ary_svg__b" />
      <use
        fill="url(#ary_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ary_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#ary_svg__d)" xlinkHref="#ary_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#ary_svg__e" />
    </g>
  </svg>
);

export default SvgAry;

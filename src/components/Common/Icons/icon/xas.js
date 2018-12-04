import React from 'react';

const SvgXas = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="xas_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xas_svg__b" cx={16} cy={15} r={15} />
      <filter id="xas_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="xas_svg__e"
        d="M25.992 13.471l-9.469 11.01-.425.519L6.007 13.582l.032-.013L6 13.563l3.922-6.557.002.002L9.922 7h12.254l-.002.007L26 13.47l-.008.002zm-13.136.459l-2.17 3.674 5.352 6.112 5.363-6.162-2.122-3.635-6.423.01zm-2.778 2.98l1.76-2.979-4.362.007 2.602 2.972zm9.723-3.846l4.954-.008-3.11-5.208-4.882.01 3.038 5.206zm4.771.846l-4.273.007 1.713 2.935 2.56-2.942zm-5.791-.844L16.09 8.454l-2.73 4.62 5.421-.008zm-8.399-5.194l-3.1 5.213 5.06-.009 3.08-5.214-5.04.01z"
      />
      <filter id="xas_svg__d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#xas_svg__a)" xlinkHref="#xas_svg__b" />
      <use fill="#FAA00D" xlinkHref="#xas_svg__b" />
      <use
        fill="url(#xas_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#xas_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#xas_svg__d)" xlinkHref="#xas_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#xas_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgXas;

import React from 'react';

const SvgPasl = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="pasl_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="pasl_svg__b" cx={16} cy={15} r={15} />
      <filter id="pasl_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="pasl_svg__e"
        d="M15.08 19.156a.51.51 0 0 1 .668.279.515.515 0 0 1-.277.671l-3.406 1.414-.452 2.48H9.269l.257-1.426-1.382.573a.51.51 0 0 1-.668-.279.515.515 0 0 1 .277-.67l1.99-.826.15-.839-2.687 1.115a.51.51 0 0 1-.667-.279.515.515 0 0 1 .277-.671l3.293-1.367L12.507 6.01h6.773c4.147-.143 6.22 1.242 6.22 4.155 0 3.695-2.702 6.553-7.285 6.553H12.94l-.283 1.556 1.487-.617a.51.51 0 0 1 .667.279.515.515 0 0 1-.277.67l-2.097.871-.153.84 2.797-1.161zm-.57-11.047l-1.172 6.425h5.218c3.212 0 4.43-2.185 4.43-3.77 0-1.584-.766-2.655-3.322-2.655H14.51z"
      />
      <filter id="pasl_svg__d" width="118.4%" height="119.4%" x="-9.2%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#pasl_svg__a)" xlinkHref="#pasl_svg__b" />
      <use fill="#00ACFF" xlinkHref="#pasl_svg__b" />
      <use
        fill="url(#pasl_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#pasl_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#pasl_svg__d)" xlinkHref="#pasl_svg__e" />
      <use fill="#FFF" xlinkHref="#pasl_svg__e" />
    </g>
  </svg>
);

export default SvgPasl;

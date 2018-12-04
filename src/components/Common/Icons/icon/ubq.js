import React from 'react';

const SvgUbq = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="ubq_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ubq_svg__b" cx={16} cy={15} r={15} />
      <filter id="ubq_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="ubq_svg__d" width="117.5%" height="115.9%" x="-8.8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.104987545 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ubq_svg__a)" xlinkHref="#ubq_svg__b" />
      <use fill="#00EA90" xlinkHref="#ubq_svg__b" />
      <use
        fill="url(#ubq_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ubq_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" fillRule="nonzero" filter="url(#ubq_svg__d)" transform="translate(6 4)">
        <path
          fillOpacity={0.698}
          d="M12.215 2.508l7.777 4.068-7.493 4.593-.284-8.661zm-4.43 16.941L.008 15.381l7.493-4.594.284 8.662z"
        />
        <path d="M19.992 15.679L9.179 22v-8.869l10.813-6.555v9.103zM.008 6.279L10.821 0v8.834L.008 15.381V6.278z" />
      </g>
    </g>
  </svg>
);

export default SvgUbq;

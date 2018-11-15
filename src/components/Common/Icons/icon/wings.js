import React from 'react';

const SvgWings = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="wings_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="wings_svg__b" cx={16} cy={15} r={15} />
      <filter id="wings_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="wings_svg__d" width="117.5%" height="123.3%" x="-8.8%" y="-8.3%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#wings_svg__a)" xlinkHref="#wings_svg__b" />
      <use fill="#0DC9F7" xlinkHref="#wings_svg__b" />
      <use
        fill="url(#wings_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#wings_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" fillRule="nonzero" filter="url(#wings_svg__d)" transform="translate(6 8)">
        <path fillOpacity={0.305} d="M12.904 6.739L9.859 9.103 8.612 4.778 1.388 2.843l9.481.487z" />
        <path fillOpacity={0.7} d="M2.27 14.993L18.586 2.33 20 5.476l-1.855-.513-.065 3.264z" />
        <path d="M16.796 8.78L12.049.619 0 0l9.183 2.461 2.49 8.49z" />
      </g>
    </g>
  </svg>
);

export default SvgWings;

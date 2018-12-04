import React from 'react';

const SvgCoqui = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="coqui_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="coqui_svg__b" cx={16} cy={15} r={15} />
      <filter id="coqui_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="coqui_svg__e"
        d="M25.82 13.715c-.787.037-1.577.083-2.364.055-.706-.026-1.409-.143-2.113-.225a.409.409 0 0 1-.197-.092c-1.165-.955-2.31-1.932-3.314-3.063-.366-.413-.662-.859-.828-1.401-.223-.731-1.16-1.012-1.854-.589-.728.444-.853 1.477-.24 2.069a.901.901 0 0 0 .39.228c.53.128.94.444 1.327.802.694.641 1.316 1.35 1.92 2.076.173.207.085.447-.18.477-.41.048-.823.091-1.236.108-.778.032-1.557.063-2.336.055-.435-.005-.872-.072-1.303-.144a1.693 1.693 0 0 1-.573-.226c-.579-.347-1.179-.11-1.513.232a1.327 1.327 0 0 0-.201 1.588c.278.476.826.754 1.318.65.142-.03.282-.093.408-.166.33-.188.688-.276 1.058-.299.594-.036 1.192-.07 1.787-.056.757.018 1.514.085 2.271.132.103.007.207.012.309.028.284.046.366.273.178.496-.226.268-.444.545-.688.795a68.31 68.31 0 0 1-1.565 1.553 1.852 1.852 0 0 1-.863.466c-.656.157-.98.79-.888 1.43.092.636.66 1.114 1.303 1.115.596 0 1.054-.318 1.213-.888.163-.586.539-1.028.931-1.459.967-1.061 2.054-1.994 3.163-2.9a.472.472 0 0 1 .225-.1c.561-.073 1.122-.164 1.685-.199a18.66 18.66 0 0 1 1.907-.026c.663.027 1.323.114 2.003.177-.012.23-.015.426-.033.62-.122 1.26-.443 2.467-1.036 3.588-1.464 2.765-3.722 4.496-6.777 5.171a9.524 9.524 0 0 1-2.083.205c-.745-.001-1.49.006-2.235-.002-2.065-.022-3.954-.61-5.635-1.814-2.023-1.45-3.33-3.397-3.892-5.826a8.885 8.885 0 0 1-.224-1.652 43.836 43.836 0 0 1-.028-3.156 9.83 9.83 0 0 1 7.252-9.203 9.6 9.6 0 0 1 2.497-.338c.864-.003 1.727-.016 2.59.004 2.066.048 3.943.678 5.603 1.912 1.985 1.475 3.248 3.432 3.78 5.849.129.58.174 1.178.261 1.797-.43.055-.803.128-1.18.146z"
      />
      <filter id="coqui_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#coqui_svg__a)" xlinkHref="#coqui_svg__b" />
        <use fill="#71C800" fillRule="evenodd" xlinkHref="#coqui_svg__b" />
        <use
          fill="url(#coqui_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#coqui_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeLinejoin="square" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#coqui_svg__d)" xlinkHref="#coqui_svg__e" />
      <use fill="#FFF" xlinkHref="#coqui_svg__e" />
    </g>
  </svg>
);

export default SvgCoqui;

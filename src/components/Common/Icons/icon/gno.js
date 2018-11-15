import React from 'react';

const SvgGno = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="gno_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="gno_svg__b" cx={16} cy={15} r={15} />
      <filter id="gno_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="gno_svg__e"
        d="M24.777 9.5l.2.331a10.816 10.816 0 0 1 1.523 5.537C26.482 21.236 21.785 26 16 26h-.018c-5.785 0-10.5-4.801-10.482-10.669 0-1.968.544-3.881 1.541-5.537l.182-.312.961.975a3.78 3.78 0 0 0-.453.9 4.09 4.09 0 0 0 2.43 5.225 4.024 4.024 0 0 0 3.608-.46L16 18.403l2.557-2.594c.236.166.508.295.798.405 2.05.736 4.298-.35 5.023-2.41.435-1.214.236-2.483-.399-3.495l.798-.809zM9.363 11.652l3.01 3.035c-.363.295-.816.46-1.306.46-1.178 0-2.14-.975-2.14-2.17 0-.497.164-.957.436-1.325zm10.5 2.851l2.974-3.016c.236.35.362.772.362 1.214 0 1.195-.96 2.17-2.14 2.17-.453 0-.852-.129-1.196-.368zm-3.827 2.281l-8.668-8.83.344-.367C9.852 5.287 12.772 4 15.91 4h.018c3.174 0 6.22 1.38 8.342 3.77l.327.369-8.56 8.645zm-7.254-8.83l7.254 7.377L23.2 8.102c-1.922-1.95-4.533-3.072-7.253-3.072h-.019c-2.702 0-5.222 1.03-7.145 2.925z"
      />
      <filter id="gno_svg__d" width="116.7%" height="115.9%" x="-8.3%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#gno_svg__a)" xlinkHref="#gno_svg__b" />
      <use fill="#00A6C4" xlinkHref="#gno_svg__b" />
      <use
        fill="url(#gno_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#gno_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#gno_svg__d)" xlinkHref="#gno_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#gno_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgGno;

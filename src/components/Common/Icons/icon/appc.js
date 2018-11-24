import React from 'react';

const SvgAppc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="appc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="appc_svg__b" cx={16} cy={15} r={15} />
      <filter id="appc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="appc_svg__e"
        d="M13.66 16.386l2.386-7.112 2.43 7.112H13.66zm10.112 4.497l-1.973-5.309h1.178a.849.849 0 0 0 .85-.836.785.785 0 0 0-.237-.561.818.818 0 0 0-.573-.233h-1.84l-.295-.826h2.095a.839.839 0 0 0 .846-.807.821.821 0 0 0-.248-.59.856.856 0 0 0-.602-.243h-2.72L18.78 7.51a3.576 3.576 0 0 0-1.057-1.461 2.499 2.499 0 0 0-1.663-.548 2.57 2.57 0 0 0-1.671.548 3.609 3.609 0 0 0-1.06 1.46l-1.543 4.004H9.082a.81.81 0 0 0-.817.797c0 .458.379.829.847.829h2.053l-.316.804h-1.84a.809.809 0 0 0-.818.8c0 .454.374.821.836.823h1.181l-2.006 5.316c-.123.3-.191.618-.202.941.02.453.222.88.56 1.19a2.04 2.04 0 0 0 1.34.483 1.8 1.8 0 0 0 1.84-1.305l.776-2.269h7.144l.777 2.323a1.813 1.813 0 0 0 1.84 1.24c.31.007.615-.07.884-.22.233-.17.44-.37.614-.598a1.6 1.6 0 0 0 .225-.844 5.446 5.446 0 0 0-.228-.927v-.014z"
      />
      <filter id="appc_svg__d" width="121.9%" height="119.4%" x="-10.9%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#appc_svg__a)" xlinkHref="#appc_svg__b" />
      <use fill="#FD875E" fillRule="evenodd" xlinkHref="#appc_svg__b" />
      <use
        fill="url(#appc_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#appc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#appc_svg__d)" xlinkHref="#appc_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#appc_svg__e" />
    </g>
  </svg>
);

export default SvgAppc;

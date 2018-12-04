import React from 'react';

const SvgCred = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="cred_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="cred_svg__b" cx={16} cy={15} r={15} />
      <filter id="cred_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="cred_svg__e"
        d="M12.136 14.966l3.482 3.493 9.13-9.191L26 10.538 15.618 21l-4.735-4.763 1.253-1.27zm2.11-.31L19.864 9l1.253 1.27-5.617 5.66-1.255-1.274zm-2.276 4.83l-1.236 1.246L6 15.97l1.251-1.27 4.72 4.788z"
      />
      <filter id="cred_svg__d" width="117.5%" height="129.2%" x="-8.8%" y="-10.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#cred_svg__a)" xlinkHref="#cred_svg__b" />
      <use fill="#37E8A3" xlinkHref="#cred_svg__b" />
      <use
        fill="url(#cred_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#cred_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#cred_svg__d)" xlinkHref="#cred_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#cred_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgCred;

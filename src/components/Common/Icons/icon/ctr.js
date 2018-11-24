import React from 'react';

const SvgCtr = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="ctr_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ctr_svg__b" cx={16} cy={15} r={15} />
      <filter id="ctr_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ctr_svg__e"
        d="M16 26C9.925 26 5 21.075 5 15S9.925 4 16 4s11 4.925 11 11-4.925 11-11 11zm0-1.546a9.454 9.454 0 1 0 0-18.908 9.454 9.454 0 0 0 0 18.908zm.072-2.913c-3.597 0-6.494-2.75-6.494-6.505V15c0-3.666 2.825-6.54 6.638-6.54 2.572 0 4.227 1.078 5.343 2.623l-2.627 2.03c-.72-.898-1.547-1.473-2.752-1.473-1.763 0-3.004 1.491-3.004 3.324V15c0 1.887 1.241 3.36 3.004 3.36 1.313 0 2.087-.61 2.842-1.527l2.627 1.869c-1.188 1.635-2.789 2.839-5.577 2.839z"
      />
      <filter id="ctr_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#ctr_svg__a)" xlinkHref="#ctr_svg__b" />
        <use fill="#FDDE6C" fillRule="evenodd" xlinkHref="#ctr_svg__b" />
        <use
          fill="url(#ctr_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#ctr_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#ctr_svg__d)" xlinkHref="#ctr_svg__e" />
      <use fill="#FFF" xlinkHref="#ctr_svg__e" />
    </g>
  </svg>
);

export default SvgCtr;

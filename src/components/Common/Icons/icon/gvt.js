import React from 'react';

const SvgGvt = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="gvt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="gvt_svg__b" cx={16} cy={15} r={15} />
      <filter id="gvt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="gvt_svg__e"
        d="M26 12.193C26 17.601 21.513 22 16 22S6 17.6 6 12.195c0-.398.024-.797.074-1.193H7.87c-.06.395-.09.794-.09 1.193 0 4.445 3.688 8.062 8.221 8.062 4.326 0 7.882-3.292 8.2-7.455H11.48c.27 1.944 1.803 3.488 3.777 3.807 1.975.318 3.93-.664 4.822-2.42h1.925c-.875 2.522-3.29 4.218-6.006 4.22-3.496 0-6.341-2.789-6.341-6.216 0-.4.04-.8.117-1.193h16.152c.05.396.074.794.074 1.193z"
      />
      <filter id="gvt_svg__d" width="117.5%" height="131.8%" x="-8.8%" y="-11.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#gvt_svg__a)" xlinkHref="#gvt_svg__b" />
      <use fill="#16B9AD" xlinkHref="#gvt_svg__b" />
      <use
        fill="url(#gvt_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#gvt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#gvt_svg__d)" xlinkHref="#gvt_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#gvt_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgGvt;

import React from 'react';

const SvgXcp = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="xcp_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xcp_svg__b" cx={16} cy={15} r={15} />
      <filter id="xcp_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="xcp_svg__e"
        d="M23.48 9h-4.044a.616.616 0 0 0-.44.186l-7.375 7.529a.616.616 0 0 1-.44.186H9.829a.616.616 0 0 1-.44-.186l-.956-.974a.639.639 0 0 1-.183-.447v-1.377a.64.64 0 0 1 .183-.448l.956-.974a.617.617 0 0 1 .44-.186h1.352c.165 0 .323.067.44.186l.587.598a.614.614 0 0 0 .88 0l1.419-1.444a.642.642 0 0 0 0-.896l-1.54-1.567a.617.617 0 0 0-.44-.186H8.483a.617.617 0 0 0-.44.186l-2.86 2.912a.64.64 0 0 0-.182.448v4.118c0 .168.066.33.182.448l2.86 2.913a.617.617 0 0 0 .44.185h4.045a.617.617 0 0 0 .44-.186l7.375-7.528a.617.617 0 0 1 .44-.187h1.352c.165 0 .323.067.44.186l.956.974a.64.64 0 0 1 .183.448v1.377a.64.64 0 0 1-.183.447l-.956.974a.616.616 0 0 1-.44.186h-1.352a.616.616 0 0 1-.44-.186l-.592-.603a.614.614 0 0 0-.875-.005l-1.75 1.742a.64.64 0 0 0-.187.453v4.04c0 .35.279.634.622.634h2.04a.628.628 0 0 0 .623-.633v-1.5c0-.35.279-.633.622-.633h2.635a.617.617 0 0 0 .44-.185l2.86-2.913a.64.64 0 0 0 .183-.448v-4.118a.64.64 0 0 0-.182-.448l-2.86-2.912A.617.617 0 0 0 23.48 9"
      />
      <filter id="xcp_svg__d" width="115.9%" height="125%" x="-8%" y="-8.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#xcp_svg__a)" xlinkHref="#xcp_svg__b" />
      <use fill="#ED1650" xlinkHref="#xcp_svg__b" />
      <use
        fill="url(#xcp_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#xcp_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#xcp_svg__d)" xlinkHref="#xcp_svg__e" />
      <use fill="#FFF" xlinkHref="#xcp_svg__e" />
    </g>
  </svg>
);

export default SvgXcp;

import React from 'react';

const SvgWtc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="wtc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="wtc_svg__b" cx={16} cy={15} r={15} />
      <filter id="wtc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="wtc_svg__d" width="117.5%" height="126.9%" x="-8.8%" y="-9.6%" filterUnits="objectBoundingBox">
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
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#wtc_svg__a)" xlinkHref="#wtc_svg__b" />
        <use fill="#8200FF" fillRule="evenodd" xlinkHref="#wtc_svg__b" />
        <use
          fill="url(#wtc_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#wtc_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <g fill="#FFF" filter="url(#wtc_svg__d)" transform="translate(6 9)">
        <path d="M12.414 3.166l-.68.167c-.614.15-1.044.69-1.044 1.31v4.538l-2.247.55a.69.69 0 0 1-.836-.492.662.662 0 0 1-.02-.164V1.52c0-.31.215-.58.522-.656L11.557.02a.69.69 0 0 1 .836.492c.014.053.02.108.02.163v2.491zm-7.586-.042l-.852.209c-.614.15-1.045.69-1.045 1.31v4.58L.857 9.73a.69.69 0 0 1-.836-.492A.662.662 0 0 1 0 9.075V1.52C0 1.21.215.94.522.864L3.971.02a.69.69 0 0 1 .836.492c.014.053.02.108.02.163v2.45zM15.695.885l3.448-.844a.69.69 0 0 1 .836.491.653.653 0 0 1 .021.164v7.556c0 .31-.215.58-.522.655l-3.449.844a.69.69 0 0 1-.836-.491.662.662 0 0 1-.02-.164V1.54c0-.31.215-.58.522-.655z" />
        <path
          d="M6.897 3.314v5.761c0 .11.013.22.04.328a1.38 1.38 0 0 0 1.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 0 1-.837-.491.662.662 0 0 1-.02-.164V4.643c0-.31.215-.58.522-.655l2.754-.674zm7.586.042v5.74c0 .11.014.22.04.328.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 0 1-.522.656l-3.449.844a.69.69 0 0 1-.836-.491.662.662 0 0 1-.02-.164V4.643c0-.31.215-.58.522-.655l2.58-.632z"
          opacity={0.504}
        />
      </g>
    </g>
  </svg>
);

export default SvgWtc;

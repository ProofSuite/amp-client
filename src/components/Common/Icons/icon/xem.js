import React from 'react';

const SvgXem = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="xem_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xem_svg__b" cx={16} cy={15} r={15} />
      <filter id="xem_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="xem_svg__e"
        d="M6.145 10.954A19.83 19.83 0 0 1 6 8.636a20.035 20.035 0 0 1 4.152-1.779 20.221 20.221 0 0 1 6.262-.853c.568.011 1.39.074 2.014.141a6.005 6.005 0 0 0-3.065 4.19c-.06.314-.093.64-.104.988-.016.536-.068.958-.18 1.353a4.53 4.53 0 0 1-8.469.672 1.475 1.475 0 0 1-.1-.3 20.172 20.172 0 0 1-.365-2.094zm16.613 8.56c-.238.37-.49.73-.752 1.085a5.898 5.898 0 0 0-.73-2.89 5.933 5.933 0 0 0-2.146-2.263l-.09-.055a7.075 7.075 0 0 1-.149-.09c-1.137-.723-1.83-1.735-2.074-3.041A4.518 4.518 0 0 1 20.2 7.041c.82-.198 1.63-.17 2.437.083.619.195 1.245.45 2.008.807.44.207.884.437 1.356.704a20.113 20.113 0 0 1-.452 4.148 20.147 20.147 0 0 1-2.79 6.731zm-3.037 3.673A20.522 20.522 0 0 1 16.001 26a15.74 15.74 0 0 1-1.017-.639 20.375 20.375 0 0 1-7.288-8.722 5.882 5.882 0 0 0 2.42.785 6.027 6.027 0 0 0 3.614-.773 4.618 4.618 0 0 1 1.706-.569 4.52 4.52 0 0 1 4.902 3.206c.335 1.121.237 2.222-.283 3.307-.044.092-.082.166-.172.343l-.044.087a.581.581 0 0 1-.118.162z"
      />
      <filter id="xem_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#xem_svg__a)" xlinkHref="#xem_svg__b" />
      <use fill="#67B2E8" xlinkHref="#xem_svg__b" />
      <use
        fill="url(#xem_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#xem_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#xem_svg__d)" xlinkHref="#xem_svg__e" />
      <use fill="#FFF" xlinkHref="#xem_svg__e" />
    </g>
  </svg>
);

export default SvgXem;

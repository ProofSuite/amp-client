import React from 'react';

const SvgIotx = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="iotx_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="iotx_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="iotx_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#iotx_svg__a)" xlinkHref="#iotx_svg__b" />
        <use fill="#00D4D5" xlinkHref="#iotx_svg__b" />
        <use
          fill="url(#iotx_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#iotx_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g fill="#FFF">
        <path d="M16.31 5v5.002l4.342-2.497z" />
        <path opacity={0.9} d="M20.652 7.505v5.002l4.343-2.505z" />
        <path
          opacity={0.8}
          d="M16.31 10.002v5.003l4.342-2.498zm4.342 2.505v5.002l4.343-2.504zm-4.342 2.498v5.002l4.342-2.498z"
        />
        <path d="M20.652 17.51v5.001l4.343-2.504z" />
        <path opacity={0.4} d="M5.084 9.834v5.002l4.343-2.505z" />
        <path opacity={0.2} d="M10.563 11.693v5.002l4.336-2.497z" />
        <path opacity={0.3} d="M7.343 14.857v5.003l4.343-2.505z" />
        <path opacity={0.9} d="M10.205 18.632v5.002l4.336-2.505z" />
        <path opacity={0.7} d="M16.274 20.786v5.002l4.336-2.505z" />
        <path opacity={0.9} d="M11.286 9.223v5.003l4.335-2.498z" />
        <path opacity={0.8} d="M16.31 5v5.002l-4.344-2.497z" />
        <path opacity={0.6} d="M11.286 7.126v5.002L6.943 9.623zm4.343 2.476v5.003L11.286 12.1z" />
        <path opacity={0.95} d="M10.542 11.693v5.002L6.2 14.198z" />
        <path opacity={0.6} d="M16.31 15.005v5.002l-4.337-2.498z" />
        <path opacity={0.55} d="M7.343 16.17v5.002L3 18.667z" />
        <path d="M24.995 10.002v5.003l-4.343-2.498z" />
        <path opacity={0.95} d="M20.652 12.507v5.002l-4.343-2.504z" />
        <path opacity={0.9} d="M24.995 15.005v5.002l-4.343-2.498z" />
        <path opacity={0.7} d="M20.652 17.51v5.001l-4.343-2.504z" />
        <path opacity={0.4} d="M15.348 19.593v5.002l-4.343-2.497z" />
        <path d="M20.652 7.505v5.002l-4.343-2.505z" />
      </g>
    </g>
  </svg>
);

export default SvgIotx;

import React from 'react';

const SvgPot = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="pot_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="pot_svg__b" cx={16} cy={15} r={15} />
      <filter id="pot_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="pot_svg__e"
        d="M12.033 17.18l-.39 1.987-.71 3.651c-.02.11-.048.184-.188.182-.882-.013-1.764-.02-2.646-.03-.021 0-.043-.014-.099-.035l1.99-9.94H8.313c.004-.074.002-.118.01-.16.103-.537.214-1.073.307-1.612.026-.15.093-.188.233-.187.41.004.82-.011 1.228.003.195.006.27-.05.308-.242.228-1.188.472-2.372.706-3.558.028-.141.059-.238.243-.238 2.008.006 4.017-.013 6.025.013 1.172.015 2.347.075 3.5.312.397.082.8.188 1.168.352 1.058.47 1.695 1.284 1.872 2.411.275 1.751-.096 3.36-1.22 4.762-.83 1.032-1.968 1.611-3.239 1.963-1.008.279-2.042.366-3.084.368-1.355.003-2.71 0-4.065-.001h-.272zm.555-2.738h.283c1.433 0 2.866.003 4.3-.002.305 0 .614-.013.917-.05 1.157-.138 2.036-.693 2.598-1.7a2.14 2.14 0 0 0 .229-1.434c-.118-.697-.534-1.152-1.241-1.28a9.826 9.826 0 0 0-1.569-.17c-1.472-.027-2.944-.016-4.417-.02-.053 0-.106.008-.177.014l-.244 1.248h4.09l-.376 1.938h-4.103l-.29 1.456z"
      />
      <filter id="pot_svg__d" width="121.9%" height="121.9%" x="-10.9%" y="-7.8%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#pot_svg__a)" xlinkHref="#pot_svg__b" />
      <use fill="#105B2F" xlinkHref="#pot_svg__b" />
      <use
        fill="url(#pot_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#pot_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#pot_svg__d)" xlinkHref="#pot_svg__e" />
      <use fill="#FFF" xlinkHref="#pot_svg__e" />
    </g>
  </svg>
);

export default SvgPot;

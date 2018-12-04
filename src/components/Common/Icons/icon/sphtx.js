import React from 'react';

const SvgSphtx = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="sphtx_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="sphtx_svg__b" cx={16} cy={15} r={15} />
      <filter id="sphtx_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="sphtx_svg__e"
        d="M6 11.391v-.356h8.417v.356H6zm0-1.035V10h8.417v.356H6zm3.55 10.64v-8.893h.338v8.893H9.55zm.98 0v-8.893h.337v8.893h-.337zm15.232-.728l-3.798-4.013.238-.251L26 20.016l-.238.252zM16.519 10l3.798 4.013-.238.251-3.798-4.012.238-.252zm8.55 11l-3.798-4.013.238-.252 3.798 4.013-.238.252zm-9.242-10.268l3.798 4.012-.239.252-3.798-4.012.239-.252zm5.421 4.768l.239-.252 4.275-4.516.238.252-4.275 4.516-.238.252-.454.48-.239.252L16.52 21l-.238-.252 4.275-4.516.238-.252.454-.48zm-.454-.984L25.07 10l.238.252-4.275 4.516-.238.252-.454.48-.239.252-4.274 4.516-.239-.252 4.275-4.516.238-.252.455-.48.238-.252z"
      />
      <filter id="sphtx_svg__d" width="117.5%" height="131.8%" x="-8.8%" y="-11.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#sphtx_svg__a)" xlinkHref="#sphtx_svg__b" />
      <use fill="#00B098" xlinkHref="#sphtx_svg__b" />
      <use
        fill="url(#sphtx_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#sphtx_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#sphtx_svg__d)" xlinkHref="#sphtx_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#sphtx_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgSphtx;

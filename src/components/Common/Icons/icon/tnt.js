import React from 'react';

const SvgTnt = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="tnt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="tnt_svg__b" cx={16} cy={15} r={15} />
      <filter id="tnt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="tnt_svg__e"
        d="M13.89 20.503L14.048 24s1.875-.318 3.828 0l.156-3.497h-4.14zM11.626 17.8s5.469-.477 8.672 0l.312-3.815a59.109 59.109 0 0 0-9.14 0l.156 3.815zM26 7.944S15.531 5.718 6 8.103l.703 4.371.86-1.669s8.984-1.351 17.03 0l.782 1.67L26 7.943z"
      />
      <filter id="tnt_svg__d" width="117.5%" height="120.6%" x="-8.8%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#tnt_svg__a)" xlinkHref="#tnt_svg__b" />
      <use fill="#FF4081" fillRule="evenodd" xlinkHref="#tnt_svg__b" />
      <use
        fill="url(#tnt_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#tnt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#tnt_svg__d)" xlinkHref="#tnt_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#tnt_svg__e" />
    </g>
  </svg>
);

export default SvgTnt;

import React from 'react';

const SvgRise = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="rise_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="rise_svg__b" cx={16} cy={15} r={15} />
      <filter id="rise_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="rise_svg__e"
        d="M12.605 8.155a1.565 1.565 0 0 1-1.552-1.577c0-.872.695-1.578 1.552-1.578.858 0 1.553.706 1.553 1.578 0 .87-.695 1.577-1.553 1.577zM19.447 25a1.565 1.565 0 0 1-1.552-1.578c0-.87.695-1.577 1.552-1.577.858 0 1.553.706 1.553 1.577 0 .872-.695 1.578-1.553 1.578zm-6.205-11.79a1.38 1.38 0 0 1-1.955-.265 1.432 1.432 0 0 1 .26-1.986l7.158-5.562a1.38 1.38 0 0 1 1.955.265 1.432 1.432 0 0 1-.26 1.987l-7.158 5.561zm.053 5.669a1.38 1.38 0 0 1-1.955-.265 1.432 1.432 0 0 1 .26-1.987l7.158-5.561a1.38 1.38 0 0 1 1.955.265 1.432 1.432 0 0 1-.26 1.986l-7.158 5.562zm0 5.829a1.38 1.38 0 0 1-1.955-.265 1.432 1.432 0 0 1 .26-1.987l7.158-5.561a1.38 1.38 0 0 1 1.955.265 1.432 1.432 0 0 1-.26 1.986l-7.158 5.562z"
      />
      <filter id="rise_svg__d" width="135%" height="117.5%" x="-17.5%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#rise_svg__a)" xlinkHref="#rise_svg__b" />
      <use fill="#F49352" xlinkHref="#rise_svg__b" />
      <use
        fill="url(#rise_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#rise_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#rise_svg__d)" xlinkHref="#rise_svg__e" />
      <use fill="#FFF" xlinkHref="#rise_svg__e" />
    </g>
  </svg>
);

export default SvgRise;

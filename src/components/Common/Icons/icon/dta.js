import React from 'react';

const SvgDta = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="dta_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="dta_svg__b" cx={16} cy={15} r={15} />
      <filter id="dta_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="dta_svg__e"
        d="M24.963 13.512h.02L25 18.478 13.823 25l-2.992-1.682v.002l-.019-.012L8 21.505V8.484l3.073-1.813.006.003L13.792 5l11.15 6.563.021 1.95zm-3.275 3.112l-2.339-1.339-7.807 4.594 2.292 1.363 7.854-4.618zm-2.866-1.64l-4.816-2.758-.021 5.681 4.837-2.923zm-4.814-3.366l7.742 4.531v-2.705l-7.732-4.515-.01 2.689zM10.82 22.57l.03-2.713-.018.011v-9.572l-2.347-1.4v12.28l2.334 1.395zm.416-3.001l2.345-1.418V8.896l-2.345 1.401v9.273zm2.881 2.031l-.047 2.836L24.506 18.3l.03-2.82-10.42 6.12zm7.793-8.584l2.429-1.386-10.455-6.105-2.406 1.392 10.432 6.1z"
      />
      <filter id="dta_svg__d" width="120.6%" height="117.5%" x="-10.3%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#dta_svg__a)" xlinkHref="#dta_svg__b" />
      <use fill="#74D269" xlinkHref="#dta_svg__b" />
      <use
        fill="url(#dta_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#dta_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#dta_svg__d)" xlinkHref="#dta_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#dta_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgDta;

import React from 'react';

const SvgHtml = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="html_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="html_svg__b" cx={16} cy={15} r={15} />
      <filter id="html_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="html_svg__e"
        d="M16.02 15.945v7.992l5.947-1.601 1.397-15.39H16.02v6.532l.304-.947h.796l-1.1 3.414zm-7.384 7.524L7 5.5h18l-1.636 17.969L15.98 25.5l-7.344-2.031zm5.163-6.793v-.741l-2.469-.984 2.47-.99v-.742l-3.527 1.433v.592l3.526 1.432zm7.933-1.432l-3.527 1.432v-.741l2.47-.987-2.47-.987v-.742l3.527 1.433v.592zm-5.712.7v-2.466l-1.317 4.107h.788l.529-1.64z"
      />
      <filter id="html_svg__d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#html_svg__a)" xlinkHref="#html_svg__b" />
      <use fill="#CFA967" xlinkHref="#html_svg__b" />
      <use
        fill="url(#html_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#html_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#html_svg__d)" xlinkHref="#html_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#html_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgHtml;

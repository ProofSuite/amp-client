import React from 'react';

const SvgEdo = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="edo_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="edo_svg__b" cx={16} cy={15} r={15} />
      <filter id="edo_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="edo_svg__e"
        d="M13.06 22.874l2.683-2.697 2.694 2.697-1.719 1.722a1.377 1.377 0 0 1-1.95 0l-1.709-1.722zm6.95-9.242l-2.692-2.697 2.693-2.697 2.692 2.697-2.692 2.697zm-.669 8.363l-2.693-2.697 7.23-7.242 1.718 1.721c.539.54.539 1.413 0 1.953l-6.255 6.265zm-7.403-.278L9.246 19.02l7.218-7.23 2.692 2.697-7.218 7.23zm-3.822-3.8l-1.719-1.722a1.382 1.382 0 0 1 .013-1.952l1.718-1.722 2.693 2.698-2.705 2.698zM18.883 7.129l-7.23 7.238L8.96 11.67l6.255-6.266a1.377 1.377 0 0 1 1.95 0l1.718 1.725z"
      />
      <filter id="edo_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#edo_svg__a)" xlinkHref="#edo_svg__b" />
      <use fill="#242424" xlinkHref="#edo_svg__b" />
      <use
        fill="url(#edo_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#edo_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#edo_svg__d)" xlinkHref="#edo_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#edo_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgEdo;

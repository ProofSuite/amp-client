import React from 'react';

const SvgAe = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="ae_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ae_svg__b" cx={16} cy={15} r={15} />
      <filter id="ae_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ae_svg__e"
        d="M9.752 10h.904c1.413.134 2.72.821 3.687 1.81 2.009 2.039 3.113 4.916 5.67 6.433 1.848 1.097 4.433.2 5.341-1.654.462-.008.927-.008 1.389-.006-.636 1.883-2.489 3.236-4.515 3.417h-.746c-1.247-.1-2.46-.564-3.403-1.366-1.37-1.123-2.25-2.664-3.315-4.036-.916-1.213-1.85-2.577-3.366-3.128-1.873-.679-4.16.383-4.843 2.187-.6 1.486-.112 3.328 1.23 4.28 1.006.752 2.407 1.033 3.615.595 1.342-.468 2.338-1.532 3.102-2.66.301.417.594.84.884 1.266-1.188 1.447-2.836 2.69-4.796 2.862h-.803C7.317 19.834 5.17 17.804 5 15.406v-.785c.16-2.393 2.28-4.447 4.752-4.621zm11.68 0h.75c2.493.157 4.613 2.228 4.818 4.626v1.23c-2.057.018-4.116.006-6.173.008.002-.36.002-.717 0-1.077 1.626-.004 3.25.007 4.873-.004-.115-.636-.264-1.287-.654-1.826-.95-1.404-2.959-1.978-4.565-1.37-1.28.46-2.244 1.466-2.987 2.54-.286-.397-.57-.8-.845-1.206 1.173-1.468 2.81-2.738 4.783-2.921z"
      />
      <filter id="ae_svg__d" width="115.9%" height="135%" x="-8%" y="-12.5%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ae_svg__a)" xlinkHref="#ae_svg__b" />
      <use fill="#DE3F6B" xlinkHref="#ae_svg__b" />
      <use
        fill="url(#ae_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ae_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#ae_svg__d)" xlinkHref="#ae_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#ae_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgAe;

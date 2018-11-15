import React from 'react';

const SvgRlc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="rlc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="rlc_svg__b" cx={16} cy={15} r={15} />
      <filter id="rlc_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="rlc_svg__e"
        d="M23.683 11.886c.057-.057.17-.057.281-.057 1.687 0 3.036 1.428 3.036 3.143 0 1.6-1.18 2.857-2.698 3.142h-.338c-.562 0-1.124-.171-1.63-.457a.939.939 0 0 0-.562-.171c-.225 0-.45.057-.618.171-.394.229-.562.629-.562 1.086v.514a3.08 3.08 0 0 1-2.699 2.8h-.337c-.562 0-1.124-.171-1.63-.457-.225-.114-.393-.171-.618-.171-.225 0-.45.057-.619.171-.393.229-.562.629-.562 1.086v.514c-.112 1.486-1.293 2.629-2.754 2.8h-.281c-1.687 0-3.036-1.429-3.036-3.143.056-1.6 1.18-2.914 2.698-3.086h.338c.562 0 1.124.172 1.63.458a.939.939 0 0 0 .562.171c.225 0 .45-.057.618-.171.394-.229.562-.629.562-1.086-.112-1.657 1.069-3.143 2.699-3.314h.337c.562 0 1.124.171 1.63.457.225.114.394.171.619.171.224 0 .45-.057.618-.171.393-.229.562-.629.562-1.086-.112-1.657 1.124-3.143 2.754-3.314zM17.22 7.943c.112-.057.169-.057.337-.057 1.687 0 3.036 1.428 3.036 3.143-.056 1.6-1.18 2.914-2.699 3.085h-.337c-.562 0-1.124-.171-1.63-.457a.939.939 0 0 0-.562-.171c-.225 0-.45.057-.618.171-.394.229-.563.629-.563 1.086v.514c-.112 1.485-1.292 2.628-2.754 2.8h-.281c-1.686 0-3.036-1.428-3.036-3.143 0-1.542 1.125-2.8 2.642-3.028h.338c.562 0 1.124.171 1.63.457a.939.939 0 0 0 .562.171c.225 0 .45-.057.618-.171.394-.229.562-.629.562-1.086-.112-1.657 1.125-3.143 2.755-3.314zM11.036 4c1.676 0 3.035 1.382 3.035 3.086s-1.36 3.085-3.035 3.085C9.359 10.171 8 8.79 8 7.086S9.36 4 11.036 4z"
      />
      <filter id="rlc_svg__d" width="118.4%" height="115.9%" x="-9.2%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#rlc_svg__a)" xlinkHref="#rlc_svg__b" />
      <use fill="#FFD800" xlinkHref="#rlc_svg__b" />
      <use
        fill="url(#rlc_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#rlc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#rlc_svg__d)" xlinkHref="#rlc_svg__e" />
      <use fill="#FFF" xlinkHref="#rlc_svg__e" />
    </g>
  </svg>
);

export default SvgRlc;

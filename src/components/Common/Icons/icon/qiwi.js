import React from 'react';

const SvgQiwi = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="qiwi_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="qiwi_svg__b" cx={16} cy={15} r={15} />
      <filter id="qiwi_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="qiwi_svg__e"
        d="M22.59 18.445c.051.401-.063.556-.19.556s-.305-.155-.495-.465c-.19-.31-.267-.66-.165-.84.063-.117.203-.169.368-.104.33.13.457.633.482.853zm-1.777.88c.393.336.508.723.304 1.008a.664.664 0 0 1-.52.232.896.896 0 0 1-.597-.22c-.355-.31-.457-.827-.229-1.111a.489.489 0 0 1 .407-.181c.203 0 .432.09.635.271zM7 13.894C7 8.981 10.91 5 15.734 5c4.825 0 8.735 3.982 8.735 8.894a9.074 9.074 0 0 1-1.231 4.564c-.026.039-.09.026-.102-.026-.304-2.185-1.612-3.387-3.516-3.749-.166-.026-.191-.13.025-.155.584-.052 1.409-.039 1.84.039a5.9 5.9 0 0 0 .039-.686c0-3.245-2.59-5.882-5.777-5.882-3.186 0-5.776 2.637-5.776 5.882 0 3.246 2.59 5.883 5.776 5.883h.267a8.078 8.078 0 0 1-.115-1.59c.013-.362.09-.414.242-.13.8 1.41 1.942 2.677 4.177 3.18 1.828.415 3.656.893 5.624 3.44.177.22-.089.452-.292.271-2.006-1.81-3.834-2.405-5.497-2.405-1.867.014-3.136.26-4.419.26C10.91 22.79 7 18.806 7 13.893z"
      />
      <filter id="qiwi_svg__d" width="118.4%" height="117.5%" x="-9.2%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#qiwi_svg__a)" xlinkHref="#qiwi_svg__b" />
      <use fill="#FF8C00" fillRule="evenodd" xlinkHref="#qiwi_svg__b" />
      <use
        fill="url(#qiwi_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#qiwi_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#qiwi_svg__d)" xlinkHref="#qiwi_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#qiwi_svg__e" />
    </g>
  </svg>
);

export default SvgQiwi;

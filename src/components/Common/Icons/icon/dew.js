import React from 'react';

const SvgDew = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="dew_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="dew_svg__b" cx={16} cy={15} r={15} />
      <filter id="dew_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="dew_svg__e"
        d="M12.161 21.816c.618 0 1.12.49 1.12 1.092 0 .603-.502 1.092-1.12 1.092h-1.453c-.32 0-.628-.124-.854-.345a1.163 1.163 0 0 1-.354-.833V7.149c0-.305.124-.597.345-.813.22-.215.52-.336.833-.336h1.557c.618 0 1.12.489 1.12 1.092 0 .29-.119.567-.329.772-.21.204-.495.32-.791.32h-.345v13.632h.271zm12.17-11.452c.779 1.338 1.169 2.835 1.169 4.491 0 1.657-.395 3.153-1.182 4.492-.787 1.34-1.662 2.365-3.099 3.294-1.32.854-2.698 1.358-4.407 1.358h-.567c-.618 0-1.12-.489-1.12-1.092 0-.603.502-1.091 1.12-1.091h.69c1.21 0 2.089-.501 3.076-1.07.986-.568 1.618-1.499 2.19-2.503.573-1.003.86-2.124.86-3.362-.001-1.255-.291-2.384-.872-3.388a6.372 6.372 0 0 0-2.376-2.372c-1.004-.577-2.12-.866-3.347-.866h-.297c-.618 0-1.12-.488-1.12-1.091 0-.29.119-.568.329-.772.21-.205.494-.32.791-.32h.349c1.692 0 3.222.38 4.59 1.142a8.368 8.368 0 0 1 3.223 3.15z"
      />
      <filter id="dew_svg__d" width="121.9%" height="119.4%" x="-10.9%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#dew_svg__a)" xlinkHref="#dew_svg__b" />
      <use fill="#FEC907" xlinkHref="#dew_svg__b" />
      <use
        fill="url(#dew_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#dew_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#dew_svg__d)" xlinkHref="#dew_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#dew_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgDew;

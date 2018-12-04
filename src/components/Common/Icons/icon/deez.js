import React from 'react';

const SvgDeez = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="deez_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="deez_svg__b" cx={16} cy={15} r={15} />
      <filter id="deez_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="deez_svg__e"
        d="M13.707 18.86c.365-.237 2.818-1.74 5.208-3.204 1.723-1.054 1.723-1.054 1.693-1.157-.03-.125-10.7-6.609-10.809-6.674a21.481 21.481 0 0 1-.602-.369c.196-.136.577-.396 1.033-.706L11.34 6l.762.456c.94.562 11.26 6.892 12.706 7.793-.59.355-2.68 1.592-5.49 3.247l-5.583 3.29a36.218 36.218 0 0 1-.02-.874 46.32 46.32 0 0 1-.007-1.051zm-2.368-6.296c.185.11.505.303.899.548l1.029.638.022 1.93c.065 5.577.065 5.577.146 5.634l.054.037.06-.022c.03-.009.041-.013 10.871-6.402l.58-.342-.191 2.683-.07.04a5095.12 5095.12 0 0 1-13.389 7.664c-.004-.699-.01-3.085-.011-6.196v-6.212zM9 23.8l.025-15.967.388.229c.312.182 2.416 1.465 4.793 2.919a1210.99 1210.99 0 0 0 5.114 3.118l.715.43-2.364 1.446-.472-.275a279.81 279.81 0 0 1-2.83-1.732 260.976 260.976 0 0 0-2.76-1.688l-.652-.38-.005 6.769c-.002 3.054-.005 5.592-.007 6.332-.193-.117-.522-.32-.908-.56L9 23.8z"
      />
      <filter id="deez_svg__d" width="121.9%" height="118.4%" x="-10.9%" y="-6.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#deez_svg__a)" xlinkHref="#deez_svg__b" />
        <use fill="#939393" fillRule="evenodd" xlinkHref="#deez_svg__b" />
        <use
          fill="url(#deez_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#deez_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeLinejoin="square" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#deez_svg__d)" xlinkHref="#deez_svg__e" />
      <use fill="#FFF" xlinkHref="#deez_svg__e" />
    </g>
  </svg>
);

export default SvgDeez;

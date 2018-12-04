import React from 'react';

const SvgLsk = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="lsk_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="lsk_svg__b" cx={16} cy={15} r={15} />
      <filter id="lsk_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="lsk_svg__e"
        d="M14.249 23.958c-.014.014-.042.028-.056.042h-1.552c-.028 0-.042-.014-.056-.028L8.01 18.804a.09.09 0 0 1 0-.083l5.698-9.835c.028-.041.097-.041.125 0l1.594 2.758c.014.014.014.042 0 .07l-3.854 6.645c-.014.027 0 .055.014.083l2.301 2.591a.105.105 0 0 0 .056.028h2.717c.07 0 .097.07.055.111l-2.467 2.786zm1.69-18.916c.029-.056.098-.056.112 0l7.943 13.65c.014.029 0 .057-.014.084l-4.574 5.168a.105.105 0 0 1-.056.028h-3.715c-.07 0-.097-.07-.055-.111l2.481-2.814 2.329-2.619c.028-.028.028-.056.014-.083l-4.409-7.606-1.663-2.87c-.014-.013-.014-.041 0-.07l1.608-2.757z"
      />
      <filter id="lsk_svg__d" width="121.9%" height="118.4%" x="-10.9%" y="-6.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#lsk_svg__a)" xlinkHref="#lsk_svg__b" />
      <use fill="#0D4EA0" fillRule="evenodd" xlinkHref="#lsk_svg__b" />
      <use
        fill="url(#lsk_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#lsk_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#lsk_svg__d)" xlinkHref="#lsk_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#lsk_svg__e" />
    </g>
  </svg>
);

export default SvgLsk;

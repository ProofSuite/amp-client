import React from 'react';

const SvgUnity = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="unity_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="unity_svg__b" cx={16} cy={15} r={15} />
      <filter id="unity_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="unity_svg__d" width="115.9%" height="125%" x="-8%" y="-8.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#unity_svg__a)" xlinkHref="#unity_svg__b" />
      <use fill="#F58634" xlinkHref="#unity_svg__b" />
      <use
        fill="url(#unity_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#unity_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" fillRule="nonzero" filter="url(#unity_svg__d)" transform="translate(5 8)">
        <path d="M8.288 13.732h.004c1.189-.144 2.189-.504 3-1.08 1.074-.77 1.611-1.748 1.611-2.934 0-1-.393-1.837-1.178-2.522-.787-.683-1.853-1.098-3.198-1.242-.457-.059-1.105-.102-1.937-.15-1.814-.11-2.991-.358-3.537-.747a1.742 1.742 0 0 1-.48-.522 1.236 1.236 0 0 1-.156-.61c0-.561.324-1.035.977-1.408.652-.372 1.476-.562 2.478-.562.949 0 1.89.162 2.78.48 3.826 1.364 7.48 6.132 9.913 9.546-1.983 1.205-4.684 1.948-7.66 1.948-.876 0-1.751-.065-2.617-.197zM4.009 11.79C.516 10.515-1.013 7.364.712 4.304c.048.43.207.843.463 1.2.32.449.79.814 1.407 1.101 2.155.936 6.118.338 7.75 1.527.549.4.824.911.824 1.534 0 .783-.383 1.424-1.149 1.922-.765.498-1.761.747-2.987.747a8.86 8.86 0 0 1-3.01-.545z" />
        <path
          fillOpacity={0.5}
          d="M20.912 9.875V4.021c.657.889 1.024 1.882 1.024 2.927 0 1.046-.367 2.037-1.024 2.927zm-1.649-7.46l.005 7.461C16.925 6.55 13.424 2.365 9.121.967A10.616 10.616 0 0 0 6.828.49 16.87 16.87 0 0 1 10.905 0c3.34 0 6.335.936 8.358 2.415z"
        />
      </g>
    </g>
  </svg>
);

export default SvgUnity;

import React from 'react';

const SvgPink = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="pink_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="pink_svg__b" cx={16} cy={15} r={15} />
      <filter id="pink_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="pink_svg__d" width="120.6%" height="117.5%" x="-10.3%" y="-6.2%" filterUnits="objectBoundingBox">
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
      <use fill="#000" filter="url(#pink_svg__a)" xlinkHref="#pink_svg__b" />
      <use fill="#ED79AA" xlinkHref="#pink_svg__b" />
      <use
        fill="url(#pink_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#pink_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" filter="url(#pink_svg__d)" transform="translate(6.5 5)">
        <path
          d="M16.952 2.929l-1.87 1.883A7.238 7.238 0 0 0 9.93 2.663c-3.915 0-7.11 3.11-7.278 7.01h-.008v7.122A10.003 10.003 0 0 1 0 10C0 4.477 4.446 0 9.93 0a9.865 9.865 0 0 1 7.022 2.929zm0 14.142A9.865 9.865 0 0 1 10.092 20v-2.664a7.238 7.238 0 0 0 4.99-2.147l1.87 1.883z"
          opacity={0.5}
        />
        <path d="M5.181 18.784v-9.11h.007C5.328 7.069 7.47 5 10.092 5c2.712 0 4.911 2.214 4.911 4.946 0 2.731-2.199 4.945-4.91 4.945a4.862 4.862 0 0 1-2.483-.677v5.511a9.822 9.822 0 0 1-2.429-.94zm4.911-6.338a2.491 2.491 0 0 0 2.483-2.5c0-1.381-1.112-2.5-2.483-2.5a2.491 2.491 0 0 0-2.482 2.5c0 1.38 1.111 2.5 2.482 2.5z" />
      </g>
    </g>
  </svg>
);

export default SvgPink;

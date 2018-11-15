import React from 'react';

const SvgBlk = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="blk_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="blk_svg__b" cx={16} cy={15} r={15} />
      <filter id="blk_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="blk_svg__e"
        d="M23.1 10.13a3.803 3.803 0 0 1-2.436 3.732s1.012-1 .965-3.563c-.048-2.563-1.93-3.83-1.93-3.83s3.354.747 3.4 3.66zM11.936 23.819l-3.436.169v-.321s2.103-.217 2.103-3.99v-9.64C10.603 6.843 8.5 6.29 8.5 6.29V6l3.436.168V23.82zm5.492.18c-1.495.013-4.268-.196-4.268-.196V6.193c1.828-.025 2.467-.277 3.973-.06 1.507.216 2.801 1.721 3.154 3.226.353 1.505-.023 2.938-.506 3.72-.483.783-1.541 1.325-1.541 1.325s1.6.554 2.165 1.035c.565.482 1.66 1.794 1.236 4.648-.424 2.854-2.719 3.9-4.213 3.912zm3.971-.65s1.63-1.42 1.558-4.301c-.071-2.88-1.558-4.235-1.558-4.235s3.066.77 3.1 4.202c.036 3.431-3.1 4.335-3.1 4.335zm-3.1-10.334c1.098-1.461.753-4.21-.577-5.15-1.33-.94-2.73-.47-3-.205-.272.265-.26 6.43-.26 6.43s2.738.386 3.836-1.075zm.203 2.625c-1.028-.458-4.04-.338-4.04-.338s-.047 1.558.063 4.471c.11 2.914 1.083 2.898 2.095 2.938 1.012.04 2.942-.032 3.577-2.545.636-2.512-.667-4.069-1.695-4.526z"
      />
      <filter id="blk_svg__d" width="121.9%" height="119.4%" x="-10.9%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#blk_svg__a)" xlinkHref="#blk_svg__b" />
      <use fill="#181818" xlinkHref="#blk_svg__b" />
      <use
        fill="url(#blk_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#blk_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#blk_svg__d)" xlinkHref="#blk_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#blk_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgBlk;

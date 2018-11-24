import React from 'react';

const SvgRpx = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="rpx_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="rpx_svg__b" cx={16} cy={15} r={15} />
      <filter id="rpx_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="rpx_svg__e"
        d="M25.696 14.732c.72 0 1.304.57 1.304 1.275 0 .704-.584 1.275-1.304 1.275-.55 0-1.021-.334-1.212-.805h-3.72l-1.372 2.44c-.226.402-.845.283-.899-.172l-.308-2.607-1.14 8.454c-.076.562-.917.536-.956-.03l-.935-13.667-.99 9.054c-.06.54-.853.568-.95.033l-1.048-5.756-.484 1.895a.479.479 0 0 1-.466.356H6.48a.475.475 0 0 1-.48-.47c0-.26.215-.47.48-.47h4.36l.939-3.671c.126-.492.848-.467.94.032l.849 4.669L14.787 5.42c.063-.571.918-.555.957.018l.981 14.34 1.014-7.524c.074-.549.889-.543.954.007l.582 4.915.784-1.396a.482.482 0 0 1 .421-.243h4.004a1.304 1.304 0 0 1 1.212-.805z"
      />
      <filter id="rpx_svg__d" width="116.7%" height="117.5%" x="-8.3%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#rpx_svg__a)" xlinkHref="#rpx_svg__b" />
      <use fill="#8D181B" fillRule="evenodd" xlinkHref="#rpx_svg__b" />
      <use
        fill="url(#rpx_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#rpx_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#rpx_svg__d)" xlinkHref="#rpx_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#rpx_svg__e" />
    </g>
  </svg>
);

export default SvgRpx;

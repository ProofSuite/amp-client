import React from 'react';

const SvgBurst = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="burst_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="burst_svg__b" cx={16} cy={15} r={15} />
      <filter id="burst_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="burst_svg__e"
        d="M11.706 18.296L4 15.77h5.155l.51-2.443 4.578.003L15.385 7h4.606c3.118 0 4.382 1.255 3.915 3.845l-.1.555c-.273 1.509-.962 2.512-2.146 3.091 1.173.6 1.567 1.735 1.272 3.37l-.228 1.266C22.248 21.653 20.39 23 17.372 23h-4.875l1.263-6.993h-1.53l-.524 2.29zm5.066-2.747l-.944 5.23h1.945c1.154 0 1.795-.512 2.013-1.72l.245-1.353c.278-1.543-.256-2.157-1.769-2.157h-1.49zm1.143-6.329l-.824 4.564h1.412c1.288 0 2.041-.55 2.272-1.83l.157-.866c.225-1.247-.241-1.868-1.422-1.868h-1.595z"
      />
      <filter id="burst_svg__d" width="117.5%" height="121.9%" x="-8.8%" y="-7.8%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#burst_svg__a)" xlinkHref="#burst_svg__b" />
      <use fill="#2D2D2D" xlinkHref="#burst_svg__b" />
      <use
        fill="url(#burst_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#burst_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#burst_svg__d)" xlinkHref="#burst_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#burst_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgBurst;

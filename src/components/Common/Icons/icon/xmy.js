import React from 'react';

const SvgXmy = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="xmy_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xmy_svg__b" cx={16} cy={15} r={15} />
      <filter id="xmy_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="xmy_svg__e"
        d="M21.05 20c-.602 0-1.263-.303-1.263-1.212 0-.448.35-1.825 1.048-4.132.143-.356.214-.676.214-.959 0-.545-.42-1.09-1.202-1.09-.454 0-1.443.18-1.743 1.15-.2.647-.661 2.364-1.383 5.152-.28.727-.781 1.091-1.502 1.091-1.082 0-1.263-.788-1.263-1.273 0-.192.288-1.353.865-3.48.225-.71.337-1.227.337-1.55 0-.485-.36-1.09-1.202-1.09-.841 0-1.623.605-1.983 1.938-.24.89-.581 2.223-1.022 4-.24.97-.782 1.455-1.623 1.455-.762 0-1.162-.424-1.202-1.273l1.382-5.757H6.443a1.425 1.425 0 1 1-.03-2.849h5.139c.721 0 1.162.344 1.322 1.03C13.596 10.243 14.557 10 15.4 10c.841 0 1.923.485 2.404 1.576.661-.728 1.804-1.576 3.427-1.576 1.502 0 2.765 1.03 2.765 2.848 0 .687-.341 2.122-1.022 4.304l2.637-.018c.771 0 1.39.642 1.39 1.433S26.381 20 25.617 20H21.05z"
      />
      <filter id="xmy_svg__d" width="115.9%" height="135%" x="-8%" y="-12.5%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#xmy_svg__a)" xlinkHref="#xmy_svg__b" />
        <use fill="#EC1076" fillRule="evenodd" xlinkHref="#xmy_svg__b" />
        <use
          fill="url(#xmy_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#xmy_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#xmy_svg__d)" xlinkHref="#xmy_svg__e" />
      <use fill="#FFF" xlinkHref="#xmy_svg__e" />
    </g>
  </svg>
);

export default SvgXmy;

import React from 'react';

const SvgArg = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="arg_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="arg_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="arg_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#arg_svg__a)" xlinkHref="#arg_svg__b" />
        <use fill="#A71435" xlinkHref="#arg_svg__b" />
        <use
          fill="url(#arg_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#arg_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g fill="#FFF">
        <path d="M11.192 5.142a10.942 10.942 0 0 1 13.122 16.977c-.545-1.188-.963-2.434-1.43-3.66L20.06 11.06c-.272-.75-.73-1.47-1.44-1.859a5.568 5.568 0 0 0-3.203-.496c-.876.097-1.791.399-2.385 1.09-.565.652-.818 1.49-1.139 2.278l-2.035 5.16c-.68 1.635-1.255 3.328-1.995 4.954a10.104 10.104 0 0 1-2.288-4.04 10.951 10.951 0 0 1 5.627-13.015l-.01.01z" />
        <path d="M15.261 12.598c.195-.584.974-.778 1.48-.447.272.204.37.555.496.866 1.266 3.31 2.512 6.639 3.768 9.958.165.477.408.935.506 1.431-.08.085-.172.157-.273.215a10.97 10.97 0 0 1-9.014.603c-.545-.224-1.11-.418-1.587-.76.049-.447.273-.846.438-1.255 1.402-3.534 2.775-7.077 4.186-10.61z" />
      </g>
    </g>
  </svg>
);

export default SvgArg;

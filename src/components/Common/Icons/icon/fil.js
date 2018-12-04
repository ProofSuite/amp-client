import React from 'react';

const SvgFil = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="fil_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="fil_svg__b" cx={16} cy={15} r={15} />
      <filter id="fil_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="fil_svg__e"
        d="M15.932 11.908c.372-1.563.82-2.968 1.296-3.885.175-.438.885-1.487 1.664-2.18 1.297-1.155 2.752-1.448 4.267-.497l-.133.211.133-.211c.773.485 1.083.984.947 1.454-.1.35-.483.63-.688.601-.3.03-.602-.03-.89-.242a1.685 1.685 0 0 1-.541-.721c-.212-.5-.49-.67-.831-.63-.247.028-.534.186-.625.292l-.235.26a3.894 3.894 0 0 0-.484.635c-.476.793-.915 2.246-1.524 5.257l4.036.591-.222 1.617-4.096-.6-.175 1.064-.045.266c-.024.138-.05.288-.08.448l4.136.606-.237 1.615-4.233-.62c-.489 2.078-1.133 4.305-1.588 5.184-.176.439-.885 1.486-1.664 2.18-1.297 1.154-2.752 1.448-4.267.497-.773-.485-1.083-.985-.947-1.455.1-.35.483-.629.688-.6.3-.03.602.03.89.241.222.164.406.402.541.722.212.499.49.67.831.63.247-.029.534-.187.625-.293.907-1.01 1.626-2.956 2.535-7.45l-4.036-.592.222-1.617 4.096.6.176-1.063a31.19 31.19 0 0 1 .125-.715l-4.12-.603.236-1.615 4.217.618z"
      />
      <filter id="fil_svg__d" width="122.9%" height="116.8%" x="-11.5%" y="-6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#fil_svg__a)" xlinkHref="#fil_svg__b" />
      <use fill="#42C1CA" fillRule="evenodd" xlinkHref="#fil_svg__b" />
      <use
        fill="url(#fil_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#fil_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#fil_svg__d)" xlinkHref="#fil_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#fil_svg__e" />
    </g>
  </svg>
);

export default SvgFil;

import React from 'react';

const SvgBlz = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="blz_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="blz_svg__b" cx={16} cy={15} r={15} />
      <filter id="blz_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="blz_svg__e"
        d="M11.633 19.336a1.752 1.752 0 0 1 0 2.444 1.676 1.676 0 0 1-2.4.003c-.32-.324-.5-.765-.5-1.225 0-.46.18-.9.5-1.225a1.676 1.676 0 0 1 2.4.003zm11.063-11.61a1.73 1.73 0 0 1 1.048 1.599c0 .7-.414 1.33-1.048 1.598a1.675 1.675 0 0 1-1.85-.375 1.745 1.745 0 0 1-.498-1.223c0-.46.179-.9.498-1.223a1.675 1.675 0 0 1 1.85-.375zM11.41 18.003l1.637-1.676a3.263 3.263 0 0 0 1.796 1.83l-1.641 1.671-1.792-1.825zm9.697-6.137l-1.641 1.672a3.226 3.226 0 0 0-.71-1.098 3.227 3.227 0 0 0-1.081-.727l1.64-1.672 1.792 1.825zm-.687 7.942a1.698 1.698 0 0 1 1.569-1.067c.687 0 1.306.421 1.569 1.067.262.647.117 1.39-.368 1.885a1.68 1.68 0 0 1-1.201.508 1.68 1.68 0 0 1-1.2-.508 1.753 1.753 0 0 1-.369-1.885zM9.035 8.51a1.698 1.698 0 0 1 1.569-1.068c.687 0 1.306.421 1.569 1.068.262.646.117 1.39-.368 1.885a1.68 1.68 0 0 1-1.201.507 1.68 1.68 0 0 1-1.2-.507 1.753 1.753 0 0 1-.369-1.885zM19.18 19.754l-1.645-1.667a3.263 3.263 0 0 0 1.796-1.83l1.64 1.672-1.79 1.825zm-5.841-9.81l1.64 1.673a3.17 3.17 0 0 0-1.077.723c-.308.314-.551.69-.714 1.102l-1.64-1.672 1.79-1.825zm2.942-1.481c-.939 0-1.7-.775-1.7-1.732 0-.956.761-1.731 1.7-1.731.45 0 .883.182 1.202.507.319.325.498.765.497 1.224 0 .957-.76 1.732-1.7 1.732zm1.7 14.806c0 .956-.762 1.731-1.7 1.731-.939 0-1.7-.775-1.7-1.731 0-.957.761-1.732 1.7-1.732.45 0 .883.182 1.202.507.319.325.498.765.497 1.225zm-1.083-13.9v2.144a3.075 3.075 0 0 0-1.07 0V9.369h1.07zm0 9.212v2.145h-1.07V18.58c.354.063.716.063 1.07 0zm5.332-3.392a1.755 1.755 0 0 1 .369-1.887 1.677 1.677 0 0 1 1.852-.376c.635.268 1.049.9 1.049 1.6 0 .46-.179.9-.497 1.225a1.683 1.683 0 0 1-2.773-.562zM6.5 14.82c0-.956.76-1.731 1.7-1.731.938 0 1.699.774 1.7 1.73 0 .46-.18.9-.498 1.225a1.683 1.683 0 0 1-1.202.507c-.939 0-1.7-.775-1.7-1.73zm15.083.545l-2.104-.002a3.25 3.25 0 0 0 0-1.09h2.104v1.092zm-8.643 0h-2.105v-1.09h2.105a3.25 3.25 0 0 0 0 1.09zm3.29 2.037c-1.331 0-2.41-1.099-2.41-2.454 0-1.356 1.079-2.455 2.41-2.455 1.33 0 2.409 1.1 2.41 2.455 0 1.355-1.08 2.454-2.41 2.454z"
      />
      <filter id="blz_svg__d" width="118.4%" height="117.5%" x="-9.2%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#blz_svg__a)" xlinkHref="#blz_svg__b" />
      <use fill="#18578C" xlinkHref="#blz_svg__b" />
      <use
        fill="url(#blz_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#blz_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#blz_svg__d)" xlinkHref="#blz_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#blz_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgBlz;

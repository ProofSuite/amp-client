import React from 'react';

const SvgPlr = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="plr_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="plr_svg__b" cx={16} cy={15} r={15} />
      <filter id="plr_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="plr_svg__e"
        d="M8.41 19.902h-.098V24H6V10.125h2.26v.64h.089c.789-.756 1.794-.777 2.358-.777 2.364 0 3.914 2.253 3.914 5.262v.39c0 3.131-1.794 4.997-3.954 4.997-1.011.003-1.76-.228-2.257-.735zm4.064-4.076v-.683c0-1.96-.747-3.271-2.078-3.271-1.438 0-2.209 1.524-2.209 3.271v.68c0 1.665.759 2.94 2.249 2.94 1.173-.004 2.038-.918 2.038-2.937zM15.74 6h2.315v14.576H15.74V6zm8.929 6.409c-1.298 0-2.587 1.03-2.587 2.332v5.844H19.78V10.223h2.133v.637H22c.518-.546 1.785-.802 2.827-.787.104 0 .018.003.119.003l.012 2.333h-.29zm-.972 5.686H26v2.481h-2.303v-2.481z"
      />
      <filter id="plr_svg__d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#plr_svg__a)" xlinkHref="#plr_svg__b" />
      <use fill="#00BFFF" xlinkHref="#plr_svg__b" />
      <use
        fill="url(#plr_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#plr_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#plr_svg__d)" xlinkHref="#plr_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#plr_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgPlr;

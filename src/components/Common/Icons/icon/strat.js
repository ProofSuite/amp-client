import React from 'react';

const SvgStrat = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="strat_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="strat_svg__b" cx={16} cy={15} r={15} />
      <filter id="strat_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="strat_svg__e"
        d="M16.053 17.373l9.594-5.584-9.594-5.684-9.498 5.684 9.498 5.584zm-10.006-2.92a.76.76 0 0 0 .376.657l9.627 5.608 9.785-5.788a.739.739 0 0 1 1.109.64v2.626a.743.743 0 0 1-.361.637l-10.157 6.063a.732.732 0 0 1-.746.003L5.26 18.773a.53.53 0 0 1-.189-.721.521.521 0 0 1 .716-.19l10.263 6.033 9.847-5.878v-1.9l-9.473 5.603a.732.732 0 0 1-.742.003l-9.783-5.7A1.815 1.815 0 0 1 5 14.453V11.98a.631.631 0 0 1 .947-.548l.608.357-.764.457a.521.521 0 0 1-.784-.364.529.529 0 0 1 .25-.542l10.419-6.236a.732.732 0 0 1 .75-.002l10.211 6.05a.744.744 0 0 1-.005 1.281L16.42 18.377a.732.732 0 0 1-.74-.001L5.42 12.343a.415.415 0 0 0 .608-.239.423.423 0 0 0 .02-.124v2.474z"
      />
      <filter id="strat_svg__d" width="115.9%" height="117.5%" x="-8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#strat_svg__a)" xlinkHref="#strat_svg__b" />
      <use fill="#1387C9" xlinkHref="#strat_svg__b" />
      <use
        fill="url(#strat_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#strat_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#strat_svg__d)" xlinkHref="#strat_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#strat_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgStrat;

import React from 'react';

const SvgMda = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="mda_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="mda_svg__b" cx={16} cy={15} r={15} />
      <filter id="mda_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="mda_svg__e"
        d="M20.663 6.992c1.216 1.3 1.837 2.932 1.837 4.84 0 1.937-.621 3.57-1.838 4.87-.973 1.023-2.135 1.631-3.486 1.853v1.134h2.756v1.245h-2.784v.663h2.784v1.162h-2.756V25h-2.352v-2.24h-2.73v-1.163h2.757v-.663h-2.756v-1.245h2.73v-1.162c-1.325-.221-2.487-.83-3.46-1.853-1.243-1.3-1.865-2.933-1.865-4.869 0-1.964.595-3.596 1.838-4.869C12.58 5.636 14.122 5 16.014 5c1.865 0 3.405.636 4.649 1.992zm-2.541 7.386c.513-.664.784-1.522.784-2.573 0-1.023-.27-1.88-.838-2.545-.54-.691-1.243-1.023-2.054-1.023-.838 0-1.54.332-2.081.996-.542.663-.812 1.493-.812 2.545 0 1.078.271 1.936.812 2.6.54.664 1.243.995 2.08.995.866 0 1.595-.332 2.109-.995z"
      />
      <filter id="mda_svg__d" width="126.9%" height="117.5%" x="-13.5%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#mda_svg__a)" xlinkHref="#mda_svg__b" />
      <use fill="#01A64F" fillRule="evenodd" xlinkHref="#mda_svg__b" />
      <use
        fill="url(#mda_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#mda_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#mda_svg__d)" xlinkHref="#mda_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#mda_svg__e" />
    </g>
  </svg>
);

export default SvgMda;

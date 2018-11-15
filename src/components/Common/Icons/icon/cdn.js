import React from 'react';

const SvgCdn = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="cdn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="cdn_svg__b" cx={16} cy={15} r={15} />
      <filter id="cdn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="cdn_svg__e"
        d="M16 5l-1.66 3.016c-.188.328-.525.298-.863.115l-1.2-.607.894 4.633c.189.847-.415.847-.713.48L10.36 10.35l-.34 1.162c-.04.153-.212.313-.471.275l-2.65-.544.695 2.468c.15.549.266.776-.15.92l-.945.434 4.563 3.612a.575.575 0 0 1 .208.605l-.4 1.278c1.572-.177 2.98-.442 4.552-.606.139-.014.371.209.37.366L15.585 25h.764l-.12-4.67c-.001-.157.21-.39.348-.376 1.572.164 2.98.43 4.551.606l-.399-1.278a.574.574 0 0 1 .208-.605l4.563-3.612-.945-.433c-.416-.145-.3-.372-.15-.921l.696-2.468-2.651.544c-.259.038-.432-.122-.47-.275l-.341-1.162-2.097 2.288c-.298.366-.902.366-.713-.48l.895-4.634-1.201.607c-.338.183-.675.213-.863-.115L16 5z"
      />
      <filter id="cdn_svg__d" width="118.4%" height="117.5%" x="-9.2%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#cdn_svg__a)" xlinkHref="#cdn_svg__b" />
      <use fill="#F70808" xlinkHref="#cdn_svg__b" />
      <use
        fill="url(#cdn_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#cdn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#cdn_svg__d)" xlinkHref="#cdn_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#cdn_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgCdn;

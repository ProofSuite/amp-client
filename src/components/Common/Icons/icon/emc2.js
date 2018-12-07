import React from 'react';

const SvgEmc2 = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="emc2_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="emc2_svg__b" cx={16} cy={15} r={15} />
      <filter id="emc2_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="emc2_svg__d" width="117.5%" height="125%" x="-8.8%" y="-8.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#emc2_svg__a)" xlinkHref="#emc2_svg__b" />
      <use fill="#0CF" fillRule="evenodd" xlinkHref="#emc2_svg__b" />
      <use
        fill="url(#emc2_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#emc2_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" filter="url(#emc2_svg__d)" transform="translate(6 8)">
        <path
          fillOpacity={0.4}
          d="M1.894 10.161H6.29L4.399 14H0l1.894-3.839zm2.505-5.08h4.398L6.91 8.91h-4.4l1.889-3.83zM6.905.001h4.398l-1.889 3.83H5.018L6.905 0z"
        />
        <path
          fillOpacity={0.6}
          d="M6.277 10.16h4.398L8.78 13.997H4.383l1.894-3.839zm2.506-5.08h4.397l-1.888 3.828H6.894L8.783 5.08zM11.288 0h4.398l-1.889 3.829H9.4L11.288 0z"
        />
        <path d="M10.59 10.16h4.398l-1.893 3.838H8.697l1.894-3.839zm2.506-5.08h4.398l-1.888 3.828h-4.398l1.888-3.828zM15.602 0H20l-1.889 3.829h-4.397L15.602 0z" />
      </g>
    </g>
  </svg>
);

export default SvgEmc2;

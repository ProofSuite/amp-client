import React from 'react';

const SvgPoe = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="poe_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="poe_svg__b" cx={16} cy={15} r={15} />
      <filter id="poe_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="poe_svg__e"
        d="M24.758 6.732A4.283 4.283 0 0 0 21.742 5.5c-1.145 0-2.211.44-3.016 1.232L8.87 16.438a.5.5 0 0 0-.145.382v4.996L6 24.5h1.503l2.018-1.987h5.044a.51.51 0 0 0 .378-.162l9.806-9.658.01-.01A4.162 4.162 0 0 0 26 9.724a4.171 4.171 0 0 0-1.242-2.99zM19.026 7.86l.417-.41a3.253 3.253 0 0 1 2.299-.936c.863 0 1.678.334 2.299.936.01.01.02.028.039.038.591.602.911 1.385.911 2.226 0 .85-.34 1.652-.95 2.264l-.427.42h-3.812l2.503-2.465a.514.514 0 0 0 .019-.716c-.01-.01-.01-.02-.02-.029a.539.539 0 0 0-.746 0l-2.522 2.484V7.859h-.01zM10.55 21.501l2.056-2.026h3.812l-2.056 2.026H10.55zm5.984-5.904l2.435-2.398h3.812l-2.435 2.398h-3.812zm2.978.822l-2.27 2.235H13.43l2.27-2.235h3.811zm-3.753-5.34l2.444-2.408v3.802l-2.444 2.417v-3.81zm-3.104 3.056l2.27-2.235v3.802l-2.27 2.235v-3.802zm-2.91 2.866l2.085-2.044v3.802l-2.085 2.044v-3.802z"
      />
      <filter id="poe_svg__d" width="117.5%" height="118.4%" x="-8.8%" y="-6.6%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#poe_svg__a)" xlinkHref="#poe_svg__b" />
      <use fill="#DCD6CC" xlinkHref="#poe_svg__b" />
      <use
        fill="url(#poe_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#poe_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#poe_svg__d)" xlinkHref="#poe_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#poe_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgPoe;

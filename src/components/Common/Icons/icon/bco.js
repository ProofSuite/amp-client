import React from 'react';

const SvgBco = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="bco_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bco_svg__b" cx={16} cy={15} r={15} />
      <filter id="bco_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="bco_svg__e"
        d="M14.122 19.826l-1.506-.848c-.38.515-.998.85-1.698.85s-1.32-.336-1.699-.853l-.489.277a.856.856 0 0 1 .066.33.887.887 0 0 1-.898.876.887.887 0 0 1-.898-.876c0-.484.402-.877.898-.877.289 0 .545.133.71.34l.48-.272a1.992 1.992 0 0 1-.259-.984c0-1.1.892-1.996 2.008-2.038v-1.554c-1.087-.042-1.954-.915-1.954-1.986 0-.34.088-.662.243-.942l-.51-.284a.904.904 0 0 1-.718.35.887.887 0 0 1-.898-.877c0-.484.402-.876.898-.876s.898.392.898.876c0 .112-.022.22-.061.318l.52.29c.368-.51.976-.842 1.663-.842.702 0 1.32.346 1.686.873l1.533-.849c-.14-.272-.22-.58-.22-.905 0-1.072.858-1.948 1.94-2.01v-.588a.884.884 0 0 1-.775-.869c0-.484.402-.876.898-.876s.898.392.898.876c0 .444-.338.81-.776.869v.588c1.082.062 1.94.938 1.94 2.01 0 .326-.08.635-.221.908l1.53.861a2.047 2.047 0 0 1 1.71-.908c.709 0 1.332.353 1.697.889l.505-.321a.856.856 0 0 1-.059-.314c0-.484.402-.876.898-.876s.898.392.898.876a.887.887 0 0 1-.898.877.904.904 0 0 1-.72-.353l-.5.318c.137.268.215.57.215.891 0 1.091-.9 1.977-2.015 1.987v1.618c1.13.01 2.042.908 2.042 2.013 0 .335-.084.651-.233.93l.514.29a.905.905 0 0 1 .697-.324c.496 0 .898.393.898.877a.887.887 0 0 1-.898.876.887.887 0 0 1-.898-.876.85.85 0 0 1 .074-.349l-.513-.29c-.371.53-.996.879-1.704.879-.701 0-1.32-.342-1.693-.864l-1.534.863c.167.295.262.635.262.996 0 1.087-.86 1.978-1.953 2.06v.384a.883.883 0 0 1 .735.863.887.887 0 0 1-.898.876.887.887 0 0 1-.898-.876c0-.458.358-.833.816-.873v-.37c-1.13-.042-2.034-.95-2.034-2.064 0-.36.093-.697.258-.991zm.13-.203a2.13 2.13 0 0 1 1.728-.872c.71 0 1.34.343 1.724.868l1.536-.865a1.966 1.966 0 0 1-.241-.945c0-1.038.804-1.892 1.838-2.002v-1.64c-1.019-.11-1.811-.952-1.811-1.976 0-.312.073-.608.205-.87l-1.534-.864c-.37.542-1 .899-1.717.899-.718 0-1.35-.358-1.72-.9l-1.53.847c.143.272.224.58.224.908 0 1.044-.824 1.9-1.872 1.98v1.565c1.077.08 1.926.96 1.926 2.033 0 .358-.095.694-.261.987l1.505.847zm-3.334-.766c.605 0 1.095-.478 1.095-1.068 0-.59-.49-1.068-1.095-1.068-.604 0-1.094.478-1.094 1.068 0 .59.49 1.068 1.094 1.068zm0-5.605c.59 0 1.067-.466 1.067-1.04 0-.576-.478-1.042-1.067-1.042s-1.066.466-1.066 1.041.477 1.041 1.066 1.041zm5.062-2.855c.596 0 1.08-.472 1.08-1.054 0-.583-.484-1.055-1.08-1.055-.597 0-1.08.472-1.08 1.055 0 .582.483 1.054 1.08 1.054zm5.081 2.835c.59 0 1.067-.466 1.067-1.04 0-.576-.478-1.042-1.067-1.042s-1.066.466-1.066 1.041.477 1.041 1.066 1.041zm0 5.631c.597 0 1.08-.472 1.08-1.054 0-.583-.483-1.055-1.08-1.055-.596 0-1.08.472-1.08 1.055 0 .582.484 1.054 1.08 1.054zM15.98 21.9c.612 0 1.108-.485 1.108-1.082 0-.598-.496-1.082-1.108-1.082-.613 0-1.109.484-1.109 1.082 0 .597.496 1.082 1.109 1.082zm0-3.98c-1.652 0-2.991-1.307-2.991-2.919s1.339-2.92 2.99-2.92c1.653 0 2.992 1.308 2.992 2.92 0 1.612-1.34 2.92-2.991 2.92zm0-1.775c.647 0 1.172-.512 1.172-1.144 0-.632-.525-1.144-1.172-1.144-.648 0-1.173.512-1.173 1.144 0 .632.525 1.144 1.173 1.144z"
      />
      <filter id="bco_svg__d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#bco_svg__a)" xlinkHref="#bco_svg__b" />
      <use fill="#2C76B7" xlinkHref="#bco_svg__b" />
      <use
        fill="url(#bco_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#bco_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#bco_svg__d)" xlinkHref="#bco_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#bco_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgBco;

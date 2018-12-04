import React from 'react';

const SvgEtn = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="etn_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="etn_svg__b" cx={16} cy={15} r={15} />
      <filter id="etn_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="etn_svg__e"
        d="M19.879 12.469l3.239-3.412a9.225 9.225 0 0 1 2.153 5.938c0 5.117-4.15 9.266-9.271 9.266a9.232 9.232 0 0 1-4.468-1.147l8.238-4.246 1.342-.692-1.243-.859-.888-.614 2.59-1.322 1.288-.658-1.154-.872-1.826-1.382zm-7.758 5.534l-3.02 3.18a9.228 9.228 0 0 1-2.372-6.188c0-5.118 4.15-9.267 9.271-9.267a9.23 9.23 0 0 1 4.906 1.404l-8.676 4.472-1.342.693 1.243.858.888.614-2.59 1.323-1.288.657 1.154.873 1.826 1.381zM8.536 21.78l-.625.658A10.95 10.95 0 0 1 5 14.995C5 8.932 9.935 4 16 4c2.493 0 4.796.834 6.643 2.237l-.902.465A10.04 10.04 0 0 0 16 4.906c-5.565 0-10.093 4.526-10.093 10.089 0 2.61.996 4.991 2.63 6.784zM23.684 8.46l.628-.66A10.944 10.944 0 0 1 27 14.995c0 6.062-4.935 10.994-11 10.994a10.941 10.941 0 0 1-6.253-1.954l.924-.477A10.036 10.036 0 0 0 16 25.083c5.565 0 10.093-4.526 10.093-10.088 0-2.49-.907-4.772-2.409-6.534zM10.842 15.9l3.941-2.013-2.137-1.476 11.83-6.098-5.953 6.268 2.635 1.993-3.941 2.013 2.137 1.476-11.83 6.098 5.953-6.268-2.635-1.993z"
      />
      <filter id="etn_svg__d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#etn_svg__a)" xlinkHref="#etn_svg__b" />
      <use fill="#23BEE2" fillRule="evenodd" xlinkHref="#etn_svg__b" />
      <use
        fill="url(#etn_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#etn_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#etn_svg__d)" xlinkHref="#etn_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#etn_svg__e" />
    </g>
  </svg>
);

export default SvgEtn;

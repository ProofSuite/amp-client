import React from 'react';

const SvgTix = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="tix_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="tix_svg__b" cx={16} cy={15} r={15} />
      <filter id="tix_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="tix_svg__e"
        d="M6 10.386c0-.213.173-.386.387-.386h5.024c2.318 0 3.768 1.196 3.768 2.885 0 .705-.322 1.346-.966 1.923.901.513 1.352 1.282 1.352 2.307C15.565 19.52 13.246 20 11.7 20H6.386A.386.386 0 0 1 6 19.614v-1.15c0-.214.173-.387.386-.387H11.7c1.095 0 1.643-.353 1.643-1.058 0-.705-.548-1.09-1.643-1.154H6.386A.386.386 0 0 1 6 15.48v-1.15c0-.214.173-.387.386-.387H11.7c.773-.128 1.16-.448 1.16-.961 0-.705-.387-1.058-1.16-1.058H6.386A.386.386 0 0 1 6 11.537v-1.15zm10.435 0c0-.213.173-.386.386-.386h5.121c.213 0 .387.173.387.386v9.228a.386.386 0 0 1-.387.386h-1.45a.386.386 0 0 1-.386-.386V12.31a.386.386 0 0 0-.386-.387h-2.9a.386.386 0 0 1-.386-.386v-1.15zM23.68 10h1.933c.213 0 .386.173.386.386v1.15a.386.386 0 0 1-.386.387H23.68a.386.386 0 0 1-.386-.386v-1.15c0-.214.173-.387.386-.387z"
      />
      <filter id="tix_svg__d" width="117.5%" height="135%" x="-8.8%" y="-12.5%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#tix_svg__a)" xlinkHref="#tix_svg__b" />
        <use fill="#EF494D" fillRule="evenodd" xlinkHref="#tix_svg__b" />
        <use
          fill="url(#tix_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#tix_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#tix_svg__d)" xlinkHref="#tix_svg__e" />
      <use fill="#FFF" xlinkHref="#tix_svg__e" />
    </g>
  </svg>
);

export default SvgTix;

import React from 'react';

const SvgAst = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="ast_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ast_svg__b" cx={16} cy={15} r={15} />
      <filter id="ast_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ast_svg__e"
        d="M16.01 5L26 15.14l-.375.34a7.99 7.99 0 0 1-.532.46c-.326.261-.67.521-1.016.752a14.275 14.275 0 0 1-4.596 2.042c-1.136.28-2.302.42-3.471.42-1.48 0-2.95-.22-4.36-.67a14.27 14.27 0 0 1-4.033-2.013 17.925 17.925 0 0 1-1.232-.99L6 15.14l1.095-1.112L16.01 5zm8.738 10.47c.147-.12.295-.24.424-.37L16 5.81 6.829 15.1l.187.16c.306.25.611.5.927.72a13.747 13.747 0 0 0 8.067 2.583 13.962 13.962 0 0 0 3.343-.41 13.826 13.826 0 0 0 4.418-1.962c.338-.222.664-.463.977-.72zm-15.03-.48a15.263 15.263 0 0 1 6.134-1.321c2.486 0 4.931.66 7.071 1.922l.139.08-.139.09a12.883 12.883 0 0 1-4.645 1.832l-.039.01-.03-.02a15.887 15.887 0 0 0-8.393-2.403h-.542l.444-.19zm8.639 2.002c1.253-.24 2.446-.67 3.55-1.291a13.312 13.312 0 0 0-6.065-1.452c-1.27 0-2.533.17-3.757.51 2.22.3 4.354 1.06 6.272 2.233zm3.304 1.972a23.88 23.88 0 0 1-1.42 1.752L16.01 25l-2.978-3.013.63-.04a13.766 13.766 0 0 0 5.987-1.792c.552-.27 2.012-1.191 2.012-1.191zm-7.347 3.504l1.696 1.721 2.998-3.043a14.252 14.252 0 0 1-4.694 1.322z"
      />
      <filter id="ast_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ast_svg__a)" xlinkHref="#ast_svg__b" />
      <use fill="#0061FF" xlinkHref="#ast_svg__b" />
      <use
        fill="url(#ast_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ast_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#ast_svg__d)" xlinkHref="#ast_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#ast_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgAst;

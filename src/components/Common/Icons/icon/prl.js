import React from 'react';

const SvgPrl = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="prl_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="prl_svg__b" cx={16} cy={15} r={15} />
      <filter id="prl_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="prl_svg__e"
        d="M24.281 19.867c.084.861-.185 1.711-1.018 2.263-.399.265-.844.37-1.322.37-3.96-.002-7.92-.001-11.88-.002a4.83 4.83 0 0 1-.26-.007c-.868-.047-1.688-.676-1.968-1.497-.124-.363-.143-.735-.128-1.127h2.41c.232-.001.386-.17.334-.381a.5.5 0 0 0-.139-.213c-.983-.982-1.969-1.96-2.954-2.94l-.902-.898c-.339-.335-.502-.74-.442-1.212.03-.232.105-.46.18-.684a10.102 10.102 0 0 1 1.967-3.45 10.268 10.268 0 0 1 4.682-3.095 9.951 9.951 0 0 1 3.672-.477c2.936.176 5.381 1.37 7.319 3.571a9.861 9.861 0 0 1 2.11 3.909c.15.539.008 1.024-.391 1.421-.75.748-1.506 1.49-2.259 2.235-.553.547-1.105 1.096-1.657 1.645-.182.18-.164.42.044.527.06.03.135.04.203.04.76.003 1.521.002 2.282.002h.117zm-15.839.54c.011.322.097.608.285.858.312.416.733.612 1.255.611H22.01c.047 0 .094-.002.14-.005a1.441 1.441 0 0 0 1.123-.61c.186-.25.273-.536.278-.853H8.442zM18.71 12.66c.029.019.05.03.067.043.988.736 1.614 1.7 1.852 2.907.13.656.112 1.31-.042 1.961a4.656 4.656 0 0 1-.75 1.643.355.355 0 0 0-.068.302c.069.272.378.36.582.161.3-.291.593-.588.89-.882 1.196-1.19 2.392-2.379 3.589-3.567.26-.258.374-.566.31-.926-.029-.156-.085-.308-.138-.458a10.9 10.9 0 0 0-1.689-3.125 9.118 9.118 0 0 0-1.97-1.884.187.187 0 0 1-.074-.114.682.682 0 0 0-.944-.558.176.176 0 0 1-.127.001 9.119 9.119 0 0 0-3.36-.868 10.598 10.598 0 0 0-2.77.156 8.928 8.928 0 0 0-2.202.726.177.177 0 0 1-.175 0 .666.666 0 0 0-.96.578c0 .06-.022.095-.068.131-.306.243-.624.474-.91.739-1.344 1.245-2.258 2.764-2.845 4.487-.148.436-.05.81.275 1.133l3.56 3.539c.298.297.595.594.896.889.173.17.434.14.547-.061.077-.139.058-.276-.033-.404a4.614 4.614 0 0 1-.852-2.253 4.574 4.574 0 0 1 .23-1.979c.05-.145.112-.287.171-.437l1.412.83a3.113 3.113 0 0 0 1.382 3.92 3.127 3.127 0 0 0 3.902-.738c.46-.547.704-1.182.718-1.897.02-1.066-.421-1.916-1.25-2.578l.844-1.417zm4.665 3.04c-.026-.166-.05-.319-.076-.472a7 7 0 0 0-.492-1.64c-.025-.06-.031-.106-.001-.168a.664.664 0 0 0-.369-.907.677.677 0 0 0-.879.412.66.66 0 0 0 .452.852.27.27 0 0 1 .206.181c.304.745.473 1.517.497 2.32a.196.196 0 0 1-.044.132c-.457.46-.918.916-1.377 1.373-.016.015-.035.027-.042.034.438-2.17-.095-4.051-1.838-5.467-1.811-1.47-3.829-1.583-5.948-.627l-.647-1.117c.231-.103.453-.21.68-.304a6.826 6.826 0 0 1 1.825-.45c.081-.009.14.004.203.068a.66.66 0 0 0 .952-.005.19.19 0 0 1 .174-.064c1.533.166 2.863.768 3.985 1.821.09.085.175.174.262.262.155.156.326.16.484.008l1.051-1.017.098-.093c.126.16.253.314.371.474a10.312 10.312 0 0 1 1.55 3.05.345.345 0 0 1-.091.375l-.924.919c-.016.015-.035.027-.062.05zm-1.266-5.31l-.898.869c-.027-.023-.052-.044-.075-.066a7.321 7.321 0 0 0-3.353-1.84c-.353-.086-.718-.126-1.077-.184-.063-.01-.106-.023-.145-.083a.678.678 0 0 0-1.134.002.195.195 0 0 1-.124.076c-2.314.254-4.13 1.338-5.46 3.232a.182.182 0 0 1-.136.083c-.466.076-.703.53-.51.96a.164.164 0 0 1 0 .12 7.282 7.282 0 0 0-.555 2.003c-.006.043-.015.085-.025.144l-.086-.08c-.286-.285-.57-.573-.86-.854-.134-.13-.178-.268-.115-.45.673-1.93 1.743-3.582 3.41-4.815.019-.014.039-.026.057-.041.06-.053.115-.068.204-.044a.67.67 0 0 0 .839-.524.153.153 0 0 1 .071-.094 7.835 7.835 0 0 1 1.346-.516c1.095-.311 2.213-.392 3.343-.311a8.348 8.348 0 0 1 3.005.768c.06.028.09.06.1.13a.67.67 0 0 0 .92.524c.032-.012.083-.013.108.004.409.282.785.602 1.132.955.007.007.01.017.018.032zm-3.664 6.18c.007 1.331-1.09 2.428-2.436 2.436a2.449 2.449 0 0 1-2.456-2.428c-.006-1.333 1.089-2.427 2.438-2.434a2.44 2.44 0 0 1 2.454 2.425zm-7.698 1.264l-.632-.635c-.26-.26-.522-.516-.78-.778a.196.196 0 0 1-.056-.127 6.603 6.603 0 0 1 .528-2.403.142.142 0 0 1 .113-.095c.449-.105.658-.497.499-.925-.01-.03-.01-.075.005-.1a6.626 6.626 0 0 1 1.856-1.83c.003-.002.006-.002.02-.006l.265.452.556.96c.112.196.258.239.451.122a4.561 4.561 0 0 1 1.646-.604 4.71 4.71 0 0 1 2.935.453c.009.005.016.012.034.026l-.839 1.407c-1.585-.595-2.895-.24-3.953 1.077l-1.407-.827c.126-.169.246-.332.369-.492.05-.066.108-.126.164-.188.086-.096.086-.15-.002-.24a22.432 22.432 0 0 0-.234-.234c-.106-.104-.158-.104-.258.004a5.304 5.304 0 0 0-1.012 1.561 5.258 5.258 0 0 0-.398 2.56c.026.28.083.557.13.862zm5.248-8.01a.384.384 0 0 1-.376-.377.387.387 0 0 1 .38-.374.384.384 0 0 1 .375.378.382.382 0 0 1-.379.374zm-4.6-1.414a.373.373 0 0 1 .383.368.378.378 0 0 1-.756 0 .372.372 0 0 1 .373-.368zm10.801 5.1a.372.372 0 0 1-.007-.743.37.37 0 1 1 .007.743zm-1.603-5.1c.213 0 .375.16.374.372a.371.371 0 0 1-.369.37.374.374 0 0 1-.38-.37.368.368 0 0 1 .375-.373zm-10.418 4.728a.37.37 0 0 1-.376.372.368.368 0 0 1-.373-.375.37.37 0 0 1 .371-.368.371.371 0 0 1 .378.371z"
      />
      <filter id="prl_svg__d" width="117.5%" height="121.9%" x="-8.8%" y="-7.8%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#prl_svg__a)" xlinkHref="#prl_svg__b" />
      <use fill="#1061E3" xlinkHref="#prl_svg__b" />
      <use
        fill="url(#prl_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#prl_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#prl_svg__d)" xlinkHref="#prl_svg__e" />
      <use fill="#FFF" xlinkHref="#prl_svg__e" />
    </g>
  </svg>
);

export default SvgPrl;

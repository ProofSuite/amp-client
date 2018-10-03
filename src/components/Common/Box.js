// import styled from 'styled-components';
// import { space, width, margin, padding } from 'styled-system';

// const Box = styled.div`
//   ${space}
//   ${width}
//   ${margin}
//   ${padding}
// `;

// export default Box;

import system from 'system-components';

const Box = system(
  // core
  'space',
  'width',
  'color',
  'fontSize',
  // borders
  'borders',
  'borderColor',
  'borderRadius',
  // layout
  'display',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  // flexbox
  'alignItems',
  'alignContent',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex',
  'flexBasis',
  'justifySelf',
  'alignSelf',
  'order',
  // position
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
);

export default Box

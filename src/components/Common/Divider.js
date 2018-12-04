//@flow
import { Box } from './Box';

const heights = {
  small: 0.1,
  large: 0.3,
};

const Divider = Box.withComponent('hr').extend`
  height: ${props => heights[props.height]}em;
  border: 0;
`;

Divider.displayName = 'Divider';

Divider.defaultProps = {
  height: '2px',
  mx: 0,
};

export default Divider;

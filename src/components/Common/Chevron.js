import styled from 'styled-components';
import { Icon } from '@blueprintjs/core';

const Chevron = styled(Icon).attrs({
  icon: props => (props.direction === `asc` ? `chevron-up` : `chevron-down`),
})``;

export default Chevron;

//@flow
import styled from 'styled-components';
import Colors from './Colors';

export default styled.p`
  color: ${props => (props.intent ? Colors[props.intent] : Colors.TEXT)};
`;

export const LargeText = styled.h3`
  color: ${props => (props.intent ? Colors[props.intent] : Colors.HEADING)} !important;
`;

export const EmphasizedText = styled.p`
  color: ${Colors.LINK};
`;

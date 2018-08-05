//@flow
import styled from 'styled-components';
import Colors from './Colors';

export default styled.span`
  color: ${props => (props.intent ? Colors[props.intent] : props.muted ? Colors.TEXT_MUTED : Colors.TEXT)}
  margin: auto;
  )}
`;

export const LargeText = styled.h3`
  color: ${props => (props.intent ? Colors[props.intent] : Colors.HEADING)} !important;
`;

export const EmphasizedText = styled.span`
  color: ${Colors.LINK};
`;

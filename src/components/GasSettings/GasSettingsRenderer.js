import React from 'react';
import { Button, Collapse, InputGroup } from '@blueprintjs/core';

import styled from 'styled-components';

type Props = {
  visible: boolean,
  gas: string,
  gasPrice: string,
  toggleVisible: (SyntheticEvent<>) => void,
  handleChange: (SyntheticInputEvent<>) => void,
};

const GasSettingsRenderer = (props: Props) => {
  const { visible, gas, gasPrice, handleChange, toggleVisible } = props;
  return (
    <div>
      <Button minimal text="Show Gas Settings" onClick={toggleVisible} />
      <Collapse isOpen={visible}>
        <InputGroupBox>
          <InputGroup placeholder="Gas" value={gas || ''} onChange={handleChange} />
        </InputGroupBox>
        <InputGroupBox>
          <InputGroup placeholder="Gas Price" value={gasPrice || ''} onChange={handleChange} />
        </InputGroupBox>
      </Collapse>
    </div>
  );
};

const InputGroupBox = styled.div`
  width: 200px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export default GasSettingsRenderer;

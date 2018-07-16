import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { tokens } from '../../data';
import ModalBox from '../ModalBox';
import DepositModal from './DepositModal';

import '../../styles/reset.css';

storiesOf('Deposit Modal', module)
  .addDecorator(withKnobs)
  .add(
    'Waiting Step',
    withInfo({ source: false })(() => (
      <ModalBox>
        {({ handleClose, isOpen }) => (
          <DepositModal
            handleClose={handleClose}
            isOpen={isOpen}
            step="waiting"
            balance={1.54}
            address="0xc73eec564e96e6653943d6d0e32121d455917653"
            tokens={tokens}
            token={tokens[0]}
          />
        )}
      </ModalBox>
    ))
  )
  .add(
    'Convert Step',
    withInfo({ source: false })(() => (
      <ModalBox>
        {({ handleClose, isOpen }) => (
          <DepositModal
            handleClose={handleClose}
            isOpen={isOpen}
            step="convert"
            balance={1.54}
            address="0xc73eec564e96e6653943d6d0e32121d455917653"
            tokens={tokens}
            token={tokens[0]}
          />
        )}
      </ModalBox>
    ))
  );

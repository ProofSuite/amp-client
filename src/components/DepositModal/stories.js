import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { tokens } from '../../data';
import ModalBox from '../ModalBox';
import DepositModal from './DepositModal';

storiesOf('Deposit Modal', module)
  .addDecorator(withKnobs)
  .add(
    'Waiting Step',
    withInfo({ source: false })(() => (
      <ModalBox>{({ handleClose, isOpen }) => <DepositModal handleClose={handleClose} isOpen={isOpen} />}</ModalBox>
    ))
  )
  .add(
    'Convert Step',
    withInfo({ source: false })(() => (
      <ModalBox>
        {({ handleClose, isOpen }) => <DepositModal handleClose={handleClose} isOpen={isOpen} step="convert" />}
      </ModalBox>
    ))
  );

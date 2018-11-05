import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import ModalBox from '../ModalBox';
import TransferTokensModal from './TransferTokensModal';

storiesOf('Send Ether Modal', module)
  .addDecorator(withKnobs)
  .add(
    'Default Export',
    withInfo({ source: false })(() => (
      <ModalBox>{({ handleClose, isOpen }) => <TransferTokensModal handleClose={handleClose} isOpen={isOpen} />}</ModalBox>
    ))
  );

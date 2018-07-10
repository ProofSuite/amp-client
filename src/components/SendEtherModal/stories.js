import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import ModalBox from '../ModalBox';
import SendEtherModal from './SendEtherModal';

import '../../styles/reset.css';

storiesOf('Send Ether Modal', module)
  .addDecorator(withKnobs)
  .add(
    'Default Export',
    withInfo({ source: false })(() => (
      <ModalBox>{({ handleClose, isOpen }) => <SendEtherModal handleClose={handleClose} isOpen={isOpen} />}</ModalBox>
    ))
  );

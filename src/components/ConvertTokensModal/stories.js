import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import ModalBox from '../ModalBox';
import ConvertTokensModal from './ConvertTokensModal';

storiesOf('Convert Tokens Modal', module)
  .addDecorator(withKnobs)
  .add(
    'Convert step',
    withInfo({ source: false })(() => (
      <ModalBox>{({ handleClose, isOpen }) => {
      return (
      <ConvertTokensModal
        handleClose={handleClose}
        isOpen={isOpen}
        fromToken="ETH"
        toToken="WETH"
      />
      )
      }}
      </ModalBox>
    ))
  )
  .add(
    'Confirm step',
    withInfo({ source: false })(() => (
      <ModalBox>{({ handleClose, isOpen }) => {
      return (
      <ConvertTokensModal
        handleClose={handleClose}
        isOpen={isOpen}
        fromToken="WETH"
        toToken="ETH"
      />
      )
      }}
      </ModalBox>
    ))
  )

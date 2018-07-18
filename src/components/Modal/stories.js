// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import ModalStory from './ModalStory';

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('Default Export', withInfo({ source: false })(() => <ModalStory title="Modal Title" icon="info-sign" />));

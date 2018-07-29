import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Intent } from '@blueprintjs/core';
import Text, { EmphasizedText, LargeText } from './Text';
import Heading from './Heading';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('Primary', withInfo({ source: false })(() => <Text intent={Intent.PRIMARY}>Hello</Text>))
  .add('Success', withInfo({ source: false })(() => <Text intent={Intent.SUCCESS}>Hello</Text>))
  .add('Emphasized', withInfo({ source: false })(() => <EmphasizedText>Hello</EmphasizedText>))
  .add('Large Text', withInfo({ source: false })(() => <LargeText intent="primary">Hello</LargeText>))
  .add('Heading', withInfo({ source: false })(() => <Heading h="1">Hello</Heading>));

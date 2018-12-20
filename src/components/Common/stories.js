import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Intent } from '@blueprintjs/core';
import Text, { EmphasizedText, LargeText } from './Text';
import CloseableCallout from './CloseableCallout'

import Heading from './Heading';
import Loading from './Loading';
import Footer from './Footer';
import Divider from './Divider';
import CryptoIconPair from './CryptoIconPair'
import ColoredCryptoIcon from './ColoredCryptoIcon'

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('Footer', withInfo({ source: false })(() => <Footer />))
  .add('Primary', withInfo({ source: false })(() => <Text intent={Intent.PRIMARY}>Hello</Text>))
  .add('Success', withInfo({ source: false })(() => <Text intent={Intent.SUCCESS}>Hello</Text>))
  .add('Emphasized', withInfo({ source: false })(() => <EmphasizedText>Hello</EmphasizedText>))
  .add('Large Text', withInfo({ source: false })(() => <LargeText intent="primary">Hello</LargeText>))
  .add('Heading', withInfo({ source: false })(() => <Heading h="1">Hello</Heading>))
  .add('Loading', withInfo({ source: false })(() => <Loading />));

storiesOf('Callout', module)
  .addDecorator(withKnobs)
  .add('CloseableCallout', withInfo({ source: false })(() => <CloseableCallout title='Callout title' message='Hey I am Tai' intent='success' />))
  .add('CloseableCallout-Danger', withInfo({ source: false })(() => <CloseableCallout title='Callout title' message='Hey I am Tai' intent='danger' />))
  .add('CloseableCallout-NoTitle', withInfo({ source: false })(() => <CloseableCallout message='adflka;sjdf asdlfkjasdfl;k asdfkla;sdjf sadl;fkajsdfl;asdkj asdfkla;sdjfasdf asdfka;sjdf asdkfaj;sdl asdfasld;kfja asdfasdf;lkj asdfasdfsdf asdkfj;asdf' intent='danger' icon={null} />))

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add('CryptoIcon', withInfo({ source: false })(() => <ColoredCryptoIcon name="BAT" size={40}/>))
  .add('CryptoIconPair', withInfo({ source: false })(() => <CryptoIconPair baseToken="BAT" quoteToken="WETH" size={40}/>))


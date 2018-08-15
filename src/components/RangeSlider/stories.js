import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import StandardRangeSlider from './index';

storiesOf('Range Slider', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withInfo({
      source: false,
    })(() => (
      <div className="bp3-dark bp3-card stories" style={{ height: '75px' }}>
        <StandardRangeSlider />
      </div>
    ))
  );

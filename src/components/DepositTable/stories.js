import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import DepositTableRenderer from './DepositTableRenderer';
import { Card } from '@blueprintjs/core';

import { mockDepositTableData } from '../../mockData';

storiesOf('Deposit Table', module)
  .addDecorator(withKnobs)
  .add(
    'Default Export',
    withInfo({ source: false })(() => (
      <Card className="pt-dark">
        <DepositTableRenderer depositData={mockDepositTableData} />
      </Card>
    ))
  );

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import OrdersTableContainer from './index';
import OrdersTable from './OrdersTable';
import README from './README.md';

// let

// import * as asdfasdfasdf from '../../jsons/orderHistory.json';

// storiesOf('OrdersTable', module)
//   .addDecorator(withKnobs)
//   .add(
//     'Connected Order History Container',
//     withInfo({
//       text: README,
//       propTablesExclude: [OrdersTableContainer],
//       source: false,
//     })(() => (
//       <div className="pt-dark">
//         <OrdersTableContainer />
//       </div>
//     ))
//   )
//   .add(
//     'Order History',
//     withInfo({ text: README, source: false })(() => (
//       <div class="pt-dark">
//         <OrdersTable />
//       </div>
//     ))
// );

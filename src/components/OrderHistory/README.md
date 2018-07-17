```js
import OrderHistoryRenderer from '../../components/OrderHistoryRenderer';
```

#### Properties
* `orderHistory` - List of Orders
* `loggedIn` - LoggedIn state
* `loading` - Loading state of trade list
* `decimals` - Number of figures to show after decimal point

#### Example
```js
<OrderHistoryRenderer
  orderHistory={orderHistory}
  userOrderHistory={userOrderHistory}
  authenticated={true}
  loading={false}
  decimals={7}
/>
```
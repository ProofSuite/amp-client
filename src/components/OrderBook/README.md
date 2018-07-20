```js
import OrderBook from '../../components/OrderBook';
```

#### Properties
* `quoteToken` - Quote Token/Coin/currenct
* `baseToken` - Base Token/Coin/currenct
* `sellOrderList` - List of Sell orders
* `buyOrderList` - List of Buy orders
* `loading` - Loading state of orders List
* `decimals` - Number of figures to show after decimal point

#### Example
```js
<OrderBook
  buyOrderList={buyOrderList}
  sellOrderList={sellOrderList}
  baseToken="ETH"
  quoteToken="USDT"
  loading={false}
  decimals={5}
/>
```
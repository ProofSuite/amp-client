```js
import TradeHistory from '../../components/TradeHistory';
```

#### Properties
* `tradeHistory` - List of Trades
* `loggedIn` - LoggedIn state
* `loading` - Loading state of trade list
* `decimals` - Number of figures to show after decimal point

#### Example
```js
<TradeHistory
  tradeHistory={tradeHistory}
  loggedIn={true}
  loading={false}
  decimals={7}
/>
```
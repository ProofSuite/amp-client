```js
import OrderForm from '../../components/OrderFormRenderer';
```

#### Properties
* `askPrice` - Current Ask Price of quote token
* `bidPrice` - Current Bid price of quote token
* `quoteToken` - Quote token/coin/currency (ETH/BTC) => ETH
* `baseToken` - Base token/coin/currency (ETH/BTC) => BTC
* `totalQuoteBalance` - Total Balance of quote
* `totalBaseBalance` - Total Balance of base
* `formName` - Name of Form Sell/Buy
* `loggedIn` - Logged In state of user

#### Example
```js
<OrderForm
    askPrice={0.25}
    bidPrice={0.29}
    totalQuoteBalance={1000}
    totalBaseBalance={10}
    formName="Sell"
    quoteToken="ETH"
    baseToken="BTC"
    loggedIn={false}
/>
```
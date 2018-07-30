```js
import TokenSearcher from '../../components/TokenSearcher';
```

#### Properties
* `coinsList` - List of Coins/Tokens
* `loading` - Loading state of coinsList
* `small` - Bool check for Smaller CoinSearcher Component
* `decimals` - Number of figures to show after Decimal Point

#### Example
```js
<TokenSearcher
  coinsList={coinsList.list}
  loading={false}
  small={true}
  decimals={5}
/>
```
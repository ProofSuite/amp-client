```js
import NetworkSelect from '../../components/NetworkSelect';
```

#### Properties
* `networks` - Array of networks to be displayed
* `handleChange` - Change callback handler
* `networkId` - Currently selected network item by network ID

#### Example
```js
<NetworkSelect
  networks={networks}
  networkId={1}
  handleChange={onChange}
/>
```
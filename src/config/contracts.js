import { Exchange, WETH } from 'proof-contracts-interfaces';

export const EXCHANGE_ADDRESS = {
  '8888': Exchange.networks[8888].address,
  '1': Exchange.networks[1].address,
  '2': Exchange.networks[2].address,
  '3': Exchange.networks[3].address,
  '4': Exchange.networks[4].address,
};

export const WETH_ADDRESS = {
  '8888': WETH.network[8888].address,
  '1': WETH.networks[1].address,
  '2': WETH.networks[2].address,
  '3': WETH.networks[3].address,
  '4': WETH.networks[4].address,
};

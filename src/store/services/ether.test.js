import { providers, utils } from 'ethers';
import * as ether from './ether';

jest.mock('ethers');

describe('subscribeBalance(address, callback)', () => {
  let on;
  let removeListener;

  beforeEach(() => {
    on = jest.fn();
    removeListener = jest.fn();
    providers.getDefaultProvider.mockReturnValue({ on, removeListener });
    utils.formatEther.mockReturnValue('test formatEther');
  });

  it('loads the ropsten provider', () => {
    const address = 'test address';
    const callback = jest.fn();

    ether.subscribeBalance(address, callback);

    expect(providers.getDefaultProvider).toBeCalledWith('ropsten');
  });

  it('subscribe to the provided address, unsubscribes it when calling the return function', () => {
    const address = 'test address';
    const callback = jest.fn();
    const unsubscribe = ether.subscribeBalance(address, callback);

    expect(on).toHaveBeenCalledTimes(1);
    expect(on.mock.calls[0][0]).toEqual(address);

    unsubscribe();
    expect(removeListener).toHaveBeenCalledTimes(1);
    expect(removeListener.mock.calls[0][0]).toEqual(address);
    expect(removeListener.mock.calls[0]).toEqual(on.mock.calls[0]);
  });

  it('formats the balance with utils.formatEther before trigger the callback', () => {
    const address = 'test address';
    const callback = jest.fn();

    ether.subscribeBalance(address, callback);

    on.mock.calls[0][1]('test balance');

    expect(callback).toBeCalledWith('test formatEther');
    expect(utils.formatEther).toBeCalledWith('test balance');
  });
});

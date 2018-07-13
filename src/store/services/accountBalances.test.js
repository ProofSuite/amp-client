import { utils } from 'ethers';
import * as providerService from './provider';
import * as accountBalancesService from './accountBalances';

jest.mock('ethers');
jest.mock('./provider');

describe('subscribeEtherBalance(address, callback', () => {
  let on;
  let removeListener;
  let providerMock;

  beforeEach(() => {
    on = jest.fn();
    removeListener = jest.fn();
    providerMock = { on, removeListener };
    providerService.getProvider.mockImplementation(() => ({ provider: providerMock }));
    utils.formatEther.mockReturnValue(1000);
  });

  it('loads the current provider', async () => {
    const address = 'test address';
    const callback = jest.fn();

    await accountBalancesService.subscribeEtherBalance(address, callback);
    expect(providerService.getProvider).toHaveBeenCalledTimes(1);
  });

  it('subscribe to the provided address, unsubscribes it when calling the return function', async () => {
    const address = 'test address';
    const callback = jest.fn();
    const unsubscribe = await accountBalancesService.subscribeEtherBalance(address, callback);

    expect(on).toHaveBeenCalledTimes(1);
    expect(on.mock.calls[0][0]).toEqual(address);

    unsubscribe();
    expect(removeListener).toHaveBeenCalledTimes(1);
    expect(removeListener.mock.calls[0][0]).toEqual(address);
    expect(removeListener.mock.calls[0]).toEqual(on.mock.calls[0]);
  });

  it('formats the balance with utils.formatEther before triggering the callback', async () => {
    utils.formatEther.mockReturnValue('test formatEther');
    const address = 'test address';
    const callback = jest.fn();

    await accountBalancesService.subscribeEtherBalance(address, callback);

    on.mock.calls[0][1]('test balance');

    expect(callback).toBeCalledWith('test formatEther');
    expect(utils.formatEther).toBeCalledWith('test balance');
  });
});

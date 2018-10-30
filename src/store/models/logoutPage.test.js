import createStore from '../../store/configureStore';
import logoutPageSelector from './logoutPage';
import * as actionCreators from './logoutPage';

let unsubscribe = jest.fn();
let selector;



describe('Logout Page Model', () => {
  it('handles logout', () => {
    const { store } = createStore({
      account: {
        address: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47',
      },
    });

    selector = logoutPageSelector(store.getState());
    expect(selector.authenticated).toEqual(true);

    store.dispatch(actionCreators.logout());

    selector = logoutPageSelector(store.getState());
    expect(selector.authenticated).toEqual(false);
  });
});

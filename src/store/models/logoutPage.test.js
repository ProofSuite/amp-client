import createStore from '../../store/configureStore';
import logoutPageSelector, * as actionCreators from './logoutPage';

let unsubscribe = jest.fn();
let model;

describe('Logout Page Model', () => {
  it('handles logout', () => {
    const { store } = createStore({
      account: {
        address: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47',
      },
    });

    model = logoutPageSelector(store.getState());
    expect(model.authenticated).toEqual(true);

    store.dispatch(actionCreators.logout());

    model = logoutPageSelector(store.getState());
    expect(model.authenticated).toEqual(false);
  });
});

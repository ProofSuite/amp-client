// @flow
import OrderFormModel from '../domains/orderForm';
import type { State, ThunkAction } from '../../types';

export default function getOrderFormModel(state: State) {
  return OrderFormModel(state.orderForm);
}

export const defaultFunction = (): ThunkAction => {
  return async (dispatch, getState) => {};
};

export const handleLimit = (): ThunkAction => {
  return async (dispatch, getState) => {
    // console.log(getState)
  };
};

export const handleStopLimit = (): ThunkAction => {
  return async (dispatch, getState) => {
    // console.log(getState)
  };
};

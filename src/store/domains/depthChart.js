// @flow
import type Props from '../../types/depthChart';

const initialState: Props = {
  data: [{}],
  title: '',
};

export const initialized = () => {
  const event = (state: Props = initialState) => state;
  return event;
};

export const saveData = (data: Props) => {
  const event = (state: Props) => ({
    ...state,
    data: data.data,
    title: data.title,
  });
  return event;
};

export default function model(state: Props) {
  return {
    getState: () => state,
  };
}

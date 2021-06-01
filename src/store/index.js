import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  const { type, payload } = action;
  if (type === 'increment') {
    return {
      counter: state.counter + payload,
    };
  }
  if (type === 'decrement') {
    return {
      counter: state.counter - payload,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;

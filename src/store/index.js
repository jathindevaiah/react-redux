import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === 'increment') {
    return {
      counter: state.counter + payload,
      showCounter: state.showCounter,
    };
  }
  if (type === 'decrement') {
    return {
      counter: state.counter - payload,
      showCounter: state.showCounter,
    };
  }
  if (type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;

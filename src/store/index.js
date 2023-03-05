import { createStore } from 'vuex';

const store = createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    reset(state) {
      state.counter = 0;
    },
    setValue(state, value) {
      state.counter = value;
    },
  },
});

export default store;

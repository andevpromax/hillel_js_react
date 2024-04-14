const { store } = require('./store/store');
const {
  incrementAction,
  decrementAction,
  setAction,
  setActionWithValue,
  setActionFlagChange,
} = require('./store/actions');

console.log('Initial store: ', store.getState());

store.dispatch(incrementAction);
console.log('incrementAction: ', store.getState());

store.dispatch(decrementAction);
console.log('decrementAction: ', store.getState());

store.dispatch(setAction);
console.log('setAction: ', store.getState());

store.dispatch(setActionWithValue);
console.log('setActionWithValue: ', store.getState());

store.dispatch(setActionFlagChange);
console.log('setActionFlagChange: ', store.getState());

store.dispatch(setActionFlagChange);
console.log('setActionFlagChange: ', store.getState());

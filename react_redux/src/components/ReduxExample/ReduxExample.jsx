import React from 'react';
import Switcher from './Switcher';
import List from './List';
import { Provider } from 'react-redux';

import store from './../../store/store';

export default function ReduxExample() {
  return (
    <Provider store={store}>
      <Switcher />
      <List />
    </Provider>
  );
}

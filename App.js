import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Store';

import MainStack from './src/Navigators/MainStack';

export default () => (
  <Provider store={store}>
    <MainStack />
  </Provider>
);

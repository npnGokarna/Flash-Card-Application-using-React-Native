import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const app = () => {
return (
  <Provider store={createStore}>
  <View>

  </View>
  </Provider>
);
};


export default app;

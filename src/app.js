import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const app = () => {
  return (
    <Provider store={createStore(reducers)}>
    <View>
    <Header headerText="Flash Card" />

    

    </View>
    </Provider>
  );
};


export default app;

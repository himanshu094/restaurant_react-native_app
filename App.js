import React from 'react';
import {
  View,Text, Dimensions
} from 'react-native';

import Login from './screens/Login';
import RootNavigation from './rootnavigation/RootNavigation';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './storage/RootReducer';

const {width,height}=Dimensions.get('screen')
const store=createStore(RootReducer)

function App() {
 
  return (
    <Provider store={store}>
      <RootNavigation/> 
    </Provider>
  );
}

export default App;

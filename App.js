import React from 'react';
import {
  View,Text, Dimensions
} from 'react-native';

import Login from './screens/Login';
import RootNavigation from './rootnavigation/RootNavigation';
const {width,height}=Dimensions.get('screen')

function App() {
 
  return (
    <>
      <RootNavigation/> 
    </>
  );
}

export default App;

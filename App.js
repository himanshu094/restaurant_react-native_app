import React from 'react';
import {
  View,Text, Dimensions
} from 'react-native';

import Login from './screens/Login';

const {width,height}=Dimensions.get('screen')

function App() {
 
  return (
    <View >
      <Login/> 
    </View>
  );
}



export default App;

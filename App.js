/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,Text, Dimensions
} from 'react-native';
import TextBox from './components/TextBox';

const {width,height}=Dimensions.get('screen')

function App() {

 
  return (
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',width:width,height:height,backgroundColor:'#fff'}}>
        <TextBox w={0.8} message="Your Name.." type='phone-pad' />
    </View>
  );
}



export default App;

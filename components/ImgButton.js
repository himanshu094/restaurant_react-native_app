import { View,StyleSheet,Dimensions,Image,TouchableOpacity } from "react-native";
var {width}=Dimensions.get('screen')

import React, { useState } from 'react'

export default function ImgButton({w, h = 50,...props}) {

  const styles = StyleSheet.create({
    buttonBorder: {
                    flexDirection: 'row', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    alignSelf: "center", 
                    marginVertical: 0, 
                    width: width * w, 
                    height: h, 
                    borderWidth: 1, 
                    borderRadius: 12, 
                    borderColor: '#95a5a6',
                  },
});

  const countryObj={
    1:{name:'India',code:'+91',path:require('../assets/india1.png')},
    2:{name:'China',code:'+82',path:require('../assets/china.png')},
    3:{name:'usa',code:'+1',path:require('../assets/usa.png')},
  }

  const [keyNo,setKeyNo]=useState(1);
  const [selectedCountry,setSelectedCountry]=useState(countryObj[keyNo]);

  props.setCode(countryObj[keyNo].code)

  const handleCountryChange=()=>{
      if(keyNo<=2){
        var n=keyNo+1;
        setKeyNo(prevState => (prevState+1));
      } else {
        setKeyNo(prevState => (prevState-2))
      }
     
    setSelectedCountry(countryObj[keyNo])
    props.setCode(selectedCountry['code'])  
  }

  return (
    <View>
      <View style={styles.buttonBorder}>
        <TouchableOpacity onPress={handleCountryChange} >
          <Image source={selectedCountry['path']}/>
        </TouchableOpacity>
      </View>
    </View>
  )

}

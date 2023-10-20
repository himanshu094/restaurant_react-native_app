import {useState} from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity} from 'react-native';
import EI from "react-native-vector-icons/EvilIcons"
 
const {width, height} = Dimensions.get('screen');

export default function Button({w, message,bg,onPress=()=>{}}) {
  const [color,setColor]=useState(false)
  return (
        <TouchableOpacity onPress={onPress} style={{justifyContent:'center',alignItems:'center',width:width*w,marginVertical:1, height:45,paddingHorizontal:5,borderRadius:7,backgroundColor:bg}}>

            <Text style={{color:'#fff',fontSize:17}}>{message}</Text>

        </TouchableOpacity>  
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})  
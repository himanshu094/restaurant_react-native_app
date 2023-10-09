import {TextInput, View, StyleSheet, Dimensions, Text} from 'react-native';
import EI from "react-native-vector-icons/EvilIcons"

const {width, height} = Dimensions.get('screen');

export default function TextBox({w, message, type = 'default',error='invalid name'}) {
  return (
    <View style={{marginVertical:4}}>
        <View style={{flexDirection:'row',alignItems:'center',width:width*w, height:45,paddingHorizontal:5,borderWidth:0.5,borderRadius:5,borderColor:error?'red':'#2980b9'}}>
            <EI name='location' size={18}/>
            <TextInput placeholder={message} keyboardType={type} />
        </View>
        <Text style={{color:'red',marginLeft:5}}>{error?error:''}</Text>
    </View>
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
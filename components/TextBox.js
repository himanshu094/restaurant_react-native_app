import {useState} from 'react'
import {TextInput, View, StyleSheet, Dimensions, Text} from 'react-native';
import EI from "react-native-vector-icons/EvilIcons"
 
const {width, height} = Dimensions.get('screen');

export default function TextBox({password=false,w, message, type = 'default',error='',h=52,icon,...props}) {
  const [color,setColor]=useState(false);

  const styles = StyleSheet.create({
    input:{
            fontSize:h*0.40,
            padding: 0,
          },
    boxBorder:{
                width:width*w,
                paddingHorizontal:15,
                borderWidth:0.8,
                height:h,
                flexDirection:'row',
                alignItems:'center',
                borderColor:error?'red':color?'#4834d4':'#95a5a6',
                gap:10
             
              },
    countryCode:{
                 // fontWeight:'bold',
                  color:'#000',
                  fontSize:h*0.4
    }          
  })  

  return (
    <View style={{marginVertical:2}}>
        <View style={[styles.boxBorder,{borderRadius:7,}]}>

            {icon!=''?
            <EI name={icon} size={18}/>:
            <Text style={styles.countryCode} >{props.code}</Text>
            }

            <TextInput secureTextEntry={password} onBlur={()=>setColor(false)} onFocus={()=>setColor(true)} placeholder={message} keyboardType={type} style={styles.input} />

        </View>
        {error?
        <Text style={{color:'red',marginLeft:5}}>{error?error:''}</Text>:<></>}
    </View>
  )
}


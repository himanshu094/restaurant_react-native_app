import React, { useState } from 'react'
import {
  View,Text, Dimensions,Image,StyleSheet
} from 'react-native';
import TextBox from '../components/TextBox';
import ImgButton from '../components/ImgButton';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const {width,height}=Dimensions.get('screen')

function Login() {

  const styles=StyleSheet.create({
    image:{
      height:height*0.40,
      width:width*1,
      
    },
    imageView:{
      position:'relative'
    },
    text:{
     // color:'#090909',
      color:'#555',
      textShadowColor: '#fff',
      textShadowOffset: {width: -5, height: 3},
      textShadowRadius: 15,
      position:'absolute',
      fontSize:60,
      left:width*0.26,
      top:height*0.14,
      fontWeight:'bold'
    },
    heading:{
      color:'#090909',
      fontWeight:'bold',
      fontSize:28,
      textAlign:'center',
      width:width,
      margin:0,
      padding:0
    },
    headingView:{
      marginVertical:17
    },
    lineView:{
      width:width,
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center',
      gap:8,
      marginVertical:17
    },
    line:{
      width:width*0.25,
      borderBottomWidth:0.6,
      borderColor:'#aaa'
    },
    lineText:{
      color:'#000',
      fontWeight:'bolder'
    },
    inputView:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      width:width,
      gap:5
    },
    ButttonView:{
      justifyContent:'center',
      marginTop:10,
      width:width,
      alignItems:'center'
    }
  })

  const [code, setCode] = useState('+91')
  const navigation=useNavigation()

  return (
    <View >
      <View style={styles.imageView}>
        <Image style={styles.image} source={require('../assets/food1.jpeg')} />
        <Text style={styles.text}>Foodie</Text>
      </View>

      <View style={styles.headingView}>
        <Text style={styles.heading}>
          India's #1 Food Delivery
        </Text>  
        <Text style={styles.heading}>  
          and Dining App
        </Text>
      </View>

      <View style={styles.lineView}>
        <View style={styles.line}></View>
        <Text style={styles.lineText}>Log in or sign up</Text>
        <View style={styles.line}></View>
      </View>

      <View style={styles.inputView}>
        <ImgButton w='0.17' setCode={setCode} />
        <TextBox w='0.7' h={45} message='Enter Phone Number' icon="" code={code} />
      </View>

      <View style={styles.ButttonView}>
        <Button w='0.9' bg={'#71c0c8'} message={'Continue'} onPress={()=>navigation.navigate('otp')}/>
      </View>

      <View style={styles.lineView}>
        <View style={[styles.line,{width:width*0.38,}]}></View>
        <Text style={styles.lineText}>or</Text>
        <View style={[styles.line,{width:width*0.38,}]}></View>
      </View>

    </View>
  );
}

export default Login;



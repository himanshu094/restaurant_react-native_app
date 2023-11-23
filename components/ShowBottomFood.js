import { View ,Text,StyleSheet,Dimensions,Image,FlatList,TouchableOpacity} from "react-native";
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native';
import { serverURL } from "../services/FetchNodeServices";
import { useDispatch } from "react-redux";

const {width,height}=Dimensions.get('screen');


export default function ShowBottomFood({refresh,setRefresh,item}) {

  const styles=StyleSheet.create({  
    listView:{
      flexDirection:'column',
      paddingBottom:10,
      
    },
    textView:{
      width:width*0.5,
      margin:5,
      flexDirection:'column' 
    },
    circleView:{
      flexDirection:'column',
      margin:4
    },
    text:{
      color:'#181818',
      fontWeight:'500'
    },
    headingText:{marginVertical:10,
                 width:width,
                 justifyContent:'center',
                 alignItems:'center'},
    title:{
      fontSize:18,
      fontWeight:'bold',
      color:'#121212',
      marginVertical:5
    }, 
    price:{
      fontSize:15,
      color:'#121212',
      fontWeight:'500'
    },
    ratingText:{
      fontSize:14,
      color:'green',

    },
    ingrediants:{
      fontSize:13,
      color:'#666',
    },
    imageView:{
      justifyContent:'center'
    },
    
  })

  const navigation=useNavigation();
  const dispatch=useDispatch()

  const handleSetOrder=(food)=>{
    dispatch({type:'ADD_ORDER',payload:[item.fooditemid,item]});
    setRefresh(!refresh)
   // navigation.navigate('login')
  }
  
   
      return(
        <TouchableOpacity style={styles.listView}
         >

          <View style={styles.imageView}>
            <Image source={{uri:`${serverURL}/images/${item.icon}`}} style={{resizeMode:'cover',width:width*0.90,height:height*0.18,borderRadius:10}} /> 
          </View>

          <View style={{flexDirection:'row',marginVertical:5,marginLeft:5}}>

            <View style={[styles.textView]}>
              <Image source={{uri:`${serverURL}/images/${item.foodtype}.png`}} style={{resizeMode:'contain',width:20,height:20}} />
              <Text style={styles.title}>{item.fooditemname}</Text>

              <View style={{flexDirection:'row',marginVertical:5}}>
                <Text style={styles.price}>&#8377;{item.price} </Text>
                <Text style={[styles.price,{marginLeft:8}]}>&#8377;{item.offerprice}</Text>
              </View>

              <View style={{flexDirection:'row',marginVertical:5,alignItems:'center'}}>
                <Image source={{uri:`${serverURL}/images/star.png`}} style={{resizeMode:'contain',width:13,height:13}} />
                <Text style={styles.ratingText}> {4.5} </Text>
                <Text style={[styles.ratingText,{color:'#555'}]}>({255})</Text>
              </View>

            </View>
            
            <View style={{width:width*0.4,marginTop:40}}>
                <Button w={0.4} bg={'red'} message={'Add'} onPress={()=>handleSetOrder(item)} />
            </View>
          </View>

        </TouchableOpacity>
      )
    
}

import { View ,Text,StyleSheet,Dimensions,Image,FlatList,TouchableOpacity} from "react-native";
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native';
import { serverURL } from "../services/FetchNodeServices";
import { useDispatch,useSelector } from "react-redux";

const {width,height}=Dimensions.get('screen');


export default function FloatingCart() {

  const styles=StyleSheet.create({  
    listView:{
      flexDirection:'column',
      paddingBottom:10,
      
    },

    price:{
      fontSize:15,
      color:'#fff',
      fontWeight:'500'
    },
    total:{
      fontSize:16,color:'#fff',fontWeight:'bold'
    }

    
  })

  const navigation=useNavigation();
  const cart = useSelector(state=>state.orderData)
  const keys=Object.keys(cart)
  const foods=Object.values(cart)
  const total=foods.reduce(getTotal,0)
  function getTotal(sum,food){
    const total=sum+food.offerprice
    return total
  }

  const handleSetOrder=()=>{
    navigation.navigate('cart')
  }
  
   
      return(<>{keys.length>0?
        <TouchableOpacity onPress={handleSetOrder}>

          <View style={{flexDirection:'row',marginVertical:5,height:height*0.07,width:width*0.9,padding:20,backgroundColor:'#009432',borderRadius:10,alignItems:'center',justifyContent:'space-between'}}>

            <Text style={styles.total}>{keys.length} Items | &#8377;{total}</Text>
            <Text style={[styles.price,{marginLeft:8}]}>View Cart</Text>

          </View>

        </TouchableOpacity>:<></>}
      </>)
}

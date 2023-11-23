import { View ,Text,StyleSheet,Dimensions,Image,FlatList,TouchableOpacity} from "react-native";
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native';
import { serverURL } from "../services/FetchNodeServices";


const {width,height}=Dimensions.get('screen');


export default function FoodList({foodsList,refRBSheet,setSelectedFood}){

  const styles=StyleSheet.create({  
    listView:{
      flexDirection:'row',
      borderBlockColor:'#777',
      borderTopWidth:0.45,
      padding:5
    },
    textView:{
      width:width*0.53,
      margin:5,
      flexDirection:'column' 
    },
    circleView:{
      flexDirection:'column',
      margin:4,
      marginTop:15,
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
       width:width*0.43,
      
    }
  })

  const navigation=useNavigation();
 
  // const foodsList=[
  //   {id:1,foodtype:'Veg',fooditemname:'Veg Biryani',price:200,offerprice:180,ratings:4,likes:123,icon:'vegpulao.jpg',ingrediants:'Rice, Seasional Vegitables, Biryani Masala, salt, oil, spices, curd, sugar, dry fruits'},
  //   {id:2,foodtype:'Veg',fooditemname:'Malai Kofta',price:300,offerprice:260,ratings:4.8,likes:523,icon:'malaikofta.jpg',ingrediants:'paneer, Seasional Vegitables,  Masala'}
  //   ]

  const showFoodList=({item})=>{

      const handleClick=(food)=>{
        setSelectedFood(food)
        refRBSheet.current.open()
      }
   
      return(
        <TouchableOpacity style={styles.listView}
         onPress={()=>handleClick(item)}
         >

          <View style={[styles.textView,{backgroundColor:'#fff'}]}>
            <Image source={{uri:`${serverURL}/images/${item.foodtype}.png`}} style={{resizeMode:'contain',width:20,height:20}} />
            <Text style={styles.title}>{item.fooditemname}</Text>

            <View style={{flexDirection:'row',marginVertical:5}}>
              <Text style={[styles.price,{textDecorationLine:'line-through'}]}>&#8377;{item.price} </Text>
              <Text style={[styles.price,{marginLeft:8}]}>&#8377;{item.offerprice}</Text>
            </View>

            <View style={{flexDirection:'row',marginVertical:5,alignItems:'center'}}>
              <Image source={{uri:`${serverURL}/images/star.png`}} style={{resizeMode:'contain',width:13,height:13}} />
              <Text style={styles.ratingText}> {4.5} </Text>
              <Text style={[styles.ratingText,{color:'#555'}]}>({255})</Text>
            </View>

            <Text numberOfLines={2} style={styles.ingrediants}>{item.ingredients}</Text>
          </View>
          
          <View style={styles.imageView}>
            <Image source={{uri:`${serverURL}/images/${item.icon}`}} style={{resizeMode:'cover',width:width*0.40,height:height*0.18,borderRadius:10}} /> 
          </View>

        </TouchableOpacity>
      )
    
  }

  return (
    <View style={styles.circleView}>

      {/* <View style={styles.headingText}>
        <Text style={{letterSpacing:2,fontWeight:400}}>WHAT'S ON YOUR MIND?</Text>
      </View> */}

      <FlatList data={foodsList}
       renderItem={showFoodList}
       keyExtractor={item => item.fooditemid}
       
      />

    </View>  
  )
}

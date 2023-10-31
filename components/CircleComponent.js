import { View ,Text,StyleSheet,Dimensions,Image,FlatList} from "react-native";
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native'

const {width,height}=Dimensions.get('screen');


export default function CircleComponent(props) {

  const colorList=['#130f40','#38c4b7','#8e44ad','#d35400','#f1c40f','#16a085'];

  const styles=StyleSheet.create({  
    listView:{
      justifyContent:'center',
      alignItems:'center'
    },
    imageView:{
      justifyContent:'center',
      marginTop:10,
      width:80,
      height:60,
      alignItems:'center',
      borderRadius:40,
      margin:5 
    },
    circleView:{
      flexDirection:'column',
      margin:4
    },
    text:{
      color:'#181818',
      fontWeight:'400'
    },
    headingText:{marginVertical:10,
                 width:width,
                 justifyContent:'center',
                 alignItems:'center'}
  })

  const navigation=useNavigation();
 
  const foodList=[{id:1,name:'Poha',image:'burgur.png'},{id:2,name:'Samosa',image:'burgur.png'},{id:3,name:'Kachori',image:'burgur.png'},{id:4,name:'Pizza',image:'burgur.png'},{id:4,name:'Jalebi',image:'burgur.png'},{id:5,name:'Dhokla',image:'burgur.png'},{id:6,name:'Burgar',image:'burgur.png'}]

  const showFoodList=(foodData)=>{
   
      return(
        <View style={styles.listView}>
          <View style={[styles.imageView,{backgroundColor:'#fff'}]}>
            <Image source={require(`../assets/cb.png`)} style={{resizeMode:'contain',width:100,height:100}} />
          </View>
          <Text style={styles.text}>{foodData.item.name}</Text>
        </View>
      )
    
  }

  return (
    <View style={styles.circleView}>

      <View style={styles.headingText}>
        <Text style={{letterSpacing:2,fontWeight:400}}>WHAT'S ON YOUR MIND?</Text>
      </View>

      <FlatList data={foodList}
       renderItem={showFoodList}
       keyExtractor={item => item.id}
       horizontal={true}
       scrollEnabled
       showsHorizontalScrollIndicator={false}
      />

    </View>  
  )
}

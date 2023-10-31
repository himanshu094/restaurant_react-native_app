import { View ,Text,StyleSheet,Dimensions} from "react-native";
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native';
import CircleComponent from "../components/CircleComponent";
import FoodList from "../components/FoodList";

const {width,height}=Dimensions.get('screen');


export default function Home(props) {

  const styles=StyleSheet.create({
    
    butttonView:{
      justifyContent:'center',
      marginTop:10,
      width:width,
      alignItems:'center'
    }
  })

  const navigation=useNavigation()

  return (
    <View  style={{backgroundColor:'#fff',height:height}}>
     <CircleComponent/>
     <FoodList/>
    </View>
  )
}

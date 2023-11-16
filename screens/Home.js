import { View ,Text,StyleSheet,Dimensions} from "react-native";
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native';
import CircleComponent from "../components/CircleComponent";
import FoodList from "../components/FoodList";
import BottomSheet from 'react-native-simple-bottom-sheet';
import { useRef, useState } from "react";
import ShowBottomFood from "../components/ShowBottomFood";

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
  const panelRef=useRef(null)
  const [selectedFood,setSelectedFood]=useState({})

  return (
    <View  style={{backgroundColor:'#fff',height:height,flex:1}}>
      <CircleComponent/>

      <View style={{width:width,justifyContent:'center'}}>
        <FoodList panelRef={panelRef} setSelectedFood={setSelectedFood} selectedFood={selectedFood} />
      </View>

      <BottomSheet ref={ref=>panelRef.current=ref}>
        <ShowBottomFood item={selectedFood} />
      </BottomSheet>

    </View>
  )
}

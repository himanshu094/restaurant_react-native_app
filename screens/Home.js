import { View ,Text,StyleSheet,Dimensions} from "react-native";
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native';
import CircleComponent from "../components/CircleComponent";
import FoodList from "../components/FoodList";
import BottomSheet from 'react-native-simple-bottom-sheet';
import { useRef, useState,useEffect } from "react";
import ShowBottomFood from "../components/ShowBottomFood";
import RBSheet from "react-native-raw-bottom-sheet";
import { postData,getData } from "../services/FetchNodeServices";
import FloatingCart from "../components/FloatingCart";

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
  const refRBSheet=useRef()
  const [selectedFood,setSelectedFood]=useState({})
  const [categories,setCategories]=useState([])
  const [foodItems,setFoodItems]=useState([])
  const [refresh,setRefresh]=useState(false)

  const fetchAllCategory=async()=>{
    const result=await postData('category/fetch_all_category',{restaurantid:1})
    setCategories(result.data)
  }

  const fetchAllFood=async()=>{
    const result=await postData('fooditem/fetch_all_fooditem',{restaurantid:1})
    setFoodItems(result.data)
  }

  useEffect(function(){
    fetchAllCategory()
    fetchAllFood()
  },[])

  return (
    <View  style={{backgroundColor:'#fff',height:height,flex:1,position:'relative'}}>

      <View style={{width:width,justifyContent:'center',alignItems:'center',position:'absolute',zIndex:3,bottom:10}}>
        <FloatingCart />
      </View>

      <CircleComponent listFood={categories}/>

      <View style={{width:width,justifyContent:'center'}}>
        <FoodList refRBSheet={refRBSheet} setSelectedFood={setSelectedFood} selectedFood={selectedFood} foodsList={foodItems}  />
      </View>

      <RBSheet 
        ref={refRBSheet}
        height={350}
        openDuration={250}
        customStyles={{
          container:{
            borderTopLeftRadius:25,
            borderTopRightRadius:25
          }
        }}>
        <ShowBottomFood item={selectedFood} refresh={refresh} setRefresh={setRefresh} />
      </RBSheet>

    </View>
  )
}

import { NavigationContainer } from "@react-navigation/native";
import {View,Image,Text} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import Login from "../screens/Login";
import Otp from "../screens/OTP";
import Home from "../screens/Home";
import ProductList from "../screens/ProductList";
import AppHeader from "../components/AppHeader";

var Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function RootNavigation(props){

  const ProjectDrawer=()=>{
    return(
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={props=><CustomDrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={Home}
         options={{headerShown:false,
          drawerIcon:()=><MCI name={"home-city"}
          size={24}/>,
         }} />  

      </Drawer.Navigator>
    )
  }

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{display:'flex',padding:20,alignItems:'center',flexDirection:'column'}}>
            <Image  style={{marginBottom:5,borderRadius:50,resizeMode:'contain',width:100,height:100}}
            source={require('../assets/alice.jpg')}/>
            <Text style={{fontWeight:'bold'}}>{'Alice Kumari'}</Text> 
            <Text>+91 9301123085</Text> 
            <Text style={{fontSize:12}}>{'ss@gmail.com'}</Text>
        </View>

        <DrawerItemList {...props}/>
          <DrawerItem
            label="My Profile"
            onPress={()=>props.navigation.navigate('MyProfile')}
            icon={()=><MCI name={"account-box"} size={24}  />}
          />
          <DrawerItem
            label="Settings"
            icon={()=><MCI name={"account-settings"} size={24} />}
          />

          <DrawerItem label="Logout"  icon={()=><MCI name={"logout"} size={24} />} />
        
      </DrawerContentScrollView>
    );
  };


  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home1"}>
        <Stack.Screen name="Home1"  component={ProjectDrawer} options={{header:AppHeader}}   />
        <Stack.Screen component={Login} name={"login"} options={{headerShown:false}} />
        <Stack.Screen component={Otp} name={"otp"} options={{headerShown:false}} />
        <Stack.Screen component={ProductList} name={"productlist"} options={{headerShown:true}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
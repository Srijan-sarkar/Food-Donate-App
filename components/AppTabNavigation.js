import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RequestPickupScreen from '../screens/RequestPickupScreen';
import PickUpScreen from '../screens/PickUpScreen';



export const AppTabNavigator = createBottomTabNavigator({
  RequestPickup : {
    screen: RequestPickupScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/snack-icon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Food",
    }
  },
  Pickup: {
    screen: PickUpScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/snack-icon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Pickup Food",
    }
  }
});

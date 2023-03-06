import React from "react";
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from "./src/screens/first_page";
import DetailScreen from "./src/screens/detail_page";
import LoginView from "./src/screens/textfields_demo";

const Stack = createNativeStackNavigator();

// const MyApp = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="FirstScreen">
//         <Stack.Screen name="FirstScreen" component={FirstScreen}></Stack.Screen>
//         <Stack.Screen name="DetailScreen" component={DetailScreen}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

const MyApp = () => {
  return (
    <LoginView/>
  )
}

export default MyApp;
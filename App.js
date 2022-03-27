import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Home from './screens/Home'
import Trending from './screens/Trending'
import Latest from './screens/Latest'
import Profile from './screens/Profile'
import { useState } from 'react';
import Player from './screens/Player';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {




  const HomeStackScreens = ()=>{
    return(
      <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <HomeStack.Screen name='Player' component={Player} options={{headerShown: false}} />
      </HomeStack.Navigator>
      )
  }


  return (
    <NavigationContainer >
      
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeStackScreens} />
          <Tab.Screen name='Trending' component={Trending} />
          <Tab.Screen name='Latest' component={Latest} />
          <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Lab1 from './Lab1.js'
import Lab2 from './Lab2.js'


export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  //console.log(Lab1);
  //<Tab.Screen name="Lab two" component={Lab2} />
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lab 1" component={Lab1} />
        <Tab.Screen name="Lab 2" component={Lab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


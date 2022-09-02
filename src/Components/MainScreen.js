import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, Pressable } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import AccountScreen from "./AccountScreen";
import ProfileScreen from "./ProfileScreen";
import MyCart from "./MyCart";
import OfferScreen from "./OfferScreen";
import ExploreScreen from "./ExploreScreen";
import HomeScreen from "./HomeScreen";
import CategoryScreen from './CategoryScreen';

import {COLOURS} from '../../data/database'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const MainScreen = (props) => {
  const { navigation, route } = props;
  const {user} = route.params
  console.log("Dong 24 MainScrene",  route.params)
  return (

    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          backgroundColor: COLOURS.black,
          elevation: 0,
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
            initialParams={user}
        component={HomeScreen}
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
            // <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
            initialParams={user}
        component={HomeScreen}
        name="Explore"
        options={{
          tabBarIcon: ({ color, size }) => (

            <MaterialIcons name="local-mall" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
            initialParams={user}
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLOURS.white,
                borderColor: COLOURS.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -10,
                elevation: 5,
              }}>
              <MaterialIcons name="search" color={COLOURS.primary} size={24} />
            </View>
          ),
        }}
      />
      <Tab.Screen
            initialParams={user}
        component={MyCart}
        name="Cart"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
      initialParams={user}
        component={AccountScreen}
        name="Account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
            // <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>

  )
}

export default MainScreen;
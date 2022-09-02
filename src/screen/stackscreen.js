import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AccountScreen from "../Components/AccountScreen";
import ProfileScreen from "../Components/ProfileScreen";
import CartScreen from "../Components/CartScreen";
import OfferScreen from "../Components/OfferScreen";
import ExploreScreen from "../Components/ExploreScreen";
import GenderScreen from "../Components/GenderScreen";
import BirthdayScreen from "../Components/BirthdayScreen";
import EmailScreen from "../Components/EmailScreen";
import PhoneScreen from "../Components/PhoneScreen";
import ChangePasswordScreen from "../Components/ChangePasswordScreen";
import ChangeNameScreen from "../Components/ChangeNameScreen";
import OrderScreen from '../Components/OrderScreen';
import OrderDetailScreen from '../Components/OrderDetailScreen';
import AddressScreen from '../Components/AddressScreen';
import AddressAddScreen from '../Components/AddressAddScreen';
import AddressEditScreen from '../Components/AddressEditScreen';
import DetailsScreen from '../Components/DetailsScreen';

const stackscreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
               
           
        </Stack.Navigator>
    );
  }

  export default stackscreen;
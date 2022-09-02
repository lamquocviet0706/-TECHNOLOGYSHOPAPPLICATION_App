import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import AccountScreen from "./src/Components/AccountScreen";
import ProfileScreen from "./src/Components/ProfileScreen";
import MyCart from "./src/Components/MyCart";
import MainScreen from "./src/Components/MainScreen";
import OfferScreen from "./src/Components/OfferScreen";
import ExploreScreen from "./src/Components/ExploreScreen";
import GenderScreen from "./src/Components/GenderScreen";
import BirthdayScreen from "./src/Components/BirthdayScreen";
import EmailScreen from "./src/Components/EmailScreen";
import PhoneScreen from "./src/Components/PhoneScreen";
import ChangePasswordScreen from "./src/Components/ChangePasswordScreen";
import ChangeNameScreen from "./src/Components/ChangeNameScreen";
import OrderScreen from './src/Components/OrderScreen';
import OrderDetailScreen from './src/Components/OrderDetailScreen';
import AddressScreen from './src/Components/AddressScreen';
import AddressAddScreen from './src/Components/AddressAddScreen';
import AddressEditScreen from './src/Components/AddressEditScreen';
import DetailsScreen from './src/Components/DetailsScreen';
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import WellcomeScreen from './src/screen/WellcomeScreen';
import CategoryScreen from './src/Components/CategoryScreen';


LogBox.ignoreAllLogs()

export default function App() {
  return (
 
       <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen 
        options={{ headerShown: false }} 
        name='WellcomeSceen'  
        component={WellcomeScreen} 
        />
        <Stack.Screen options={{ headerShown: false }} name='LoginScreen' component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          component={MainScreen}
          name="MainScreen"

        />
        <Stack.Screen
          // options={{ headerShown: false }}
          component={ProfileScreen}
          name="ProfileScreen"
          options={{
            title: 'Profile',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}
        />


        <Stack.Screen
          options={{ headerShown: false }}
          component={AccountScreen}
          name="AccountScreen"

        />
        <Stack.Screen
          // options={{ headerShown: false }}
          component={GenderScreen}
          name="GenderScreen"
          options={{
            title: 'Gender',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}

        />
        <Stack.Screen
          // options={{ headerShown: false }}
          component={BirthdayScreen}
          name="BirthdayScreen"
          options={{
            title: 'Birthday',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}

        />
        <Stack.Screen
          // options={{ headerShown: false }}
          component={EmailScreen}
          name="EmailScreen"
          options={{
            title: 'Email',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}

        />
        <Stack.Screen
          // options={{ headerShown: false }}
          component={PhoneScreen}
          name="PhoneScreen"
          options={{
            title: 'Phone Number',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}

        />
        <Stack.Screen
          // options={{ headerShown: false }}
          component={ChangePasswordScreen}
          name="ChangePasswordScreen"
          options={{
            title: 'Change Password',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}

        />

        <Stack.Screen
          // options={{ headerShown: false }}
          component={CategoryScreen}
          name="CategoryScreen"
          options={{
            title: 'CategoryScreen',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}

        />
        <Stack.Screen
          // options={{ headerShown: false }}
          component={ChangeNameScreen}
          name="ChangeNameScreen"
          options={{
            title: 'Change Name',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}

        />

        <Stack.Screen
          // options={{ headerShown: false }}
          component={AddressScreen}
          name="AddressScreen"
          options={{
            title: 'Address',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}
        />

        <Stack.Screen
          // options={{ headerShown: false }}
          component={AddressAddScreen}
          name="AddressAddScreen"
          options={{
            title: 'Add Address',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}
        />

        <Stack.Screen
          // options={{ headerShown: false }}
          component={AddressEditScreen}
          name="AddressEditScreen"
          options={{
            title: 'Edit Address',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}
        />

        <Stack.Screen
          // options={{ headerShown: false }}
          component={OrderScreen}
          name="OrderScreen"
          options={{
            title: 'Order History',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          component={OrderDetailScreen}
          name="OrderDetailScreen"
          options={{
            title: 'Order Details',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}
        />
        <Stack.Screen
          component={DetailsScreen}
          name="DetailsScreen"
          options={{
            title: 'Details',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'darkblue',
          }}
        />
        {/* OrderDetailScreen */}


      </Stack.Navigator>
      {/* <StatusBar hidden /> */}
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//show hình trên order web,làm profile order,fetch data search,
//chỉnh sửa phần thêm sản phẩm hk tích được available webadmin
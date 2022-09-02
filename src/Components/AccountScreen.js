import React from 'react'
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, Pressable } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLOURS } from '../../data/database';
import MaterialCommunityIcons from '@expo/vector-icons';
// import CustomHeader from "./CustomHeader";

const AccountScreen = (props) => {
  const { navigation,route } = props;
  const user = route.params
  console.log("dong 10",user)

  //  const data = [
  //   {
  //     id: '1',
  //     name: 'Profile',
  //     image:require("../../assets/User.png"),
  //   },
  //   {
  //     id: '2',
  //     name: 'Order',
  //     image:require("../../assets/bag.png"),
  //   },
  //   {
  //     id: '3',
  //     name: 'Address',
  //     image:require("../../assets/Location.png"),
  //   },
  //    {
  //     id: '4',
  //     name: 'Payment',
  //     image:require("../../assets/CreditCard.png"),
  //   },
  // ];  

  // const Item = ({ name,image }) => (

  //   <TouchableOpacity style={styles.cardview}>
  //     <Image source={image} style={styles.img}/>    
  //     <Text style={styles.textlist}>{name}</Text>

  //   </TouchableOpacity>
  // );

  // const renderItem = ({ item }) => (
  //      <Item image={item.image} name={item.name} />


  //   );
  const onProfile = () => {
    navigation.navigate('ProfileScreen',user)
  }
  const onOrder = () => {
    navigation.navigate('OrderScreen',user)
  }
  const onAddress = () => {
    navigation.navigate('AddressScreen')
  }
  
  return (

    <View style={styles.container}>

      <TouchableOpacity style={styles.cardview}
        onPress={onProfile}
      >
        <Image
          style={styles.img}
          source={require("../../assets/login_icon.png")} />
        <Text style={styles.textlist}>Thông Tin Cá Nhân</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardview}
        onPress={onOrder}
      >
        <Image
          style={styles.img}
          source={require("../../assets/cart_icon.png")} />
        <Text style={styles.textlist}>Lịch Sử Mua Hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardview}
        onPress={onAddress}
      >
        <Image
          style={styles.img}
          source={require("../../assets/location_icon.png")} />
        <Text style={styles.textlist}>Địa Chỉ </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>navigation.replace("LoginScreen")} style={styles.cardview}>
        <Image
          style={styles.img}
          source={require("../../assets/logout_icon.png")} />
        <Text style={styles.textlist}>Đăng Xuất</Text>
      </TouchableOpacity>
    
    </View>
  )
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    backgroundColor: 'white',
  },
  cardview: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',

  },
  img: {
    width: 26,
    height: 26,
    marginRight: 30,
    resizeMode: 'cover',
    

  },
  textlist: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  br: {
    height: 1,
    backgroundColor: 'gray'
  },



});
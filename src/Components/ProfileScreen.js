import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, Pressable, } from "react-native";

import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLOURS } from '../../data/database';

const IconSize = 24;
const Colors = 'black';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardViewAvatarW = windowWidth;
const CardViewAvatarH = windowWidth * 0.25;

const ProfileScreen = (props) => {
  const { navigation,route } = props;
  const user = route.params
  console.log("dong 22 ",user)
  const logg = () => {
    console.log("dsadas");
  };
  const onGender = () => {
    navigation.navigate('GenderScreen')
  };

  const onBirthday = () => {
    navigation.navigate('BirthdayScreen')
  };
  const onEmail = () => {
    navigation.navigate('EmailScreen')
  };
  const onPhone = () => {
    navigation.navigate('PhoneScreen')
  };
  const onChangePassword = () => {
    navigation.navigate('ChangePasswordScreen')
  };
  const onChangeName = () => {
    navigation.navigate('ChangeNameScreen')
  };
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.cardviewAvatar}>

        <TouchableOpacity style={styles.avatar}
          onPress={logg}>
          <Image style={styles.avatarImage} source={require("../../assets/avarta.jpg")} />
        </TouchableOpacity>
        <View style={styles.textAvatar}>
          <Text style={styles.avatarName1}>{user.username}</Text>
          
        </View>
        <MaterialIcons onPress={onChangeName} style={styles.iconsNR} name="edit" size={26} color="#4D5656" />
      </View>
      {/* ss */}
      <TouchableOpacity style={styles.cardview}
        onPress={onGender}
      >
        <View style={styles.startView}>
          <MaterialCommunityIcons style={styles.icons} name="gender-female" size={32} color="#20B3F0" />
          <Text style={styles.textlist}>Giới Tính</Text>
        </View>
        <View style={styles.endView}>
          <Text style={styles.textlistR}>Nam</Text>
          <MaterialIcons style={styles.iconsR} name="navigate-next" size={32} color="#4D5656" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardview}
        onPress={onBirthday}
      >
        <View style={styles.startView}>
          <MaterialCommunityIcons style={styles.icons} name="calendar" size={32} color="#20B3F0" />
          <Text style={styles.textlist}>Ngày Sinh</Text>
        </View>
        <View style={styles.endView}>
          <Text style={styles.textlistR}>07-06-2001</Text>
          <MaterialIcons style={styles.iconsR} name="navigate-next" size={32} color="#4D5656" />
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.cardview}
        onPress={onEmail}
      >
        <View style={styles.startView}>
          <MaterialCommunityIcons style={styles.icons} name="email-outline" size={32} color="#20B3F0" />
          <Text style={styles.textlist}>Email</Text>
        </View>
        <View style={styles.endView}>
          <Text style={styles.textlistR}>Lamviet914@gmail.com</Text>
          <MaterialIcons style={styles.iconsR} name="navigate-next" size={32} color="#4D5656" />
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.cardview}
        onPress={onPhone}
      >
        <View style={styles.startView}>
          <MaterialCommunityIcons style={styles.icons} name="card-account-phone-outline" size={32} color="#20B3F0" />
          <Text style={styles.textlist}>Số Điện Thoại</Text>
        </View>
        <View style={styles.endView}>
          <Text style={styles.textlistR}>0865706323</Text>
          <MaterialIcons style={styles.iconsR} name="navigate-next" size={32} color="#4D5656" />
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.cardview}
        onPress={onChangePassword}
      >
        <View style={styles.startView}>
          <MaterialCommunityIcons style={styles.icons} name="lock-reset" size={32} color="#20B3F0" />
          <Text style={styles.textlist}>Đổi Mật Khẩu</Text>
        </View>
        <View style={styles.endView}>
          <Text style={styles.textlistR}>**********</Text>
          <MaterialIcons style={styles.iconsR} name="navigate-next" size={32} color="#4D5656" />
        </View>

      </TouchableOpacity>

    </View>

  )
}

export default ProfileScreen
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',

  },
  cardviewAvatar: {
    flexDirection: 'row',
    width: CardViewAvatarW,
    height: CardViewAvatarH,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomColor: '#D5DBDB',
    borderBottomWidth: 1,
  },
  avatar: {
    marginHorizontal: 18,

    

  },
  avatarImage: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.2,
    resizeMode: 'cover',
    borderRadius: 50,
    
  },
  textAvatar: {
    flexDirection: 'column',
    // borderWidth:2,
    marginRight: 80,
  },
  avatarName1: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 19,
    color: 'black'
  },
  avatarName2: {
    fontSize: 14,
    color: '#4D5656',
  },
  // cardview
  cardview: {
    flexDirection: 'row',

    // borderWidth: 1,
    // padding: 22,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    display: 'flex',

  },
  img: {
    width: 26,
    height: 26,
    marginRight: 20,
    resizeMode: 'cover',

  },
  textlist: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  textlistR: {
    fontSize: 16,
    color: 'gray'
  },
  icons: {
    // borderWidth:1,
    marginRight: 15,
  },
  iconsR: {
    marginLeft: 15,
  },

  startView: {

    flexDirection: 'row',
    // borderWidth:1,
    alignItems: 'center',
  },
  endView: {

    flexDirection: 'row',
    // borderWidth:1,
    alignItems: 'center',
  },

})
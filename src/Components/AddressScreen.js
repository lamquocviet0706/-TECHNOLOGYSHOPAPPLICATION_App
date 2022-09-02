import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable
} from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const AddressScreen = props => {
  const { navigation } = props
  const onAddressAdd = () => {
    navigation.navigate('AddressAddScreen')
  }
  const onAddressEdit = () => {
    navigation.navigate('AddressEditScreen')
  }
  const data = [
    {
      id: '1',
      titleAddress: 'Hồ Chí Minh',
      nameAddress: '208/28 Lê Đức Thọ, Quận Gò Vấp, TP. HCM',
      phoneNumber: '+084706323'
      //   image:require("../../assets/User.png"),
    },
   
  ]

  const Item = ({ titleAddress, nameAddress, phoneNumber }) => (
    <View style={styles.cardview}>
      <View style={styles.cardviewT}>
        <Text Text style={styles.textlist1}>
          {titleAddress}
        </Text>
        <Text Text style={styles.textlist2}>
          {nameAddress}
        </Text>
        <Text Text style={styles.textlist3}>
          {phoneNumber}
        </Text>
        <View style={styles.viewbutton}>
          <TouchableOpacity style={styles.buttons1}
            onPress={onAddressEdit}
          >
            <MaterialCommunityIcons
            style={styles.icons}
            name='border-color'
            size={26}
            color='black'
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons3}
            onPress={onAddressEdit}
          >
            <MaterialCommunityIcons
            style={styles.icons}
            name='delete-outline'
            size={26}
            color='black'
          />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.cardviewT}>
        <Text Text style={styles.textlist2}>Order Status</Text>
        <Text Text style={styles.textlist3}>{amountOrder}</Text>        
    </View>
    <View style={styles.cardviewT}>
        <Text Text style={styles.textlist2}>Order Status</Text>
        <Text Text style={styles.textlist4}>{priceOrder}</Text>        
    </View> */}
    </View>
  )
  const renderItem = ({ item }) => (
    //    <Item image={item.image} nameOrder={item.nameOrder} />
    <Item
      titleAddress={item.titleAddress}
      nameAddress={item.nameAddress}
      phoneNumber={item.phoneNumber}
    />
  )
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.viewbutton2}>
        <TouchableOpacity style={styles.buttons2} onPress={onAddressAdd}>
          <Text style={styles.buttonText2}>Thêm Địa Chỉ Mới</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddressScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  cardviewT: {
    borderWidth: 1,
    padding: 10,
    // borderBottomWidth: 1,  
    marginVertical: 5,  
    // borderColor:'#EBF0FF',
    borderRadius: 5,
  },
  textlist1: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  },
  textlist2: {
    fontSize: 14,
    color: '#9098B1',
    marginVertical: 5
  },
  textlist3: {
    fontSize: 14,
    color: '#9098B1'
  },
  buttons3: {
    width: windowWidth / 7,

    height: windowHeight / 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40E0D0',
    borderRadius: 5,
    marginRight: 10
  },
  buttons1: {
    width: windowWidth / 7,

    height: windowHeight / 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE82EE',
    borderRadius: 5,
    marginRight: 10
  },
  viewbutton: {
    // padding: 10,
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: 'white',
    flexDirection: 'row'
    // borderWidth:1,
  },
  buttonText: {
    color: 'white'
  },
  //
  buttons2: {
    width: windowWidth / 1.065,

    height: windowHeight / 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40BFFF',
    borderRadius: 100
  },
  viewbutton2: {
    // padding: 10,
    height: windowHeight * 0.055,
    backgroundColor: 'white'
  },
  buttonText2: {
    color: 'white'
  }
})

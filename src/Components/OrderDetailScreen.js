import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
  ScrollView
} from 'react-native'

import { Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ddmmyyyy } from '../consts/formatDate'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const CardViewAvatarW = windowWidth
const CardViewAvatarH = windowWidth * 0.25

const OrderDetailScreen = (props) => {
  const {route} = props
  const order = route.params || {}
  const productArr = order?.productArr || []
 
  
  return (
    <ScrollView>
      <View style={styles.container}>
        
        <View style={styles.cardviewChildren}>
          <Text style={styles.cardviewText}>Sản Phẩm</Text>
          {productArr?.map(i => 
                      <View style={styles.cardviewInside1}>
                      <Image
                        style={styles.img}
                        source={{uri: i.image}}
                      />
                      <View style={styles.textColum}>
                        <Text style={styles.textnameP}>{i.name}</Text>
                        <Text style={styles.textpriceP}>{i.price}</Text>
                      </View>
                      <MaterialCommunityIcons
                        style={styles.icons}
                        name='heart-outline'
                        size={26}
                        color='black'
                      />
                    </View>)}
        </View>
        {/* ship */}
        <View style={styles.cardviewChildren}>
          <Text style={styles.cardviewText}>Chi Tiết Giao Hàng</Text>
          <View style={styles.cardviewShip}>
            <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist1}>
                Ngày Giao Hàng
              </Text>
              <Text Text style={styles.textlist2}>
                {ddmmyyyy(order.published)}
              </Text>
            </View>
            {/* <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist2}>Order Status</Text>
              <Text Text style={styles.textlist4}>priceOrder</Text>      
          </View>
          <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist2}>Order Status</Text>
              <Text Text style={styles.textlist4}>priceOrder</Text>      
          </View> */}
          <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist1}>
                Họ Và Tên
              </Text>
              <Text Text style={styles.textlist3}>
              {order.namekh}
              </Text>
            </View>
            <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist1}>
                Địa Chỉ
              </Text>
              <Text Text style={styles.textlist3}>
              {order.address}
              </Text>
            </View>
          </View>
        </View>
        {/* Payment */}
        <View style={styles.cardviewChildren}>
          <Text style={styles.cardviewText}>Chi Tiết Thanh Toán</Text>
          <View style={styles.cardviewShip}>
            <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist1}>
                {`Giá Sản Phẩm (${order.productQuantity})`}
              </Text>
              <Text Text style={styles.textlist2}>
              ${order.totalmoney}
              </Text>
            </View>
            <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist1}>
                Phí Giao Hàng
              </Text>
              <Text Text style={styles.textlist2}>
                $40
              </Text>
            </View>
            {/* <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist2}>Order Status</Text>
              <Text Text style={styles.textlist4}>priceOrder</Text>      
          </View> */}
            <View style={styles.cardviewInside3}>
              <Text Text style={styles.texttotal}>
                Tổng cộng:
              </Text>
              <Text Text style={styles.textprice}>
              ${order?.totalmoney + 40}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewbutton}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonText}>Liên Hệ Hổ Trợ</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  )
}

export default OrderDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  cardviewAvatar: {
    // flexDirection:'row',
    width: CardViewAvatarW / 1.06,
    height: CardViewAvatarH,
    backgroundColor: 'black',
    alignItems: 'center'
    // borderBottomColor: '#D5DBDB',
    // borderBottomWidth: 1,
  },
  cardviewChildren: {
    // marginVertical:5,
    width: CardViewAvatarW,
    padding: 10
    // borderWidth:1,
  },
  cardviewText: {
    color: 'darkblue',
    fontSize: 16,
    fontWeight: 'bold'
  },
  cardviewInside1: {
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'space-between',
    borderColor: '#EBF0FF',
    marginVertical: 3
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10
  },
  textColum: {
    // borderWidth:1,
  },
  textnameP: {
    color: 'darkblue',
    fontWeight: 'bold',
    marginBottom: 35,
    width: 200
  },
  textpriceP: {
    color: '#40BFFF',
    fontWeight: 'bold'
  },
  icons: {
    position: 'absolute',
    right: 5,
    top: 10
  },
  cardviewShip: {
    borderWidth: 1,
    borderColor: '#EBF0FF',
    padding: 5,
    marginVertical: 5
  },
  cardviewInside2: {
    // borderWidth: 1,
    padding: 3,
    flexDirection: 'row',
    borderColor: '#EBF0FF',
    justifyContent: 'space-between'
  },
  textlist3: {
    // borderWidth:1,
    color: '#223263',
    width: 100
  },
  textlist2: {
    color: '#223263'
  },
  textlist1: {
    // borderWidth:1,
    color: '#9098B1'
  },
  cardviewInside3: {
    // borderWidth: 1,
    marginVertical: 7,
    paddingHorizontal: 3,
    marginTop: 5,

    borderTopWidth: 1,
    flexDirection: 'row',
    borderColor: '#EBF0FF',
    justifyContent: 'space-between'
  },
  texttotal: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'darkblue'
  },
  textprice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#40BFFF'
  },
  buttons:
  {
    
    width: CardViewAvatarW / 1.06,
    
    height: CardViewAvatarH/1.5,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#40BFFF',
    borderRadius:10,    

  },
  viewbutton:
  {
    padding: 10,
    backgroundColor:'white'
  },
  buttonText:{
    color:'white',
  }
})

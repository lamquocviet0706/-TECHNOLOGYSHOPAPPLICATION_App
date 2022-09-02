import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid
} from 'react-native';
import { COLOURS, Items } from '../../data/database';
import { MaterialCommunityIcons, Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DetailsScreen = ({ navigation, route }) => {
  const { product } = route.params;

 const [productdata, setProductdata] = useState(product);

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  // useEffect(() => {
    
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getDataFromDB();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  //get product data by productID

  // const getDataFromDB = async () => {
  //   (async () => {
  //     const rawResponse = await fetch(`http://192.168.1.18:3000/api/product/getone/${id}`, {
  //         method: 'GET',
  //         headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //         }

  //     });
  //     const res = await rawResponse.json();
  //     setproduct(res);

  // useEffect(() => {
    
  //   const url=`http://192.168.1.18:3000/api/product/getone/${productID}`
    
  //   fetch(url,{
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
      
  //   })
  //     .then((response) =>console.log(response))
  //     .then((res)=>console.log(res))
  //     .then((json) => console.log(json))
  //     .catch((error) => console.error(error))
      
  // }, []);
  // })();
// console.log(productdata,"dong 73")
    
  

  //add to cart

  const addToCart = async data => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(data);

      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Cart');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(data);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Cart');
      } catch (error) {
        return error;
      }
    }
  };

  //product horizontal scroll product card
  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />
      <ScrollView>
        <View
          style={{
            width: '100%',
            backgroundColor: COLOURS.backgroundLight,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 4,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 16,
              paddingLeft: 16,
            }}>
            {/* <TouchableOpacity onPress={() => navigation.goBack('Home')}>
              <Entypo
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: COLOURS.backgroundDark,
                  padding: 12,
                  backgroundColor: COLOURS.white,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity> */}
          </View>
          {/* <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false },
            )}
          /> */}
          <View
            >
              <Image
                        source={{uri:productdata.image}}
                        style={{

                            width: 300,
                            height: 300,
                            resizeMode: 'cover',
                        }}
                    />
              </View>
           
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 14,
            }}>
            <Entypo
              name="shopping-cart"
              style={{
                fontSize: 18,
                color: COLOURS.blue,
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
              }}>
              Shopping
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.black,
                maxWidth: '84%',
              }}>
              {productdata.name}
            </Text>
            <Ionicons
              name="link-outline"
              style={{
                fontSize: 24,
                color: COLOURS.blue,
                backgroundColor: COLOURS.blue + 10,
                padding: 8,
                borderRadius: 100,
              }}
            />
          </View>
          <View
            style={{
              
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                maxWidth: '85%',
                color: COLOURS.blue,
                marginBottom: 10,
              }}>
              Giá Sản Phẩm: {productdata.price}$
            </Text>
            
          </View>
          <View
            style={{
              
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                maxWidth: '85%',
                color: COLOURS.black,
                marginBottom: 4,
              }}>
              Giới Thiệu
            </Text>
            
          </View>
          <Text
            style={{
              fontSize: 15,
              color: COLOURS.black,
              fontWeight: '300',
              opacity: 0.5,
              lineHeight: 20,
              marginBottom: 1,
            }}>
            {productdata.description}
          </Text>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => (productdata.available ? addToCart(productdata) : null)}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: '#20B3F0',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: 'uppercase',
            }}>
            {productdata.available ? 'THÊM VÀO GIỎ HÀNG' : 'HẾT HÀNG'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DetailsScreen;
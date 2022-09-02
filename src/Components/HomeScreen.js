import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import { COLOURS } from "../../data/database";
import Swiper from "react-native-swiper";
import {
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import io from 'socket.io-client';
const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const [shirt, setShirt] = useState([]);
  const [jacket, setJacket] = useState([]);

  const [product, setProduct] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryindex] = useState(0);
  const [isloading, setIsloading] = useState(false)
  //get called on screen loads
  // useEffect(() => {
  //     const unsubscribe = navigation.addListener('focus', () => {
  //         getDataFromDB();
  //     });

  //     return unsubscribe;
  // }, [navigation]);

  // useEffect(()=>{
  //     const unsubscribe = dispatch({type: actions.GET_ALL_PRODUCTS})
  //     return unsubscribe
  // }, [])

  useEffect(()=>{
    const socket = io("http://192.168.11.119:3000")
    socket.on('server_msg', msg=>{
      console.log('server', msg)
      setProduct([])
      setIsloading(true);
      fetch("http://192.168.11.119:3000/api-search/products")
        .then((response) => response.json())
        .then((json) => setProduct(json))
        .catch((error) => console.error(error))
        .finally(() => setIsloading(false));
    })
  },[])

  useEffect(() => {
    setIsloading(true);
    fetch("http://192.168.11.119:3000/api-search/products")
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error(error))
      .finally(() => setIsloading(false));
  }, []);

  const getProductsByCategory = (category, index) => {
    setIsloading(true);

    setSelectedCategoryindex(index);
    if (index !=0) {
      const url = `http://192.168.11.119:3000/api/product/getByCat/${category}`;

      fetch(url)
        .then((response) => response.json())
        .then((json) => setProduct(json))
        .catch((error) => console.error(error))
        .finally(() => setIsloading(false));
    } else {
      fetch("http://192.168.11.119:3000/api-search/products")
        .then((response) => response.json())
        .then((json) => setProduct(json))
        .catch((error) => console.error(error))
        .finally(() => setIsloading(false));
    }
  };

  const categories = ["All", "Mouse", "Monitor", "Keyboard", "Card"];

  const CategoryList = ({ navigation }) => {
    return (
      <View style={style.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => getProductsByCategory(item.toLowerCase(), index)}
          >
            <View>
              <Text
                style={{
                  ...style.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? COLOURS.primary
                      : COLOURS.grey,
                }}
              >
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: COLOURS.primary,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const ProductCard = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailsScreen", { product: item })}
        style={{
          width: "50%",
          marginVertical: 14,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "50%",
            height: 100,
            borderRadius: 10,
            backgroundColor: COLOURS.backgroundLight,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          {/* {data.isOff ? (
                        <View
                            style={{
                                position: 'absolute',
                                width: '20%',
                                height: '24%',
                                backgroundColor: COLOURS.green,
                                top: 0,
                                left: 0,
                                borderTopLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: COLOURS.white,
                                    fontWeight: 'bold',
                                    letterSpacing: 1,
                                }}>
                                {data.offPercentage}%
                            </Text>
                        </View>
                    ) : null} */}
          <Image
            source={{ uri: item.image }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "stretch",
            }}
          />
        </View>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {item.name}
        </Text>
        {item.category ? (
          item.available ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.green,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.green,
                }}
              >
                Còn hàng
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.red,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.red,
                }}
              >
                hết hàng
              </Text>
            </View>
          )
        ) : null}
        <Text>$ {item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
      }}
    >
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <View style={style.searchInputContainer}>
            <MaterialCommunityIcons
              name="magnify"
              color={COLOURS.grey}
              size={25}
            />
            <TextInput placeholder="Search" />
          </View>
        </View>
        <View style={style.sliderContainer}>
          <Swiper
            autoplay
            horizontal={false}
            height={200}
            activeDotColor="#B0E0E6"
          >
            <View style={style.slide}>
              <Image
                source={require("../../assets/swiper/Banner1.jpg")}
                resizeMode="cover"
                style={style.slideImage}
              />
            </View>
            <View style={style.slide}>
              <Image
                source={require("../../assets/swiper/Banner2.jpg")}
                resizeMode="cover"
                style={style.slideImage}
              />
            </View>
            <View style={style.slide}>
              <Image
                source={require("../../assets/swiper/Banner3.jpg")}
                resizeMode="cover"
                style={style.slideImage}
              />
            </View>
          </Swiper>
        </View>

        <CategoryList />
        <FlatList
          data={product}
          renderItem={ProductCard}
          numColumns={2}
          refreshControl={<ActivityIndicator animating={isloading} />}
        />

        {/* <View
                    style={{
                        padding: 16,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: COLOURS.black,
                                    fontWeight: '500',
                                    letterSpacing: 1,
                                }}>
                                T-Shirt
                            </Text>

                        </View>
                        <Text
                            style={{
                                fontSize: 14,
                                color: COLOURS.blue,
                                fontWeight: '400',
                            }}>
                            SeeAll
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                        }}>
                        {shirt.map(data => {
                            return <ProductCard data={data} key={data.id} />;
                        })}
                    </View>
                </View>

                <View
                    style={{
                        padding: 16,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: COLOURS.black,
                                    fontWeight: '500',
                                    letterSpacing: 1,
                                }}>
                                Jacket
                            </Text>

                        </View>
                        <Text
                            style={{
                                fontSize: 14,
                                color: COLOURS.blue,
                                fontWeight: '400',
                            }}>
                            SeeAll
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                        }}>
                        {jacket.map(data => {
                            return <ProductCard data={data} key={data.id} />;
                        })}
                    </View>
                </View> */}
      </ScrollView>
    </View>
  );
};
export default HomeScreen;

const style = StyleSheet.create({
  title: { fontSize: 18, fontWeight: "bold", paddingHorizontal: 20 },
  iconContainer: {
    height: 25,
    width: 25,
    backgroundColor: COLOURS.white,
    position: "absolute",
    elevation: 2,
    right: 15,
    top: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarName1: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 19,
    color: 'darkblue'
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLOURS.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLOURS.primary,
    height: 45,
    width: 45,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  card: {
    height: 190,
    backgroundColor: COLOURS.white,
    elevation: 10,
    width: width / 2.5,
    marginRight: 20,
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    borderColor: COLOURS.primary,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  slideImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
});

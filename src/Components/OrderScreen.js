import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
const data = [
  {
    id: "1",
    nameOrder: "Profile",
    dateOrder: "Order at Hồ Chí Minh: 20/20/2222",
    statusOrder: "Shipping",
    amountOrder: "2 items purchased",
    priceOrder: "$300",

    //   image:require("../../assets/User.png"),
  },
  {
    id: "2",
    nameOrder: "Order",
    dateOrder: "Order at Hồ Chí Minh: 20/20/2222",
    statusOrder: "Shipping",
    amountOrder: "2 items purchased",
    priceOrder: "$300",
    //   image:require("../../assets/bag.png"),
  },
  {
    id: "3",
    nameOrder: "Address",
    dateOrder: "Order at Hồ Chí Minh: 20/20/2222",
    statusOrder: "Shipping",
    amountOrder: "2 items purchased",
    priceOrder: "$300",
    //   image:require("../../assets/Location.png"),
  },
  {
    id: "4",
    nameOrder: "Payment",
    dateOrder: "Order at Hồ Chí Minh: 20/20/2222",
    statusOrder: "Shipping",
    amountOrder: "2 items purchased",
    priceOrder: "$300",
    //   image:require("../../assets/CreditCard.png"),
  },
];

const OrderScreen = (props) => {
  const { navigation, route } = props;
  const user = route.params;
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    const socket = io("http://192.168.11.119:3000")
    socket.on('server_msg', msg=>{
      console.log('server', msg)
      setOrders([])
      const URL = `http://192.168.11.119:3000/api/order/getorderbyuserid/${user?.id}`;

      fetch(URL)
        .then((response) => response.json())
        .then((json) => setOrders(json))
  
        .catch((error) => console.error(error));
    })
  },[])
  useEffect(() => {
    const URL = `http://192.168.11.119:3000/api/order/getorderbyuserid/${user?.id}`;

    fetch(URL)
      .then((response) => response.json())
      .then((json) => setOrders(json))

      .catch((error) => console.error(error));
  }, []);
  const onOrderDetail = (order) => {
    navigation.navigate("OrderDetailScreen", order);
  };

  const Item = ({
    order,
    nameOrder,
    dateOrder,
    productArrOrder,
    status,
    amountOrder,
    priceOrder,
  }) => (
    <TouchableOpacity
      style={styles.cardview}
      onPress={() => onOrderDetail(order)}
    >
      <View style={styles.cardviewT}>
        {/* <Image source={image} style={styles.img}/>     */}
        <Text Text style={styles.textlist1}>
          {nameOrder}
        </Text>
        <Text Text style={styles.textlist2}>
          {dateOrder}
        </Text>
      </View>
      <View style={styles.cardviewB}>
        <Text Text style={styles.textlist2}>
          Trạng Thái Đơn Hàng
        </Text>
        <Text Text style={styles.textlist3}>
          {status}
        </Text>
      </View>
      <View style={styles.cardviewB}>
        <Text Text style={styles.textlist2}>
          Số lượng
        </Text>
        <Text Text style={styles.textlist3}>
          {amountOrder}
        </Text>
      </View>
      <View style={styles.cardviewB}>
        <Text Text style={styles.textlist2}>
          Giá Đơn Hàng
        </Text>
        <Text Text style={styles.textlist4}>
        ${priceOrder}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => (
    //    <Item image={item.image} nameOrder={item.nameOrder} />
    <Item
      order={item}
      dateOrder={item.published}
      nameOrder={item.address}
      productArrOrder={item.productArr}
      amountOrder={item.productQuantity}
      priceOrder={item.totalmoney}
      status={item.status}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    justifyContent: "center",
  },
  cardview: {
    // flexDirection:'row',
    borderWidth: 1,
    // padding: 3,
    justifyContent: "center",
    marginVertical: 5,
    borderColor: "#EBF0FF",
  },
  cardviewT: {
    // borderWidth: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#EBF0FF",
  },
  cardviewB: {
    // borderWidth: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    width: 26,
    height: 26,
    marginRight: 30,
    resizeMode: "cover",
    borderWidth: 1,
  },
  textlist1: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  textlist2: {
    fontSize: 14,
    // fontWeight:'bold',
    color: "#9098B1",
  },
  textlist3: {
    fontSize: 14,
    // fontWeight:'bold',
    color: "#223263",
  },
  textlist4: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#40BFFF",
  },
  // 223263
  br: {
    height: 1,
    backgroundColor: "gray",
  },
});

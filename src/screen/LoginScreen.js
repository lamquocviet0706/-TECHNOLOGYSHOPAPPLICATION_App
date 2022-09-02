import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { Dimensions, Pressable } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const LoginScreen = (props) => {
  const { navigation } = props;
  const [username, setUsername] = useState("viet");
  const [password, setPassword] = useState("123");
  const [isScureEntry, setIsSecureEntry] = useState(false);

  const onRegister = () => {
    navigation.navigate("RegisterScreen");
  };
  const onLogin = () => {
    const option = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    if (!password || !username) {
      Alert.alert("Vui lòng không để trống");
    } else {
      fetch('http://192.168.11.119:3000/api-index/dangnhap/', option)
        .then((response) => response.json())
        .then((json) => {
          if (json?.success == true) {
            if (json?.user) {
              navigation.navigate("MainScreen", { user: json?.user });
            } else {
              Alert.alert("Không tìm thấy tên đăng nhập");
            }
          } else {
            Alert.alert("Login Fail");
          }
        })
        .catch((error) => console.error(error));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {/* <Image style={styles.logo} source={require("../../assets/M.png")} /> */}
        <Text style={styles.textWC}>Welcome To Tech&Acces Shop</Text>
        <Text style={styles.textCreate}>Login to your account to enter the app</Text>
        {/* <Text style={styles.textSign}>Sign in to continue</Text> */}
      </View>

      <View style={styles.middle}>
        <View style={styles.cardview}>
          <View style={styles.startView}>
            <MaterialCommunityIcons
              style={styles.icons}
              name="email-outline"
              size={26}
              color="#223263"
            />
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="Username"
            />
          </View>
        </View>
        <View style={styles.cardview}>

          <View style={styles.startView}>
            <AntDesign
              style={styles.icons}
              name="lock"
              size={26}
              color="#223263"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={isScureEntry}
              placeholder={isScureEntry ? '' : 'Mật khẩu...'}
            />
            <TouchableOpacity style={styles.An}
              onPress={() => {
                setIsSecureEntry((prev) => !prev);
              }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>{isScureEntry ? 'HIỆN' : 'ẨN'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.textForgot}>Forgot Password?</Text>
        </View>
        <TouchableOpacity onPress={onLogin} style={styles.buttonLogin}>
          <Text style={styles.buttonLoginText}>LOG IN</Text>
        </TouchableOpacity>
        <Text style={styles.textOr}>OR</Text>
      </View>

      <View style={styles.bottom}>
        {/* <TouchableOpacity 
        // onPress={() => navigation.navigate("")}
        >
        <View style={styles.google}>
          <Image
            style={styles.google_ic}
            source={require("../../assets/google_ic.png")}
          />
          <Text style={styles.google_text}>Login with Google</Text>
        </View>
        </TouchableOpacity> */}
        <TouchableOpacity
          // onPress={() => navigation.navigate("Categories")}
          style={styles.google}
        >
          <Image
            style={styles.google_ic}
            source={require("../../assets/gg_icon.png")}
          />

          <Text style={styles.google_text}>Login For Gmail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => navigation.navigate("Categories")}
          style={styles.google}
        >
          <Image
            style={styles.facebook_ic}
            source={require("../../assets/face_icon.png")}
          />

          <Text style={styles.google_text}>Login For FaceBook</Text>
        </TouchableOpacity>



        <View style={styles.register}>
          <Text style={styles.dontText}>Don’t have a account? </Text>

          <TouchableOpacity onPress={onRegister}>
            <Text style={styles.Textregister}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  top: {
    // flex:0.2,
    // borderWidth:1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 70,
  },
  An: {
    alignSelf: "flex-end",
    marginRight: 100
  },
  middle: {
    // flex:0.3,
    // borderWidth:1,
    alignItems: "center",
  },
  bottom: {
    // flex:0.35,
    // borderWidth:1,
    alignItems: "center",
  },
  textCreate: {
    fontSize: 16,
    height: 22,
    color: "#9098B1",
    alignSelf: "center",
    marginTop: 10,
  },
  textWC: {
    fontSize: 20,
    // height: 28,
    color: "#223263",
    // alignSelf: "center",
    fontWeight: "bold",
    marginTop: 5,
  },
  textSign: {
    fontSize: 17,
    // height: 22,
    color: "#9098B1",
    alignSelf: "center",
    marginTop: 5,
  },

  cardview: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#3399FF",
    marginVertical: 8,
    width: "90%",
    // padding: 22,
  },
  startView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    //   borderWidth: 1,
  },
  icons: {
    marginRight: 10,
  },
  input: {
    //   borderWidth:1,
    width: windowWidth / 1.25,
    //   height: windowHeight/25,
  },
  buttonLogin: {
    backgroundColor: "#0099FF",
    height: 50,
    marginVertical: 8,
    width: "95%",
    marginTop: 10,
    borderRadius: 7,
    padding: 10,
    justifyContent: "center",
    // alignSelf: "center",
  },
  buttonLoginText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  textOr: {
    fontSize: 16,

    color: "#9098B1",
    alignSelf: "center",
    marginVertical: 8,
    fontWeight: "bold",
  },
  //
  google: {
    // backgroundColor: "#40BFFF",
    flexDirection: "row",
    height: 55,
    marginVertical: 8,
    width: "90%",
    // marginTop: 10,
    borderRadius: 7,
    alignItems: "center",
    padding: 10,
    // justifyContent: "center",

    borderWidth: 1,
  },
  google_ic: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  facebook_ic: {
    width: 20,
    height: 40,
    marginRight: 10,
  },
  google_text: {
    height: 25,
    // marginLeft: 105,
    width: "85%",
    fontSize: 16,
    color: "#9098B1",
    fontWeight: "bold",

    // borderWidth: 1,
    textAlign: "center",
  },
  textForgot: {
    fontSize: 12,
    // height: 25,
    color: "#40BFFF",
    alignSelf: "center",
    justifyContent: "flex-start",
    // marginTop: 20,
    fontWeight: "bold",
    // marginLeft: 35,
  },
  register: {
    flexDirection: "row",
    height: 50,
    marginVertical: 8,
    width: "90%",
    // marginTop: 10,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
    // borderWidth:1,
  },
  dontText: {
    fontSize: 16,
    height: 25,
    color: "#9098B1",
    // marginLeft: 10,
  },
  Textregister: {
    height: 25,
    fontSize: 16,
    color: "#40BFFF",
    fontWeight: "bold",
    textAlign: "center",
    // borderWidth:1,
  },
});

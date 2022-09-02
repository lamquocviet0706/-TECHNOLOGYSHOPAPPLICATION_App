import React from 'react';
import {
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity
} from 'react-native';

const WellcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{

      }}
      resizeMode="repeat"
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Image
          source={{ uri: 'https://i.ibb.co/ScwLzGB/lkdt.png', }}
          style={styles.logo}
        />
        <Text style={styles.textTitle}>THIẾT BỊ ĐIỆN TỬ</Text>
        <Text style={styles.textDescription}>
          Dịch vụ tốt nhất, Đúng lúc, Đúng người.
        </Text>
        <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.google}
        >
          <Image
            style={styles.google_ic}
            source={require("../../assets/login_icon.png")}
          />

          <Text style={styles.google_text}>LOGIN</Text>
        </TouchableOpacity>
          <View style={styles.separator} />

          <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
          style={styles.google}
        >
          <Image
            style={styles.google_ic}
            source={require("../../assets/signup_icon.png")}
          />

          <Text style={styles.google_text}>REGISTER</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
      
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,

  },
  textTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 12,
    color: '#00bfff'
  },
  textDescription: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 20,
    color: '#87cefa'
  },
  button: {
    width: '100%',

  },
  separator: {
    marginVertical: 10,

  },
  bottom: {
    // flex:0.35,
    // borderWidth:1,
    alignItems: "center",
  },
  google: {
    // backgroundColor: "#40BFFF",
    flexDirection: "row",
    height: 55,
    marginVertical: 8,
    width: "90%",
    borderColor: "#3399FF",
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
    color: "#000000",
    fontWeight: "bold",

    // borderWidth: 1,
    textAlign: "center",
  },
})
export default WellcomeScreen;
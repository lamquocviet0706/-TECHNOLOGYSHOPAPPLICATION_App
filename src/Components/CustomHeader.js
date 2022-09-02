import { StyleSheet, Text, View,Dimensions  } from 'react-native'
import React from 'react'
import {Surface} from 'react-native-paper'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const headerW = windowHeight * 0.4
const headerH = windowWidth * 0.2

const CustomHeader = () => {
  return (
    <Surface style={styles.header}>
      <View></View>
    </Surface>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    header:{
        height:headerH,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        borderBottomColor: 'gray',
        borderBottomWidth: 2,   
    }
})
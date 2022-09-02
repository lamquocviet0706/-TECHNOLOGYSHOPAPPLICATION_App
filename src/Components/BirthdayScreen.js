import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert} from 'react-native'
import React, { useState } from "react"
import { Dimensions,Pressable } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BirthdayScreen = (props) => {
    const onSave = () => {
    navigation.navigate('ProfileScreen')
  }
    const { navigation, route } = props;
    const user = route.params
    console.log("dong 10",user)
    const [date, setDate] = useState();
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.text}>Ngày Sinh Của Bạn</Text>
            <DatePicker
            style={styles.datePickerStyle}
            date={date} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="Select Date"
            format="DD-MM-YYYY"          
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              right: 0,
              top: 4,
             
            },
            dateInput: {
              
              borderRadius: 7,
              borderColor:'#20B3F0',
              
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />

        </View>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.buttons}
                onPress={onSave}
            >
                <Text style={styles.buttonText}>Lưu</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default BirthdayScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
         backgroundColor:'#fff',

    },
    top: {
        width: windowWidth,
        height: windowHeight*0.15,
        justifyContent:'center',
        
        padding: 10,
        // borderWidth: 1,


    },
    text:{
        color:'black',
        fontWeight:'bold',
        fontSize:16,

    },
    bottom:{
        width: windowWidth,
        height: windowHeight*0.08,
        // borderWidth: 1,
        padding: 10,
        // alignItems:'center',
        // justifyContent: 'flex-start',
        // backgroundColor:'black',
        justifyContent: 'center',
        // justifyContent:"flex-end",


    },
    buttons:{
        height: windowHeight*0.075,
        
        backgroundColor:'#20B3F0',
        borderRadius: 100,
        // padding: 12,
        alignItems:'center',
        justifyContent: 'center',
        


    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    },
    datePickerStyle:{     
        marginVertical: 15,
        width: windowWidth/1.065,   
        // borderWidth: 1,
        justifyContent:'center',
             
    }
})
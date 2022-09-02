import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert} from 'react-native'
import React, { useState } from "react"
import { Dimensions,Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const logg=()=>{
      console.log("dsadas");
    }
    


const GenderScreen = (props) => {
    const onSave = () => {
    navigation.navigate('ProfileScreen')
  }
    const { navigation,route } = props;
    const user = route.params
    const [gender, setGender] = useState();
    const [selected, setSelected] = useState();
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.text}>Choose Gender</Text>
            <View style={styles.pickers}>
            <Picker            
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) =>
                setSelected(itemValue)}>
            
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Male" value="Male" />
            </Picker>
            </View>
            
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

export default GenderScreen;

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
        color:'darkblue',
        fontWeight:'bold',
        fontSize:16,

    },
    bottom:{
        width: windowWidth,
        height: windowHeight*0.08,
        // borderWidth: 1,
        padding: 5,
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
        fontSize:18,
    },
    pickers:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor:'#20B3F0',
        marginVertical: 5,
    }
    
})
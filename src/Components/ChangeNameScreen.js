import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert} from 'react-native'
import React, { useState } from "react"
import { Dimensions,Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChangeNameScreen = (props) => {
  const onSave = () => {
    navigation.navigate('ProfileScreen')
  }
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.top}>
            <Text style={styles.text}>First Name</Text>
            <View style={styles.cardview}>              
                <View style={styles.startView}>
                    
                    <TextInput
                        style={styles.input}
                        onChangeText={setfirstname}
                        value={firstname}                       
                        placeholder="Your First Name"
                        maxLength={24}
                    />
                </View>                    
            </View>
            <Text style={styles.text}>Last Name</Text>
            <View style={styles.cardview}>              
                <View style={styles.startView}>                    
                    <TextInput
                        style={styles.input}
                        onChangeText={setlastname}
                        value={lastname}                       
                        placeholder="Your Last Name"
                        maxLength={24}
                    />
                </View>                    
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

export default ChangeNameScreen

const styles = StyleSheet.create({
container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
         backgroundColor:'#fff',

    },
    top: {
        width: windowWidth,
        height: windowHeight*0.28,
        justifyContent:'center',
        
        padding: 10,
        // borderWidth: 1,
    

    },
    text:{
        color:'darkblue',
        fontWeight:'bold',
        fontSize:16,
    },
    text2:{
        color:'#20B3F0',
        fontSize:14,
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
    cardview:{     
    borderWidth: 1,   
     borderRadius: 7,
     borderColor:'#20B3F0',
     marginVertical:8,
    
    // padding: 22,

  },
  startView:{
      flexDirection:'row',
      alignItems:'center',
      padding: 10,
  },
  icons:{
    marginRight:10
     
  },
  input:{
      // borderWidth:1,
      width: windowWidth/1.13,
    //   height: windowHeight/25,
  }

})
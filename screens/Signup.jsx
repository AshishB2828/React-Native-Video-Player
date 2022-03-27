import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

const { height } = Dimensions.get('window')
const Signup = () => {
    return (
        <View style={{ height }}>
        <View style={styles.mainView}>
            <View style={styles.TopView}>
                <Text style={styles.logo}>Hello</Text>
            </View>
            <View style={styles.BottomView}>
                <View style={styles.formView}>
                    <TextInput  
                        placeholder='Name'
                        placeholderTextColor='white'
                        style={styles.textInput}
                    />
                    <TextInput  
                        placeholder='Password'
                        secureTextEntry
                        placeholderTextColor='white'
                        style={styles.textInput}
                    />
                    <TextInput  
                        placeholder='Password'
                        secureTextEntry
                        placeholderTextColor='white'
                        style={styles.textInput}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text>Signin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.upbutton}>
                        <Text>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    );
};

export default Signup;

const styles = StyleSheet.create({

    mainView:{
        marginTop : 40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TopView:{
        width: '100%',
        height:'30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    BottomView:{
        width: '100%',
        height: '70%',
        backgroundColor:'#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        display:'flex',
        alignItems:'center',

    },
    logo:{
        fontSize:50,
        fontWeight:'bold',
        
    },
    textInput:{
        width:'90%',
        borderWidth:1,
        borderColor:'white',
        height: 52,
        borderRadius:6,
        paddingLeft: 10,
        marginBottom: 20,
        color:'white'
    },
    formView:{
        marginTop:60,
        width:'100%',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
    },
    button:{
         width:'90%',
         color:'black',
         backgroundColor:'white',
         height:52,
         borderRadius:5,
         display:'flex',
         alignItems:'center',
         justifyContent:'center'
    },
    upbutton:{
         width:'90%',
         marginTop:10,
         backgroundColor:'gray',
         height:52,
         borderRadius:5,
         display:'flex',
         alignItems:'center',
         justifyContent:'center'    
    }


});

import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../api/api';
const { height } = Dimensions.get('window')


const Signin = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn =async()=>{
        
        try {
            const {data} = await api.post('/api/login', {email,password});
            await AsyncStorage.setItem('token', data?.token);
            await AsyncStorage.setItem('user', data?.user);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <View style={{height}}>
        <View style={styles.mainView}>
            <View style={styles.TopView}>
                <Text style={styles.logo}>Hello</Text>
            </View>
            <View style={styles.BottomView}>
                <View style={styles.formView}>
                    <TextInput  
                        placeholder='Email'
                        placeholderTextColor='white'
                        style={styles.textInput}
                        onChangeText={text => setEmail(text)}
                        value={email}

                    />
                    <TextInput  
                        placeholder='Password'
                        secureTextEntry
                        placeholderTextColor='white'
                        style={styles.textInput}
                        onChangeText={text => setPassword(text)}
                        value={password}
                        
                    />
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handleSignIn}
                        >
                        <Text>Signin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.upbutton} onPress={()=> navigation.navigate('signUp')}>
                        <Text>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    );
};

export default Signin;

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
        height:'40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    BottomView:{
        width: '100%',
        height: '60%',
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

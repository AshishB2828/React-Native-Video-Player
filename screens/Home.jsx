import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useScrollToTop } from '@react-navigation/native'




const Home = ({ navigation }) => {
    const [searchKey, setSearchKey] = useState('');

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navRef = useRef(null);
    useScrollToTop(navRef);

    useEffect(()=>{
        fetch('http://192.168.1.6:8000/api/video/all?page=0')
        .then(re=>re.json())
        .then(re=> {
            //console.log(re)
            setVideos(re.videos)}
            )
        .catch(err => console.log(err))
    },[])

    return (
        <View style={styles.mainView}>
            <Text style={styles.heading}>Top Videos</Text>
            <View style={{alignItems:'center', marginVertical: 20}}>
                <TextInput 
                    placeholder='serach...' 
                    onChangeText={text => setSearchKey(text)}
                    style={styles.textInput}

                    /> 
            </View>
            <View style={styles.mainPostView}>
                {
                    videos.length ? 
                    <FlatList
                        ref={navRef}
                        showsVerticalScrollIndicator={false}
                        data={videos}
                        keyExtractor={videos=> videos._id.toString()}
                        renderItem={({item})=>(
                            <TouchableOpacity style={styles.postView} onPress={()=>navigation.navigate('Player', {data: item})}>
                                    <ImageBackground style={{width:'100%', height:'100%'}} source={{uri: item.thumbnail[0]}}>
                                        <View style={styles.postHeadingWrapper}>
                                            <Text style={styles.postHeading}>{item.name}</Text>
                                        </View>
                                    </ImageBackground>
                            </TouchableOpacity>
                        )
                            
                        }
                    
                    /> : null
                }
            </View>

        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    mainView:{
        flex:1,
    },
    heading:{
        fontSize:32,
        marginTop:60,
        marginLeft:20,
        fontWeight:'bold',
        
    },
    textInput:{
        height:40,
        width:'90%',
        borderRadius:20,
        backgroundColor:'#EBEBEB' ,
        paddingLeft:20       
    },
    mainPostView:{
        display:'flex',
        alignItems:'center',
        flex:1
    },
    
    postView:{
        backgroundColor:'red',
        width:300,
        height:200,
        margin:10,
        borderRadius:10,
        elevation:5,
        overflow:'hidden'
    },
    postHeadingWrapper:{
        paddingHorizontal:20,
        paddingTop:20
    },
    postHeading:{
        fontWeight: 'bold'
    }
});


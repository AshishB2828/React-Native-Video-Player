import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';

const{ width, height } = Dimensions.get("screen");
const Player = ({navigation, route}) => {
    const [currentVideo, setCurrentVideo] = useState({})
    const video = useRef(null);
    const [status, setStatus] = useState({});

    const setOrientation =()=>{
            if (Dimensions.get('window').height > Dimensions.get('window').width) {
                //Device is in portrait mode, rotate to landscape mode.
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
            }
            else {
                //Device is in landscape mode, rotate to portrait mode.
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
            }
    }


    useEffect(()=>{
        setCurrentVideo(route.params.data);
    },[])
    return (
        <View style={styles.mainPlayerView}>
            <View style={styles.videoView}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                uri: currentVideo.videoURL,
                }}
                useNativeControls
                resizeMode="stretch"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                onFullscreenUpdate={setOrientation}
            />
            </View>
                <Text style={styles.title}>{currentVideo.name}</Text>
        </View>
    )
}

export default Player

const styles = StyleSheet.create({
    mainPlayerView:{
        flex:1,
        alignItems:'center'
    },
    videoView:{
        height: height / 3,
        width: width,
        backgroundColor:'gray',
        marginTop:StatusBar.currentHeight
    },
    title:{
        marginTop: 20,
        fontWeight:'bold',
        fontSize: 20
    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    },
})
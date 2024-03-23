import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import image from '../assest/images/images'
import { useNavigation } from '@react-navigation/native'
import ScreenNames from '../../route/ScreenNames'

const Splashe = () => {
    const navigation = useNavigation();
    const handPress = () => {
        navigation.navigate(ScreenNames.HomeScreen); 
    }

    useEffect(() => {
        const delay = 1000; // 3 seconds in milliseconds

        const timer = setTimeout(() => {
            navigation.replace(ScreenNames.HomeScreen); 
        }, delay);

        // Clean up the timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, []); 

    return (
        <View style={styles.container}> 
            <TouchableOpacity onPress={handPress}>
                <Image style={styles.logo} source={image.logo()} />
            </TouchableOpacity>
        </View>
    )
}
    


export default Splashe

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logo: {
        marginBottom: '40%'
    }
})

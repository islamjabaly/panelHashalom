import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import image from '../assest/images/images';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../route/ScreenNames'; // Import ScreenNames if it's defined in a separate file

const Splashe = () => {
    const navigation = useNavigation();

    const handPress = () => {
        setTimeout(() => {
            navigation.replace(ScreenNames.HomeScreen);
        }, 3000);
    }

    useEffect(() => {
        handPress()
    }, [])
    

    return (
        <View style={styles.container}> 
            <TouchableOpacity onPress={handPress}>
                <Image style={styles.logo} source={image.logo()} />
            </TouchableOpacity>
        </View>
    )
}

export default Splashe;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginBottom: '40%'
    }
});

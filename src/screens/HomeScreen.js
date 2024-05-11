import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import image from '../assest/images/images';
import MaterialsComponents from '../compoenents/MaterialsCompoents';
import MenuHeader from '../compoenents/MenuHeader';
import ScreenNames from '../../route/ScreenNames'; 

const HomeScreen = () => {
    const navigation = useNavigation(); 

    const handleSearch = () => {
        navigation.navigate(ScreenNames.SearchPage); 
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.headerpic}>
                <Image source={image.Headerpicture()} style={styles.headerImage} />
            </View>
            { <MenuHeader /> }
            <View style={styles.searchContainer}>
                {/* <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="black"
                /> */}
                <TouchableOpacity onPress={handleSearch}>
                    <Image source={image.SearchIcon()} style={styles.searchPic} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <MaterialsComponents />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 15,
        fontSize: 16,
        borderColor: '#ccc',
        backgroundColor: '#f9f9f9',
        marginRight: 5,
    },
    headerpic: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    headerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchPic: {
        width: 35,
        height: 35,
    },
});

export default HomeScreen;

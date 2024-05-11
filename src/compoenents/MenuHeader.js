import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import dataHeaderMenu from '../res/dataHeaderMenu';

const MenuHeader = () => {
    const renderMenuHeader = () => {
        return dataHeaderMenu.map((item, index) => (
            <TouchableOpacity style={styles.btn}>
                <Text key={index}>{item.title}</Text>
            </TouchableOpacity>
        ));
    };

    return (
        <View style={styles.MenuHeader}>
            <ScrollView style={styles.MenuHeader} horizontal>
                {renderMenuHeader()}
            </ScrollView>
        </View>
    );
}

export default MenuHeader;

const styles = StyleSheet.create({
    MenuHeader: {
        flexDirection: 'row'

    },
    btn: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
        margin: 5,
    },
});
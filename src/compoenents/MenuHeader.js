import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import dataHeaderMenu from '../res/dataHeaderMenu';

const MenuHeader = ({ setSelectedId }) => {
    const handleCategoryPress = (id) => {
        setSelectedId(id);
    };

    const renderMenuHeader = () => {
        return dataHeaderMenu.map((item, index) => (
            <TouchableOpacity key={index} style={styles.btn} onPress={() => handleCategoryPress(item.id)}>
                <Text>{item.title}</Text>
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

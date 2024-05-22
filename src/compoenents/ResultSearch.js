// SearchResult.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const SearchResult = ({ selectedItem }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{selectedItem.name}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.label}>כתובת:</Text>
                <Text style={styles.text}>{selectedItem.price}</Text>
                {selectedItem.img && (
                    <Image style={styles.image} source={selectedItem.img} />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: width * 0.05,
        marginHorizontal: width * 0.05,
        marginVertical: height * 0.02,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: height * 0.01,
        marginBottom: height * 0.02,
    },
    title: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        color: '#333',
    },
    details: {
        marginBottom: height * 0.01,
    },
    label: {
        fontSize: width * 0.045,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: height * 0.005,
    },
    text: {
        fontSize: width * 0.04,
        color: '#333',
        marginBottom: height * 0.01,
    },
    image: {
        width: '100%',
        height: height * 0.25,
        borderRadius: 10,
        marginTop: height * 0.02,
        alignSelf: 'center',
    },
});

export default SearchResult;
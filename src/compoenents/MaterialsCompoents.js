import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import materials from '../res/data'; 

const MaterialsComponents = ({ selectedId }) => {
    const filteredMaterials = selectedId ? materials.filter(material => material.id === selectedId) : materials;

    return (
        <View style={styles.container}>
            {filteredMaterials.map((material, index) => (
                <View key={index} style={styles.materialContainer}>
                    <Text style={styles.materialName}>{material.name}</Text>
                    <View style={styles.dataContainer}>
                        {material.data.map((dataItem, dataIndex) => (
                            <View key={dataIndex} style={styles.dataItem}>
                                <Image source={dataItem.img} style={styles.materialImage} />
                                <Text style={styles.dataText}>{dataItem.name}</Text>
                                <Text style={styles.dataText}>{dataItem.price}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0', 
    },
    materialContainer: {
        marginBottom: 20,
        backgroundColor: '#ffffff', 
        padding: 10,
        borderRadius: 8,
        elevation: 3, 
        shadowColor: '#000000', 
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    materialName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333333', 
    },
    dataContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
    },
    dataItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        width: '48%', 
        backgroundColor: '#ffffff', 
        padding: 10,
        borderRadius: 8, 
        elevation: 2,
        shadowColor: '#000000', 
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },
    materialImage: {
        width: 80,
        height: 80,
        marginBottom: 5,
    },
    dataText: {
        textAlign: 'center',
        color: '#666666', 
        marginTop: 5,
    },
});

export default MaterialsComponents;

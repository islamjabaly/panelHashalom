import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import materials from '../res/data'; // Ensure the correct import path for materials data

const MaterialsCompoents = () => {
  const renderMaterial = ({item})=> (
          <View style={styles.materialContainer}>
              <TouchableOpacity>
                  <Text style={styles.materialName}>{item.name}</Text>
                  <Image source={item.image()} style={styles.materialImage} />
              </TouchableOpacity>
          </View>
      );
      

  return (
    <View style={styles.container}>
     <FlatList data={materials} renderItem={renderMaterial} numColumns={2}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection:'row'
  },
  materialContainer: {
    marginVertical: 10, 
    alignItems: 'center', 
  },
  materialName: {
    fontSize: 18, 
    fontWeight: 'bold',
    marginLeft:50,
    margin:5
  },
  materialImage: {
    width: 150, 
    height: 150, 
    resizeMode: 'cover', 
    margin:5,
    marginLeft:35,
    marginRight:10
    
  },
});

export default MaterialsCompoents;

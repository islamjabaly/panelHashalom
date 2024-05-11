// components/SearchPage.js
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
import image from '../assest/images/images';
import materials from '../res/data';
import ResultSearch from '../compoenents/ResultSearch';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Search term:', searchTerm); // Just for debugging, remove in production
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="black"
        onChangeText={text => setSearchTerm(text)}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Image source={image.SearchIcon()} style={styles.searchPic} />
      </TouchableOpacity>
      <ResultSearch materials={materials} searchTerm={searchTerm} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  searchPic: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

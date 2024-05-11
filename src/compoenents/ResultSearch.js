// components/ResultSearch.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultSearch = ({ materials, searchTerm }) => {
  const filteredData = materials.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {materials.map((category, index) => (
        <View key={index}>
          <Text>{category.name}</Text>
          {category.data.map((item, idx) => (
            <View key={idx}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default ResultSearch;

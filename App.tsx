import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './route/nav';
  const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={styles.container} >
      <MainNavigation/>
    </View>


  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App;
 

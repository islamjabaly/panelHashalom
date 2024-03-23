import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import Splashe from '../src/screens/Splashe';
import HomeScreen from '../src/screens/HomeScreen';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.Splash} component={Splashe} />
         <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

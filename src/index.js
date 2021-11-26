import React from 'react'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
  <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Movie" component={Movie} /> 
        </Stack.Navigator>
  </NavigationContainer>

    );

}

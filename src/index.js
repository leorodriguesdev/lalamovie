import React from 'react'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie';
import { RecordMovie } from './pages/RecordMovie';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { Logout } from './pages/Logout';




import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createDrawerNavigator } from 'react-navigation-drawer';

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();


// function DrawerRoutes() {
//   return (
//       <Drawer.Navigator
//         initialRouteName='Home'>
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Record Movie" component={RecordMovie} />
//         <Drawer.Screen name="Profile" component={Profile} />
//         <Drawer.Screen name="Settings" component={Settings} />
//         <Drawer.Screen name="Logout" component={Logout} />
//       </Drawer.Navigator>
//   );
// }
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='RecordMovie'
>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Movie" component={Movie} />
        <Stack.Screen name="RecordMovie" component={RecordMovie} />

      </Stack.Navigator>
    </NavigationContainer>

  );

}

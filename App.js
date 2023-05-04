// import { Icon } from 'react-native-elements';
import React from 'react';
import {Text, View} from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Flash from './pages/Flash';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    // <View>
    //   <Text>Welcome to Home</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Flash" component={Flash} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

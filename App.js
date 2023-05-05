import React from 'react';
import { Icon } from '@rneui/themed';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import Flash from './pages/Flash';
import BusList from './pages/BusList';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { 
            backgroundColor: '#3262a8' 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerActiveTintColor: '#3262a8',
          drawerActiveBackgroundColor: '#eee',
          drawerInactiveTintColor: '#666',
          labelStyle: {
            marginLeft: 0,
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            drawerIcon: ({focused, size}) => (
              <Icon name="home" color="#3262a8" />
           ),
          }}
        />
        <Drawer.Screen
          name="BusList"
          component={BusList}
          options={{
            title: 'Bus List',
            drawerIcon: ({focused, size}) => (
              <Icon name="dashboard" color="#3262a8" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;

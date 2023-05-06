import React from 'react';
import {View} from 'react-native';
import { Icon } from '@rneui/themed';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import Flash from './pages/Flash';
import BusList from './pages/BusList';
import Navigator from './pages/Navigator';
import Search from './pages/Search';
import Contact from './pages/Contact';
import { Text } from '@rneui/base';
import CustomSidebarMenu from './components/CustomSidebarMenu';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomSidebarMenu {...props}/>}
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
        <Drawer.Screen
          name="Navigator"
          component={Navigator}
          options={{
            title: 'Navigator',
            drawerIcon: ({focused, size}) => (
              <Icon name="map" color="#3262a8" />
            ),
          }}
        />
        <Drawer.Screen
          name="Search"
          component={Search}
          options={{
            title: 'Search',
            drawerIcon: ({focused, size}) => (
              <Icon name="search" color="#3262a8" />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact Us"
          component={Contact}
          options={{
            title: 'Contact Us',
            drawerIcon: ({focused, size}) => (
              <Icon name="call" color="#3262a8" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;

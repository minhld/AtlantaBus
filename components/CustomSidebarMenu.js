import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = props => {
  const BASE_PATH =
        'https://www.nicesnippets.com/image/nice-logo.png';
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.logoImage}>
          <Image
              source={require('../images/marta.png')}
              style={styles.sideMenuIcon}
          />
      </View>
      <DrawerContentScrollView {...props}>
          <DrawerItemList {...props}  />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    marginLeft: 10,
  },
  sideMenuIcon: {
    resizeMode: 'contain',
    width: '50%',
    height: 60,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;

import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const BusList = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={require('../images/marta.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '80%',
    height: 48,
  }
});

export default BusList;

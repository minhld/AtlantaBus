import React, { useEffect, useState } from 'react';
import {Text, Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import * as DbUtils from '../components/DbUtils';

const Home = ({navigation}) => {
  useEffect(() => {
    // write your code here, it's like componentWillMount
    // DbUtils.loadDb();
  }, []);
    
  return (
    <View style={styles.container}>
      <PageImage
        image={require('../images/road-map.png')}
        text='Bus List'
        screen='BusList' />
      <PageImage
        image={require('../images/direction.png')}
        text='Navigator'
        screen='Navigator' />
      <PageImage
        image={require('../images/map.png')}
        text='Search'
        screen='Search' />
      <PageImage
        image={require('../images/operator.png')}
        text='Contact Us'
        screen='Contact' />
      <PageImage
        image={require('../images/settings.png')}
        text='Settings'
        screen='Settings' />
      <View style={styles.copyRightView}>
        <Text style={styles.copyRightText}>Copyright (c) by Minh Le</Text>
      </View>
    </View>
  );
};

const PageImage = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeIconContainer}>
      <TouchableOpacity 
        style={styles.homeIconView}
        onPress={() => {
          navigation.navigate(props.screen);
        }}>
        <Image
          style={styles.functionIcon} 
          source={props.image}/>
        <Text style={styles.homeIconText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 30,
    justifyContent: 'center'
  },
  homeIconContainer: {
    width: '50%',
    padding: 20,
    alignItems: 'center',
  },
  homeIconView: {
    width: 65,
    height: 80,
    textAlign: 'center'
  },
  functionIcon: {
    width: 65,
    height: 65,
    // tintColor: '#3262a8',
    marginBottom: 10
  },
  homeIconText: {
    color: '#3262a8',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  copyRightView: {
    position: 'absolute',
    bottom: 20,
  },
  copyRightText: {
    color: '#bbb'
  }
});
export default Home;

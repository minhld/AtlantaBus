import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useIsFocused } from "@react-navigation/native";

const Settings2 = () => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused){ 
      console.log('goto settings screen');
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text>Setting screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
});

export default Settings2;

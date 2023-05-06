import { openDatabase } from 'react-native-sqlite-storage';

export const loadDb = async () => {
  console.log('loading DB...');
  var db = openDatabase({ name: 'atlantaBus.db' });
};

export const unloadDb = async () => {
  console.log('unloading DB...');

};
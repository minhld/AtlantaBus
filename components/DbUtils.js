import { openDatabase } from 'react-native-sqlite-storage';
import * as Constants from '../components/Constants';

var db;

export const loadDb = async () => {
  console.log('loading DB...');
  db = openDatabase({ name: 'atlantaBus.db' });
};

export const saveToDb = async (content) => {
  db.transaction(txn => {
    txn.executeSql('', [], (tx, res) => {
      console.log();
    });
  });
};

export const unloadDb = async () => {
  console.log('unloading DB...');

};
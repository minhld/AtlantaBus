import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import RNFS from 'react-native-fs';

import * as DbUtils from '../components/DbUtils';
import * as Constants from '../components/Constants';

const Settings = () => {
  const [fileExist, setFileExist] = useState(false); 
  const [downloadInfo, setDownloadInfo] = useState(''); 
  const [downloadPercentage, setDownloadPercentage] = useState(0); 
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(async () => {
    const isFileDownloaded = await Constants.isFileDownloaded();
    setFileExist(isFileDownloaded);
  }, []);

  const downloadFile = async () => {
    setIsDownloading(true);
    const downloadPath = Constants.getDownloadPath(); 
    if (!(await RNFS.exists(downloadPath))) {
      console.log('creating download folder...');
      await RNFS.mkdir(downloadPath);
    }
    if (await Constants.isFileDownloaded()) {
      await Constants.downloadFile((data) => {
        setDownloadPercentage(data.bytesWritten / data.contentLength);
      }, 
      (res) => {
        if (res && res.statusCode === 200 && res.bytesWritten > 0) {
          Constants.unzipFile();
          setFileExist(true);
        } else {
          setFileExist(false);
        }
      });
    } else {
      console.log('file exist');
      Constants.unzipFile();
    }
    setIsDownloading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.downloadView}>
        {fileExist && 
          <View>
            <Text>Data file has been downloaded</Text>
            <Text>{Constants.getDownloadFile()}</Text>
          </View>
        }
        {!fileExist && <Text>Data file missing</Text>}
        <ProgressBar 
          progress={downloadPercentage} 
          color={'#3262a8'} 
          visible={isDownloading}
          style={styles.downloadProgress} />
      </View>
      <TouchableOpacity
        style={styles.downloadBtn}
        onPress={downloadFile}
        underlayColor='#fff'>
        <Text style={styles.downloadBtnText}>Download</Text>
       </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  downloadView: {
    width: '100%',
    height: 80,
  },
  downloadProgress: {
    height: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  downloadBtn: {
    width: 200,
    height: 35,
    textAlign: 'center',
    backgroundColor: '#3262a8',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eee',
    justifyContent: 'center',
  },
  downloadBtnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
});

export default Settings;

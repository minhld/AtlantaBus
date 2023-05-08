import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import * as DbUtils from '../components/DbUtils';

const Settings = () => {
  const [fileExist, setFileExist] = useState(false); 
  const [downloadInfo, setDownloadInfo] = useState(''); 
  const [downloadPercentage, setDownloadPercentage] = useState(0); 
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadFile = async () => {
    setIsDownloading(true);
    const dbPath = Constants.getDbPath(); 
    // check and create sqlite folder
    if (!(await FileSystem.getInfoAsync(dbPath)).exists) {
      console.log('creating SQLite folder ');
      await FileSystem.makeDirectoryAsync(dbPath);
    }
    const downloadFilePath = Constants.getDbFilePath();
    const downloadResumable = FileSystem.createDownloadResumable(
      Constants.DB_URL,
      downloadFilePath,
      {},
      updateProgress
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log("Finished downloading ", uri);
    } catch (e) {
      console.error(e);
    }
    setIsDownloading(false);
  };
  
  const updateProgress = downloadProgress => {
    const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
    console.log(JSON.stringify(downloadProgress));
    setDownloadPercentage(progress);
  };

  return (
    <View style={styles.container}>
      <View style={styles.downloadView}>
        <Text>Database has been loaded</Text>
        <ProgressBar 
          progress={0.3} 
          color={'#3262a8'} 
          visible={true}
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

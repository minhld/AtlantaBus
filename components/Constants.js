import RNFS from 'react-native-fs';
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive'

export const DB_URL = 'https://dl.dropboxusercontent.com/s/rfvkazlywzccyx8/marta.zip';
export const FILE_ZIP_FILE = 'marta.zip';
export const DB_FILENAME = 'atlantaBus.db';

export const getDownloadPath = () => {
  return RNFS.DownloadDirectoryPath + '/marta';
};

export const getDownloadFile = () => {
  return getDownloadPath() + '/' + FILE_ZIP_FILE;
}

export const isFileDownloaded = async () => {
  const downloadFile = getDownloadFile();
  return await RNFS.exists(downloadFile);
}

export const isFileExist = async (filePath) => {
  return await RNFS.exists(filePath);
}

export const unzipFile = async () => {
  const targetPath = getDownloadPath();
  const sourcePath = getDownloadFile();

  unzip(sourcePath, targetPath)
  .then((path) => {
    console.log('unzip completed', path);
    const routeFilePath = path + '/routes.txt'; 
    RNFS.exists(routeFilePath).then(exist => {
      if (exist) {
        console.log('file ', routeFilePath, 'created');
      } else {
        console.error('file ', routeFilePath, 'failed to create');
      }
    });
  })
  .catch((error) => {
    console.error('unzip failed ', error)
  });
};

export const getDbPath = () => {
  return RNFS.DownloadDirectoryPath + '/' + DB_FILENAME;
};
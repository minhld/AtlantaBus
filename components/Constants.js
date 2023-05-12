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

export const downloadFile = async (onProgress, onFinish) => {
  const options = {
    fromUrl: DB_URL,
    toFile: getDownloadFile(),
    progress: data => onProgress(data),
    headers: {}
  };
  const response = RNFS.downloadFile(options);
  return response.promise.then(async res => onFinish(res));
};

export const unzipFile = () => {
  const targetPath = getDownloadPath();
  const sourcePath = getDownloadFile();

  unzip(sourcePath, targetPath)
  .then((path) => {
    console.log('unzip completed');
  })
  .catch((error) => {
    console.error(error)
  });
};

export const getDbPath = () => {
  return RNFS.DownloadDirectoryPath + '/' + DB_FILENAME;
};
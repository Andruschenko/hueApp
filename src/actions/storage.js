import { Platform } from 'react-native';
import fs from 'react-native-fs';

import { img2 } from '../mocks/image';
import { oneRed } from '../mocks/one-red';

export const getRealImagePath = path => {
  const matches = path.match(/^file:\/{2}(.+\.jpg)$/);
  return matches[1] || path;
};

export const retrieveBase64ImageFromStorage = imagePath => {
  const path = getRealImagePath(imagePath);

  if (path && fs.exists(path)) {
    return Promise.resolve()
      .then(() => fs.readFile(path, 'base64'))
      .then(image => `data:image/jpeg;base64,${image}`)
  } else {
    // TODO: Remove this else case
    return oneRed || img2;
  }

  // console.log('stat(imagePath)', fs.stat(matches[1]));
  // console.log('iOS: MainBundlePath', fs.MainBundlePath);
  // console.log('Android: DocumentDirectoryPath', fs.DocumentDirectoryPath);
  // console.log('CachesDirectoryPath', fs.CachesDirectoryPath);
  // console.log('PicturesDirectoryPath', fs.PicturesDirectoryPath);

};

/**
 * Store as id of newly created board
 */
export const copyFileToPermanentStorage = (image, id) => {
  const path = getRealImagePath(image);
  let basePath = '';
  Platform.OS === 'ios' ? basePath = fs.MainBundlePath : fs.DocumentDirectoryPath;
  let imagePath = `${basePath}/images`;

  return Promise.resolve()
    .then(() => fs.mkdir(imagePath))
    .then(() => fs.copyFile(path, `${imagePath}/${id}.jpg`))
    .then(result => console.log('result form copy', result));
};

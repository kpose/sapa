import storage from '@react-native-firebase/storage';

export const getImageUrl = async (image: string) => {
  if (!image) {
    return;
  }
  const filename = image.substring(image.lastIndexOf('/') + 1);
  const imageRef = storage().ref(filename);
  await imageRef.putFile(image, {contentType: 'image/jpg'}).catch(error => {
    console.log(error);
  });
  const url = await imageRef.getDownloadURL();
  return url;
};

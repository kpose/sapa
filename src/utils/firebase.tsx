import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const getAllWallets = (email: string) => {
  firestore()
    .collection('wallets')
    .where('email', '==', email)
    .orderBy('createdAt', 'desc')
    .onSnapshot(querySnapshot => {
      let wallets: any = [];
      querySnapshot.forEach(doc => {
        wallets.push({
          walletId: doc.id,
          title: doc.data().title,
          transactions: doc.data().transactions,
          createdAt: doc.data().createdAt,
        });
      });
    });
  return;
};

export const uploadedImage = async (imageUri: string) => {
  if (!imageUri) {
    return;
  }
  const filename = imageUri.substring(imageUri.lastIndexOf('/') + 1);
  const imageRef = storage().ref(filename);
  await imageRef.putFile(imageUri, {contentType: 'image/jpg'}).catch(error => {
    console.log(error);
  });
  const imageUrl = await imageRef.getDownloadURL().catch(error => {
    console.log(error);
  });
  return imageUrl;
};

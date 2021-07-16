import firestore from '@react-native-firebase/firestore';

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

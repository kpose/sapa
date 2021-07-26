import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import {View, FlatList} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal, Modal, Surface} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

/* utils and files */
import {colors, hp} from '~utils';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {setAllWallets, setEmail} from '~redux/userSlice';
import {ThemeContext} from '~context/ThemeCotext';
import {AddWalletType, AddWallet} from '~modals';
import {RouteStackProps} from '~definitions/navigationTypes';
import {useAppDispatch, useAppSelector} from '~redux/reduxhooks';
import {WalletCard, ContentHeader, NoWalletAnime} from '~components';
import {setNeeded} from '~redux/walletSlice';

const Home = ({navigation}: RouteStackProps) => {
  const walletModalRef = useRef<Modalize>(null);
  const [showmodal, setShowmodal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [wallets, setWallets] = useState([]);
  const {theme} = useContext(ThemeContext);
  const {email} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  //const {needed} = useAppSelector(state => state.wallet);

  useEffect(() => {
    const user: any = auth().currentUser;
    if (user) {
      dispatch(setEmail(user.email));
    }
  }, []);

  useEffect(() => {
    getWallets();
    return () => getWallets();
  }, [wallets]);

  const getWallets = firestore()
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
      setWallets(wallets);
      //dispatch(setNeeded(wallets));
    });

  const openAddModal = () => {
    setShowmodal(true);
    walletModalRef.current?.close();
  };

  const keyExtractor = useCallback(item => item.walletId.toString(), []);

  const renderWallets = useCallback(({item}) => <WalletCard data={item} />, []);

  return (
    <>
      <Modalize
        ref={walletModalRef}
        modalHeight={hp(28)}
        withHandle={false}
        modalStyle={{
          backgroundColor:
            theme.type === 'dark' ? colors.DARK_GRAY : colors.WHITE,
        }}>
        <AddWalletType onPressManual={openAddModal} />
      </Modalize>

      <Portal>
        <Modal
          visible={showmodal}
          onDismiss={() => setShowmodal(false)}
          contentContainerStyle={styles.modal}>
          <AddWallet close={() => setShowmodal(false)} email={email} />
        </Modal>
      </Portal>

      <View style={styles.container}>
        <ContentHeader openPress={() => walletModalRef.current?.open()} />

        {wallets.length ? (
          <FlatList
            data={wallets}
            renderItem={renderWallets}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            maxToRenderPerBatch={7}
            windowSize={7}
          />
        ) : (
          <NoWalletAnime />
        )}
      </View>
    </>
  );
};

export default Home;

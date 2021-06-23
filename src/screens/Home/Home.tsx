import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import {View, FlatList} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal, Modal} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

/* utils and files */
import {WalletCard, ContentHeader, NoWalletAnime} from '~components';
import {AddWalletType, AddWallet} from '~modals';
import {colors, hp} from '~utils';
import {ThemeContext} from '~context/ThemeCotext';
import styles from './styles';
import {RouteStackProps} from '~definitions/navigationTypes';
import {useAppDispatch, useAppSelector} from '~redux/reduxhooks';
import auth from '@react-native-firebase/auth';
import {setEmail} from '~redux/userSlice';

const Home = ({navigation}: RouteStackProps) => {
  const walletModalRef = useRef<Modalize>(null);
  const [showmodal, setShowmodal] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [wallets, setWallets] = useState([]);
  const {theme} = useContext(ThemeContext);
  const {email} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user: any = auth().currentUser;
    if (user) {
      dispatch(setEmail(user.email));
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    const subscriber = firestore()
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
        setLoading(false);
        setWallets(wallets);
      });
    return () => subscriber();
  }, [email]);

  const openModal = () => {
    walletModalRef.current?.open();
  };

  const openAddModal = () => {
    setShowmodal(true);
    walletModalRef.current?.close();
  };

  const keyExtractor = useCallback(item => item.walletId.toString(), []);

  const renderWallets = useCallback(
    ({item}) => (
      <WalletCard
        title={item.title}
        uid={item.walletId}
        transactions={item.transactions}
      />
    ),
    [],
  );

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
          contentContainerStyle={[
            styles.modal,
            {
              backgroundColor:
                theme.type === 'dark' ? colors.DARK_GRAY : colors.WHITE,
            },
          ]}>
          <AddWallet
            close={() => setShowmodal(false)}
            email={email}
            //getWallets={getWallets}
          />
        </Modal>
      </Portal>

      <View style={styles.container}>
        <ContentHeader openPress={openModal} />
        {/* {loading && <Text>loading ......</Text>} */}

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

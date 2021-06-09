import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import {View, FlatList} from 'react-native';
import {Modalize} from 'react-native-modalize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, Button, Portal, Modal} from 'react-native-paper';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

/* utils and files */
import {WalletCard} from '~components';
import {AddWalletType, AddWallet} from '~modals';
import {colors, hp, sizes} from '~utils';
import {ThemeContext} from '~context/ThemeCotext';
import styles from './styles';
import {RouteStackProps} from '~definitions/navigationTypes';
import {setEmail, setFirstName, setUsername} from '~redux/userReducer';

const Home = ({navigation}: RouteStackProps) => {
  const walletModalRef = useRef<Modalize>(null);
  const [showmodal, setShowmodal] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [wallets, setWallets] = useState();
  const {theme} = useContext(ThemeContext);
  const [bearertoken, setBearerToken] = useState<any>('');
  const dispatch = useDispatch();

  useEffect(() => {
    getToken();
    axios.defaults.headers.common = {Authorization: `${bearertoken}`};
    axios
      .get('https://us-central1-sapa-4bd2e.cloudfunctions.net/api/user')
      .then(response => {
        dispatch(setUsername(response.data.userCredentials.username));
        dispatch(setFirstName(response.data.userCredentials.firstName));
        dispatch(setEmail(response.data.userCredentials.email));
      })
      .catch(error => {
        console.log(error);
      });
  }, [bearertoken]);

  useEffect(() => {
    getWallets();
  }, []);

  const onRefresh = () => {
    setIsFetching(true);
    getWallets();
  };

  const getWallets = async () => {
    const token = await AsyncStorage.getItem('AuthToken');
    axios.defaults.headers.common = {Authorization: `${token}`};
    axios
      .get('https://us-central1-sapa-4bd2e.cloudfunctions.net/api/wallets')
      .then(response => {
        setWallets(response.data);
        setIsFetching(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getToken = async () => {
    const token = await AsyncStorage.getItem('AuthToken');
    setBearerToken(token);
  };

  const openModal = () => {
    walletModalRef.current?.open();
  };

  const openAddModal = () => {
    setShowmodal(true);
    walletModalRef.current?.close();
  };

  const renderWallets = useCallback(
    ({item}) => <WalletCard title={item.title} uid={item.walletId} />,
    [],
  );

  const keyExtractor = useCallback(item => item.walletId.toString(), []);

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
            getWallets={getWallets}
            token={bearertoken}
          />
        </Modal>
      </Portal>

      <View style={styles.container}>
        <View style={styles.walletsHeader}>
          <Button
            icon="plus"
            onPress={openModal}
            mode="contained"
            uppercase={false}
            style={styles.addWallet}
            labelStyle={[sizes.fonts.buttonText]}>
            Add wallet
          </Button>
          <Text style={[styles.edit, sizes.fonts.caption]}>Edit</Text>
        </View>

        <FlatList
          data={wallets}
          renderItem={renderWallets}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={7}
          windowSize={7}
          refreshing={isFetching}
          onRefresh={onRefresh}
        />
      </View>
    </>
  );
};

export default Home;

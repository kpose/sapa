import React, {useRef, useState, useContext} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import {RouteStackProps} from '~definitions/navigationTypes';
import {colors, hp, sizes} from '~utils';
import {Text, Button, Portal, Modal} from 'react-native-paper';

/* utils and files */
import {WalletCard} from '~components';
import {AddWalletType, AddWallet} from '~modals';
import {Modalize} from 'react-native-modalize';
import {ThemeContext} from '~context/ThemeCotext';

const Home = ({navigation}: RouteStackProps) => {
  const walletModalRef = useRef<Modalize>(null);
  const [showmodal, setShowmodal] = useState(false);
  const {theme} = useContext(ThemeContext);

  const openModal = () => {
    walletModalRef.current?.open();
  };

  const openAddModal = () => {
    setShowmodal(true);
    walletModalRef.current?.close();
  };
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
          <AddWallet />
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

        <ScrollView>
          <WalletCard />
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

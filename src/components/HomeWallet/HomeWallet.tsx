import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {Text, Button} from 'react-native-paper';
import {sizes} from '../../utils';

/* utils and files */
import WalletCard from '../WalletCard/WalletCard';

const HomeWallet = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.walletsHeader}>
        <Button
          icon="plus"
          mode="contained"
          uppercase={false}
          style={styles.addWallet}
          labelStyle={[sizes.fonts.buttonText]}>
          Add wallet
        </Button>
        <Text style={[styles.edit, sizes.fonts.caption]}>Edit</Text>
      </View>

      <WalletCard />
    </ScrollView>
  );
};

export default HomeWallet;

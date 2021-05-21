import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Text} from 'react-native-paper';

/* utils and files */
import {WalletInfo, LargeButton} from '../../components';
import {colors} from '../../utils';
import {fonts} from '../../utils/fonts';

const WalletSettings = () => {
  return (
    <View style={styles.container}>
      <WalletInfo title="Wallet name" icon="id-card" description="My wallet" />
      <WalletInfo title="Start balance" icon="cash" description="0" />
      <WalletInfo title="Currency" icon="currency-usd" description="NGN" />
      <View style={styles.divide} />
      <LargeButton
        title="Save"
        onPress={() => console.log('pressed')}
        color={colors.SECONDARY}
      />
      <TouchableOpacity style={styles.deleteContainer}>
        <Text style={[fonts.smallerCaption, styles.delete]}>Delete Wallet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WalletSettings;

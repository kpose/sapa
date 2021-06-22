import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Text} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

/* utils and files */
import {WalletInfo, LargeButton, Spinner} from '~components';
import {colors, sizes} from '~utils';
import {fonts} from '~utils/fonts';
import {useAppSelector} from '~redux/reduxhooks';
import {BottomTabProps} from '~definitions/navigationTypes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WalletSettings = ({navigation}: BottomTabProps) => {
  const {data} = useAppSelector(state => state.wallet);
  const {currency} = useAppSelector(state => state.user);
  const [loading, setLoading] = useState(false);

  const deleteWallet = () => {
    setLoading(true);
    const document = firestore().collection('wallets').doc(`${data.uid}`);
    document
      .delete()
      .then(() => {
        setLoading(false);
        navigation.goBack();
      })
      .catch(error => {
        setLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      {loading && <Spinner />}
      <WalletInfo title="Wallet name" icon="id-card" description={data.title} />
      <WalletInfo title="Start balance" icon="cash" description="0" />

      {/* currency row */}
      <View>
        <Text style={[fonts.smallerCaption, styles.title]}>Currency</Text>
        <View style={styles.details}>
          <Icon
            name="currency-usd"
            size={sizes.navigationIconSize}
            color={colors.DARK_GRAY}
            style={styles.icon}
          />
          <Text style={[fonts.caption]}>{currency}</Text>
          <TouchableOpacity>
            <Icon
              name="chevron-right"
              size={sizes.navigationIconSize}
              color={colors.LIGHT_GRAY}
              style={[styles.icon]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divide} />
      <LargeButton
        title="Save"
        onPress={() => console.log('pressed')}
        color={colors.SECONDARY}
      />
      <TouchableOpacity style={styles.deleteContainer} onPress={deleteWallet}>
        <Text style={[fonts.caption, styles.delete]}>Delete Wallet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WalletSettings;

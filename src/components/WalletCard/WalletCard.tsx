import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

/* utils and files */
import {Text, Surface, Button} from 'react-native-paper';
import {fonts} from '../../utils/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes} from '../../utils';

const WalletCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')}>
        <Surface style={styles.surface}>
          <View style={[styles.myWallet]}>
            <Text style={[fonts.bodyText, styles.wallet]}>My wallet</Text>
            <Text style={[fonts.caption]}>n0.00</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.days}>
              <Text style={[fonts.smallerCaption]}>Last 30 days</Text>
              <Text style={[fonts.caption]}>n0.00</Text>
            </View>

            <View>
              <Text style={[fonts.smallerCaption]}>Last 7 days</Text>
              <Text style={[fonts.caption]}>n0.00</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AddToWallet')}>
            <Icon
              name="plus"
              size={sizes.navigationIconSize}
              color={colors.WHITE}
            />
          </TouchableOpacity>
        </Surface>
      </TouchableOpacity>
    </View>
  );
};

export default WalletCard;

import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

/* styles and utils */
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes, wp} from '../../utils';
import {fonts} from '../../utils/fonts';

const AddToWalletBody = () => {
  const elsaped = Date.now();
  const today = new Date(elsaped).toDateString();
  console.log(today);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Icon
          name="calendar-month"
          color="lightgrey"
          size={sizes.navigationIconSize}
        />
        <Text style={[fonts.bodyText, {marginLeft: wp(4)}]}> {today}</Text>
      </View>

      <View style={styles.itemContainer}>
        <Icon
          name="briefcase-variant"
          color={colors.DARK_GRAY}
          size={sizes.navigationIconSize}
        />
        <Text style={[fonts.bodyText, {marginLeft: wp(4)}]}> Marchant</Text>
      </View>

      <View style={styles.itemContainer}>
        <Icon
          name="border-color"
          color={colors.DARK_GRAY}
          size={sizes.navigationIconSize}
        />
        <Text style={[fonts.bodyText, {marginLeft: wp(4)}]}>Note</Text>
      </View>

      <View style={styles.itemContainer}>
        <Icon
          name="wallet"
          color={colors.DARK_GRAY}
          size={sizes.navigationIconSize}
        />
        <Text style={[fonts.bodyText, {marginLeft: wp(4)}]}>Wallet</Text>
      </View>
    </View>
  );
};

export default AddToWalletBody;

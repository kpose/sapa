import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {BottomTabProps} from '~definitions/navigationTypes';
import {sizes} from '~utils';
import {ExpenseCard} from '~components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './styles';

const WalletDetails = ({route, navigation}: BottomTabProps) => {
  const {uid, title} = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/empty.png')}
        style={styles.emptyImage}
      />
      <Text style={[sizes.fonts.bodyText, styles.empty]}>It's empty here!</Text>
      <Text style={[sizes.fonts.smallerCaption]}>
        Tap on the + button to add your expense.
      </Text>
    </View>
  );
};

export default WalletDetails;

import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {BottomTabProps} from '~definitions/navigationTypes';
import {sizes} from '~utils';
import {EmptyAnime} from '~components';
import styles from './styles';

const WalletDetails = ({route, navigation}: BottomTabProps) => {
  const {uid, title, transactions} = route.params;
  console.log(transactions);

  return (
    <View style={styles.container}>
      {transactions && transactions.length ? (
        <Text>{'found'}</Text>
      ) : (
        <EmptyAnime />
      )}
    </View>
  );
};

export default WalletDetails;

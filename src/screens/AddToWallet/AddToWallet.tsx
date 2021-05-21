import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';

/* utils and files */
import {RouteStackProps} from '../../definitions/navigationTypes';
import {AddToWalletHeader, AddToWalletBody} from '../../components';

const AddToWallet = ({navigation}: RouteStackProps) => {
  return (
    <View style={styles.container}>
      <AddToWalletHeader closeScreen={() => navigation.goBack()} />
      <AddToWalletBody />
    </View>
  );
};

export default AddToWallet;

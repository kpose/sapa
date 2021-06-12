import React from 'react';
import {View} from 'react-native';
import styles from './styles';

/* utils and files */
import {RouteStackProps} from '~definitions/navigationTypes';
import {AddToWalletHeader, AddToWalletBody} from '~components';

const AddToWalletToo = ({navigation, route}: RouteStackProps) => {
  const data = route.params.params;
  const {uid, title, refresh} = data.params;

  return (
    <View style={styles.container}>
      <AddToWalletHeader
        closeScreen={() => navigation.goBack()}
        walletID={uid}
        refresh={refresh}
      />
      <AddToWalletBody title={title} />
    </View>
  );
};

export default AddToWalletToo;

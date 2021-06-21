import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';

/* utils and files */
import {EditWalletStackProps} from '~definitions/navigationTypes';
import {EditWalletHeader, EditWalletBody} from '~components';

const EditWallet = ({navigation, route}: EditWalletStackProps) => {
  const {date, image, marchant, category, amount, type, note} = route.params;

  return (
    <View style={styles.container}>
      <EditWalletHeader
        closeScreen={() => navigation.goBack()}
        type={type}
        value={amount}
      />
      <EditWalletBody
        date={date}
        marchant={marchant}
        note={note}
        image={image}
        category={category}
      />
    </View>
  );
};

export default EditWallet;

import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {fonts} from '~utils/fonts';
import styles from './styles';

interface Props {
  openPress: () => void;
}

const ContentHeader = ({openPress}: Props) => {
  return (
    <View style={styles.walletsHeader}>
      <Button
        icon="plus"
        onPress={openPress}
        mode="contained"
        uppercase={false}
        style={styles.addWallet}
        labelStyle={[fonts.buttonText]}>
        Add wallet
      </Button>
      <Text style={[styles.edit, fonts.caption]}>Edit</Text>
    </View>
  );
};

export default ContentHeader;

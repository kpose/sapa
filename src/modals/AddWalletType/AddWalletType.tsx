import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

/* utils and files */
import {Text, Surface} from 'react-native-paper';
import {colors, hp, wp} from '~utils';
import {fonts} from '~utils/fonts';

interface Props {
  onPressManual: () => void;
}

const AddWalletModal = ({onPressManual}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressManual}>
        <Text style={[styles.title, fonts.itemTitle]}>
          {' '}
          Create a new wallet
        </Text>
        <Text style={[styles.description, fonts.caption]}>
          Add your expenses manually
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} disabled={true}>
        <Text style={[fonts.itemTitle, {fontWeight: 'bold'}]}>
          Connect your bank account
        </Text>
        <Text style={[fonts.caption, {marginTop: hp(0.5)}]}>
          Let us add your transactions automatically
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWalletModal;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: wp(95),
    height: hp(10),
    borderWidth: wp(0.5),
    borderRadius: wp(5),
    borderColor: colors.PRIMARY,
    marginTop: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    width: wp(95),
    height: hp(10),
    borderWidth: wp(0.5),
    borderRadius: wp(5),
    backgroundColor: colors.PRIMARY,
    borderColor: colors.PRIMARY,
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: colors.PRIMARY,
  },
  description: {
    marginTop: hp(0.5),
    color: colors.PRIMARY,
  },
});
